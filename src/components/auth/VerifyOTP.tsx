"use client";

import { Suspense, useEffect, useState } from "react";
import useAuth from "@/lib/hooks/useAuth";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

function VerifyOTPForm() {
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const router = useRouter();

  const { handleVerifyOtp, handleResendOtp, loading } = useAuth();

  //  Timer
  const [timer, setTimer] = useState(0);
  const [canResend, setCanResend] = useState(true);

  useEffect(() => {
    if (timer > 0) {
      const interval = setInterval(() => setTimer((prev) => prev - 1), 1000);
      return () => clearInterval(interval);
    } else {
      setCanResend(true);
    }
  }, [timer]);

  // Input handler
  const handleChange = (value: string, index: number) => {
    if (!/^\d*$/.test(value)) return; // only digits
    if (value.length > 1) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && index < 5)
      document.getElementById(`otp-${index + 1}`)?.focus();
  };

  // Handle backspace to go to previous input
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, index: number) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      document.getElementById(`otp-${index - 1}`)?.focus();
    }
  };

  // Verify OTP
  const handleVerify = async () => {
    const otpCode = otp.join("");
    if (otpCode.length < 6) {
      toast.error("Please enter the complete 6-digit OTP.");
      return;
    }

    const res = await handleVerifyOtp(otpCode);

    if (res?.success) {
      toast.success("OTP verified successfully!");

      const resetToken =
        res.data?.data?.accessToken ||
        res.data?.data?.resetToken ||
        res.data?.accessToken ||
        res.data?.resetToken ||
        "";

      setTimeout(() => {
        router.push(
          `/reset-password${resetToken ? `?token=${encodeURIComponent(resetToken)}` : ""}`
        );
      }, 1000);
    } else {
      toast.error(res?.message || "Failed to verify OTP. Please try again.");
    }
  };

  // Resend OTP
  const handleResend = async () => {
    if (!canResend) return;
    const res = await handleResendOtp();
    if (res?.success) {
      toast.success("OTP resent! Check your email.");
      setTimer(60);
      setCanResend(false);
    } else {
      toast.error(res?.message || "Failed to resend OTP.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="bg-white w-full max-w-xl rounded-2xl shadow-md p-10">
        <div className="text-left">
          <h2 className="text-3xl font-semibold text-secondary mb-2">
            Verify Email
          </h2>
          <p className="text-secondary mb-6">
            Enter the 6-digit OTP sent to your email
          </p>
        </div>

        {/* OTP Inputs */}
        <div className="flex items-center gap-3 justify-center mb-6">
          {otp.map((digit, i) => (
            <input
              key={i}
              id={`otp-${i}`}
              type="text"
              inputMode="numeric"
              maxLength={1}
              value={digit}
              onChange={(e) => handleChange(e.target.value, i)}
              onKeyDown={(e) => handleKeyDown(e, i)}
              className={`w-14 h-14 text-2xl text-center border rounded-lg outline-none transition
                ${
                  digit
                    ? "border-secondary text-secondary"
                    : "border-gray-300 text-gray-700"
                }`}
            />
          ))}
        </div>

        <button
          className={`w-full bg-primary text-white py-3 rounded-md text-lg font-medium transition mt-2
            ${loading ? "opacity-60 cursor-not-allowed" : "hover:opacity-90 cursor-pointer"}`}
          onClick={handleVerify}
          disabled={loading}
        >
          {loading ? "Verifying..." : "Verify"}
        </button>

        {/* Resend */}
        <div className="mt-4 text-center text-sm text-gray-500">
          {canResend ? (
            <button
              onClick={handleResend}
              className="text-primary font-medium hover:underline cursor-pointer"
              disabled={loading}
            >
              Resend OTP
            </button>
          ) : (
            <span>Resend OTP in <span className="font-semibold text-secondary">{timer}s</span></span>
          )}
        </div>
      </div>
    </div>
  );
}

export default function VerifyOTP() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <VerifyOTPForm />
    </Suspense>
  );
}