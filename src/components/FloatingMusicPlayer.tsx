"use client";

import { useState, useRef, useEffect } from "react";
import { Music, Music2 } from "lucide-react";
import { motion } from "framer-motion";

export default function FloatingMusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Memulai pemutaran setelah komponen mount dan isOpened aktif
    if (audioRef.current) {
      audioRef.current.volume = 0.5;
      const playPromise = audioRef.current.play();
      
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            setIsPlaying(true);
          })
          .catch((error) => {
            console.log("Autoplay was prevented:", error);
            setIsPlaying(false);
          });
      }
    }
  }, []);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <>
      <audio
        ref={audioRef}
        src="/music/pujaningsih.m4a"
        loop
        preload="auto"
      />
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.5 }}
        onClick={togglePlay}
        className={`fixed bottom-6 right-6 z-50 w-12 h-12 rounded-full flex items-center justify-center border border-gold/50 shadow-[0_0_15px_rgba(212,175,55,0.3)] transition-all duration-300 ${
          isPlaying ? "bg-gold text-black-elegant animate-pulse" : "bg-black-elegant/80 text-gold backdrop-blur-md"
        }`}
      >
        {isPlaying ? <Music className="w-5 h-5 animate-spin-slow" /> : <Music2 className="w-5 h-5" />}
      </motion.button>
    </>
  );
}
