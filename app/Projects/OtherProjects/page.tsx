//import Header from "@/components/header";
import Link from "next/link";
import { FiHome } from "react-icons/fi";
import Image from "next/image";

export default function Home(){
  return (
    <>
    <main className="w-full bg-[#F5F5F5] flex font-[pretendard] flex-col items-center overflow-hidden break-keep">

      <div className="mt-6 fixed flex flex-row gap-x-3">
        <Link href="/" passHref>
          <div className=" w-8 h-8 rounded-full bg-[#131313] border-1 border-[white] text-white flex justify-center items-center hover:scale-105 transition-transform duration-200 cursor-pointer shadow-lg">
            <FiHome size={20} />
          </div>
        </Link>
      </div>

      <div className="w-full bg-[#00372E] pb-0 pt-[5%] pl-[5%] pr-[5%] flex justify-center items-center overflow-hidden">
        <div className="relative w-screen h-[80vh]">
          <Image
            src="/mockup/others/kcmobile.png"
            alt="kcmobile"
            fill
            priority // 첫 로딩 이미지면 추가
            className="object-contain items-center rounded-2xl bg-[#F5F5F5]"
          />
        </div>
      </div>


      <div className="w-full bg-[#00372E] pb-[5%] pl-[5%] pr-[5%] pt-[5%] m-0 flex justify-center text-[#F5F5F5]">
        <div className="w-full flex flex-col sm:flex-row sm:justify-between sm:items-center gap-5">
          <div className='projectDetail w-full sm:w-[50%]'>
            <h1>KC&Co</h1>
            <h5 className="text-base">UI/UX Design / Development <br/>   <a
              href="https://www.kcandcolaw.com.au"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-gray-300 transition-colors duration-200"
            >
              www.kcandcolaw.com.au</a></h5>
          </div>

          <div className='projectDetail w-full sm:w-[50%]'>
            <h5 className="text-base font-normal">KC&Co 웹사이트는 가정법, 아동 보호, 가정 폭력 등 민감한 주제를 주로 다루는 특성을 고려하여,
              사용자에게 안전하고 신뢰감 있는 인상을 줄 수 있도록 따뜻하고 신회감 있는 UX/UI로 설계되었으며, WordPress 기반으로 개발까지 완료한 프로젝트입니다.
            </h5>
          </div>
        </div>
      </div>

      <div className="w-full bg-[#00372E] pb-[5%] flex justify-center items-center overflow-hidden">
        <div className="relative w-screen h-[80vh]">
          <Image
            src="/mockup/others/kcwf.png"
            alt="kcmobile"
            fill
            priority // 첫 로딩 이미지면 추가
            quality={100}
            className="object-cover items-center"
          />
        </div>
      </div>








      <div className="w-full bg-[#277561] pb-0 pt-[5%] pl-[5%] pr-[5%] flex justify-center items-center overflow-hidden">
        <div className="relative w-screen h-[80vh]">
          <Image
            src="/mockup/others/msmobile.png"
            alt="kcmobile"
            fill
            priority // 첫 로딩 이미지면 추가
            className="object-contain items-center rounded-2xl bg-[#F5F5F5]"
          />
        </div>
      </div>


      <div className="w-full bg-[#277561] pb-[5%] pl-[5%] pr-[5%] pt-[5%] m-0 flex justify-center text-[#F5F5F5]">
        <div className="w-full flex flex-col sm:flex-row sm:justify-between sm:items-center gap-5">
          <div className='projectDetail w-full sm:w-[50%]'>
            <h1>Medical Stockings</h1>
            <h5 className="text-base">UI/UX Design / Development <br/>  <a
              href="https://www.medicalstockings.com.au"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-gray-300 transition-colors duration-200"
            >
              www.medicalstockings.com.au</a></h5>
          </div>

          <div className='projectDetail w-full sm:w-[50%]'>
            <h5 className="text-base font-normal">KC&Co 웹사이트는 가정법, 아동 보호, 가정 폭력 등 민감한 주제를 주로 다루는 특성을 고려하여,
              사용자에게 안전하고 신뢰감 있는 인상을 줄 수 있도록 따뜻하고 신회감 있는 UX/UI로 설계되었으며, WordPress 기반으로 개발까지 완료한 프로젝트입니다.
            </h5>
          </div>
        </div>
      </div>

      <div className="w-full bg-[#277561] pb-[5%] flex justify-center items-center overflow-hidden">
        <div className="relative w-full h-screen">
          <Image
            src="/mockup/others/mswf.png"
            alt="kcmobile"
            fill
            priority // 첫 로딩 이미지면 추가
            quality={100}
            className="object-cover"
          />
        </div>
      </div>







      <div className="w-full bg-[#131313] pb-0 pt-[5%] pl-[5%] pr-[5%] flex justify-center items-center overflow-hidden">
        <div className="relative w-screen h-[80vh]">
          <Image
            src="/mockup/others/sod.png"
            alt="kcmobile"
            fill
            priority // 첫 로딩 이미지면 추가
            className="object-contain items-center rounded-2xl bg-[#F5F5F5]"
          />
        </div>
      </div>


      <div className="w-full bg-[#131313] pb-[5%] pl-[5%] pr-[5%] pt-[5%] m-0 flex justify-center text-[#F5F5F5]">
        <div className="w-full flex flex-col sm:flex-row sm:justify-between sm:items-center gap-5">
          <div className='projectDetail w-full sm:w-[50%]'>
            <h1>Speck of Dust</h1>
            <h5 className="text-base">UI/UX Design / Development <br/>   <a
              href="https://www.speckofdust.net"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-gray-300 transition-colors duration-200"
            >
              www.speckofdust.net</a></h5>
          </div>

          <div className='projectDetail w-full sm:w-[50%]'>
            <h5 className="text-base font-normal">Speck of Dust 웹사이트 리디자인은 시드니 기반 비디오 프로덕션 에이전시의 정체성을 직관적으로 보여주기 위해,
              히어로 섹션과 자체 제작 영상을 활용하고 각 서비스를 명확히 구분해 다양한 활동 범위를 효과적으로 표현한 프로젝트입니다.
            </h5>
          </div>
        </div>
      </div>

      <div className="w-full bg-[#131313] pb-[5%] flex justify-center items-center overflow-hidden">
        <div className="relative w-full h-screen">
          <Image
            src="/mockup/others/sodwf.png"
            alt="kcmobile"
            fill
            priority // 첫 로딩 이미지면 추가
            quality={100}
            className="object-cover"
          />
        </div>
      </div>


    </main>
    </>
  )
}
