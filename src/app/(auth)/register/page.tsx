"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Eye, EyeOff } from "lucide-react";
import Register from "@/components/auth/Register";

export default function RegisterPage() {


  return (
    <div className=" space-y-6 ">
<Register />
    </div>
  );
}
