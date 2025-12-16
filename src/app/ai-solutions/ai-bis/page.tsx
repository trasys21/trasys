import Image from 'next/image';

const AIBISPage = () => {
  return (
    <div className="bg-white text-gray-800 min-h-screen">
      <div className="container mx-auto px-4 py-24">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="relative h-96 rounded-lg overflow-hidden shadow-2xl">
            <Image
              src="/images/bus.png"
              alt="AI-BIS"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="pr-8">
            <h1 className="text-5xl font-extrabold mb-6">AI-BIS</h1>
            <p className="text-lg text-gray-600 mb-6">
              AI를 적용하여 버스의 실시간 위치, 도착 예정 시간, 승하차 여부,
              혼잡도 정보 제공
            </p>
            <p className="text-lg text-gray-600">
              시민들의 편리한 버스 이용을 돕는 인공지능 버스정보시스템
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIBISPage;