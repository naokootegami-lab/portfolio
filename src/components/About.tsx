const strengths = [
  {
    title: "現場主義のPM",
    description:
      "英国での国際イベントPM実績。ステークホルダーの意図を汲み取り、マイルストーンを確実に完遂させる推進力。",
    icon: "🎯",
  },
  {
    title: "エンタメ×デジタル",
    description:
      "制作会社・映画配信会社・フリーランスの3視点を保有。IPの価値を理解した一貫ディレクション。",
    icon: "🎬",
  },
  {
    title: "話が通じるDX支援",
    description:
      "GWS導入やWix/WordPress構築を通じ、ITが苦手な現場をサポート。運用のしやすさを重視した提案。",
    icon: "💡",
  },
  {
    title: "グローバル対応",
    description:
      "海外イベントの現地対応や英語版Webサイト作成。日本のコンテンツや技術を海外へ届ける架け橋。",
    icon: "🌍",
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-gray-50">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">About</h2>
        <p className="text-sm text-primary mb-12">強み・提供価値</p>

        <p className="text-base text-gray-600 leading-relaxed max-w-3xl mb-16">
          アニメ業界での大型IPのデジタル宣伝・Web構築で培ったクリエイティブ視点と、中小企業の海外進出（英国）をゼロから成功させたプロジェクトマネジメント力を併せ持つ。最新のAIツールを駆使した爆速のアウトプットと、泥臭いステークホルダー調整力が最大の武器。
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {strengths.map((item) => (
            <div
              key={item.title}
              className="bg-white rounded-xl p-6 border border-gray-100 hover:border-primary/30 transition-colors"
            >
              <span className="text-2xl mb-3 block">{item.icon}</span>
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
