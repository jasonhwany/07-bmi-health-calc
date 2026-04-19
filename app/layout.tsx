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
  description: "키·몸무게로 체질량지수와 건강 상태를 확인. Free BMI calculator.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "BMI 계산기 — MoneyStom7",
    description: "키·몸무게로 체질량지수와 건강 상태를 확인. Free BMI calculator.",
    url: BASE_URL,
    siteName: "MoneyStom7",
    locale: "ko_KR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "BMI 계산기 — MoneyStom7",
    description: "키·몸무게로 체질량지수와 건강 상태를 확인. Free BMI calculator.",
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
          src="https://www.googletagmanager.com/gtag/js?id=G-GN51TN6PS4"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-GN51TN6PS4');
          `}
        </Script>
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
