
export default function Home(){
  return (
    <>
    <main>
      <div className="pt-[4rem] w-full max-w-none overflow-hidden">
        <img className="h-[80vh] rounded-2xl w-screen object-cover" src="/mockup/peninsula/2.png"/>
      </div>

      <section className="width-[1300px] flex flex-col items-center space-y-16">

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


      <div className="w-[1300px]">
        <div className="w-full flex flex-row justify-between items-center space-x-auto h-[70vh]">
          <h2 className="w-[50%] text-3xl font-bold">
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

      <div className="w-[1300px]">
        <div className="flex flex-col justify-center items-left space-y-15 h-[30vh] w-full">
          <h2 className="text-3xl font-bold">경쟁자 분석을 통한 아이디어 도출</h2>
          <div className="flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-16">
            <div className="space-y-10">
              <h3 className="text-lg font-semibold flex items-center">
                <img src="/mockup/peninsula/citation.png" className="h-[2rem]"/>
              </h3>
              <div className="장점">
                <div>장점</div>
                <div className="space-x-2 h-[3rem]">
                  <span className="px-3 py-1 border-1 bg-gray-200 rounded-full text-sm">심플한 레이아웃</span>
                  <span className="px-3 py-1 border-1 bg-gray-200 rounded-full text-sm">통일된 브랜딩</span>
                  <span className="px-3 py-1 border-1 bg-gray-200 rounded-full text-sm">아이콘 활용</span>
                  <span className="px-3 py-1 border-1 bg-gray-200 rounded-full text-sm">깔끔한 텍스트 정렬</span>
                </div>
              </div>
              <div className="단점">
                <div>단점</div>
                <div className="space-x-2 h-[3rem]">
                  <span className="px-3 py-1 border-1 bg-gray-200 rounded-full text-sm">심플한 레이아웃</span>
                  <span className="px-3 py-1 border-1 bg-gray-200 rounded-full text-sm">통일된 브랜딩</span>
                  <span className="px-3 py-1 border-1 bg-gray-200 rounded-full text-sm">아이콘 활용</span>
                  <span className="px-3 py-1 border-1 bg-gray-200 rounded-full text-sm">깔끔한 텍스트 정렬</span>
                </div>
              </div>

              <p className="text-gray-600 text-sm">
                사용자 경험을 향상시키기 위해 직관적인 레이아웃과 일관된 디자인 시스템을 적용하는 전략이 필요하다고 판단했습니다.
              </p>
            </div>

            <div className="space-y-10">
              <h3 className="text-lg font-semibold flex items-center">
                <img src="/mockup/peninsula/hero.png" className="h-[2rem]" />
              </h3>
              <div>
                <div>장점
                  <div className="space-x-2 h-[3rem]">
                      <div className="flex justify-between">                
                        <span className="px-3 py-1 border-1 bg-gray-200 rounded-full text-sm">심플한 레이아웃</span>
                        <span className="px-3 py-1 border-1 bg-gray-200 rounded-full text-sm">통일된 브랜딩</span>
                        <span className="px-3 py-1 border-1 bg-gray-200 rounded-full text-sm">아이콘 활용</span>
                        <span className="px-3 py-1 border-1 bg-gray-200 rounded-full text-sm">공공언어 텍스트 정제</span>
                        <br /> <span className="px-3 py-1 border-1 bg-gray-200 rounded-full text-sm">부담스럽지 않은 양의 텍스트</span>
                      </div>
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


        
      <div className="w-[1300px] flex flex-col justify-center items-left space-y-30 h-[70vh]">

        <div className="flex flex-low items-center align-middle justify-between space-y-6">
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

      </section>

      <section>
        <div>
          
        </div>
      </section>

    </main>
    </>
  )
}
