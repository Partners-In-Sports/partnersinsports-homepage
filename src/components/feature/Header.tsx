import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { navLinks, companyInfo } from '@/mocks/site';
import BrandMark from './BrandMark';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  const isActive = (to: string) => pathname === to || pathname.startsWith(`${to}/`);

  const linkBase =
    'group/nav relative font-label text-[12px] tracking-[0.16em] uppercase whitespace-nowrap transition-colors duration-200';

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 bg-background-50 border-b transition-colors duration-300 ${
        scrolled ? 'border-background-200' : 'border-background-100'
      }`}
    >
      <div className="px-4 md:px-8 h-[68px] md:h-[76px] flex items-center justify-between">
        <BrandMark />

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const active = isActive(link.to);
            return (
              <Link
                key={link.label}
                to={link.to}
                className={`${linkBase} ${
                  active ? 'text-foreground-950' : 'text-foreground-500 hover:text-foreground-950'
                }`}
              >
                {link.label}
                <span
                  style={{ backgroundColor: link.accent }}
                  className={`absolute -bottom-1.5 left-0 h-[2px] w-full origin-left transition-transform duration-300 ${
                    active ? 'scale-x-100' : 'scale-x-0 group-hover/nav:scale-x-100'
                  }`}
                />
              </Link>
            );
          })}
        </nav>

        <button
          type="button"
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((value) => !value)}
          className="md:hidden w-10 h-10 flex items-center justify-center rounded-md text-foreground-950 cursor-pointer"
        >
          <i className={`${menuOpen ? 'ri-close-line' : 'ri-menu-line'} text-2xl`} />
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden border-t border-background-200 bg-background-50 px-4 pb-6 pt-2">
          <nav className="flex flex-col">
            {navLinks.map((link) => {
              const active = isActive(link.to);
              return (
                <Link
                  key={link.label}
                  to={link.to}
                  onClick={() => setMenuOpen(false)}
                  className={`group flex items-center gap-3 py-3.5 font-label text-sm tracking-[0.1em] uppercase border-b border-background-100 transition-colors ${
                    active ? 'text-foreground-950' : 'text-foreground-700 hover:text-foreground-950'
                  }`}
                >
                  <span
                    style={{ backgroundColor: link.accent }}
                    className={`h-3 w-[3px] rounded-full transition-transform duration-300 ${
                      active ? 'scale-y-100' : 'scale-y-0 group-hover:scale-y-100'
                    }`}
                  />
                  {link.label}
                </Link>
              );
            })}
          </nav>
          <p className="pt-4 text-xs text-foreground-500">{companyInfo.nameKo}</p>
        </div>
      )}
    </header>
  );
}