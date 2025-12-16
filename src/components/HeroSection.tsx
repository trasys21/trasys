"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import AnimatedText from "@/components/AnimatedText";

const HeroSection = () => {
  const { scrollYProgress } = useScroll();
  const parallaxY = useTransform(scrollYProgress, [0, 1], [0, -200]);

  return (
    <div className="relative h-screen overflow-hidden">
      <motion.div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/bg1.jpg')" }}
      />
      <div className="absolute inset-0 bg-black opacity-50" />
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 text-white">
        <AnimatedText
          text="AI로 만드는 안전하고 지속가능한 도시"
          className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight"
        />
        <motion.p
          className="text-lg md:text-xl mb-8 font-light"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 1 }}
        >
          재난 안전 대비로 지속 가능한 미래를 만드는 기업
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 1 }}
        >
          <Link
            href="/ai-solutions"
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-7 rounded-full text-base transition-transform transform hover:scale-105"
          >
            솔루션 보기
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;
