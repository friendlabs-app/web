import { games, type Game, type GameCategory } from '../data/games.ts';

export type GameFilter = 'all' | 'free' | GameCategory;
export const CATALOG_PAGE_SIZE = 4;
export const gameFilters = [
  { id: 'all', label: 'Všechny hry' },
  { id: 'free', label: 'Zdarma' },
  { id: 'animals', label: 'Zvířátka' },
  { id: 'create', label: 'Tvoření' },
  { id: 'dinos', label: 'Dinosauři' },
] as const satisfies readonly { id: GameFilter; label: string }[];

export function getCatalogPage(
  filter: GameFilter,
  requestedPage = 0,
  catalog: readonly Game[] = games,
) {
  const matches = catalog.filter(
    (game) => filter === 'all' || (filter === 'free' && game.free) || game.category === filter,
  );
  const pageCount = Math.max(1, Math.ceil(matches.length / CATALOG_PAGE_SIZE));
  const page = Math.min(
    pageCount - 1,
    Math.max(0, Number.isFinite(requestedPage) ? Math.floor(requestedPage) : 0),
  );
  const start = page * CATALOG_PAGE_SIZE;

  return {
    items: matches.slice(start, start + CATALOG_PAGE_SIZE),
    page,
    pageCount,
    total: matches.length,
    first: matches.length ? start + 1 : 0,
    last: Math.min(start + CATALOG_PAGE_SIZE, matches.length),
  };
}
