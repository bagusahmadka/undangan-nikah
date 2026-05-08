"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="py-20 relative z-10 text-center px-6 overflow-hidden">
      <div className="container mx-auto max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <p className="font-cormorant text-2xl text-black-elegant/80 italic mb-10">
            "Merupakan suatu kehormatan dan kebahagiaan bagi kami apabila
            Bapak/Ibu/Saudara/i berkenan hadir untuk memberikan doa restu."
          </p>

          <h2 className="font-latin text-4xl md:text-6xl text-gradient-gold mb-6 pb-2">
            Danang & Alin
          </h2>

          <p className="font-poppins text-sm text-black-elegant/60 mb-12">
            Kami yang berbahagia,<br />
            Keluarga Bpk. Agus Tri Mulyanto & Keluarga Bpk. Murgiyono
          </p>

          <div className="relative w-20 h-20 mx-auto mb-6">
            <Image
              src="/images/logo-t.png"
              alt="Logo Danang & Alin"
              fill
              className="object-contain"
            />
          </div>

          <a 
            href="https://technorra.vercel.app" 
            target="_blank" 
            rel="noopener noreferrer"
            className="font-poppins text-xs text-gold/40 tracking-widest hover:text-gold transition-colors duration-300"
          >
            © 2026 TECHNORRA. ALL RIGHTS RESERVED.
          </a>
        </motion.div>
      </div>
    </footer>
  );
}
