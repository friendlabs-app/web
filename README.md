# Hrátkov web

Samostatný web aplikace Hrátkov v Astro a TypeScriptu. Cílová adresa je
**https://hratkov.friendlab.cz/**. Firemní prezentace není součástí webu;
Friendlabs je uvedené pouze jako tvůrce aplikace.

Node 22.23.4+ (ověřeno na Node 24), npm 9.6.5+.

```sh
npm ci
npm run dev
npm run format:check
npm run check
npm test
npm run build
npx playwright install chromium
npm run test:browser
npm run preview
```

## Stránky a obsah

- `/` — Hrátkov, hratelná ochutnávka, filtrovaný katalog 12 her a ceník.
- `/podpora/` — česká podpora, obnovení nákupů a správa předplatného.
- `/soukromi/` — zásady aplikace v CZ/SK/EN; kotvy `#cs`, `#sk`, `#en`.
- `/soukromi/web/` — zásady samotného webu.
- `/podminky/` — podmínky aplikace a předplatného.
- `/sitemap.xml`, `/robots.txt` — adresy finální domény pro vyhledávače.
- `404.html` — skutečná chybová stránka bez indexování.

Aplikace připravuje osm jazyků (CZ, SK, EN, DE, ES, FR, PT, PL). Nové jazyky
používají dostupný místní hlas zařízení; právní stránky jsou v CZ/SK/EN.

Základ obsahuje tři hry zdarma. Hrátkov Plus obsahuje všech 12 her za
plánovaných 60 Kč měsíčně při vydání v Česku. Cena se potvrzuje v obchodě;
web neprovádí nákupy. Odkazy na stažení přibudou až po vydání aplikace.

Obrázky, písma a předlohy v `public/hratkov/` pocházejí z aplikace. Web nemá
analytiku, reklamní sledovače, externí písma ani formulář na sběr kontaktů.
Ochutnávka hry neodesílá odpovědi. Kontaktní e-mail zůstává
`friendlabs.app@gmail.com`; nový e-mail na koupené doméně nepředpokládáme.

## Kód a kontroly

`src/data/site.ts` je společný zdroj finální adresy, seznamu veřejných
stránek a strukturovaných dat WebSite. `astro.config.mjs` používá stejnou
adresu. Canonical, Open Graph, sitemap a robots tak odkazují na stejný web.

Hlavička v `src/components/SiteHeader.astro` má společné rozměry a styly
napříč stránkami. Katalog a ochutnávka mají samostatné komponenty a malé
TypeScript moduly. Výběr a stránkování sdílejí čistou funkci
`src/lib/catalog.ts`; testy hlídají všechny hry, bezplatný obsah a hranice.

Prohlížečové testy porovnávají polohu hlavičky, loga a odkazů při proklikání
všech stránek na šířkách 320–1440 px ve světlém i tmavém režimu. Kontrolují
rovněž canonical, metadata, strukturovaná data, sitemapu, robots a stav 404.
`PLAYWRIGHT_BASE_URL` umožňuje stejnou kontrolu nasazeného webu včetně
přesměrování starých cest. `npm run format` sjednotí formátování.

Cloudflare používá `public/_headers`. Skripty, styly, obrázky a písma se
načítají pouze z vlastního webu. Build přidá do CSP pouze hash přesného
JSON-LD bloku z `src/data/site.ts`; ostatní inline skripty nepovoluje.
Adresy `*.pages.dev` mají hlavičku `X-Robots-Tag: noindex`; vlastní doména
ji nemá. Build vytváří statický výstup `dist/` bez serverových funkcí.

## Cloudflare Pages a doména

Existující projekt je **friendlabs-web**, repo **friendlabs-app/web**,
nasazovaná větev **feat/hratkov-astro-site**. Build: `npm run build`, output:
`dist`, `NODE_VERSION=24.15.0`. Push do této větve spouští nasazení na
https://friendlabs-web.pages.dev/. Větev `main` zatím obsahuje původní web.

Pro připojení nové domény:

1. V projektu otevřít **Custom domains → Set up a domain** a přidat
   `hratkov.friendlab.cz`.
2. Pokud DNS spravuje Cloudflare, potvrdit automatický DNS záznam.
   Jinak u správce DNS přidat CNAME `hratkov` → `friendlabs-web.pages.dev`.
3. Počkat na aktivaci domény a HTTPS a ověřit úvod, podporu i zásady přímo
   přes `https://hratkov.friendlab.cz/`.

Samotný CNAME bez přidání domény v Pages nestačí. Zakoupení domény samo
nepotvrzuje, že její DNS nebo subdoména už fungují.

Pokud mají také `friendlab.cz` a `www.friendlab.cz` přesměrovávat na Hrátkov,
je potřeba je přidat do stejného Pages projektu a podle průvodce připojit DNS.
Přesměrování těchto hostů už obsahuje `public/_redirects`. Ostatní subdomény
nejsou tímto projektem ovlivněné a mohou patřit dalším aplikacím.

Staré cesty `/hratkov/`, `/support/`, `/privacy/`, `/privacy/hratkov/`,
`/privacy/zviratkov/` a `/hratkov/podminky/` mají odpovídající 301 přesměrování.
To platí na doménách obsluhovaných tímto Pages projektem. Přesměrování
ze staré `friendlabs.app` vyžaduje samostatné nastavení jejího hostingu.

`wrangler.jsonc` je pouze alternativa pro samostatný Worker a v Pages se
nepoužije. `npm run check:deploy` ověří balíček bez publikování.
`vercel.json` zakazuje další automatická nasazení této větve na Vercel.

## Před vydáním aplikace

Doplnit skutečného provozovatele, ověřit právní tituly, dobu uchování údajů
a skutečné nastavení RevenueCat. Aktualizované zásady musí být ověřené na
finální doméně před zapnutím RevenueCat v aplikaci. Samotný náhled Pages
nebo změna odkazů v kódu tuto podmínku nenahrazují.

Dokumentace: [vlastní domény v Pages](https://developers.cloudflare.com/pages/configuration/custom-domains/),
[Astro na Pages](https://developers.cloudflare.com/pages/framework-guides/deploy-an-astro-site/).
