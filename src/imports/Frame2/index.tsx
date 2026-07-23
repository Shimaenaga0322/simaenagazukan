export default function Frame() {
  return (
    <div className="bg-white relative size-full">
      <div className="absolute bg-[#d9d9d9] h-[59px] left-0 top-0 w-[393px]" />
      <p className="[word-break:break-word] absolute font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[normal] left-[34px] not-italic text-[12px] text-black top-[22px] whitespace-nowrap">ロゴ</p>
      <div className="absolute bg-[#d9d9d9] h-[85px] left-0 top-[77px] w-[393px]" />
      <p className="[word-break:break-word] absolute font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[normal] left-[19px] not-italic text-[12px] text-black top-[121px] whitespace-nowrap">{`ホーム｜シマエナガとは｜生態｜ギャラリー｜Q&A`}</p>
      <div className="absolute bg-[#d9d9d9] h-[92px] left-0 top-[180px] w-[393px]" />
      <p className="[word-break:break-word] absolute font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[normal] left-[26px] not-italic text-[12px] text-black top-[204px] whitespace-nowrap">シマエナガとは</p>
      <div className="absolute bg-[#d9d9d9] h-[240px] left-[-3px] top-[290px] w-[393px]" />
      <div className="[word-break:break-word] absolute font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[0] left-[14px] not-italic text-[12px] text-black top-[352px] whitespace-nowrap">
        <p className="leading-[normal] mb-0 whitespace-pre">{`シマエナガの写真  `}</p>
        <p className="leading-[normal] whitespace-pre">特徴や名前の由来などの説明文</p>
      </div>
      <div className="absolute bg-[#d9d9d9] h-[70px] left-[-3px] top-[548px] w-[393px]" />
      <div className="[word-break:break-word] absolute font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[0] left-[34px] not-italic text-[12px] text-black top-[553px] whitespace-nowrap">
        <p className="leading-[normal] mb-0">関連ページ</p>
        <p className="leading-[normal] mb-0">・生態</p>
        <p className="leading-[normal]">・ギャラリー</p>
      </div>
      <div className="absolute bg-[#d9d9d9] h-[41px] left-[-3px] top-[636px] w-[393px]" />
      <p className="[word-break:break-word] absolute font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[normal] left-[29px] not-italic text-[12px] text-black top-[649px] whitespace-nowrap">フッター（著作権・お問い合わせ）</p>
    </div>
  );
}