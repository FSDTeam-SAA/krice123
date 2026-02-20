"use client";

import React, { Suspense, useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import useAuth from "@/lib/hooks/useAuth";
import { toast } from "sonner";

function ForgetPasswordForm() {
  const [email, setEmail] = useState("");
  const router = useRouter();
  const { loading, handleForgotPassword } = useAuth();

  const handleSendCode = async () => {
    if (!email) {
      toast.error("Please enter your email address.");
      return;
    }

    const response = await handleForgotPassword(email);

    if (response.success) {
      toast.success("OTP sent! Check your email.");

      // Token may be at different levels depending on the API
      const accessToken =
        response.data?.data?.accessToken ||
        response.data?.accessToken ||
        response.data?.data?.token ||
        response.data?.token ||
        "";

      setTimeout(() => {
        router.push(
          `/verify-otp${accessToken ? `?token=${encodeURIComponent(accessToken)}` : ""}`,
        );
      }, 1000);
    } else {
      toast.error(response.message || "Failed to send OTP. Please try again.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="w-[500px] bg-white rounded-2xl shadow-lg px-8 py-10">
        <div className="text-left">
          <h1 className="text-3xl font-bold text-secondary">Forgot Password</h1>
          <p className="text-secondary mt-1 text-sm">
            Enter your email to recover your password
          </p>
        </div>
        <div className="mt-6 space-y-4">
          <div>
            <Label>Email Address</Label>
            <Input
              type="email"
              className="mt-2 py-5"
              placeholder="hello@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSendCode()}
            />
          </div>

          <Button
            className="w-full bg-[#628B3D] hover:bg-[#527735] text-white cursor-pointer"
            onClick={handleSendCode}
            disabled={loading}
          >
            {loading ? "Sending..." : "Send OTP"}
          </Button>
        </div>
      </div>
    </div>
  );
}

export default function ForgetPassword() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ForgetPasswordForm />
    </Suspense>
  );
}
