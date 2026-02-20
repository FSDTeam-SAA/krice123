"use client";
import React from "react";
import FloorPlanCard from "@/components/shared/FloorPlanCard";
import { useService } from "@/lib/hooks/useService";
import { Skeleton } from "@/components/ui/skeleton";

const AllFloorPlans = () => {
  const { data: services = [], isLoading, isError } = useService();

  if (isLoading) {
    return (
      <section className="bg-[#f7f4ef] py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#2a2a2a] mb-4">
              Available Floor Plans
            </h2>
            <p className="text-[#6f6a64] max-w-2xl mx-auto">
              Browse our collection of carefully designed floor plans. Each can
              be built as-is or customized to meet your specific needs.
            </p>
          </div>

          <div className="space-y-8">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="bg-white rounded-2xl border border-[#e3ddd4] overflow-hidden"
              >
                <div className="grid md:grid-cols-2 gap-6 p-6">
                  <Skeleton className="h-64 w-full rounded-lg" />
                  <div className="space-y-4">
                    <Skeleton className="h-8 w-3/4" />
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-2/3" />
                    <div className="flex gap-4 pt-4">
                      <Skeleton className="h-10 w-24" />
                      <Skeleton className="h-10 w-24" />
                      <Skeleton className="h-10 w-24" />
                    </div>
                  </div>
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
              Failed to load floor plans. Please try again later.
            </p>
          </div>
        </div>
      </section>
    );
  }

  if (services.length === 0) {
    return (
      <section className="bg-[#f7f4ef] py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <p className="text-lg text-[#6f6a64]">No floor plans available.</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-[#f7f4ef] py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#2a2a2a] mb-4">
            Available Floor Plans
          </h2>
          <p className="text-[#6f6a64] max-w-2xl mx-auto">
            Browse our collection of carefully designed floor plans. Each can be
            built as-is or customized to meet your specific needs.
          </p>
        </div>

        <div className="space-y-8">
          {services.map((service, index) => (
            <FloorPlanCard
              key={service._id}
              title={service.title}
              description={service.description}
              image={service.image}
              bedrooms={0}
              bathrooms={0}
              sqft={0}
              features={[]}
              order={index % 2 === 0 ? "normal" : "reverse"}
              order2={index % 2 === 0 ? "md:order-1" : "md:order-2"}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AllFloorPlans;
