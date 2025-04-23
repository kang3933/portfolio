"use client";

import { useState } from "react";
import Image from 'next/image';
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { FiGlobe, FiHome } from "react-icons/fi";
//import Image from 'next/image';



export default function Home() {
  //const [index, setIndex] = useState(0);
  //const [dropdownOpen, setDropdownOpen] = useState(false); // State for the dropdown visibility
  
  const [activeAsIs, setActiveAsIs] = useState<number | null>(null);   // As-Is 아코디언 상태
  const [activeToBe, setActiveToBe] = useState<number | null>(null);  // To-Be 아코디언 상태

  const asIsItems = [
    {
      title: "불분명한 웹사이트 목적",
      content: (

        <ul className="list-disc pl-5">
          <li>Beinc가 제공하는 서비스에 대한 명확한 설명이 부족하여 방문자가 어떤 디자인 솔루션을 제공하는지 이해하기 어려움</li>
          <li>CTA가 제대로 갖춰져 있지 않아서 목적성이 불분명한 웹사이트</li>
        </ul>

      ) 
    },
    {
      title: "비효율적인 레이아웃",
      content: (

        <ul className="list-disc pl-5">
          <li>복잡한 화면 구성으로 인해 사용자 경험이 저하되었으며, 정보 전달력이 떨어짐</li>
          <li>심플하고 직관적인 디자인 요소가 부족하여 시각적 집중도가 낮음</li>
        </ul>

      ) 
    },
    {
      title: "어려운 콘텐츠 관리",
      content: (

        <ul className="list-disc pl-5">
          <li>웹사이트의 콘텐츠 업데이트 및 수정이 비효율적으로 이루어져 유지보수가 어려운 상태</li>
          <li>일관성 있는 콘텐츠 디자인이 적용되지 않아 브랜드 아이덴티티 유지가 어렵고 콘텐츠 제작에 너무 많은 시간이 듬</li>
        </ul>

      ) 
    }
  ];

  const toBeItems = [
    {
      title: "명확한 CTA 전략 수립",
      content: (

        <ul className="list-disc pl-5">
          <li>CTA의 목적을 명확히 정의하고, 사용자가 원하는 정보를 쉽게 찾을 수 있도록 배치를 개선</li>
          <li>시각적 강조를 통해 CTA 클릭률 향상 유도</li>
        </ul>

      ) 
    },
    {
      title: "직관적인 레이아웃 확립",
      content: (

        <ul className="list-disc pl-5">
          <li>간결하고 체계적인 레이아웃을 구축하여 정보 전달력을 높이고, 사용자 경험을 향상</li>
          <li>심플하고 정돈된 디자인 요소를 활용해 시각적 일관성 확보</li>
        </ul>

      ) 
    },
    {
      title: "CMS(Content Management System) 도입입",
      content: (

        <ul className="list-disc pl-5">
          <li>Webflow의 CMS 기능을 활용하여 콘텐츠 관리의 효율성을 극대화</li>
          <li>시스템적으로 구조화된 콘텐츠 업데이트 방식을 적용해 일관된 디자인 유지</li>
        </ul>

      ) 
    }
  ];

  const toggleAsIs = (index:number) => {
    setActiveAsIs(activeAsIs === index ? null : index); // 클릭한 항목이 이미 활성화되어 있으면 비활성화
  };

  const toggleToBe = (index:number) => {
    setActiveToBe(activeToBe === index ? null : index); // 클릭한 항목이 이미 활성화되어 있으면 비활성화
  };

  // const sections = [<StatsSection key="1" />, <CompetitorAnalysis key="2" />, <GraphSection key="3" />];

  // const nextSlide = () => setIndex((prev) => (prev + 1) % sections.length);
  // const prevSlide = () => setIndex((prev) => (prev - 1 + sections.length) % sections.length);

  // Toggle dropdown visibility
  //const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  return (
    <main className="w-full bg-[#131313] flex font-[pretendard] flex-col items-center overflow-hidden break-keep">
      <div className="mt-6 fixed flex flex-row gap-x-3">
        <Link href="/" passHref>
          <div className=" w-8 h-8 rounded-full bg-[#131313] border-1 border-[white] text-white flex justify-center items-center hover:scale-105 transition-transform duration-200 cursor-pointer shadow-lg">
            <FiHome size={20} />
          </div>
        </Link>
        <Link href="https://beinc.com.au" target="_blank" rel="noopener noreferrer">
          <div className=" w-8 h-8 rounded-full bg-[#131313] border-1 border-[white] text-white flex justify-center items-center hover:scale-105 transition-transform duration-200 cursor-pointer shadow-lg">
            <FiGlobe size={20} />
          </div>
        </Link>
      </div>

      <div className="w-full pb-0 pt-[5%] pl-[5%] pr-[5%] flex justify-center items-center overflow-hidden">
        <div className="relative w-screen h-[70vh]">
          <Image
            src="/mockup/beinc/main.png"
            alt="Peninsula Project"
            fill
            priority // 첫 로딩 이미지면 추가
            className="object-cover rounded-2xl bg-black"
          />
        </div>
      </div>

      <div className="w-full bg-[#131313] pb-[5%] pl-[5%] pr-[5%] pt-[5%] m-0 flex justify-center text-[#F5F5F5]">
        <div className="w-full flex flex-col sm:flex-row sm:justify-between sm:items-center gap-5">
          <div className='projectDetail w-full sm:w-[50%]'>
            <h1>Beinc</h1>
            <h5 className="text-base">UI/UX Design / Development</h5>
          </div>

          <div className='projectDetail w-full sm:w-[50%]'>
            <h5 className="text-base font-normal">Beinc 웹사이트는 강렬한 브랜드 아이덴티티와 직관적인 UX로 리디자인되어, 서비스 전달력과
            서비스와 포트폴리오를 명확히 전달해 고객 유입 효과를 극대화하는 것을 목표하였습니다.
            </h5>
          </div>
        </div>
      </div>

      <section className="w-full flex justify-center font-[pretendard] pt-[60px] pb-[60px] items-center h-auto space-y-10 px-5 bg-[#0F0F0F]">
        <div className="w-full  flex flex-col sm:flex-row justify-between items-start gap-10 pr-[5%] pl-[5%]">
          {/* As-Is 아코디언 메뉴 */}
          <div className="w-full space-y-4 text-[#F5F5F5]">
            <h3 className="text-[1.5rem] font-semibold">As-Is</h3>
            <div className="space-y-4">
              {asIsItems.map((item, index) => (
                <div key={index}>
                  <button
                    onClick={() => toggleAsIs(index)}
                    className="w-full text-left p-4 font-bold border-b-2 border-gray-300"
                  >
                    {item.title}
                  </button>
                  {activeAsIs === index && (
                    <div className="p-4 bg-[#131313] rounded-b-md">{item.content}</div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* To-Be 아코디언 메뉴 */}
          <div className="w-full space-y-4 text-[#F5F5F5]">
            <h3 className="text-[1.5rem] font-semibold ">To-Be</h3>
            <div className="space-y-4">
              {toBeItems.map((item, index) => (
                <div key={index}>
                  <button
                    onClick={() => toggleToBe(index)}
                    className="w-full text-left p-4 font-bold border-b-2 border-gray-300"
                  >
                    {item.title}
                  </button>
                  {activeToBe === index && (
                    <div className="p-4 bg-[#131313] rounded-md">{item.content}</div>
                  )}
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      <section className="w-full bg-[#131313] p-[5%] flex justify-center">
        <div className="w-full flex flex-col gap-[3rem]">

          <Image
            src="/mockup/beinc/beincstyle.png"
            alt="Peninsula Part 1"
            width={1500} // 원하는 해상도 지정
            height={1000}
            className="w-full sm:w-[100%] h-auto"
            priority // 첫 화면에 있다면 preload
          />

        </div>
      </section>

    </main>
  );
}