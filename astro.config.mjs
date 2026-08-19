// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// ATENÇÃO: confirme o domínio real antes de publicar.
// `site` alimenta canonical, Open Graph e sitemap — se estiver errado,
// o Google indexa URLs que não existem.
export default defineConfig({
  site: 'https://mezon.com.br',
  trailingSlash: 'never',
  build: { format: 'file' },
  vite: {
    plugins: [tailwindcss()],
  },
});
