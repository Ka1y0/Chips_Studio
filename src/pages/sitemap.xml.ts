import { routes, slugs } from "../data/studio";
import { site } from "../../site.config.mjs";
export function GET() {
  const urls = (["en", "zh"] as const).flatMap((l) =>
    slugs.map(
      (s) => "<url><loc>" + site.origin + routes(l, s) + "</loc></url>",
    ),
  );
  return new Response(
    '<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">' +
      urls.join("") +
      "</urlset>",
    { headers: { "Content-Type": "application/xml" } },
  );
}
