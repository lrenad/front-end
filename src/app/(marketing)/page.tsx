import Link from "next/link";
import { Playfair_Display } from "next/font/google";
import FoodImageStrip from "@/components/FoodImageStrip";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

const stats = [
  { num: "12K+", label: "Recipes" },
  { num: "80+", label: "Cuisines" },
  { num: "10k+", label: "Home cooks" },
];

export default function HomePage() {
  return (
    <div className={`${playfair.variable} font-sans text-gray-900 dark:text-gray-100`}>
      <section className="relative text-center px-6 pt-32 pb-24 overflow-hidden min-h-[700px]">

        <FoodImageStrip />

        <div className="relative z-10">
          <span className="animate-[fadeUp_0.5s_ease_forwards] inline-flex items-center gap-1.5 bg-white border border-red-200 text-red-700 dark:bg-red-950 dark:border-red-900 dark:text-red-400 text-xs font-medium px-3 py-1.5 rounded-full mb-6">
            🔥 12,000+ recipes and counting
          </span>

          <h1 className="animate-[fadeUp_0.5s_0.15s_ease_forwards] font-[family-name:var(--font-playfair)] text-gray-900 dark:text-white text-5xl font-bold leading-tight tracking-tight mb-4">
            Cook something{" "}
            <em className="not-italic text-red-700 dark:text-red-400">unforgettable</em>{" "}
            tonight
          </h1>

          <p className="animate-[fadeUp_0.5s_0.3s_ease_forwards] text-lg text-gray-500 dark:text-gray-400 max-w-md mx-auto mb-10">
            Search by ingredient, cuisine, or what's left in your fridge. Great meals start here.
          </p>

          <div className="animate-[fadeUp_0.5s_0.45s_ease_forwards] mb-10">
            <Link
              href="/recipes"
              className="inline-block bg-red-700 hover:bg-red-800 text-white px-8 py-3 rounded-lg text-sm font-medium transition-colors"
            >
              View all recipes →
            </Link>
          </div>

          <div className="animate-[fadeUp_0.5s_0.6s_ease_forwards] flex justify-center gap-0 pt-8 border-t border-gray-200 dark:border-gray-800 divide-x divide-gray-200 dark:divide-gray-800">
            {stats.map(({ num, label }) => (
              <div key={label} className="px-12 py-4">
                <div className="font-[family-name:var(--font-playfair)] text-4xl font-bold text-gray-900 dark:text-white mb-1">
                  {num}
                </div>
                <div className="text-xs font-medium tracking-widest uppercase text-gray-400">
                  {label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}