import React from "react";
import { Button } from "@/components/ui/button";

const CTA = () => {
  return (
    <section className="bg-[#f7f4ef] py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="rounded-3xl bg-linear-to-br from-[#f4c430] to-[#f0b90b] px-8 py-12 text-center shadow-xl md:px-16 md:py-16">
          <h2 className="text-2xl font-bold text-[#2a2a2a] md:text-3xl lg:text-4xl">
            Ready to start your project?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-[#2a2a2a] md:text-lg">
            Take the first step today by filling out our prequalification form.
            It only takes 5 minutes.
          </p>
          <div className="mt-8">
            <Button className="rounded-md bg-[#6a8f3e] px-8 py-6 text-base font-bold text-white shadow-lg transition-all hover:scale-105 hover:bg-[#5b7c35] md:text-lg">
              Get a Free Quote
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
