'use client'; // ⬅️ VERY important at the top

import Image from 'next/image';
import { useRouter } from 'next/navigation'; // ⬅️ CORRECT for App Router
import { TarotCard } from '@/types';


interface CardDisplayProps {
  card: TarotCard;
}

const CardDisplay: React.FC<CardDisplayProps> = ({ card }) => {
  const router = useRouter();

  if (!card || !card.imageFileName) {
    console.warn("CardDisplay: Card data or imageFileName is missing", card);
    return (
      <div className="p-4 border border-amber-500 text-amber-200 bg-amber-900 rounded-md font-cinzel">
        Card data incomplete.
      </div>
    );
  }

  const imagePath = `/images/${card.imageFileName}`;

  const handleClick = () => {
    router.push(`/card/${card.slug}`); // Ensure slug is unique like 'nine-of-wands'
  };

  return (
    <div
      onClick={handleClick}
      className="cursor-pointer hover:scale-105 transition-transform duration-300"
    >
      <div className="flex flex-col items-center text-center">
        <div className="image-container w-full max-w-[200px] h-auto mx-auto relative">
          <Image
            src={imagePath}
            alt={card.name}
            width={250}
            height={438}
            className="rounded-md shadow-xl"
            priority
          />
        </div>
        <h3 className="mt-4 text-lg font-semibold text-yellow-100 font-cinzel">
          {card.name}
        </h3>
        <p className="mt-2 text-sm text-yellow-200 md:hidden italic animate-pulse">
      Tap to read more
        </p>
          </div>
        </div>
  );
};

export default CardDisplay;
