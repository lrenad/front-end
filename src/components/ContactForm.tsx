"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import InputField from "./InputField";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactSchema, ContactFormInput } from "@/lib/schemas/contact";

export default function ContactForm() {
  const [success, setSuccess] = useState(false);

  const { register, handleSubmit, formState: { errors, isSubmitting }, reset } =
    useForm<ContactFormInput>({ resolver: zodResolver(contactSchema) });

  async function onSubmit(data: ContactFormInput) {
    setSuccess(false);
    await new Promise((r) => setTimeout(r, 1500));
    console.log(data);
    setSuccess(true);
    reset();
  }

  return (
    <div className="max-w-xl mx-auto">

      {/* Success banner */}
      {success && (
        <div className="bg-green-50 dark:bg-green-950 border border-green-200 dark:border-green-900 text-green-700 dark:text-green-400 text-sm px-4 py-3 rounded-lg mb-6">
          ✅ Message sent successfully!
        </div>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-1">
        <InputField
          label="Name"
          type="text"
          placeholder="Your name"
          error={errors.name?.message}
          {...register("name")}
        />
        <InputField
          label="Email"
          type="email"
          placeholder="your@email.com"
          error={errors.email?.message}
          {...register("email")}
        />

        {/* Textarea */}
        <div className="mb-5">
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">
            Message
          </label>
          <textarea
            rows={5}
            placeholder="What's on your mind?"
            {...register("message")}
            className={`w-full px-4 py-2.5 rounded-lg border text-sm text-gray-900 dark:text-gray-100 bg-white dark:bg-gray-800 placeholder-gray-400 focus:outline-none transition-colors resize-none ${
              errors.message
                ? "border-red-400 dark:border-red-600 focus:border-red-500"
                : "border-gray-200 dark:border-gray-700 focus:border-red-500"
            }`}
          />
          {errors.message && (
            <p className="text-red-500 dark:text-red-400 text-xs mt-1.5">
              {errors.message.message}
            </p>
          )}
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-red-700 hover:bg-red-800 disabled:opacity-50 text-white py-2.5 rounded-lg text-sm font-medium transition-colors"
        >
          {isSubmitting ? "Sending..." : "Send Message"}
        </button>
      </form>
    </div>
  );
}