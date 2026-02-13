import React from "react";

import PastProjectCard from "@/components/shared/PastProjectCard";
import { Button } from "@/components/ui/button";
import { MoveRight } from "lucide-react";

const pastProjects = [
  {
    image: "/images/pastproject.png",
    title: "Skyline Residency Premium Living Spaces",
    description:
      "Interior finishes are what makes a house feel like a home. At Klondike Construction we put thoughtful details like recessed lights, vaulted ceilings, and a cohesive material selections to create...",
  },
  {
    image: "/images/pastproject2.png",
    title: "Skyline Residency Premium Living Spaces",
    description:
      "Interior finishes are what makes a house feel like a home. At Klondike Construction we put thoughtful details like recessed lights, vaulted ceilings, and a cohesive material selections to create...",
  },
  {
    image: "/images/pastproject3.png",
    title: "Elite Brick Project Built With Excellence",
    description:
      "This half bath makes a bold statement with vertical shiplap, warm wood tones, and modern fixture selections. Clean lines, a sleek vanity, and contemporary lighting create a refined space...",
  },
  {
    image: "/images/pastproject4.png",
    title: "Royal Crest Homes Designed For Comfort",
    description:
      "This exterior highlights Klondike Construction's focus on clean lines, durability and thoughtful outdoor living. Low-maintenance siding, a well proportioned roofline, and a covered patio...",
  },
];

const PastProject = () => {
  return (
    <section id="past-projects" className="bg-[#f0ebe4] py-12 md:py-16">
      <div className="container mx-auto space-y-8 px-4">
        <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
          <div>
            {/* <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#7a746e]">
              Our past completed projects
            </p> */}
            <h2 className="mt-2 text-2xl font-semibold uppercase leading-tight text-[#2a2a2a] md:text-3xl">
              Our Past Completed projects <br />
              Extensive remodel
            </h2>
          </div>
          <Button
            variant="ghost"
            className="gap-2  flex items-centertext-base font-semibold text-[#6a8f3e] hover:bg-transparent hover:text-[#5b7c35]"
          >
            See all
            {/* <span aria-hidden>→</span> */}
            <MoveRight />
          </Button>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {pastProjects.map((project) => (
            <PastProjectCard
              key={project.title + project.image}
              image={project.image}
              title={project.title}
              description={project.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PastProject;
