
import "./globals.css";
import NavBar from "@/components/NavBar";
import ClientWrapper from "../components/ClientWrapper";
import { metadata } from "./metadata";

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
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="canonical" href="https://mysticaltarotgarden.netlify.app/" />

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
        <meta name="keywords" content="tarot, tarot reading, major arcana, tarot cards, mystical tarot, boho tarot deck, daily tarot, free tarot reading" />

        {/* 🧠 Structured Data */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: `
            {
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "Mystical Nouveau Tarot",
              "url": "https://mysticaltarotgarden.netlify.app",
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://mysticaltarotgarden.netlify.app/search?q={search_term_string}",
                "query-input": "required name=search_term_string"
              }
            }
          `
        }} />

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
        <NavBar />
        <div className="pt-20">{children}</div>
        <ClientWrapper />
      </body>
    </html>
  );
}
