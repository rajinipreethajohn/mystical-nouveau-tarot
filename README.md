This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.


NEXT STEPS:
These screenshots show everything working perfectly:

The Landing Page (5.32.59 PM.jpg): Loads correctly, showing your title, the deck cover, and the prompt to click. The basic styling is applied.
After Drawing (5.30.12 PM.jpg & 5.30.04 PM.jpg):
Clicking the deck successfully triggers the API call.
Your /api/draw-cards route is working and returning 3 unique cards.
The front end receives the data and displays the three cards (Six of Swords, Six of Wands, Five of Wands in this draw) side-by-side.
Each card shows its name, its image (correctly loaded!), and its description.
The layout and basic styling for the revealed cards are working.
The "Draw Again" and placeholder "Unlock Combined Message" buttons are visible.
This is a huge milestone! You've successfully built the core functionality: setting up the project, managing the card data and images, creating an API endpoint for the random draw, and building the front-end components to display the results.

Congratulations! You've laid a very solid foundation for your Mystical Nouveau Tarot website.

What's Next?

Now that the core mechanics are working, you can focus on refining and building out the rest of your vision:

Styling & Aesthetics: This is probably the biggest next step. Really lean into your "Mystical Boho Nouveau" style.
Choose elegant fonts (use custom fonts via @font-face in globals.css if needed).
Define a refined color palette inspired by your cards.
Add more sophisticated backgrounds, borders, and decorative elements using CSS/Tailwind.
Style the buttons to match the theme.
Make it visually immersive and beautiful!
Animations:
Implement the "Shuffle" animation we discussed for when the user clicks the deck cover, before the cards are revealed. Libraries like Framer Motion or even simple CSS animations can achieve this.
Add subtle animations for card reveals (e.g., fade-in, slide-in).
Refine Layout & Responsiveness: Ensure it looks great on different screen sizes (mobile, tablet, desktop). Use Tailwind's responsive modifiers (like md:, lg:).
Implement the Paid Feature Flow:
Add the "Are you curious..." prompt after the initial reveal.
Create the UI for asking the focusing questions (love, career, etc.).
Set up the API route (/api/get-combined-message) to interact with an LLM.
Integrate Stripe for payments.
Design the display for the personalized combined message.
Add Sound (Optional): Subtle sound effects for shuffling/reveals can enhance the experience.
Build Out Other Pages/Sections (Optional): Like an "About the Deck" or "Learn Tarot" section.