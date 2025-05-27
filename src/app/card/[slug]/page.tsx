'use client';

import { notFound } from 'next/navigation';
import Image from 'next/image';
import { allTarotCards } from '@/lib/tarot-data';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import Section from '@/components/Section';
import { useParams } from 'next/navigation';

export default function CardDetailPage() {
  const params = useParams();
  const slug = params?.slug as string;

  const card = allTarotCards.find(c => c.slug === slug);
  const [isLastCard, setIsLastCard] = useState(false);

  useEffect(() => {
    const drawn = JSON.parse(sessionStorage.getItem('drawnCards') || '[]');
    setIsLastCard(drawn[drawn.length - 1]?.slug === slug);
  }, [slug]);

  if (!card) return notFound();

  return (
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

      {/* 🌙 Content wrapper to block vine background */}
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

      {/* 🔙 Back Button */}
      <div className="mt-10 text-center">
        <button
          onClick={() => window.history.back()}
          className="px-6 py-2 bg-yellow-500 text-black font-semibold rounded-lg shadow-md hover:bg-yellow-400 transition-colors"
        >
          ← Back to Revealed Cards
        </button>
      </div>
    </main>
  );
}
