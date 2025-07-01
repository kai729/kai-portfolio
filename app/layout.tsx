import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "KA-I Portfolio",
    template: "%s | KA-I Portfolio",
  },
  description: "カイトのポートフォリオサイトです。",
  themeColor: "#3f8efc",
  openGraph: {
    type: "website",
    url: "https://your-site-url.com",
    siteName: "KA-I Portfolio",
    images: [
      {
        url: "/ogp.png", // publicフォルダに配置
        width: 1200,
        height: 630,
        alt: "KA-I Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@your_twitter_id", // もし持ってたら設定
  },
  robots: "index, follow",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja" className={inter.className}>
      <head>
        <link rel="apple-touch-icon" href="/profile.JPG" />

        <link rel="icon" href="/profile.JPG" sizes="any" />

        <link rel="icon" href="/profile.JPG" type="image/svg+xml" />

        <link rel="apple-touch-icon" href="/profile.JPG" />
      </head>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
