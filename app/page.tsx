"use client";
import AdUnit from "@/components/AdUnit"
import { useState } from "react";

const CATS = [
  { max: 18.5, label: "저체중",    color: "text-blue-400",   bg: "border-blue-500/30 bg-blue-500/5",   tip: "체중을 늘리기 위해 균형 잡힌 식단과 충분한 영양 섭취가 필요합니다." },
  { max: 23,   label: "정상",      color: "text-emerald-400", bg: "border-emerald-500/30 bg-emerald-500/5", tip: "건강한 체중을 유지하고 있습니다. 현재의 건강한 습관을 꾸준히 이어가세요." },
  { max: 25,   label: "과체중",    color: "text-yellow-400",  bg: "border-yellow-500/30 bg-yellow-500/5",  tip: "규칙적인 운동과 균형 잡힌 식사로 이상적인 체중으로 돌아가 보세요." },
  { max: 30,   label: "비만 1단계", color: "text-orange-400",  bg: "border-orange-500/30 bg-orange-500/5",  tip: "전문 의료진의 상담과 함께 체계적인 체중 관리를 시작하는 것을 권장합니다." },
  { max: Infinity, label: "비만 2단계", color: "text-red-400", bg: "border-red-500/30 bg-red-500/5",    tip: "건강을 위해 의사와 상담하여 체중 관리 계획을 세우세요." },
];

export default function BMICalculator() {
  const [unit, setUnit] = useState<"metric" | "imperial">("metric");
  const [h, setH] = useState(""); const [w, setW] = useState("");
  const [ft, setFt] = useState(""); const [inch, setInch] = useState("");
  const [bmi, setBmi] = useState<number | null>(null);

  const calc = () => {
    let hm = 0, wkg = 0;
    if (unit === "metric") { hm = +h / 100; wkg = +w; }
    else { hm = (+ft * 12 + +inch) * 0.0254; wkg = +w * 0.453592; }
    if (!hm || !wkg || hm <= 0 || wkg <= 0) return;
    setBmi(+(wkg / (hm * hm)).toFixed(1));
  };

  const cat = bmi ? CATS.find(c => bmi < c.max) ?? CATS[CATS.length - 1] : null;
  const gaugeLeft = bmi ? `${Math.min(100, Math.max(0, ((bmi - 10) / 30) * 100))}%` : "0%";

  const Field = ({ label, value, setter, placeholder }: { label: string; value: string; setter: (v: string) => void; placeholder: string }) => (
    <div>
      <label className="text-xs text-gray-400 mb-1.5 block">{label}</label>
      <input type="number" value={value} onChange={e => setter(e.target.value)} placeholder={placeholder}
        onKeyDown={e => e.key === "Enter" && calc()}
        className="w-full bg-gray-800 border border-gray-700 rounded-xl px-3 py-3 focus:outline-none focus:border-emerald-500 transition-colors" />
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-950 text-white p-4 font-sans">
      <div className="max-w-md mx-auto pt-10">
        <div className="text-center mb-8">
          <div className="text-5xl mb-3">⚖️</div>
          <h1 className="text-3xl font-bold tracking-tight">BMI 계산기</h1>
          <p className="text-gray-400 mt-1 text-sm">체질량지수 계산 · Body Mass Index</p>
        </div>

        <div className="bg-gray-900 rounded-2xl p-6 space-y-5">
          <div className="flex gap-2">
            {(["metric", "imperial"] as const).map(u => (
              <button key={u} onClick={() => { setUnit(u); setBmi(null); }}
                className={`flex-1 py-2.5 rounded-xl text-sm font-medium transition-colors ${unit === u ? "bg-emerald-500 text-white" : "bg-gray-800 text-gray-300 hover:bg-gray-700"}`}>
                {u === "metric" ? "미터법 (cm / kg)" : "영국식 (ft·in / lb)"}
              </button>
            ))}
          </div>

          {unit === "metric" ? (
            <div className="grid grid-cols-2 gap-3">
              <Field label="키 (cm)" value={h} setter={setH} placeholder="175" />
              <Field label="몸무게 (kg)" value={w} setter={setW} placeholder="70" />
            </div>
          ) : (
            <div className="grid grid-cols-3 gap-3">
              <Field label="피트 (ft)" value={ft} setter={setFt} placeholder="5" />
              <Field label="인치 (in)" value={inch} setter={setInch} placeholder="9" />
              <Field label="파운드 (lb)" value={w} setter={setW} placeholder="154" />
            </div>
          )}

          <button onClick={calc}
            className="w-full bg-emerald-500 hover:bg-emerald-400 text-white font-semibold py-3 rounded-xl transition-colors">
            계산하기
          </button>
        </div>

        {bmi && cat && (
          <div className={`mt-5 rounded-2xl p-6 border ${cat.bg}`}>
            <div className="text-center mb-5">
              <p className="text-6xl font-bold font-mono">{bmi}</p>
              <p className={`text-xl font-semibold mt-1 ${cat.color}`}>{cat.label}</p>
            </div>

            <div className="relative">
              <div className="h-3 rounded-full bg-gradient-to-r from-blue-500 via-emerald-500 via-yellow-500 via-orange-500 to-red-500 mb-1" />
              <div className="absolute top-0 -translate-x-1/2 -translate-y-0.5 w-5 h-5 bg-white rounded-full border-2 border-gray-900 shadow-lg transition-all" style={{ left: gaugeLeft }} />
            </div>
            <div className="flex justify-between text-xs text-gray-500 mb-5 mt-1">
              <span>&lt;18.5</span><span>18.5~23</span><span>23~25</span><span>25~30</span><span>30+</span>
            </div>

            <div className="text-sm text-gray-300 text-center leading-relaxed">{cat.tip}</div>
          </div>
        )}

        <p className="text-center text-xs text-gray-600 mt-10">
          <a href="https://moneystom7.com" className="hover:text-gray-400 transition-colors">← MoneyStom7 홈으로</a>
        </p>
      </div>
    </div>
  );
}
