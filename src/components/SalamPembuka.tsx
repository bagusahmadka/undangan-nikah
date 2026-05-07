"use client";

import { motion } from "framer-motion";

export default function SalamPembuka() {
  return (
    <section className="py-20 relative z-10 text-center px-6">
      <div className="container mx-auto max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h3 className="font-cormorant text-2xl md:text-4xl text-gold mb-6">
            Assalamu'alaikum Warahmatullahi Wabarakatuh
          </h3>
          
          <p className="font-poppins text-sm md:text-base text-ivory/80 leading-relaxed mb-8">
            Kanthi nyenyuwun rido saha rahmatipun Gusti Allah SWT, mugi-mugi
            lumaraping adicara saged gangsar lancar. Kanthi raos tulus ing
            manah, kawula ngaturaken sugeng rawuh saha nyuwun donga pangestu
            bapak/ibu/sadherek sekalian wonten ing pahargyan dhauping putra-putri
            kawula:
          </p>
          
          <div className="w-16 h-[1px] bg-gold/50 mx-auto mb-8" />
          
          <p className="font-cormorant text-xl text-ivory/90 italic">
            "Dan di antara tanda-tanda kekuasaan-Nya ialah Dia menciptakan untukmu
            isteri-isteri dari jenismu sendiri, supaya kamu cenderung dan merasa
            tenteram kepadanya, dan dijadikan-Nya diantaramu rasa kasih dan sayang.
            Sesungguhnya pada yang demikian itu benar-benar terdapat tanda-tanda
            bagi kaum yang berfikir."
          </p>
          <p className="font-poppins text-sm text-gold mt-4 font-light tracking-widest">
            (QS. AR-RUM: 21)
          </p>
        </motion.div>
      </div>
    </section>
  );
}
