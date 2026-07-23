import { useState } from "react";

type Page = "home" | "about" | "ecology" | "gallery" | "qa";

const IMGS = {
  hero: "https://images.unsplash.com/photo-1707012747199-fcc4becd6874?w=1080&h=720&fit=crop&auto=format",
  about: "https://images.unsplash.com/photo-1746440256483-264b37b4bb2a?w=1080&h=720&fit=crop&auto=format",
  ecology: "https://images.unsplash.com/photo-1658093232715-936b1bc5c3b6?w=800&h=600&fit=crop&auto=format",
  gallery: "https://images.unsplash.com/photo-1716228940819-24dcb846b463?w=800&h=600&fit=crop&auto=format",
};

const navItems: { label: string; page: Page }[] = [
  { label: "ホーム", page: "home" },
  { label: "シマエナガとは", page: "about" },
  { label: "生態", page: "ecology" },
  { label: "ギャラリー", page: "gallery" },
  { label: "Q&A", page: "qa" },
];

function Header({ current, onNav }: { current: Page; onNav: (p: Page) => void }) {
  return (
    <header
      className="sticky top-0 z-50 w-full"
      style={{ backdropFilter: "blur(20px)", WebkitBackdropFilter: "blur(20px)", background: "rgba(6,13,9,0.85)", borderBottom: "1px solid rgba(74,222,128,0.1)" }}
    >
      <div className="max-w-[393px] mx-auto px-5 h-14 flex items-center justify-between">
        <button onClick={() => onNav("home")} className="flex items-center gap-2 group">
          <span className="text-[#4ade80] text-lg leading-none" style={{ fontFamily: "DM Mono, monospace" }}>✦</span>
          <span className="text-[#ddeee4] text-sm font-semibold tracking-[0.15em] uppercase" style={{ fontFamily: "DM Sans, sans-serif" }}>
            Shimaenaga
          </span>
        </button>
        <nav>
          <ul className="flex items-center gap-4">
            {navItems.filter(n => n.page !== "home").slice(0, 3).map((item) => (
              <li key={item.page}>
                <button
                  onClick={() => onNav(item.page)}
                  className={`text-xs transition-colors tracking-wide ${
                    current === item.page
                      ? "text-[#4ade80]"
                      : "text-[#5a8a6a] hover:text-[#a8d4b8]"
                  }`}
                  style={{ fontFamily: "DM Sans, 'Noto Sans JP', sans-serif" }}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="mt-auto px-5 py-8 border-t" style={{ borderColor: "rgba(74,222,128,0.1)" }}>
      <div className="flex items-center justify-between max-w-[393px] mx-auto">
        <div>
          <p className="text-xs text-[#5a8a6a]" style={{ fontFamily: "DM Mono, monospace" }}>
            © 2026 Shimaenaga Zukan
          </p>
          <p className="text-xs text-[#3a5a45] mt-0.5" style={{ fontFamily: "DM Mono, monospace" }}>
            お問い合わせ: info@shimaenaga.jp
          </p>
        </div>
        <span className="text-[#1a3525] text-3xl select-none" style={{ fontFamily: "Fraunces, serif" }}>✦</span>
      </div>
    </footer>
  );
}

function Tag({ children }: { children: string }) {
  return (
    <span
      className="inline-block px-2 py-0.5 text-[10px] text-[#4ade80] tracking-widest uppercase rounded-full"
      style={{ fontFamily: "DM Mono, monospace", border: "1px solid rgba(74,222,128,0.3)", background: "rgba(74,222,128,0.06)" }}
    >
      {children}
    </span>
  );
}

function HomePage({ onNav }: { onNav: (p: Page) => void }) {
  return (
    <main className="flex-1 px-4 pb-4 space-y-4">

      {/* ── Hero card ── */}
      <div
        className="relative rounded-2xl overflow-hidden"
        style={{ height: 320 }}
      >
        <img src={IMGS.hero} alt="シマエナガ" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0" style={{ background: "linear-gradient(160deg, rgba(6,13,9,0.1) 0%, rgba(6,13,9,0.85) 100%)" }} />
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <Tag>雪の妖精</Tag>
          <h1
            className="mt-2 text-[#ddeee4] leading-tight"
            style={{ fontFamily: "Fraunces, serif", fontSize: 32, fontWeight: 700 }}
          >
            「シマエナガの<br />
            <em style={{ fontStyle: "italic", color: "#4ade80" }}>魅力</em>を知ろう」
          </h1>
          <p className="mt-2 text-[#7ab890] text-xs leading-relaxed" style={{ fontFamily: "DM Sans, 'Noto Sans JP', sans-serif" }}>
            北海道だけに生息する、小さくて白い「雪の妖精」
          </p>
          <button
            onClick={() => onNav("about")}
            className="mt-4 inline-flex items-center gap-2 px-5 py-2 rounded-full text-xs font-medium text-[#060d09] bg-[#4ade80] hover:bg-[#86efac] transition-colors"
            style={{ fontFamily: "DM Sans, sans-serif" }}
          >
            詳しく見る
            <span>→</span>
          </button>
        </div>
      </div>

      {/* ── Bento grid ── */}
      <div className="grid grid-cols-2 gap-3">

        {/* Ecology — tall left */}
        <button
          onClick={() => onNav("ecology")}
          className="relative col-span-1 rounded-xl overflow-hidden group"
          style={{ height: 220 }}
        >
          <img src={IMGS.ecology} alt="生態" className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
          <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(6,13,9,0.9) 0%, transparent 60%)" }} />
          <div className="absolute bottom-0 p-3 text-left">
            <Tag>ecology</Tag>
            <p className="mt-1 text-sm text-[#ddeee4] font-semibold" style={{ fontFamily: "Fraunces, serif" }}>生態</p>
          </div>
        </button>

        {/* Right column: gallery + about stacked */}
        <div className="flex flex-col gap-3">
          <button
            onClick={() => onNav("gallery")}
            className="relative rounded-xl overflow-hidden group"
            style={{ height: 103 }}
          >
            <img src={IMGS.gallery} alt="ギャラリー" className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
            <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(6,13,9,0.85) 0%, transparent 60%)" }} />
            <div className="absolute bottom-0 p-3 text-left">
              <p className="text-xs text-[#4ade80] tracking-widest uppercase" style={{ fontFamily: "DM Mono, monospace" }}>gallery</p>
            </div>
          </button>

          {/* About — glass card */}
          <button
            onClick={() => onNav("about")}
            className="relative rounded-xl overflow-hidden flex flex-col justify-between p-3 text-left group transition-colors"
            style={{ height: 103, background: "rgba(74,222,128,0.07)", border: "1px solid rgba(74,222,128,0.15)" }}
          >
            <Tag>what is</Tag>
            <div>
              <p className="text-sm text-[#ddeee4] font-semibold leading-tight" style={{ fontFamily: "Fraunces, serif" }}>シマエナガとは</p>
              <p className="text-[10px] text-[#5a8a6a] mt-0.5" style={{ fontFamily: "DM Mono, monospace" }}>→ 詳細を見る</p>
            </div>
          </button>
        </div>
      </div>

      {/* ── おすすめ記事 stat bar ── */}
      <div
        className="rounded-xl px-4 py-4"
        style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(74,222,128,0.1)" }}
      >
        <p className="text-[10px] text-[#5a8a6a] tracking-widest uppercase mb-3" style={{ fontFamily: "DM Mono, monospace" }}>おすすめ記事</p>
        <div className="flex gap-3">
          {(["生態", "ギャラリー", "豆知識"] as const).map((label, i) => {
            const pages: Page[] = ["ecology", "gallery", "about"];
            return (
              <button
                key={label}
                onClick={() => onNav(pages[i])}
                className="flex-1 rounded-lg py-3 text-center transition-colors hover:border-[#4ade80]"
                style={{ background: "rgba(74,222,128,0.05)", border: "1px solid rgba(74,222,128,0.1)" }}
              >
                <p className="text-xs text-[#a8d4b8]" style={{ fontFamily: "DM Sans, 'Noto Sans JP', sans-serif" }}>{label}</p>
              </button>
            );
          })}
        </div>
      </div>

      <Footer />
    </main>
  );
}

function AboutPage({ onNav }: { onNav: (p: Page) => void }) {
  return (
    <main className="flex-1 px-4 pb-4">

      {/* Hero image */}
      <div className="relative rounded-2xl overflow-hidden mb-4" style={{ height: 260 }}>
        <img src={IMGS.about} alt="シマエナガの写真" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(6,13,9,0.9) 0%, rgba(6,13,9,0.2) 60%)" }} />
        <div className="absolute top-4 left-4">
          <button
            onClick={() => onNav("home")}
            className="text-xs text-[#5a8a6a] hover:text-[#a8d4b8] transition-colors"
            style={{ fontFamily: "DM Mono, monospace" }}
          >
            ← ホーム
          </button>
        </div>
        <div className="absolute bottom-5 left-5">
          <Tag>species</Tag>
          <h1
            className="mt-2 text-[#ddeee4]"
            style={{ fontFamily: "Fraunces, serif", fontSize: 28, fontWeight: 700, lineHeight: 1.2 }}
          >
            シマエナガとは
          </h1>
        </div>
      </div>

      {/* Description cards */}
      <div className="space-y-3">
        <div
          className="rounded-xl p-5"
          style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(74,222,128,0.1)" }}
        >
          <p className="text-[10px] text-[#4ade80] tracking-widest uppercase mb-2" style={{ fontFamily: "DM Mono, monospace" }}>特徴 / Feature</p>
          <p className="text-sm text-[#a8d4b8] leading-relaxed" style={{ fontFamily: "DM Sans, 'Noto Sans JP', sans-serif" }}>
            シマエナガはエナガの亜種で、北海道のみに生息する小鳥です。体長約14cm。白くふわふわした羽毛と黒い瞳が特徴で、本州のエナガと違い顔に黒い模様がありません。
          </p>
        </div>

        <div
          className="rounded-xl p-5"
          style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(74,222,128,0.1)" }}
        >
          <p className="text-[10px] text-[#4ade80] tracking-widest uppercase mb-2" style={{ fontFamily: "DM Mono, monospace" }}>名前の由来 / Etymology</p>
          <p className="text-sm text-[#a8d4b8] leading-relaxed" style={{ fontFamily: "DM Sans, 'Noto Sans JP', sans-serif" }}>
            「シマ」は北海道（島）を、「エナガ」は尾羽が長いことを指します。冬は羽毛がふくらみ、「雪の妖精」と称されSNSで爆発的な人気を誇ります。
          </p>
        </div>

        {/* Data row */}
        <div
          className="rounded-xl p-4 grid grid-cols-3 gap-3"
          style={{ background: "rgba(74,222,128,0.05)", border: "1px solid rgba(74,222,128,0.12)" }}
        >
          {[
            { label: "体長", value: "14cm" },
            { label: "体重", value: "8g" },
            { label: "生息地", value: "北海道" },
          ].map(({ label, value }) => (
            <div key={label} className="text-center">
              <p className="text-[#4ade80] font-bold" style={{ fontFamily: "Fraunces, serif", fontSize: 20 }}>{value}</p>
              <p className="text-[10px] text-[#5a8a6a] mt-0.5" style={{ fontFamily: "DM Mono, monospace" }}>{label}</p>
            </div>
          ))}
        </div>

        {/* 関連ページ */}
        <div
          className="rounded-xl p-4"
          style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(74,222,128,0.1)" }}
        >
          <p className="text-[10px] text-[#5a8a6a] tracking-widest uppercase mb-3" style={{ fontFamily: "DM Mono, monospace" }}>関連ページ</p>
          <div className="space-y-2">
            {([{ page: "ecology" as Page, label: "生態" }, { page: "gallery" as Page, label: "ギャラリー" }]).map(({ page, label }) => (
              <button
                key={page}
                onClick={() => onNav(page)}
                className="w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-sm text-[#a8d4b8] hover:text-[#4ade80] transition-colors"
                style={{ fontFamily: "DM Sans, 'Noto Sans JP', sans-serif", background: "rgba(74,222,128,0.05)", border: "1px solid rgba(74,222,128,0.08)" }}
              >
                {label}
                <span className="text-[#4ade80] text-xs">→</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}

function PlaceholderPage({ title, onNav }: { title: string; onNav: (p: Page) => void }) {
  return (
    <main className="flex-1 px-4 pb-4">
      <div className="rounded-2xl overflow-hidden mb-4 flex items-end" style={{ height: 120, background: "rgba(74,222,128,0.06)", border: "1px solid rgba(74,222,128,0.12)" }}>
        <div className="p-5">
          <button onClick={() => onNav("home")} className="text-xs text-[#5a8a6a] hover:text-[#a8d4b8] block mb-2" style={{ fontFamily: "DM Mono, monospace" }}>← ホーム</button>
          <h1 className="text-[#ddeee4]" style={{ fontFamily: "Fraunces, serif", fontSize: 26, fontWeight: 700 }}>{title}</h1>
        </div>
      </div>
      <div className="rounded-xl p-8 text-center" style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(74,222,128,0.08)" }}>
        <p className="text-4xl mb-4">🐦</p>
        <p className="text-sm text-[#5a8a6a]" style={{ fontFamily: "DM Sans, 'Noto Sans JP', sans-serif" }}>このページは準備中です</p>
        <p className="text-xs text-[#3a5a45] mt-1" style={{ fontFamily: "DM Mono, monospace" }}>coming soon — 2026</p>
      </div>
      <Footer />
    </main>
  );
}

export default function App() {
  const [page, setPage] = useState<Page>("home");

  const renderPage = () => {
    switch (page) {
      case "home":    return <HomePage onNav={setPage} />;
      case "about":   return <AboutPage onNav={setPage} />;
      case "ecology": return <PlaceholderPage title="生態" onNav={setPage} />;
      case "gallery": return <PlaceholderPage title="ギャラリー" onNav={setPage} />;
      case "qa":      return <PlaceholderPage title="Q&A" onNav={setPage} />;
    }
  };

  return (
    <div className="min-h-screen bg-background flex justify-center" style={{ fontFamily: "DM Sans, sans-serif" }}>
      <div className="w-full max-w-[393px] min-h-screen flex flex-col">
        <Header current={page} onNav={setPage} />
        <div className="flex-1 flex flex-col pt-4">
          {renderPage()}
        </div>
      </div>
    </div>
  );
}
