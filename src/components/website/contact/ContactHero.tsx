import Image from 'next/image'
import React from 'react'

const ContactHero = () => {
  return (
    <section className="relative w-full">
          <div className="absolute inset-0 -z-10 overflow-hidden">
            <Image
              src="/images/contac.jpg"
              alt="Past Project Hero"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="container mx-auto flex items-center justify-center px-4 py-12 md:py-20 min-h-[60vh]">
            <div className="text-center">
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white drop-shadow-lg">
                Contact KLONDIKE
                <br />
                {/* Projects */}
              </h1>
              {/* <p className="mt-4 text-lg font-medium text-[#E2B571]">
                Exploring our recent construction achievements
              </p> */}
            </div>
          </div>
        </section>
  )
}

export default ContactHero