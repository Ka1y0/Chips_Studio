import type { AstroUserConfig } from "astro";
import { site } from "./site.config.mjs";

const config = {
  site: site.origin,
  base: site.base,
  trailingSlash: "always",
  devToolbar: { enabled: false },
} satisfies AstroUserConfig;

export default config;
