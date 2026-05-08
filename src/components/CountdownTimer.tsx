"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function CountdownTimer() {
  const [isMounted, setIsMounted] = useState(false);
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    setIsMounted(true);
    // Set wedding date to 27 Juli 2026
    const targetDate = new Date("2026-07-27T08:00:00");

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;

      if (distance < 0) {
        clearInterval(interval);
        return;
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 relative z-10">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="glass-panel max-w-4xl mx-auto rounded-3xl p-8 md:p-12 text-center relative overflow-hidden"
        >
          {/* Subtle Batik Overlay for the panel */}
          <div className="absolute inset-0 bg-pattern opacity-5 mix-blend-overlay"></div>
          
          <h2 className="font-playfair text-3xl md:text-5xl text-gold mb-10 relative z-10">
            Menanti Hari Bahagia
          </h2>
          
          <div className="grid grid-cols-4 gap-4 md:gap-8 max-w-2xl mx-auto relative z-10">
            {[
              { label: "Hari", value: timeLeft.days },
              { label: "Jam", value: timeLeft.hours },
              { label: "Menit", value: timeLeft.minutes },
              { label: "Detik", value: timeLeft.seconds },
            ].map((item, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="w-16 h-16 md:w-24 md:h-24 rounded-full border border-gold/40 flex items-center justify-center bg-ivory/50 mb-3 shadow-[0_0_15px_rgba(212,175,55,0.15)]">
                  <span className="font-playfair text-2xl md:text-4xl text-black-elegant">
                    {isMounted ? item.value : "0"}
                  </span>
                </div>
                <span className="font-poppins text-xs md:text-sm text-gold tracking-widest uppercase">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
