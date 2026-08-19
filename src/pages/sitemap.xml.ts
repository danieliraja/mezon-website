import type { APIRoute } from 'astro';

const SITE = 'https://mezon.com.br';

/** prioridade e frequência por rota — ajuste ao criar novas páginas */
const routes: Array<{ path: string; priority: string; changefreq: string }> = [
  { path: '/',            priority: '1.0', changefreq: 'weekly'  },
  { path: '/servicos',    priority: '0.9', changefreq: 'monthly' },
  { path: '/contato',     priority: '0.8', changefreq: 'monthly' },
  { path: '/privacidade', priority: '0.3', changefreq: 'yearly'  },
  { path: '/termos',      priority: '0.3', changefreq: 'yearly'  },
];

export const GET: APIRoute = () => {
  const lastmod = new Date().toISOString().split('T')[0];

  const urls = routes
    .map(
      (r) => `  <url>
    <loc>${SITE}${r.path === '/' ? '/' : r.path}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${r.changefreq}</changefreq>
    <priority>${r.priority}</priority>
  </url>`
    )
    .join('\n');

  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`,
    { headers: { 'Content-Type': 'application/xml; charset=utf-8' } }
  );
};
