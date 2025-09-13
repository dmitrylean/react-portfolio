import React, { useMemo, useState } from "react";

interface MenuItem {
  href: string;
  text: string;
  external?: boolean;
}

interface HeaderProps {
  menu?: any; // исходный проп, может быть массивом, объектом или undefined
}

export const Header: React.FC<HeaderProps> = ({ menu: rawMenu }) => {
  const [open, setOpen] = useState(false);

  const menu: MenuItem[] = useMemo(() => {
    if (Array.isArray(rawMenu)) {
      return rawMenu as MenuItem[];
    } else if (rawMenu && typeof rawMenu === "object") {
      if ("href" in rawMenu && "text" in rawMenu) {
        return [rawMenu as MenuItem];
      } else {
        return Object.values(rawMenu)
          .filter(Boolean)
          .map((it: any) => {
            if (typeof it === "string") return { href: it, text: it };
            return {
              href: it?.href ?? "/",
              text: it?.text ?? String(it?.href ?? ""),
              external: !!it?.external,
            };
          }) as MenuItem[];
      }
    } else {
      return [];
    }
  }, [rawMenu]);

  if (!Array.isArray(rawMenu)) {
    console.warn("Header: received non-array menu (normalized). Raw value:", rawMenu);
  }

  return (
    <header className="header">
      <div className="container">
        <button
          className="burger"
          aria-label="Открыть меню"
          onClick={() => setOpen(true)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </svg>
        </button>

        <button
          className="close"
          aria-label="Закрыть меню"
          onClick={() => setOpen(false)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        <a href="/" className="logo">
          Dmitry Lean
        </a>

        <nav className={`menu ${open ? "open" : ""}`}>
          {menu.map((item, idx) => (
            <a
              key={idx}
              href={item.href}
              target={item.external ? "_blank" : undefined}
              rel={item.external ? "noopener noreferrer" : undefined}
            >
              {item.text}
            </a>
          ))}
        </nav>

        <div
          className={`overlay ${open ? "active" : ""}`}
          onClick={() => setOpen(false)}
        />
      </div>
    </header>
  );
};
