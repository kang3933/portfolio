"use client";

import { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
import Image from 'next/image';
import Link from "next/link";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { FiGlobe, FiHome} from "react-icons/fi";




export default function Home() {
//  const [index, setIndex] = useState(0);
//   const [dropdownOpen, setDropdownOpen] = useState(false); // State for the dropdown visibility
  
  const [activeAsIs, setActiveAsIs] = useState<number | null>(null);   // As-Is 아코디언 상태
  const [activeToBe, setActiveToBe] = useState<number | null>(null);  // To-Be 아코디언 상태

  const asIsItems = [
    {
      title: "브랜드 일관성 부족",
      content: (

        <ul className="list-disc pl-5">
          <li>정보 구조가 체계적이지 않아 정보 탐색이 어려움</li>
          <li>지나치게 많은 텍스트와 시각적 요소로 인해 집중도, 가독성 저하</li>
          <li>컨텐츠 배치 비효율적, 페이지별 정보 연결 불명확, 사용자의 탐색 경험 저하</li>
        </ul>

      )
    },
    {
      title: "복잡한 레이아웃과 낮은 가독성",
      content: "이 항목에 대한 자세한 내용이 펼쳐집니다. 문제점 2에 대한 설명."
    },
    {
      title: "전환율 저하",
      content: "이 항목에 대한 자세한 내용이 펼쳐집니다. 문제점 3에 대한 설명."
    }
  ];

  const toBeItems = [
    {
      title: "Peninsula Goup 디자인 가이드라인 사용, 일관성 확립",
      content: "이 항목에 대한 자세한 내용이 펼쳐집니다. 개선된 디자인 1에 대한 설명."
    },
    {
      title: "정보 구조 개선으로 간결하고 직관적인 레이아웃 구성",
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

    //const sections = [<StatsSection key="1" />, <CompetitorAnalysis key="2" />, <GraphSection key="3" />];

    // const nextSlide = () => setIndex((prev) => (prev + 1) % sections.length);
    // const prevSlide = () => setIndex((prev) => (prev - 1 + sections.length) % sections.length);

    // Toggle dropdown visibility
    // const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  return (
    <main className="w-full bg-white flex font-[Pretendard] flex-col items-center overflow-hidden break-keep">

      <div className="mt-6 fixed flex flex-row gap-x-3">
        <Link href="/" passHref>
          <div className=" w-8 h-8 rounded-full bg-[#131313] border-1 border-[white] text-white flex justify-center items-center hover:scale-105 transition-transform duration-200 cursor-pointer shadow-lg">
            <FiHome size={20} />
          </div>
        </Link>
        <Link href="https://peninsulagrouplimited.com.au" target="_blank" rel="noopener noreferrer">
          <div className=" w-8 h-8 rounded-full bg-[#131313] border-1 border-[white] text-white flex justify-center items-center hover:scale-105 transition-transform duration-200 cursor-pointer shadow-lg">
            <FiGlobe size={20} />
          </div>
        </Link>
      </div>

      <div className="w-full pb-0 pt-[5%] pl-[5%] pr-[5%] flex justify-center items-center overflow-hidden">
        <div className="relative w-screen h-[70vh]">
          <Image
            src="/mockup/peninsula/2.png"
            alt="Peninsula Project"
            fill
            priority // 첫 로딩 이미지면 추가
            className="object-cover rounded-2xl"
          />
        </div>
      </div>

      <div className="w-full bg-white pl-[5%] pr-[5%] pt-[50px] pb-[50px] m-0 flex justify-center">
        <div className="w-full flex flex-col sm:flex-row sm:justify-between sm:items-start gap-5">
          <div className='projectDetail w-full sm:w-[50%]'>
            <h1>Peninsula Group Limited</h1>
            <h5 className="text-base w-full sm:w-[50%]">UI/UX Design</h5>
          </div>

          <div className='projectDetail w-full sm:w-[50%]'>
            <h5 className="text-base font-normal">Peninsula group 웹사이트 리디자인 프로젝트는 Employsure에서 Peninsula group으로의 
            리브랜딩 과정에서 진행되었습니다. 기존 웹사이트를 최신 디자인 트렌드에 맞춰 재구성하고, 사용자 
            경험을 개선하여 보다 직관적이고 효율적인 인터페이스를 구축하는 것이 핵심 목표였습니다.</h5>
          </div>
        </div>
      </div>




      <section className="w-full bg-[#F5F5F5] px-[5%] py-[8%] flex flex-col sm:flex-row justify-between items-center h-auto gap-6">

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[2rem] w-full">


        <div className="w-full pt-[5%] pb-[5%] pl-[8%] pr-[8%] flex flex-col justify-between rounded-[1rem] bg-[#FFFFFF]">
          {/* 텍스트 영역 */}
          <div className="flex flex-col gap-4">
            <div className="text-[#131313] font-[Pretendard] flex flex-col justify-center items-start">
              <div className="text-[1.5rem] font-bold">기존 웹사이트 분석</div>
              <div className="text-[1rem] font-normal">정보 과다와 복잡한 내비게이션</div>
            </div>

            {/* 이미지 */}
            <div className="w-full aspect-[3/2] flex items-center justify-center">
              <div className="w-full flex justify-between items-center text-3xl font-semibold">
                <div className="flex flex-col items-center justify-center">
                  <p className="text-gray-700 text-base">평균 이탈률</p>
                  <h1 className="text-3xl">65%</h1>
                </div>
                <div className="flex flex-col items-center justify-center">
                  <p className="text-gray-700 text-base">평균 방문시간</p>
                  <h1 className="text-3xl">80초</h1>
                </div>
                <div className="flex flex-col items-center justify-center">
                  <p className="text-gray-700 text-base">CTA 클릭률</p>
                  <h1 className="text-3xl">1.2%</h1>
                </div>
              </div>
            </div>
          </div>
        </div>


        <div className="w-full pt-[5%] pb-[5%] pl-[8%] pr-[8%] flex flex-col justify-between rounded-[1rem] bg-[#FFFFFF]">
          {/* 텍스트 + 이미지 영역 */}
          <div className="flex flex-col gap-5">
            <div className="text-[#131313] font-[Pretendard] flex flex-col justify-center items-start">
              <div className="text-[1.5rem] font-bold">경쟁자 분석</div>
              <div className="text-[1rem] font-normal">경쟁자 분석을 통한 아이디어 도출</div>
            </div>

            <div>
              <div className="w-full h-auto flex flex-col items-center justify-center gap-y-20">
                <div className="flex flex-col items-center justify-between md:flex-row space-y-8 md:space-y-0 md:space-x-16">
                  <div className="space-y-5 w-auto">
                    <h3 className="text-lg font-semibold flex items-center">
                      <Image 
                        src="/mockup/peninsula/citation.png"
                        alt="citation icon"
                        width={80} // ≈ 2rem
                        height={32}
                        className="object-contain" // 선택적으로 유지
                      />
                    </h3>
                    <div className="장점">
                      <div className="semi-title pb-[1rem]">장점</div>
                      <div className="flex flex-wrap gap-2">
                        <span className="px-3 py-1 border-1 border-[#0063FF] bg-[#FFFFFF] rounded-full text-xs">심플한 레이아웃</span>
                        <span className="px-3 py-1 border-1 border-[#0063FF] bg-[#FFFFFF] rounded-full text-xs">통일된 브랜딩</span>
                        <span className="px-3 py-1 border-1 border-[#0063FF] bg-[#FFFFFF] rounded-full text-xs">아이콘 활용</span>
                        <span className="px-3 py-1 border-1 border-[#0063FF] bg-[#FFFFFF] rounded-full text-xs">깔끔한 텍스트 정렬</span>
                        <span className="px-3 py-1 border-1 border-[#0063FF] bg-[#FFFFFF] rounded-full text-xs">효과적인 컨텐츠 정렬</span>
                      </div>
                    </div>
                    <div className="단점">
                      <div className = "semi-title pb-[1rem]">단점</div>
                        <div className="flex flex-wrap gap-2">
                          <span className="px-3 py-1 border-1 border-[#0063FF] bg-[#FFFFFF] rounded-full text-xs">CTA 부족</span>
                          <span className="px-3 py-1 border-1 border-[#0063FF] bg-[#FFFFFF] rounded-full text-xs">일정하지 않은 섹션간 간격</span>
                          <span className="px-3 py-1 border-1 border-[#0063FF] bg-[#FFFFFF] rounded-full text-xs">과도한 양의 텍스트</span>
                          <span className="px-3 py-1 border-1 border-[#0063FF] bg-[#FFFFFF] rounded-full text-xs">여백 부족</span>
                          <span className="px-3 py-1 border-1 border-[#0063FF] bg-[#FFFFFF] rounded-full text-xs">브랜딩에 맞지 않는 색상</span>
                        </div>
                    </div>

                    <p className="text-gray-600 text-sm">
                      사용자 경험을 향상시키기 위해 직관적인 레이아웃과 일관된 디자인 시스템을 적용하는 전략이 필요하다고 판단했습니다.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>



        <div className="w-full pt-[5%] pb-[5%] pl-[8%] pr-[8%] flex flex-col justify-between rounded-[1rem] bg-[#FFFFFF]">
          {/* 텍스트 + 이미지 영역 */}
          <div className="flex flex-col gap-4">
            <div className="text-[#131313] font-[Pretendard] flex flex-col justify-center items-start">
              <div className="text-[1.5rem] font-bold">기존 웹사이트 사용자 의견</div>
              <div className="text-[1rem] font-normal">사용자를 위한 디자인. 사용자 의견으로부터.</div>
            </div>

            <div className="w-full aspect-[3/2] relative">
              <div className="w-full h-auto flex flex-col justify-center items-left">

              <div className="flex flex-col items-center align-middle justify-between">
                <div className="flex flex-col items-center space-y-5">
                  <div className="w-64 h-64">
                  <svg className="w-full h-full" viewBox="0 0 100 100">
                    <circle cx="50" cy="50" r="40" fill="none" stroke="#ddd" strokeWidth="8" />
                    <circle
                      cx="50"
                      cy="50"
                      r="40"
                      fill="none"
                      stroke="#1E40AF"
                      strokeWidth="8"
                      strokeDasharray="200.96 50.24"
                      strokeDashoffset="12"
                      strokeLinecap="round"
                    />
                    <circle
                      cx="50"
                      cy="50"
                      r="32"
                      fill="none"
                      stroke="#3B82F6"
                      strokeWidth="8"
                      strokeDasharray="130.72 70.38"
                      strokeDashoffset="-20"
                      strokeLinecap="round"
                    />
                    <circle
                      cx="50"
                      cy="50"
                      r="24"
                      fill="none"
                      stroke="#6366F1"
                      strokeWidth="8"
                      strokeDasharray="108.57 42.23"
                      strokeDashoffset="-4"
                      strokeLinecap="round"
                    />
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
            </div>
          </div>
        </div>



          
        </div>




        {/* 데스크탑용 버튼 (좌측) */}
        {/* <button
          onClick={prevSlide}
          className="hidden sm:flex w-12 h-12 items-center justify-center bg-[#494FFF] text-white rounded-full shadow-lg"
        >
          ◀
        </button> */}

        {/* 슬라이드 콘텐츠 */}
        {/* <div className="flex-1 w-full h-auto max-w-[800px] order-1 sm:order-none">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="w-full"
            >
              {sections[index]}
            </motion.div>
          </AnimatePresence>
        </div> */}



        {/* 데스크탑용 버튼 (우측) */}
        {/* <button
          onClick={nextSlide}
          className="hidden sm:flex w-12 h-12 items-center justify-center bg-[#494FFF] text-white rounded-full shadow-lg"
        >
          ▶
        </button> */}

        {/* 모바일용 버튼 그룹 (하단 중앙 정렬) */}
        {/* <div className="flex sm:hidden flex-row gap-4 mt-6 order-2">
          <button
            onClick={prevSlide}
            className="w-12 h-12 flex items-center justify-center bg-[#494FFF] text-white rounded-full shadow-lg"
          >
            ◀
          </button>
          <button
            onClick={nextSlide}
            className="w-12 h-12 flex items-center justify-center bg-[#494FFF] text-white rounded-full shadow-lg"
          >
            ▶
          </button>
        </div> */}
      </section>







      <section className="w-full flex justify-center font-[pretendard] items-center h-auto space-y-10 px-5 my-20">
      <div className="w-full  flex flex-col sm:flex-row justify-between items-start gap-10 pr-[5%] pl-[5%]">
        {/* As-Is 아코디언 메뉴 */}
        <div className="w-full space-y-4">
          <h3 className="text-[1.5rem] font-semibold">As-Is</h3>
          <div className="space-y-4">
            {asIsItems.map((item, index) => (
              <div key={index}>
                <button
                  onClick={() => toggleAsIs(index)}
                  className="w-full text-left p-4 font-bold border-b-2 border-gray-300 flex justify-between items-center"
                >
                  <span>{item.title}</span>
                  {activeAsIs === index ? <FiChevronUp size={20} /> : <FiChevronDown size={20} />}
                </button>
                {activeAsIs === index && (
                  <div className="p-4 bg-gray-100 rounded-b-md">{item.content}</div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* To-Be 아코디언 메뉴 */}
        <div className="w-full space-y-4">
          <h3 className="text-[1.5rem] font-semibold ">To-Be</h3>
          <div className="space-y-4">
            {toBeItems.map((item, index) => (
              <div key={index}>
                <button
                  onClick={() => toggleToBe(index)}
                  className="w-full text-left p-4 font-bold border-b-2 border-gray-300 flex justify-between items-center"
                >
                  <span>{item.title}</span>
                  {activeToBe === index ? <FiChevronUp size={20} /> : <FiChevronDown size={20} />}
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


      <section className="w-full bg-[#F5F5F5] p-[5%] flex justify-center">
        <div className="w-full flex flex-col gap-[3rem]">

          {/* 섹션 헤더 */}
          {/* <div className="flex flex-col gap-4">
            <div className="text-[#131313] font-[Pretendard] flex flex-col gap-3">
              <div className="text-3xl font-bold">New Website,<br />New Standard</div>
              <div className="text-xl text-[#A9A9A9] font-semibold">솔루션 1 : 디자인 가이드라인</div>
            </div>
          </div> */}

          <Image
            src="/mockup/peninsula/peninsulaStyle.png"
            alt="Peninsula Part 1"
            width={1500} // 원하는 해상도 지정
            height={1000}
            className="w-full sm:w-[100%] h-auto"
            priority // 첫 화면에 있다면 preload
          />

        </div>
      </section>







      <section className="w-full pb-[10%] flex flex-col items-left justify-center my-20 gap-y-10">
        

        <div className="p-[5%] flex flex-col gap-3">
          <div className="text-3xl font-bold flex">Simplify to Amplify</div>
          <div className="text-xl text-[#A9A9A9] font-semibold flex">솔루션 2 : 정보 구조 최적화</div>
        </div>

        
        <div className="flex flex-col sm:flex-row justify-between items-center pl-[5%] pr-[5%] pb-[5%] gap-6">

          <Image
            src="/mockup/peninsula/pt1.png"
            alt="Peninsula Part 1"
            width={1300} // 원하는 해상도 지정
            height={600}
            className="w-[90%] sm:w-[70%] h-auto"
            priority // 첫 화면에 있다면 preload
          />
          <h1 className="w-full sm:w-[30%] flex justify-center text-xl sm:text-3xl font-bold text-center">
                단순한 레이아웃, <br /> 최소한의 텍스트.
          </h1>

        </div>


        <div className="flex flex-col-reverse sm:flex-row justify-between items-center pl-[5%] pr-[5%] gap-6">

          <h1 className="w-full sm:w-[30%] flex justify-center text-xl sm:text-3xl font-bold text-center">
                직관적인 요소, <br /> 직관적인 동작.
          </h1>
          <Image
            src="/mockup/peninsula/pt2.png"
            alt="Peninsula Part 1"
            width={1300} // 원하는 해상도 지정
            height={600}
            className="w-[90%] sm:w-[70%] h-auto"
            priority // 첫 화면에 있다면 preload
          />

        </div>

      </section>

      <section className="w-full bg-[#F5F5F5] p-[5%] pt-[5%] flex flex-col justify-center items-center break-keep my-20 gap-y-10">

          <div className="flex flex-col w-full justify-center pb-[3rem] pt-[5%]">

            <div className="text-[1rem] font-medium text-[#A9A9A9] pb-[1rem]">
            솔루션 2-1 : A/B 테스팅을 통한 디자인 개선
            </div>

            <div className="text-3xl font-bold pb-[1rem]">
              Journey to Excellence
            </div>
            <div className="text-[1rem] font-normal">
            각 Phase는 반복적인 revision을 통해 디자인 개선이 이뤄졌습니다. 테스팅 팀을 통한 꾸준한 A/B 테스팅도 진행했습니다.
            아래의 예시는 Phase 1에서 디자인한 전체 페이지 Brief 섹션 디자인 수정 과정입니다.
            </div>

          </div>

          <div className="flex flex-col gap-[3rem]">

          {/* 첫 번째 줄: 기존 웹사이트 + Revision 1 */}
          <div className="flex flex-col sm:flex-row w-full gap-[1rem]">

            {/* 기존 웹사이트 */}
            <div className="w-full lg:w-1/2 flex flex-col pb-[1rem] justify-between items-center">
              <div className="w-full flex flex-col">
                <div className="text-[#A9A9A9] font-semibold pb-2">기존 웹사이트</div>
                <div className="gap-1 text-[#131313] font-semibold">
                  CTA의 부재.<br />
                  너무 많은 정보량.
                </div>
              </div>
              <div className="w-full">
                <Image
                  src="/mockup/peninsula/ab1.png"
                  alt="Peninsula Part 1"
                  width={1300}
                  height={600}
                  className="w-full h-auto"
                  priority
                />
              </div>
            </div>

            {/* Revision 1 */}
            <div className="w-full lg:w-1/2 flex flex-col justify-between items-center">
              <div className="w-full flex flex-col">
                <div className="text-[#A9A9A9] font-semibold pb-2">Revision 1</div>
                <div className="gap-1 text-[#131313] font-semibold">
                  동일한 강조색은 주목도 분산.<br />
                  강조할 내용은 크게.
                </div>
              </div>
              <div className="w-full">
                <Image
                  src="/mockup/peninsula/ab2.png"
                  alt="Peninsula Part 1"
                  width={1300}
                  height={600}
                  className="w-full h-auto"
                  priority
                />
              </div>
            </div>

          </div>

          {/* 두 번째 줄: Revision 2 + 최종 디자인 */}
          <div className="flex flex-col sm:flex-row w-full gap-[1rem]">

            {/* Revision 2 */}
            <div className="w-full lg:w-1/2 flex flex-col pb-[1rem] justify-between items-center">
              <div className="w-full flex flex-col">
                <div className="text-[#A9A9A9] font-semibold pb-2">Revision 2</div>
                <div className="gap-1 text-[#131313] font-semibold">
                  여전히 많은 텍스트, 중요한건 짧고 간결하게 강조.<br />
                  카드섹션 분리감 필요.
                </div>
              </div>
              <div className="w-full">
                <Image
                  src="/mockup/peninsula/ab3.png"
                  alt="Peninsula Part 1"
                  width={1300}
                  height={600}
                  className="w-full h-auto"
                  priority
                />
              </div>
            </div>

            {/* 최종 디자인 */}
            <div className="w-full lg:w-1/2 flex flex-col pb-[3rem] justify-between items-center">
              <div className="w-full flex flex-col">
                <div className="text-[#A9A9A9] font-semibold pb-2">최종 디자인</div>
                <div className="gap-1 text-[#131313] font-semibold">
                  텍스트 섹션의 문구를 최대한 축약.<br />
                  아이콘 크기를 축소해 시각적 방해 없이 섹션 구분 용도로 활용.
                </div>
              </div>
              <div className="w-full">
                <Image
                  src="/mockup/peninsula/ab4.png"
                  alt="Peninsula Part 1"
                  width={1300}
                  height={600}
                  className="w-full h-auto"
                  priority
                />
              </div>
            </div>

          </div>

        </div>

      </section>




      <section className="w-full flex flex-col bg-[#FFFFFF] pt-[10%] justify-center items-center break-keep">

        <div className="flex flex-col w-full justify-center pb-[1rem] pl-[5%]">

          <div className="text-[1rem] font-medium text-[#A9A9A9] pb-[1rem]">
            솔루션 2-2 : 사용자 흐름에 맞춘 컴포넌트 재배치
          </div>
          
          <div className="text-3xl font-bold pb-[1rem]">
            직관적인 디자인을 고민하다
          </div>
          <div className="text-[1rem] font-normal">
          각 컴포넌트에 우선순위를 매기고, 사용자의 행동을 유도할 수 있는 디자인을 고민했습니다.
          <br/>아래 디자인은 Phase 2의 Contact page 모바일 버전의 CTA 버튼 동작 방식을 설계하고 최적화 하는 과정입니다.
          </div>

        </div>

        <div className="flex items-center w-full">

          <Image
            src="/mockup/peninsula/solution2-2.png"
            alt="Peninsula mockup image"
            width={1600} // 실제 원본 이미지 너비에 맞춰서 조정 (대략적인 값)
            height={800} // 비율에 맞게 설정 (원본에 맞게 조절)
            className="w-[100%] sm:w-[100%] h-auto"
            priority // 필요 없으면 제거해도 됨
          />
          {/* <div className="flex flex-col w-full sm:w-[40%]">

            <div className="text-xl font-bold pb-2">1. 국가가 선택되어있지 않은 상태</div>
            <div className="font-normal">호주와 뉴질랜드의 연락처가 다르기 때문에, enquiry form을 여는 버튼은 국가 선택을 하기 전까지 비활성화 되어있습니다.</div>

          </div> */}

        </div>

      {/* <div className="flex flex-col sm:flex-row justify-between items-center w-full gap-6 pb-[3rem] break-keep">

        <div className="flex flex-col w-full sm:w-[40%]">

          <div className="text-xl font-bold pb-2">2. 국가가 선택되었을 때 (Design 1)</div>
          <div className="font-normal break-keep">국가가 선택되었을 때, Enquire today 버튼이 활성화 됩니다. 강조 텍스트와 충돌을 피하기 위해 Secondary accent color을 사용했습니다.</div>

        </div>
        <Image
          src="/mockup/peninsula/m12.png"
          alt="Peninsula mockup image"
          width={400} // 원본 이미지에 맞게 조정
          height={300} // 비율 유지
          className="w-[70%] sm:w-[30%] h-auto"
          priority // 필요 시 유지, 아니라면 제거 가능
        />

      </div> */}
{/* 
      <div className="flex flex-col-reverse sm:flex-row justify-between items-center w-full gap-6">

        <Image
          src="/mockup/peninsula/m13.png"
          alt="Peninsula mockup image"
          width={400} // 원본 이미지에 맞게 조정
          height={300} // 비율 유지
          className="w-[70%] sm:w-[30%] h-auto"
          priority // 필요 시 유지, 아니라면 제거 가능
        />

        <div className="flex flex-col w-full sm:w-[40%]">

          <div className="text-xl font-bold pb-2">3. 국가가 선택되었을 때 (Final design)</div>
          <div className="font-normal break-keep">CTA 섹션의 흐름에 맞춰 국가 선택 버튼을 상단에 배치했으며, Enquire today 버튼의 강조를 위해 국가 선택 버튼 색상을 아웃라인 색으로 대체하였습니다.</div>

        </div>


      </div> */}



      </section>



      <section className="w-full flex flex-col bg-[#F5F5F5] p-[5%] justify-center items-center">

        <div className="w-full flex flex-col">

          <div className="flex flex-col gap-y-[15px]">
            <div className="text-3xl font-bold flex">검증</div>
            <div className="text-[#A9A9A9] pb-[80px] font-semibold flex">프로젝트 효과 확인</div>
          </div>

          <div className="font-bold pb-[180px]">

            <h1 className="pb-[1rem] text-xl">브랜드 일관성 유지 검증</h1>
            <ul className="list-disc font-medium break-keep">
              <li>기존 Peninsula Group의 디자인 가이드라인을 기반으로 컬러, 타이포그래피, UI 컴포넌트 적용</li>
              <li>스타일 가이드 문서(Brand guide)와 비교하여 일관성 점검</li>
              <li>사용자 설문조사 결과, 약 80%의 응답자가 새로운 디자인이 브랜드 일관성을 유지하고 있다고 평가</li>
              <li>브랜드 아이덴티티에 대해 대다수의 사용자가 직관적으로 인식할 수 있다고 긍정적 평가</li>
            </ul>

          </div>


          <div className="font-bold flex flex-col items-center pb-[180px]">

            <div>

             <h1 className="pb-[1rem] text-xl">정보 구조 개선 효과 검증</h1>
             <p className="font-medium">리디자인 후 A/B 테스트를 통해 기존과 새 디자인의 성과 비교 분석</p>
            

            </div>


            <Image
              src="/mockup/peninsula/stats.png"
              alt="Peninsula mockup image"
              width={1300} // 원본 이미지에 맞게 조정
              height={500} // 비율 유지
              className="w-[50%] h-auto"
              priority // 필요 시 유지, 아니라면 제거 가능
            />

          </div>

          <div className="font-bold flex flex-col items-end pb-[200px]">

            <div>

            <h1 className="pb-[1rem] text-xl">CTA 배치 및 Form UX 개선 효과 검증</h1>
            <ul className="list-disc font-medium">
              <li>CTA 버튼 클릭률 기존 대비 18% 증가</li>
              <li>Form 입력 완료율이 10% 증가</li>
              <li>모바일에서 버튼 크기 및 위치 개선 후 클릭률이 약 12% 상승</li>
            </ul>


            </div>

          </div>

        </div>

        <div className="w-full flex flex-col">

          <div className="flex flex-col gap-y-[15px]">
            <div className="text-3xl font-bold flex">결과</div>
            <div className="text-[#A9A9A9] pb-[3rem] font-semibold flex">수치와 피드백</div>
          </div>


          <div className="font-bold pb-[200px] flex flex-col gap-y-10">


            <div className="w-full">

              <h1 className="pb-[1rem] text-xl">브랜드 일관성 유지</h1>
              <ul className="list-disc font-medium">
              <li>기존 디자인 가이드라인을 90% 이상 준수, 내부 평가에서 높은 점수 획득</li>
              <li>{'사용자 피드백에서 "브랜드 이미지가 일관되게 유지됐다"는 긍정적인 반응 다수'}</li>
              </ul>


            </div>

            <div className="w-full">

              <h1 className="pb-[1rem] text-xl">정보 구조 개선</h1>
              <ul className="list-disc font-medium">
              <li>기존 디자인 가이드라인 준수, 클라이언트 내부 평가에서 긍정적 반응</li>
              <li>하지만 일부 사용자는 서비스 비교 섹션에서 여전히 디자인적 불편함을 느낌</li>
              </ul>


            </div>
            <div className="w-full">

              <h1 className="pb-[1rem] text-xl">전환률 개선</h1>
              <ul className="list-disc font-medium">
              <li>CTA 버튼 클릭률 2.3% 증가</li>
              <li>폼 입력 완료율 10% 증가, 하지만 여전히 이탈률이 높은 편</li>
              </ul>


            </div>

          </div>

        </div>


        <div className="w-full flex flex-col items-end">

        <div>

          <div className="flex flex-col gap-y-[15px]">
            <div className="text-3xl font-bold flex">회고</div>
            <div className="text-[#A9A9A9] pb-[3rem] font-semibold flex">프로젝트를 돌아보다</div>
          </div>


          <div className="font-bold pb-[180px] flex flex-col gap-y-10">


            <div className="w-full">

              <h1 className="pb-[1rem] text-xl">성공 요인</h1>
              <ul className="list-disc font-medium">
              <li>디자인 일관성 유지: 브랜드 가이드라인을 철저히 적용하여 Peninsula Group의 정체성 유지</li>
              <li>정보 구조 최적화: 주요 콘텐츠를 쉽게 탐색할 수 있도록 레이아웃을 단순화</li>
              <li>CTA 배치 개선: 사용자 행동 데이터를 기반으로 폼과 버튼을 최적의 위치에 배치</li>
              </ul>


            </div>

            <div className="w-full">

              <h1 className="pb-[1rem] text-xl">아쉬운 점</h1>
              <ul className="list-disc font-medium">
              <li>정보 탐색의 완전한 직관성 부족: 서비스 비교 섹션의 가독성과 내비게이션이 여전히 개선 필요</li>
              <li>모바일 UX 최적화 부족: 버튼 크기 및 가독성 문제로 인해 일부 사용자 경험 저하</li>
              <li>전환율 목표 미달: CTA 클릭률 및 폼 완성률이 증가했지만, 기대만큼 큰 수치에는 미치지 못함</li>
              </ul>


            </div>
            <div className="w-full">

              <h1 className="pb-[1rem] text-xl">향후 개선 방향</h1>
              <ul className="list-disc font-medium">
              <li>내비게이션 구조 추가 개선: 서비스 비교 섹션의 접근성을 높이기 위한 UI 개선</li>
              <li>모바일 UX 보완: 양 옆 여백과 버튼 크기, 색상 대비 조정 및 폼 UX 추가 최적화</li>
              <li>추가적인 사용자 테스트 진행: 다양한 유저 그룹을 대상으로 A/B 테스트 확장 및 샘플 수 확보</li>
              </ul>


            </div>

          </div>

        </div>



        </div>

      </section>




      {/* <section className="w-full hidden sm:flex flex-col bg-[#FFFFFF] p-[5%] justify-center items-center">


        <div>

        <div className="flex flex-col gap-y-[15px]">
          <div className="text-4xl font-bold flex">Almost real</div>
          <div className="text-2xl text-[#A9A9A9] pb-[80px] font-semibold flex">프로토타입 살펴보기</div>
        </div>
        
        <div className="text-2xl font-bold pb-[1rem]">

          <h1>Phase 1</h1>

        </div>

        <iframe 
          className="border border-gray-300 rounded-lg"
          width="1300" 
          height="720"
          src="https://embed.figma.com/proto/0D2OMXabAU24ICscXuoRZY/Peninsula-Phase-1?page-id=0%3A1&node-id=1-930&p=f&viewport=516%2C25%2C0.1&scaling=scale-down-width&content-scaling=fixed&starting-point-node-id=1%3A930&show-proto-sidebar=1&embed-host=share"
          allowFullScreen
        />

        </div>

        <div>

          <div className="text-2xl font-bold pt-[80px] pb-[1rem]">

            <h1>Phase 2</h1>

          </div>

          <iframe 
            className="border border-gray-300 rounded-lg"
            width="1300" 
            height="720"
            src="https://embed.figma.com/proto/JTaRSI9DjBHTL8A5Er7Qe6/Peninsula-Phase-2?page-id=0%3A1&node-id=1-1040&starting-point-node-id=1%3A1040&scaling=scale-down-width&content-scaling=fixed&embed-host=share"
            allowFullScreen
          />

        </div>


        <div>

          <div className="text-2xl font-bold pt-[80px] pb-[1rem]">

            <h1>Phase 3</h1>

          </div>

          <iframe 
            className="border border-gray-300 rounded-lg"
            width="1300" 
            height="720"
            src="https://embed.figma.com/proto/O3oSX0bnd61oN5k1pp7EHX/Peninsula-Phase-3?page-id=0%3A1&node-id=1-515&p=f&viewport=259%2C25%2C0.12&scaling=scale-down-width&content-scaling=fixed&starting-point-node-id=1%3A515&show-proto-sidebar=1&embed-host=share"
            allowFullScreen
          />

        </div>

        <div>

          <div className="text-2xl font-bold pt-[80px] pb-[1rem]">

            <h1>Phase 4</h1>

          </div>

          <iframe 
            className="border border-gray-300 rounded-lg"
            width="1300" 
            height="720"
            src="https://embed.figma.com/proto/7WAVFCyZjtJg6isNKbGaA5/Peninsula-Phase-4?page-id=0%3A1&node-id=1-1634&p=f&viewport=792%2C996%2C0.18&scaling=scale-down-width&content-scaling=fixed&starting-point-node-id=1%3A1634&show-proto-sidebar=1&embed-host=share"
            allowFullScreen
          />

        </div>


      </section> */}


    </main>
  );
}







// 📌 1. 숫자 섹션
// const StatsSection = () => (
//   <div className="h-auto flex flex-col items-center justify-center">
//     <div className="w-full flex flex-col justify-center gap-y-9 items-center h-auto">
//       <h2 className="w-[600px] text-3xl font-bold flex flex-col items-center align-middle justify-between space-y-10">
//         정보 과다와 복잡한 내비게이션. <br /> 최소한의 노력으로 최대한의 가치를.
//       </h2>
//       <div className="w-[50%] flex justify-between text-3xl font-semibold">
//         <div className="flex flex-col items-center justify-center">
//           <p className="text-gray-700 text-base">평균 이탈률</p>
//           <h1 className="text-5xl">65%</h1>
//         </div>
//         <div className="flex flex-col items-center justify-center">
//           <p className="text-gray-700 text-base">평균 방문시간</p>
//           <h1 className="text-5xl">80초</h1>
//         </div>
//         <div className="flex flex-col items-center justify-center">
//           <p className="text-gray-700 text-base">CTA 클릭률</p>
//           <h1 className="text-5xl">1.2%</h1>
//         </div>
//       </div>
//     </div>
//   </div>
// );

// 📌 2. 경쟁자 분석 섹션
// const CompetitorAnalysis = () => (
//   <div>
//     <div className="w-full h-auto flex flex-col items-center justify-center gap-y-20">
//       <h2 className="text-3xl font-bold">경쟁자 분석을 통한 아이디어 도출</h2>
//       <div className="flex flex-col items-center justify-between md:flex-row space-y-8 md:space-y-0 md:space-x-16">
//         <div className="space-y-10 w-[450px]">
//           <h3 className="text-lg font-semibold flex items-center">
//             <img src="/mockup/peninsula/citation.png" className="h-[2rem]"/>
//           </h3>
//           <div className="장점">
//             <div className="semi-title pb-[1rem]">장점</div>
//             <div className="flex flex-wrap gap-2">
//               <span className="px-3 py-1 border-1 bg-[#F5F5F5] rounded-full text-xs">심플한 레이아웃</span>
//               <span className="px-3 py-1 border-1 bg-[#F5F5F5] rounded-full text-xs">통일된 브랜딩</span>
//               <span className="px-3 py-1 border-1 bg-[#F5F5F5] rounded-full text-xs">아이콘 활용</span>
//               <span className="px-3 py-1 border-1 bg-[#F5F5F5] rounded-full text-xs">깔끔한 텍스트 정렬</span>
//               <span className="px-3 py-1 border-1 bg-[#F5F5F5] rounded-full text-xs">효과적인 컨텐츠 정렬</span>
//             </div>
//           </div>
//           <div className="단점">
//             <div className = "semi-title pb-[1rem]">단점</div>
//               <div className="flex flex-wrap gap-2">
//                 <span className="px-3 py-1 border-1 bg-[#F5F5F5] rounded-full text-xs">CTA 부족</span>
//                 <span className="px-3 py-1 border-1 bg-[#F5F5F5] rounded-full text-xs">일정하지 않은 섹션간 간격</span>
//                 <span className="px-3 py-1 border-1 bg-[#F5F5F5] rounded-full text-xs">과도한 양의 텍스트</span>
//                 <span className="px-3 py-1 border-1 bg-[#F5F5F5] rounded-full text-xs">여백 부족</span>
//                 <span className="px-3 py-1 border-1 bg-[#F5F5F5] rounded-full text-xs">브랜딩에 맞지 않는 색상</span>
//               </div>
//           </div>

//           <p className="text-gray-600 text-sm">
//             사용자 경험을 향상시키기 위해 직관적인 레이아웃과 일관된 디자인 시스템을 적용하는 전략이 필요하다고 판단했습니다.
//           </p>
//         </div>
//       </div>
//     </div>
//   </div>
  
//   );
  

// 📌 3. 그래프 섹션
// const GraphSection = () => (
//   <div className="w-full h-[50vh] flex flex-col justify-center items-left space-y-30 ">

//     <div className="flex flex-col items-center align-middle justify-between space-y-10">
//       <h2 className="text-3xl font-bold">
//         사용자를 위한 디자인. <br /> 사용자 의견으로부터.
//       </h2>
//       <div className="flex flex-row items-center space-x-10">
//         <div className="w-64 h-64">
//           <svg className="w-full h-full" viewBox="0 0 100 100">
//             <circle cx="50" cy="50" r="40" fill="none" stroke="#ddd" strokeWidth="8" />
//             <circle cx="50" cy="50" r="40" fill="none" stroke="#1E40AF" strokeWidth="8" strokeDasharray="80 100" />
//             <circle cx="50" cy="50" r="32" fill="none" stroke="#3B82F6" strokeWidth="8" strokeDasharray="65 100" />
//             <circle cx="50" cy="50" r="24" fill="none" stroke="#6366F1" strokeWidth="8" strokeDasharray="72 100" />
//           </svg>
//         </div>
//         <ul className="text-sm space-y-1">
//           <li className="flex items-center">
//             <span className="w-3 h-3 bg-blue-900 rounded-full inline-block mr-2"></span> 필요한 정보를 찾기 어려움 (80%)
//           </li>
//           <li className="flex items-center">
//             <span className="w-3 h-3 bg-blue-600 rounded-full inline-block mr-2"></span> Form 입력 과정이 복잡하다고 느낌 (65%)
//           </li>
//           <li className="flex items-center">
//             <span className="w-3 h-3 bg-indigo-500 rounded-full inline-block mr-2"></span> 텍스트 콘텐츠가 너무 과다한 느낌 (72%)
//           </li>
//         </ul>
//       </div>
//     </div>
//   </div>
// );
