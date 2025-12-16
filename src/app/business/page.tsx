"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";

// 사업 아이템 인터페이스
interface BusinessItem {
  name: string;
  description: string;
  link: string;
  logoSrc: string; // 로고 이미지 경로
  color: string; // 포인트 색상 (예: bg-blue-400)
  width: number;
}

// 사업 데이터
const businesses: BusinessItem[] = [
  {
    name: "EunSung",
    description:
      "트래시스의 모태가 되는 기업으로, 다양한 IT 솔루션을 제공합니다.",
    link: "https://www.eunsung.net/",
    logoSrc: "/images/eunsung.svg", // 임시 로고, 실제 로고로 교체 필요
    color: "bg-blue-400",
    width: 300,
  },
  {
    name: "RE:BORN TALK",
    description: "사람의 마음을 치유해주는 AI 상담 플랫폼, 리본톡입니다.",
    link: "https://reborntalk.net/login",
    logoSrc: "/images/reborntalk.svg", // 임시 로고, 실제 로고로 교체 필요
    color: "bg-yellow-400",
    width: 300,
  },
  {
    name: "Moving School Zone",
    description:
      "어린이 보호구역 안전을 위한 스마트 솔루션, 무빙 스쿨존입니다.",
    link: "https://movingschoolzone.net/",
    logoSrc: "/images/MovingSchoolZone.svg", // 임시 로고, 실제 로고로 교체 필요
    color: "bg-emerald-400",
    width: 230,
  },
];

// 사업 카드 컴포넌트
const BusinessCard: React.FC<{ item: BusinessItem }> = ({ item }) => {
  return (
    <Link
      href={item.link}
      target="_blank"
      rel="noopener noreferrer"
      className="block"
    >
      <div className="bg-white/5 border border-white/10 rounded-xl overflow-hidden shadow-lg hover:shadow-blue-500/30 transition-all duration-300 transform hover:-translate-y-1 group h-full flex flex-col">
        <div className="relative w-full h-40 flex justify-center items-center p-4">
          {/* 임시 로고 사용, 실제 로고로 교체 필요 */}
          <Image
            src={item.logoSrc}
            alt={`${item.name} Logo`}
            width={item.width}
            height={40}
            style={{ objectFit: "contain" }}
          />
        </div>
        <div className="p-5 text-center flex-grow">
          <h3 className="font-semibold text-xl text-gray-100 mt-1">
            {item.name}
          </h3>
          <p className="text-sm text-gray-300 mt-2">{item.description}</p>
        </div>
        <div className="p-5 border-t border-white/10 text-center">
          <span className="text-blue-400 group-hover:text-blue-300 transition-colors text-sm">
            바로가기 &rarr;
          </span>
        </div>
      </div>
    </Link>
  );
};

// 사업 소개 페이지 컴포넌트
const BusinessPage: React.FC = () => {
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
            Our Businesses
          </p>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            트래시스의 사업 분야
          </h1>
          <p className="text-base md:text-lg text-gray-300">
            다양한 분야에서 혁신적인 기술과 서비스를 제공하며 미래를
            만들어갑니다.
          </p>
        </div>
      </div>

      {/* Business Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {businesses.map((business, index) => (
              <BusinessCard key={index} item={business} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BusinessPage;
