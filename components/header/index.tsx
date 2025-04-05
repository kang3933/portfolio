"use client"; // 클라이언트 컴포넌트 지정

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation"; // 현재 경로 가져오기
import { NavigationType } from "./types";

const navigation: NavigationType[] = [
  { name: "Home", href: "/", id: 1 },
  { name: "Projects", href: "/Projects", id: 2 },
  { name: "About", href: "/About", id: 3 },
];

const Header = () => {
  const pathname = usePathname(); // 현재 경로 가져오기
  const [isVisible, setIsVisible] = useState(true); // 헤더가 보이는지 여부
  const [lastScrollY, setLastScrollY] = useState(0); // 마지막 스크롤 위치

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY) {
        // 스크롤을 내릴 때 -> 숨김
        setIsVisible(false);
      } else {
        // 스크롤을 올릴 때 -> 다시 나타남
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]); // lastScrollY가 변경될 때마다 실행

  return (
   
    <header
  className={`h-16 flex items-center justify-center font-pretendard fixed top-0 left-0 w-full transition-transform duration-300 ${
    isVisible ? "translate-y-0" : "-translate-y-full"
  } px-[5%]`}
>
  {/* 배경 스타일을 적용할 div */}
  <div className="absolute top-0 left-0 w-full h-full bg-[#F5F5F5]/50 backdrop-blur-sm z-[-1]" />

  {/* 최대 너비를 1300px로 제한하는 컨테이너 */}
  <div className="w-full max-w-[1300px] flex justify-between items-center relative z-10">
    {/* 네비게이션 */}
    <nav>
      <div className="flex gap-x-12">
        {navigation.map((item) => {
          const isActive = pathname === item.href; // 현재 페이지인지 확인
          return (
            <Link key={item.id} href={item.href} className="relative group">
              <span
                className={`text-base font-semibold leading-6 cursor-pointer transition-all ${
                  isActive ? "text-[#494FFF]" : "text-black"
                }`}
              >
                {item.name}
              </span>
              {/* 밑줄 애니메이션 */}
              <span
                className={`absolute bottom-[-4px] left-1/2 transform -translate-x-1/2 h-[2px] bg-[#494FFF] transition-all duration-300 ease-in-out group-hover:w-full ${
                  isActive ? "w-full" : "w-0"
                }`}
              />
            </Link>
          );
        })}
      </div>
    </nav>

    {/* CTA 버튼 */}
    <Link
      href="/Resume"
      className="w-[132px] h-[38px] bg-[#494FFF] text-white text-[12px] font-semibold flex items-center justify-center rounded-full shadow-md transition-[box-shadow] duration-[300ms] ease-[cubic-bezier(0.25,0.1,0.25,1)] hover:shadow-[0_0_10px_rgba(73,79,255,0.6)]"
    >
      Resume
    </Link>
  </div>
</header>


  );
};

export default Header;
