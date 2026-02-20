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
    <div className="min-h-screen grid grid-cols-1 md:grid-cols-2 gap-10">
      
      {/* Left Side Image */}
      <div className="relative w-full  ">
        <Link href="/">
          <Image
            src="/images/login.jpg"
            alt="Authentication Background"
            width={760}
            height={1000}
            priority
            className="w-full  h-screen object-cover"
          />
        </Link>
      </div>

      {/* Right Side Content */}
      <div className="flex items-center justify-start p-6 bg-white">
        {children}
      </div>

      <Toaster richColors position="top-right" />
    </div>
  );
}
