import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Shield } from "lucide-react";

const ProjectIncluded = () => {
  return (
    <section className="bg-white py-12 md:py-16 lg:py-20">
      <div className="container mx-auto px-4">
        <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
          {/* Left Side - Images */}
          <div className="relative">
            <div className="relative grid grid-cols-2 gap-4">
              {/* Larger image on left */}
              <div
                className="relative aspect-square overflow-hidden rounded-2xl shadow-xl w-full max-w-150 md:max-w-175 lg:max-w-200"
                style={{
                  clipPath:
                    "polygon(0% 0%, 60% 0, 60% 30%, 100% 30%, 99% 100%, 45% 100%, 45% 69%, 0 69%)",
                }}
              >
                <Image
                  src="/images/contactinclude.jpg"
                  alt="House at sunset"
                  width={800}
                  height={800}
                  className="object-cover w-full"
                />
              </div>
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold text-[#2a2a2a] md:text-3xl lg:text-4xl">
                What&apos;s Included in Every Project
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-[#7a746e] md:text-base">
                text ever since the 1500s, when an unknown printer took a
                gallery of type and scrambled it to make a type specimen book.
              </p>
            </div>

            {/* Location Badge */}
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#e8f5e9]">
                <Shield className="h-4 w-4 text-[#6a8f3e]" />
              </div>
              <span className="text-sm font-semibold text-[#2a2a2a]">
                Minnesota + Major US Metro Cities
              </span>
            </div>

            {/* CTA Button */}
            <div className="pt-2">
              <Button className="rounded-md bg-[#6a8f3e] px-8 py-6 text-base font-semibold text-white shadow-lg transition-all hover:scale-105 hover:bg-[#5b7c35]">
                Get a Free Quote
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectIncluded;
