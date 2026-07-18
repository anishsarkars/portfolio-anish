import { defineConfig, sessionDrivers } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import react from '@astrojs/react';
import markdoc from '@astrojs/markdoc';
import keystatic from '@keystatic/astro';
import vercel from '@astrojs/vercel';
import sitemap from '@astrojs/sitemap';
const reactEntrypoints = [
  'react',
  'react-dom',
  'react-dom/server',
  'react/jsx-runtime',
  'react/jsx-dev-runtime',
];
// Deps Vite finds only at request time (content/markdoc render, visitor counter)
// rather than in its initial scan. Left alone, it re-optimizes mid-session and
// each SSR reload briefly nulls React → "Invalid hook call" floods on dev start.
// Pre-bundling them up front means one optimize pass, no reloads. Dev-only;
// build/prod are unaffected.
const ssrPrebundle = [
  'astro/zod',
  '@astrojs/markdoc/components',
  '@astrojs/markdoc/runtime',
  '@astrojs/markdoc/runtime-assets-config',
  '@fingerprintjs/fingerprintjs',
  '@upstash/redis',
];
function dedupeReactInSSR() {
  return {
    name: 'dedupe-react-in-ssr',
    // Dev-only: pre-bundling these during `astro build` makes esbuild try to
    // resolve virtual modules like `astro:assets` and fails (esp. on Windows).
    apply: 'serve',
    configEnvironment(name) {
      if (name !== 'client') {
        return { optimizeDeps: { include: [...reactEntrypoints, ...ssrPrebundle] } };
      }
    },
  };
}

export default defineConfig({
  site: 'https://aniish.me',
  prefetch: { prefetchAll: true },
  adapter: vercel(),
  session: { driver: sessionDrivers.lruCache() },
  integrations: [react(), markdoc(), keystatic(), sitemap()],
  vite: {
    plugins: [tailwindcss(), dedupeReactInSSR()],
    resolve: {
      dedupe: reactEntrypoints,
    },
    optimizeDeps: {
      include: ['@fingerprintjs/fingerprintjs'],
      exclude: ['virtual:keystatic-config'],
    },
  },
});
