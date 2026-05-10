"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { MailOpen } from "lucide-react";

interface OpeningScreenProps {
  isOpened: boolean;
  onOpen: () => void;
}

export default function OpeningScreen({ isOpened, onOpen }: OpeningScreenProps) {
  return (
    <AnimatePresence>
      {!isOpened && (
        <motion.div
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-background overflow-hidden"
          exit={{ opacity: 0, y: "-100%" }}
          transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
        >
          {/* Background Image with Overlay */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/hero_bg.png"
              alt="Background"
              fill
              className="object-cover opacity-10"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/60 to-background"></div>
          </div>

          <div className="relative z-10 flex flex-col items-center text-center px-6 w-full max-w-md">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="mb-8 relative w-48 h-48 sm:w-64 sm:h-64"
            >
              <Image
                src="/images/wayang_gunungan.png"
                alt="Gunungan"
                fill
                className="object-contain drop-shadow-xl brightness-90"
                priority
              />
            </motion.div>

            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              <p className="font-poppins text-gold-dark tracking-[0.2em] text-sm uppercase mb-4">
                The Wedding Of
              </p>
              <h1 className="font-latin text-5xl sm:text-7xl text-gradient-gold mb-6 pb-4">
                Alin & Danang
              </h1>
              <p className="font-cormorant text-xl text-black-elegant/80 italic mb-12">
                "Kepada Yth. Bapak/Ibu/Saudara/i"
              </p>

              <button
                onClick={onOpen}
                className="group relative inline-flex items-center justify-center px-10 py-4 font-poppins font-bold text-sm tracking-widest uppercase overflow-hidden rounded-full bg-gradient-to-r from-gold-dark via-gold-light to-gold-dark text-black-elegant shadow-[0_10px_30px_rgba(212,175,55,0.3)] transition-all duration-300 hover:scale-105 hover:shadow-[0_15px_40px_rgba(212,175,55,0.5)] active:scale-95"
              >
                <MailOpen className="w-5 h-5 mr-3 transition-transform group-hover:scale-110" />
                <span className="relative z-10">Buka Undangan</span>
              </button>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
