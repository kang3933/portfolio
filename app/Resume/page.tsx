import Header from "@/components/header";
//import Image from "next/image";

export default function Home(){
  return (
    <>
    <Header />
    <main>
      <div className='project_hero'>
        <h1>이력서와 포트폴리오</h1>
      </div>
      <div className="downloadButtons flex gap-4">
        <a
          href="/resume/Hyunjin_Kang_Resume.pdf" // 이력서 파일 경로
          download="Hyunjin_Kang_Resume.pdf"
          className="w-[132px] h-[38px] bg-[#494FFF] text-white text-[12px] font-semibold flex items-center justify-center rounded-full shadow-md transition-[box-shadow] duration-[300ms] ease-[cubic-bezier(0.25,0.1,0.25,1)] hover:shadow-[0_0_20px_rgba(73,79,255,0.6)]"
        >
          이력서 다운로드
        </a>
        <a
          href="/portfolio/Hyunjin_Kang_Portfolio.pdf" // 포트폴리오 파일 경로
          download="Hyunjin_Kang_Portfolio.pdf"
          className="w-[150px] h-[38px] bg-[#494FFF] text-white text-[12px] font-semibold flex items-center justify-center rounded-full shadow-md transition-[box-shadow] duration-[300ms] ease-[cubic-bezier(0.25,0.1,0.25,1)] hover:shadow-[0_0_20px_rgba(73,79,255,0.6)]"
        >
          포트폴리오 다운로드
        </a>
      </div>
    </main>
    </>
  )
}
