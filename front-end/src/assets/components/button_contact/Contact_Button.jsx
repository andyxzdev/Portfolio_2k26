import React from "react";

const ContactButton = ({ text, onClick, className = "" }) => {
  return (
    <button
      onClick={onClick}
      className={`
        px-6 py-2 rounded-full transition-all duration-300
        bg-black text-white
        hover:bg-transparent hover:text-black hover:border hover:border-black
        ${className}
      `}
    >
      {text}
    </button>
  );
};

export default ContactButton;
