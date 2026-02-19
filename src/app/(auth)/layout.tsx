import Image from "next/image";
import React from "react";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 md:gap-16 relative">
      {/* left side image  */}
      <div>
        <Image
          src={"/images/login.jpg"}
          width={720}
          height={1080}
          alt="Auth background"
          className="w-full aspect-square object-cover"
        />
      </div>
      {/* right side content  */}
      <div className="w-1/2 h-full flex items-center justify-center">{children}</div>
    </div>
  );
}
