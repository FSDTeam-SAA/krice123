"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";

import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Past projects", href: "/pastprojects" },
  { label: "Floor plans/services", href: "/floorplans" },
  { label: "Our Team", href: "/team" },
  { label: "Contact Us", href: "/contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname === href;
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-[#f7f4ef] shadow-sm">
      <div className="container mx-auto flex items-center justify-between gap-6 px-4 py-4 md:py-5">
        <div className="flex items-center gap-3">
          <Image
            src="/images/logo.svg"
            alt="Klondike Construction"
            width={225}
            height={60}
            className="h-auto w-auto object-cover"
          />
        </div>

        <nav className="hidden items-center gap-8 text-lg text-[#595e53] lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className={`transition-colors duration-200 font-semibold hover:text-[#2f3628] ${
                isActive(link.href)
                  ? "text-primary border-b-2 border-[#6a8f3e] pb-1"
                  : "text-[#595e53]"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <Link
            href="/(website)/acount"
            className="text-base font-medium text-secondary hover:text-[#2f3628] transition-colors cursor-pointer"
          >
            Log in
          </Link>
          <Button className="rounded-full bg-[#6a8f3e] px-5 text-sm md:text-base text-white hover:bg-[#5b7c35] transition-colors">
            Get a Free Quote
          </Button>
        </div>

        <div className="flex items-center gap-3 lg:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="rounded-lg p-2 hover:bg-[#e8e2d9] transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          <Button className="rounded-full bg-[#6a8f3e] px-3 py-2 text-sm text-white hover:bg-[#5b7c35] transition-colors">
            Quote
          </Button>
        </div>
      </div>

      {isOpen && (
        <div className="border-t border-[#e3ddd4] bg-[#f7f4ef] px-4 py-4 lg:hidden">
          <nav className="space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className={`block px-3 py-2 rounded-lg transition-colors duration-200 font-semibold ${
                  isActive(link.href)
                    ? "bg-[#6a8f3e] text-white"
                    : "text-[#595e53] hover:bg-[#e8e2d9]"
                }`}
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="space-y-2 border-t border-[#e3ddd4] pt-3">
              <Link
                href="/(website)/acount"
                className="block w-full rounded-lg px-3 py-2 text-left text-secondary hover:bg-[#e8e2d9] transition-colors font-semibold"
              >
                Log in
              </Link>
              <Button className="w-full rounded-full bg-[#6a8f3e] text-white hover:bg-[#5b7c35] transition-colors">
                Get a Free Quote
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
