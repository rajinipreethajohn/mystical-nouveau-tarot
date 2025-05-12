export interface TarotCard {
    id: string; // Can be a slugified version of the name, or the card number as a string
    name: string; // e.g., "The Fool", "King of Pentacles"
    number: number; // 1 through 78, corresponding to your filename
    imageFileName: string; // The exact filename, e.g., "TheFool_01.png"
    description: string;
    // Optional: You can add more properties later if needed, such as:
    // keywords?: string[];
    // uprightMeaning?: string;
    // reversedMeaning?: string;
    // suit?: string; // e.g., "Wands", "Cups", "Swords", "Pentacles", "Major Arcana"
  }