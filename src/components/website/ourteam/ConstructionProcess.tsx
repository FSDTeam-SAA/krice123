import React from "react";
import ConstructionProcessCard from "@/components/shared/ConstructionProcessCard";
import { Book, BookOpen, ClipboardList, Key, List, NotebookTabs, PhoneCall, Shovel } from "lucide-react";

const processSteps = [
  {
    step: 1,
    icon: ClipboardList,
    stepLabel: "Step 1",
    badge: "Included",
    title: "Prequalification Team",
    items: [
      "Complete our quick prequalification form via phone or online",
      "Helps us understand your project goals, budget, design and timeline",
      "Ensures we are the right fit before moving forward",
    ],
    position: "left" as const,
  },
  {
    step: 2,
    icon: PhoneCall,
    stepLabel: "Step 2",
    title: "Initial Phone Call",
    items: [
      "Get to know you, your needs, and site specifics—keep it casual and clear",
      "Answer your initial questions about our process",
      "Schedule an on-site visit if aligned",
    ],
    position: "right" as const,
  },
  {
    step: 3,
    icon: BookOpen,
    stepLabel: "Step 3",
    badge: "On Location",
    title: "Site Visit",
    items: [
      "Review plans in depth at the actual site, ask questions",
      "Understand material and project flexibility",
      "Identify potential challenges or concerns early on",
    ],
    position: "left" as const,
  },
  {
    step: 4,
    icon: Book,
    stepLabel: "Step 4",
    title: "Detailed Quote & Action Plan",
    items: [
      "Comprehensive line-item quote breakdown with clear labor and materials breakdown",
      "Detailed timeline with scheduled tasks and team roles",
      "Flexible agreement with options priced at $0 (Zero) For transparency",
    ],
    position: "right" as const,
  },
  {
    step: 5,  
    icon: Shovel,
    stepLabel: "Step 5",
    title: "Sign Action Plan & Break Ground",
    items: [
      "Provide the construction schedule with concrete start date",
      "Sign agreements and submit necessary permits/requirements",
      "Mobilize the team and begin construction on site",
    ],
    position: "left" as const,
  },
  {
    step: 6,
    icon: Book,
    stepLabel: "Step 6",
    badge: "All Inclusive",
    title: "Weekly Project Update Meetings",
    items: [
      "Review progress and discuss upcoming milestones timelines",
      "Discuss any changes or design updates",
      "Make sure no miscommunication throughout the build",
    ],
    position: "right" as const,
  },
  {
    step: 7,
    icon: NotebookTabs ,
    stepLabel: "Step 7",
    title: "Final Punch List & Quality Review",
    items: [
      "Rigorous 60+ point quality checklist walkthrough",
      "Homeowner and project manager walk the home together",
      "All items documented and completed",
    ],
    position: "left" as const,
  },
  {
    step: 8,
    icon: Key ,
    stepLabel: "Step 8",
    title: "Move In & Enjoy Your Home",
    items: [
      "Final walkthrough completed",
      "All keys, garage codes, and documentation handed over",
      "We're on call anytime your new home—we've built this relationship to last",
    ],
    position: "right" as const,
  },
];

const ConstructionProcess = () => {
  return (
    <section className="bg-[#f7f4ef] py-12 md:py-16 lg:py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-12 text-center">
          <h2 className="text-2xl font-semibold uppercase tracking-wide text-[#2a2a2a] md:text-3xl">
            Our Construction Process
          </h2>
          <p className="mt-3 text-sm text-[#7a746e] md:text-base">
            We have a straightforward proven process that gets you on the right
            track, adds value, and cuts confusion and surprises
          </p>
        </div>

        {/* Timeline layout */}
        <div className="relative mx-auto max-w-5xl">
          {/* Vertical line for desktop */}
          <div className="absolute left-1/2 top-0 hidden h-full w-0.5 -translate-x-1/2 bg-[#e3ddd4] md:block" />

          <div className="space-y-12 md:space-y-16">
            {processSteps.map((process) => (
              <div
                key={process.step}
                className={`md:grid md:grid-cols-2 md:gap-12 ${
                  process.position === "right" ? "md:grid-flow-dense" : ""
                }`}
              >
                {/* Empty column for alternating layout */}
                {process.position === "right" && (
                  <div className="hidden md:block" />
                )}

                {/* Card */}
                <div
                  className={
                    process.position === "right" ? "md:col-start-2" : ""
                  }
                >
                  <ConstructionProcessCard
                    step={process.step}
                    stepLabel={process.stepLabel}
                    badge={process.badge}
                    title={process.title}
                    items={process.items}
                    position={process.position}
                    icon={process.icon} 
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConstructionProcess;
