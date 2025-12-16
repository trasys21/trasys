"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

// 수상 내역 아이템 인터페이스
interface AwardItem {
  src: string;
  alt: string;
  title: string;
  date: string;
}

// 수상 내역 데이터
const awards: AwardItem[] = [
  {
    src: "/images/certificate/250716.jpg",
    alt: "광주광역시 공공데이터 활용 창업경진대회",
    title: "공공데이터 활용 창업경진대회",
    date: "2025.07.16",
  },
  {
    src: "/images/certificate/250709.jpg",
    alt: "방위사업청 국방기술을 활용한 창업경진대회",
    title: "국방기술을 활용한 창업경진대회",
    date: "2025.07.09",
  },
  {
    src: "/images/certificate/241011.jpg",
    alt: "광산구 탄소중립 아이디어 공모전",
    title: "탄소중립 아이디어 공모전",
    date: "2024.10.11",
  },
  {
    src: "/images/certificate/231219.jpg",
    alt: "북구청장 표창장",
    title: "표창장",
    date: "2023.12.19",
  },
  {
    src: "/images/certificate/231207.jpg",
    alt: "광주광역시 표창패",
    title: "표창패",
    date: "2023.12.07",
  },
  {
    src: "/images/certificate/221216.jpg",
    alt: "한국발명진흥회 대한민국 발명특허대전",
    title: "대한민국 발명특허대전 (입상)",
    date: "2022.12.16",
  },
];

// 슬라이더 카드 컴포넌트
const SliderCard: React.FC<{ item: AwardItem }> = ({ item }) => {
  return (
    <div className="bg-white/10 rounded-lg overflow-hidden shadow-lg transition-all duration-300 h-full flex flex-col">
      <div className="relative w-full flex-grow pt-[75%]">
        <Image
          src={item.src}
          alt={item.alt}
          fill
          style={{ objectFit: "contain" }}
          className="p-4"
        />
      </div>
      <div className="p-5 text-center">
        <p className="text-sm text-gray-400">{item.date}</p>
        <h3 className="font-semibold text-base text-gray-100 mt-1 truncate">{item.title}</h3>
      </div>
    </div>
  );
};

// 수상 내역 슬라이더 컴포넌트
const AwardsSlider: React.FC = () => {
  return (
    <div className="relative max-w-7xl mx-auto">
      <Swiper
        modules={[Navigation, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 2, spaceBetween: 20 },
          1024: { slidesPerView: 3, spaceBetween: 30 },
          1280: { slidesPerView: 4, spaceBetween: 30 },
        }}
        navigation={{
          nextEl: '.swiper-button-next-custom',
          prevEl: '.swiper-button-prev-custom',
        }}
        loop={true}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        className="!px-10" // Add padding to make space for arrows
      >
        {awards.map((award, index) => (
          <SwiperSlide key={index}>
            <SliderCard item={award} />
          </SwiperSlide>
        ))}
      </Swiper>
      <button className="swiper-button-prev-custom absolute top-1/2 -translate-y-1/2 left-0 z-10 bg-white/10 p-2 rounded-full hover:bg-white/20 transition-colors">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
      </button>
      <button className="swiper-button-next-custom absolute top-1/2 -translate-y-1/2 right-0 z-10 bg-white/10 p-2 rounded-full hover:bg-white/20 transition-colors">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
      </button>
    </div>
  );
};

const AwardsSection: React.FC = () => {
  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4">주요 수상 및 인증</h2>
        <p className="text-center text-gray-400 mb-12">트래시스의 기술력과 혁신은 다양한 기관으로부터 인정받고 있습니다.</p>
        <AwardsSlider />
        <div className="text-center mt-12">
          <Link href="/awards" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-full text-sm md:text-base transition-transform transform hover:scale-105 shadow-lg shadow-blue-500/30">
            더보기
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AwardsSection;
