import type { Metadata } from "next"
import Script from "next/script"
import "./globals.css"

const BASE_URL = "https://bmi.moneystom7.com"

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "BMI 계산기 — MoneyStom7",
    template: "%s | MoneyStom7",
  },
  description: "키·몸무게로 체질량지수와 건강 상태를 확인. 무료 BMI 계산기. Free BMI calculator. Calculate your Body Mass Index with height and weight. Check your health status.",
  keywords: ["BMI 계산기", "BMI Calculator", "무료", "온라인", "계산기", "BMI calculator", "body mass index", "health calculator", "weight calculator"],
  authors: [{ name: "MoneyStom7" }],
  alternates: { canonical: "/" },
  openGraph: {
    title: "BMI 계산기 — MoneyStom7",
    description: "키·몸무게로 체질량지수와 건강 상태를 확인. 무료 BMI 계산기.",
    url: BASE_URL,
    siteName: "MoneyStom7",
    locale: "ko_KR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "BMI 계산기 — MoneyStom7",
    description: "키·몸무게로 체질량지수와 건강 상태를 확인. 무료 BMI 계산기.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-snippet": -1, "max-image-preview": "large" },
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body>
        {children}
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8414331859152952"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
      </body>
    </html>
  )
}
