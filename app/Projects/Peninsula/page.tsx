"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Home() {
  const [index, setIndex] = useState(0);
  const [dropdownOpen, setDropdownOpen] = useState(false); // State for the dropdown visibility
  
  const [activeAsIs, setActiveAsIs] = useState<number | null>(null);   // As-Is 아코디언 상태
  const [activeToBe, setActiveToBe] = useState<number | null>(null);  // To-Be 아코디언 상태

  const asIsItems = [
    {
      title: "브랜드 일관성 부족",
      content: "이 항목에 대한 자세한 내용이 펼쳐집니다. 문제점 1에 대한 설명."
    },
    {
      title: "복잡한 레이아웃과 낮은 가독성성",
      content: "이 항목에 대한 자세한 내용이 펼쳐집니다. 문제점 2에 대한 설명."
    },
    {
      title: "전환율 저하하",
      content: "이 항목에 대한 자세한 내용이 펼쳐집니다. 문제점 3에 대한 설명."
    }
  ];

  const toBeItems = [
    {
      title: "Peninsula Goup 디자인 가이드라인 사용, 일관성 확립립",
      content: "이 항목에 대한 자세한 내용이 펼쳐집니다. 개선된 디자인 1에 대한 설명."
    },
    {
      title: "정보 구조 개선으로 간결하고 직관적인 레이아웃 구성성",
      content: "이 항목에 대한 자세한 내용이 펼쳐집니다. 개선된 디자인 2에 대한 설명."
    },
    {
      title: "CTA와 Form 개선을 통한 전환율 증가",
      content: "이 항목에 대한 자세한 내용이 펼쳐집니다. 개선된 디자인 3에 대한 설명."
    }
  ];

  const toggleAsIs = (index:number) => {
    setActiveAsIs(activeAsIs === index ? null : index); // 클릭한 항목이 이미 활성화되어 있으면 비활성화
  };

  const toggleToBe = (index:number) => {
    setActiveToBe(activeToBe === index ? null : index); // 클릭한 항목이 이미 활성화되어 있으면 비활성화
  };

  const sections = [<StatsSection key="1" />, <CompetitorAnalysis key="2" />, <GraphSection key="3" />];

  const nextSlide = () => setIndex((prev) => (prev + 1) % sections.length);
  const prevSlide = () => setIndex((prev) => (prev - 1 + sections.length) % sections.length);

  // Toggle dropdown visibility
  //const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  return (
    <main className="w-full flex flex-col items-center">

      <div className="pt-[6rem] max-w-[1300px] w-full flex justify-center items-center overflow-hidden">
        <img className="h-[80vh] rounded-2xl w-screen object-cover" src="/mockup/peninsula/2.png"/>
      </div>

      <div className="w-[1300px] m-0">
        <div className="flex flex-row justify-between w-full">
          <div className='projectDetail w-[50%] '>
            <h1>Peninsula Group Limited</h1>
            <h5 className="text-base">UI/UX Design</h5>
          </div>

          <div className='projectDetail w-[50%]'>
            <h5 className="text-base font-normal">Peninsula group 웹사이트 리디자인 프로젝트는 Employsure에서 Peninsula group으로의 
            리브랜딩 과정에서 진행되었습니다. <br /> 기존 웹사이트를 최신 디자인 트렌드에 맞춰 재구성하고, 사용자 
            경험을 개선하여 보다 직관적이고 효율적인 인터페이스를 구축하는 것이 핵심 목표였습니다.</h5>
          </div>
        </div>
      </div>


      <section className="relative w-full max-w-[1300px] flex justify-center items-center h-[80vh] my-20">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className="absolute w-full"
          >
            {sections[index]}
          </motion.div>
        </AnimatePresence>

        {/* 슬라이드 버튼 */}
        <button
          onClick={prevSlide}
          className="absolute left-[calc(50%-800px)] w-12 h-12 flex items-center justify-center bg-[#494FFF] text-white rounded-full shadow-lg"
        > ◀
        </button>
        
        <button
          onClick={nextSlide}
          className="absolute right-[calc(50%-800px)] w-12 h-12 flex items-center justify-center bg-[#494FFF] text-white rounded-full shadow-lg"
        > ▶
        </button>
      </section>

      <section className="max-w-[1300px] flex justify-between items-center h-[80vh] space-y-10 px-5 my-20">
      <div className="w-[1300px] my-5 flex justify-between items-center">
        {/* As-Is 아코디언 메뉴 */}
        <div className="w-[45%] space-y-4">
          <h3 className="text-[1.5rem] font-semibold">As-Is</h3>
          <div className="space-y-4">
            {asIsItems.map((item, index) => (
              <div key={index}>
                <button
                  onClick={() => toggleAsIs(index)}
                  className="w-full text-left p-4 bg-gray-200 rounded-md border-b-2 border-gray-300"
                >
                  {item.title}
                </button>
                {activeAsIs === index && (
                  <div className="p-4 bg-gray-100 rounded-md">{item.content}</div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* To-Be 아코디언 메뉴 */}
        <div className="w-[45%] space-y-4">
          <h3 className="text-[1.5rem] font-semibold ">To-Be</h3>
          <div className="space-y-4">
            {toBeItems.map((item, index) => (
              <div key={index}>
                <button
                  onClick={() => toggleToBe(index)}
                  className="w-full text-left p-4 bg-gray-200 rounded-md border-b-2 border-gray-300"
                >
                  {item.title}
                </button>
                {activeToBe === index && (
                  <div className="p-4 bg-gray-100 rounded-md">{item.content}</div>
                )}
              </div>
            ))}
          </div>
        </div>
        </div>
      </section>

    </main>
  );
}

// 📌 1. 숫자 섹션
const StatsSection = () => (
  <div className="h-screen flex flex-col items-center justify-center">
    <div className="w-full flex flex-col justify-center gap-y-9 items-center h-[80vh]">
      <h2 className="w-[600px] text-3xl font-bold flex flex-col items-center align-middle justify-between space-y-10">
        정보 과다와 복잡한 내비게이션. <br /> 최소한의 노력으로 최대한의 가치를.
      </h2>
      <div className="w-[50%] flex justify-between text-3xl font-semibold">
        <div className="flex flex-col items-center justify-center">
          <p className="text-gray-700 text-base">평균 이탈률</p>
          <h1 className="text-5xl">65%</h1>
        </div>
        <div className="flex flex-col items-center justify-center">
          <p className="text-gray-700 text-base">평균 방문시간</p>
          <h1 className="text-5xl">80초</h1>
        </div>
        <div className="flex flex-col items-center justify-center">
          <p className="text-gray-700 text-base">CTA 클릭률</p>
          <h1 className="text-5xl">1.2%</h1>
        </div>
      </div>
    </div>
  </div>
);

// 📌 2. 경쟁자 분석 섹션
const CompetitorAnalysis = () => (
  <div className="w-[1300px]">
          <div className="h-screen flex flex-col items-center justify-center gap-y-20">
            <h2 className="text-3xl font-bold">경쟁자 분석을 통한 아이디어 도출</h2>
            <div className="flex flex-col items-center justify-between md:flex-row space-y-8 md:space-y-0 md:space-x-16">
              <div className="space-y-10 w-[600px]">
                <h3 className="text-lg font-semibold flex items-center">
                  <img src="/mockup/peninsula/citation.png" className="h-[2rem]"/>
                </h3>
                <div className="장점">
                  <div className="semi-title pb-[1rem]">장점</div>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 border-1 bg-[#F5F5F5] rounded-full text-xs">심플한 레이아웃</span>
                    <span className="px-3 py-1 border-1 bg-[#F5F5F5] rounded-full text-xs">통일된 브랜딩</span>
                    <span className="px-3 py-1 border-1 bg-[#F5F5F5] rounded-full text-xs">아이콘 활용</span>
                    <span className="px-3 py-1 border-1 bg-[#F5F5F5] rounded-full text-xs">깔끔한 텍스트 정렬</span>
                    <span className="px-3 py-1 border-1 bg-[#F5F5F5] rounded-full text-xs">효과적인 컨텐츠 정렬</span>
                  </div>
                </div>
                <div className="단점">
                  <div className = "semi-title pb-[1rem]">단점</div>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 border-1 bg-[#F5F5F5] rounded-full text-xs">CTA 부족</span>
                      <span className="px-3 py-1 border-1 bg-[#F5F5F5] rounded-full text-xs">일정하지 않은 섹션간 간격</span>
                      <span className="px-3 py-1 border-1 bg-[#F5F5F5] rounded-full text-xs">과도한 양의 텍스트</span>
                      <span className="px-3 py-1 border-1 bg-[#F5F5F5] rounded-full text-xs">여백 부족</span>
                      <span className="px-3 py-1 border-1 bg-[#F5F5F5] rounded-full text-xs">브랜딩에 맞지 않는 색상</span>
                    </div>
                </div>
  
                <p className="text-gray-600 text-sm">
                  사용자 경험을 향상시키기 위해 직관적인 레이아웃과 일관된 디자인 시스템을 적용하는 전략이 필요하다고 판단했습니다.
                </p>
              </div>
  
              <div className="space-y-10 w-[45%]">
                <h3 className="text-lg font-semibold flex items-center">
                  <img src="/mockup/peninsula/hero.png" className="h-[2rem]" />
                </h3>
                <div>
                  <div className="장점">
                    <div className = "semi-title pb-[1rem]">장점</div>
                      <div className="flex flex-wrap gap-2 pb-[2rem]">
                 
                          <span className="px-3 py-1 border-1 bg-[#F5F5F5] rounded-full text-xs">심플한 레이아웃</span>
                          <span className="px-3 py-1 border-1 bg-[#F5F5F5] rounded-full text-xs">통일된 브랜딩</span>
                          <span className="px-3 py-1 border-1 bg-[#F5F5F5] rounded-full text-xs">아이콘 활용</span>
                          <span className="px-3 py-1 border-1 bg-[#F5F5F5] rounded-full text-xs">공공언어 텍스트 정제</span>
                          <br /> <span className="px-3 py-1 border-1 bg-[#F5F5F5] rounded-full text-xs">부담스럽지 않은 양의 텍스트</span>
  
                      </div>
                    </div>
                  <div className="단점">
                    <div className = "semi-title pb-[1rem]">단점</div>
                      <div className="flex flex-wrap gap-2">
                        <span className="px-3 py-1 border-1 bg-[#F5F5F5] rounded-full text-xs">CTA 부족</span>
                        <span className="px-3 py-1 border-1 bg-[#F5F5F5] rounded-full text-xs">일정하지 않은 섹션 크기</span>
                        <span className="px-3 py-1 border-1 bg-[#F5F5F5] rounded-full text-xs">버튼 애니메이션 부재</span>
                        <span className="px-3 py-1 border-1 bg-[#F5F5F5] rounded-full text-xs">이미지 화질 저하</span>
                        <br /><span className="px-3 py-1 border-1 bg-[#F5F5F5] rounded-full text-xs">일정하지 않은 레이아웃</span>
                      </div>
                  </div>
                    <div>
                  </div>
                </div>
  
                <p className="text-gray-600 text-sm">
                  가독성을 높이기 위해 최소한의 텍스트로 핵심 정보를 전달하는 것이 효과적임을 확인했습니다.
                </p>
              </div>
            </div>
          </div>
        </div>
  
  );
  

// 📌 3. 그래프 섹션
const GraphSection = () => (
  <div className="w-[1300px] flex flex-col justify-center items-left space-y-30 h-[70vh]">

    <div className="flex flex-col items-center align-middle justify-between space-y-10">
      <h2 className="text-3xl font-bold">
        사용자를 위한 디자인. <br /> 사용자 의견으로부터.
      </h2>
      <div className="flex flex-row items-center space-x-10">
        <div className="relative w-64 h-64">
          <svg className="w-full h-full" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="40" fill="none" stroke="#ddd" strokeWidth="8" />
            <circle cx="50" cy="50" r="40" fill="none" stroke="#1E40AF" strokeWidth="8" strokeDasharray="80 100" />
            <circle cx="50" cy="50" r="32" fill="none" stroke="#3B82F6" strokeWidth="8" strokeDasharray="65 100" />
            <circle cx="50" cy="50" r="24" fill="none" stroke="#6366F1" strokeWidth="8" strokeDasharray="72 100" />
          </svg>
        </div>
        <ul className="text-sm space-y-1">
          <li className="flex items-center">
            <span className="w-3 h-3 bg-blue-900 rounded-full inline-block mr-2"></span> 필요한 정보를 찾기 어려움 (80%)
          </li>
          <li className="flex items-center">
            <span className="w-3 h-3 bg-blue-600 rounded-full inline-block mr-2"></span> Form 입력 과정이 복잡하다고 느낌 (65%)
          </li>
          <li className="flex items-center">
            <span className="w-3 h-3 bg-indigo-500 rounded-full inline-block mr-2"></span> 텍스트 콘텐츠가 너무 과다한 느낌 (72%)
          </li>
        </ul>
      </div>
    </div>
  </div>
);
