"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-b from-gray-900 via-black to-black text-gray-300 mt-0 overflow-hidden">
      {/* 배경 글로우 */}
      <div className="pointer-events-none absolute inset-0 opacity-40">
        <div className="absolute -top-24 left-0 w-72 h-72 bg-blue-500/30 blur-3xl rounded-full" />
        <div className="absolute bottom-0 right-10 w-80 h-80 bg-emerald-500/25 blur-3xl rounded-full" />
      </div>

      <div className="container mx-auto px-4 py-12 md:py-16 relative z-10">
        <div className="grid md:grid-cols-2 gap-10 items-start">
          {/* 로고 & 소개 */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="absolute -inset-2 bg-blue-500/40 blur-md rounded-xl" />
                <Image
                  src="/images/logo_w.png"
                  alt="Trasys Logo"
                  width={140}
                  height={36}
                  className="relative"
                />
              </div>
            </div>
            <p className="text-xs text-gray-400 leading-relaxed">
              트래시스㈜는 AI와 공공 데이터를 바탕으로 도시의 안전과 효율,
              지속가능성을 높이는 솔루션을 만듭니다.
              <br />
              기술이 사람과 도시를 이어주는 보다 나은 연결을 고민합니다.
            </p>
            <motion.button
              whileHover={{ scale: 1.03, x: 2 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => {
                if (typeof window !== "undefined") {
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }
              }}
              className="inline-flex items-center gap-2 text-[11px] text-blue-300 hover:text-blue-200 mt-2"
            >
              맨 위로 이동
              <span className="text-xs">↑</span>
            </motion.button>
          </div>

          {/* 연락처 & Business */}
          <div className="flex flex-col md:flex-row gap-10">
            <div className="space-y-3 md:w-1/2">
              <h3 className="text-base font-semibold text-white mb-2">
                Contact
              </h3>
              <div className="text-xs space-y-1.5">
                <p className="text-gray-400">
                  <span className="text-gray-300 font-medium">주소</span> <br />
                  광주광역시 북구 자미로 6번길 45, 311호
                </p>
                <p className="text-gray-400">
                  <span className="text-gray-300 font-medium">TEL</span>{" "}
                  062-653-5555
                </p>
                <p className="text-gray-400">
                  <span className="text-gray-300 font-medium">FAX</span>{" "}
                  061-983-0297
                </p>
                <p className="text-gray-400">
                  <span className="text-gray-300 font-medium">E-mail</span>{" "}
                  <a
                    href="mailto:trasys21@nate.com"
                    className="text-blue-300 hover:text-blue-200 underline underline-offset-2"
                  >
                    trasys21@nate.com
                  </a>
                </p>
              </div>
            </div>

            <div className="space-y-3 md:w-1/2">
              <h3 className="text-base font-semibold text-white mb-2">
                Business
              </h3>
              <div className="flex flex-col items-start gap-2 text-gray-400 text-xs">
                <a
                  href="https://www.eunsung.net/"
                  className="hover:text-blue-300 transition-colors flex items-center gap-2"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-blue-400" />
                  EunSung
                </a>
                <a
                  href="https://reborntalk.net/login"
                  className="hover:text-blue-300 transition-colors flex items-center gap-2"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-yellow-400" />
                  RE:BORN TALK
                </a>
                <a
                  href="https://movingschoolzone.net/"
                  className="hover:text-blue-300 transition-colors flex items-center gap-2"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  Moving School Zone
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* 바닥 카피라이트 */}
        <div className="mt-10 pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-3 text-[11px] text-gray-500">
          <p>&copy; 2025 트래시스㈜. All rights reserved.</p>
          <p className="text-[10px] text-gray-500">
            대표자 : 양국승 &middot; AI로 도시의 다음을 준비합니다.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
