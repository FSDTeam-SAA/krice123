"use client";

import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { useCreateContact } from "@/lib/hooks/useContact";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import {
  Mail,
  MapPin,
  Phone,
  Clock,
  Send,
} from "lucide-react";

const formSchema = z.object({
  youFirstName: z.string().min(1, { message: "First name is required." }),
  youLastName: z.string().min(1, { message: "Last name is required." }),
  spouseFirstName: z.string().min(1, { message: "Spouse's first name is required." }),
  spouseLastName: z.string().min(1, { message: "Spouse's last name is required." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  streetAddress: z.string().min(1, { message: "Street address is required." }),
  city: z.string().min(1, { message: "City is required." }),
  state: z.string().min(1, { message: "State is required." }),
  zipCode: z.string().min(1, { message: "Zip code is required." }),
  phoneNumber: z.string().min(10, { message: "Please enter a valid 10-digit phone number." }),
  projectDetails: z.string().min(10, { message: "Please describe your project (min 10 characters)." }),
  timeline: z.string(),
});

const ContactForm = () => {
  const { mutate: sendContact, isPending } = useCreateContact();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
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
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    const fullName = `${values.youFirstName} ${values.youLastName}${
      values.spouseFirstName || values.spouseLastName
        ? ` (Spouse: ${values.spouseFirstName} ${values.spouseLastName})`
        : ""
    }`;
    const address = `${values.streetAddress}, ${values.city}, ${values.state} ${values.zipCode}`;
    const message = `Project Details: ${values.projectDetails}\nTimeline: ${values.timeline}`;

    sendContact(
      {
        fullName,
        phoneNumber: values.phoneNumber,
        email: values.email,
        address,
        message,
      },
      {
        onSuccess: () => {
          form.reset();
        },
      }
    );
  }

  return (
    <section className="bg-[#f7f4ef] py-12 md:py-16 lg:py-20">
      <div className="container mx-auto px-4">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-start">
          {/* Left Side - Contact Info */}
          <div className="space-y-8 lg:sticky lg:top-24">
            <div>
              <h2 className="text-2xl font-bold text-[#2a2a2a] md:text-3xl lg:text-4xl">
                Get in touch with us
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-[#7a746e] md:text-base">
                Have questions about a new build, remodel, or project planning?
                Send us a message and the Klondike Construction team will get
                back to you as soon as possible.
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-6 grid grid-cols-1 md:grid-cols-2">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#CEDBC3] text-[#6a8f3e]">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-[#2a2a2a]">
                    Email Address
                  </h3>
                  <a
                    href="mailto:info@klondikeconstruction307.com"
                    className="text-sm text-[#6a8f3e] hover:underline"
                  >
                    info@klondikeconstruction307.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#CEDBC3] text-[#6a8f3e]">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-[#2a2a2a]">Location</h3>
                  <p className="text-sm text-[#7a746e]">
                    50 Maverick Trail
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#CEDBC3] text-[#6a8f3e]">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-[#2a2a2a]">Phone Number</h3>
                  <p className="text-sm text-[#7a746e]">(307)217-3680</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#CEDBC3] text-[#6a8f3e]">
                  <Clock className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-[#2a2a2a]">
                    Business Hour
                  </h3>
                  <p className="text-sm text-[#7a746e]">Monday-Friday 7:30-4</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="rounded-2xl border border-[#e3ddd4] bg-white p-6 shadow-lg md:p-8">
            <div className="mb-6">
              <h3 className="text-2xl md:text-3xl font-semibold text-[#2a2a2a]">
                Contact Information
              </h3>
            </div>

            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-6"
              >
                {/* Name (You) */}
                <div>
                  <span className="text-sm font-semibold text-[#2a2a2a]">
                    Name (You) <span className="text-red-500">*</span>
                  </span>
                  <div className="mt-2 grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <FormField
                      control={form.control}
                      name="youFirstName"
                      render={({ field }) => (
                        <FormItem className="space-y-0">
                          <FormControl>
                            <input
                              type="text"
                              {...field}
                              required
                              className="w-full border border-[#2a2a2a] bg-white px-3 py-2 text-sm text-[#2a2a2a] outline-none focus:border-[#6a8f3e]"
                            />
                          </FormControl>
                          <span className="mt-1 block text-xs text-[#7a746e]">
                            First Name
                          </span>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="youLastName"
                      render={({ field }) => (
                        <FormItem className="space-y-0">
                          <FormControl>
                            <input
                              type="text"
                              {...field}
                              required
                              className="w-full border border-[#2a2a2a] bg-white px-3 py-2 text-sm text-[#2a2a2a] outline-none focus:border-[#6a8f3e]"
                            />
                          </FormControl>
                          <span className="mt-1 block text-xs text-[#7a746e]">
                            Last Name
                          </span>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>

                {/* Name (Spouse) */}
                <div>
                  <span className="text-sm font-semibold text-[#2a2a2a]">
                    Name (Spouse) <span className="text-red-500">*</span>
                  </span>
                  <div className="mt-2 grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <FormField
                      control={form.control}
                      name="spouseFirstName"
                      render={({ field }) => (
                        <FormItem className="space-y-0">
                          <FormControl>
                            <input
                              type="text"
                              {...field}
                              required
                              className="w-full border border-[#2a2a2a] bg-white px-3 py-2 text-sm text-[#2a2a2a] outline-none focus:border-[#6a8f3e]"
                            />
                          </FormControl>
                          <span className="mt-1 block text-xs text-[#7a746e]">
                            First Name
                          </span>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="spouseLastName"
                      render={({ field }) => (
                        <FormItem className="space-y-0">
                          <FormControl>
                            <input
                              type="text"
                              {...field}
                              required
                              className="w-full border border-[#2a2a2a] bg-white px-3 py-2 text-sm text-[#2a2a2a] outline-none focus:border-[#6a8f3e]"
                            />
                          </FormControl>
                          <span className="mt-1 block text-xs text-[#7a746e]">
                            Last Name
                          </span>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <span className="text-sm font-semibold text-[#2a2a2a]">
                    Email <span className="text-red-500">*</span>
                  </span>
                  <div className="mt-2 sm:max-w-md">
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem className="space-y-0">
                          <FormControl>
                            <input
                              type="email"
                              {...field}
                              required
                              className="w-full border border-[#2a2a2a] bg-white px-3 py-2 text-sm text-[#2a2a2a] outline-none focus:border-[#6a8f3e]"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>

                {/* Address */}
                <div>
                  <span className="text-sm font-semibold text-[#2a2a2a]">
                    Address <span className="text-red-500">*</span>
                  </span>
                  <div className="mt-2 space-y-4">
                    <FormField
                      control={form.control}
                      name="streetAddress"
                      render={({ field }) => (
                        <FormItem className="space-y-0">
                          <FormControl>
                            <input
                              type="text"
                              {...field}
                              required
                              className="w-full border border-[#2a2a2a] bg-white px-3 py-2 text-sm text-[#2a2a2a] outline-none focus:border-[#6a8f3e]"
                            />
                          </FormControl>
                          <span className="mt-1 block text-xs text-[#7a746e]">
                            Street Address
                          </span>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                      <FormField
                        control={form.control}
                        name="city"
                        render={({ field }) => (
                          <FormItem className="space-y-0">
                            <FormControl>
                              <input
                                type="text"
                                {...field}
                                required
                                className="w-full border border-[#2a2a2a] bg-white px-3 py-2 text-sm text-[#2a2a2a] outline-none focus:border-[#6a8f3e]"
                              />
                            </FormControl>
                            <span className="mt-1 block text-xs text-[#7a746e]">
                              City
                            </span>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="state"
                        render={({ field }) => (
                          <FormItem className="space-y-0">
                            <FormControl>
                              <input
                                type="text"
                                {...field}
                                required
                                className="w-full border border-[#2a2a2a] bg-white px-3 py-2 text-sm text-[#2a2a2a] outline-none focus:border-[#6a8f3e]"
                              />
                            </FormControl>
                            <span className="mt-1 block text-xs text-[#7a746e]">
                              State
                            </span>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="zipCode"
                        render={({ field }) => (
                          <FormItem className="space-y-0">
                            <FormControl>
                              <input
                                type="text"
                                {...field}
                                required
                                className="w-full border border-[#2a2a2a] bg-white px-3 py-2 text-sm text-[#2a2a2a] outline-none focus:border-[#6a8f3e]"
                              />
                            </FormControl>
                            <span className="mt-1 block text-xs text-[#7a746e]">
                              Zip Code
                            </span>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                  </div>
                </div>

                {/* Mobile Number */}
                <div>
                  <span className="text-sm font-semibold text-[#2a2a2a]">
                    Mobile Number <span className="text-red-500">*</span>
                  </span>
                  <div className="mt-2 sm:max-w-xs">
                    <FormField
                      control={form.control}
                      name="phoneNumber"
                      render={({ field }) => (
                        <FormItem className="space-y-0">
                          <FormControl>
                            <input
                              type="text"
                              {...field}
                              required
                              className="w-full border border-[#2a2a2a] bg-white px-3 py-2 text-sm text-[#2a2a2a] outline-none focus:border-[#6a8f3e]"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
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
                    <FormField
                      control={form.control}
                      name="projectDetails"
                      render={({ field }) => (
                        <FormItem className="space-y-0">
                          <FormControl>
                            <textarea
                              {...field}
                              required
                              rows={4}
                              className="w-full border border-[#2a2a2a] bg-white px-3 py-2 text-sm text-[#2a2a2a] outline-none focus:border-[#6a8f3e] resize-y"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
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
                          checked={form.watch("timeline") === option}
                          onChange={() => form.setValue("timeline", option)}
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
                  <Send className="mr-2 h-5 w-5" />
                  {isPending ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
