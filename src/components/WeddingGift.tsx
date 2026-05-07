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
          <p className="font-poppins text-sm md:text-base text-ivory/80 max-w-2xl mx-auto">
            Doa restu Anda merupakan karunia yang sangat berarti bagi kami. 
            Namun jika Anda bermaksud memberikan tanda kasih, kami menyediakan fitur di bawah ini.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 justify-center max-w-2xl mx-auto">
          {/* Rekening 1 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="glass-panel p-8 rounded-2xl border border-gold/30 hover:border-gold/60 transition-colors"
          >
            <h3 className="font-playfair text-2xl text-ivory mb-2">BCA</h3>
            <p className="font-poppins text-gold text-xl tracking-widest font-semibold mb-4">1234 5678 90</p>
            <p className="font-cormorant text-lg text-ivory/80 mb-6">a.n. Danang Hadi Setiawan</p>
            
            <button
              onClick={() => copyToClipboard("1234567890")}
              className="inline-flex items-center justify-center w-full px-4 py-2 border border-gold/50 text-gold hover:bg-gold hover:text-black-elegant transition-colors rounded-lg font-poppins text-xs tracking-widest uppercase"
            >
              <Copy className="w-4 h-4 mr-2" />
              Salin Rekening
            </button>
          </motion.div>

          {/* Rekening 2 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="glass-panel p-8 rounded-2xl border border-gold/30 hover:border-gold/60 transition-colors"
          >
            <h3 className="font-playfair text-2xl text-ivory mb-2">Mandiri</h3>
            <p className="font-poppins text-gold text-xl tracking-widest font-semibold mb-4">0987 6543 21</p>
            <p className="font-cormorant text-lg text-ivory/80 mb-6">a.n. Arlina</p>
            
            <button
              onClick={() => copyToClipboard("0987654321")}
              className="inline-flex items-center justify-center w-full px-4 py-2 border border-gold/50 text-gold hover:bg-gold hover:text-black-elegant transition-colors rounded-lg font-poppins text-xs tracking-widest uppercase"
            >
              <Copy className="w-4 h-4 mr-2" />
              Salin Rekening
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
