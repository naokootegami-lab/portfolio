const skillCategories = [
  {
    category: "PM / ディレクション",
    skills: [
      "マイルストーン管理",
      "ガントチャート作成",
      "現場調整",
      "SNS運用戦略",
      "英語対応",
      "ステークホルダー調整",
    ],
  },
  {
    category: "Web開発",
    skills: [
      "WordPress（フルスクラッチ）",
      "Wix（多言語対応）",
      "バイブコーディング（Vibe Coding）",
      "サーバー・ドメイン管理",
      "AI活用制作（AIプロンプター）",
    ],
  },
  {
    category: "デザイン・編集",
    skills: [
      "UI/UXデザイン",
      "Photoshop",
      "バナー作成",
      "ライティング",
      "インタビュー",
      "DTPデザイン",
      "ロゴデザイン",
    ],
  },
  {
    category: "IT基盤",
    skills: [
      "Google Workspace導入・運用",
      "サーバー管理",
      "ドメイン管理",
      "業務フローDX化",
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-gray-50">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Skills</h2>
        <p className="text-sm text-primary mb-12">スキル・テクニカル</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((cat) => (
            <div key={cat.category}>
              <h3 className="text-base font-bold text-gray-900 mb-4">
                {cat.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-sm px-4 py-2 rounded-lg bg-white border border-gray-200 text-gray-700"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
