export default function Hero() {
  return (
    <section className="min-h-[90vh] flex items-center justify-center pt-16">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <p className="text-sm tracking-widest text-primary font-medium mb-4">
          WEB DIRECTOR / CONTENTS PM
        </p>
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-2">
          佐々木 直子
        </h1>
        <p className="text-lg md:text-xl text-gray-500 font-light mb-8">
          Naoko Sasaki
        </p>
        <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed mb-12">
          カオスを整理し、熱量を形にする。
          <br className="hidden md:block" />
          技術と現場、グローバルを繋ぐ伴走型PM
        </p>
        <div className="flex gap-4 justify-center">
          <a
            href="#works"
            className="px-8 py-3 bg-primary text-white rounded-lg text-sm font-medium hover:bg-primary-dark transition-colors"
          >
            実績を見る
          </a>
          <a
            href="#contact"
            className="px-8 py-3 border border-gray-300 text-gray-700 rounded-lg text-sm font-medium hover:border-primary hover:text-primary transition-colors"
          >
            お問い合わせ
          </a>
        </div>
      </div>
    </section>
  );
}
