"use client";
import Image from "next/image";
import React, { useState } from "react";
import { useCreateContact } from "@/lib/hooks/useContact";
import { Button } from "@/components/ui/button";

const Contact = () => {
  const { mutate: sendContact, isPending } = useCreateContact();
  const [formData, setFormData] = useState({
    youFirstName: "",
    youLastName: "",
    spouseFirstName: "",
    spouseLastName: "",
    email: "",
    streetAddress: "",
    city: "",
    state: "",
    zipCode: "",
    phoneNumber: "",
    projectDetails: "",
    timeline: "As soon as possible",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const fullName = `${formData.youFirstName} ${formData.youLastName}${
      formData.spouseFirstName || formData.spouseLastName
        ? ` (Spouse: ${formData.spouseFirstName} ${formData.spouseLastName})`
        : ""
    }`;
    const address = `${formData.streetAddress}, ${formData.city}, ${formData.state} ${formData.zipCode}`;
    const message = `Project Details: ${formData.projectDetails}\nTimeline: ${formData.timeline}`;

    sendContact(
      {
        fullName,
        phoneNumber: formData.phoneNumber,
        email: formData.email,
        address,
        message,
      },
      {
        onSuccess: () => {
          setFormData({
            youFirstName: "",
            youLastName: "",
            spouseFirstName: "",
            spouseLastName: "",
            email: "",
            streetAddress: "",
            city: "",
            state: "",
            zipCode: "",
            phoneNumber: "",
            projectDetails: "",
            timeline: "As soon as possible",
          });
        },
      }
    );
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section id="contact" className="bg-[#f7f4ef] py-12 md:py-16">
      <div className="container mx-auto space-y-8 px-4">
        <h2 className="text-center text-2xl font-semibold uppercase text-[#2a2a2a] md:text-3xl">
          Get in touch with us
        </h2>

        <div className="grid gap-8 lg:grid-cols-2 items-start">
          <div className="overflow-hidden rounded-3xl lg:sticky lg:top-24">
            <Image
              src="/images/contact.jpg"
              alt="Contact"
              width={600}
              height={600}
              className="w-full aspect-square object-cover"
            />
          </div>

          <div className="rounded-3xl bg-white p-6 shadow-sm md:p-8">
            <h3 className="text-2xl md:text-3xl font-semibold text-[#2a2a2a]">
              Contact Information
            </h3>

            <form className="mt-6 space-y-6" onSubmit={handleSubmit}>
              {/* Name (You) */}
              <div>
                <span className="text-sm font-semibold text-[#2a2a2a]">
                  Name (You) <span className="text-red-500">*</span>
                </span>
                <div className="mt-2 grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <input
                      type="text"
                      name="youFirstName"
                      value={formData.youFirstName}
                      onChange={handleChange}
                      required
                      className="w-full border border-[#2a2a2a] bg-white px-3 py-2 text-sm text-[#2a2a2a] outline-none focus:border-[#6a8f3e]"
                    />
                    <span className="mt-1 block text-xs text-[#7a746e]">
                      First Name
                    </span>
                  </div>
                  <div>
                    <input
                      type="text"
                      name="youLastName"
                      value={formData.youLastName}
                      onChange={handleChange}
                      required
                      className="w-full border border-[#2a2a2a] bg-white px-3 py-2 text-sm text-[#2a2a2a] outline-none focus:border-[#6a8f3e]"
                    />
                    <span className="mt-1 block text-xs text-[#7a746e]">
                      Last Name
                    </span>
                  </div>
                </div>
              </div>

              {/* Name (Spouse) */}
              <div>
                <span className="text-sm font-semibold text-[#2a2a2a]">
                  Name (Spouse) <span className="text-red-500">*</span>
                </span>
                <div className="mt-2 grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <input
                      type="text"
                      name="spouseFirstName"
                      value={formData.spouseFirstName}
                      onChange={handleChange}
                      required
                      className="w-full border border-[#2a2a2a] bg-white px-3 py-2 text-sm text-[#2a2a2a] outline-none focus:border-[#6a8f3e]"
                    />
                    <span className="mt-1 block text-xs text-[#7a746e]">
                      First Name
                    </span>
                  </div>
                  <div>
                    <input
                      type="text"
                      name="spouseLastName"
                      value={formData.spouseLastName}
                      onChange={handleChange}
                      required
                      className="w-full border border-[#2a2a2a] bg-white px-3 py-2 text-sm text-[#2a2a2a] outline-none focus:border-[#6a8f3e]"
                    />
                    <span className="mt-1 block text-xs text-[#7a746e]">
                      Last Name
                    </span>
                  </div>
                </div>
              </div>

              {/* Email */}
              <div>
                <span className="text-sm font-semibold text-[#2a2a2a]">
                  Email <span className="text-red-500">*</span>
                </span>
                <div className="mt-2 sm:max-w-md">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full border border-[#2a2a2a] bg-white px-3 py-2 text-sm text-[#2a2a2a] outline-none focus:border-[#6a8f3e]"
                  />
                </div>
              </div>

              {/* Address */}
              <div>
                <span className="text-sm font-semibold text-[#2a2a2a]">
                  Address <span className="text-red-500">*</span>
                </span>
                <div className="mt-2 space-y-4">
                  <div>
                    <input
                      type="text"
                      name="streetAddress"
                      value={formData.streetAddress}
                      onChange={handleChange}
                      required
                      className="w-full border border-[#2a2a2a] bg-white px-3 py-2 text-sm text-[#2a2a2a] outline-none focus:border-[#6a8f3e]"
                    />
                    <span className="mt-1 block text-xs text-[#7a746e]">
                      Street Address
                    </span>
                  </div>
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                    <div>
                      <input
                        type="text"
                        name="city"
                        value={formData.city}
                        onChange={handleChange}
                        required
                        className="w-full border border-[#2a2a2a] bg-white px-3 py-2 text-sm text-[#2a2a2a] outline-none focus:border-[#6a8f3e]"
                      />
                      <span className="mt-1 block text-xs text-[#7a746e]">
                        City
                      </span>
                    </div>
                    <div>
                      <input
                        type="text"
                        name="state"
                        value={formData.state}
                        onChange={handleChange}
                        required
                        className="w-full border border-[#2a2a2a] bg-white px-3 py-2 text-sm text-[#2a2a2a] outline-none focus:border-[#6a8f3e]"
                      />
                      <span className="mt-1 block text-xs text-[#7a746e]">
                        State
                      </span>
                    </div>
                    <div>
                      <input
                        type="text"
                        name="zipCode"
                        value={formData.zipCode}
                        onChange={handleChange}
                        required
                        className="w-full border border-[#2a2a2a] bg-white px-3 py-2 text-sm text-[#2a2a2a] outline-none focus:border-[#6a8f3e]"
                      />
                      <span className="mt-1 block text-xs text-[#7a746e]">
                        Zip Code
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Mobile Number */}
              <div>
                <span className="text-sm font-semibold text-[#2a2a2a]">
                  Mobile Number <span className="text-red-500">*</span>
                </span>
                <div className="mt-2 sm:max-w-xs">
                  <input
                    type="text"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    required
                    className="w-full border border-[#2a2a2a] bg-white px-3 py-2 text-sm text-[#2a2a2a] outline-none focus:border-[#6a8f3e]"
                  />
                </div>
              </div>

              {/* Project Details */}
              <div>
                <span className="text-sm font-semibold text-[#2a2a2a]">
                  Tell us a little about your project{" "}
                  <span className="text-red-500">*</span>
                </span>
                <div className="mt-2">
                  <textarea
                    name="projectDetails"
                    value={formData.projectDetails}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full border border-[#2a2a2a] bg-white px-3 py-2 text-sm text-[#2a2a2a] outline-none focus:border-[#6a8f3e] resize-y"
                  />
                </div>
              </div>

              {/* Timeline Radio Buttons */}
              <div>
                <span className="text-sm font-semibold text-[#2a2a2a]">
                  How soon would you like to get started?
                </span>
                <div className="mt-3 space-y-2">
                  {[
                    "As soon as possible",
                    "3-6 months",
                    "6-12 months",
                    "12+ months",
                  ].map((option) => (
                    <label
                      key={option}
                      className="flex items-center gap-3 cursor-pointer text-sm text-[#2a2a2a]"
                    >
                      <input
                        type="radio"
                        name="timeline"
                        value={option}
                        checked={formData.timeline === option}
                        onChange={handleChange}
                        className="h-4 w-4 border-[#2a2a2a] text-[#6a8f3e] focus:ring-[#6a8f3e]"
                      />
                      <span>{option}</span>
                    </label>
                  ))}
                </div>
              </div>

              <Button
                type="submit"
                disabled={isPending}
                className="w-full rounded-md bg-[#6a8f3e] text-white hover:bg-[#5b7c35] disabled:opacity-50 py-6 text-base font-semibold transition-all"
              >
                {isPending ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
