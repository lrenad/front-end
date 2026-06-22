import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "Recipe Explorer",
  description: "Search recipes",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col bg-white">
        <header className="bg-gradient-to-r bg-gradient-to-r from-pink-700 to-red-900 text-white shadow-lg">
          <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between">
            <h1 className="font-bold text-xl">
            </h1>

            <nav className="flex gap-4">
              <Link href="/" className="hover:bg-red-700">Home</Link>
              <Link href="/recipes" className="hover:bg-red-700">Recipes</Link>
            </nav>
          </div>
        </header>

        <main className="flex-1 max-w-6xl mx-auto w-full p-6">
          {children}
        </main>

        <footer className="border-t py-4 text-center text-gray-500">
          Recipe Explorer © 2025
        </footer>
      </body>
    </html>
  );
}