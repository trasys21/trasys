"use client";

import React, { useState } from "react";
import Image from "next/image";
import Footer from "@/components/Footer";

// 수상 내역 아이템 인터페이스
interface AwardItem {
  src: string;
  alt: string;
  title: string;
  date: string;
  width: number;
  height: number;
}

// 모달 컴포넌트

const Modal: React.FC<{
  src: string;
  alt: string;
  width: number;
  height: number;
  onClose: () => void;
}> = ({ src, alt, width, height, onClose }) => {
  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-75 z-50 flex justify-center items-center p-4"
      onClick={onClose}
    >
      <div
        className="relative bg-white p-4 rounded-lg shadow-xl w-full h-full max-w-5xl max-h-[90vh]" // Adjusted for better sizing
        onClick={(e) => e.stopPropagation()} // 모달 내부 클릭 시 닫히지 않도록 함
      >
        <button
          onClick={onClose}
          className="absolute -top-4 -right-4 bg-white rounded-full p-2 text-black shadow-lg z-10" // Added z-10 to ensure button is on top
          aria-label="Close modal"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        <div className="relative w-full h-full flex justify-center items-center">
          {" "}
          {/* Centering the image */}
          <Image
            src={src}
            alt={alt}
            width={width}
            height={height}
            style={{ objectFit: "contain" }}
            className="w-full h-full"
          />
        </div>
      </div>
    </div>
  );
};

// 수상 내역 데이터

const awards: AwardItem[] = [
  {
    src: "/images/certificate/250716.jpg",
    alt: "광주광역시 공공데이터 활용 창업경진대회",
    title: "공공데이터 활용 창업경진대회",
    date: "2025.07.16",
    width: 1920,
    height: 2716,
  },
  {
    src: "/images/certificate/250709.jpg",
    alt: "방위사업청 국방기술을 활용한 창업경진대회",
    title: "국방기술을 활용한 창업경진대회",
    date: "2025.07.09",
    width: 1920,
    height: 2716,
  },
  {
    src: "/images/certificate/241011.jpg",
    alt: "광산구 탄소중립 아이디어 공모전",
    title: "탄소중립 아이디어 공모전",
    date: "2024.10.11",
    width: 1920,
    height: 2716,
  },
  {
    src: "/images/certificate/231219.jpg",
    alt: "북구청장 표창장",
    title: "표창장",
    date: "2023.12.19",
    width: 1920,
    height: 2716,
  },
  {
    src: "/images/certificate/231207.jpg",
    alt: "광주광역시 표창패",
    title: "표창패",
    date: "2023.12.07",
    width: 1624,
    height: 2155,
  },
  {
    src: "/images/certificate/221216.jpg",
    alt: "한국발명진흥회 대한민국 발명특허대전",
    title: "대한민국 발명특허대전 (입상)",
    date: "2022.12.16",
    width: 595,
    height: 841,
  },
  {
    src: "/images/certificate/220916.jpg",
    alt: "영광군 PM 이용 영상수기 공모전",
    title: "PM 이용 영상수기 공모전 (우수상)",
    date: "2022.09.16",
    width: 1653,
    height: 2337,
  },
  {
    src: "/images/certificate/220607.jpg",
    alt: "서울자치경찰위원회 서울형 자치경찰 정책 아이디어 공모전",
    title: "서울형 자치경찰 정책 아이디어 공모전 (장려상)",
    date: "2022.06.07",
    width: 1920,
    height: 2716,
  },
  {
    src: "/images/certificate/211214.jpg",
    alt: "KOVA 표창장",
    title: "표창장",
    date: "2021.12.14",
    width: 1920,
    height: 2716,
  },
  {
    src: "/images/certificate/191204.jpg",
    alt: "조달청 표창장",
    title: "표창장",
    date: "2019.12.04",
    width: 1920,
    height: 2716,
  },
  {
    src: "/images/certificate/191108.jpg",
    alt: "전라남도 표창장",
    title: "표창장",
    date: "2019.11.08",
    width: 1920,
    height: 2716,
  },
  {
    src: "/images/certificate/191002.jpg",
    alt: "과학기술부 표창장",
    title: "표창장",
    date: "2019.10.02",
    width: 1920,
    height: 2716,
  },
  {
    src: "/images/certificate/171023.jpg",
    alt: "특허청 광주시민발명경진대회",
    title: "광주시민발명경진대회 (대상)",
    date: "2017.10.23",
    width: 1920,
    height: 2716,
  },
  {
    src: "/images/certificate/051101.jpg",
    alt: "영광군 표창장",
    title: "표창장",
    date: "2005.11.01",
    width: 1136,
    height: 1616,
  },
];

// 수상 내역 카드 컴포넌트

const AwardCard: React.FC<{ item: AwardItem; onClick: () => void }> = ({
  item,
  onClick,
}) => {
  return (
    <div
      className="bg-white/5 border border-white/10 rounded-xl overflow-hidden shadow-lg hover:shadow-blue-500/30 transition-all duration-300 transform hover:-translate-y-1 group cursor-pointer"
      onClick={onClick}
    >
      <div className="relative w-full pt-[75%] flex justify-center items-center">
        {" "}
        {/* Fixed aspect ratio container (4:3) */}
        <Image
          src={item.src}
          alt={item.alt}
          width={item.width}
          height={item.height}
          style={{ objectFit: "contain" }}
          className="absolute top-0 left-0 w-full h-full p-4"
        />
      </div>

      <div className="p-5 text-center">
        <p className="text-sm text-gray-400">{item.date}</p>

        <h3 className="font-semibold text-base text-gray-100 mt-1">
          {item.title}
        </h3>
      </div>
    </div>
  );
};

// 수상 내역 페이지 컴포넌트

const AwardsPage: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<AwardItem | null>(null);

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
            Awards & Certificates
          </p>

          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            수상 및 인증
          </h1>

          <p className="text-base md:text-lg text-gray-300">
            혁신적인 기술과 끊임없는 노력으로 인정받은 트래시스의 주요 수상 및
            인증 내역입니다.
          </p>
        </div>
      </div>

      {/* Awards Grid */}

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {awards.map((award, index) => (
              <AwardCard
                key={index}
                item={award}
                onClick={() => setSelectedImage(award)}
              />
            ))}
          </div>
        </div>
      </section>

      <Footer />

      {selectedImage && (
        <Modal
          src={selectedImage.src}
          alt={selectedImage.alt}
          width={selectedImage.width}
          height={selectedImage.height}
          onClose={() => setSelectedImage(null)}
        />
      )}
    </div>
  );
};

export default AwardsPage;