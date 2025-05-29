import Link from 'next/link';

const linkStyle = `
  text-base md:text-lg
  font-semibold
  text-transparent bg-clip-text bg-gradient-to-r
  from-[#f7c45c] via-[#f5b744] to-[#e9a733]
  font-serif tracking-wider
  shadow-sm font-medievalsharp
`;


export default function NavBar() {
  return (
    <nav className="w-full py-4 px-6 flex justify-between items-center bg-black bg-opacity-60 fixed top-0 z-50">
      <Link href="/" className={`${linkStyle} text-xl`}>Home</Link>
      <div className="space-x-6 flex items-center">
        <Link href="/about" className={linkStyle}>About</Link>
        <Link href="/contact" className={linkStyle}>Contact</Link>
      </div>
    </nav>
  );
}
