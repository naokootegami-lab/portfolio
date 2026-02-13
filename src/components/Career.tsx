const careers = [
  {
    period: "2001年4月 〜 2005年3月",
    company: "アニメーション制作会社",
    companyNote: "（従業員数：約200名）",
    role: "WEBプロデューサー・ディレクター",
    industry: "IT・通信系",
    employment: "契約社員",
    description:
      "アニメ作品のWEBプロデューサー・ディレクターの業務に4年にわたり従事。制作・宣伝の実務経験を積む。",
    type: "正規" as const,
  },
  {
    period: "2005年4月 〜 2005年12月",
    company: "映画配給・広告制作会社",
    companyNote: "（従業員数：約15名）",
    role: "映画の宣伝担当",
    industry: "広告・制作",
    employment: "正社員",
    description: "映画の宣伝担当として、宣伝・広報業務を担当。",
    type: "正規" as const,
  },
  {
    period: "2006年 〜 現在",
    company: "フリーランス",
    companyNote: "",
    role: "Webディレクター / コンテンツPM",
    industry: "Web制作・PM・ライティング",
    employment: "個人事業主",
    description:
      "WEBディレクション、デザイン、ライティング、国際イベントPM、中小企業DX支援など幅広く活動。大型アニメIPのWeb構築やSNS運用、英国での国際イベントマネジメントなど実績多数。",
    type: "フリーランス" as const,
  },
];

export default function Career() {
  return (
    <section id="career" className="py-24">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Career</h2>
        <p className="text-sm text-primary mb-12">経歴</p>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-6 top-0 bottom-0 w-px bg-gray-200" />

          <div className="space-y-10">
            {careers.map((career) => (
              <div key={career.period} className="relative pl-12 md:pl-16">
                {/* Timeline dot */}
                <div
                  className={`absolute left-2.5 md:left-4.5 top-1.5 w-3 h-3 rounded-full border-2 ${
                    career.type === "フリーランス"
                      ? "bg-primary border-primary"
                      : "bg-white border-primary"
                  }`}
                />

                <p className="text-xs text-gray-500 mb-1">{career.period}</p>
                <h3 className="text-lg font-bold text-gray-900">
                  {career.company}
                  {career.companyNote && (
                    <span className="text-sm font-normal text-gray-500">
                      {career.companyNote}
                    </span>
                  )}
                </h3>
                <div className="flex flex-wrap gap-x-4 text-xs text-gray-500 mb-2">
                  <span>業種: {career.industry}</span>
                  <span>雇用形態: {career.employment}</span>
                </div>
                <p className="text-sm text-primary font-medium mb-2">
                  {career.role}
                </p>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {career.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* 資格 */}
        <div className="mt-16 pt-8 border-t border-gray-200">
          <h3 className="text-base font-bold text-gray-900 mb-4">
            保有資格・その他
          </h3>
          <div className="flex flex-wrap gap-3">
            <span className="text-sm px-4 py-2 rounded-lg bg-gray-50 border border-gray-200 text-gray-700">
              普通自動車運転免許
            </span>
            <span className="text-sm px-4 py-2 rounded-lg bg-gray-50 border border-gray-200 text-gray-700">
              英語: 中級（日常会話・実務対応可）
            </span>
            <span className="text-sm px-4 py-2 rounded-lg bg-gray-50 border border-gray-200 text-gray-700">
              学歴: 東京工芸大学 芸術学部 映像学科 卒業
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
