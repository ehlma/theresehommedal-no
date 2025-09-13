// src/features/sections/Header.jsx
export default function Header() {
    const left = [
      { label: "Brud", href: "/bride" },
      { label: "Makeup", href: "/makeup" },
      { label: "Samarbeid", href: "/collaboration" }, 
    ];
    const right = [
      { label: "Om meg", href: "/about" },
      { label: "Priser", href: "/prices" },
      { label: "Kontakt", href: "/contact" },
    ];
  
    const linkCls =
      "block leading-none transition-all duration-200 text-neutral-800 visited:text-neutral-800 hover:text-neutral-900 focus:text-neutral-900 active:text-neutral-900 hover:tracking-widest";
  
    return (
      <header className="fixed top-0 inset-x-0 z-50 bg-white/70 backdrop-blur border-b border-neutral-200">
        <nav className="h-12 px-4">
          <div className="max-w-6xl mx-auto grid grid-cols-[1fr_auto_1fr] items-center h-full">
            {/* Venstre */}
            <ul className="justify-self-end flex items-center gap-6 text-[11px] uppercase">
              {left.map((l) => (
                <li key={l.label}><a href={l.href} className={linkCls}>{l.label}</a></li>
              ))}
            </ul>
  
            <a href="/" className="justify-self-center font-tangerine text-3xl md:text-3xl font-bold leading-tight text-neutral-900 pl-12 pr-12">
                Therese Hommedal
            </a>
  
            {/* Høyre*/}
            <ul className="justify-self-start flex items-center gap-6 text-[11px] uppercase">
              {right.map((l) => (
                <li key={l.label}><a href={l.href} className={linkCls}>{l.label}</a></li>
              ))}
            </ul>
          </div>
        </nav>
      </header>
    );
  }
  