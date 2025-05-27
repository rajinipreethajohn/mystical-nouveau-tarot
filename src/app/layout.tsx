// src/app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mystical Nouveau Tarot",
  description: "Experience the magic of tarot through mystical nouveau art",
  openGraph: {
    title: "Mystical Nouveau Tarot",
    description: "Experience the magic of tarot through mystical nouveau art",
    url: "https://mysticaltarotgarden.netlify.app",
    siteName: "Mystical Nouveau Tarot",
    type: "website",
    images: [
      {
        url: "https://mysticaltarotgarden.netlify.app/images/mystical-nouveau-tarot-cover.jpg",
        width: 1200,
        height: 630,
        alt: "Mystical Nouveau Tarot Cover",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mystical Nouveau Tarot",
    description: "Experience the magic of tarot through mystical nouveau art",
    images: ["https://mysticaltarotgarden.netlify.app/images/mystical-nouveau-tarot-cover.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
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
