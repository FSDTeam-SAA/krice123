"use client";
import React from "react";
import ProjectLeaderCard from "@/components/shared/ProjectLeaderCard";
import { useTeam } from "@/lib/hooks/useTeam";
import { Skeleton } from "@/components/ui/skeleton";

const ProjectLeader = () => {
  const { data: teamMembers = [], isLoading, isError } = useTeam();

  if (isLoading) {
    return (
      <section className="bg-[#f7f4ef] py-12 md:py-16">
        <div className="container mx-auto space-y-8 px-4">
          <div className="text-center">
            <h2 className="text-2xl font-semibold uppercase tracking-wide text-[#2a2a2a] md:text-3xl">
              Project Leaders
            </h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="bg-white rounded-2xl overflow-hidden shadow-sm"
              >
                <Skeleton className="h-64 w-full rounded-none" />
                <div className="p-4 space-y-2">
                  <Skeleton className="h-6 w-3/4" />
                  <Skeleton className="h-4 w-1/2" />
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-full" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (isError) {
    return (
      <section className="bg-[#f7f4ef] py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <p className="text-lg text-red-600">
              Failed to load team members. Please try again later.
            </p>
          </div>
        </div>
      </section>
    );
  }

  if (teamMembers.length === 0) {
    return (
      <section className="bg-[#f7f4ef] py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <p className="text-lg text-[#6f6a64]">No team members available.</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-[#f7f4ef] py-12 md:py-16">
      <div className="container mx-auto space-y-8 px-4">
        <div className="text-center">
          <h2 className="text-2xl font-semibold uppercase tracking-wide text-[#2a2a2a] md:text-3xl">
            Project Leaders
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {teamMembers.map((member) => (
            <ProjectLeaderCard
              key={member._id}
              image={member.image}
              name={member.name}
              role={member.role}
              description={member.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectLeader;
