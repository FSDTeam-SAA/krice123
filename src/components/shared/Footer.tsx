"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";

import { Button } from "@/components/ui/button";
import { LocateIcon, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#f7f4ef] pb-10 pt-6">
      <div className="container mx-auto space-y-8 px-4">
        <div className="grid gap-8 border-t border-[#dcd5cc] pt-8 md:grid-cols-[1.1fr_1fr_1fr]">
          <div className="space-y-4">
            <Link
              href="/"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="cursor-pointer hover:opacity-80 transition-opacity inline-block"
            >
              <Image
                src="/images/logo.svg"
                alt="Klondike Construction"
                width={270}
                height={72}
              />
            </Link>
            <p className="text-lg text-[#7a746e] mt-10">
              Email: info@klondikeconstruction
            </p>
            <Button
              asChild
              className="rounded-md bg-[#6a8f3e] px-5 text-base font-bold text-white hover:bg-[#5b7c35]"
            >
              <Link href="/form">Get a Free Quote</Link>
            </Button>
          </div>

          <div>
            <h4 className="text-xl font-semibold text-[#2a2a2a]">
              Useful Links
            </h4>
            <ul className="mt-3 space-y-2  font-medium text-[#6f6a64]">
              <li>
                <Link
                  href="/"
                  className="hover:text-[#6a8f3e] transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/pastprojects"
                  className="hover:text-[#6a8f3e] transition-colors"
                >
                  Past projects
                </Link>
              </li>
              <li>
                <Link
                  href="/floorplans"
                  className="hover:text-[#6a8f3e] transition-colors"
                >
                  Floor plans/services
                </Link>
              </li>
              <li>
                <Link
                  href="/team"
                  className="hover:text-[#6a8f3e] transition-colors"
                >
                  Our Team
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-[#6a8f3e] transition-colors"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-semibold text-[#2a2a2a]">
              Service Area
            </h4>
            <div className="mt-3  text-[#6f6a64] flex items-start gap-3">
              <MapPin className=" text-red-600" />
              <div>
                <p className="font-semibold text-[#2a2a2a]">
                  Northeast Wyoming, Buffalo, Sheridan and Gillette
                </p>
                {/* <p>Buffalo, Sheridan and Gillette Wyoming</p> */}
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-[#dcd5cc] pt-4 text-center text-base text-[#595E53]">
          © 2026 KLONDIKE. All Rights Reserved
        </div>
      </div>
    </footer>
  );
};

export default Footer;
