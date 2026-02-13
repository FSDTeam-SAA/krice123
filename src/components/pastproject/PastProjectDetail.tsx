"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import { pastProjectsData } from "@/lib/pastprojectData";
import { Button } from "@/components/ui/button";
import { ArrowRight, BanIcon } from "lucide-react";

interface PastProjectDetailProps {
  projectId: string;
}

const PastProjectDetail = ({ projectId }: PastProjectDetailProps) => {
  const router = useRouter();

  const project = pastProjectsData.find((p) => p.id === projectId);

  if (!project) {
    return (
      <div className="container mx-auto px-4 py-20 text-center">
        <h2 className="text-2xl font-bold text-[#2a2a2a] mb-4">
          Project not found
        </h2>
        <Button
          onClick={() => router.push("/pastprojects")}
          className="bg-[#6a8f3e] text-white hover:bg-[#5b7c35]"
        >
          Back to Projects
        </Button>
      </div>
    );
  }

  return (
    <div className="bg-[#f7f4ef]">


      <section className="container mx-auto px-4 py-12 md:py-16">
        <div className="bg-white rounded-2xl border border-[#e3ddd4] overflow-hidden">
          <div className="p-6 md:p-10">
            <div className="text-center mb-8">
              <div className="inline-block bg-[#C4CCBD] rounded-full px-4 py-2 mb-4 text-xs font-semibold text-[#6a8f3e]">
                <p className="flex items-center gap-2 ">
                  <BanIcon />
                  {/* <span className="h-2 w-2 bg-[#6a8f3e] rounded-full" /> */}
                  Minnesota • Major • Minory Group
                </p>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#2a2a2a] mb-2">
                {project.title}
              </h2>
              <p className="text-[#6f6a64]">Designed For Comfort</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 md:gap-8 mb-12 items-center">
              <div className="space-y-3">
                <p className="text-xs font-semibold text-[#6a8f3e] uppercase">
                  Past House
                </p>
                <div className="relative rounded-2xl overflow-hidden h-64 md:h-80 w-full">
                  <Image
                    src={project.beforeImage}
                    alt="Before"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              <div className="flex justify-center md:justify-end mb-4 md:mb-0">
                <div className="flex items-center gap-4">
                  <ArrowRight size={40} className="text-[#6a8f3e] rotate-0" />
                </div>
              </div>

              <div className="space-y-3 md:col-start-2 md:row-start-1 md:order-last">
                <p className="text-xs font-semibold text-[#6a8f3e] uppercase">
                  After Extensive Remodel
                </p>
                <div className="relative rounded-2xl overflow-hidden h-64 md:h-80 w-full">
                  <Image
                    src={project.afterImage}
                    alt="After"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-[#2a2a2a] mb-4">
                  Property Descriptions
                </h3>
                <p className="text-sm md:text-base leading-7 text-[#6f6a64] mb-6">
                  {project.description}
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <ul className="space-y-3">
                    {project.keyPoints.slice(0, 3).map((point, index) => (
                      <li
                        key={index}
                        className="flex items-start gap-3 text-sm text-[#6f6a64]"
                      >
                        <span className="h-1.5 w-1.5 bg-[#6a8f3e] rounded-full mt-2 flex-shrink-0" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <ul className="space-y-3">
                    {project.keyPoints.slice(3, 6).map((point, index) => (
                      <li
                        key={index}
                        className="flex items-start gap-3 text-sm text-[#6f6a64]"
                      >
                        <span className="h-1.5 w-1.5 bg-[#6a8f3e] rounded-full mt-2 flex-shrink-0" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-6 border-t border-[#e3ddd4]">
                <Button className="bg-[#6a8f3e] text-white hover:bg-[#5b7c35] font-semibold px-6">
                  Get a Free Quote
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PastProjectDetail;
