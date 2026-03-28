import React, { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";

import Img1 from "../../arts/art1.jpg";
import Img2 from "../../arts/art2.jpg";
import Img3 from "../../arts/art3.jpg";
import Img4 from "../../arts/art4.jpg";
import Img5 from "../../arts/art5.jpg";

const imagens = [Img1, Img2, Img3, Img4, Img5];

const Column = ({ direction = "down" }) => {
  const controls = useAnimation();
  const trackRef = useRef(null);

  useEffect(() => {
    if (!trackRef.current) return;

    const trackHeight = trackRef.current.scrollHeight / 2;

    const SPEED = 40;
    const duration = trackHeight / SPEED;

    // 🔥 controle REAL de direção
    const isDown = direction === "down";

    controls.start({
      y: isDown ? [0, -trackHeight] : [-trackHeight, 0],
      transition: {
        repeat: Infinity,
        ease: "linear",
        duration,
      },
    });
  }, [controls, direction]);

  return (
    <div className="h-full w-full overflow-hidden">
      <motion.div
        ref={trackRef}
        animate={controls}
        className="flex flex-col gap-2"
      >
        {[...imagens, ...imagens].map((img, index) => (
          <img
            key={index}
            src={img}
            alt=""
            className="w-full h-28 sm:h-32 md:h-40 lg:h-44 object-cover rounded-lg"
          />
        ))}
      </motion.div>
    </div>
  );
};

const CarrosselImagesHero = () => {
  return (
    <div className="absolute right-0 top-0 h-full w-[45%] md:w-[35%] lg:w-[30%] flex items-center">
      {/* container das colunas */}
      <div className="grid grid-cols-2 gap-2 w-full h-full px-2">
        {/* DESCE */}
        <Column direction="down" />

        {/* SOBE */}
        <Column direction="up" />
      </div>

      {/* fade */}

      <div className="pointer-events-none absolute bottom-0 w-full h-16 bg-gradient-to-t from-white to-transparent" />
    </div>
  );
};

export default CarrosselImagesHero;
