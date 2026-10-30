# Friendlabs web

Astro + TypeScript, statický výstup pro nasazení friendlabs.app na Cloudflare.
Node 22.23.4+ (ověřeno na Node 24), npm 9.6.5+.

```sh
npm ci
npm run dev
npm run check
npm run build
npm run preview
```

## Stránky

- `/` — původní prezentace Friendlabs s odkazem na Hrátkov.
- `/hratkov/` — česká stránka aplikace, ochutnávka přiřazování mláďat,
  filtr všech 12 her, Základ (3 hry zdarma) a Plus (plánovaných 60 Kč měsíčně).
- `/privacy/` — rozcestník zásad a informace o webu.
- `/privacy/hratkov/` — aktualizované zásady v EN/CZ/SK; původní adresy
  včetně kotev `#cs` a `#sk` zůstávají funkční.
- `/support/` — podpora, obnova a správa předplatného.
- `/hratkov/podminky/` — podmínky použití a informace o předplatném.

Obrázky a písma v `public/hratkov/` pocházejí z aplikace Hrátkov. Web
nepoužívá externí font server, analytiku, reklamní skripty ani formulář
sbírající kontakty. Ochutnávka hry pracuje pouze v prohlížeči a nic neodesílá.

## Nasazení na Cloudflare

Web se sestaví do `dist/`. Pro nový projekt je připravený Cloudflare Worker
se statickými assets v `wrangler.jsonc`; serverové funkce ani Astro adaptér
nejsou potřeba. Historické přesměrování `/privacy/zviratkov` na
`/privacy/hratkov/` je v `public/_redirects` a součástí výstupu.

```sh
npm run build
npm run check:deploy        # kontrola balíčku bez přihlášení a publikování
npx wrangler login          # přihlášení k vlastnímu Cloudflare účtu
npm run deploy             # publikování po ověření zásad a obsahu
```

Při prvním nasazení použít adresu Workeru na `workers.dev`. Připojení
produkční `friendlabs.app` udělat až po ověření nového webu a domény v účtu.
Konfigurace úmyslně neobsahuje account ID, token ani automatickou změnu DNS.

### Propojení GitHubu v dashboardu

1. Založit Cloudflare účet a ověřit e-mail.
2. Otevřít **Compute → Workers & Pages → Create application** a připojit GitHub.
3. Povolit přístup jen k repozitáři `friendlabs-app/web`.
4. Zvolit název Workeru `friendlabs-web`, build `npm run build`, deploy
   `npx wrangler deploy`, kořen repozitáře a Node `24.15.0` (pokud jej
   dashboard automaticky nepřevezme ze souboru `.node-version`).
5. Pro přípravu použít větev `feat/hratkov-astro-site`. Větev `main` zatím
   obsahuje původní web; produkční větev změnit po kontrole a sloučení PR.
6. Ověřit veřejný náhled a až potom připojit `friendlabs.app` přes domény
   Workeru. Při převodu DNS zachovat stávající záznamy pro e-mail a další služby.

Při použití již existujícího Cloudflare Pages projektu je stejný statický
výstup kompatibilní: build `npm run build`, output `dist`, Node `24.15.0`.
Nastavení Workeru se pro Pages nepoužije.

`vercel.json` obsahuje pouze `git.deploymentEnabled: false`, aby stávající
Git integrace Vercelu nevytvářela další automatická nasazení z této větve.
Nenahrazuje odpojení či smazání projektu v účtu Vercel a nemaže staré náhledy.

Dokumentace: [Workers se statickými assets](https://developers.cloudflare.com/workers/static-assets/get-started/),
[GitHub integrace](https://developers.cloudflare.com/workers/ci-cd/builds/git-integration/github-integration/).

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
