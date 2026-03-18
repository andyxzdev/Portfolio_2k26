import React from "react";
import Carrossel_Text from "./assets/components/carrossel_Text/Carrossel_Text";
import VideoHero from "./assets/video/Video Topo.mp4";
import Header from "./assets/components/header/Header";
import ContactButton from "./assets/components/button_contact/Contact_Button";

const App = () => {
  const handleContact = () => {
    window.open("https://wa.me/5524993215864", "_blank");
  };

  return (
    <main className="overflow-hidden">
      <section className="relative w-full h-screen">
        <Carrossel_Text />

        {/* Header */}
        <Header />

        {/* Conteúdo */}
        <div className="absolute inset-0 flex items-center z-10">
          <div className="max-w-xl px-8 lg:px-24 flex flex-col gap-6">
            <h1
              className="
              animate-fade-left animate-once animate-delay-200 animate-ease-in
              text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl 2xl:text-5xl
              leading-tight
            "
              // 2xl -> 1920 acima de 1536px
              // xl -> 1366px acima de 1280px
              // lg -> 1024px tablets grandes / notebooks pequenos
              // md -> 768px tablets
              // sm -> 640px celulares maiores
              // text-2xl ou qualquer valor é qualquer tela abaixo de 640px
            >
              Desenvolvimento Web e Mobile
            </h1>

            <h2
              className="
                animate-fade-up animate-once animate-delay-300 animate-ease-in
                text-2xl leading-normal
              "
            >
              que transforma ideias em produtos digitais
            </h2>

            <p
              className="
                animate-fade-up animate-once animate-delay-500 animate-ease-in
                text-gray-600
              "
            >
              Crio interfaces modernas, responsivas e focadas em conversão para
              ajudar seu negócio a crescer no digital.
            </p>

            <div
              className="
                animate-fade-up animate-once animate-delay-700 animate-ease-in
              "
            >
              <ContactButton text="Entrar em contato" onClick={handleContact} />
            </div>
          </div>
        </div>

        {/* Vídeo de fundo */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src={VideoHero} type="video/mp4" />
        </video>
      </section>
    </main>
  );
};

export default App;
