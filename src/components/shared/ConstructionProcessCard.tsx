import { CheckCircle2 } from "lucide-react";
import React from "react";

type ConstructionProcessCardProps = {
  step: number;
  stepLabel: string;
  badge?: string;
  title: string;
  items: string[];
  position: "left" | "right";
  icon: React.ComponentType<{ className?: string }>;
};

const ConstructionProcessCard = ({
  step,
  stepLabel,
  badge,
  title,
  items,
  position,
  icon: Icon,
}: ConstructionProcessCardProps) => {
  return (
    <div className="relative">
      {/* Timeline connector */}
      <div
        className={`absolute top-4 ${
          position === "left"
            ? "-right-6 translate-x-1/2"
            : "-left-6 -translate-x-1/2"
        } hidden md:block`}
      >
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#6a8f3e] text-white font-bold shadow-lg">
          <Icon className="h-5 w-5" />
        </div>
      </div>

      {/* Card content */}
      <article className="rounded-2xl border border-[#e3ddd4] bg-white px-6 py-6 shadow-sm transition-shadow hover:shadow-md">
        {/* Header with step and badge */}
        <div className="mb-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#7a746e]">
              {stepLabel}
            </span>
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#6a8f3e] text-xs font-bold text-white md:hidden">
              {step}
            </span>
          </div>
          {badge && (
            <span className="rounded-full bg-[#f0ebe4] px-3 py-1 text-xs font-semibold text-[#6a8f3e] border border-[#e3ddd4]">
              {badge}
            </span>
          )}
        </div>

        {/* Title */}
        <h3 className="mb-4 text-lg font-semibold text-[#2a2a2a] md:text-xl">
          {title}
        </h3>

        {/* Items list */}
        <ul className="space-y-3">
          {items.map((item, index) => (
            <li
              key={index}
              className="flex items-start gap-3 text-sm text-[#6f6a64]"
            >
              <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#6a8f3e]" />
              <span className="leading-relaxed">{item}</span>
            </li>
          ))}
        </ul>
      </article>
    </div>
  );
};

export default ConstructionProcessCard;
