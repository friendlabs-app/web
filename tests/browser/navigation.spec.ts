import { expect, test, type Page } from '@playwright/test';

async function headerGeometry(page: Page) {
  return page.locator('.site-header').evaluate((header) => {
    const elements = [header, ...header.querySelectorAll('.brand, .brand svg, nav, nav a')];
    return elements.map((element) => {
      const { x, y, width, height } = element.getBoundingClientRect();
      return { x, y, width, height };
    });
  });
}

for (const width of [320, 360, 390, 768, 1024, 1440]) {
  for (const colorScheme of ['light', 'dark'] as const) {
    test(`header stays in place across pages at ${width}px in ${colorScheme} mode`, async ({
      page,
    }) => {
      await page.setViewportSize({ width, height: 1000 });
      await page.emulateMedia({ colorScheme });
      await page.goto('/');
      await page.evaluate(() => document.fonts.ready);
      const baseline = await headerGeometry(page);

      const links = [
        { selector: '.site-header a[href="/podpora/"]', path: '/podpora/' },
        { selector: '.site-footer a[href="/soukromi/"]', path: '/soukromi/' },
        { selector: '.site-header .brand', path: '/' },
        { selector: '.site-footer a[href="/podminky/"]', path: '/podminky/' },
        { selector: '.site-footer a[href="/soukromi/web/"]', path: '/soukromi/web/' },
      ];

      for (const link of links) {
        await page.locator(link.selector).click();
        await expect(page).toHaveURL(link.path);
        // A URL can change before the new document's render-blocking CSS has loaded.
        await page.waitForLoadState('load');
        await page.evaluate(() => document.fonts.ready);
        const current = await headerGeometry(page);
        expect(current).toHaveLength(baseline.length);
        current.forEach((bounds, index) => {
          for (const key of ['x', 'y', 'width', 'height'] as const) {
            expect(
              Math.abs(bounds[key] - baseline[index][key]),
              `${link.path}: header item ${index} ${key}`,
            ).toBeLessThan(0.5);
          }
        });
      }
    });
  }
}
