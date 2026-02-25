"use client";

import React, { useEffect, useState } from "react";
import DOMPurify from "dompurify";
import { cn } from "@/lib/utils"; // Assuming shadcn utility is present, or I can use clsx/tailwind-merge

interface SafeHTMLProps {
  htmlContent?: string;
  className?: string;
}

const SafeHTML: React.FC<SafeHTMLProps> = ({ htmlContent = "", className }) => {
  const [sanitizedHTML, setSanitizedHTML] = useState<string>("");

  useEffect(() => {
    if (htmlContent) {
      setSanitizedHTML(DOMPurify.sanitize(htmlContent));
    }
  }, [htmlContent]);

  return (
    <div
      className={cn("prose prose-slate max-w-none", className)}
      dangerouslySetInnerHTML={{ __html: sanitizedHTML }}
    />
  );
};

export default SafeHTML;
