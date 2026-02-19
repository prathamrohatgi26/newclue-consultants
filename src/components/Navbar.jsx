import { useState, useEffect } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    setIsOpen(false);
    const el = document.getElementById(targetId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 font-semibold text-sm ${
        scrolled
          ? 'bg-[#f7f9fa] shadow-sm py-2'
          : 'bg-transparent lg:bg-transparent bg-[#f7f9fa] py-2 lg:py-7'
      }`}
    >
      <div className="max-w-[1140px] mx-auto px-4 flex items-center justify-between">
        <a
          href="#header"
          onClick={(e) => handleNavClick(e, 'header')}
          className="text-[#333] font-bold text-base lg:text-[1.8rem] no-underline"
        >
          New Clue Consultants
        </a>

        {/* Hamburger */}
        <button
          className="lg:hidden p-0 border-none bg-transparent text-2xl"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        {/* Desktop nav */}
        <ul className="hidden lg:flex items-center gap-0 ml-auto mb-0 list-none">
          {[
            { label: 'Home', target: 'header' },
            { label: 'About', target: 'about' },
            { label: 'Courses', target: 'services' },
            { label: 'Contact', target: 'contact' },
          ].map((item) => (
            <li key={item.target}>
              <a
                href={`#${item.target}`}
                onClick={(e) => handleNavClick(e, item.target)}
                className="px-2.5 py-2.5 text-[#6b747b] no-underline hover:text-[#129dd8] transition-all duration-200"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile nav */}
        <div
          className={`lg:hidden fixed top-[52px] left-0 right-0 bottom-0 bg-[#f7f9fa] px-4 py-3 transition-transform duration-300 ease-in-out ${
            isOpen ? 'translate-x-0 visible' : 'translate-x-full invisible'
          }`}
        >
          <ul className="list-none p-0 m-0">
            {[
              { label: 'Home', target: 'header' },
              { label: 'About', target: 'about' },
              { label: 'Courses', target: 'services' },
              { label: 'Contact', target: 'contact' },
            ].map((item) => (
              <li key={item.target}>
                <a
                  href={`#${item.target}`}
                  onClick={(e) => handleNavClick(e, item.target)}
                  className="block py-2.5 text-[#6b747b] no-underline hover:text-[#129dd8] transition-all duration-200"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
