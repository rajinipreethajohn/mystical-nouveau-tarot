import { NextResponse } from 'next/server';
import { allTarotCards } from '@/lib/tarot-data'; // Adjust import path if your alias is different or if not using src
import type { TarotCard } from '@/types'; // Adjust import path

// Helper function to get random unique cards
function getRandomUniqueCards(count: number): TarotCard[] {
  // Ensure allTarotCards is not empty and has enough cards
  if (!allTarotCards || allTarotCards.length === 0) {
    console.error("Tarot data is empty. Cannot draw cards.");
    return [];
  }

  if (allTarotCards.length < count) {
    console.warn(`Requested ${count} cards, but only ${allTarotCards.length} are available. Returning all available cards.`);
    // To ensure the shuffle still works, we copy the array
    const shuffledAvailable = [...allTarotCards].sort(() => 0.5 - Math.random());
    return shuffledAvailable;
  }

  // Create a shuffled copy of the array
  const shuffled = [...allTarotCards].sort(() => 0.5 - Math.random());
  // Return the first 'count' cards
  return shuffled.slice(0, count);
}

export async function GET() {
  try {
    const drawnCards = getRandomUniqueCards(3);

    if (drawnCards.length === 0 && allTarotCards.length > 0) {
      // This case means getRandomUniqueCards had an issue but allTarotCards was populated
      return NextResponse.json({ error: 'Failed to draw cards, no cards returned from draw logic.' }, { status: 500 });
    }
    
    // Check if the expected number of cards were drawn (especially if the deck itself might be incomplete)
    if (drawnCards.length < 3 && allTarotCards.length >= 3) {
        console.warn(`API: Expected 3 cards, but drew ${drawnCards.length}. This might indicate an issue with the drawing logic or available cards.`);
    }


    return NextResponse.json(drawnCards);
  } catch (error) {
    console.error("Error in /api/draw-cards:", error);
    // Ensure error is an instance of Error to safely access message property
    const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred';
    return NextResponse.json({ error: 'Failed to draw cards due to an internal server error.', details: errorMessage }, { status: 500 });
  }
}