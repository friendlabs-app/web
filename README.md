# Friendlabs web

Astro + TypeScript, statický výstup pro nasazení friendlabs.app na Cloudflare.
Node 22.23.4+ (ověřeno na Node 24), npm 9.6.5+.

```sh
npm ci
npm run dev
npm run check
npm test
npm run format:check
npm run build
npx playwright install chromium
npm run test:browser
npm run preview
```

## Stránky

- `/` — původní prezentace Friendlabs s odkazem na Hrátkov.
- `/hratkov/` — česká stránka aplikace, ochutnávka přiřazování mláďat,
  filtr a stránkování všech 12 her po čtyřech, Základ (3 hry zdarma)
  a Plus (plánovaných 60 Kč měsíčně).
- `/privacy/` — rozcestník zásad a informace o webu.
- `/privacy/hratkov/` — aktualizované zásady v EN/CZ/SK; původní adresy
  včetně kotev `#cs` a `#sk` zůstávají funkční.
- `/support/` — podpora, obnova a správa předplatného.
- `/hratkov/podminky/` — podmínky použití a informace o předplatném.

Obrázky a písma v `public/hratkov/` pocházejí z aplikace Hrátkov. Web
nepoužívá externí font server, analytiku, reklamní skripty ani formulář
sbírající kontakty. Ochutnávka hry pracuje pouze v prohlížeči a nic neodesílá.

## Úpravy a ověření

Interaktivní části mají samostatné Astro komponenty v `src/components/hratkov/`
a malé TypeScript moduly v `src/scripts/`. Výběr a stránkování her používají
společnou čistou funkci v `src/lib/catalog.ts`; testy ověřují dostupnost všech
her, bezplatný obsah, hranice stránek a prázdný katalog.

`npm run format` sjednotí formátování. CI kontroluje formát, typy, testy,
sestavení a balíček pro nasazení. Při změně rozložení ověřit filtry, všechny
stránky a tři kola ochutnávky na šířkách 320, 360, 390, 768, 1024 a 1440 px.
Kontroly zahrnují polohu okolních sekcí a scrollu, klávesnici, zvětšené písmo
a zobrazení všech dvanácti her bez JavaScriptu.

Společná hlavička je v `src/components/SiteHeader.astro`. Její rozměry, písmo
a navigace se definují pouze v této komponentě. Prohlížečové testy v
`tests/browser/navigation.spec.ts` skutečně proklikají všech šest stránek
a porovnají polohu i rozměry hlavičky, loga a každého odkazu na šesti šířkách
ve světlém i tmavém režimu. CI je spouští po sestavení. `PLAYWRIGHT_BASE_URL`
umožňuje stejnou kontrolu nad nasazeným webem.

Cloudflare načítá bezpečnostní hlavičky z `public/_headers`. CSP povoluje
skripty, styly, obrázky a písma pouze z vlastního webu; Astro proto sestavuje
skripty do externích souborů. Nové externí integrace vyžadují posouzení CSP
a zásad soukromí. Nevkládat inline skripty ani `style` atributy.

## Nasazení na Cloudflare

Web je napojený na Cloudflare Pages, projekt `friendlabs-web`, větev
`feat/hratkov-astro-site`. Build je `npm run build`, výstup `dist`, Node
`24.15.0`. Push do této větve spouští nové nasazení. Větev `main` zatím
obsahuje původní web; produkční větev přepnout až po sloučení PR.

Serverové funkce ani Astro adaptér nejsou potřeba. Historické přesměrování `/privacy/zviratkov` na
`/privacy/hratkov/` je v `public/_redirects` a součástí výstupu.

### Nastavení Pages

V dashboardu **Workers & Pages → friendlabs-web → Settings → Builds**:

- repo `friendlabs-app/web`, produkční větev `feat/hratkov-astro-site`;
- framework Astro, build `npm run build`, výstup `dist`;
- kořen repozitáře, proměnná `NODE_VERSION=24.15.0`.

Veřejný náhled je `https://friendlabs-web.pages.dev`. Doménu `friendlabs.app`
připojit až po kontrole náhledu; při změně DNS zachovat záznamy e-mailu
a dalších služeb. Konfigurace neobsahuje token ani automatickou změnu DNS.

### Samostatná alternativa přes Workers

`wrangler.jsonc` je připravený pro statické assets, ale v Pages se nepoužije.
`npm run check:deploy` ověří balíček bez publikování. Případný příkaz
`npm run deploy` cílí na Workers a vyžaduje vlastní přihlášení přes
`npx wrangler login`; k běžnému nasazení do stávajícího Pages projektu
se nepoužívá.

`vercel.json` obsahuje pouze `git.deploymentEnabled: false`, aby stávající
Git integrace Vercelu nevytvářela další automatická nasazení z této větve.
Nenahrazuje odpojení či smazání projektu v účtu Vercel a nemaže staré náhledy.

Dokumentace: [Cloudflare Pages a Astro](https://developers.cloudflare.com/pages/framework-guides/deploy-an-astro-site/),
[GitHub integrace](https://developers.cloudflare.com/pages/configuration/git-integration/github-integration/).

## Před vydáním

- Ověřit skutečného provozovatele (název/jméno, sídlo a případně IČO), právní
  tituly zpracování a skutečné retenční nastavení. Veřejné zásady zatím
  přebírají značku a kontakt Friendlabs ze stávajícího webu.
- Ověřit zpracovatelské podmínky a nastavení RevenueCat. Návrh vychází z
  anonymních ID a vypnuté atribuce, diagnostiky a reklamních identifikátorů.
  Změna konfigurace vyžaduje revizi zásad a údajů v obchodech.
- Zveřejnit aktualizované zásady **před** zapnutím RevenueCat v aplikaci.
  Pouhé sloučení kódu bez ověřeného nasazení tento krok nenahrazuje.
- Ověřit a nastavit skutečnou českou cenu Plus 60 Kč měsíčně v obchodech.
- Až bude aplikace dostupná, doplnit skutečné App Store a Google Play odkazy
  a změnit text o připravovaném vydání. Nepoužívat zástupné download odkazy.

Podklady k zásadám: [RevenueCat App Privacy](https://www.revenuecat.com/docs/platform-resources/apple-platform-resources/apple-app-privacy),
[RevenueCat Privacy](https://www.revenuecat.com/privacy),
[RevenueCat DPA](https://www.revenuecat.com/dpa).
