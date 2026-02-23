import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Toaster } from "sonner";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen md:h-screen md:overflow-hidden grid grid-cols-1 md:grid-cols-2 relative lg:gap-10">
      {/* Background Image for Mobile and Left Side for Desktop */}
      <div className="fixed inset-0 z-0 md:relative md:w-full md:h-screen md:overflow-hidden">
        <Image
          src="/images/login.jpg"
          alt="Authentication Background"
          fill
          priority
          className="object-cover"
        />
        {/* Mobile Overlay */}
        <div className="absolute inset-0 bg-black/40 md:hidden z-10" />
      </div>

      {/* Content Side */}
      <div className="relative z-20 flex items-center justify-center md:justify-start px-4 py-12 md:px-10 md:py-0 md:bg-white overflow-y-auto md:h-screen">
        <div className="w-full max-w-md mx-auto md:mx-0">
          {children}
        </div>
      </div>

      <Toaster richColors position="top-right" />
    </div>
  );
}
