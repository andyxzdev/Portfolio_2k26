import React, { useEffect, useRef, useState } from "react";
import Img1 from "../../images/imagem1.png";
import Img2 from "../../images/imagem2.png";
import Img3 from "../../images/imagem3.png";
import Img4 from "../../images/imagem4.png";
import Img5 from "../../images/imagem5.png";

import { useTranslation } from "react-i18next";

const feedbacks = [
  {
    name: "Flaviano Silva",
    text: "feedbacks.1.text",
    avatar: Img2,
  },
  {
    name: "Wesley Rodrigues",
    text: "feedbacks.2.text",
    avatar: Img3,
  },
  {
    name: "Lucas Aciole",
    text: "feedbacks.3.text",
    avatar: Img1,
  },
  {
    name: "Anna Barreto",
    text: "feedbacks.4.text",
    avatar: Img4,
  },
  {
    name: "Vitória Dias",
    text: "feedbacks.5.text",
    avatar: Img5,
  },
];

const Feedbacks = () => {
  const { t } = useTranslation();
  const [index, setIndex] = useState(0);
  const trackRef = useRef(null);

  const total = feedbacks.length;

  const next = () => setIndex((prev) => (prev + 1) % total);
  const prev = () => setIndex((prev) => (prev - 1 + total) % total);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const card = track.querySelector(".card");
    if (!card) return;

    const cardWidth = card.offsetWidth;
    const gap = 32;
    const moveX = index * (cardWidth + gap);

    track.style.transition = "transform 0.5s ease";
    track.style.transform = `translateX(-${moveX}px)`;
  }, [index]);

  return (
    <section
      id="feedbacks"
      className="w-full py-20 px-6 md:px-16 bg-[#111111] text-white"
    >
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl mb-4">{t("feedbacks.title")}</h1>
        <p className="text-gray-400 max-w-2xl mx-auto">
          {t("feedbacks.subtitle")}
        </p>
      </div>

      {/* CARROSSEL */}
      <div className="relative w-full overflow-hidden">
        {/* GRADIENTES */}
        <div className="absolute left-0 top-0 h-full w-20 z-10 bg-gradient-to-r from-[#111111] to-transparent pointer-events-none" />
        <div className="absolute right-0 top-0 h-full w-20 z-10 bg-gradient-to-l from-[#111111] to-transparent pointer-events-none" />

        <div ref={trackRef} className="flex gap-8">
          {feedbacks.map((feedback, i) => (
            <div
              key={i}
              className="card min-w-[300px] md:min-w-[400px] bg-[#1a1a1a] rounded-2xl p-6 flex flex-col justify-between shadow-lg hover:scale-[1.03] transition-transform duration-300"
            >
              {/* TEXTO */}
              <p className="text-gray-300 mb-6">“{t(feedback.text)}”</p>

              {/* USUÁRIO */}
              <div className="flex items-center gap-4">
                <img
                  src={feedback.avatar}
                  alt={feedback.name}
                  className="w-12 h-12 rounded-full object-cover"
                />

                <div>
                  <h3 className="font-semibold">{feedback.name}</h3>
                  <p className="text-sm text-gray-400">
                    {t("feedbacks.client")}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* BOTÕES */}
      <div className="flex justify-center gap-6 mt-10">
        <button
          onClick={prev}
          className="px-6 py-2 bg-white text-black rounded-full hover:opacity-80 transition"
        >
          ←
        </button>

        <button
          onClick={next}
          className="px-6 py-2 bg-white text-black rounded-full hover:opacity-80 transition"
        >
          →
        </button>
      </div>
    </section>
  );
};

export default Feedbacks;
