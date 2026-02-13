import React from "react";
import FloorPlanCard from "@/components/shared/FloorPlanCard";
import { floorPlansData } from "@/lib/floorplanData";

const AllFloorPlans = () => {
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
          {floorPlansData.map((plan) => (
            <FloorPlanCard
              key={plan.id}
              title={plan.title}
              description={plan.description}
              image={plan.image}
              bedrooms={plan.bedrooms}
              bathrooms={plan.bathrooms}
              sqft={plan.sqft}
              features={plan.features}
                order={plan.order}
                order2={plan.order2}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AllFloorPlans;
