import { Menu } from 'lucide-react';

export default function Navbar() {
  const links = [
    { name: 'О Комитете', href: '#' },
    { name: 'Деятельность НАК', href: '#' },
    { name: 'Терроризму - НЕТ!', href: '#' },
    { name: 'Нормативная правовая база', href: '#' },
    { name: 'Медиа', href: '#' },
    { name: 'Регионы', href: '#' },
  ];

  return (
    <nav className="bg-blue-900 text-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4 max-w-7xl flex items-center justify-between">
        <ul className="hidden md:flex flex-1 items-center justify-between text-sm uppercase tracking-wider font-semibold">
          {links.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className="inline-block py-4 px-3 hover:bg-blue-800 transition-colors border-b-4 border-transparent hover:border-red-600"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
        <button className="md:hidden py-4 px-2 hover:bg-blue-800 transition">
          <Menu size={24} />
        </button>
      </div>
    </nav>
  );
}
