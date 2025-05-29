// src/app/sitemap.xml/route.ts
import { allTarotCards } from "@/lib/tarot-data"; // ← adjust if needed
import { NextResponse } from "next/server";

export async function GET() {
  const baseUrl = "https://mysticaltarotgarden.netlify.app";

  const staticRoutes = ["", "/about", "/contact"]; // Add other static routes if needed

  const staticUrls = staticRoutes.map(
    (route) => `<url><loc>${baseUrl}${route}</loc></url>`
  );

  const dynamicUrls = allTarotCards.map(
    (card) =>
      `<url><loc>${baseUrl}/card/${card.slug}</loc></url>` // using `id` as the slug
  );

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${[...staticUrls, ...dynamicUrls].join("\n")}
    </urlset>`;

  return new NextResponse(sitemap, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
