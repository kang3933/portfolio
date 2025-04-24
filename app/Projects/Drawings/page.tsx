'use client'

import Image from 'next/image'
import { useState } from 'react'
import clsx from 'clsx'
import Link from 'next/link'
import { FiHome } from 'react-icons/fi'

const galleryThemes = {
  nature: [
    { src: '/mockup/drawings/ipad_bw/lj.jpg', title: 'Lebron James' },
    { src: '/mockup/drawings/ipad_bw/brady.jpg', title: 'Tom Brady' },
    { src: '/mockup/drawings/ipad_bw/thor.jpg', title: 'Thor' },
    { src: '/mockup/drawings/ipad_bw/ca.jpg', title: 'Captain America' },
    { src: '/mockup/drawings/ipad_bw/givenchy.jpg', title: 'Hubert De Givenchy' },
    { src: '/mockup/drawings/ipad_bw/chanel.jpg', title: 'Coco Chanel' },
    { src: '/mockup/drawings/ipad_bw/balenciaga.jpg', title: 'Cristóbal Balenciaga' },
    { src: '/mockup/drawings/ipad_bw/dior.jpg', title: 'Christian Dior' },
    { src: '/mockup/drawings/ipad_bw/prada.jpg', title: 'Miuccia Prada' },
    { src: '/mockup/drawings/ipad_bw/lag.jpg', title: 'Karl Lagerfeld' },
    { src: '/mockup/drawings/ipad_bw/raf.jpg', title: 'Raf Simons' },
    { src: '/mockup/drawings/ipad_bw/versace.jpg', title: 'Gianni Versace' },
    { src: '/mockup/drawings/ipad_bw/ysl.jpg', title: 'Yves Saint Laurent' },
    { src: '/mockup/drawings/ipad_bw/hardy.jpg', title: 'Tom Hardy' },
    { src: '/mockup/drawings/ipad_bw/depp.jpg', title: 'Johnny Depp' },
    { src: '/mockup/drawings/ipad_bw/mick.jpg', title: 'Mads Mikkelsen' },
    { src: '/mockup/drawings/ipad_bw/leo.jpg', title: 'Leonardo DiCaprio' },
  ],
  city: [
    { src: '/mockup/drawings/pb/tommy.jpg', title: 'Thomas Shelby' },
    { src: '/mockup/drawings/pb/arthur.jpg', title: 'Arthur Shelby' },
    { src: '/mockup/drawings/pb/john.jpg', title: 'John Shelby' },
    { src: '/mockup/drawings/pb/michael.jpg', title: 'Michale Gray' },
    { src: '/mockup/drawings/pb/alphie.jpg', title: 'Alfie Solomons' },
    { src: '/mockup/drawings/pb/polly.jpg', title: 'Polly Gray' },
    { src: '/mockup/drawings/pb/ada.jpg', title: 'Ada Shelby' },
  ],
  abstract: [
    { src: '/mockup/drawings/hand/aragorn.jpg', title: 'Aragorn' },
    { src: '/mockup/drawings/hand/legolas.jpg', title: 'Legolas' },
    { src: '/mockup/drawings/hand/gimli.jpg', title: 'Gimli' },
    { src: '/mockup/drawings/hand/stone.jpg', title: 'Everything, Everywhere, all at once' },
    { src: '/mockup/drawings/hand/bf1.jpg', title: 'Battlefield' },
    { src: '/mockup/drawings/hand/bf2.jpg', title: 'Battlefield' },
    { src: '/mockup/drawings/hand/ac.jpg', title: 'Assassins Creed' },
    { src: '/mockup/drawings/hand/hardy.jpg', title: 'Tom Hardy' },
    { src: '/mockup/drawings/hand/pro.jpg', title: 'Prometheus' },
    { src: '/mockup/drawings/hand/dr.jpg', title: 'Doctor Strange' },
    { src: '/mockup/drawings/hand/pantheon.jpg', title: 'League of Legends : Pantheon' },
    { src: '/mockup/drawings/hand/dk.jpg', title: 'The Dark Knight' },
    { src: '/mockup/drawings/hand/jujutsu.jpg', title: 'Jujutsu Kaisen' },
    { src: '/mockup/drawings/hand/woodz.jpg', title: 'Woodz' },
    { src: '/mockup/drawings/hand/sw.jpg', title: 'Star Wars' },
  ],
}

export default function FullscreenCenterGallery() {
  const [activeTab, setActiveTab] = useState<'nature' | 'city' | 'abstract'>('nature')
  const [activeIndex, setActiveIndex] = useState(0)
  const images = galleryThemes[activeTab]
  const total = images.length

  const rotate = (dir: 'left' | 'right') => {
    setActiveIndex((prev) =>
      dir === 'left' ? (prev - 1 + total) % total : (prev + 1) % total
    )
  }

  const getIndex = (offset: number) => (activeIndex + offset + total) % total

  return (
    <div className="w-full h-screen bg-black text-white flex flex-col items-center justify-center relative overflow-hidden">
      <div className="fixed top-6 left-6 flex flex-row gap-x-3 z-50">
        <Link href="/" passHref>
          <div className="w-8 h-8 rounded-full bg-[#131313] border border-white text-white flex justify-center items-center hover:scale-105 transition-transform duration-200 cursor-pointer shadow-lg">
            <FiHome size={20} />
          </div>
        </Link>
      </div>
      {/* Tabs */}
      <div className="absolute top-6 flex gap-4 z-30">
        {(['nature', 'city', 'abstract'] as const).map((tab) => (
          <button
            key={tab}
            onClick={() => {
              setActiveTab(tab)
              setActiveIndex(0)
            }}
            className={clsx(
              'px-4 py-2 rounded-md text-sm font-medium transition-colors',
              activeTab === tab ? 'bg-white text-black' : 'bg-gray-700 hover:bg-gray-600'
            )}
          >
            {tab === 'nature' ? 'Digital Portrait' : tab === 'city' ? 'Project:Peaky Blinders' : 'Hand Drawings'}
          </button>
        ))}
      </div>

      {/* Image Display */}
      <div className="relative flex items-center justify-center w-full h-full">
        {/* Previous Image */}
        <div className="absolute left-[10%] scale-75 opacity-50 z-10 transition-all duration-500">
          <Image
            src={images[getIndex(-1)].src}
            alt={images[getIndex(-1)].title}
            width={300}
            height={400}
            className="rounded-xl shadow-lg object-cover"
          />
        </div>

        {/* Current Image */}
        <div className="z-20 scale-100 text-center transition-all duration-500">
          <Image
            src={images[getIndex(0)].src}
            alt={images[getIndex(0)].title}
            width={600}
            height={550}
            className="rounded-xl shadow-2xl object-cover"
          />
          <p className="mt-4 text-lg font-semibold">{images[getIndex(0)].title}</p>
        </div>

        {/* Next Image */}
        <div className="absolute right-[10%] scale-75 opacity-50 z-10 transition-all duration-500">
          <Image
            src={images[getIndex(1)].src}
            alt={images[getIndex(1)].title}
            width={300}
            height={400}
            className="rounded-xl shadow-lg object-cover"
          />
        </div>
      </div>

      {/* Controls */}
      <div className="absolute bottom-10 flex gap-6 z-30">
        <button onClick={() => rotate('left')} className="px-5 py-2 bg-white text-black rounded-md">
          ← Prev
        </button>
        <button onClick={() => rotate('right')} className="px-5 py-2 bg-white text-black rounded-md">
          Next →
        </button>
      </div>
    </div>
  )
}
