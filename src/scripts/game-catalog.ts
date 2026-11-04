import { CATALOG_PAGE_SIZE, gameFilters, getCatalogPage, type GameFilter } from '../lib/catalog';

export function initGameCatalog(catalog: HTMLElement) {
  const buttons = [...catalog.querySelectorAll<HTMLButtonElement>('[data-filter]')];
  const cards = [...catalog.querySelectorAll<HTMLElement>('[data-game-id]')];
  const status = catalog.querySelector<HTMLElement>('[data-catalog-status]');
  const previous = catalog.querySelector<HTMLButtonElement>('[data-page-previous]');
  const next = catalog.querySelector<HTMLButtonElement>('[data-page-next]');
  const more = catalog.querySelector<HTMLElement>('[data-catalog-more]');
  const reset = catalog.querySelector<HTMLButtonElement>('[data-filter-reset]');
  if (!status || !previous || !next || !more || !reset || !cards.length || !buttons.length) return;
  const controls = { status, previous, next, more };

  let filter: GameFilter = 'all';
  let page = 0;

  function render() {
    const state = getCatalogPage(filter, page);
    page = state.page;
    const visible = new Set(state.items.map((game) => game.id));
    cards.forEach((card) => {
      card.hidden = !visible.has(card.dataset.gameId ?? '');
    });
    buttons.forEach((button) =>
      button.setAttribute('aria-pressed', String(button.dataset.filter === filter)),
    );
    controls.status.textContent = `${state.first}–${state.last} z ${state.total} her`;
    controls.previous.setAttribute('aria-disabled', String(page === 0));
    controls.next.setAttribute('aria-disabled', String(page === state.pageCount - 1));
    const spareSlots = CATALOG_PAGE_SIZE - state.items.length;
    controls.more.hidden = spareSlots === 0;
    controls.more.dataset.slots = String(spareSlots);
  }

  function selectFilter(id: string | undefined) {
    const selected = gameFilters.find((item) => item.id === id);
    if (!selected) return;
    filter = selected.id;
    page = 0;
    render();
  }

  buttons.forEach((button) =>
    button.addEventListener('click', () => selectFilter(button.dataset.filter)),
  );
  previous.addEventListener('click', () => {
    if (page === 0) return;
    page -= 1;
    render();
  });
  next.addEventListener('click', () => {
    if (page >= getCatalogPage(filter, page).pageCount - 1) return;
    page += 1;
    render();
  });
  reset.addEventListener('click', () => {
    selectFilter('all');
    buttons[0].focus({ preventScroll: true });
  });
  document.querySelectorAll<HTMLAnchorElement>('[data-games-filter]').forEach((link) => {
    link.addEventListener('click', () => selectFilter(link.dataset.gamesFilter));
  });
  catalog.dataset.ready = '';
}
