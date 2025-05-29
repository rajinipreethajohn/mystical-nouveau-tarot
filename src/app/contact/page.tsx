export default function ContactPage() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-20 text-center font-medievalsharp text-neutral-200">
      <h1 className="text-4xl md:text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-amber-400 to-yellow-500">
        Contact
      </h1>

      <p className="text-lg mb-8 leading-relaxed">
        We’d love to hear from you — whether you're seeking guidance, collaborating on something magical, or simply want to say hi.
      </p>

      <div className="space-y-6 text-base md:text-lg">
        <p>
          <span className="font-semibold">Email:</span>{' '}
          <a href="mailto:hello.mysticalnouveau@gmail.com" className="underline hover:text-amber-300">
            hello@mysticalnouveau.com
          </a>
        </p>

        
      </div>

      <p className="mt-12 italic text-sm text-neutral-400">
        “The veil is thin. Every message is sacred.” 🌙
      </p>
    </main>
  );
}
