import React, { useState, useEffect } from "react";
import LogoTopo from "../../logo/logodev 2.svg";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  useEffect(() => {
    setMenuOpen(false);
  }, []);

  useEffect(() => {
    const handlePageShow = () => {
      setMenuOpen(false);
    };

    window.addEventListener("pageshow", handlePageShow);

    return () => {
      window.removeEventListener("pageshow", handlePageShow);
    };
  }, []);

  const handleExternalNavigation = (url) => {
    setMenuOpen(false);
    window.open(url, "_blank");
  };

  // ✅ NOVO: links com ids reais
  const menuItems = [
    { label: "Início", href: "#" },
    { label: "Sobre", href: "#sobre" },
    { label: "Serviços", href: "#servicos" },
    { label: "Tecnologias", href: "#tecnologias" },
    { label: "Projetos", href: "#projetos" },
    { label: "Feedbacks", href: "#feedbacks" },
  ];

  return (
    <header className="w-full h-20 flex items-center justify-between px-8 absolute z-50">
      <img src={LogoTopo} alt="Logo-topo" className="w-20 h-20" />

      {/* Botão Mobile */}
      <button
        onClick={toggleMenu}
        aria-label="Abrir menu"
        aria-expanded={menuOpen}
        className="flex md:hidden flex-col gap-1.5 z-50"
      >
        <span
          className={`w-7 h-[3px] transition-all duration-300 ${
            menuOpen ? "bg-white rotate-45 translate-y-[6px]" : "bg-black"
          }`}
        />
        <span
          className={`w-7 h-[3px] transition-all duration-300 ${
            menuOpen ? "bg-white opacity-0" : "bg-black"
          }`}
        />
        <span
          className={`w-7 h-[3px] transition-all duration-300 ${
            menuOpen ? "bg-white -rotate-45 -translate-y-[6px]" : "bg-black"
          }`}
        />
      </button>

      {/* Menu */}
      <nav
        className={`
          ${menuOpen ? "fixed top-20 left-0 w-full bg-[#111111]" : "hidden"}
          flex flex-col items-center py-10 gap-6
          
          md:relative md:flex md:flex-row md:items-center md:bg-transparent md:py-0 md:gap-10
        `}
      >
        <ul className="flex flex-col md:flex-row items-center gap-6 md:gap-10">
          {menuItems.map((item, index) => (
            <li key={index}>
              <a
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className={`
                  cursor-pointer transition-colors duration-300
                  ${
                    menuOpen
                      ? "text-white hover:text-gray-400"
                      : "text-black hover:text-[#929292]"
                  }
                `}
              >
                {item.label}
              </a>
            </li>
          ))}

          <button
            onClick={() =>
              handleExternalNavigation("https://wa.me/5524993215864")
            }
            className={`
              px-6 py-2 rounded-full transition-all duration-300
              ${
                menuOpen
                  ? "bg-white text-black hover:bg-transparent hover:border hover:border-white hover:text-white"
                  : "bg-black text-white hover:bg-transparent hover:border hover:border-black hover:text-black"
              }
            `}
          >
            Entrar em contato
          </button>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
