import type { Metadata } from "next";
import "./globals.scss";
import Header from "@/components/Header";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";

export const metadata = {
  title: "트래시스(주)",
  description:
    "AI로 만드는 안전하고 지속가능한 도시 — 재난 안전 대비로 지속 가능한 미래를 만드는 기업",
  viewport: "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no",
  openGraph: {
    title: "트래시스(주)",
    description:
      "AI로 만드는 안전하고 지속가능한 도시 — 재난 안전 대비로 지속 가능한 미래를 만드는 기업",
    url: "https://trasys.net",
    siteName: "트래시스(주)",
    images: [
      {
        url: "https://trasys.net/og-image.png", // 공개용 썸네일 이미지 (보통 /public/og-image.png)
        width: 1200,
        height: 630,
        alt: "트래시스 로고",
      },
    ],
    locale: "ko_KR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "트래시스(주)",
    description:
      "AI로 만드는 안전하고 지속가능한 도시 — 재난 안전 대비로 지속 가능한 미래를 만드는 기업",
    images: ["https://trasys.net/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
