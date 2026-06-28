"use client";
import Link from "next/link";
import ThemeToggle from "@/components/ThemeToggle";
import LanguageToggle from "@/components/LanguageToggle";
import { useLanguage } from "@/context/LanguageContext";

const navLinks = (language: string) => [
  { href: "/", label: language === "en" ? "Home" : "الرئيسية" },
  { href: "/recipes", label: language === "en" ? "Recipes" : "الوصفات" },
  { href: "/contact", label: language === "en" ? "Contact" : "اتصل بنا" },
  { href: "/recipes/new", label: language === "en" ? "Submit Recipe" : "إضافة وصفة" },
  { href: "/recipes/submitted", label: language === "en" ? "Submitted Recipes" : "الوصفات المرسلة" },
  { href: "/favorites", label: language === "en" ? "Favorites" : "المفضلة" },
];

export default function AppLayout({ children }: { children: React.ReactNode }) {
  const { language } = useLanguage();

  return (
    <>
      <header className="bg-gray-900 border-b border-gray-800 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 h-14 flex items-center gap-8">

          {/* Logo */}
          <Link href="/" className="text-white font-semibold text-base tracking-tight shrink-0">
            Recipe<span className="text-red-400">.</span>
          </Link>

          {/* Nav */}
          <nav className="flex items-center gap-1 flex-1">
            {navLinks(language).map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="text-gray-400 hover:text-white hover:bg-gray-800 px-3 py-1.5 rounded-md text-sm transition-colors"
              >
                {label}
              </Link>
            ))}
          </nav>

          {/* Controls */}
          <div className="flex items-center gap-2 shrink-0">
            <LanguageToggle />
            <ThemeToggle />
          </div>

        </div>
      </header>

      <main className="max-w-6xl mx-auto p-6">
        {children}
      </main>
    </>
  );
}