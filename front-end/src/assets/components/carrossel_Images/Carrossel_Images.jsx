import React, { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";

import Img1 from "../../logo/clients/barreto.jpg";
import Img2 from "../../logo/clients/bravo.jpg";
import Img3 from "../../logo/clients/comais.jpg";
import Img4 from "../../logo/clients/criative.jpg";
import Img5 from "../../logo/clients/destiny.jpg";
import Img6 from "../../logo/clients/ngames.jpg";
import Img7 from "../../logo/clients/renan.jpg";
import { img } from "framer-motion/client";

const imagens = [Img1, Img2, Img3, Img4, Img5, Img6, Img7];

const Carrossel_Images = () => {
  const controls = useAnimation();
  const trackRef = useRef(null);

  useEffect(() => {
    if (!trackRef.current) return;

    const trackWidth = trackRef.current.scrollWidth / 2;
    const SPEED = 50;
    const duration = trackWidth / SPEED;

    controls.start({
      x: [0, -trackWidth],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          ease: "linear",
          duration,
        },
      },
    });
  }, [controls]);

  return (
    <div className="h-auto sm:h-28 md:h-32 lg:h-36 xl:h-40 2xl:h-48 w-full object-contain relative overflow-hidden ">
      <div className="absolute left-0 top-0 h-full w-16 z-10 bg-gradient-to-r from-white to-transparent pointer-events-none" />

      <div className="absolute right-0 top-0 h-full w-16 z-10 bg-gradient-to-l from-white to-transparent pointer-events-none" />

      {/* CARROSSEL */}
      <motion.div
        ref={trackRef}
        animate={controls}
        className="flex gap-6 md:gap-10 xl:gap-16"
      >
        {[...imagens, ...imagens, ...imagens].map((item, index) => (
          <img
            key={index}
            src={item}
            alt={`cliente-${index}`}
            className="h-45 sm:h-28 md:h-32 lg:h-30 xl:h-40 2xl:h-35 w-auto object-contain"
          />
        ))}
      </motion.div>
    </div>
  );
};

export default Carrossel_Images;
