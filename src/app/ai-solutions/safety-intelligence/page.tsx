import Image from 'next/image';

const SafetyIntelligencePage = () => {
  return (
    <div className="bg-white text-gray-800 min-h-screen">
      <div className="container mx-auto px-4 py-24">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="relative h-96 rounded-lg overflow-hidden shadow-2xl">
            <Image
              src="/images/safe.png"
              alt="Safety Intelligence"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="pr-8">
            <h1 className="text-5xl font-extrabold mb-6">안전+지능</h1>
            <p className="text-lg text-gray-600 mb-6">
              AI 기반 위험성 평가, TBM 자동화, 실시간 알림, 법정 문서 자동 정리
              기능을 갖춘 중대재해 대응형 스마트 안전관리 시스템
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SafetyIntelligencePage;