import ContactForm from "@/components/ContactForm";

export default function ContactPage() {
  return (
    <div className="pt-10">
      <h1 className="text-4xl font-bold mb-6 text-center text-red-900">
        Contact Us
      </h1>

      <p className="text-center mb-8 text-gray-700">
        Have a question or suggestion? Send us a message.
      </p>

      <ContactForm />
    </div>
  );
}