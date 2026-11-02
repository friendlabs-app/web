import { expect, test } from '@playwright/test';

const origin = 'https://hratkov.friendlab.cz';
const paths = ['/', '/podpora/', '/soukromi/', '/soukromi/web/', '/podminky/'];

test('every public page belongs to Hrátkov and uses the final canonical address', async ({
  page,
}) => {
  const errors: string[] = [];
  page.on('pageerror', (error) => errors.push(error.message));
  for (const path of paths) {
    const response = await page.goto(path);
    expect(response?.status()).toBe(200);
    await expect(page.locator('html')).toHaveAttribute('lang', 'cs');
    await expect(page.locator('h1')).toHaveCount(1);
    await expect(page.locator('.site-header .brand')).toHaveAccessibleName('Hrátkov — úvod');
    await expect(page.locator('link[rel="canonical"]')).toHaveAttribute('href', origin + path);
    await expect(page.locator('meta[property="og:url"]')).toHaveAttribute('content', origin + path);
    await expect(page.locator('meta[property="og:site_name"]')).toHaveAttribute(
      'content',
      'Hrátkov',
    );
    await expect(page.locator('meta[name="robots"]')).toHaveCount(0);
    const brokenLinks = await page
      .locator('a[href^="/"]')
      .evaluateAll((links) =>
        links
          .map((link) => link.getAttribute('href')!)
          .filter((href) => /\/(support|privacy)\//.test(href) || href === '/hratkov/'),
      );
    expect(brokenLinks).toEqual([]);
  }
  expect(errors).toEqual([]);
  await page.goto('/');
  const schema = JSON.parse(await page.locator('script[type="application/ld+json"]').innerText());
  expect(schema).toMatchObject({ '@type': 'WebSite', name: 'Hrátkov', url: `${origin}/` });
  await expect(page.getByRole('heading', { name: /Apps made by friends/i })).toHaveCount(0);
});

test('search engines receive the final public URLs and an actual 404 for missing pages', async ({
  request,
}) => {
  const sitemap = await request.get('/sitemap.xml');
  expect(sitemap.status()).toBe(200);
  expect((await sitemap.text()).match(/<loc>(.*?)<\/loc>/g)).toEqual(
    paths.map((path) => `<loc>${origin}${path}</loc>`),
  );
  const robots = await request.get('/robots.txt');
  expect(robots.status()).toBe(200);
  expect(await robots.text()).toContain(`Sitemap: ${origin}/sitemap.xml`);
  const missing = await request.get('/tahle-stranka-neexistuje/');
  expect(missing.status()).toBe(404);
  expect(await missing.text()).toContain('noindex, follow');
});

test('old public paths permanently redirect to the corresponding new page', async ({
  request,
  baseURL,
}) => {
  test.skip(
    !baseURL || new URL(baseURL).hostname === '127.0.0.1',
    'Cloudflare applies the redirect manifest during deployment.',
  );
  const redirects = [
    ['/hratkov/', '/'],
    ['/support/', '/podpora/'],
    ['/privacy/', '/soukromi/web/'],
    ['/privacy/hratkov/', '/soukromi/'],
    ['/privacy/zviratkov/', '/soukromi/'],
    ['/hratkov/podminky/', '/podminky/'],
  ];
  for (const [from, to] of redirects) {
    const response = await request.get(from, { maxRedirects: 0 });
    expect(response.status()).toBe(301);
    expect(new URL(response.headers().location, baseURL).pathname).toBe(to);
  }
});
