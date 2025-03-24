import Header from "@/components/header";


export default function Home(){
  return (
    <>
    <Header />
    <main>
      <div className = 'about_content_wrapper'>
        <div className='about_hero'>
          <h1>안녕하세요, 강현진 입니다.</h1>
        </div>

        <div className='about_information'>

          <div className='aboutTitles gap-14'>
            <div className='aboutContentWrapper'>
              <div className='titles'>
                PROFILE
              </div>
              <div className='profileDescription'>
                <ul className='flex flex-col gap-6'>
                  <li>1999.11.24</li>
                  <li>010-7344-3933</li>
                  <li>henryk3933@gmail.com</li>
                </ul>
              </div>

            </div>
            <div className='aboutContentWrapper'>
              <div className='titles'>
               EDUCATION
              </div>
              <div className='flex flex-col gap-6'>
                <div className='flex flex-col gap-1'>
                  <div className='subTitle'>
                    Queensland University of Technology
                  </div>
                  <div className='description'>
                    컴퓨터 과학(Computer Science) & 시각디자인(Visual Communication) 복수 전공 
                  </div>
                </div>
                <div className='subTitle'>
                  Craigslea State High School
                </div>
                <div className='subTitle'>
                  중산 고등학교
                </div>
              </div>
            </div>

            <div className='aboutContentWrapper'>
              <div className='titles'>
               EXPERIENCE
              </div>
              <div className='flex flex-col gap-6'>
                <div className='experienceContainer'>
                  <div className='subTitle'>
                   Beinc - Web Designer
                  </div>
                  <div className='description'>
                    2024.04-2025.01
                  </div>
                </div>
                <div className='experienceContainer'>
                  <div className='subTitle'>
                    NKR
                  </div>
                  <div className='description'>
                   2023.06-2023.07
                  </div>
                </div>
                <div className = 'experienceContainer'>
                  <div className='subTitle'>
                    Eighty8 Media - Graphic Design Intern
                  </div>
                  <div className='description'>
                   2021.03-2021.05
                  </div>
                </div>
                <div className='experienceContainer'>
                  <div className='subTitle'>
                    US 8th Army Korean Augmentation to the United States Army
                  </div>
                  <div className='description'>
                   2019.01-2020.08
                  </div>
                </div>
              </div>

            </div>

            <div className='aboutContentWrapper'>
             <div className='titles'>
               TOOLS
             </div>

            <div className='flex flex-col gap-6'>
              {/* 디자인 툴 섹션션 */}
              <div className= 'toolsDescription gap-6'>
                <div className='subTitle'>
                  디자인
                </div>
                <div className='aboutLogos grid grid-cols-8 gap-4'>
                  <img src="/aboutIcons/illustrator.png" alt="illustrator" className="w-8 h-8" />
                  <img src="/aboutIcons/photoshop.png" alt="Photoshop" className="w-8 h-8" />
                  <img src="/aboutIcons/premierepro.png" alt="premierepro" className="w-8 h-8" />
                  <img src="/aboutIcons/figma.png" alt="figma" className="w-8 h-8" />
                  <img src="/aboutIcons/procreate.png" alt="procreate" className="w-8 h-8" />
                </div>
              </div>

              {/* 디자인 툴 섹션션 */}
              <div className= 'toolsDescription gap-6'>
                <div className='subTitle'>
                  개발
                </div>
                <div className='aboutLogos grid grid-cols-8 gap-4'>
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

    </main>
    </>
  )
}
