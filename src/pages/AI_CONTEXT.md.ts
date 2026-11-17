import { index } from "../data/studio";
import { copy } from "../data/copy";
import { site } from "../../site.config.mjs";
export function GET() {
  return new Response(
    [
      "# Chips Studio",
      copy.intro.en,
      copy.a2.en,
      "Verified " + site.verified,
      "Website " + site.origin + site.base,
      "Kaiyo " + site.portfolio,
      ...index.map((p) =>
        [
          p.name,
          p.description.en,
          p.status.en,
          p.code.en,
          p.canonical,
          ...p.resources.map((x) => x.url),
        ].join(" | "),
      ),
    ].join("\n\n") + "\n",
  );
}
