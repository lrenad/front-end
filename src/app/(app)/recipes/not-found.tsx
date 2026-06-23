import Link from "next/link";

export default function NotFound() {
  return (
    <div className="text-center py-20">
      <h1 className="text-4xl font-bold mb-4 text-red-900">
        Recipe Not Found
      </h1>

      <p className="mb-6 text-black">
        Sorry, we couldn't find that recipe.
      </p>

      <Link
        href="/recipes"
        className="bg-red-700 text-white px-4 py-2 rounded hover:bg-red-800"
      >
        Back to Recipes
      </Link>
    </div>
  );
}