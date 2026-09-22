#!/usr/bin/env node
// Regenerates the data-driven fragments of index.html (SoA stats, SoA theme
// bars, risk register bars) from documents/05-statement-of-applicability.md
// and documents/04-risk-register.md. Deterministic — no LLM involved.
//
// Run with: node scripts/sync-stats.mjs
// Exits 0 always; writes index.html in place only if content changed.

import { readFileSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, '..');

function readTableRows(markdown, sectionHeading) {
  const lines = markdown.split('\n');
  const start = lines.findIndex((l) => l.trim() === sectionHeading);
  if (start === -1) {
    throw new Error(`Section "${sectionHeading}" not found`);
  }
  const rows = [];
  let sawTable = false;
  for (let i = start + 1; i < lines.length; i++) {
    const line = lines[i];
    if (line.trim().startsWith('|')) {
      sawTable = true;
      const cells = line
        .split('|')
        .slice(1, -1)
        .map((c) => c.trim());
      rows.push(cells);
    } else if (sawTable && line.trim() === '') {
      break;
    }
  }
  if (rows.length < 2) {
    throw new Error(`No table rows found under "${sectionHeading}"`);
  }
  // Drop header row and the markdown separator row (e.g. |---|---|).
  return rows.slice(2);
}

function stripBold(s) {
  return s.replace(/\*\*/g, '').trim();
}

function toInt(s) {
  const n = parseInt(stripBold(s), 10);
  if (Number.isNaN(n)) throw new Error(`Expected an integer, got "${s}"`);
  return n;
}

// ---- Statement of Applicability ----------------------------------------

function parseSoa() {
  const md = readFileSync(join(root, 'documents/05-statement-of-applicability.md'), 'utf8');
  const rows = readTableRows(md, '## Summary').filter(
    (r) => !stripBold(r[0]).toLowerCase().startsWith('total'),
  );
  const themes = rows.map((r) => {
    const [themeRaw, total, applicable, na, implemented, partial, planned] = r;
    const m = stripBold(themeRaw).match(/^(\d+)\s*[—-]\s*(.+)$/);
    if (!m) throw new Error(`Could not parse theme label "${themeRaw}"`);
    return {
      num: m[1],
      name: m[2].trim(),
      total: toInt(total),
      applicable: toInt(applicable),
      na: toInt(na),
      implemented: toInt(implemented),
      partial: toInt(partial),
      planned: toInt(planned),
    };
  });
  const totals = themes.reduce(
    (acc, t) => ({
      total: acc.total + t.total,
      applicable: acc.applicable + t.applicable,
      na: acc.na + t.na,
      implemented: acc.implemented + t.implemented,
      partial: acc.partial + t.partial,
      planned: acc.planned + t.planned,
    }),
    { total: 0, applicable: 0, na: 0, implemented: 0, partial: 0, planned: 0 },
  );
  return { themes, totals };
}

function pct1(n, total) {
  return String(Math.round((n / total) * 1000) / 10);
}

function renderSoaStats({ totals }) {
  const rows = [
    ['Total Controls', totals.total],
    ['Applicable', totals.applicable],
    ['Implemented', totals.implemented],
    ['Partial', totals.partial],
    ['Not Applicable', totals.na],
  ];
  return rows
    .map(
      ([label, n]) =>
        `    <div class="soa-stat"><div class="stat-number">${n}</div><div class="stat-label">${label}</div></div>`,
    )
    .join('\n');
}

function renderSoaBars({ themes }) {
  return themes
    .map((t) => {
      const parts = [];
      if (t.implemented > 0) parts.push(`${t.implemented} implemented`);
      if (t.partial > 0) parts.push(`${t.partial} partial`);
      if (t.planned > 0) parts.push(`${t.planned} planned`);
      if (t.na > 0) parts.push(`${t.na} N/A`);
      const summary = `${parts.join(' / ')} &middot; ${t.total} controls`;

      const segs = [];
      if (t.implemented > 0) segs.push(`        <div class="seg-impl" style="width:${pct1(t.implemented, t.total)}%;"></div>`);
      if (t.partial > 0) segs.push(`        <div class="seg-partial" style="width:${pct1(t.partial, t.total)}%;"></div>`);
      if (t.planned > 0) segs.push(`        <div class="seg-planned" style="width:${pct1(t.planned, t.total)}%;"></div>`);
      if (t.na > 0) segs.push(`        <div class="seg-na" style="width:${pct1(t.na, t.total)}%;"></div>`);

      return (
        `    <div>\n` +
        `      <div class="theme-row-label"><span>Theme ${t.num} &middot; ${t.name}</span><span class="count">${summary}</span></div>\n` +
        `      <div class="stacked-bar">\n${segs.join('\n')}\n      </div>\n` +
        `    </div>`
      );
    })
    .join('\n');
}

// ---- Risk register -------------------------------------------------------

function parseRiskSummary() {
  const md = readFileSync(join(root, 'documents/04-risk-register.md'), 'utf8');
  const rows = readTableRows(md, '## Risk summary (for management review)');
  const byRating = {};
  for (const [rating, inherent, residual] of rows) {
    byRating[stripBold(rating)] = { inherent: toInt(inherent), residual: toInt(residual) };
  }
  const order = ['Critical', 'High', 'Medium', 'Low'];
  for (const r of order) {
    if (!byRating[r]) throw new Error(`Risk summary missing rating "${r}"`);
  }
  return { order, byRating };
}

const RISK_COLOR = {
  Critical: 'var(--crit)',
  High: 'var(--high)',
  Medium: 'var(--med)',
  Low: 'var(--low)',
};

function renderRiskBarRows(order, byRating, key, total) {
  return order
    .map((rating) => {
      const count = byRating[rating][key];
      const pct = Math.round((count / total) * 100);
      const width = count > 0 ? `${pct}%` : '1%';
      const style = count > 0 ? `width:${width};background:${RISK_COLOR[rating]};` : `width:${width};`;
      const label = count > 0 ? String(count) : '';
      return `        <div class="bar-row"><div class="bar-row-label">${rating}</div><div class="bar-track"><div class="bar-fill" style="${style}">${label}</div></div></div>`;
    })
    .join('\n');
}

function renderRiskBars({ order, byRating }) {
  const total = order.reduce((sum, r) => sum + byRating[r].inherent, 0);
  const inherentRows = renderRiskBarRows(order, byRating, 'inherent', total);
  const residualRows = renderRiskBarRows(order, byRating, 'residual', total);
  return (
    `      <div>\n` +
    `        <div class="bar-group-label">Inherent (before treatment) &middot; ${total} risks assessed</div>\n` +
    `${inherentRows}\n` +
    `      </div>\n` +
    `      <div style="margin-top:10px;">\n` +
    `        <div class="bar-group-label">Residual (after treatment)</div>\n` +
    `${residualRows}\n` +
    `      </div>`
  );
}

// ---- Splice into index.html ----------------------------------------------

function replaceBetween(html, marker, replacement) {
  const start = `<!-- AUTO:${marker}:start -->`;
  const end = `<!-- AUTO:${marker}:end -->`;
  const startIdx = html.indexOf(start);
  const endIdx = html.indexOf(end);
  if (startIdx === -1 || endIdx === -1 || endIdx < startIdx) {
    throw new Error(`Markers for "${marker}" not found in index.html`);
  }
  const before = html.slice(0, startIdx + start.length);
  const after = html.slice(endIdx);
  return `${before}\n${replacement}\n    ${after}`;
}

function main() {
  const soa = parseSoa();
  const risk = parseRiskSummary();

  const indexPath = join(root, 'index.html');
  let html = readFileSync(indexPath, 'utf8');
  const before = html;

  html = replaceBetween(html, 'soa-stats', renderSoaStats(soa));
  html = replaceBetween(html, 'soa-bars', renderSoaBars(soa));
  html = replaceBetween(html, 'risk-bars', renderRiskBars(risk));

  if (html !== before) {
    writeFileSync(indexPath, html);
    console.log('index.html updated from documents/*.md');
  } else {
    console.log('index.html already in sync with documents/*.md');
  }
}

main();
