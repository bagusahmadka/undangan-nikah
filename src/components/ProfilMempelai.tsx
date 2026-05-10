"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function ProfilMempelai() {
  return (
    <section className="py-24 relative z-10">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="font-playfair text-4xl md:text-5xl text-gradient-gold mb-4 pb-2"
          >
            Sang Mempelai
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="w-24 h-[2px] bg-gold mx-auto"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] items-center justify-center gap-12 md:gap-8 lg:gap-16">
          {/* Bride */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="flex flex-col items-center text-center w-full"
          >
            <motion.div
              animate={{
                y: [0, -15, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="relative w-72 h-96 md:w-80 md:h-[420px] mb-6 rounded-t-full overflow-hidden border-2 border-gold/50 shadow-[0_0_30px_rgba(212,175,55,0.3)]"
            >
              <Image
                src="/images/foto_ce.png"
                alt="Mempelai Wanita"
                fill
                className="object-cover"
              />
            </motion.div>
            <h3 className="font-latin text-3xl md:text-4xl text-gradient-gold mb-2 pb-1">Arlina</h3>
            <p className="font-poppins text-sm text-black-elegant/70 uppercase tracking-widest mb-4">
              Putri dari
            </p>
            <p className="font-cormorant text-lg md:text-xl text-black-elegant/90 mb-1">Bapak Murgiyono</p>
            <p className="font-cormorant text-lg md:text-xl text-black-elegant/90">& Ibu Merdeka Wati</p>
          </motion.div>

          {/* & Symbol */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
            className="hidden md:flex items-center justify-center font-playfair text-7xl text-gold/40 px-4"
          >
            &
          </motion.div>

          {/* Groom */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="flex flex-col items-center text-center w-full"
          >
            <motion.div
              animate={{
                y: [0, -15, 0],
              }}
              transition={{
                duration: 4,
                delay: 0.5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="relative w-72 h-96 md:w-80 md:h-[420px] mb-6 rounded-t-full overflow-hidden border-2 border-gold/50 shadow-[0_0_30px_rgba(212,175,55,0.3)]"
            >
              <Image
                src="/images/foto_co.png"
                alt="Mempelai Pria"
                fill
                className="object-cover"
              />
            </motion.div>
            <h3 className="font-latin text-3xl md:text-4xl text-gradient-gold mb-2 pb-1">Danang Hadi Setiawan, S.M</h3>
            <p className="font-poppins text-sm text-black-elegant/70 uppercase tracking-widest mb-4">
              Putra dari
            </p>
            <p className="font-cormorant text-lg md:text-xl text-black-elegant/90 mb-1">Bapak Agus Tri Mulyanto</p>
            <p className="font-cormorant text-lg md:text-xl text-black-elegant/90">& Ibu Jumitri</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
