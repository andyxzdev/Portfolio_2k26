import React from "react";

const Footer = () => {
  return (
    <footer className="w-full bg-white text-black px-6 md:px-12 py-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-8">
        {/* Logo / Nome */}
        <div>
          <h1 className="text-xl font-bold">Andy Dev</h1>
          <p className="text-gray-600 mt-2 text-sm">
            Desenvolvendo soluções digitais modernas e de alta performance.
          </p>
        </div>

        {/* Navegação */}
        <div>
          <h2 className="font-semibold mb-3">Navegação</h2>
          <ul className="flex flex-col gap-2 text-gray-600 text-sm">
            <li className="hover:text-black cursor-pointer">Início</li>
            <li className="hover:text-black cursor-pointer">Sobre</li>
            <li className="hover:text-black cursor-pointer">Serviços</li>
            <li className="hover:text-black cursor-pointer">Projetos</li>
          </ul>
        </div>

        {/* Contato */}
        <div>
          <h2 className="font-semibold mb-3">Contato</h2>
          <ul className="flex flex-col gap-2 text-gray-600 text-sm">
            <li>Email: contato@seudominio.com</li>
            <li
              className="cursor-pointer hover:text-black"
              onClick={() =>
                window.open("https://wa.me/5524993215864", "_blank")
              }
            >
              WhatsApp
            </li>
          </ul>
        </div>
      </div>

      {/* Linha inferior */}
      <div className="border-t border-gray-300 mt-10 pt-6 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} Andy Dev. Todos os direitos reservados.
      </div>
    </footer>
  );
};

export default Footer;
