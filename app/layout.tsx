import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Haruka Ashiuchi | Writer, Translator",
  description: "I'm a Writer and Translator based in Japan.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>
        <header>Header</header>
        <main>{children}</main>
        <footer>Footer</footer>
      </body>
    </html>
  );
}
