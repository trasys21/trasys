import Image from 'next/image';

const ClimateKeeperPage = () => {
  return (
    <div className="bg-white text-gray-800 min-h-screen">
      <div className="container mx-auto px-4 py-24">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="relative h-96 rounded-lg overflow-hidden shadow-2xl">
            <Image
              src="/images/climate.png"
              alt="Climate Keeper"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="pr-8">
            <h1 className="text-5xl font-extrabold mb-6">기후지킴</h1>
            <p className="text-lg text-gray-600 mb-6">
              실시간 도로 열지도+ 시공간 AI 예측 + 자동 살수차 케어 + 시민
              알림·행정 대시보드를 하나로 통합한 스마트시티 기후위기 대응
              솔루션
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClimateKeeperPage;