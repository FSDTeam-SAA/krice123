"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { signOut, useSession } from "next-auth/react";
import { User, Lock, LogOut } from "lucide-react";

const sidebarLinks = [
  { label: "Personal Information", href: "/acount", icon: User },
  { label: "Change Password", href: "/acount/change-password", icon: Lock },
];

export default function AccountLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const { data: session } = useSession();
  const profileImage =
    typeof session?.user?.image === "string" &&
    session.user.image.trim().length > 0
      ? session.user.image
      : null;

  const isActive = (href: string) => {
    if (href === "/acount") {
      return pathname === "/acount";
    }
    return pathname === href;
  };

  const handleLogout = async () => {
    await signOut({ callbackUrl: "/" });
  };

  return (
    <div className="   bg-[#e8e3db]">
      <div className="container mx-auto flex min-h-screen gap-8 py-10">
        {/* Left Sidebar */}
        <aside className="w-64  bg-[#e8e3db] p-6 flex flex-col items-center">
          {/* Profile Section */}
          <div className="flex flex-col items-center mb-8">
            <div className="relative mb-4">
              <div className="w-24 h-24 rounded-full overflow-hidden bg-gray-300">
                {profileImage ? (
                  <Image
                    src={profileImage}
                    alt="Profile"
                    width={96}
                    height={96}
                    className="object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-[#6a8f3e] text-white text-2xl font-semibold">
                    {session?.user?.firstName?.[0]}
                    {session?.user?.lastName?.[0]}
                  </div>
                )}
              </div>
              <div className="absolute bottom-0 right-0 w-6 h-6 rounded-full bg-white flex items-center justify-center text-xs font-semibold text-[#2a2a2a]">
                @
              </div>
            </div>
            {session?.user && (
              <>
                <h3 className="text-base font-semibold text-[#2a2a2a] text-center">
                  {session.user.firstName} {session.user.lastName}
                </h3>
                <p className="text-sm text-[#7a746e] text-center">
                  {session.user.email}
                </p>
              </>
            )}
          </div>

          {/* Navigation Links */}
          <nav className="w-full space-y-2">
            {sidebarLinks.map((link) => {
              const active = isActive(link.href);
              const Icon = link.icon;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                    active
                      ? "bg-[#3d4339] text-white"
                      : "text-[#2a2a2a] hover:bg-[#d4cfc5]"
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  {link.label}
                </Link>
              );
            })}

            {/* Logout Button */}
            <button
              onClick={handleLogout}
              className="flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm font-medium text-[#c74b4b] hover:bg-[#d4cfc5] transition-colors w-full"
            >
              <LogOut className="h-4 w-4" />
              Log out
            </button>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 overflow-y-auto">{children}</main>
      </div>
    </div>
  );
}
