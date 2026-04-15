import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = {
  title: "BMI 계산기 — MoneyStom7",
  description: "키와 몸무게로 체질량지수(BMI)를 계산하고 건강 상태를 확인하세요.",
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="ko"><body>{children}</body></html>;
}
