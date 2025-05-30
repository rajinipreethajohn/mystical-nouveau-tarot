import { allTarotCards } from '@/lib/tarot-data';
import { Metadata } from 'next';

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const card = allTarotCards.find(c => c.slug === params.slug);

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
