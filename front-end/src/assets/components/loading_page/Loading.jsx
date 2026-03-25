import { motion } from "framer-motion";

const Loading = () => {
  return (
    <div className="fixed inset-0 bg-black flex items-center justify-center z-[9999]">
      <div className="flex flex-col items-center gap-6">
        {/* LOGO / TEXTO */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-white text-2xl tracking-widest"
        >
          CARREGANDO
        </motion.h1>

        {/* SPINNER */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
          className="w-12 h-12 border-4 border-white border-t-transparent rounded-full"
        />

        {/* BARRA */}
        <div className="w-40 h-[2px] bg-gray-700 overflow-hidden">
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: "100%" }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            className="w-20 h-full bg-white"
          />
        </div>
      </div>
    </div>
  );
};

export default Loading;
