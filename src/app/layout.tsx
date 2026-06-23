import "./globals.css";

export const metadata = {
  title: "Recipe Explorer",
  description: "Search recipes",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}