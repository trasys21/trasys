"use client";

import { motion, useInView } from "framer-motion";
import {
  FaGlobeAmericas,
  FaHandHoldingUsd,
  FaUsers,
} from "react-icons/fa";

const EsgImpactSection = () => {
  return (
    <section className="py-28 bg-gradient-to-b from-black via-gray-950 to-gray-900 text-white relative overflow-hidden">
      {/* 배경 글로우 */}
      <div className="pointer-events-none absolute inset-0 opacity-40">
        <div className="absolute -top-10 right-0 w-80 h-80 bg-emerald-500/40 blur-3xl rounded-full" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/30 blur-3xl rounded-full" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* 섹션 타이틀 */}
        <div className="text-center mb-16">
          <p className="text-xs tracking-[0.35em] uppercase text-gray-400 mb-4">
            ESG & IMPACT
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
            기술 혁신과 함께 가는 지속가능한 가치
          </h2>
          <p className="text-gray-300 max-w-3xl mx-auto text-sm leading-relaxed">
            단순한 실적이 아니라, 도시와 시민, 그리고 다음 세대를 함께
            바라보는
            <span className="font-semibold text-emerald-300">
              {" "}
              책임 있는 기술
            </span>
            을 지향합니다.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* ESG 경영 실천 */}
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.96 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.9, type: "spring" }}
            whileHover={{
              y: -10,
              rotateX: 5,
              rotateY: -4,
              boxShadow: "0 30px 55px -30px rgba(0,0,0,0.9)",
            }}
            className="relative group [perspective:1200px]"
          >
            {/* 외곽 글로우 */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-emerald-400/40 via-white/10 to-transparent opacity-0 group-hover:opacity-100 blur-xl transition-all duration-500" />
            <div className="relative rounded-3xl bg-gradient-to-b from-white/10 via-gray-900/90 to-black border border-white/10 backdrop-blur-xl p-8 h-full flex flex-col">
              <div className="flex items-center justify-center mb-5">
                <div className="relative">
                  <div className="absolute -inset-3 bg-emerald-500/30 blur-xl rounded-full" />
                  <FaGlobeAmericas className="relative text-4xl text-emerald-300" />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3 text-center">
                ESG 경영 실천
              </h3>
              <p className="text-xs text-emerald-200 text-center mb-4 uppercase tracking-wide">
                Governance · Transparency · Responsibility
              </p>
              <p className="text-xs text-gray-200 leading-relaxed mb-4">
                단기 성과에 머무르지 않고, 모든 의사결정의 기준에
                <span className="font-semibold text-emerald-300">
                  {" "}
                  환경·사회·지배구조
                </span>
                를 두고 움직입니다. 기술 투자, 프로젝트 선정, 파트너십까지 ESG
                관점에서 재검토하며
                <span className="font-semibold"> 지속 가능한 성장 구조</span>
                를 설계합니다.
              </p>
              <p className="text-[11px] text-gray-400 mt-auto pt-3 border-t border-white/10 text-right">
                데이터로 증명되는 책임 있는 경영
              </p>
            </div>
          </motion.div>

          {/* 사회적 비용 절감 */}
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.96 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.9, delay: 0.1, type: "spring" }}
            whileHover={{
              y: -10,
              rotateX: 5,
              rotateY: -4,
              boxShadow: "0 30px 55px -30px rgba(0,0,0,0.9)",
            }}
            className="relative group [perspective:1200px]"
          >
            {/* 외곽 글로우 */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-400/40 via-white/10 to-transparent opacity-0 group-hover:opacity-100 blur-xl transition-all duration-500" />
            <div className="relative rounded-3xl bg-gradient-to-b from-white/10 via-gray-900/90 to-black border border-white/10 backdrop-blur-xl p-8 h-full flex flex-col">
              <div className="flex items-center justify-center mb-5">
                <div className="relative">
                  <div className="absolute -inset-3 bg-blue-500/30 blur-xl rounded-full" />
                  <FaHandHoldingUsd className="relative text-4xl text-blue-300" />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3 text-center">
                사회적 비용 절감
              </h3>
              <p className="text-xs text-blue-200 text-center mb-4 uppercase tracking-wide">
                Prevention · Efficiency · Optimization
              </p>
              <p className="text-xs text-gray-200 leading-relaxed mb-4">
                재난, 사고, 교통 체증, 시설 노후화 등으로 발생하는
                <span className="font-semibold text-blue-300">
                  {" "}
                  사회적 손실 비용
                </span>
                을 데이터로 분석합니다. 예측과 사전 대응을 통해 사고 발생
                가능성을 낮추고, 예산과 자원이 가장 필요한 곳에 배분될 수
                있도록
                <span className="font-semibold"> 효율적인 도시 운영</span>을
                뒷받침합니다.
              </p>
              <p className="text-[11px] text-gray-400 mt-auto pt-3 border-t border-white/10 text-right">
                “사고 후 복구”에서 “사고 전 예방”으로
              </p>
            </div>
          </motion.div>

          {/* 지역사회 동반 성장 */}
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.96 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.9, delay: 0.2, type: "spring" }}
            whileHover={{
              y: -10,
              rotateX: 5,
              rotateY: -4,
              boxShadow: "0 30px 55px -30px rgba(0,0,0,0.9)",
            }}
            className="relative group [perspective:1200px]"
          >
            {/* 외곽 글로우 */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-amber-400/40 via-white/10 to-transparent opacity-0 group-hover:opacity-100 blur-xl transition-all duration-500" />
            <div className="relative rounded-3xl bg-gradient-to-b from-white/10 via-gray-900/90 to-black border border-white/10 backdrop-blur-xl p-8 h-full flex flex-col">
              <div className="flex items-center justify-center mb-5">
                <div className="relative">
                  <div className="absolute -inset-3 bg-amber-500/30 blur-xl rounded-full" />
                  <FaUsers className="relative text-4xl text-amber-300" />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3 text-center">
                지역사회 동반 성장
              </h3>
              <p className="text-xs text-amber-200 text-center mb-4 uppercase tracking-wide">
                Community · Inclusion · Collaboration
              </p>
              <p className="text-xs text-gray-200 leading-relaxed mb-4">
                기술이 일부만을 위한 것이 아니라,
                <span className="font-semibold text-amber-300">
                  {" "}
                  지역과 시민 모두가 함께 쓰는 자산
                </span>
                이 되도록 합니다. 지자체·공공기관·지역 기업과 협력해 일자리,
                교육, 안전, 복지 등 다양한 영역에서
                <span className="font-semibold">
                  {" "}
                  실질적인 지역 상생 모델
                </span>
                을 만들어갑니다.
              </p>
              <p className="text-[11px] text-gray-400 mt-auto pt-3 border-t border-white/10 text-right">
                기술이 남기는 것은 “서비스”가 아니라 “관계”
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default EsgImpactSection;
