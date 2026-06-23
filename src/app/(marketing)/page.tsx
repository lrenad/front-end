import Link from "next/link";

export default function HomePage() {
  return (
    <div className="text-center py-20">
       <h1 className="text-5xl font-bold mb-6 text-red-900 underline decoration-red-500 dark:text-shadow-2xs">
        Recipe Explorer
      </h1>
      <p className="text-lg text-gray-600 mb-8">
        Discover and search thousands of recipes.
      </p>

      <Link
        href="/recipes"
        className="inline-block bg-red-700 text-white px-6 py-3 rounded-lg hover:bg-red-900 dark:text-shadow-2xs"
      >
        View Recipes
      </Link>
    </div>
  );
}