import React from 'react'
import Image from 'next/image'
// import defaultBackgroundImage from '../../public/images/default.png'

interface Pagetitle {
  title: string;
  subtitle?: string;
}

export const PageHeader: React.FC<Pagetitle> = ({ title, subtitle }) => {
  return (
    <div className="relative w-full h-64 flex items-center justify-center">
      {/* Background Image */}
      <Image 
        src={`https://www.cpsmumbai.org/Uploads/2762023161833920.png`} 
        alt="Background" 
        layout="fill" 
        objectFit="cover" 
        objectPosition="center" 
        className="z-0"
      />

      {/* Overlay for darkening background */}
      <div className="absolute inset-0 bg-black opacity-50 z-10"></div>

      {/* Title and Subtitle */}
      <div className="relative z-20 text-center text-white">
        <h1 className="text-3xl md:text-4xl font-bold">{title}</h1>
        {subtitle && (
          <p className="mt-2 text-sm md:text-lg text-red-400 font-semibold">{subtitle}</p>
        )}
      </div>
    </div>
  )
}
