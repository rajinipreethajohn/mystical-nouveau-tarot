import { allTarotCards } from '@/lib/tarot-data';
import CardDetailClient from './CardDetailClient';
import { Metadata } from 'next';

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const card = allTarotCards.find(c => c.slug === slug);

  if (!card) {
    return {
      title: 'Card Not Found – Mystical Nouveau Tarot',
      description: 'This tarot card was not found on the site.',
    };
  }

  return {
    title: `${card.name} – Tarot Meaning | Mystical Nouveau Tarot`,
    description: card.metaDescription,
    openGraph: {
      title: `${card.name} – Tarot Meaning`,
      description: card.metaDescription,
      url: `https://mysticaltarotgarden.netlify.app/card/${card.slug}`,
      images: [
        {
          url: `https://mysticaltarotgarden.netlify.app/images/${card.imageFileName}`,
          width: 800,
          height: 600,
          alt: `${card.name} tarot card`
        }
      ],
      type: 'website'
    },
    twitter: {
      card: 'summary_large_image',
      title: `${card.name} – Tarot Meaning`,
      description: card.metaDescription,
      images: [`https://mysticaltarotgarden.netlify.app/images/${card.imageFileName}`]
    }
  };
}

// ✅ IMPORTANT: Await the `params` object inside the function
export default async function CardPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const card = allTarotCards.find(c => c.slug === slug);

  if (!card) return null;

  return <CardDetailClient card={card} />;
}
