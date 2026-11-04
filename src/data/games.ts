export type GameCategory = 'animals' | 'create' | 'dinos';
export interface Game {
  id: string;
  title: string;
  detail: string;
  category: GameCategory;
  image: string;
  free: boolean;
}

export const games: readonly Game[] = [
  {
    id: 'match',
    title: 'Zvíře a mládě',
    detail: 'Které mládě patří k rodiči?',
    category: 'animals',
    image: '/hratkov/games/match.webp',
    free: true,
  },
  {
    id: 'home',
    title: 'Kde bydlím?',
    detail: 'Najděte zvířátkům jejich domov.',
    category: 'animals',
    image: '/hratkov/games/home.webp',
    free: true,
  },
  {
    id: 'color',
    title: 'Omalovánky',
    detail: 'Velké plochy pro malé malíře.',
    category: 'create',
    image: '/hratkov/games/color.svg',
    free: true,
  },
  {
    id: 'feed',
    title: 'Co zvířata jí',
    detail: 'Každý má chuť na něco jiného.',
    category: 'animals',
    image: '/hratkov/games/feed.webp',
    free: false,
  },
  {
    id: 'sounds',
    title: 'Kdo to je?',
    detail: 'Poznejte zvířátko podle zvuku.',
    category: 'animals',
    image: '/hratkov/games/sounds.webp',
    free: false,
  },
  {
    id: 'draw',
    title: 'Kreslení',
    detail: 'První čáry a vlastní nápady.',
    category: 'create',
    image: '/hratkov/games/draw.svg',
    free: false,
  },
  {
    id: 'pairs',
    title: 'Tvary a barvy',
    detail: 'Každý tvar najde svoje místo.',
    category: 'create',
    image: '/hratkov/games/pairs.webp',
    free: false,
  },
  {
    id: 'dig',
    title: 'Vykopávky',
    detail: 'Co se asi schovává pod pískem?',
    category: 'dinos',
    image: '/hratkov/games/dig.webp',
    free: false,
  },
  {
    id: 'hatch',
    title: 'Líhnutí vajec',
    detail: 'Ťuk, ťuk. Kdo vykoukne z vajíčka?',
    category: 'dinos',
    image: '/hratkov/games/hatch.webp',
    free: false,
  },
  {
    id: 'memory',
    title: 'Pexeso',
    detail: 'Otočte karty a najděte dvojice.',
    category: 'animals',
    image: '/hratkov/animals/puppy.webp',
    free: false,
  },
  {
    id: 'odd',
    title: 'Co je jiné?',
    detail: 'Jeden obrázek do řady nepatří.',
    category: 'animals',
    image: '/hratkov/animals/fox.webp',
    free: false,
  },
  {
    id: 'count',
    title: 'Počítání',
    detail: 'Kolik zvířátek se tu sešlo?',
    category: 'animals',
    image: '/hratkov/animals/duckling.webp',
    free: false,
  },
];
