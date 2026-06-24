import Link from "next/link";

export default function AppLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <header className="bg-gradient-to-r bg-gradient-to-r from-red-900 to-red-700 text-white">
        <div className="max-w-6xl mx-auto p-4 flex justify-between">


          <nav className="flex gap-4">
            <Link className="hover:bg-red-700" href="/">Home</Link>
            <Link className="hover:bg-red-700" href="/recipes">Recipes</Link>
            <Link className="hover:bg-red-700" href="/contact">Contact</Link>
            <Link href="/recipes/new">Submit a Recipe</Link>
            <Link href="/recipes/submitted">Submitted Recipes</Link>
          </nav>
        </div>
      </header>

      <main className="max-w-6xl mx-auto p-6">
        {children}
      </main>
    </>
  );
}