import type { Metadata } from "next";
import Header from "../components/header";
import Footer from "../components/footer";
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
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
