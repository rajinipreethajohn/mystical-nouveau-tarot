export interface TarotCard {
  id: string;
  name: string;
  number: number;
  imageFileName: string;
  description: string;
  
  // New fields for detailed view
  elementAstrology?: string;
  love?: string;
  career?: string;
  life?: string;
  health?: string;
  mysticMessage?: string;
  journalPrompt?: string;
  slug?: string; // ← Add this too for routing
  metaDescription?: string;
}
