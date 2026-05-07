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

        <div className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-24">
          {/* Groom */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="flex flex-col items-center text-center max-w-sm"
          >
            <div className="relative w-64 h-80 mb-6 rounded-t-full overflow-hidden border-2 border-gold/50 shadow-[0_0_25px_rgba(212,175,55,0.2)]">
              <Image
                src="/images/groom_photo.png"
                alt="Mempelai Pria"
                fill
                className="object-cover"
              />
            </div>
            <h3 className="font-latin text-3xl text-gradient-gold mb-2 pb-1">Danang Hadi Setiawan, S.M</h3>
            <p className="font-poppins text-sm text-ivory/70 uppercase tracking-widest mb-4">
              Putra dari
            </p>
            <p className="font-cormorant text-lg text-ivory/90 mb-1">Bapak Agus Tri Mulyanto</p>
            <p className="font-cormorant text-lg text-ivory/90">& Ibu Jumitri</p>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 font-poppins text-xs text-gold/80 hover:text-gold transition-colors tracking-widest border border-gold/30 px-6 py-2 rounded-full"
            >
              @DANANG
            </a>
          </motion.div>

          {/* & Symbol */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
            className="font-playfair text-6xl text-gold/40"
          >
            &
          </motion.div>

          {/* Bride */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="flex flex-col items-center text-center max-w-sm"
          >
            <div className="relative w-64 h-80 mb-6 rounded-t-full overflow-hidden border-2 border-gold/50 shadow-[0_0_25px_rgba(212,175,55,0.2)]">
              <Image
                src="/images/bride_photo.png"
                alt="Mempelai Wanita"
                fill
                className="object-cover"
              />
            </div>
            <h3 className="font-latin text-3xl text-gradient-gold mb-2 pb-1">Arlina</h3>
            <p className="font-poppins text-sm text-ivory/70 uppercase tracking-widest mb-4">
              Putri dari
            </p>
            <p className="font-cormorant text-lg text-ivory/90 mb-1">Bapak Murgiyono</p>
            <p className="font-cormorant text-lg text-ivory/90">& Ibu Merdeka Wati</p>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 font-poppins text-xs text-gold/80 hover:text-gold transition-colors tracking-widest border border-gold/30 px-6 py-2 rounded-full"
            >
              @ALIN
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
