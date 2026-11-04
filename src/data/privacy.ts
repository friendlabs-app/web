export interface PrivacySection {
  heading: string;
  paragraphs: string[];
}
export interface PrivacyLanguage {
  id: 'en' | 'cs' | 'sk';
  title: string;
  updated: string;
  summary: string;
  sections: PrivacySection[];
}

// Describes the shipped app configuration, not optional features in RevenueCat.
export const privacy: readonly PrivacyLanguage[] = [
  {
    id: 'en',
    title: 'Privacy policy',
    updated: 'Last updated: 4 November 2026',
    summary:
      'Child settings and game activity stay on the device. Optional subscriptions use RevenueCat to verify purchases and restore access. The app has no advertising, advertising tracking, or game-activity analytics.',
    sections: [
      {
        heading: 'Current test versions and local voices',
        paragraphs: [
          'Current test builds have paid subscriptions disabled. They do not initialise RevenueCat or send it requests. The RevenueCat sections below describe the planned version with subscriptions. Czech, Slovak and English have bundled recordings; other languages use an available local system voice. The app does not request remote speech synthesis or download voice data. If a suitable voice is unavailable, prompts stay on screen without speech.',
        ],
      },
      {
        heading: 'Who operates Hrátkov',
        paragraphs: [
          'Hrátkov is developed by Friendlabs, an independent app studio. For privacy requests and support, contact friendlabs.app@gmail.com. These terms describe the app; website privacy is explained separately on this website’s privacy page.',
        ],
      },
      {
        heading: 'Settings that stay on your device',
        paragraphs: [
          'The app stores the chosen language, picture style, child’s age group, optional gender, interests, sound preference, and onboarding status locally. Age and interests adapt the games. The app does not send these settings, drawings, answers, or game activity to Friendlabs or RevenueCat.',
          'There is no registration, login, chat, or public sharing feature. The app does not ask for a child’s name, contact details, location, photos, microphone, or advertising identifier. Local app data can be removed through the device’s app-data controls or by removing the app, subject to device backup settings.',
        ],
      },
      {
        heading: 'Subscriptions and RevenueCat',
        paragraphs: [
          'The three Basic games are available without a purchase. Hrátkov Plus is an optional subscription. Apple App Store or Google Play handles payment. Friendlabs and RevenueCat do not receive your payment-card details.',
          'The app uses RevenueCat, Inc. to verify subscription access and restore purchases. RevenueCat processes an automatically generated app-user identifier, product and transaction information, purchase receipts or purchase tokens, subscription status and expiry, and technical request information needed to provide the service. This identifier is pseudonymous: the app does not link it to a name, email address, or child profile.',
          'RevenueCat acts as a service provider processing subscription data on our behalf. Its dashboard also provides purchase and subscription statistics. We have disabled optional device-identifier collection, SDK diagnostics, attribution, and advertising integrations; we do not send game-activity events.',
        ],
      },
      {
        heading: 'When the app connects to the internet',
        paragraphs: [
          'Images, fonts, sounds, and voice recordings are bundled with the app. Subscription checks and offer loading may connect to RevenueCat when the app starts, returns to the foreground, or an entitlement expires. Purchase and restore actions also require a connection. These checks can happen without opening the parent section.',
          'Purchases, settings, and external links are accessed through the parent section behind a arithmetic parental gate. External websites have their own privacy practices. Offline access to paid games depends on previously verified, unexpired subscription information cached by the SDK.',
        ],
      },
      {
        heading: 'Purpose, retention, and international processing',
        paragraphs: [
          'Subscription data is used to provide paid access, validate transactions, restore purchases, prevent misuse, and understand subscription performance. Local child settings are used only to personalise the app on the device. A support email is used to answer the request.',
          'We keep service data for as long as needed to administer access and respond to support, subject to applicable record-keeping requirements and the actual service-provider retention settings. Removing the app does not automatically erase purchase records held by the stores or RevenueCat and does not cancel a subscription.',
          'RevenueCat may process data in the United States. Its processing terms and Data Processing Addendum describe safeguards and international transfers. Apple and Google process store information under their own policies.',
        ],
      },
      {
        heading: 'Your choices and privacy requests',
        paragraphs: [
          'You can change local settings, manage or cancel your subscription in the relevant store, and contact friendlabs.app@gmail.com to request access, correction, or deletion of information we can identify, or to raise a privacy concern. We may need limited purchase-related information to locate a pseudonymous record; never send payment-card details or a child’s information.',
          'Depending on applicable law, rights may also include restriction, portability, or objection to processing and a complaint to the competent data-protection authority. We assess requests against the information we actually hold and any legal retention obligations.',
        ],
      },
      {
        heading: 'Children, support, and changes',
        paragraphs: [
          'Hrátkov is intended for children approximately two to five years old, with purchases handled by a parent or guardian. We do not build advertising profiles or upload a child’s game activity. If you believe a child’s information has reached us, contact us so we can investigate.',
          'If you email us, your email address and message are processed to handle your request. Please avoid sending children’s personal information. We update this page when the app’s data practices change and revise the date above.',
        ],
      },
    ],
  },
  {
    id: 'cs',
    title: 'Zásady ochrany soukromí',
    updated: 'Poslední aktualizace: 4. listopadu 2026',
    summary:
      'Nastavení dítěte a průběh hraní zůstávají v zařízení. Volitelné předplatné ověřujeme přes RevenueCat, abychom mohli odemknout a obnovit placené hry. Aplikace neobsahuje reklamy, reklamní sledování ani analytiku hraní.',
    sections: [
      {
        heading: 'Současné testovací verze a místní hlasy',
        paragraphs: [
          'Současné testovací buildy mají placené předplatné vypnuté. RevenueCat neinicializují a neposílají mu požadavky. Níže uvedený popis RevenueCat se týká připravované verze s předplatným. Čeština, slovenština a angličtina mají přibalené nahrávky; ostatní jazyky používají dostupný místní systémový hlas. Aplikace nevyžaduje vzdálenou syntézu řeči ani stahování hlasových dat. Pokud vhodný hlas chybí, zadání zůstává na obrazovce bez hlasu.',
        ],
      },
      {
        heading: 'Kdo provozuje Hrátkov',
        paragraphs: [
          'Hrátkov vyvíjí Friendlabs, nezávislé studio aplikací. S dotazy na soukromí a žádostmi o podporu se obraťte na friendlabs.app@gmail.com. Tyto zásady popisují aplikaci; soukromí samotného webu popisujeme zvlášť na stránce soukromí tohoto webu.',
        ],
      },
      {
        heading: 'Nastavení, která zůstávají v zařízení',
        paragraphs: [
          'Aplikace lokálně ukládá jazyk, styl obrázků, věkovou skupinu dítěte, volitelné pohlaví, zájmy, nastavení zvuku a dokončení úvodního nastavení. Věk a zájmy přizpůsobují hry. Tato nastavení, kresby, odpovědi ani průběh hraní neposíláme Friendlabs ani RevenueCat.',
          'Aplikace nemá registraci, přihlášení, chat ani veřejné sdílení. Nežádá jméno dítěte, kontaktní údaje, polohu, fotografie, přístup k mikrofonu ani reklamní identifikátor. Lokální data lze odstranit v nastavení zařízení nebo odstraněním aplikace; případné zálohy se řídí nastavením zařízení.',
        ],
      },
      {
        heading: 'Předplatné a RevenueCat',
        paragraphs: [
          'Tři hry v Základu jsou dostupné bez nákupu. Hrátkov Plus je volitelné předplatné. Platbu zpracovává Apple App Store nebo Google Play. Friendlabs ani RevenueCat nedostávají údaje o vaší platební kartě.',
          'Pro ověření přístupu a obnovení nákupů používáme službu RevenueCat, Inc. Ta zpracovává automaticky vytvořený identifikátor uživatele aplikace, informace o produktu a transakci, účtenku nebo nákupní token, stav a platnost předplatného a technické údaje požadavků potřebné pro poskytování služby. Identifikátor je pseudonymní: aplikace ho nepropojuje se jménem, e-mailem ani profilem dítěte.',
          'RevenueCat zpracovává údaje o předplatném naším jménem. Jeho dashboard poskytuje také statistiky nákupů a předplatného. Volitelný sběr identifikátorů zařízení, diagnostiku SDK, atribuci a reklamní integrace máme vypnuté; události z hraní neposíláme.',
        ],
      },
      {
        heading: 'Kdy se aplikace připojuje k internetu',
        paragraphs: [
          'Obrázky, písma, zvuky a nahrávky jsou součástí aplikace. Ověření předplatného a načtení nabídky může komunikovat s RevenueCat při spuštění, návratu aplikace do popředí a skončení platnosti oprávnění. Připojení vyžaduje také nákup a obnovení nákupů. Ověřování může probíhat i bez otevření rodičovské sekce.',
          'Nákupy, nastavení a externí odkazy jsou dostupné v rodičovské sekci za rodičovskou početní bránou. Otevřené weby mají vlastní zásady soukromí. Placené hry jsou offline dostupné podle dříve ověřeného a dosud platného oprávnění uloženého v mezipaměti SDK.',
        ],
      },
      {
        heading: 'Účel, uchovávání a zpracování v zahraničí',
        paragraphs: [
          'Údaje o předplatném používáme k poskytování placeného přístupu, ověřování transakcí, obnově nákupů, ochraně před zneužitím a vyhodnocení fungování předplatného. Lokální nastavení dítěte slouží pouze k přizpůsobení aplikace v zařízení. E-mail podpory používáme k vyřízení požadavku.',
          'Údaje služby uchováváme po dobu potřebnou ke správě přístupu a řešení podpory, s ohledem na případné zákonné povinnosti a skutečně nastavené doby uchování u poskytovatelů. Smazání aplikace automaticky neodstraní záznamy obchodů ani RevenueCat a nezruší předplatné.',
          'RevenueCat může údaje zpracovávat ve Spojených státech. Jeho zpracovatelské podmínky a Data Processing Addendum popisují ochranná opatření a mezinárodní předávání. Apple a Google zpracovávají údaje obchodů podle vlastních zásad.',
        ],
      },
      {
        heading: 'Vaše možnosti a žádosti k soukromí',
        paragraphs: [
          'Můžete změnit lokální nastavení, spravovat nebo zrušit předplatné v příslušném obchodě a napsat na friendlabs.app@gmail.com se žádostí o přístup, opravu či výmaz údajů, které dokážeme dohledat, nebo s dotazem k soukromí. Pro dohledání pseudonymního záznamu můžeme potřebovat omezené údaje o nákupu; neposílejte údaje o kartě ani informace o dítěti.',
          'Podle použitelných předpisů mohou práva zahrnovat také omezení zpracování, přenositelnost, námitku nebo stížnost u příslušného dozorového úřadu. Žádost posoudíme podle údajů, které skutečně máme, a případných povinností údaje uchovat.',
        ],
      },
      {
        heading: 'Děti, podpora a změny zásad',
        paragraphs: [
          'Hrátkov je určen přibližně dětem od dvou do pěti let; nákupy řeší rodič nebo zákonný zástupce. Nevytváříme reklamní profily a nenahráváme průběh hraní dítěte. Pokud se domníváte, že jsme obdrželi osobní informace o dítěti, kontaktujte nás, abychom to mohli prověřit.',
          'Když nám napíšete, zpracujeme vaši e-mailovou adresu a obsah zprávy k vyřízení požadavku. Neposílejte prosím osobní informace o dětech. Při změně zacházení s údaji upravíme tuto stránku a datum nahoře.',
        ],
      },
    ],
  },
  {
    id: 'sk',
    title: 'Zásady ochrany súkromia',
    updated: 'Posledná aktualizácia: 4. novembra 2026',
    summary:
      'Nastavenia dieťaťa a priebeh hrania zostávajú v zariadení. Voliteľné predplatné overujeme cez RevenueCat, aby sme mohli odomknúť a obnoviť platené hry. Aplikácia neobsahuje reklamy, reklamné sledovanie ani analytiku hrania.',
    sections: [
      {
        heading: 'Súčasné testovacie verzie a miestne hlasy',
        paragraphs: [
          'Súčasné testovacie buildy majú platené predplatné vypnuté. RevenueCat neinicializujú a neposielajú mu požiadavky. Nižšie uvedený opis RevenueCat sa týka pripravovanej verzie s predplatným. Čeština, slovenčina a angličtina majú pribalené nahrávky; ostatné jazyky používajú dostupný miestny systémový hlas. Aplikácia nevyžaduje vzdialenú syntézu reči ani sťahovanie hlasových dát. Ak vhodný hlas chýba, zadanie zostáva na obrazovke bez hlasu.',
        ],
      },
      {
        heading: 'Kto prevádzkuje Hrátkov',
        paragraphs: [
          'Hrátkov vyvíja Friendlabs, nezávislé štúdio aplikácií. S otázkami o súkromí a žiadosťami o podporu sa obráťte na friendlabs.app@gmail.com. Tieto zásady opisujú aplikáciu; súkromie webu opisujeme osobitne na stránke súkromia tohto webu.',
        ],
      },
      {
        heading: 'Nastavenia, ktoré zostávajú v zariadení',
        paragraphs: [
          'Aplikácia lokálne ukladá jazyk, štýl obrázkov, vekovú skupinu dieťaťa, voliteľné pohlavie, záujmy, nastavenie zvuku a dokončenie úvodného nastavenia. Vek a záujmy prispôsobujú hry. Tieto nastavenia, kresby, odpovede ani priebeh hrania neposielame Friendlabs ani RevenueCat.',
          'Aplikácia nemá registráciu, prihlásenie, chat ani verejné zdieľanie. Nežiada meno dieťaťa, kontaktné údaje, polohu, fotografie, prístup k mikrofónu ani reklamný identifikátor. Lokálne údaje možno odstrániť v nastavení zariadenia alebo odstránením aplikácie; prípadné zálohy sa riadia nastavením zariadenia.',
        ],
      },
      {
        heading: 'Predplatné a RevenueCat',
        paragraphs: [
          'Tri hry v Základe sú dostupné bez nákupu. Hrátkov Plus je voliteľné predplatné. Platbu spracúva Apple App Store alebo Google Play. Friendlabs ani RevenueCat nedostávajú údaje o vašej platobnej karte.',
          'Na overenie prístupu a obnovenie nákupov používame službu RevenueCat, Inc. Spracúva automaticky vytvorený identifikátor používateľa aplikácie, informácie o produkte a transakcii, účtenku alebo nákupný token, stav a platnosť predplatného a technické údaje požiadaviek potrebné na poskytovanie služby. Identifikátor je pseudonymný: aplikácia ho neprepája s menom, e-mailom ani profilom dieťaťa.',
          'RevenueCat spracúva údaje o predplatnom v našom mene. Jeho dashboard poskytuje aj štatistiky nákupov a predplatného. Voliteľný zber identifikátorov zariadenia, diagnostiku SDK, atribúciu a reklamné integrácie máme vypnuté; udalosti z hrania neposielame.',
        ],
      },
      {
        heading: 'Kedy sa aplikácia pripája na internet',
        paragraphs: [
          'Obrázky, písma, zvuky a nahrávky sú súčasťou aplikácie. Overenie predplatného a načítanie ponuky môže komunikovať s RevenueCat pri spustení, návrate aplikácie do popredia a skončení platnosti oprávnenia. Pripojenie vyžaduje aj nákup a obnovenie nákupov. Overovanie môže prebiehať aj bez otvorenia rodičovskej sekcie.',
          'Nákupy, nastavenia a externé odkazy sú dostupné v rodičovskej sekcii za rodičovskou početnou bránou. Otvorené weby majú vlastné zásady súkromia. Platené hry sú offline dostupné podľa skôr overeného a stále platného oprávnenia uloženého v pamäti SDK.',
        ],
      },
      {
        heading: 'Účel, uchovávanie a spracúvanie v zahraničí',
        paragraphs: [
          'Údaje o predplatnom používame na poskytovanie plateného prístupu, overovanie transakcií, obnovu nákupov, ochranu pred zneužitím a vyhodnotenie fungovania predplatného. Lokálne nastavenia dieťaťa slúžia iba na prispôsobenie aplikácie v zariadení. E-mail podpory používame na vybavenie požiadavky.',
          'Údaje služby uchovávame po dobu potrebnú na správu prístupu a riešenie podpory, s ohľadom na prípadné zákonné povinnosti a skutočne nastavené doby uchovávania u poskytovateľov. Vymazanie aplikácie automaticky neodstráni záznamy obchodov ani RevenueCat a nezruší predplatné.',
          'RevenueCat môže údaje spracúvať v Spojených štátoch. Jeho spracovateľské podmienky a Data Processing Addendum opisujú ochranné opatrenia a medzinárodné prenosy. Apple a Google spracúvajú údaje obchodov podľa vlastných zásad.',
        ],
      },
      {
        heading: 'Vaše možnosti a žiadosti o súkromie',
        paragraphs: [
          'Môžete zmeniť lokálne nastavenia, spravovať alebo zrušiť predplatné v príslušnom obchode a napísať na friendlabs.app@gmail.com so žiadosťou o prístup, opravu či vymazanie údajov, ktoré dokážeme dohľadať, alebo s otázkou o súkromí. Na dohľadanie pseudonymného záznamu môžeme potrebovať obmedzené údaje o nákupe; neposielajte údaje o karte ani informácie o dieťati.',
          'Podľa platných predpisov môžu práva zahŕňať aj obmedzenie spracúvania, prenosnosť, námietku alebo sťažnosť na príslušnom dozornom úrade. Žiadosť posúdime podľa údajov, ktoré skutočne máme, a prípadných povinností údaje uchovať.',
        ],
      },
      {
        heading: 'Deti, podpora a zmeny zásad',
        paragraphs: [
          'Hrátkov je určený približne deťom od dvoch do piatich rokov; nákupy rieši rodič alebo zákonný zástupca. Nevytvárame reklamné profily a nenahrávame priebeh hrania dieťaťa. Ak sa domnievate, že sme dostali osobné informácie o dieťati, kontaktujte nás, aby sme to mohli preveriť.',
          'Keď nám napíšete, spracujeme vašu e-mailovú adresu a obsah správy na vybavenie požiadavky. Neposielajte prosím osobné informácie o deťoch. Pri zmene zaobchádzania s údajmi upravíme túto stránku a dátum hore.',
        ],
      },
    ],
  },
];
