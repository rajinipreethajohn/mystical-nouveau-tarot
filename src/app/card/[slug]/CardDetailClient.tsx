'use client';

import { notFound } from 'next/navigation';
import Image from 'next/image';
import { TarotCard } from '@/types';
import { useEffect, useState } from 'react';
import Section from '@/components/Section';
import Head from 'next/head'; // ✅ NEW import

export default function CardDetailClient({ card }: { card: TarotCard }) {
  const [isLastCard, setIsLastCard] = useState(false);

  useEffect(() => {
    const drawn = JSON.parse(sessionStorage.getItem('drawnCards') || '[]');
    setIsLastCard(drawn[drawn.length - 1]?.slug === card.slug);
  }, [card.slug]);

  if (!card) return notFound();

  const canonicalUrl = `https://mysticaltarotgarden.netlify.app/card/${card.slug}`;

  return (
    <>
      <Head>
        <link rel="canonical" href={canonicalUrl} />
      </Head>

      <main className="max-w-4xl mx-auto px-4 py-12 text-yellow-100 font-serif">
        <div className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{card.name}</h1>
          <Image
            src={`/images/${card.imageFileName}`}
            alt={card.name}
            width={300}
            height={500}
            className="mx-auto rounded-lg shadow-xl mb-8"
          />
        </div>
        <div className="description-bg p-6 md:p-10 rounded-xl shadow-xl space-y-8">
          {card.elementAstrology ? (
            <>
              <Section title="Element & Astrology" text={card.elementAstrology} />
              <Section title="Love & Relationships" text={card.love} />
              <Section title="Career & Ambitions" text={card.career} />
              <Section title="Life & Inner World" text={card.life} />
              <Section title="Health & Well-being" text={card.health} />
              <Section title="Mystic Message" text={`“${card.mysticMessage}”`} italic />
              <Section title="Daily Journal Prompt" text={card.journalPrompt} />
            </>
          ) : (
            <Section title="Card Meaning" text={card.description} />
          )}
        </div>
        <div className="mt-10 text-center">
          <button
            onClick={() => window.history.back()}
            className="px-6 py-2 bg-yellow-500 text-black font-semibold rounded-lg shadow-md hover:bg-yellow-400 transition-colors"
          >
            ← Back to Revealed Cards
          </button>
        </div>
      </main>
    </>
  );
}
