"use client"

import { Typewriter } from "react-simple-typewriter"
import Image from "next/image";
import Link from "next/link";
import {FiPlus} from "react-icons/fi";
import { FiDownload } from "react-icons/fi";


export default function Home(){
  return (
    <>
    <main className="overflow-hidden">



      <section className="w-full h-screen flex flex-row justify-center items-center bg-[#131313] pl-[5%] pr-[5%]">
        
        <div className="w-full h-full flex flex-row justify-between items-center">

          <div className="w-full h-full pt-[5%] pb-[5%] flex flex-col justify-between">

            <div className="w-full leading-[1.1] text-[10vw] text-[#F5F5F5] font-bold font-[Pretendard]">
              <h1>
                <span className="text-[#0063FF]">
                  <Typewriter
                    words={["WELCOME"]}
                    loop={Infinity}
                    cursor
                    cursorStyle="_"
                    typeSpeed={150}
                    deleteSpeed={50}
                    delaySpeed={5000}
                  />
                </span>
                TO <br />
                HYUNJIN KANG&apos;s <br />
                PORTFOLIO
              </h1>
            </div>

            <div className="w-full  text-xl font-normal font-[pretendard]">

              <div className="flex justify-between flex-col sm:flex-row gap-2 sm:gap-0">
                
                <p className="text-[#0063FF] text-[1rem]">
                  +61 491 183 900
                </p>
                <p className="text-[#0063FF] text-[1rem]">
                  henryk3933@gmail.com
                </p>
                <p className="text-[#0063FF] text-[1rem]">
                  +82 10 7344 3933
                </p>

              </div>

            </div>

          </div>
        
        </div>

      </section>




      <section className="w-full h-auto flex flex-row justify-between items-center bg-[#242424] pt-[3rem] pb-[3rem]">

        <div className="flex w-full justify-between pl-[5%] pr-[5%]">

          <div className="w-50% flex flex-row justify-between">
          <div className = "about_content_wrapper">

        <div className="w-full flex flex-col justify-between">

          <div className="aboutTitles gap-[2rem]">
            <div className="text-[3rem] font-bold font-[Pretendard]">
              <span className="text-[#F5F5F5]">
                  <Typewriter
                    words={["ABOUT"]}
                    loop={Infinity}
                    cursor
                    cursorStyle="_"
                    typeSpeed={150}
                    deleteSpeed={50}
                    delaySpeed={5000}
                  />
              </span>
            </div>
            <div className="aboutContentWrapper">
              <div className="text-[#0063FF] text-[1rem] font-bold font-[Pretendard]">
              EDUCATION
              </div>
              <div className="flex flex-col gap-3">
                <div className="flex flex-col gap-1">
                  <div className="text-[#F5F5F5] text-[1rem] font-semibold font-[Pretendard]">
                    Queensland University of Technology
                  </div>
                  <div className="text-[#A0A0A0] text-[0.85rem] font-normal font-[Pretendard]">
                    컴퓨터 과학(Computer Science) & 시각디자인(Visual Communication) 복수 전공 
                  </div>
                </div>
                <div className="text-[#F5F5F5] text-[1rem] font-bold font-[Pretendard]">
                  Craigslea State High School
                </div>
                <div className="text-[#F5F5F5] text-[1rem] font-bold font-[Pretendard]">
                  중산 고등학교
                </div>
              </div>
            </div>

            <div className="aboutContentWrapper">
              <div className="text-[#0063FF] text-[1rem] font-bold font-[Pretendard]">
              EXPERIENCE
              </div>
              <div className="flex flex-col gap-3">
                <div className="experienceContainer">
                  <div className="text-[#F5F5F5] text-[1rem] font-semibold font-[Pretendard]">
                  Beinc - Web Designer
                  </div>
                  <div className="text-[#A0A0A0] text-[0.85rem] font-normal font-[Pretendard]">
                    2024.04-2025.01
                  </div>
                </div>
                <div className="experienceContainer">
                  <div className="text-[#F5F5F5] text-[1rem] font-semibold font-[Pretendard]">
                    NKR
                  </div>
                  <div className="text-[#A0A0A0] text-[0.85rem] font-normal font-[Pretendard]">
                  2023.06-2023.07
                  </div>
                </div>
                <div className = "experienceContainer">
                  <div className="text-[#F5F5F5] text-[1rem] font-semibold font-[Pretendard]">
                    Eighty8 Media - Graphic Design Intern
                  </div>
                  <div className="text-[#A0A0A0] text-[0.85rem] font-normal font-[Pretendard]">
                  2021.03-2021.05
                  </div>
                </div>
                <div className="experienceContainer">
                  <div className="text-[#F5F5F5] text-[1rem] font-semibold font-[Pretendard]">
                    US 8th Army Korean Augmentation to the United States Army
                  </div>
                  <div className="text-[#A0A0A0] text-[0.85rem] font-normal font-[Pretendard]">
                  2019.01-2020.08
                  </div>
                </div>
              </div>

            </div>

            <div className="aboutContentWrapper">
            <div className="text-[#0063FF] text-[1rem] font-bold font-[Pretendard]">
              TOOLS
            </div>

            <div className="flex flex-col gap-6">
              {/* 디자인 툴 섹션션 */}
              <div className= "toolsDescription gap-4">
                <div className="text-[#F5F5F5] text-[1rem] font-semibold font-[Pretendard]">
                  디자인
                </div>
                <div className="aboutLogos grid grid-cols-8 gap-4">
                  <img src="/aboutIcons/illustrator.png" alt="illustrator" className="w-8 h-8" />
                  <img src="/aboutIcons/photoshop.png" alt="Photoshop" className="w-8 h-8" />
                  <img src="/aboutIcons/premierepro.png" alt="premierepro" className="w-8 h-8" />
                  <img src="/aboutIcons/figma.png" alt="figma" className="w-8 h-8" />
                  <img src="/aboutIcons/procreate.png" alt="procreate" className="w-8 h-8" />
                </div>
              </div>

              {/* 디자인 툴 섹션션 */}
              <div className= "toolsDescription gap-4">
                <div className="text-[#F5F5F5] text-[1rem] font-semibold font-[Pretendard]">
                  개발
                </div>
                <div className="aboutLogos grid grid-cols-8 gap-4">
                  <img src="/aboutIcons/webflow.png" alt="webflow" className="w-8 h-8" />
                  <img src="/aboutIcons/react.png" alt="react" className="w-8 h-8" />
                  <img src="/aboutIcons/next.png" alt="next" className="w-8 h-8" />
                  <img src="/aboutIcons/html.png" alt="html" className="w-8 h-8" />
                  <img src="/aboutIcons/css.png" alt="css" className="w-8 h-8" />
                  <img src="/aboutIcons/wix.png" alt="wix" className="w-8 h-8" />
                  <img src="/aboutIcons/wordpress.png" alt="wordpress" className="w-8 h-8" />
                  <img src="/aboutIcons/squarespace.png" alt="squarespace" className="w-8 h-8" />
                </div>
              </div>
            </div>


            </div>
          </div>


          </div>
          
          </div>

          
          </div>

        </div>
        <div className="relative w-full h-screen overflow-hidden hidden md:block">

          <Image 
            src="/mockup/me2.png"  
            alt="My photo"
            fill
            quality={80} // (선택) 이미지 퀄리티 조절 (0~100)
            className="object-contain"
            />

        </div>

      </section>



      <section className="w-full h-auto flex flex-col justify-center bg-[#131313] pl-[5%] pr-[5%]">
        <div className="w-full h-full flex flex-col justify-betweenpt-[5%] pt-[5%] pb-[5%] gap-[3rem] ">

          <div className="text-[3rem] font-bold font-[Pretendard]">
              <span className="text-[#F5F5F5]">
                  <Typewriter
                    words={["PROJECTS"]}
                    loop={Infinity}
                    cursor
                    cursorStyle="_"
                    typeSpeed={150}
                    deleteSpeed={50}
                    delaySpeed={5000}
                  />
              </span>
          </div>

          <div className="flex flex-col gap-[2rem]">

          <div className="w-full h-[50vh] p-[10%] flex flex-col md:flex-row justify-between items-center rounded-[1rem] bg-[#F5F5F5] gap-8">
            {/* 텍스트 영역 */}
            <div className="flex flex-col justify-center items-center w-full md:w-[50%]">
              <div className="text-[#131313] font-[Pretendard] flex flex-col justify-start items-center">
                <div className="text-[2rem] font-bold">
                  Peninsula Group Limited
                </div>
                <div className="text-[1rem] font-medium">
                  리브랜딩, 새로운 웹사이트
                </div>
              </div>

              <div className="mt-6">
                <Link href="/Projects/Peninsula" passHref>
                  <div className="w-8 h-8 rounded-full bg-[#0063FF] text-white flex justify-center items-center hover:scale-105 transition-transform duration-200 cursor-pointer shadow-lg">
                    <FiPlus size={24} />
                  </div>
                </Link>
              </div>
            </div>

            {/* 이미지 영역 */}
            <div className="w-full md:w-[50%] h-[40vh] md:h-[60vh] relative">
              <Image 
                src="/mockup/peninsula/3.png"  
                alt="My photo"
                fill
                quality={80}
                className="object-contain"
              />
            </div>
          </div>




            <div className="flex flex-row justify-between gap-[2rem] ">


              <div className="w-[33%] p-[3%] flex flex-col justify-between rounded-[1rem] bg-[#f5f5f5]">
                <div className="h-auto flex flex-row justify-start items-start">
                  <div className="w-full flex flex-row justify-between items-center">
                    <div className="text-[#131313] font-[Pretendard] flex flex-col justify-center items-start">
                      <div className="text-[1.5rem] font-bold">Beinc</div>
                      <div className="text-[1rem] font-medium">새로운 웹사이트가 필요할 때</div>
                    </div>

                    <div className="mt-6">
                      <Link href="/Projects/Beinc" passHref>
                        <div className="w-8 h-8 rounded-full bg-[#131313] text-white flex justify-center items-center hover:scale-105 transition-transform duration-200 cursor-pointer shadow-lg">
                          <FiPlus size={24} />
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="w-full aspect-[3/2] relative">
                  <Image 
                  src="/mockup/beinc/3.png"  
                  alt="My photo"
                  fill
                  quality={80}
                  className="object-contain"
                />
                </div>
              </div>

              <div className="w-[33%] p-[3%] flex flex-col justify-between rounded-[1rem] bg-[#f5f5f5]">
                <div className="h-auto flex flex-row justify-start items-start">
                  <div className="w-full flex flex-row justify-between items-center">
                    <div className="text-[#131313] font-[Pretendard] flex flex-col justify-center items-start">
                      <div className="text-[1.5rem] font-bold">Other Projects</div>
                      <div className="text-[1rem] font-medium">클라이언트와 사용자 의견 사이 어딘가</div>
                    </div>

                    <div className="mt-6">
                      <Link href="/Projects/Beinc" passHref>
                        <div className="w-8 h-8 rounded-full bg-[#131313] text-white flex justify-center items-center hover:scale-105 transition-transform duration-200 cursor-pointer shadow-lg">
                          <FiPlus size={24} />
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="w-full aspect-[3/2] relative">
                  <Image 
                  src="/mockup/others/sod.png"  
                  alt="My photo"
                  fill
                  quality={80}
                  className="object-contain"
                />
                </div>
              </div>


              <div className="w-[33%] p-[3%] flex flex-col justify-between rounded-[1rem] bg-[#f5f5f5]">
                <div className="h-auto flex flex-row justify-start items-start">
                  <div className="w-full flex flex-row justify-between items-center">
                    <div className="text-[#131313] font-[Pretendard] flex flex-col justify-center items-start">
                      <div className="text-[1.5rem] font-bold">Drawings</div>
                      <div className="text-[1rem] font-medium">끄적끄적 낙서장</div>
                    </div>

                    <div className="mt-6">
                      <Link href="/Projects/Beinc" passHref>
                        <div className="w-8 h-8 rounded-full bg-[#131313] text-white flex justify-center items-center hover:scale-105 transition-transform duration-200 cursor-pointer shadow-lg">
                          <FiPlus size={24} />
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="w-full aspect-[3/2] relative">
                  <Image 
                  src="/mockup/me.png"  
                  alt="My photo"
                  fill
                  quality={80}
                  className="object-contain"
                />
                </div>
              </div>


                
            </div>


          </div>

        </div>


      </section>



      <section className="w-full h-auto flex flex-col justify-center bg-[#242424] pl-[5%] pr-[5%] pb-[5%]">
  <div className="w-full h-full flex flex-col justify-between pt-[5%] pb-[5%] gap-[3rem]">
    <div className="text-[3rem] font-bold font-[Pretendard]">
      <span className="text-[#F5F5F5]">
        <Typewriter
          words={["DOCUMENTS"]}
          loop={Infinity}
          cursor
          cursorStyle="_"
          typeSpeed={150}
          deleteSpeed={50}
          delaySpeed={5000}
        />
      </span>
    </div>
  </div>

  <div className="w-full flex flex-row justify-between gap-[2rem]">
    {/* 포트폴리오 다운로드 */}
    <div className="w-full h-[30vh] p-[3%] flex flex-row justify-center items-center rounded-[1rem] bg-[#F5F5F5]">
      <div className="flex flex-col items-center">
        <div className="text-[#131313] font-[Pretendard] flex flex-col justify-center items-center">
          <div className="text-[2rem] font-bold">PORTFOLIO</div>
          <div className="text-[1rem] font-bold">강현진의 디자인 포트폴리오</div>
        </div>

        <div className="mt-6">
          <a
            href="/portfolio/Hyunjin_Kang_Portfolio.pdf"
            download="Hyunjin_Kang_Portfolio.pdf"
            className="w-14 h-14 rounded-full bg-[#131313] text-white flex justify-center items-center hover:scale-105 transition-transform duration-200 cursor-pointer shadow-lg"
          >
            <FiDownload size={24} />
          </a>
        </div>
      </div>
    </div>

    {/* 이력서 다운로드 */}
    <div className="w-full h-[30vh] p-[3%] flex flex-row justify-center items-center rounded-[1rem] bg-[#F5F5F5]">
      <div className="flex flex-col items-center">
        <div className="text-[#131313] font-[Pretendard] flex flex-col justify-center items-center">
          <div className="text-[2rem] font-bold">RESUME</div>
          <div className="text-[1rem] font-bold">강현진의 이력서</div>
        </div>

        <div className="mt-6">
          <a
            href="/resume/Hyunjin_Kang_Resume.pdf"
            download="Hyunjin_Kang_Resume_Korean.pdf"
            className="w-14 h-14 rounded-full bg-[#131313] text-white flex justify-center items-center hover:scale-105 transition-transform duration-200 cursor-pointer shadow-lg"
          >
            <FiDownload size={24} />
          </a>
        </div>
      </div>
    </div>
  </div>
</section>





    </main>
    </>
  )
}
