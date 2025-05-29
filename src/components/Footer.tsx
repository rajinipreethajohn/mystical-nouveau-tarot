'use client';

import { useRef, useEffect } from 'react';

export default function Footer() {
  const marqueeRef = useRef<HTMLDivElement>(null);

  const reviews = [
    "“The cards spoke to my soul.” – A.R.",
    "“Incredibly beautiful and accurate.” – N.S.",
    "“A daily ritual I never miss.” – L.J.",
    "“Like being wrapped in cosmic silk.” – M.E.",
  ];

  useEffect(() => {
    const el = marqueeRef.current;

    const pause = () => el?.classList.add('paused');
    const resume = () => el?.classList.remove('paused');

    if (el) {
      el.addEventListener('mouseenter', pause);
      el.addEventListener('mouseleave', resume);
      el.addEventListener('touchstart', pause);
      el.addEventListener('touchend', resume);
    }

    return () => {
      if (el) {
        el.removeEventListener('mouseenter', pause);
        el.removeEventListener('mouseleave', resume);
        el.removeEventListener('touchstart', pause);
        el.removeEventListener('touchend', resume);
      }
    };
  }, []);

  return (
    <footer className="w-full bg-black bg-opacity-60 fixed bottom-0 z-40 overflow-hidden">
      <div
        ref={marqueeRef}
        className="marquee text-yellow-400 py-3 font-medievalsharp text-sm tracking-wider whitespace-nowrap"
      >
        {[...reviews, ...reviews].map((review, index) => (
          <span key={index} className="mx-6 inline-block">
            {review}
          </span>
        ))}
      </div>
    </footer>
  );
}
