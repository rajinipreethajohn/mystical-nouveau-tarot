// src/app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mystical Nouveau Tarot",
  description: "Experience the magic of tarot through mystical nouveau art",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <title>Mystical Nouveau Tarot</title>
        <meta name="description" content="Experience the magic of tarot through mystical nouveau art" />

        {/* 🌐 Open Graph Meta Tags */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Mystical Nouveau Tarot" />
        <meta property="og:description" content="Experience the magic of tarot through mystical nouveau art" />
        <meta property="og:image" content="https://mysticaltarotgarden.netlify.app/images/mystical-nouveau-tarot-cover.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:url" content="https://mysticaltarotgarden.netlify.app" />
        <meta property="og:site_name" content="Mystical Nouveau Tarot" />

        {/* 🐦 Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Mystical Nouveau Tarot" />
        <meta name="twitter:description" content="Experience the magic of tarot through mystical nouveau art" />
        <meta name="twitter:image" content="https://mysticaltarotgarden.netlify.app/images/mystical-nouveau-tarot-cover.jpg" />

        {/* 📊 Google Analytics */}
        {process.env.NEXT_PUBLIC_GA_ID && (
          <>
            <script
              async
              src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
            ></script>
            <script
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
                `,
              }}
            />
          </>
        )}
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
