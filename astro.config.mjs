import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";

import icon from "astro-icon";

import sitemap from "@astrojs/sitemap";

const base = "https://aviv.sh";

// https://astro.build/config
export default defineConfig({
  site: base,
  integrations: [tailwind(), icon(), sitemap()],
});
