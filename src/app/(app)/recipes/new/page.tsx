import RecipeSubmissionForm from "@/components/RecipeSubmissionForm";
import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

export default function NewRecipePage() {
  return (
    <div className={`${playfair.variable} pt-10`}>
      <h1 className="font-[family-name:var(--font-playfair)] text-4xl font-bold text-gray-900 dark:text-white mb-6 text-center">
        Submit a Recipe
      </h1>

       <p className="text-center mb-8 text-gray-500 dark:text-gray-400">
       Share your delicious creations with our growing recipe community
      </p>
      <RecipeSubmissionForm />
    </div>
  );
}