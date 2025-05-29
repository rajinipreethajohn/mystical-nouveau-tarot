export default function AboutPage() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-16 text-center text-neutral-800">
      <div className="mb-12">
        <h1 className="text-4xl md:text-5xl font-bold tracking-wide mb-4">About Mystical Nouveau Tarot</h1>
        <p className="text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
          Mystical Nouveau Tarot is a handcrafted digital tarot experience that fuses ancient archetypes
          with the elegance of Boho Nouveau art. Designed to awaken your intuition and guide your path,
          every card tells a story — not just of fate, but of your own power to shape it.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 text-left">
        <div>
          <h2 className="text-2xl font-semibold mb-3">Why We Created This Deck</h2>
          <p className="text-base leading-relaxed">
            As artists, seekers, and creators, we felt the call to reimagine the traditional Rider–Waite deck
            in a more soulful, nature-inspired form. This digital space allows us to bring the mysticism
            of tarot into your hands — anytime, anywhere.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-3">What You’ll Discover</h2>
          <p className="text-base leading-relaxed">
            Insightful readings. Beautifully illustrated cards. Symbolism rooted in astrology, elemental wisdom,
            and the cycles of life. Whether you’re new to tarot or deep in your journey,
            Mystical Nouveau Tarot offers both clarity and beauty.
          </p>
        </div>
      </div>

      <div className="mt-16">
        <p className="italic text-sm text-neutral-600">
          "The cards hold a mirror to your soul. Let them speak."
        </p>
      </div>
    </main>
  );
}
