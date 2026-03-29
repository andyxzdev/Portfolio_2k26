import { motion, useScroll, useTransform } from "framer-motion";
import React, {
  useRef,
  lazy,
  useState,
  useEffect,
  useCallback,
  Suspense,
} from "react";
import { Globe, Smartphone, PenTool, Server } from "lucide-react";
import { useInView } from "react-intersection-observer";
import { useTranslation } from "react-i18next";

import Loading from "./assets/components/loading_page/Loading.jsx";

import Carrossel_Text from "./assets/components/carrossel_Text/Carrossel_Text";
import Header from "./assets/components/header/Header";
import ContactButton from "./assets/components/button_contact/Contact_Button";
import ContactButton2 from "./assets/components/button_contact/Contact_Button2";

import ImgSolucoes from "./assets/arts/asset_solucoes.png";
import Img_Front_Back from "./assets/arts/art-front-back.png";
import Banner_Front_Back from "./assets/banners/banner-front-ao-back.jpg";
import Arte_Sobre from "./assets/arts/arte-sobre.png";
import ImgProject1 from "./assets/banners/p1.jpg";
import ImgProject2 from "./assets/banners/p2.jpg";
import ImgProject3 from "./assets/banners/p3.jpg";
import ImgProject4 from "./assets/banners/p4.jpg";

import LogosReact from "./assets/logo/react.svg";
import LogosNode from "./assets/logo/node.svg";
import LogosTailwind from "./assets/logo/tailwind.svg";
import LogosFigma from "./assets/logo/figma.svg";
import LogosPhotoshop from "./assets/logo/photoshop.svg";
import Logo_hero from "./assets/logo/logo_hero.png";

import S1 from "./assets/social/instagram.svg";
import S2 from "./assets/social/linkedin.svg";
import S3 from "./assets/social/github.svg";

const Carrossel_Images = lazy(
  () => import("./assets/components/carrossel_Images/Carrossel_Images"),
);
const Feedbacks = lazy(
  () => import("./assets/components/feedbacks/Feedbacks.jsx"),
);
const Forms = lazy(() => import("./assets/components/forms/Forms.jsx"));
const Footer = lazy(() => import("./assets/components/footer/Footer.jsx"));

import Video_hero from "./assets/video/videohero.mp4";

const App = () => {
  const { t } = useTranslation();
  // 👇 controle de visibilidade do vídeo
  const { ref: inViewRef, inView } = useInView({
    triggerOnce: false,
    threshold: 0.3,
  });

  // 👇 referência direta do elemento <video>
  const videoRef = useRef(null);

  const [loading, setLoading] = useState(true);
  const [showVideo, setShowVideo] = useState(false);

  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const rotate = useTransform(scrollYProgress, [0, 1], [-230, 400]);

  // loading inicial
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  // delay no vídeo (melhora LCP)
  useEffect(() => {
    const timer = setTimeout(() => setShowVideo(true), 400);
    return () => clearTimeout(timer);
  }, []);

  // 👇 controle play / pause automático do vídeo
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (inView) {
      const playPromise = video.play();

      if (playPromise !== undefined) {
        playPromise.catch(() => {
          // evita erro silencioso no mobile
        });
      }
    } else {
      video.pause();
    }
  }, [inView]);

  // evita recriação da função
  const handleContact = useCallback(() => {
    window.open("https://wa.me/5524993215864", "_blank");
  }, []);

  if (loading) return <Loading />;

  return (
    <main className="overflow-hidden">
      <section className="relative w-full overflow-hidden">
        <Carrossel_Text />
        <Header />

        {/* CONTAINER PRINCIPAL */}
        <div className="relative flex flex-col lg:flex-row items-center justify-between px-4 md:px-8 lg:px-16 gap-10 lg:gap-0 pt-32 lg:pt-0 lg:h-[100vh] xl:h-[105vh] 2xl:h-screen">
          {/* ESQUERDA (TEXTO) */}
          <div className="w-full lg:w-[50%] xl:w-[45%] text-center lg:text-left flex flex-col gap-4 md:gap-6">
            {/* LOGO */}
            <div className="flex justify-center lg:justify-start">
              <img
                src={Logo_hero}
                alt="logo andy dev"
                loading="eager"
                className="w-28 md:w-32 lg:w-40"
              />
            </div>

            {/* TITULO */}
            <motion.h1
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.2rem] xl:text-4xl 2xl:text-[3rem] leading-tight"
            >
              {t("hero.title")}
            </motion.h1>

            {/* SUBTITULO */}
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="font-bold text-sm sm:text-base md:text-lg lg:text-base xl:text-[1rem] 2xl:text-[2rem]"
            >
              {t("hero.subtitle")}
            </motion.h2>

            {/* DESCRIÇÃO */}
            <motion.p
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="text-black text-sm sm:text-base md:text-lg lg:text-sm xl:text-base 2xl:text-[1.3rem]"
            >
              {t("hero.description")}
            </motion.p>

            {/* REDES */}
            <div className="flex justify-center lg:justify-start gap-8 md:gap-10">
              <a href="https://www.instagram.com/andyxdev_/" target="_blank">
                <img
                  src={S1}
                  alt="instagram"
                  loading="lazy"
                  decoding="async"
                  className="w-5 md:w-6 lg:w-7"
                />
              </a>

              <a href="https://www.linkedin.com/in/andrewsdev/" target="_blank">
                <img
                  src={S2}
                  alt="linkedin"
                  loading="lazy"
                  decoding="async"
                  className="w-5 md:w-6 lg:w-7"
                />
              </a>

              <a
                href="https://github.com/andyxzdev?tab=repositories"
                target="_blank"
              >
                <img
                  src={S3}
                  alt="github"
                  loading="lazy"
                  decoding="async"
                  className="w-5 md:w-6 lg:w-7"
                />
              </a>
            </div>

            {/* BOTÃO */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
            >
              <ContactButton text="Entrar em contato" onClick={handleContact} />
            </motion.div>
          </div>

          {/* DIREITA (VÍDEO) */}
          <div className="w-full lg:w-[50%] xl:w-[45%] flex justify-center">
            <div className="w-full max-w-[500px] md:max-w-[600px] lg:max-w-full rounded-2xl overflow-hidden">
              <div ref={inViewRef}>
                <video
                  ref={videoRef}
                  src={Video_hero}
                  muted
                  loop
                  playsInline
                  preload="none"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="sobre"
        className="w-full flex flex-col xl:flex-row xl:items-center px-4 md:px-8 xl:px-16 bg-black lg:text-right"
      >
        <div className="flex flex-col lg:flex-row w-full py-10 md:py-10 lg:pt-10">
          <motion.div>
            <img
              src={Arte_Sobre}
              alt="imagem sobre andy"
              loading="lazy"
              decoding="async"
              className="w-auto"
            />
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
                {t("about.title")}
              </motion.h1>

              <motion.h2
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.6 }}
                viewport={{ once: true }}
                className="text-white text-sm sm:text-base md:text-lg lg:text-[1rem] xl:text-[1.1rem] 2xl:text-[1.3rem]"
              >
                {t("about.desc1")}
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
                {t("about.desc2")}
              </motion.h2>

              <motion.h2
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 1, duration: 0.6 }}
                viewport={{ once: true }}
                className="
          text-white mb-6 text-sm sm:text-base md:text-lg lg:text-[1rem] xl:text-[1.1rem] 2xl:text-[1.3rem]"
              >
                {t("about.desc3")}
              </motion.h2>

              <ContactButton2
                text={t("about.button")}
                onClick={handleContact}
              />
            </div>
          </div>
        </div>
      </section>

      <section
        ref={ref}
        id="servicos"
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
                {t("services.title")}
              </motion.h1>

              <motion.h2
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                viewport={{ once: true }}
                className="text-base sm:text-lg md:text-xl xl:text-[1.4rem] 2xl:text-[1.7rem] mb-8"
              >
                {t("services.subtitle")}
              </motion.h2>

              <ContactButton
                text={t("services.button")}
                onClick={handleContact}
              />
            </div>

            {/* IMAGEM */}
            <div className="w-full xl:w-[40%] flex justify-center">
              <motion.img
                src={ImgSolucoes}
                alt="imagem das soluções"
                style={{ rotate }}
                loading="lazy"
                decoding="async"
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
              <h1 className="text-white text-lg mb-2">
                {t("services.web.title")}
              </h1>
              <h2 className="text-white text-sm">{t("services.web.desc")}</h2>
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
                {t("services.mobile.title")}
              </h1>
              <h2 className="text-white text-sm">
                {t("services.mobile.desc")}
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
              <h1 className="text-white text-lg mb-2">
                {t("services.design.title")}
              </h1>
              <h2 className="text-white text-sm">
                {t("services.design.desc")}
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
              <h1 className="text-white text-lg mb-2">
                {t("services.server.title")}
              </h1>
              <h2 className="text-white text-sm">
                {t("services.server.desc")}
              </h2>
            </motion.div>
          </div>
        </div>
      </section>

      <Carrossel_Text />

      <section
        id="tecnologias"
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
            {t("tech.title")}
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
            className="text-white text-sm sm:text-base md:text-lg xl:text-[1.1rem] 2xl:text-[1.3rem]"
          >
            {t("tech.desc1")}
          </motion.h2>

          <motion.h2
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
            className="text-white text-sm sm:text-base md:text-lg xl:text-[1.2rem] 2xl:text-[1.5rem] mt-8 md:mt-10 mb-8 md:mb-10"
          >
            {t("tech.desc2")}
          </motion.h2>

          <ContactButton2 text={t("tech.button")} onClick={handleContact} />
        </div>

        {/* IMAGEM */}
        <div className="w-full xl:w-[40%] flex justify-center">
          <motion.img
            src={Img_Front_Back}
            alt="imagem do front ao back"
            loading="lazy"
            decoding="async"
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
            {t("clients.title")}
          </motion.h1>
        </div>
        <div className="mt-20">
          <Suspense fallback={<div />}>
            <Carrossel_Images />
          </Suspense>
        </div>
      </section>

      <section id="projetos" className="w-full h-auto pb-25">
        <div className="text-center items-center justify-center">
          <motion.h1
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
            className="text-[3.5rem] md:text-[5rem] lg:text-[3rem] xl:text-[4rem] 2xl:text-[5rem]"
          >
            {t("projects.title")}
          </motion.h1>
        </div>
        <div className="flex flex-col lg:flex-row items-center justify-center gap-24 px-7 py-7">
          <img
            src={LogosReact}
            alt="react js logo"
            loading="lazy"
            decoding="async"
            className="w-15"
          />
          <img
            src={LogosNode}
            alt="node js logo"
            loading="lazy"
            decoding="async"
            className="w-15"
          />
          <img
            src={LogosTailwind}
            alt="tailwind css logo"
            loading="lazy"
            decoding="async"
            className="w-15"
          />
          <img
            src={LogosFigma}
            alt="figma logo"
            loading="lazy"
            decoding="async"
            className="w-10"
          />
          <img
            src={LogosPhotoshop}
            alt="photshop logo"
            loading="lazy"
            decoding="async"
            className="w-15"
          />
        </div>
        <div className=" flex flex-col lg:flex-row items-center justify-evenly px-7 pt-8 gap-7 lg:gap-5 2xl:gap-10">
          <div className="w-auto h-auto bg-[#d4d4d4] px-4 py-4 rounded-2xl ">
            <div className="w-full">
              <img
                src={ImgProject1}
                alt=""
                loading="lazy"
                decoding="async"
                className="rounded-2xl"
              />
            </div>

            <div className="pl-2 py-5">
              <h1 className="text-black 2xl:text-[1.5rem]">
                {t("projects.1.type")}
              </h1>
              <h2 className="text-black mt-4 2xl:text-[1.3rem]">
                {t("projects.1.title")}
              </h2>
              <h3 className="text-black mt-4">{t("projects.1.description")}</h3>
              <a
                href="https://zip-recruiter-newslatter-landing-pa.vercel.app/"
                target="_blank"
              >
                <button className="px-6 py-2 rounded-full transition-all duration-300 bg-black text-white hover:bg-transparent hover:text-black hover:border hover:border-black cursor-pointer mt-7">
                  {t("projects.button")}
                </button>
              </a>
            </div>
          </div>
          <div className="w-[auto] h-auto bg-[#d4d4d4] px-4 py-4 rounded-2xl ">
            <div className="w-full">
              <img
                src={ImgProject2}
                alt=""
                loading="lazy"
                decoding="async"
                className="rounded-2xl"
              />
            </div>

            <div className="pl-2 py-5">
              <h1 className="text-black 2xl:text-[1.5rem]">
                {t("projects.2.type")}
              </h1>
              <h2 className="text-black mt-4 2xl:text-[1.3rem]">
                {t("projects.2.title")}
              </h2>
              <h3 className="text-black mt-4">{t("projects.2.description")}</h3>
              <a href="https://barretoesantana.adv.br/" target="_blank">
                <button className="px-6 py-2 rounded-full transition-all duration-300 bg-black text-white hover:bg-transparent hover:text-black hover:border hover:border-black cursor-pointer mt-7">
                  {t("projects.button")}
                </button>
              </a>
            </div>
          </div>
          <div className="w-[auto] h-auto bg-[#d4d4d4] px-4 py-4 rounded-2xl ">
            <div className="w-full">
              <img
                src={ImgProject3}
                alt=""
                loading="lazy"
                decoding="async"
                className="rounded-2xl"
              />
            </div>

            <div className="pl-2 py-5">
              <h1 className="text-black 2xl:text-[1.5rem]">
                {t("projects.3.type")}
              </h1>
              <h2 className="text-black mt-4 2xl:text-[1.3rem]">
                {t("projects.3.title")}
              </h2>
              <h3 className="text-black mt-4">{t("projects.3.description")}</h3>
              <a
                href="https://www.altaperformanceintegral.com.br/"
                target="_blank"
              >
                <button className="px-6 py-2 rounded-full transition-all duration-300 bg-black text-white hover:bg-transparent hover:text-black hover:border hover:border-black cursor-pointer mt-7">
                  {t("projects.button")}
                </button>
              </a>
            </div>
          </div>
          <div className="w-[auto] h-auto bg-[#d4d4d4] px-4 py-4 rounded-2xl ">
            <div className="w-full">
              <img
                src={ImgProject4}
                alt=""
                loading="lazy"
                decoding="async"
                className="rounded-2xl"
              />
            </div>

            <div className="pl-2 py-5">
              <h1 className="text-black 2xl:text-[1.5rem]">
                {t("projects.4.type")}
              </h1>
              <h2 className="text-black mt-4 2xl:text-[1.3rem]">
                {t("projects.4.title")}
              </h2>
              <h3 className="text-black mt-4">{t("projects.4.description")}</h3>
              <a
                href="https://github.com/andyxzdev?tab=repositories"
                target="_blank"
              >
                <button className="px-6 py-2 rounded-full transition-all duration-300 bg-black text-white hover:bg-transparent hover:text-black hover:border hover:border-black cursor-pointer mt-7">
                  {t("projects.button")}
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>

      <Suspense fallback={<div />}>
        <Feedbacks />
      </Suspense>

      <section className="w-full h-auto">
        <div>
          <Suspense fallback={<div />}>
            <Forms />
          </Suspense>
        </div>
      </section>

      <Suspense fallback={<div />}>
        <Footer />
      </Suspense>
    </main>
  );
};

export default App;
