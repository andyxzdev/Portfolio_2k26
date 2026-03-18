import React, { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";

const texts = [
  {
    text: "Desenvolvimento Web",
  },
  {
    text: "Desenvolvimento Mobile",
  },
  {
    text: "UI/UX Design",
  },
  {
    text: "Design Gráfico",
  },
  {
    text: "Front-end",
  },
  {
    text: "Back-end",
  },
  {
    text: "Web Design",
  },
];

const Carrossel_Text = () => {
  const controls = useAnimation();
  const trackRef = useRef(null);

  useEffect(() => {
    if (!trackRef.current) return;

    const trackWidth = trackRef.current.scrollWidth / 2;
    const SPEED = 40;
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
  }, []);

  return (
    <div className="w-full h-15 flex items-center justify-between bg-[#111111] overflow-hidden">
      <motion.div
        ref={trackRef}
        animate={controls}
        className="flex gap-8 whitespace-nowrap"
      >
        {[...texts, ...texts, ...texts].map((item, index) => (
          <h1 key={index} className="text-white text-sm">
            {item.text}
          </h1>
        ))}
      </motion.div>
    </div>
  );
};

export default Carrossel_Text;
