"use client";
import Image from "next/image";
import React, { useState } from "react";
import { useCreateContact } from "@/lib/hooks/useContact";
import { Button } from "@/components/ui/button";

const Contact = () => {
  const { mutate: sendContact, isPending } = useCreateContact();
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    email: "",
    address: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sendContact(formData, {
      onSuccess: () => {
        setFormData({
          fullName: "",
          phoneNumber: "",
          email: "",
          address: "",
          message: "",
        });
      },
    });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
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

        <div className="grid gap-8 lg:grid-cols-2 items-center">
          <div className="overflow-hidden rounded-3xl">
            <Image
              src="/images/contact.jpg"
              alt="Contact"
              width={600}
              height={600}
              className=" w-full aspect-square object-cover"
            />
          </div>

          <div className="rounded-3xl  bg-white p-6 shadow-sm md:p-8">
            <h3 className="text-2xl md:text-3xl font-semibold text-[#2a2a2a]">
              Contact Information
            </h3>
            {/* <p className="mt-2 text-sm text-[#7a746e]">
              Please fill out the form below to contact us.
            </p> */}

            <form className="mt-5 space-y-6" onSubmit={handleSubmit}>
              <div className="grid gap-4  sm:grid-cols-2">
                <label className="text-base font-medium text-[#2A2A2A]">
                  Full Name *
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="Enter Your First Name"
                    required
                    className="mt-2 w-full rounded-lg border border-[#e3ddd4] bg-[#fbfaf8] px-3 py-2 text-sm text-[#3a3a3a] outline-none focus:border-[#6a8f3e]"
                  />
                </label>
                <label className="text-base font-medium text-[#2A2A2A]">
                  Phone Number *
                  <input
                    type="text"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    placeholder="Enter Your Phone Number"
                    required
                    className="mt-2 w-full rounded-lg border border-[#e3ddd4] bg-[#fbfaf8] px-3 py-2 text-sm text-[#3a3a3a] outline-none focus:border-[#6a8f3e]"
                  />
                </label>
              </div>
              <div>
                <label className="text-base font-medium text-[#2A2A2A]">
                  Email Address *
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter Your Email Address"
                    required
                    className="mt-2 w-full rounded-lg border border-[#e3ddd4] bg-[#fbfaf8] px-3 py-2 text-sm text-[#3a3a3a] outline-none focus:border-[#6a8f3e]"
                  />
                </label>
              </div>

              <div>
                <label className="text-base font-medium text-[#2A2A2A]">
                  Address *
                  <input
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    placeholder="Enter Your Address"
                    required
                    className="mt-2 w-full rounded-lg border border-[#e3ddd4] bg-[#fbfaf8] px-3 py-2 text-sm text-[#3a3a3a] outline-none focus:border-[#6a8f3e]"
                  />
                </label>
              </div>

              <div>
                <label className="text-base font-medium text-[#2A2A2A]">
                  Your Message
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us how we can help you"
                    rows={4}
                    className="mt-2 w-full rounded-lg border border-[#e3ddd4] bg-[#fbfaf8] px-3 py-2 text-sm text-[#3a3a3a] outline-none focus:border-[#6a8f3e]"
                  />
                </label>
              </div>

              <Button
                type="submit"
                disabled={isPending}
                className="w-full rounded-md bg-[#6a8f3e] text-white hover:bg-[#5b7c35] disabled:opacity-50"
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
