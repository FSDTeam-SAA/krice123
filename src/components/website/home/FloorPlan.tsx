"use client";
import Image from "next/image";
import React from "react";
import { useService } from "@/lib/hooks/useService";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { MoveRight } from "lucide-react";
import Link from "next/link";

const FloorPlan = () => {
  const { data: services = [], isLoading } = useService();

  // Get only the first service
  const firstService = services[0];

  return (
    <section id="floor-plans" className="bg-[#f7f4ef] py-12 md:py-16">
      <div className="container mx-auto space-y-8 px-4">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-semibold uppercase text-[#2a2a2a] md:text-3xl">
            Available floor plans/services
          </h2>
          <Link href="/floorplans">
            <Button
              variant="ghost"
              className="gap-2 text-base font-semibold text-[#6a8f3e] hover:bg-transparent hover:text-[#5b7c35]"
            >
              See all
              {/* <span aria-hidden>→</span> */}
              <MoveRight />
            </Button>
          </Link>
        </div>

        <div className="rounded-3xl bg-white p-6 md:p-10">
          {isLoading ? (
            <div className="grid gap-8 md:grid-cols-2 md:items-center">
              <div className="space-y-5">
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-3/4" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-5/6" />
                <Skeleton className="h-10 w-40 mt-4" />
              </div>
              <div className="flex justify-center md:justify-end">
                <Skeleton className="h-[450px] w-full max-w-[450px] rounded-2xl" />
              </div>
            </div>
          ) : firstService ? (
            <div className="grid gap-8 md:grid-cols-2 md:items-center">
              <div className="space-y-5">
                <h3 className="text-2xl font-bold text-[#2a2a2a]">
                  {firstService.title}
                </h3>
                <p className="text-sm leading-6 p-5 w-full text-[#7a746e]">
                  {firstService.description}
                </p>
                <Button className="rounded-md bg-[#6a8f3e] px-6 text-white hover:bg-[#5b7c35]">
                  Get a Free Quote
                </Button>
              </div>
              <div className="flex justify-center md:justify-end">
                <Image
                  src={firstService.image}
                  alt={firstService.title}
                  width={450}
                  height={520}
                  className="h-auto w-full max-w-[450px] aspect-square rounded-2xl object-cover"
                />
              </div>
            </div>
          ) : (
            <div className="grid gap-8 md:grid-cols-2 md:items-center">
              <div className="space-y-5">
                <p className="text-sm leading-6 p-5 w-full text-[#7a746e]">
                  We offer a streamlined, flexible building process designed to
                  meet homeowners wherever they are in their planning journey.
                  Our company provides several tried-and-true floor plans that
                  have been carefully designed and built successfully, giving
                  you confidence in both layout and functionality. If you
                  already have a plan you love, we can build from
                  homeowner-supplied plans, make thoughtful modifications to
                  existing designs, or work with you to create a fully custom
                  home from the ground up. Whether you want a proven layout, a
                  tailored adjustment, or a completely unique design, we have
                  the experience and team in place to turn your vision into a
                  well-built, lasting home.
                </p>
                <Button className="rounded-md bg-[#6a8f3e] px-6 text-white hover:bg-[#5b7c35]">
                  Get a Free Quote
                </Button>
              </div>
              <div className="flex justify-center md:justify-end">
                <Image
                  src="/images/florearcitecture.jpg"
                  alt="Floor plan"
                  width={450}
                  height={520}
                  className="h-auto w-full max-w-[450px] aspect-square rounded-2xl object-cover"
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default FloorPlan;
