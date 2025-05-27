'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { TarotCard } from '@/types';
import { motion } from 'framer-motion';
import { useId } from 'react';

interface CardDisplayProps {
  card: TarotCard;
  isFlipped: boolean;
  onFlip: () => void;
}

const CardDisplay: React.FC<CardDisplayProps> = ({ card, isFlipped, onFlip }) => {
  const router = useRouter();
  const flipId = useId(); // Unique animation key per card

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
      className="cursor-pointer flex flex-col items-center text-center group"
    >
      <motion.div
        className="relative w-[250px] h-[438px] perspective"
        initial={false}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6 }}
        style={{ transformStyle: 'preserve-3d' }}
      >
        <motion.div
          className="absolute w-full h-full rounded-md shadow-xl backface-hidden"
          style={{ backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden' }}
        >
          <Image
            src={backImagePath}
            alt="Card Back"
            width={250}
            height={438}
            className="rounded-md shadow-xl"
            priority
          />
        </motion.div>

        <motion.div
          className="absolute w-full h-full rounded-md shadow-xl"
          style={{ transform: 'rotateY(180deg)', backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden' }}
        >
          <Image
            src={frontImagePath}
            alt={card.name}
            width={250}
            height={438}
            className="rounded-md shadow-xl"
            priority
          />
        </motion.div>
      </motion.div>

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
  );
};

export default CardDisplay;
