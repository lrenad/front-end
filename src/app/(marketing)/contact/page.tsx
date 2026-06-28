import ContactForm from "@/components/ContactForm";
import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

export default function ContactPage() {
  return (
    <div className={`${playfair.variable} pt-10`}>
      <h1 className="font-[family-name:var(--font-playfair)] text-4xl font-bold mb-6 text-center text-gray-900 dark:text-white">
        Contact Us
      </h1>
      <p className="text-center mb-8 text-gray-500 dark:text-gray-400">
        Have a question or suggestion? Send us a message.
      </p>
      <ContactForm />
    </div>
  );
}