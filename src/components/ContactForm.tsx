"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import InputField from "./InputField";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  contactSchema,
  ContactFormInput,
} from "@/lib/schemas/contact";

export default function ContactForm() {
  const [success, setSuccess] =
    useState(false);

  const {
    register,
    handleSubmit,
    formState: {
      errors,
      isSubmitting,
    },
    reset,
  } = useForm<ContactFormInput>({
    resolver: zodResolver(contactSchema),
  });

  async function onSubmit(
    data: ContactFormInput
  ) {
    setSuccess(false);

    await new Promise((r) =>
      setTimeout(r, 1500)
    );

    console.log(data);

    setSuccess(true);

    reset();
  }

  return (
    <div className="max-w-xl mx-auto">
      {success && (
        <div className="bg-green-100 text-green-800 p-3 rounded mb-4">
          Message sent successfully!
        </div>
      )}

      <form onSubmit={handleSubmit(onSubmit)}>
        <InputField
          label="Name"
          type="text"
          error={errors.name?.message}
          {...register("name")}
        />

        <InputField
          label="Email"
          type="email"
          error={errors.email?.message}
          {...register("email")}
        />

        <div className="mb-4">
          <label className="block font-medium mb-1 text-black">
            Message
          </label>

          <textarea
            rows={5}
            className="w-full border rounded p-2 bg-white text-black"
            {...register("message")}
          />

          {errors.message && (
            <p className="text-red-600 text-sm mt-1">
              {errors.message.message}
            </p>
          )}
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="bg-red-700 text-white px-4 py-2 rounded disabled:opacity-50 hover:bg-red-900"
        >
          {isSubmitting
            ? "Sending..."
            : "Send Message"}
        </button>
      </form>
    </div>
  );
}