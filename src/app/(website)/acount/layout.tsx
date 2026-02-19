"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const sidebarLinks = [
  { label: "Personal Information", href: "/acount" },
  { label: "Change Password", href: "/acount/change-password" },
];

export default function AccountLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === "/acount") {
      return pathname === "/acount";
    }
    return pathname === href;
  };

  return (
    <div className="flex h-screen">
      {/* Left side - Image */}
      <div className="hidden w-1/2 overflow-hidden lg:block">
        <Image
          src="/images/contact.jpg"
          alt="Account background"
          width={720}
          height={1080}
          className="h-full w-full object-cover"
        />
      </div>

      {/* Right side - Content */}
      <div className="flex w-full flex-col lg:w-1/2">
        {/* Sidebar - Top section */}
        <div className="border-b border-[#e6e1d8] bg-white px-6 py-4 md:px-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-semibold text-[#2a2a2a]">Account</h1>
            </div>
            <button className="text-sm font-semibold text-[#c74b4b] transition-colors hover:text-[#a63b3b]">
              Log out
            </button>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="border-b border-[#e6e1d8] bg-white px-6 md:px-8">
          <nav className="flex gap-8">
            {sidebarLinks.map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`border-b-2 px-1 py-3 text-sm font-semibold transition-colors ${
                    active
                      ? "border-[#6a8f3e] text-[#2a2a2a]"
                      : "border-transparent text-[#7a746e] hover:text-[#2a2a2a]"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Main Content */}
        <div className="flex-1 overflow-y-auto bg-[#f7f4ef] px-6 py-8 md:px-8">
          {children}
        </div>
      </div>
    </div>
  );
}
