import BMICalculatorClient from "@/components/BMICalculatorClient";
import Script from "next/script";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "BMI 계산기 (BMI Calculator)",
  url: "https://bmi.moneystom7.com",
  description: "키와 몸무게로 체질량지수를 계산하는 무료 건강 계산기",
  applicationCategory: "UtilityApplication",
  operatingSystem: "Any",
  offers: { "@type": "Offer", price: "0", priceCurrency: "KRW" },
  inLanguage: ["ko", "en"],
};

export default function Page() {
  return (
    <div className="min-h-screen bg-gray-950 text-white p-4 font-sans">
      <Script id="json-ld" type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <BMICalculatorClient />

      <section className="max-w-md mx-auto mt-16 space-y-10 text-sm text-gray-400 pb-16">
        <div>
          <h2 className="text-white text-base font-semibold mb-3">BMI 계산기란?</h2>
          <p>
            BMI(Body Mass Index, 체질량지수) 계산기는 키와 몸무게를 입력하면 체질량지수를 자동으로
            계산하고 저체중·정상·과체중·비만 여부를 알려주는 무료 건강 계산기입니다.
            미터법(cm/kg)과 영국식(ft/lb) 단위를 모두 지원합니다.
          </p>
        </div>

        <div>
          <h2 className="text-white text-base font-semibold mb-3">BMI 기준표 (한국 기준)</h2>
          <table className="w-full text-xs border-collapse">
            <thead>
              <tr className="text-gray-300">
                <th className="text-left py-1.5 border-b border-gray-800">분류</th>
                <th className="text-right py-1.5 border-b border-gray-800">BMI 범위</th>
              </tr>
            </thead>
            <tbody className="space-y-1">
              <tr><td className="py-1.5 text-blue-400">저체중</td><td className="text-right">18.5 미만</td></tr>
              <tr><td className="py-1.5 text-emerald-400">정상</td><td className="text-right">18.5 ~ 22.9</td></tr>
              <tr><td className="py-1.5 text-yellow-400">과체중</td><td className="text-right">23.0 ~ 24.9</td></tr>
              <tr><td className="py-1.5 text-orange-400">비만 1단계</td><td className="text-right">25.0 ~ 29.9</td></tr>
              <tr><td className="py-1.5 text-red-400">비만 2단계</td><td className="text-right">30.0 이상</td></tr>
            </tbody>
          </table>
          <p className="mt-2 text-xs text-gray-500">※ 세계보건기구(WHO) 기준과 다를 수 있습니다. 한국은 23 이상을 과체중으로 분류합니다.</p>
        </div>

        <div>
          <h2 className="text-white text-base font-semibold mb-3">자주 묻는 질문 (FAQ)</h2>
          <dl className="space-y-4">
            <div>
              <dt className="text-gray-300 font-medium">BMI 계산 공식은 무엇인가요?</dt>
              <dd className="mt-1">BMI = 체중(kg) ÷ 키(m)² 입니다. 예를 들어 키 170cm, 몸무게 65kg이면 BMI = 65 ÷ (1.7)² = 22.5입니다.</dd>
            </div>
            <div>
              <dt className="text-gray-300 font-medium">BMI가 정상이면 건강한 건가요?</dt>
              <dd className="mt-1">BMI는 건강의 일부 지표일 뿐입니다. 근육량, 체지방률, 복부 비만 등을 함께 고려해야 합니다. 정확한 건강 평가는 의료 전문가와 상담하세요.</dd>
            </div>
            <div>
              <dt className="text-gray-300 font-medium">한국 BMI 기준이 서양과 다른 이유는?</dt>
              <dd className="mt-1">아시아인은 같은 BMI에서도 서양인보다 체지방률이 높고 대사 질환 위험이 높은 경향이 있어, 한국·일본 등은 23 이상을 과체중으로 설정합니다.</dd>
            </div>
          </dl>
        </div>
      </section>
    </div>
  );
}
