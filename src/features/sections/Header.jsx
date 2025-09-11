// src/features/sections/Header.jsx
export default function Header() {
    const links = [
      { label: "Brud", href: "#bride" },
      { label: "Makeup", href: "#makeup" },
      { label: "Om meg", href: "#about" },
      { label: "Priser", href: "#prices" },
    ];
  
    return (
      <header className="fixed top-0 inset-x-0 z-50 bg-white/70 backdrop-blur border-b border-neutral-200">
        <nav className="h-10 flex items-center justify-center">
          <ul className="flex items-center gap-12 text-[11px] uppercase tracking-normal text-neutral-800">
            {links.map((l) => (
              <li key={l.label}>
                <a
                    href={l.href}
                    className="block leading-none transition-all duration-200
                        text-neutral-800 visited:text-neutral-800
                        hover:text-neutral-900 focus:text-neutral-900 active:text-neutral-900
                        hover:tracking-widest"
                >
                    {l.label}
                </a>

              </li>
            ))}
          </ul>
        </nav>
      </header>
    );
  }
  