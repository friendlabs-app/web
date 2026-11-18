export const site = {
  name: 'Hrátkov',
  origin: 'https://hratkov.friendlab.cz',
  supportEmail: 'friendlabs.app@gmail.com',
} as const;

export const sitePages = ['/', '/podpora/', '/soukromi/', '/soukromi/web/', '/podminky/'] as const;

export const websiteSchema = JSON.stringify({
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: site.name,
  alternateName: 'Hratkov',
  url: `${site.origin}/`,
}).replace(/</g, '\\u003c');
