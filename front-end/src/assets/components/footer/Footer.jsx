import React from "react";

const Footer = () => {
  return (
    <footer className="w-full bg-white text-black px-6 md:px-12 py-10">
      <div className="text-center text-gray-500 text-sm">
        Desenvolvimento Web • Aplicações Web • Design Digital
        <br />©{new Date().getFullYear()} Andy Dev. Todos os direitos
        reservados.
      </div>
    </footer>
  );
};

export default Footer;
