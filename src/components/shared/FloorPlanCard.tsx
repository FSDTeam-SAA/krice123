import React from "react";
import Image from "next/image";
import { Button } from "../ui/button";
import { Bed, Bath, SquareIcon } from "lucide-react";

type FloorPlanCardProps = {
  title: string;
  description: string;
  image: string;
  bedrooms: number;
  bathrooms: number;
  sqft: number;
  features: string[];
  order: string;
  order2: string;
};

const FloorPlanCard = ({
  title,
  description,
  image,
  bedrooms,
  bathrooms,
  sqft,
  features,
  order ,
  order2 ,
}: FloorPlanCardProps) => {
  return (
    <div className="group rounded-3xl bg-white p-6 md:p-10 border border-[#e3ddd4] shadow-sm hover:shadow-xl hover:border-[#6a8f3e]/30 transition-all duration-300">
      <div className="grid gap-8 md:grid-cols-2 lg:items-center justify-between">
        <div className={`space-y-6 ${order}`}>
          <div>
            <h3 className="text-3xl font-bold text-[#2a2a2a] mb-3 group-hover:text-[#6a8f3e] transition-colors duration-300">
              {title}
            </h3>
            <div className="flex flex-wrap items-center gap-6 text-sm font-medium text-[#6f6a64] mb-6">
              <span className="flex items-center gap-2 bg-[#f7f4ef] px-3 py-1.5 rounded-full border border-[#e3ddd4]">
                <Bed size={18} className="text-[#6a8f3e]" />
                {bedrooms} Bed
              </span>
              <span className="flex items-center gap-2 bg-[#f7f4ef] px-3 py-1.5 rounded-full border border-[#e3ddd4]">
                <Bath size={18} className="text-[#6a8f3e]" />
                {bathrooms} Bath
              </span>
              <span className="flex items-center gap-2 bg-[#f7f4ef] px-3 py-1.5 rounded-full border border-[#e3ddd4]">
                <SquareIcon size={18} className="text-[#6a8f3e]" />
                {sqft.toLocaleString()} sqft
              </span>
            </div>
          </div>

          <p className="text-base leading-relaxed text-[#7a746e] max-w-xl">
            {description}
          </p>

          <div className="pt-2">
            <p className="text-sm font-bold text-[#2a2a2a] uppercase tracking-wider mb-4 flex items-center gap-2">
              <span className="h-px w-8 bg-[#6a8f3e] rounded-full" />
              Key Features
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {features.slice(0, 6).map((feature, index) => (
                <li
                  key={index}
                  className="flex items-center gap-3 text-sm text-[#6f6a64] font-medium"
                >
                  <div className="h-2 w-2 bg-[#6a8f3e] rounded-full flex-shrink-0" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          <div className="pt-4">
            <Button className="rounded-full bg-[#6a8f3e] px-8 py-6 text-lg text-white hover:bg-[#5b7c35] font-bold shadow-lg shadow-[#6a8f3e]/20 transition-all hover:scale-105 active:scale-95">
              Get a Free Quote
            </Button>
          </div>
        </div>

        <div className={`relative flex justify-center ${order2 === 'md:order-1' ? 'md:justify-start' : 'md:justify-end'} ${order2}`}>
          <div className="relative overflow-hidden rounded-2xl w-full max-w-[450px] aspect-[4/5] shadow-2xl">
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FloorPlanCard;
