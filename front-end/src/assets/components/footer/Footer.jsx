import React from "react";
import { useTranslation } from "react-i18next";

import S1 from "../../social/instagram.svg";
import S2 from "../../social/linkedin.svg";
import S3 from "../../social/github.svg";

const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer className="w-full items-center bg-white text-black px-6 md:px-12 py-10">
      <div className="flex justify-center gap-8 md:gap-10">
        <a href="https://www.instagram.com/andyxdev_/" target="_blank">
          <img
            src={S1}
            alt={t("footer.instagram")}
            className="w-5 md:w-6 lg:w-5"
          />
        </a>

        <a href="https://www.linkedin.com/in/andrewsdev/" target="_blank">
          <img
            src={S2}
            alt={t("footer.linkedin")}
            className="w-5 md:w-6 lg:w-5"
          />
        </a>

        <a href="https://github.com/andyxzdev?tab=repositories" target="_blank">
          <img
            src={S3}
            alt={t("footer.github")}
            className="w-5 md:w-6 lg:w-5"
          />
        </a>
      </div>
      <div className="text-center text-gray-500 text-sm mt-7">
        {t("footer.services")}
        <br />©{new Date().getFullYear()} Andy Dev. {t("footer.rights")}
      </div>
    </footer>
  );
};

export default Footer;
