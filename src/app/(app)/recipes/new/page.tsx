import RecipeSubmissionForm from "@/components/RecipeSubmissionForm";

export default function NewRecipePage() {
  return (
    <div>
      <h1 className="text-4xl font-bold mb-6 text-red-900 text-center">
        Submit a Recipe
      </h1>

      <RecipeSubmissionForm />
    </div>
  );
}