"use client";
import React from "react";
import { useProject } from "@/lib/hooks/useProject";
import PastProjectCard from "@/components/shared/PastProjectCard";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { MoveRight } from "lucide-react";
import Link from "next/link";

const PastProject = () => {
  const { data: projects = [], isLoading } = useProject();

  // Get only first 4 projects
  const displayProjects = projects.slice(0, 4);

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
          <Link href="/pastprojects">
            <Button
              variant="ghost"
              className="gap-2  flex items-centertext-base font-semibold text-[#6a8f3e] hover:bg-transparent hover:text-[#5b7c35]"
            >
              See all
              {/* <span aria-hidden>→</span> */}
              <MoveRight />
            </Button>
          </Link>
        </div>

        {isLoading ? (
          <div className="grid gap-6 md:grid-cols-2">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="rounded-2xl border border-[#e3ddd4] bg-white overflow-hidden"
              >
                <Skeleton className="h-64 w-full rounded-none" />
                <div className="p-6 space-y-3">
                  <Skeleton className="h-6 w-3/4" />
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-2/3" />
                </div>
              </div>
            ))}
          </div>
        ) : displayProjects.length > 0 ? (
          <div className="grid gap-6 md:grid-cols-2">
            {displayProjects.map((project) => (
              <PastProjectCard
                key={project._id}
                projectId={project._id}
                image={project.thumbnailImage}
                title={project.title}
                description={project.description}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-lg text-[#6f6a64]">No projects available.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default PastProject;
