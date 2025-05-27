'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { TarotCard } from '@/types';

interface CardDisplayProps {
  card: TarotCard;
  isFlipped: boolean;
  onFlip: () => void;
}

const CardDisplay: React.FC<CardDisplayProps> = ({ card, isFlipped, onFlip }) => {
  const router = useRouter();

  const frontImagePath = `/images/${card.imageFileName}`;
  const backImagePath = `/images/card-back.jpeg`;

  const handleClick = () => {
    if (!isFlipped) {
      onFlip();
    } else {
      router.push(`/card/${card.slug}`);
    }
  };

  return (
    <div
      onClick={handleClick}
      className="cursor-pointer transition-transform duration-500 hover:scale-105"
    >
      <div className="flex flex-col items-center text-center">
        <div className="image-container w-full max-w-[250px] h-auto mx-auto relative">
          <Image
            src={isFlipped ? frontImagePath : backImagePath}
            alt={card.name}
            width={250}
            height={438}
            className="rounded-md shadow-xl transition-all duration-500"
            priority
          />
        </div>
        {isFlipped ? (
          <>
            <h3 className="mt-4 text-lg font-semibold text-yellow-100 font-cinzel">
              {card.name}
            </h3>
            <p className="mt-2 text-sm text-yellow-200 md:hidden italic animate-pulse">
              Tap to read more
            </p>
          </>
        ) : (
          <p className="mt-4 text-sm text-yellow-300 italic animate-pulse">
            Tap to Reveal
          </p>
        )}
      </div>
    </div>
  );
};

export default CardDisplay;
