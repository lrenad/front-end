import Link from "next/link";

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
<header className="bg-gradient-to-r bg-gradient-to-r from-red-900 to-red-700 text-white">
        <div className="max-w-6xl mx-auto p-4 flex justify-between">


          <nav className="flex gap-4">
            <Link className="hover:bg-red-700" href="/">Home</Link>
            <Link className="hover:bg-red-700" href="/recipes">Recipes</Link>
            <Link className="hover:bg-red-700" href="/contact">Contact</Link>
          </nav>
        </div>
      </header>

      <main>{children}</main>
    </div>
  );
}