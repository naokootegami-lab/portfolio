const works = [
  {
    title: "国際イベント企画・運営",
    subtitle: "英国 国際イベントマネジメント",
    role: "プロジェクトマネージャー",
    period: "2025年",
    team: "日英関係者 約20名",
    description:
      "英国の研究機関にて開催された国際イベントのPMを担当。日本の中小企業経営者に随行し、イベント企画・設営・運営・現地調整を完遂。日英のステークホルダー間の調整を積み重ね、プロジェクトを成功へ導いた。",
    tags: ["PM", "グローバル", "イベント企画", "英語対応"],
    env: "英語・日本語、現地対応",
    url: undefined,
  },
  {
    title: "大型アニメIP デジタルプロモーション",
    subtitle: "劇場版アニメ作品の公式サイト・SNS運用",
    role: "Webディレクター / 制作",
    period: "2022年〜2023年",
    team: "制作チーム 5名",
    description:
      "劇場版アニメ作品の公式サイト構成立案、SNS運用、バナー制作を統括。制作・配信・宣伝の各フェーズを理解した「ズレのない」アウトプットを提供。エンドロール掲載実績あり。",
    tags: ["Webディレクション", "SNS運用", "バナー制作", "大型IP"],
    env: "WordPress、Photoshop、SNS各種",
    url: undefined,
  },
  {
    title: "ネットニュース ライティング・取材",
    subtitle: "エンタメ分野のニュース記事・インタビュー",
    role: "ライター / インタビュアー",
    period: "2012年〜2020年",
    team: "1名（単独）",
    description:
      "アニメ・映画・エンタメ分野のネットニュース記事を多数執筆。セレブへのインタビューやイベントレポートの取材・執筆を担当。Yahoo!ニュースのトピックス入りやLINE NEWSでの万バズなど、拡散力のある記事を多数生み出した実績あり。",
    tags: ["ライティング", "インタビュー", "Yahoo!トピックス", "万バズ"],
    env: "取材・執筆・編集・SNS配信",
    url: undefined,
  },
  {
    title: "国際共同研究機関 コーポレートサイト",
    subtitle: "英国拠点の研究機関サイトを構成からコーディングまで一貫担当",
    role: "Web構成 / デザイン / コーディング",
    period: "2024年〜2025年",
    team: "1名（単独）",
    description:
      "英国に本拠を置く国際共同研究機関のコーポレートサイトを構成・デザイン・コーディングまで一貫して担当。日本の製造技術と海外の研究機関を繋ぐ企業理念を、グローバルに伝わるWebサイトとして構築。",
    tags: ["Web構成", "デザイン", "コーディング", "コーポレートサイト"],
    env: "Wix、多言語対応（日英）",
    url: "https://earthmk2-lab.com/",
  },
  {
    title: "サブスクリプションサービス Webサイト",
    subtitle: "月額制サービスサイトのコーディング",
    role: "Webコーディング",
    period: "2024年",
    team: "2名",
    description:
      "月額制サブスクリプションサービスのWebサイトのコーディングを担当。サービスの魅力を伝えるデザインを忠実に実装。",
    tags: ["コーディング", "サブスクリプション", "Web制作"],
    env: "HTML、CSS、JavaScript",
    url: "https://withwine.jp/",
  },
  {
    title: "精密加工メーカー 英語版公式サイト",
    subtitle: "製造業の技術力を海外に発信する英語サイト制作（英語サイトのみ担当）",
    role: "サイトデザイン / 英文作成 / 海外PRディレクション",
    period: "2025年",
    team: "1名（単独）",
    description:
      "精密加工を手がける製造企業の英語版公式サイトをWixで制作（テンプレート使用）。英文コンテンツの作成、海外へのPRポイントの整理など、日本の町工場が持つ優れた技術力を海外に発信するためのサイトを構築。",
    tags: ["Wix", "英語サイト", "英文作成", "海外PR"],
    env: "Wix（テンプレート使用）、英文ライティング",
    url: "https://thinsection.net/en/",
  },
  {
    title: "中小企業DX支援・Web制作",
    subtitle: "製造業のデジタル化をゼロから伴走",
    role: "テクニカルディレクター",
    period: "2010年〜現在",
    team: "クライアント複数社",
    description:
      "製造業のWebサイト構築（Wix/WordPress）、英語版作成、サーバ管理。Google Workspace導入における社内担当として、業務フローのデジタル化を伴走支援。現場の「使いやすさ」を最優先したIT環境を構築。",
    tags: ["WordPress", "Wix", "GWS導入", "多言語対応"],
    env: "WordPress、Wix、Google Workspace",
    url: undefined,
  },
  {
    title: "昭和のAIRMAIL",
    subtitle: "バイブコーディング（Vibe Coding）で自主開発",
    role: "企画 / 開発",
    period: "2025年",
    team: "1名（個人開発）",
    description:
      "効率化が進む現代に、あえて「待つ楽しさ」を届ける交換日記アプリ。Claude Code（Vibe Coding）を活用し、コンセプト設計からアプリの実装まで個人プロジェクトとして一貫して手掛けた。",
    tags: ["Claude Code", "Vibe Coding", "アプリ開発", "自主制作"],
    env: "Claude Code、Next.js、TypeScript",
    url: undefined,
  },
  {
    title: "Portfolio Site",
    subtitle: "本ポートフォリオサイト — Claude Codeで構築",
    role: "企画 / デザイン / 開発",
    period: "2025年",
    team: "1名（個人開発）",
    description:
      "このポートフォリオサイト自体もClaude Codeを活用し、Next.js + TypeScript + Tailwind CSSで構築。AIとの対話を通じて、レスポンシブ対応のモダンなデザインを短時間で実装。",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Claude Code"],
    env: "Claude Code、Next.js、TypeScript、Tailwind CSS",
    url: undefined,
  },
];

export default function Works() {
  return (
    <section id="works" className="py-24">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Works</h2>
        <p className="text-sm text-primary mb-12">プロジェクト実績</p>

        <div className="space-y-8">
          {works.map((work, i) => (
            <div
              key={work.title}
              className="bg-white rounded-xl border border-gray-100 p-8 hover:shadow-md transition-shadow"
            >
              <div className="flex items-start gap-6">
                <span className="hidden md:flex items-center justify-center w-12 h-12 rounded-full bg-accent text-primary font-bold text-lg shrink-0">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="flex-1">
                  <p className="text-xs text-primary font-medium mb-1">
                    {work.subtitle}
                  </p>
                  <h3 className="text-xl font-bold text-gray-900 mb-1">
                    {work.title}
                  </h3>
                  <div className="flex flex-wrap gap-x-6 gap-y-1 text-xs text-gray-500 mb-4">
                    <span>期間: {work.period}</span>
                    <span>役割: {work.role}</span>
                    <span>規模: {work.team}</span>
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed mb-3">
                    {work.description}
                  </p>
                  <p className="text-xs text-gray-400 mb-4">
                    環境 / 工程: {work.env}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {work.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-3 py-1 rounded-full bg-gray-100 text-gray-600"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  {work.url && (
                    <a
                      href={work.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-sm text-primary hover:text-primary-dark transition-colors"
                    >
                      サイトを見る →
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
