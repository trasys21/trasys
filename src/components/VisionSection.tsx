"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import {
  FaShieldAlt,
  FaLightbulb,
  FaLeaf,
} from "react-icons/fa";
import { useInView } from "react-intersection-observer";
import AnimatedSection from "@/components/AnimatedSection"; // Import the new AnimatedSection

const VisionSection = () => {
  const titleRef = useRef<HTMLDivElement | null>(null);
  const { ref: step1Ref, inView: step1InView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  const { ref: step2Ref, inView: step2InView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  const { ref: cardsRef, inView: cardsInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section className="bg-gray-900 text-white py-28">
      <div className="max-w-5xl mx-auto px-4">
        {/* OUR VISION 타이틀 */}
        <div ref={titleRef} className="text-center mb-20">
          <p className="text-xs tracking-[0.3em] uppercase text-gray-400 mb-4">
            OUR VISION
          </p>
          <h2 className="text-2xl md:text-4xl font-extrabold leading-tight">
            공공성과 혁신성을 겸비한
            <br />
            AI 솔루션으로 더 나은 도시를 만듭니다.
          </h2>
        </div>

        {/* 1단계: 짧은 비전 문장 / 서브 타이틀 */}
        <motion.div
          ref={step1Ref}
          initial={{ opacity: 0, y: 40 }}
          animate={step1InView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h3 className="text-lg md:text-xl font-semibold text-blue-200 mb-5">
            사람을 위한 기술, 도시를 위한 AI
          </h3>
          <p className="text-base md:text-lg text-gray-200 leading-relaxed">
            우리는 기술이 사람의 삶을 변화시킬 때, 그 중심에는 언제나 공공의
            가치가 있어야 한다고 믿습니다.
          </p>
        </motion.div>

        {/* 2단계: 긴 설명 문단 */}
        <motion.div
          ref={step2Ref}
          initial={{ opacity: 0, y: 40 }}
          animate={step2InView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="space-y-5 text-center mb-20"
        >
          <p className="text-base md:text-lg text-gray-200 leading-relaxed">
            도시의 안전, 효율, 환경을 하나로 잇는 AI 기술로 시민이 체감할 수
            있는 변화를 만듭니다. 데이터와 알고리즘을 통해 복잡한 도시 문제를
            분석하고, 더 나은 의사결정을 지원합니다.
          </p>
          <p className="text-base md:text-lg text-gray-200 leading-relaxed">
            단순한 자동화나 편리함을 넘어, 사회의 구조적인 문제를 해결하고
            모두가 더 나은 방향으로 나아갈 수 있는 사람 중심의 기술을
            개발합니다. 이것이 우리가 꿈꾸는 도시의 미래입니다.
          </p>
        </motion.div>

        {/* 3단계: Safety / Innovation / Sustainability 카드들 */}
        <motion.div
          ref={cardsRef}
          initial={{ opacity: 0, y: 50 }}
          animate={cardsInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="grid md:grid-cols-3 gap-6"
        >
          {/* Safety */}
          <div className="flex flex-col items-center p-5 bg-white/5 rounded-xl border border-white/10 backdrop-blur">
            <FaShieldAlt className="text-blue-400 text-3xl mb-3" />
            <h4 className="text-base font-bold mb-2">안전 (Safety)</h4>
            <p className="text-xs text-gray-200 leading-relaxed text-center">
              국민의 생명과 안전을 최우선 가치로 두고, 작은 위험 신호도 놓치지
              않는 예측형 AI로 사고 이전의 예방을 추구합니다.
            </p>
          </div>

          {/* Innovation */}
          <div className="flex flex-col items-center p-5 bg-white/5 rounded-xl border border-white/10 backdrop-blur">
            <FaLightbulb className="text-yellow-300 text-3xl mb-3" />
            <h4 className="text-base font-bold mb-2">혁신 (Innovation)</h4>
            <p className="text-xs text-gray-200 leading-relaxed text-center">
              AI, IoT, 빅데이터, 클라우드를 통합해 도시의 자원을 효율적으로
              활용하고 사회의 긍정적인 변화를 이끌어냅니다.
            </p>
          </div>

          {/* Sustainability */}
          <div className="flex flex-col items-center p-5 bg-white/5 rounded-xl border border-white/10 backdrop-blur">
            <FaLeaf className="text-green-400 text-3xl mb-3" />
            <h4 className="text-base font-bold mb-2">
              지속가능성 (Sustainability)
            </h4>
            <p className="text-xs text-gray-200 leading-relaxed text-center">
              환경을 생각하는 기술 개발을 통해 에너지 절감과 탄소 저감에
              기여하며, 다음 세대를 위한 지속 가능한 도시를 설계합니다.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default VisionSection;
