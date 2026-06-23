import Link from "next/link";

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
<header className="bg-gradient-to-r fbg-gradient-to-r from-red-900 to-red-700 text-white shadow-lg">
  <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
    <nav className="flex gap-6">
    </nav>
  </div>
</header>
      <main>{children}</main>
    </div>
  );
}