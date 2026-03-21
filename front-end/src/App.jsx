import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

import Carrossel_Text from "./assets/components/carrossel_Text/Carrossel_Text";
import Header from "./assets/components/header/Header";
import ContactButton from "./assets/components/button_contact/Contact_Button";
import ContactButton2 from "./assets/components/button_contact/Contact_Button2";

import ImgSolucoes from "./assets/arts/asset_solucoes.png";
import Img_Front_Back from "./assets/arts/art-front-back.png";
import Banner_Front_Back from "./assets/banners/banner-front-ao-back.jpg";
import Arte_Sobre from "./assets/arts/arte-sobre.png";
import ImgProject from "./assets/banners/banner-front-ao-back.jpg";

import { Globe, Smartphone, PenTool, Server } from "lucide-react";
import LogosReact from "./assets/logo/react.svg";
import LogosNode from "./assets/logo/node.svg";
import LogosTailwind from "./assets/logo/tailwind.svg";
import LogosFigma from "./assets/logo/figma.svg";
import LogosPhotoshop from "./assets/logo/photoshop.svg";

import Carrossel_Images from "./assets/components/carrossel_Images/Carrossel_Images";
import Feedbacks from "./assets/components/feedbacks/Feedbacks.jsx";
import Forms from "./assets/components/forms/Forms.jsx";
import Footer from "./assets/components/footer/Footer.jsx";

import Spline from "@splinetool/react-spline";

const App = () => {
  const handleContact = () => {
    window.open("https://wa.me/5524993215864", "_blank");
  };

  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const rotate = useTransform(scrollYProgress, [0, 1], [-165, 155]);

  return (
    <main className="overflow-hidden">
      <section className="relative w-full h-auto">
        <Carrossel_Text />
        <Header />
        <div className="w-full h-[120vh] md:h-[100vh] xl:h-[130vh] pt-70 lg:pt-0 lg:ml-70">
          <Spline
            scene="https://prod.spline.design/pG06XrIod30UMvEf/scene.splinecode"
            className="lg:left-16"
          />
        </div>

        <div className="absolute inset-0 z-10 flex items-start lg:items-center justify-start pt-50 lg:pt-40 px-4 md:px-8 pointer-events-none">
          <div className="w-full text-center md:text-left lg:max-w-[40%] lg:px-16 xl:px-24 flex flex-col gap-4 md:gap-6">
            <motion.h1
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.2rem] xl:text-4xl 2xl:text-[3rem] leading-tight bg-[#FFFFFF] lg:bg-transparent"
            >
              Desenvolvimento Web e Mobile
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="font-bold text-sm sm:text-base md:text-lg lg:text-base xl:text-[1rem] 2xl:text-[2rem] bg-[#FFFFFF] lg:bg-transparent"
            >
              que transforma ideias em produtos digitais
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="text-black text-sm sm:text-base md:text-lg lg:text-sm xl:text-base 2xl:text-[1.3rem] bg-[#FFFFFF] lg:bg-transparent"
            >
              Crio interfaces modernas, responsivas e focadas em conversão para
              ajudar seu negócio a crescer no digital.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="pointer-events-auto"
            >
              <ContactButton text="Entrar em contato" onClick={handleContact} />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="w-full flex flex-col xl:flex-row xl:items-center px-4 md:px-8 xl:px-16 bg-black lg:text-right">
        <div className="flex flex-col lg:flex-row w-full py-10 md:py-10 lg:pt-10">
          <motion.div>
            <img src={Arte_Sobre} alt="imagem sobre andy" className="w-auto" />
          </motion.div>
          <div className="w-full items-center lg:pt-15 xl:pt-20">
            <div>
              <motion.h1
                initial={{ opacity: 0, y: -40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.6 }}
                viewport={{ once: true }}
                className="text-white text-4xl sm:text-3xl md:text-5xl lg:text-[2.7rem] xl:text-[3rem] 2xl:text-[4rem] mb-4"
              >
                Prazer, eu sou o Andy
              </motion.h1>

              <motion.h2
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.6 }}
                viewport={{ once: true }}
                className="text-white text-sm sm:text-base md:text-lg lg:text-[1rem] xl:text-[1.1rem] 2xl:text-[1.3rem]"
              >
                Sou desenvolvedor web e mobile, especializado<br></br>na criação
                de produtos digitais modernos, rápidos e escaláveis.
              </motion.h2>
            </div>

            <div>
              <motion.h2
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 1, duration: 0.6 }}
                viewport={{ once: true }}
                className="
                  text-white 
                  mt-6 mb-6
                  text-sm sm:text-base md:text-lg lg:text-[1rem] xl:text-[1.1rem] 2xl:text-[1.3rem]"
              >
                Trabalho transformando ideias em sites profissionais, aplicações
                web<br></br>e identidades digitais que ajudam empresas a crescer
                online.
              </motion.h2>

              <motion.h2
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 1, duration: 0.6 }}
                viewport={{ once: true }}
                className="
          text-white mb-6 text-sm sm:text-base md:text-lg lg:text-[1rem] xl:text-[1.1rem] 2xl:text-[1.3rem]"
              >
                Meu foco é unir design estratégico, tecnologia e experiência do
                <br></br>usuário para criar soluções que realmente geram
                resultado.
              </motion.h2>

              <ContactButton2 text={"Faça um orçamento"} />
            </div>
          </div>
        </div>
      </section>

      <section
        ref={ref}
        className="w-full flex flex-col xl:flex-row xl:items-center px-4 md:px-8 xl:px-16 py-10"
      >
        <div className="w-full">
          {/* TOPO (texto + imagem) */}
          <div className="flex flex-col xl:flex-row items-center gap-10">
            {/* TEXTO */}
            <div className="w-full xl:w-[60%]">
              <motion.h1
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                viewport={{ once: true }}
                className="text-2xl sm:text-3xl md:text-4xl xl:text-[3rem] 2xl:text-[3.5rem] mb-6"
              >
                Soluções digitais para empresas que querem crescer
              </motion.h1>

              <motion.h2
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                viewport={{ once: true }}
                className="text-base sm:text-lg md:text-xl xl:text-[1.4rem] 2xl:text-[1.7rem] mb-8"
              >
                Desenvolvo soluções digitais completas que ajudam empresas a se
                posicionarem melhor na internet e conquistarem mais clientes.
              </motion.h2>

              <ContactButton text={"Quero um orçamento"} />
            </div>

            {/* IMAGEM */}
            <div className="w-full xl:w-[40%] flex justify-center">
              <motion.img
                src={ImgSolucoes}
                alt="imagem das soluções"
                style={{ rotate }}
                className="w-full max-w-sm md:max-w-md xl:max-w-full"
              />
            </div>
          </div>

          {/* CARDS */}
          <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-black rounded-2xl px-6 py-6"
            >
              <Globe size={44} color="white" className="mb-4" />
              <h1 className="text-white text-lg mb-2">Desenvolvimento web</h1>
              <h2 className="text-white text-sm">
                Criação de sites profissionais, landing pages e aplicações web
                modernas.
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-black rounded-2xl px-6 py-6"
            >
              <Smartphone size={44} color="white" className="mb-4" />
              <h1 className="text-white text-lg mb-2">
                Desenvolvimento Mobile
              </h1>
              <h2 className="text-white text-sm">
                Aplicativos modernos para Android e iOS com alto desempenho.
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-black rounded-2xl px-6 py-6"
            >
              <PenTool size={44} color="white" className="mb-4" />
              <h1 className="text-white text-lg mb-2">Identidade Visual</h1>
              <h2 className="text-white text-sm">
                Criação de logotipos e identidade visual estratégica.
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.9, duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-black rounded-2xl px-6 py-6"
            >
              <Server size={44} color="white" className="mb-4" />
              <h1 className="text-white text-lg mb-2">Domínio e Hospedagem</h1>
              <h2 className="text-white text-sm">
                Configuração completa para colocar seu site no ar com segurança.
              </h2>
            </motion.div>
          </div>
        </div>
      </section>

      <Carrossel_Text />

      <section
        className="w-full flex flex-col xl:flex-row items-center px-4 md:px-8 xl:px-16 py-16 xl:py-0 bg-cover bg-center bg-no-repeat text-left min-h-screen xl:h-[120vh]"
        style={{ backgroundImage: `url(${Banner_Front_Back})` }}
      >
        {/* TEXTO */}
        <div className="w-full xl:w-[60%] mb-10 xl:mb-0">
          <motion.h1
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
            className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-[2.5rem] xl:text-[3.5rem] 2xl:text-[4rem] mb-4 md:mb-6"
          >
            Do Back-end ao Front-end
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
            className="text-white text-sm sm:text-base md:text-lg xl:text-[1.1rem] 2xl:text-[1.3rem]"
          >
            Desenvolvo soluções completas, cuidando de todas as etapas do
            projeto, desde a arquitetura do sistema até a interface final.
          </motion.h2>

          <motion.h2
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
            className="text-white text-sm sm:text-base md:text-lg xl:text-[1.2rem] 2xl:text-[1.5rem] mt-8 md:mt-10 mb-8 md:mb-10"
          >
            Utilizo tecnologias modernas para garantir performance,
            escalabilidade e segurança.
          </motion.h2>

          <ContactButton2 text={"Saiba mais"} />
        </div>

        {/* IMAGEM */}
        <div className="w-full xl:w-[40%] flex justify-center">
          <motion.img
            src={Img_Front_Back}
            alt="imagem do front ao back"
            className="w-full max-w-sm md:max-w-md xl:max-w-full"
          />
        </div>
      </section>
      <Carrossel_Text />

      <section className="py-40 text-center h-full w-full">
        <div>
          <motion.h1
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
            className="text-[3rem] px-2 md:text-[3.5rem] lg:text-[3rem] xl:text-[4rem] 2xl:text-[4rem]"
          >
            Clientes que confiam no meu trabalho
          </motion.h1>
        </div>
        <div className="mt-20">
          <Carrossel_Images />
        </div>
      </section>

      <section className="w-full h-auto pb-25">
        <div className="text-center items-center justify-center">
          <motion.h1
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
            className="text-[3.5rem] md:text-[5rem] lg:text-[3rem] xl:text-[4rem] 2xl:text-[5rem]"
          >
            Projetos
          </motion.h1>
        </div>
        <div className="flex flex-col lg:flex-row items-center justify-center gap-24 px-7 py-7">
          <img src={LogosReact} alt="" className="w-15" />
          <img src={LogosNode} alt="" className="w-15" />
          <img src={LogosTailwind} alt="" className="w-15" />
          <img src={LogosFigma} alt="" className="w-10" />
          <img src={LogosPhotoshop} alt="" className="w-15" />
        </div>
        <div className=" flex flex-col lg:flex-row items-center justify-evenly px-7 pt-8 gap-10">
          <div className="w-auto h-auto bg-[#d4d4d4] px-4 py-4 rounded-2xl ">
            <div className="w-full">
              <img src={ImgProject} alt="" className="rounded-2xl" />
            </div>

            <div className="pl-2 py-5">
              <h1 className="text-black 2xl:text-[1.5rem]">
                Site institucional
              </h1>
              <h2 className="text-black mt-4 2xl:text-[1.3rem]">
                Barreto & Santana adv
              </h2>
              <h3 className="text-black mt-4">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est
                cupiditate at voluptates explicabo similique. Odit praesentium
                magni fugit unde, veniam nam nemo, nisi magnam sunt ipsum cumque
                modi, tempore quibusdam?
              </h3>
              <ContactButton text={"LALALALA"} className="mt-7" />
            </div>
          </div>
          <div className="w-[auto] h-auto bg-[#d4d4d4] px-4 py-4 rounded-2xl ">
            <div className="w-full">
              <img src={ImgProject} alt="" className="rounded-2xl" />
            </div>

            <div className="pl-2 py-5">
              <h1 className="text-black 2xl:text-[1.5rem]">
                Site institucional
              </h1>
              <h2 className="text-black mt-4 2xl:text-[1.3rem]">
                Barreto & Santana adv
              </h2>
              <h3 className="text-black mt-4">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est
                cupiditate at voluptates explicabo similique. Odit praesentium
                magni fugit unde, veniam nam nemo, nisi magnam sunt ipsum cumque
                modi, tempore quibusdam?
              </h3>
              <ContactButton text={"LALALALA"} className="mt-7" />
            </div>
          </div>
          <div className="w-[auto] h-auto bg-[#d4d4d4] px-4 py-4 rounded-2xl ">
            <div className="w-full">
              <img src={ImgProject} alt="" className="rounded-2xl" />
            </div>

            <div className="pl-2 py-5">
              <h1 className="text-black 2xl:text-[1.5rem]">
                Site institucional
              </h1>
              <h2 className="text-black mt-4 2xl:text-[1.3rem]">
                Barreto & Santana adv
              </h2>
              <h3 className="text-black mt-4">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est
                cupiditate at voluptates explicabo similique. Odit praesentium
                magni fugit unde, veniam nam nemo, nisi magnam sunt ipsum cumque
                modi, tempore quibusdam?
              </h3>
              <ContactButton text={"LALALALA"} className="mt-7" />
            </div>
          </div>
          <div className="w-[auto] h-auto bg-[#d4d4d4] px-4 py-4 rounded-2xl ">
            <div className="w-full">
              <img src={ImgProject} alt="" className="rounded-2xl" />
            </div>

            <div className="pl-2 py-5">
              <h1 className="text-black 2xl:text-[1.5rem]">
                Site institucional
              </h1>
              <h2 className="text-black mt-4 2xl:text-[1.3rem]">
                Barreto & Santana adv
              </h2>
              <h3 className="text-black mt-4">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est
                cupiditate at voluptates explicabo similique. Odit praesentium
                magni fugit unde, veniam nam nemo, nisi magnam sunt ipsum cumque
                modi, tempore quibusdam?
              </h3>
              <ContactButton text={"LALALALA"} className="mt-7" />
            </div>
          </div>
        </div>
      </section>

      <Feedbacks />

      <section className="w-full h-auto">
        <div>
          <Forms />
        </div>
      </section>

      <Footer></Footer>
    </main>
  );
};

export default App;
