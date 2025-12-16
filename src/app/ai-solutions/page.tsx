
import Link from 'next/link';
import Image from 'next/image';

const AISolutionsPage = () => {
  return (
    <div className="bg-white text-gray-800 min-h-screen">
      <div className="container mx-auto px-4 py-24">
        <h1 className="text-5xl font-extrabold mb-6 text-center">AI Solutions</h1>
        <p className="text-lg text-gray-600 mb-16 max-w-3xl mx-auto text-center">
          We provide innovative AI solutions for a safer and more sustainable city.
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          <Link href="/ai-solutions/ai-bis">
            <div className="group relative overflow-hidden rounded-lg shadow-xl transform hover:-translate-y-2 transition-transform duration-300">
              <Image
                src="/images/bus.png"
                alt="AI-BIS"
                width={600}
                height={400}
                className="object-cover w-full h-64"
              />
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-2">AI-BIS</h2>
                <p className="text-gray-600">AI-based Bus Information System</p>
              </div>
            </div>
          </Link>
          <Link href="/ai-solutions/safety-intelligence">
            <div className="group relative overflow-hidden rounded-lg shadow-xl transform hover:-translate-y-2 transition-transform duration-300">
              <Image
                src="/images/safe.png"
                alt="Safety Intelligence"
                width={600}
                height={400}
                className="object-cover w-full h-64"
              />
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-2">Safety+Intelligence</h2>
                <p className="text-gray-600">Smart Safety Management System</p>
              </div>
            </div>
          </Link>
          <Link href="/ai-solutions/climate-keeper">
            <div className="group relative overflow-hidden rounded-lg shadow-xl transform hover:-translate-y-2 transition-transform duration-300">
              <Image
                src="/images/climate.png"
                alt="Climate Keeper"
                width={600}
                height={400}
                className="object-cover w-full h-64"
              />
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-2">Climate Keeper</h2>
                <p className="text-gray-600">Climate Crisis Response Solution</p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AISolutionsPage;
