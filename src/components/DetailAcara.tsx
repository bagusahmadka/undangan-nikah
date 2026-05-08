"use client";

import { motion } from "framer-motion";
import { MapPin, Calendar, Clock } from "lucide-react";

export default function DetailAcara() {
  return (
    <section className="py-24 relative z-10 px-6">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="font-playfair text-4xl md:text-5xl text-gradient-gold mb-4 pb-2"
          >
            Detail Acara
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="w-24 h-[2px] bg-gold mx-auto"
          />
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {/* Akad */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="glass-panel p-8 md:p-10 rounded-t-full border-t-4 border-gold shadow-[0_0_30px_rgba(212,175,55,0.1)] flex flex-col items-center text-center"
          >
            <div className="w-16 h-16 rounded-full border border-gold flex items-center justify-center mb-6">
              <span className="font-playfair text-2xl text-gold">A</span>
            </div>
            <h3 className="font-playfair text-3xl text-gold mb-6">Akad Nikah</h3>
            
            <div className="space-y-4 mb-8 w-full">
              <div className="flex flex-col items-center justify-center text-ivory/80">
                <Calendar className="w-5 h-5 text-gold mb-2" />
                <span className="font-poppins text-sm tracking-wider">Senin, 27 Juli 2026</span>
              </div>
              <div className="flex flex-col items-center justify-center text-ivory/80">
                <Clock className="w-5 h-5 text-gold mb-2" />
                <span className="font-poppins text-sm tracking-wider">08:00 WIB - Selesai</span>
              </div>
              <div className="flex flex-col items-center justify-center text-ivory/80">
                <MapPin className="w-5 h-5 text-gold mb-2" />
                <span className="font-poppins text-sm leading-relaxed max-w-xs text-center">
                  Gg. Prenjak 01 RT 05/01<br />
                  Kuncen Lama, Ungaran
                </span>
              </div>
            </div>

            <a
              href="https://www.google.com/maps/place/7%C2%B007'31.0%22S+110%C2%B024'34.3%22E/@-7.1252816,110.4069572,17z/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 border border-gold text-gold hover:bg-gold hover:text-black-elegant transition-colors rounded-full font-poppins text-xs tracking-widest uppercase mt-auto w-full max-w-xs"
            >
              Lihat Peta Lokasi
            </a>
          </motion.div>

          {/* Resepsi */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="glass-panel p-8 md:p-10 rounded-b-full border-b-4 border-gold shadow-[0_0_30px_rgba(212,175,55,0.1)] flex flex-col items-center text-center mt-8 md:mt-0"
          >
            <div className="w-16 h-16 rounded-full border border-gold flex items-center justify-center mb-6">
              <span className="font-playfair text-2xl text-gold">R</span>
            </div>
            <h3 className="font-playfair text-3xl text-gold mb-6">Resepsi</h3>
            
            <div className="space-y-4 mb-8 w-full">
              <div className="flex flex-col items-center justify-center text-ivory/80">
                <Calendar className="w-5 h-5 text-gold mb-2" />
                <span className="font-poppins text-sm tracking-wider">Senin, 27 Juli 2026</span>
              </div>
              <div className="flex flex-col items-center justify-center text-ivory/80">
                <Clock className="w-5 h-5 text-gold mb-2" />
                <span className="font-poppins text-sm tracking-wider">10:00 WIB - Selesai</span>
              </div>
              <div className="flex flex-col items-center justify-center text-ivory/80">
                <MapPin className="w-5 h-5 text-gold mb-2" />
                <span className="font-poppins text-sm leading-relaxed max-w-xs text-center">
                  Gg. Prenjak 01 RT 05/01<br />
                  Kuncen Lama, Ungaran
                </span>
              </div>
            </div>

            <a
              href="https://www.google.com/maps/place/7%C2%B007'31.0%22S+110%C2%B024'34.3%22E/@-7.1252816,110.4069572,17z/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 border border-gold text-gold hover:bg-gold hover:text-black-elegant transition-colors rounded-full font-poppins text-xs tracking-widest uppercase mt-auto w-full max-w-xs"
            >
              Lihat Peta Lokasi
            </a>
          </motion.div>
        </div>

        {/* Embedded Map */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 rounded-2xl overflow-hidden border-2 border-gold/30 shadow-[0_0_20px_rgba(212,175,55,0.1)]"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3959.006160371297!2d110.40695717499837!3d-7.1252815928785145!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zN8KwMDcnMzEuMCJTIDExMMKwMjQnMzQuMyJF!5e0!3m2!1sid!2sid!4v1778199166053!5m2!1sid!2sid"
            width="100%"
            height="450"
            style={{ border: 0, filter: "grayscale(20%) sepia(30%) hue-rotate(-10deg)" }}
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </motion.div>
      </div>
    </section>
  );
}
