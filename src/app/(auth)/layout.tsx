import Image from "next/image";
import React from "react";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 relative min-h-screen">
      {/* left side image  */}
      <div className="hidden md:block">
        <Image
          src={"/images/login.jpg"}
          width={720}
          height={1080}
          alt="Auth background"
          className="w-full h-full object-cover"
        />
      </div>
      {/* right side content  */}
      <div className="flex items-center justify-center p-4">{children}</div>
    </div>
  );
}
