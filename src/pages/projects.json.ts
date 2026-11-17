import { index } from "../data/studio";
import { site } from "../../site.config.mjs";
export function GET() {
  return Response.json({
    studio: "Chips Studio",
    verified: site.verified,
    projects: index,
  });
}
