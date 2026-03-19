import React from "react";

const ContactButton2 = ({ text, onClick, className = "" }) => {
  return (
    <button
      onClick={onClick}
      className={`
        w-[30%] px-6 py-2 rounded-full transition-all duration-300
        bg-white text-black
        hover:bg-transparent hover:text-white hover:border hover:border-white
        ${className}
      `}
    >
      {text}
    </button>
  );
};

export default ContactButton2;
