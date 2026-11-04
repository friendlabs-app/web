# Výkon — 4. 11. 2026

Web zachovává vzhled i všechny znaky fontů; TTF zdroje zůstávají pro kompatibilitu starých URL. Nové CSS a preloady používají lokální WOFF2. OFL licence zůstávají přístupné na webu. FontTools ověřil shodný seznam glyphů i Unicode cmap po konverzi.

| Font | TTF B | WOFF2 B |
| --- | ---: | ---: |
| Baloo2 ExtraBold | 417564 | 95024 |
| Nunito Bold | 125464 | 41496 |
| Nunito ExtraBold | 125416 | 42788 |
| Celkem | 668444 | 179308 |

Úspora fontů 73,2 %. Žádné zúžení abecedy ani změna tvaru písma.

Lighthouse 13.6.0, výchozí simulované mobilní připojení/CPU, headless Chrome, lokálně servírované produkční výstupy před změnou a po ní. Mediány tří běhů:

| Metrika | Před | Po |
| --- | ---: | ---: |
| Performance | 100 | 100 |
| FCP / LCP | 1204 ms | 1205 ms |
| CLS | 0 | 0 |
| TBT | 0 ms | 0 ms |
| Celkový přenos | 1013497 B | 524373 B |

Přenos klesl o 48,3 %. Rozdíl 1 ms v LCP je šum, nikoli zrychlení ani regrese. Jde o laboratorní data, nikoli měření skutečných návštěvníků / Core Web Vitals. Lokální server neposílal produkční kompresi Cloudflare, absolutní přenos se na CDN může lišit. Katalog dál přednačítá obrázky, aby přepínání her nevytvářelo prázdná místa.

Ověření: Astro check bez chyb, 5 unit testů, 14 lokálních browser testů (1 test CDN přesměrování se lokálně vynechává). Testy hlavičky pokrývají 12 kombinací šířky a motivu.

Raw Lighthouse JSON + protokoly: `/private/tmp/hratkov-web-perf/` na pracovním Macu; kopie v auditních artefaktech aplikace.
