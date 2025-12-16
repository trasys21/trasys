"use client";

import React, { useState } from 'react';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

type Status = 'idle' | 'sending' | 'success' | 'error';

const ESGImpactPage = () => {
  const [activeTab, setActiveTab] = useState(0);
  
  // Form state
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [formStatus, setFormStatus] = useState<Status>('idle');
  const [responseMessage, setResponseMessage] = useState('');

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus('sending');
    setResponseMessage('');

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, subject, message }),
      });

      const data = await response.json();

      if (response.ok) {
        setFormStatus('success');
        setResponseMessage(data.message || '메시지가 성공적으로 전송되었습니다.');
        setName('');
        setEmail('');
        setSubject('');
        setMessage('');
      } else {
        setFormStatus('error');
        setResponseMessage(data.error || '메시지 전송에 실패했습니다.');
      }
    } catch (error) {
      setFormStatus('error');
      setResponseMessage('알 수 없는 오류가 발생했습니다.');
    }
  };

  const contactFormContent = (
    <form onSubmit={handleFormSubmit}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">성함</label>
          <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} className="w-full bg-white/5 border border-white/20 rounded-lg py-2 px-4 text-white focus:ring-2 focus:ring-blue-500 focus:outline-none" required disabled={formStatus === 'sending'} />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">이메일</label>
          <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full bg-white/5 border border-white/20 rounded-lg py-2 px-4 text-white focus:ring-2 focus:ring-blue-500 focus:outline-none" required disabled={formStatus === 'sending'} />
        </div>
      </div>
      <div className="mt-6">
        <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">제목</label>
        <input type="text" id="subject" value={subject} onChange={(e) => setSubject(e.target.value)} className="w-full bg-white/5 border border-white/20 rounded-lg py-2 px-4 text-white focus:ring-2 focus:ring-blue-500 focus:outline-none" required disabled={formStatus === 'sending'} />
      </div>
      <div className="mt-6">
        <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">메시지</label>
        <textarea id="message" rows={5} value={message} onChange={(e) => setMessage(e.target.value)} className="w-full bg-white/5 border border-white/20 rounded-lg py-2 px-4 text-white focus:ring-2 focus:ring-blue-500 focus:outline-none" required disabled={formStatus === 'sending'} />
      </div>
      <div className="mt-8 text-center">
        <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-full text-sm md:text-base transition-transform transform hover:scale-105 shadow-lg shadow-blue-500/30 disabled:bg-gray-500 disabled:cursor-not-allowed" disabled={formStatus === 'sending'}>
          {formStatus === 'sending' ? '전송 중...' : '문의 메일 보내기'}
        </button>
      </div>
      {formStatus === 'success' && <p className="mt-4 text-center text-green-400">{responseMessage}</p>}
      {formStatus === 'error' && <p className="mt-4 text-center text-red-400">{responseMessage}</p>}
    </form>
  );

  const tabs = [
    { title: "윤리헌장", pdfPath: "/ESG/트래시스-윤리헌장.pdf", content: <>...</> }, // Content truncated for brevity
    { title: "인권헌장", pdfPath: "/ESG/트래시스-인권헌장.pdf", content: <>...</> },
    { title: "환경안전보건 경영방침", pdfPath: "/ESG/트래시스-환경안전보건 경영방침.pdf", content: <>...</> },
    { title: "소통하기", content: contactFormContent, pdfPath: null }
  ];
  
  // Full content for brevity
  tabs[0].content = <>
    <p className="mb-4">트래시스(주)는 윤리경영과 투명경영을 통해 국민의 사랑과 신뢰를 받는 기업이 되고자 한다.</p>
    <p className="mb-4">이에 우리는 창의적 사고와 도전적 정신으로 우리의 사명을 달성하고 높은 윤리적 가치관을 바탕으로 정직하고 공정한 자세로 업무를 처리하며 부패방지 와 깨끗한 사회풍토조성을 위해 노력한다.</p>
    <ul className="list-disc list-inside space-y-3 pl-2">
      <li>우리는 고객에게 최고의 서비스를 제공하여 고객만족을 추구하고, 고객을 먼저 생각하는 마음가짐으로 사업을 수행하여 고객 우선주의를 실천한다.</li>
      <li>우리는 국내법과 국제규정을 준수하고 자유경쟁의 시장 질서를 존중함과 동시에, 모든 이해관계자와 상호 협력하는 공동체적인 관계를 구축하여 공동의 번영을 추구한다.</li>
      <li>우리는 임직원 개개인의 인격을 존중하고 차별대우를 하지 않으며, 공평한 기회와 공정한 평가를 받도록 하는 한편 임직원의 건강과 삶의 질 향상을 위해 노력한다.</li>
      <li>우리는 사회의 일부분으로써 공익활동에 적극적으로 참여하고, 끊임없이 새로운 가치를 창조하여 국가와 사회의 발전에 공헌한다.</li>
    </ul>
    <p className="text-center mt-6 text-gray-400 text-xs">2025년 11월 1일<br/>트래시스(주) 임직원 일동</p>
  </>;
  tabs[1].content = <>
    <p className="mb-4">트래시스(주)는 모든 경영활동에서 사회적 가치 실현을 위한 인권경영에 노력 하고 있으며 인권 관련 원칙과 정책은 임직원, 협력사, 고객, 지역사회 등 기업이 영향력을 행사할 수 있는 모든 이해관계자를 대상으로 한다. 기업은 인권 존중의 책무를 정의하고 다음과 같이 인권경영 이행을 다짐한다.</p>
    <ul className="list-disc list-inside space-y-3 pl-2">
      <li>하나, 우리는 인권에 대한 UN 인권기본헌장 등 국제기준 및 규범을 지지 하고 준수한다.</li>
      <li>하나, 우리는 인권침해를 사전에 예방하며, 적극적인 구제를 위해 노력한다.</li>
      <li>하나, 우리는 고용에 있어 성별, 연령, 인종, 장애, 종교, 정치적 성향과 출신지역에 따른 일체의 차별을 금지하며 다양성을 존중한다.</li>
      <li>하나, 우리는 결사 및 단체교섭의 자유를 보장한다.</li>
      <li>하나, 우리는 아동노동, 강제노동을 금지하며 보건, 안전, 근무시간 등과 관련하여 국제노동기구(ILO)가 권고하고 국가가 비준한 모든 노동원칙을 준수한다.</li>
      <li>하나, 우리는 책임 있는 공급망 관리를 위해 협력사를 공정하게 대우하고, 인권경영을 실천할 수 있도록 지원한다.</li>
      <li>하나, 우리는 지역사회에서 현지주민의 인권이 침해되지 않도록 유의한다.</li>
      <li>하나, 우리는 국내외 환경관련 법규를 준수하고, 환경보호와 오염방지를 위해 노력한다.</li>
      <li>하나, 우리는 고객의 만족과 개인정보 보호를 위해 노력한다.</li>
    </ul>
    <p className="mt-4">우리는 임직원을 비롯한 모든 이해관계자의 인권을 보호하기 위해 노력하며, 인권경영의 정착과 확산을 위해 최선을 다할 것을 다짐한다.</p>
    <p className="text-center mt-6 text-gray-400 text-xs">2025년 11월 1일<br/>트래시스(주) 임직원 일동</p>
  </>;
  tabs[2].content = <>
    <p className="mb-4">트래시스(주)는 다음 세대에게 맑고 깨끗하고, 안전한 세상을 물려주기 위 하여, 환경 및 안전, 보건에 미치는 영향을 우선적으로 고려하고 더 나은 세상을 만들어 가는데 기여하고자 한다. 이에 환경안전보건 경영을 통해 성과를 지속적으로 개선함과 동시에 사업활동 및 가치사슬 전반의 부정적 환경 및 안전보건 영향을 최소화하기 위해 다음 사항을 지속적으로 추진한다.</p>
    <ol className="list-decimal list-inside space-y-3 pl-2">
      <li>자원과 에너지를 효율적으로 이용하고, 온실 가스와 오염물질 배출 최소화 를 위하여 노력한다.</li>
      <li>법에서 정하는 산업재해예방을 위한 기는 제반 사항이 성실히 이행되도록 하여 근로조건을 개선하고 적절한 작업환경을 조성함으로써 근로자의 생명 보전과 안전·보건을 유지·증진토록 하여야 한다.</li>
      <li>환경안전보건경영 프로세스를 구축하고 효과적으로 운영하며 지속적으로 개선하기 위하여 노력한다.</li>
      <li>기업 임직원이 환경 및 안전보건의 중요성을 인식하도록 지속적으로 노력 한다.</li>
      <li>고객과 정부 등 대내외 환경 및 안전보건의 요청에 귀를 기울이고 소통 하도록 노력한다.</li>
    </ol>
    <p className="text-center mt-6 text-gray-400 text-xs">2025년 11월 1일<br/>트래시스(주) 임직원 일동</p>
  </>;

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
            ESG & Impact
          </p>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            지속가능한 내일을 위한 약속
          </h1>
          <p className="text-base md:text-lg text-gray-300">
            트래시스는 환경, 사회, 지배구조(ESG)의 가치를 경영 활동 전반에 통합하여,
            <br />
            기업의 사회적 책임을 다하고 지속가능한 성장을 추구합니다.
          </p>
        </div>
      </div>

      {/* Charters Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="flex justify-center border-b border-white/10 mb-8">
            {tabs.map((tab, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`py-3 px-6 text-sm font-medium transition-colors relative ${
                  activeTab === index
                    ? 'text-white'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                {tab.title}
                {activeTab === index && (
                  <motion.div
                    layoutId="underline"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-500"
                  />
                )}
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="bg-white/5 border border-white/10 rounded-2xl p-8 shadow-lg backdrop-blur-xl min-h-[500px]"
            >
              <div className="text-gray-300 space-y-4 text-sm leading-relaxed">
                {tabs[activeTab].content}
              </div>
              {tabs[activeTab].pdfPath && (
                <div className="mt-8 text-right">
                  <Link href={tabs[activeTab].pdfPath!} target="_blank" download className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-5 rounded-full text-xs transition-transform transform hover:scale-105 shadow-lg shadow-blue-500/30">
                    원문 PDF 다운로드
                  </Link>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ESGImpactPage;