import Image from "next/image";
import React from "react";

import { Button } from "@/components/ui/button";
import Navbar from "@/components/shared/Navbar";
import { FileWarning, Flower } from "lucide-react";

const Banner = () => {
  return (
    <section className="bg-[#f7f4ef] pb-12">
      <div className="container mx-auto grid items-center gap-10 px-4 pb-6 pt-6 lg:grid-cols-2 lg:gap-16">
        <div className="space-y-6">
          <span className="inline-flex items-center gap-2 rounded-full border border-[#d9d2c9] bg-[#E1E4DC] px-4 py-2 text-xs font-medium text-[#4c4c4c] ">
            {/* <span className="h-2 w-2 rounded-full bg-[#6a8f3e]" /> */}
                <Flower className="text-white bg-secondary rounded-md"/>
            Find your best constriction Company.
          </span>

          <div className="space-y-4">
            <h1 className="text-4xl font-bold uppercase tracking-tight text-[#1a1a1a] sm:text-5xl md:text-6xl md:leading-[1.15]">
              Premium
              <br />
              <span className="flex gap-3 items-center">
                House.
                <span>
                  <span className="flex items-center gap-2">
                    <span className="flex -space-x-2">
                      {[
                        "/images/banner2.png",
                        "/images/banner3.png",
                        "/images/banner4.png",
                      ].map((src) => (
                        <Image
                          key={src}
                          src={src}
                          alt="team"
                          width={32}
                          height={32}
                          className="h-8 w-8 rounded-full border-2 border-[#f7f4ef] object-cover"
                        />
                      ))}
                    </span>
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#e1ddd6] text-xs font-semibold text-[#2a2a2a]">
                      +
                    </span>
                  </span>
                </span>
              </span>
              {/*employ role  */}
              {/* <br /> */}
              Construction.
            </h1>

            <p className="max-w-xl text-base leading-6 text-[#6f6a64] font-normal">
              Designing elegant homes with precision. Built with quality, care,
              and expertise. Where your dream home becomes reality. From
              planning to perfect execution, we craft premium lifestyle.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <Button className="rounded-md text-base font-bold bg-[#628B3D] px-5 text-white hover:bg-[#5b7c35]">
              Get a Free Quote
            </Button>
            <Button
              variant="secondary"
              className="rounded-md border text-base font-bold border-[#1d1d1d] bg-black px-6  text-white hover:bg-[#1d1d1d] hover:text-white"
            >
              Contact Us
            </Button>
          </div>
        </div>
        {/* right side banner images */}
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="grid gap-4">
            <div className="overflow-hidden rounded-tr-6xl  rounded-tr-[150px] ">
              <Image
                src="/images/banner1.png"
                alt="Living room"
                width={420}
                height={420}
                className="h-full w-full object-cover  "
              />
            </div>
            <div className="overflow-hidden rounded-t-[140px] ">
              <Image
                src="/images/banner3.png"
                alt="Living area"
                width={420}
                height={420}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
          <div className="grid gap-4">
            <div className="overflow-hidden rounded-b-[150px] ">
              <Image
                src="/images/banner2.png"
                alt="Bathroom"
                width={420}
                height={420}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="overflow-hidden rounded-bl-[150px] ">
              <Image
                src="/images/banner4.png"
                alt="Exterior"
                width={420}
                height={420}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
