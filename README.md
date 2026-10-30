# Friendlabs web

Astro + TypeScript, statický výstup pro stávající nasazení friendlabs.app na Vercelu.
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

## Nasazení

Vercel sestaví Astro příkazem `npm run build` a publikuje `dist/`.
Nastavení je v `vercel.json`; historické přesměrování
`/privacy/zviratkov` → `/privacy/hratkov/` je zachované.
V existujícím projektu Vercel ověřit, že ruční nastavení nevnucuje starý
build command nebo výstupní složku. Node runtime musí vyhovovat `package.json`.

Větev nebo PR může vytvořit preview při zapnutých Git preview deploymentech.
Do produkce se nasazuje podle stávajícího procesu repozitáře; samotný lokální
build neznamená publikování na friendlabs.app.

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
