"use client";

import React from "react";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import Footer from "@/components/Footer";

interface AnimatedSectionProps {
  children: React.ReactNode;
  animation?: string;
}

const AnimatedSection: React.FC<AnimatedSectionProps> = ({
  children,
  animation,
}) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ${
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      } ${animation}`}
    >
      {children}
    </div>
  );
};

interface HistoryItem {
  year: string;
  event: string;
}

interface TimelineItemProps {
  item: HistoryItem;
  index: number;
}

const TimelineItem: React.FC<TimelineItemProps> = ({ item, index }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const isRight = index % 2 === 0;

  return (
    <div
      ref={ref}
      className={`mb-10 flex justify-between items-center w-full ${
        isRight ? "flex-row-reverse" : ""
      } transition-all duration-1000 ${
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="w-5/12" />
      <div className="z-20 flex items-center justify-center w-9 h-9 bg-blue-500 rounded-full shadow-[0_0_25px_rgba(59,130,246,0.8)]">
        <div className="w-4 h-4 bg-white rounded-full" />
      </div>
      <div
        className={`w-5/12 p-5 rounded-xl shadow-xl bg-white/5 border border-white/10 backdrop-blur-xl ${
          isRight ? "text-right" : "text-left"
        }`}
      >
        <p className="font-semibold text-sm text-blue-300">{item.year}</p>
        <p className="text-gray-100 text-sm mt-1">{item.event}</p>
      </div>
    </div>
  );
};

const AboutPage: React.FC = () => {
  const history: HistoryItem[] = [
    { year: "2025. 09", event: "스마트건설 강소기업 지정" },
    { year: "2025. 01", event: "CES 참가(행정안전부), KICT 지역대표기업 선정" },
    { year: "2024. 12", event: "지식재산경영 인증" },
    { year: "2024. 10", event: "창업성장기술개발사업 선정" },
    { year: "2024. 09", event: "직접생산 확인" },
    { year: "2024. 08", event: "트래시스(주) 상호 변경, 스테이지 입주" },
    { year: "2024. 07", event: "공공데이터 활용 창업경진대회 최우수상" },
    { year: "2024. 05", event: "국방 벤처기업 협약" },
    { year: "2024. 04", event: "초기창업패키지 창업기업 선정" },
    { year: "2024. 03", event: "직무발명보상우수기업 인증" },
    {
      year: "2023. 10",
      event: "광주지역 사업화 우수 10대특허 인증, 위치기반서비스사업자 등록",
    },
    { year: "2023. 09", event: "광주 도시문제 해결형 AI 솔루션 선정" },
    { year: "2023. 06", event: "개인위치정보사업자 등록" },
    { year: "2022. 04", event: "통신판매업 신고" },
    { year: "2022. 03", event: "옥외광고사업 등록" },
    { year: "2022. 02", event: "품질경영시스템 ISO 9001 인증" },
    { year: "2021. 11", event: "소셜 벤처기업 인증" },
    { year: "2021. 09", event: "재난안전산업 신기술 공모전 수상" },
    { year: "2021. 04", event: "연구개발 전담부서 인정" },
    { year: "2021. 03", event: "은성트래시스(주) 법인 설립 (지능" },
  ];

  return (
    <div className="bg-gradient-to-b from-gray-950 via-black to-gray-900 text-gray-50 min-h-screen">
      {/* Hero Section */}
      <div className="relative py-24 px-4 text-center overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-40">
          <div className="absolute -top-24 left-0 w-64 h-64 bg-blue-500/30 blur-3xl rounded-full" />
          <div className="absolute -bottom-24 right-0 w-72 h-72 bg-emerald-500/25 blur-3xl rounded-full" />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto">
          <p className="text-sm tracking-[0.3em] text-gray-400 mb-4 uppercase">
            About Trasys
          </p>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            AI로 도시의 내일을 설계하는 기업
          </h1>
          <p className="text-base md:text-lg text-gray-300">
            재난안전, 교통, 도시 문제를 데이터와 인공지능으로 풀어내는
            <br />
            스마트 시티 인텔리전스 기업, 트래시스를 소개합니다.
          </p>
        </div>
      </div>
      {/* Company Introduction */}
      <AnimatedSection animation="">
        <section className="py-16">
          <div className="container mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
            <div className="space-y-5">
              <h2 className="text-2xl md:text-3xl font-bold">Our Story</h2>
              <p className="text-sm md:text-base text-gray-300 leading-relaxed">
                AI를 활용한 지능형 교통 및 스마트 안전을 실현하는 소셜 벤처기업
                트래시스㈜는, 인공지능과 데이터 분석을 통해 도시의 다양한 문제를
                해결하는 것을 목표로 하고 있습니다. AI Convergence를 달성하기
                위해 Edge Intelligence 구축에 집중하며, 현장과 데이터를 연결하는
                기술을 개발하고 있습니다.
              </p>
              <p className="text-sm md:text-base text-gray-300 leading-relaxed">
                눈 앞의 이익보다 국민의 안전을 최우선으로 하는 차별화된 기술
                선도 기업으로 자리매김하겠습니다.
              </p>
            </div>
            <div className="relative h-72 md:h-80 rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-white/5 backdrop-blur-xl">
              <Image
                src="/images/bg1.jpg"
                alt="About Us Image"
                fill
                style={{ objectFit: "cover" }}
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-black/40 via-transparent to-blue-500/20" />
            </div>
          </div>
        </section>
      </AnimatedSection>
      {/* Company History */}
      <section className="py-20 bg-gradient-to-b from-black/60 via-gray-950 to-black/80">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-4">
            회사 연혁
          </h2>
          <p className="text-sm text-center text-gray-400 mb-14">
            작은 시도에서 시작해, 도시의 안전과 스마트시티를 책임지는 파트너로
            성장해 온 트래시스의 발자취입니다.
          </p>
          <div className="relative max-w-4xl mx-auto">
            {/* 세로 라인 */}
            <div className="absolute left-1/2 w-[2px] h-full bg-gradient-to-b from-blue-500/60 via-gray-600/40 to-emerald-400/60 transform -translate-x-1/2" />
            {history.map((item, index) => (
              <TimelineItem key={index} item={item} index={index} />
            ))}
          </div>
        </div>
      </section>
      {/* Join Us Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            함께 도시의 미래를 만들 사람을 기다립니다
          </h2>
          <p className="text-sm md:text-base text-gray-300 mb-8">
            트래시스는 기술로 사회 문제를 해결하고 싶은 사람, 현장에서 답을 찾는
            사람, 공공과 도시의 변화를 이끌고 싶은 사람과 함께하고 싶습니다.
          </p>
          <a
            href="https://www.saramin.co.kr/zf_user/search?search_area=main&search_done=y&search_optional_item=n&searchType=recently&searchword=%ED%8A%B8%EB%9E%98%EC%8B%9C%EC%8A%A4"
            target="_blank"
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-full text-sm md:text-base transition-transform transform hover:scale-105 shadow-lg shadow-blue-500/30"
          >
            채용 공고 보기
          </a>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default AboutPage;
