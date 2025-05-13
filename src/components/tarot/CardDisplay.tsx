// src/components/tarot/CardDisplay.tsx
import Image from 'next/image';
import { TarotCard } from '@/types'; // Ensure this path is correct for your types

interface CardDisplayProps {
  card: TarotCard;
}

const CardDisplay: React.FC<CardDisplayProps> = ({ card }) => {
  if (!card || !card.imageFileName) {
    console.warn("CardDisplay: Card data or imageFileName is missing", card);
    return <div className="p-4 border border-amber-500 text-amber-200 bg-opacity-20 bg-amber-900 rounded-md font-cinzel">Card data incomplete. Cannot display card.</div>;
  }

  const imagePath = `/images/${card.imageFileName}`; // This will use your .jpg files

  return (
    <div className="tarot-card-display border border-yellow-600/30 rounded-lg p-4 md:p-6 shadow-xl bg-slate-800/30 backdrop-blur-sm text-center flex flex-col items-center h-full">
      <div className="min-h-[4rem] flex items-center">
        <h3 className="text-2xl font-semibold mb-3 text-yellow-200 font-serif">{card.name}</h3>
      </div>
      <div className="image-container w-full max-w-[200px] h-auto mb-4 relative"> {/* Adjust max-w as needed */}
        <Image
          src={imagePath}
          alt={card.name}
          width={250} // Base width for quality - Next.js will optimize. Corresponds to optimized JPG width roughly.
          height={438} // Base height for quality (assuming approx 800x1400px aspect ratio for source optimized JPGs, adjusted here for a typical card display size)
                      // Maintain aspect ratio of your actual images. E.g. if your 800px wide images are 800x1200, then use width={250} height={375}
          priority // Good for LCP elements if these are immediately visible
          className="rounded-md shadow-lg"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" // Example sizes prop
        />
      </div>
      <div className="overflow-y-auto max-h-[200px] custom-scrollbar">
        <p className="text-sm text-yellow-50/90 leading-relaxed text-center pr-2">
        {card.description}
      </p>
      </div>
    </div>
  );
};

export default CardDisplay;