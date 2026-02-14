import React from "react";
import ProjectLeaderCard from "@/components/shared/ProjectLeaderCard";

const leaders = [
  {
    image: "/images/team/team1.png",
    name: "Keefe Rice",
    role: "Owner & Project Manager",
    description:
      "Direct oversight from start to finish. Budgeting, scheduling, coordination, and decisions stay clear and accountable.",
  },
  {
    image: "/images/team/team2.jpg",
    name: "Rick O’Neill",
    role: "Foreman",
    description:
      "On site daily. Manages crews, quality, and safety to keep projects moving efficiently.",
  },
  {
    image: "/images/team/team3.jpg",
    name: "Tyson McDougall",
    role: "Concrete & Rough Framing Foreman",
    description:
      "Over 20 years of experience. Responsible for foundations and structure.",
  },
  {
    image: "/images/team/team4.jpg",
    name: "Bev Taylor",
    role: "Office Manager",
    description:
      "Handles communication, paperwork, and keeps everything organized.",
  },
];

const ProjectLeader = () => {
  return (
    <section className="bg-[#f7f4ef] py-12 md:py-16">
      <div className="container mx-auto space-y-8 px-4">
        <div className="text-center">
          <h2 className="text-2xl font-semibold uppercase tracking-wide text-[#2a2a2a] md:text-3xl">
            Project Leaders
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {leaders.map((leader) => (
            <ProjectLeaderCard
              key={leader.name}
              image={leader.image}
              name={leader.name}
              role={leader.role}
              description={leader.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectLeader;
