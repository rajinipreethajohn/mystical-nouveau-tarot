// src/app/page.tsx
'use client'; // This directive is needed for client-side interactivity

import { useState, useEffect } from 'react';
import Image from 'next/image'; // Import Next.js Image component
import { TarotCard } from '@/types';
import CardDisplay from '@/components/tarot/CardDisplay';
import { Howl } from 'howler';


export default function HomePage() {
  const [drawnCards, setDrawnCards] = useState<TarotCard[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [showIntro, setShowIntro] = useState(true); // To control visibility of intro/deck cover

useEffect(() => {
    const stored = sessionStorage.getItem('drawnCards');
    if (stored && drawnCards.length === 0 && !isLoading && !error) {
      setDrawnCards(JSON.parse(stored));
      setShowIntro(false);
    }
  }, []);

  const handleDrawCards = async () => {
  setIsLoading(true);
  setError(null);
  setShowIntro(false); // Hide intro/deck cover once drawing starts

  const shuffleSound = new Howl({
    src: ['/sounds/shuffle.mp3', '/sounds/shuffle.ogg'],
    loop: false,
    html5: true
  });

  await new Promise(resolve => {
    shuffleSound.once('end', resolve);
    shuffleSound.play();
  });

  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
  const delay = isMobile ? 200 : 100;

  await new Promise(resolve => setTimeout(resolve, delay));

  try {
    const response = await fetch('/api/draw-cards');
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.details || `Failed to fetch cards: ${response.statusText}`);
    }

    const cards: TarotCard[] = await response.json();

    if (!cards || cards.length === 0) {
      setError("No cards were drawn. The deck might be empty or an API issue occurred.");
      setDrawnCards([]);
    } else if (cards.length < 3) {
      setError(`Only ${cards.length} card(s) drawn. The deck data might be incomplete. Displaying available cards.`);
      setDrawnCards(cards);
    } else {
      setDrawnCards(cards);

      // ✅ Store drawn cards in sessionStorage
      sessionStorage.setItem('drawnCards', JSON.stringify(cards));
    }

  } catch (err) {
    console.error(err);
    setError(err instanceof Error ? err.message : 'An unknown error occurred while drawing cards.');
    setDrawnCards([]);
  } finally {
    setIsLoading(false);
  }
};

  // Component for the clickable Deck Cover
  const DeckCoverArt = () => (
    <div 
      className="deck-cover my-8 cursor-pointer transform hover:scale-105 transition-transform duration-300 ease-in-out flex flex-col items-center group"
      onClick={handleDrawCards}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && handleDrawCards()}
      aria-label="Draw your tarot cards"
    >
      <Image
        src="/images/DeckCover.jpeg" // Make sure DeckCover.jpg is in public/images/
        alt="Deck Cover - Click to Draw Your Cards"
        width={200} // Adjust as needed for your deck cover size
        height={300} // Adjust to maintain aspect ratio
        priority // Load this image eagerly as it's central
        className="rounded-lg shadow-2xl group-hover:shadow-yellow-500/50 transition-shadow"
      />
      <p className="text-center mt-4 text-xl font-medium text-yellow-200 group-hover:text-yellow-100 transition-colors bg-black/50 font-medievalsharp text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-amber-400 to-yellow-500 font-serif tracking-wider shadow-sm">
        Click the Deck to Draw Your Cards
      </p>
    </div>
  );

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4 md:p-8 text-yellow-50 font-sans">
      <div className="text-center mb-10 md:mb-16">
        <h1 className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-amber-400 to-yellow-500 mb-4 font-serif tracking-wider shadow-sm">
          Mystical Nouveau Tarot
        </h1>
        <p className="text-2xl md:text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-amber-400 to-yellow-500 font-serif tracking-wider shadow-sm font-medievalsharp mb-4">
          Seek a Whisper from the Universe.
        </p>
      </div>

      {/* Show Deck Cover / Intro Text if no cards drawn and not loading */}
      {showIntro && !isLoading && drawnCards.length === 0 && <DeckCoverArt />}

      {isLoading && (
        <div className="flex flex-col items-center justify-center h-64">
          <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-yellow-400"></div>
          <p className="text-2xl text-purple-300 mt-6">Shuffling the energies... Drawing your cards...</p>
        </div>
      )}

      {error && !isLoading && (
         <div className="text-red-400 text-xl bg-red-900/50 p-6 rounded-lg shadow-xl my-8 max-w-md text-center">
           <p className="font-semibold mb-2">Oops! Something went astray:</p>
           <p>{error}</p>
           <button
             onClick={() => { setError(null); setShowIntro(true); setDrawnCards([]); }}
             className="mt-4 px-6 py-2 bg-yellow-500 text-slate-900 font-semibold rounded-md hover:bg-yellow-400 transition-colors"
           >
             Try Again
           </button>
         </div>
      )}

      {drawnCards.length > 0 && !isLoading && (
        <div className="mt-8 w-full max-w-5xl">
          <h2 className="text-4xl md:text-5xl font-semibold text-center mb-8 text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-yellow-100 font-medievalsharp">
            Your Cards Have Been Revealed:
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {drawnCards.map((card) => (
              <CardDisplay key={card.id || card.number} card={card} />
            ))}
          </div>
          <div className="text-center mt-12 md:mt-16">
            <button
              onClick={() => {
                // Reset for another draw
                setDrawnCards([]);
                setShowIntro(true);
                setError(null);
              }}
              className="mystical-button px-8 py-3 font-semibold rounded-lg shadow-md text-lg mr-4"
            >
              Draw Again
            </button>
            <button
              onClick={() => alert("Paid feature for combined message coming soon!")}
              className="px-8 py-3 bg-purple-600 text-white font-semibold rounded-lg shadow-md hover:bg-purple-700 transition-colors text-lg"
            >
              Unlock Combined Message (Soon!)
            </button>
          </div>
        </div>
      )}
    </main>
  );
}