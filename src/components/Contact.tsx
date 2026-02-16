export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-gray-50">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Contact</h2>
        <p className="text-sm text-primary mb-12">稼働条件</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* 稼働条件 */}
          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-6">稼働条件</h3>
            <div className="space-y-4">
              <div className="flex gap-4">
                <span className="text-sm text-gray-500 w-24 shrink-0">
                  職種
                </span>
                <span className="text-sm text-gray-900">
                  プロジェクトマネージャー（PM）、テクニカルディレクター
                </span>
              </div>
              <div className="flex gap-4">
                <span className="text-sm text-gray-500 w-24 shrink-0">
                  雇用形態
                </span>
                <span className="text-sm text-gray-900">フリーランス</span>
              </div>
              <div className="flex gap-4">
                <span className="text-sm text-gray-500 w-24 shrink-0">
                  稼働形態
                </span>
                <span className="text-sm text-gray-900">
                  週3〜5日（リモート可、都内・海外出張対応可）
                </span>
              </div>
            </div>
          </div>

          {/* メッセージ */}
          <div>
            <div className="p-6 bg-white rounded-xl border border-gray-100">
              <p className="text-sm text-gray-600 leading-relaxed">
                「昭和の泥臭い責任感」と「最新のAI生産性」を両立させた、今の時代に最も必要なPM。日本の技術を世界へ繋ぐために、全力で価値を提供します。
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
