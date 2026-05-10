"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero_bg.png"
          alt="Royal Javanese Background"
          fill
          className="object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/80" />
      </div>

      <div className="relative z-10 container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <div className="flex justify-center mb-10">
            <div className="relative w-32 h-24 flex items-center justify-center">
              {/* Overlapping Initials Logo */}
              <span className="font-latin text-7xl md:text-8xl text-gradient-gold absolute -translate-x-6 -translate-y-4 opacity-90">
                A
              </span>
              <span className="font-latin text-7xl md:text-8xl text-gradient-gold absolute translate-x-6 translate-y-4 opacity-90">
                D
              </span>
            </div>
          </div>

          <p className="font-poppins text-gold-dark tracking-[0.4em] text-sm md:text-base uppercase mb-6">
            The Wedding Of
          </p>

          <h1 className="font-latin text-6xl md:text-8xl text-gradient-gold mb-6 pb-6 drop-shadow-md">
            Alin & Danang
          </h1>

          <div className="w-24 h-[1px] bg-gold/50 mx-auto mb-8" />

          <p className="font-cormorant text-2xl md:text-3xl text-black-elegant/90 italic px-4 leading-relaxed">
            "Tresna iku dudu mung amarga rupa, nanging amarga ati kang tulus lan
            suci. Nyawiji ing rasa, mbangun bale wisma ingkang rahayu."
          </p>

          <div className="mt-12 flex justify-center space-x-4">
            <div className="w-1 h-16 bg-gradient-to-b from-gold/80 to-transparent mx-auto rounded-full" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
