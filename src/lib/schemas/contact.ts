import { z } from "zod";

export const contactSchema = z
  .object({
    name: z
      .string()
      .min(
        2,
        "Name must be at least 2 characters"
      )
      .max(
        60,
        "Name must be less than 60 characters"
      ),

    email: z
      .string()
      .email(
        "Please enter a valid email address"
      ),

    message: z
      .string()
      .min(
        10,
        "Message must be at least 10 characters"
      )
      .max(
        500,
        "Message must be less than 500 characters"
      ),
  })
  .refine(
    (data) =>
      !data.message
        .toLowerCase()
        .includes("http"),
    {
      message:
        "Links are not allowed in messages.",
      path: ["message"],
    }
  );

export type ContactFormInput =
  z.input<typeof contactSchema>;

export type ContactFormOutput =
  z.output<typeof contactSchema>;