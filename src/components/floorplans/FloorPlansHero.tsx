import Image from 'next/image'
import React from 'react'

const FloorPlansHero = () => {
  return (
     <section className="relative w-full">
          <div className="absolute inset-0 -z-10 overflow-hidden">
            <div className="absolute inset-0 bg-black/30 z-10" />
            <Image
              src="/images/floorplanshero.jpg"
              alt="Floor Plans Hero"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="relative z-20 container mx-auto flex items-center justify-center px-4 py-12 md:py-20 min-h-[60vh]">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white drop-shadow-2xl">
                Architectural
                <br />
                Floor Plans
              </h1>
              <p className="mt-6 text-lg md:text-xl font-medium text-[#f7f4ef]/90 max-w-2xl mx-auto drop-shadow-md">
                Carefully crafted designs ready to be built or customized for your dream home.
              </p>
            </div>
          </div>
        </section>
  )
}

export default FloorPlansHero