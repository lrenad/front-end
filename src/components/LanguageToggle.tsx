"use client";
import { useLanguage } from "@/context/LanguageContext";

export default function LanguageToggle() {
  const { language, toggleLanguage } = useLanguage();

  return (
  <button
    onClick={toggleLanguage}
    aria-label="Toggle language"
    className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-gray-700 hover:border-gray-500 text-gray-300 hover:text-white text-sm transition-colors"
  >
    <span>{language === "en" ? "🇬🇧" : "🇸🇦"}</span>
    <span>{language === "en" ? "English" : "العربية"}</span>
  </button>
);
}