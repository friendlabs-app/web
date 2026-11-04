import { demoRounds } from '../data/demo';

export function initGameDemo(demo: HTMLElement) {
  const parents = [...demo.querySelectorAll<HTMLImageElement>('[data-parent]')];
  const result = demo.querySelector<HTMLElement>('[data-result]');
  const next = demo.querySelector<HTMLButtonElement>('[data-next]');
  const progress = demo.querySelector<HTMLElement>('[data-round]');
  const choices = [...demo.querySelectorAll<HTMLButtonElement>('[data-choice]')];
  if (!result || !next || !progress || parents.length !== demoRounds.length || !choices.length)
    return;

  let round = 0;
  let solved = false;

  choices.forEach((button) =>
    button.addEventListener('click', () => {
      if (solved) return;
      choices.forEach((choice) => choice.classList.remove('is-retry'));
      if (button.dataset.choice !== demoRounds[round].baby) {
        button.classList.add('is-retry');
        result.textContent = 'Zkus najít jiné mládě. Máš na to čas.';
        return;
      }
      solved = true;
      button.classList.add('is-correct');
      button.setAttribute('aria-pressed', 'true');
      result.textContent = demoRounds[round].success;
      next.disabled = false;
    }),
  );

  next.addEventListener('click', () => {
    if (!solved) return;
    round = (round + 1) % demoRounds.length;
    solved = false;
    choices.forEach((button) => {
      button.classList.remove('is-correct', 'is-retry');
      button.setAttribute('aria-pressed', 'false');
    });
    parents.forEach((image) => {
      image.hidden = image.dataset.parent !== demoRounds[round].parent;
    });
    progress.textContent = `${round + 1} / ${demoRounds.length}`;
    progress.setAttribute('aria-label', `Zvířátko ${round + 1} ze ${demoRounds.length}`);
    result.textContent = 'Najdeš moje mládě?';
    // Keep the keyboard ready for the next answer without moving the page.
    choices[0].focus({ preventScroll: true });
    next.disabled = true;
  });
}
