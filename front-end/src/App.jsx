import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

import Carrossel_Text from "./assets/components/carrossel_Text/Carrossel_Text";
import VideoHero from "./assets/video/Video Topo.mp4";
import Header from "./assets/components/header/Header";
import ContactButton from "./assets/components/button_contact/Contact_Button";
import ContactButton2 from "./assets/components/button_contact/Contact_Button2";

import Banner_Sobre from "./assets/banners/banner-sobre.jpg";
import ImgSolucoes from "./assets/arts/asset_solucoes.png";

const App = () => {
  const handleContact = () => {
    window.open("https://wa.me/5524993215864", "_blank");
  };

  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const rotate = useTransform(scrollYProgress, [0, 1], [-175, 225]);

  return (
    <main className="overflow-hidden">
      <section className="relative w-full">
        <Carrossel_Text />

        {/* Header */}
        <Header />

        {/* Conteúdo */}
        <div className="absolute inset-0 flex items-center z-10 xl:mb-[-5rem]">
          <div className="max-w-[40%] px-8 lg:px-24 flex flex-col gap-6">
            <h1
              className="
              animate-fade-left animate-once animate-delay-200 animate-ease-in
              text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-4xl 2xl:text-[3.5rem]
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
                2xl:text-[2rem] 2xl:font-bold xl:text-[1rem] leading-normal
              "
            >
              que transforma ideias em produtos digitais
            </h2>

            <p
              className="
                animate-fade-up animate-once animate-delay-500 animate-ease-in
                text-gray-600 2xl:text-[1.3rem]
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
        <video autoPlay loop muted playsInline className="w-full h-[auto]">
          <source src={VideoHero} type="video/mp4" />
        </video>
      </section>

      <section
        className="w-full 2xl:h-[80vh] flex items-center gap-[20rem] px-[5rem] bg-cover bg-center bg-no-repeat text-right xl:h-[110vh]"
        style={{ backgroundImage: `url(${Banner_Sobre})` }}
      >
        {/* DIV GERAL */}

        <div className="w-full mb-[10rem]">
          <div className="">
            <h1
              className="
            animate-fade-down animate-once animate-delay-200 animate-ease-in
            
            text-white 2xl:text-[5rem] mb-[1rem] xl:text-[3.5rem] "
            >
              Prazer, eu sou o Andy
            </h1>
            <h2
              className="
            animate-fade-up animate-once animate-delay-200 animate-ease-in
            
            text-white 2xl:text-[1.3rem] xl:text-[1.1rem]"
            >
              Sou desenvolvedor web e mobile, especializado<br></br>na criação
              de produtos digitais modernos, rápidos e escaláveis.
            </h2>
          </div>

          <div className="">
            <h2
              className="
            animate-fade-left animate-once animate-delay-200 animate-ease-in
            
            text-white w-[] 2xl:text-[1.3rem] mt-[2rem] xl:text-[1.1rem] xl:mb-[2rem]"
            >
              Trabalho transformando ideias em sites profissionais, aplicações
              web<br></br>e identidades digitais que ajudam empresas a crescer
              online.
            </h2>
            <h2
              className="
            animate-fade-right animate-once animate-delay-200 animate-ease-in
            
            text-white w-[] 2xl:text-[1.3rem] 2xl:mt-[2rem] 2xl:mb-[2rem] xl:text-[1.1rem] xl:mb-[2rem]"
            >
              Meu foco é unir design estratégico, tecnologia e experiência do
              <br></br>usuário para criar soluções que realmente geram
              resultado.
            </h2>

            <ContactButton2 text={"Faça um orçamento"} />
          </div>
        </div>
      </section>

      <section
        ref={ref}
        className="w-full 2xl:h-[100vh] xl:h-[130vh] flex items-center"
      >
        <div className="flex items-center px-[4rem]">
          <div className="2xl:w-[50%] xl:w-[70%]">
            <h1
              className="
            animate-fade-left animate-once animate-delay-200 animate-ease-in
            
            2xl:text-[4rem] mb-[3rem] xl:text-[3rem]"
            >
              Soluções digitais para empresas que querem crescer
            </h1>
            <h2
              className="
            animate-fade-right animate-once animate-delay-200 animate-ease-in
            
            2xl:text-[2rem] mb-[4rem] xl:text-[1.4rem]"
            >
              Desenvolvo soluções digitais completas que ajudam empresas a se
              posicionarem melhor na internet e conquistarem mais clientes.
            </h2>
            <ContactButton text={"Quero um orçamento"} />
          </div>
          <div>
            <motion.img
              src={ImgSolucoes}
              alt="imagem das soluções"
              style={{ rotate }}
              className="w-full"
            />
          </div>
        </div>
      </section>
    </main>
  );
};

export default App;
