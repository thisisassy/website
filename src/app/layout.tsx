import Container from "./_components/container";
import Header from "./_components/header";
import Footer from "@/app/_components/footer";
import { HOME_OG_IMAGE_URL } from "@/lib/constants";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL('https://acme.com'),
  alternates: {
    canonical: '/',
    languages: {
      'ja-JP': '/ja-JP',
      'en-US': '/en-US',
    }
  },
  title: `Haruka Ashiuchi | 芦内晴香`,
  description: `ブロガー・芦内晴香の個人サイトです。`,
  openGraph: {
    images: [HOME_OG_IMAGE_URL],
  },
};
type Props = {
  children?: React.ReactNode;
}
export default function Layout({ children }: Props) {
  return (
    <Container>
      <Header />
      <main>{children}</main>
      <Footer />
    </Container>
  );
}