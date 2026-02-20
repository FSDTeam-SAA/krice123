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
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Mail,
  MapPin,
  Phone,
  Clock,
  Send,
  MessageCircleQuestion,
} from "lucide-react";

const formSchema = z.object({
  fullName: z.string().min(2, {
    message: "Full name must be at least 2 characters.",
  }),
  phoneNumber: z.string().min(10, {
    message: "Please enter a valid phone number.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  address: z.string().min(5, {
    message: "Address must be at least 5 characters.",
  }),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }),
});

const ContactForm = () => {
  const { mutate: sendContact, isPending } = useCreateContact();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      phoneNumber: "",
      email: "",
      address: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    sendContact(values, {
      onSuccess: () => {
        form.reset();
      },
    });
  }

  return (
    <section className="bg-[#f7f4ef] py-12 md:py-16 lg:py-20">
      <div className="container mx-auto px-4">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
          {/* Left Side - Contact Info */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-[#2a2a2a] md:text-3xl lg:text-4xl">
                Get in touch with us
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-[#7a746e] md:text-base">
                Lorem ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry&apos;s standard
                dummy.
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-[#e8f5e9] text-[#6a8f3e]">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-[#2a2a2a]">
                    Email Address
                  </h3>
                  <p className="text-sm text-[#7a746e]">support@example.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-[#e8f5e9] text-[#6a8f3e]">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-[#2a2a2a]">Location</h3>
                  <p className="text-sm text-[#7a746e]">
                    Northeast Wyoming
                    <br />
                    50 Magazine Trail Buffalo, WY 82834
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-[#e8f5e9] text-[#6a8f3e]">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-[#2a2a2a]">Phone Number</h3>
                  <p className="text-sm text-[#7a746e]">(307)217-9060</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-[#e8f5e9] text-[#6a8f3e]">
                  <Clock className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-[#2a2a2a]">
                    Business Hour
                  </h3>
                  <p className="text-sm text-[#7a746e]">
                    Available 24/7 Email Support
                  </p>
                </div>
              </div>
            </div>

            {/* Bottom Icons */}
            {/* <div className="flex gap-4 pt-4">
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-[#2a2a2a] shadow-lg">
                <div className="flex items-center justify-center rounded-full bg-[#f4c430] p-3">
                  <MessageCircleQuestion className="h-6 w-6 text-[#2a2a2a]" />
                </div>
              </div>
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#6a8f3e] shadow-lg">
                <div className="flex items-center justify-center">
                  <span className="text-xl font-bold text-white">Q&A</span>
                </div>
              </div>
            </div> */}
          </div>

          {/* Right Side - Contact Form */}
          <div className="rounded-2xl border border-[#e3ddd4] bg-white p-6 shadow-lg md:p-8">
            <div className="mb-6 flex items-center gap-2">
              {/* <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#f4c430]">
                <MessageCircleQuestion className="h-5 w-5 text-[#2a2a2a]" />
              </div> */}
              <h3 className="text-xl font-semibold text-[#2a2a2a]">
                Contact Information
              </h3>
            </div>

            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-5"
              >
                <div className="grid gap-5 md:grid-cols-2">
                  <FormField
                    control={form.control}
                    name="fullName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm font-medium text-[#2a2a2a]">
                          Full Name <span className="text-red-500">*</span>
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Enter Your First Name"
                            {...field}
                            className="border-[#e3ddd4] bg-[#f7f4ef] focus-visible:ring-[#6a8f3e]"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="phoneNumber"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm font-medium text-[#2a2a2a]">
                          Phone Number <span className="text-red-500">*</span>
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Enter Your First Name"
                            {...field}
                            className="border-[#e3ddd4] bg-[#f7f4ef] focus-visible:ring-[#6a8f3e]"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm font-medium text-[#2a2a2a]">
                        Email Address <span className="text-red-500">*</span>
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Enter Your Email Address"
                          {...field}
                          className="border-[#e3ddd4] bg-[#f7f4ef] focus-visible:ring-[#6a8f3e]"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="address"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm font-medium text-[#2a2a2a]">
                        Address <span className="text-red-500">*</span>
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Enter Your Address"
                          {...field}
                          className="border-[#e3ddd4] bg-[#f7f4ef] focus-visible:ring-[#6a8f3e]"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm font-medium text-[#2a2a2a]">
                        You Message
                      </FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Tell us how we can help you"
                          {...field}
                          rows={5}
                          className="resize-none border-[#e3ddd4] bg-[#f7f4ef] focus-visible:ring-[#6a8f3e]"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button
                  type="submit"
                  disabled={isPending}
                  className="w-full rounded-lg bg-[#6a8f3e] py-6 text-base font-semibold text-white transition-all hover:bg-[#5b7c35] disabled:opacity-50"
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
