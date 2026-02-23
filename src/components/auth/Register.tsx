"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Eye, EyeOff, Lock, Mail, User } from "lucide-react";
import Link from "next/link";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { registerUser } from "@/lib/api/auth";

export default function Register() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [agreeToTerms, setAgreeToTerms] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleRegister = async () => {
    setIsLoading(true);

    // Validation
    if (
      !formData.firstName ||
      !formData.lastName ||
      !formData.email ||
      !formData.password
    ) {
      toast.error("Please fill in all required fields.");
      setIsLoading(false);
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      toast.error("Passwords do not match.");
      setIsLoading(false);
      return;
    }

    if (!agreeToTerms) {
      toast.error("Please agree to the terms & conditions.");
      setIsLoading(false);
      return;
    }

    try {
      const result = await registerUser({
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        password: formData.password,
      });

      if (result.success) {
        toast.success(result.message || "Account created successfully!");
        setTimeout(() => {
          router.push("/login");
        }, 1000);
      } else {
        toast.error(result.message);
      }
    } catch (err) {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center p-4">
      <div className="bg-white/95 backdrop-blur-sm md:bg-white rounded-2xl shadow-xl md:shadow-lg px-6 py-8 md:px-8 md:py-10 border border-white/20 md:border-none w-full max-w-lg">
        {/* Heading */}
        <div className="flex justify-center mb-6">
          <Image
            src="/images/logo.png"
            alt="Klondike Construction"
            width={150}
            height={50}
          />
        </div>
        <div className="text-left mb-6">
          <h1 className="text-3xl font-bold text-secondary">Create Account</h1>
          <p className="mt-1 text-sm text-gray-500">
            Sign up to start your beauty journey
          </p>
        </div>

        <div className="space-y-3">
          {/* First Name */}
          <div>
            <Label className="text-sm font-medium">First Name</Label>
            <div className="relative mt-1">
              <User
                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                size={18}
              />
              <Input
                type="text"
                name="firstName"
                placeholder="Enter your first name"
                className="pl-10 py-5"
                value={formData.firstName}
                onChange={handleChange}
              />
            </div>
          </div>

          {/* Last Name */}
          <div>
            <Label className="text-sm font-medium">Last Name</Label>
            <div className="relative mt-1">
              <User
                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                size={18}
              />
              <Input
                type="text"
                name="lastName"
                placeholder="Enter your last name"
                className="pl-10 py-5"
                value={formData.lastName}
                onChange={handleChange}
              />
            </div>
          </div>

          {/* Email */}
          <div>
            <Label className="text-sm font-medium">Email Address</Label>
            <div className="relative mt-1">
              <Mail
                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                size={18}
              />
              <Input
                type="email"
                name="email"
                placeholder="Enter your email"
                className="pl-10 py-5"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
          </div>

          {/* Password */}
          <div>
            <Label className="text-sm font-medium">Password</Label>
            <div className="relative mt-1">
              <Lock
                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                size={18}
              />
              <Input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Enter your password"
                className="pl-10 pr-10 py-5"
                value={formData.password}
                onChange={handleChange}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>

          {/* Confirm Password */}
          <div>
            <Label className="text-sm font-medium">Confirm Password</Label>
            <div className="relative mt-1">
              <Lock
                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                size={18}
              />
              <Input
                type={showConfirmPassword ? "text" : "password"}
                name="confirmPassword"
                placeholder="Confirm your password"
                className="pl-10 pr-10 py-5"
                value={formData.confirmPassword}
                onChange={handleChange}
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
              >
                {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>

          {/* Terms & Conditions */}
          <div className="flex items-center space-x-2">
            <Checkbox
              id="terms"
              checked={agreeToTerms}
              onCheckedChange={(checked) => setAgreeToTerms(checked as boolean)}
            />
            <label
              htmlFor="terms"
              className="text-sm text-gray-600 cursor-pointer"
            >
              I agree to the{" "}
              <Link href="#" className="text-[#E53838] hover:underline">
                terms & conditions
              </Link>
            </label>
          </div>

          {/* Button */}
          <Button
            className="w-full bg-[#628B3D] hover:bg-[#527735] text-white py-5 cursor-pointer"
            onClick={handleRegister}
            disabled={isLoading}
          >
            {isLoading ? "Creating Account..." : "Create Account"}
          </Button>

          {/* Login Link */}
          <div className="text-center">
            <p className="text-sm text-gray-600">
              Already have an account?{" "}
              <Link
                href="/login"
                className="text-[#E53838] hover:underline font-medium"
              >
                Log in
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
