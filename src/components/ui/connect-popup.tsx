"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { X } from "lucide-react";

// Form validation schema
const formSchema = z.object({
  fullName: z.string().min(2, "Full name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  whatsappNumber: z.string().min(10, "Please enter a valid WhatsApp number"),
  city: z.string().min(2, "City must be at least 2 characters"),
  currentStatus: z.string().min(1, "Please select your current status"),
});

type FormData = z.infer<typeof formSchema>;

interface ConnectPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ConnectPopup({ isOpen, onClose }: ConnectPopupProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: "" });

    try {
      const response = await fetch(
        process.env.NEXT_PUBLIC_GOOGLE_SCRIPT_URL || "",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            timestamp: new Date().toISOString(),
            fullName: data.fullName,
            email: data.email,
            whatsappNumber: data.whatsappNumber,
            city: data.city,
            currentStatus: data.currentStatus,
          }),
        }
      );

      const result = await response.json();

      if (result.success) {
        setSubmitStatus({
          type: "success",
          message: "Thank you! We'll get in touch with you soon.",
        });
        reset();
        setTimeout(() => {
          onClose();
          setSubmitStatus({ type: null, message: "" });
        }, 2000);
      } else {
        throw new Error(result.error || "Failed to submit form");
      }
    } catch (error) {
      setSubmitStatus({
        type: "error",
        message: "Something went wrong. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[500px] p-0 bg-white border-0 rounded-2xl overflow-hidden">
        {/* Custom close button */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 z-10 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
        >
          <X className="h-4 w-4" />
          <span className="sr-only">Close</span>
        </button>

        <div className="p-8">
          <DialogHeader className="mb-6">
            <DialogTitle className="text-2xl font-bold text-center">
              Let's get{" "}
              <span className="text-red-500">connected</span>
            </DialogTitle>
          </DialogHeader>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            {/* Full Name */}
            <div className="space-y-2">
              <Input
                {...register("fullName")}
                placeholder="Full Name*"
                className={`h-12 border-2 rounded-lg px-4 text-base placeholder:text-gray-400 focus:border-red-500 focus:ring-0 ${
                  errors.fullName ? "border-red-500" : "border-gray-300"
                }`}
              />
              {errors.fullName && (
                <p className="text-red-500 text-sm">{errors.fullName.message}</p>
              )}
            </div>

            {/* Email */}
            <div className="space-y-2">
              <Input
                {...register("email")}
                type="email"
                placeholder="Email Id*"
                className={`h-12 border-2 rounded-lg px-4 text-base placeholder:text-gray-400 focus:border-red-500 focus:ring-0 ${
                  errors.email ? "border-red-500" : "border-gray-300"
                }`}
              />
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email.message}</p>
              )}
            </div>

            {/* WhatsApp Number */}
            <div className="space-y-2">
              <div className="relative">
                <div className="absolute left-3 top-1/2 transform -translate-y-1/2 flex items-center space-x-2 border-r border-gray-300 pr-3">
                  <span className="text-lg">🇮🇳</span>
                  <span className="text-gray-600 font-medium">+91</span>
                </div>
                <Input
                  {...register("whatsappNumber")}
                  type="tel"
                  placeholder="WhatsApp Number*"
                  className={`h-12 border-2 rounded-lg pl-20 pr-4 text-base placeholder:text-gray-400 focus:border-red-500 focus:ring-0 ${
                    errors.whatsappNumber ? "border-red-500" : "border-gray-300"
                  }`}
                />
              </div>
              {errors.whatsappNumber && (
                <p className="text-red-500 text-sm">
                  {errors.whatsappNumber.message}
                </p>
              )}
            </div>

            {/* City */}
            <div className="space-y-2">
              <Input
                {...register("city")}
                placeholder="City*"
                className={`h-12 border-2 rounded-lg px-4 text-base placeholder:text-gray-400 focus:border-red-500 focus:ring-0 ${
                  errors.city ? "border-red-500" : "border-gray-300"
                }`}
              />
              {errors.city && (
                <p className="text-red-500 text-sm">{errors.city.message}</p>
              )}
            </div>

            {/* Current Status */}
            <div className="space-y-2">
              <Label className="text-sm font-medium text-gray-700">
                Current Status <span className="text-red-500">*</span>
              </Label>
              <div className="flex gap-4">
                <label className="flex items-center gap-2 cursor-pointer px-4 py-3 rounded-lg border-2 border-gray-300 hover:border-red-500 transition-all flex-1 bg-white">
                  <input
                    {...register("currentStatus")}
                    type="radio"
                    value="student"
                    className="h-5 w-5 text-red-500 border-gray-300 focus:ring-red-500 cursor-pointer accent-red-500"
                  />
                  <span className="text-sm font-medium text-gray-700">Student</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer px-4 py-3 rounded-lg border-2 border-gray-300 hover:border-red-500 transition-all flex-1 bg-white">
                  <input
                    {...register("currentStatus")}
                    type="radio"
                    value="professional"
                    className="h-5 w-5 text-red-500 border-gray-300 focus:ring-red-500 cursor-pointer accent-red-500"
                  />
                  <span className="text-sm font-medium text-gray-700">Professional</span>
                </label>
              </div>
              {errors.currentStatus && (
                <p className="text-red-500 text-sm">{errors.currentStatus.message}</p>
              )}
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full h-12 bg-red-500 hover:bg-red-600 text-white font-semibold text-base rounded-lg mt-6 transition-colors"
            >
              {isSubmitting ? "Submitting..." : "Submit →"}
            </Button>

            {/* Status Message */}
            {submitStatus.type && (
              <div
                className={`text-center text-sm mt-4 ${
                  submitStatus.type === "success"
                    ? "text-green-600"
                    : "text-red-600"
                }`}
              >
                {submitStatus.message}
              </div>
            )}
          </form>
        </div>
      </DialogContent>
    </Dialog>
  );
}