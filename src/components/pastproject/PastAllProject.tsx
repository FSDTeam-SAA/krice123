"use client";
import React, { useState } from "react";
import PastProjectCard from "@/components/shared/PastProjectCard";
import { useProject } from "@/lib/hooks/useProject";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

const ITEMS_PER_PAGE = 8;

const PastAllProject = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const { data: projects = [], isLoading, isError } = useProject();

  const totalPages = Math.ceil(projects.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentProjects = projects.slice(startIndex, endIndex);

  const handlePreviousPage = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  };

  const handleNextPage = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  };

  const handlePageClick = (page: number) => {
    setCurrentPage(page);
  };

  if (isLoading) {
    return (
      <section className="container mx-auto px-4 py-12 md:py-16">
        <div className="text-center">
          <p className="text-lg text-[#6f6a64]">Loading projects...</p>
        </div>
      </section>
    );
  }

  if (isError) {
    return (
      <section className="container mx-auto px-4 py-12 md:py-16">
        <div className="text-center">
          <p className="text-lg text-red-600">
            Failed to load projects. Please try again later.
          </p>
        </div>
      </section>
    );
  }

  if (projects.length === 0) {
    return (
      <section className="container mx-auto px-4 py-12 md:py-16">
        <div className="text-center">
          <p className="text-lg text-[#6f6a64]">No projects available.</p>
        </div>
      </section>
    );
  }

  return (
    <section className="container mx-auto px-4 py-12 md:py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-[#2a2a2a] mb-4">
          All Our Projects
        </h2>
        <p className="text-[#6f6a64] max-w-2xl mx-auto">
          Explore our extensive portfolio of completed construction and
          renovation projects
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 mb-10">
        {currentProjects.map((project) => (
          <PastProjectCard
            key={project._id}
            projectId={project._id}
            image={project.thumbnailImage}
            title={project.title}
            description={project.description}
          />
        ))}
      </div>

      {totalPages > 1 && (
        <div className="flex items-center justify-center gap-2 flex-wrap">
          <Button
            onClick={handlePreviousPage}
            disabled={currentPage === 1}
            variant="outline"
            size="sm"
            className="gap-2"
          >
            <ChevronLeft size={18} />
            Previous
          </Button>

          <div className="flex gap-1">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <Button
                key={page}
                onClick={() => handlePageClick(page)}
                variant={currentPage === page ? "default" : "outline"}
                size="sm"
                className={`min-w-[40px] ${
                  currentPage === page
                    ? "bg-[#6a8f3e] text-white hover:bg-[#5b7c35]"
                    : "hover:bg-[#e8e2d9]"
                }`}
              >
                {page}
              </Button>
            ))}
          </div>

          <Button
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
            variant="outline"
            size="sm"
            className="gap-2"
          >
            Next
            <ChevronRight size={18} />
          </Button>
        </div>
      )}

      <div className="text-center mt-6 text-sm text-[#6f6a64]">
        Showing {startIndex + 1}-{Math.min(endIndex, projects.length)} of{" "}
        {projects.length} projects
      </div>
    </section>
  );
};

export default PastAllProject;
