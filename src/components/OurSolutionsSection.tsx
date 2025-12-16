"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "framer-motion";

const OurSolutionsSection = () => {
  return (
    <section className="py-28 bg-gradient-to-b from-gray-900 via-gray-950 to-black text-white relative overflow-hidden">
      {/* 배경용 블러 구름들 */}
      <div className="pointer-events-none absolute inset-0 opacity-40">
        <div className="absolute -top-32 -left-10 w-72 h-72 bg-blue-500/40 blur-3xl rounded-full" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-500/30 blur-3xl rounded-full" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <p className="text-xs tracking-[0.35em] uppercase text-gray-400 mb-4">
            Our Solutions
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
            도시를 바꾸는 세 가지 인공지능
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto text-sm leading-relaxed">
            교통·환경·안전을 하나의 데이터 흐름으로 연결해,
            <span className="font-semibold text-blue-300">
              모두가 체감할 수 있는 도시의 지능
            </span>
            을 만들어갑니다. 데이터는 단순한 수치가 아니라, 사람들의 하루를 더
            안전하고 편리하게 만드는
            <span className="text-blue-200">도시의 언어</span>라고 믿습니다.
          </p>

          <p className="text-gray-300 max-w-2xl mx-auto text-sm leading-relaxed mt-2">
            AI 기술로 사회가 직면한 문제를 예측하고 해결하며, 지속가능한
            시스템을 구축합니다. 우리는 기술이 사람을 대체하는 것이 아니라,
            <span className="font-semibold text-blue-300">
              사람과 도시를 함께 성장시키는 동반자
            </span>
            가 되어야 한다고 믿습니다.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* 공통 카드 렌더링을 위해 배열 사용 */}
          {[
            {
              key: "ai-bis",
              title: "AI-BIS",
              badge: "Smart Mobility",
              img: "/images/bus.png",
              color: "from-blue-500/80 to-cyan-400/80",
              desc1:
                "AI를 적용하여 버스의 실시간 위치, 도착 예정 시간, 승하차 여부, 혼잡도 정보 제공",
              desc2:
                "시민들의 편리한 버스 이용을 돕는 인공지능 버스정보시스템",
            },
            {
              key: "climate-keeper",
              title: "기후지킴",
              badge: "Climate Resilience",
              img: "/images/climate.png",
              color: "from-emerald-500/80 to-lime-400/80",
              desc1: "실시간 도로 열지도+ 시공간 AI 예측 + 자동 살수차 케어",
              desc2:
                "시민 알림·행정 대시보드를 하나로 통합한 스마트시티 기후위기 대응 솔루션",
            },
            {
              key: "safety-intelligence",
              title: "안전+지능",
              badge: "Urban Safety",
              img: "/images/safe.png",
              color: "from-orange-500/80 to-rose-500/80",
              desc1: "AI 기반 위험성 평가, TBM 자동화, 실시간 알림",
              desc2:
                "법정 문서 자동 정리 기능을 갖춘 중대재해 대응형 스마트 안전관리 시스템",
            },
          ].map((item, index) => (
            <motion.div
              key={item.key}
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.9,
                delay: index * 0.15,
                type: "spring",
              }}
              whileHover={{
                y: -12,
                rotateX: 6,
                rotateY: -3,
                boxShadow: "0 35px 60px -25px rgba(0,0,0,0.6)",
              }}
              className="relative group [perspective:1200px]"
            >
              {/* 카드 외곽 그라데이션 보더 */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/10 via-white/5 to-transparent opacity-0 group-hover:opacity-100 blur group-hover:blur-xl transition-all duration-500" />

              <div className="relative rounded-3xl bg-gradient-to-b from-white/10 via-gray-900/80 to-black/90 border border-white/10 overflow-hidden backdrop-blur-xl">
                {/* 상단 이미지 영역 */}
                <div className="relative h-52 w-full overflow-hidden">
                  <div className="relative h-52 w-full flex items-center justify-center bg-black/40">
                    <Image
                      src={item.img}
                      alt={item.title}
                      width={170}
                      height={170}
                      className="object-contain transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  {/* 위쪽 컬러 오버레이 */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-tr ${item.color} opacity-0 group-hover:opacity-60 mix-blend-soft-light transition-opacity duration-500 animate-pulse`}
                  />
                  {/* 뱃지 */}
                  <div className="absolute top-4 left-4">
                    <span className="inline-flex items-center gap-1 rounded-full bg-black/50 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-gray-100 border border-white/20">
                      <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      {item.badge}
                    </span>
                  </div>
                </div>

                {/* 내용 영역 */}
                <div className="p-7 flex flex-col h-full">
                  <div className="mb-4">
                    <h3 className="text-xl font-bold mb-2 flex items-center justify-center gap-2">
                      <span>{item.title}</span>
                      <span className="text-[11px] px-2 py-1 rounded-full bg-white/5 border border-white/10 text-gray-300">
                        AI Solution
                      </span>
                    </h3>
                  </div>

                  <p className="text-xs text-gray-300 leading-relaxed mb-3">
                    {item.desc1}
                  </p>
                  <p className="text-xs text-gray-400 leading-relaxed mb-5">
                    {item.desc2}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurSolutionsSection;
