'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import Footer from './Footer';

export default function ClientWrapper() {
  const pathname = usePathname();
  const [shouldShow, setShouldShow] = useState(false);

  useEffect(() => {
    const update = () => {
      let shouldShow = false;

      if (pathname === '/') {
        const drawnCards =
          typeof window !== 'undefined'
            ? JSON.parse(sessionStorage.getItem('drawnCards') || '[]')
            : [];

        shouldShow = !Array.isArray(drawnCards) || drawnCards.length === 0;
      } else if (pathname === '/about' || pathname === '/contact') {
        shouldShow = true;
      }

      setShouldShow(shouldShow);
    };

    update();

    window.addEventListener('storage', update);
    window.addEventListener('focus', update);

    return () => {
      window.removeEventListener('storage', update);
      window.removeEventListener('focus', update);
    };
  }, [pathname]);

  return shouldShow ? <Footer /> : null;
}
