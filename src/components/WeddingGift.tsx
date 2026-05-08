"use client";

import { motion } from "framer-motion";
import { Copy, Gift } from "lucide-react";

export default function WeddingGift() {
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    alert("Nomor rekening berhasil disalin!");
  };

  return (
    <section className="py-24 relative z-10 px-6">
      <div className="container mx-auto max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <Gift className="w-12 h-12 text-gold mx-auto mb-6" />
          <h2 className="font-playfair text-4xl md:text-5xl text-gradient-gold mb-4 pb-2">
            Wedding Gift
          </h2>
          <div className="w-24 h-[2px] bg-gold mx-auto mb-6" />
          <p className="font-poppins text-sm md:text-base text-black-elegant/80 max-w-2xl mx-auto">
            Doa restu Anda merupakan karunia yang sangat berarti bagi kami. 
            Namun jika Anda bermaksud memberikan tanda kasih, kami menyediakan fitur di bawah ini.
          </p>
        </motion.div>

        <div className="max-w-md mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="glass-panel p-10 rounded-2xl border border-gold/30 hover:border-gold/60 transition-colors shadow-[0_0_50px_rgba(212,175,55,0.1)]"
          >
            <h3 className="font-playfair text-2xl text-black-elegant mb-2 uppercase tracking-widest">Bank Jateng</h3>
            <p className="font-poppins text-gold text-2xl tracking-widest font-semibold mb-4">3022446397</p>
            <p className="font-cormorant text-xl text-black-elegant/80 mb-8 italic">a.n. Arlina</p>
            
            <div className="flex flex-col gap-4">
              <button
                onClick={() => copyToClipboard("3022446397")}
                className="inline-flex items-center justify-center w-full px-6 py-3 border border-gold/50 text-gold hover:bg-gold hover:text-black-elegant transition-all duration-300 rounded-full font-poppins text-xs tracking-widest uppercase"
              >
                <Copy className="w-4 h-4 mr-2" />
                Salin Nomor Rekening
              </button>

              <a
                href="https://wa.me/6281229245807?text=Halo%20Arlina,%20saya%20ingin%20konfirmasi%20pengiriman%20kado%20pernikahan."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-full px-6 py-3 bg-gold text-black-elegant hover:bg-ivory transition-all duration-300 rounded-full font-poppins text-xs tracking-widest uppercase font-bold"
              >
                Konfirmasi WhatsApp
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
