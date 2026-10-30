import assert from 'node:assert/strict';
import { test } from 'node:test';
import { games } from '../src/data/games.ts';
import { getCatalogPage } from '../src/lib/catalog.ts';

test('all twelve games can be reached once across the catalog pages', () => {
  const ids = [];
  const first = getCatalogPage('all');
  for (let page = 0; page < first.pageCount; page += 1) {
    const state = getCatalogPage('all', page);
    ids.push(...state.items.map((game) => game.id));
    assert.equal(state.items.length, 4);
    assert.equal(state.first, page * 4 + 1);
    assert.equal(state.last, (page + 1) * 4);
  }
  assert.deepEqual(
    ids,
    games.map((game) => game.id),
  );
  assert.equal(new Set(ids).size, 12);
});

test('free games match the actual free tier, without including paid games', () => {
  const state = getCatalogPage('free');
  assert.deepEqual(
    state.items.map((game) => game.id),
    ['match', 'home', 'color'],
  );
  assert.equal(state.total, 3);
  assert.equal(state.pageCount, 1);
});

test('a smaller category clamps a previous page and preserves the source catalog', () => {
  const before = structuredClone(games);
  const state = getCatalogPage('dinos', 2);
  assert.equal(state.page, 0);
  assert.deepEqual(
    state.items.map((game) => game.id),
    ['dig', 'hatch'],
  );
  assert.equal(state.total, 2);
  assert.equal(state.first, 1);
  assert.equal(state.last, 2);
  assert.deepEqual(games, before);
});

test('a partial last page reports its real range and never wraps', () => {
  const state = getCatalogPage('animals', 100);
  assert.equal(state.page, 1);
  assert.equal(state.total, 7);
  assert.equal(state.first, 5);
  assert.equal(state.last, 7);
  assert.equal(state.items.length, 3);
});

test('empty catalogs and invalid page numbers have a usable first-page state', () => {
  for (const page of [-1, Number.NaN, Number.POSITIVE_INFINITY]) {
    assert.equal(getCatalogPage('all', page).page, 0);
  }
  const state = getCatalogPage('all', 10, []);
  assert.deepEqual(state.items, []);
  assert.equal(state.page, 0);
  assert.equal(state.pageCount, 1);
  assert.equal(state.first, 0);
  assert.equal(state.last, 0);
});
