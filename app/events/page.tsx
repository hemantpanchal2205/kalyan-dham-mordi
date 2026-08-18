import Image from "next/image";
import Link from "next/link";

const eventHighlights = [
  "कल्लाजी महाराज की विशेष पूजा एवं आरती",
  "ध्वजा एवं धार्मिक अनुष्ठान",
  "भजन-कीर्तन एवं लोकगीत",
  "कल्लाजी की वीरगाथाओं का वाचन",
  "शोभायात्रा एवं धार्मिक जुलूस",
  "प्रसाद वितरण",
  "भंडारे का आयोजन (महाप्रसादी)",
  "मेले एवं सांस्कृतिक कार्यक्रम",
];

const schedule = [
  { time: "प्रातः 10:00 बजे", title: "हवन एवं यज्ञ", desc: "वैदिक मंत्रोच्चार के साथ पावन आहुति एवं पूजन" },
  { time: "दोपहर 12:00 बजे", title: "भजन व सुंदरकाण्ड पाठ", desc: "भक्तों द्वारा संगीतमय भजन एवं सुंदरकाण्ड" },
  { time: "दोपहर 01:00 बजे", title: "भव्य महाआरती", desc: "श्री कल्लाजी महाराज की दिव्य महाआरती व दर्शन" },
  { time: "दोपहर 02:00 बजे", title: "महाप्रसादी (भंडारा)", desc: "सभी श्रद्धालुओं के लिए सामूहिक महाप्रसाद वितरण" },
];

export default function Events() {
  return (
    <>
      {/* Hero Header */}
      <section className="bg-diya-glow bg-maroon-dark py-16 sm:py-20 text-center">
        <div className="mx-auto max-w-4xl px-4">
          <p className="uppercase tracking-[0.3em] text-marigold text-xs sm:text-sm mb-3 font-semibold">
            कल्याण धाम मोरडी • विशेष वार्षिकोत्सव
          </p>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl text-ivory">
            श्री कल्लाजी राठौड़ जन्मोत्सव
          </h1>
          <p className="mt-4 text-sandal/85 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
            वीरता, त्याग, धर्मनिष्ठा और मातृभूमि के प्रति समर्पण के अमर प्रतीक श्री कल्लाजी राठौड़ महाराज का पावन जन्मोत्सव।
          </p>
          <div className="mt-6 inline-flex items-center gap-3 rounded-full bg-marigold px-6 py-2.5 text-sm sm:text-base font-bold text-maroon-dark shadow-lg">
            <span>📅</span> 20 अगस्त • सुबह 10:00 बजे से
          </div>
        </div>
      </section>
      <div className="spire-divider" aria-hidden="true" />

      {/* Main Content Section */}
      <section className="bg-ivory py-16 sm:py-20">
        <div className="mx-auto max-w-5xl px-4 space-y-12">
          
          {/* 1. Introduction Card */}
          <div className="rounded-3xl bg-white border border-gold/40 p-8 sm:p-12 shadow-sm">
            <h2 className="font-display text-2xl sm:text-3xl text-maroon mb-5 flex items-center gap-3">
              <span className="text-3xl">🪔</span> श्री कल्लाजी राठौड़ जन्मोत्सव
            </h2>
            <p className="text-ink/80 text-base sm:text-lg leading-relaxed">
              श्री कल्लाजी राठौड़ राजस्थान की वीरभूमि की गौरवशाली परंपरा से जुड़े महान योद्धा और लोकदेवता हैं। उनकी वीरता, त्याग, धर्मनिष्ठा और मातृभूमि के प्रति समर्पण की गाथा आज भी राजस्थान और आसपास के क्षेत्रों में श्रद्धा एवं सम्मान के साथ स्मरण की जाती है। उनके जन्मोत्सव का आयोजन इसी वीर परंपरा और लोकआस्था को जीवंत रखने का महत्वपूर्ण अवसर है।
            </p>
          </div>

          {/* 2. Schedule Grid */}
          <div className="rounded-3xl bg-sandal/40 border border-gold/40 p-8 sm:p-10">
            <div className="text-center mb-8">
              <p className="text-marigold-dark font-semibold text-xs sm:text-sm uppercase tracking-widest">
                20 अगस्त • पावन कार्यक्रम
              </p>
              <h3 className="font-display text-2xl sm:text-3xl text-maroon mt-1">
                जन्मोत्सव कार्यक्रम सारणी
              </h3>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {schedule.map((s, idx) => (
                <div key={idx} className="rounded-2xl bg-ivory border border-gold/30 p-5 text-center shadow-sm hover:border-marigold transition-colors">
                  <span className="inline-block px-3 py-1 rounded-full bg-marigold/20 text-maroon-dark text-xs font-bold mb-2">
                    {s.time}
                  </span>
                  <h4 className="font-display text-lg text-maroon mb-1">
                    {s.title}
                  </h4>
                  <p className="text-ink/70 text-xs leading-relaxed">
                    {s.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* 3. Significance & Inspiration */}
          <div className="grid md:grid-cols-2 gap-8">
            <div className="rounded-3xl bg-white border border-gold/40 p-8 shadow-sm">
              <h3 className="font-display text-2xl text-maroon mb-4 flex items-center gap-2">
                <span>✨</span> जन्मोत्सव का महत्व
              </h3>
              <p className="text-ink/75 leading-relaxed text-sm sm:text-base mb-4">
                कल्लाजी राठौड़ का जन्मोत्सव श्रद्धालुओं के लिए केवल एक धार्मिक आयोजन नहीं, बल्कि वीरता, त्याग, कर्तव्य और संस्कारों का उत्सव है। इस अवसर पर भक्तजन कल्लाजी के जीवन और उनके आदर्शों को याद करते हैं तथा उनके प्रति अपनी श्रद्धा व्यक्त करते हैं।
              </p>
              <p className="text-ink/75 leading-relaxed text-sm sm:text-base">
                जन्मोत्सव के अवसर पर मंदिरों एवं पूजा स्थलों में विशेष पूजा-अर्चना की जाती है। श्रद्धालु दर्शन करने के लिए दूर-दूर से आते हैं और कल्लाजी के चरणों में श्रद्धा अर्पित करते हैं।
              </p>
            </div>

            <div className="rounded-3xl bg-white border border-gold/40 p-8 shadow-sm">
              <h3 className="font-display text-2xl text-maroon mb-4 flex items-center gap-2">
                <span>🛡️</span> वीरता और त्याग की प्रेरणा
              </h3>
              <p className="text-ink/75 leading-relaxed text-sm sm:text-base mb-4">
                कल्लाजी राठौड़ का जीवन साहस और त्याग का प्रतीक माना जाता है। चित्तौड़ की रक्षा के लिए उनके द्वारा किए गए बलिदान की गाथा राजस्थान की लोकस्मृति में आज भी जीवित है।
              </p>
              <p className="text-ink/75 leading-relaxed text-sm sm:text-base">
                उनके जीवन से हमें कर्तव्य के प्रति निष्ठा, मातृभूमि के प्रति प्रेम, साहस और आत्मसम्मान की प्रेरणा मिलती है।
              </p>
            </div>
          </div>

          {/* 4. Major Event Highlights */}
          <div className="rounded-3xl bg-ivory border-2 border-gold/40 p-8 sm:p-10 shadow-md">
            <h3 className="font-display text-2xl sm:text-3xl text-maroon mb-6 text-center">
              जन्मोत्सव के प्रमुख आयोजन
            </h3>
            <p className="text-ink/75 text-center text-sm sm:text-base mb-8 max-w-2xl mx-auto">
              जन्मोत्सव के दौरान विभिन्न स्थानों पर स्थानीय परंपराओं के अनुसार कई कार्यक्रम आयोजित किए जाते हैं:
            </p>

            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
              {eventHighlights.map((item, i) => (
                <div key={i} className="flex items-center gap-3 p-4 rounded-xl bg-sandal/30 border border-gold/30">
                  <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-maroon text-marigold text-xs font-bold">
                    {i + 1}
                  </span>
                  <span className="text-ink/85 text-sm font-medium">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            <p className="text-center text-xs sm:text-sm text-ink/65 mt-6 italic">
              * इन आयोजनों में बच्चे, युवा, बुजुर्ग और बड़ी संख्या में श्रद्धालु उत्साहपूर्वक भाग लेते हैं।
            </p>
          </div>

          {/* 5. Devotion & Tradition */}
          <div className="rounded-3xl bg-white border border-gold/40 p-8 sm:p-10 shadow-sm">
            <h3 className="font-display text-2xl text-maroon mb-4 flex items-center gap-2">
              <span>🛕</span> श्रद्धा और लोकपरंपरा
            </h3>
            <p className="text-ink/75 leading-relaxed text-sm sm:text-base mb-4">
              समय के साथ कल्लाजी राठौड़ की वीरगाथा लोकआस्था का महत्वपूर्ण हिस्सा बन गई। राजस्थान के विभिन्न क्षेत्रों में उनके मंदिर एवं पूजा स्थल हैं, जहाँ श्रद्धालु अपनी आस्था के साथ उनका स्मरण करते हैं। रनेला को कल्लाजी से जुड़े प्रमुख धार्मिक स्थलों में माना जाता है।
            </p>
            <p className="text-ink/75 leading-relaxed text-sm sm:text-base">
              कल्लाजी जन्मोत्सव इसी लोकपरंपरा को आगे बढ़ाने और आने वाली पीढ़ियों को उनके शौर्य एवं आदर्शों से परिचित कराने का अवसर प्रदान करता है।
            </p>
          </div>

          {/* 6. Pledge & Devotional Close */}
          <div className="rounded-3xl bg-gradient-to-r from-maroon-dark via-maroon to-maroon-dark text-ivory p-8 sm:p-12 text-center border-2 border-gold/50 shadow-2xl space-y-5">
            <span className="inline-block text-marigold uppercase tracking-widest text-xs sm:text-sm font-bold bg-white/10 px-4 py-1.5 rounded-full border border-gold/30">
              हमारा संकल्प
            </span>
            <p className="text-sandal/90 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed">
              कल्लाजी राठौड़ के जीवन और उनके आदर्शों से प्रेरणा लेते हुए हम वीरता, सेवा, संस्कार, एकता और समाज के प्रति जिम्मेदारी की भावना को आगे बढ़ाने का संकल्प लेते हैं।
            </p>
            <div className="pt-4 border-t border-gold/30 space-y-2">
              <h3 className="font-display text-2xl sm:text-3xl lg:text-4xl text-marigold">
                जय श्री कल्लाजी महाराज।
              </h3>
              <p className="font-display text-xl sm:text-2xl text-ivory/90">
                वीर कल्लाजी राठौड़ अमर रहें।
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* Booking & Contact Section */}
      <section className="bg-maroon py-14">
        <div className="mx-auto max-w-2xl px-4 text-center">
          <h2 className="font-display text-2xl sm:text-3xl text-ivory mb-3">
            विशेष पूजा व सेवा सहयोग
          </h2>
          <p className="text-sandal/80 mb-6 text-sm sm:text-base">
            जन्मोत्सव, हवन या विशेष पूजा सेवा हेतु मंदिर कार्यालय से संपर्क करें।
          </p>
          <a
            href="tel:+917850918258"
            className="inline-flex items-center gap-2 rounded-full bg-marigold px-8 py-3.5 font-bold text-maroon-dark hover:bg-marigold-light transition-all shadow-lg text-base"
          >
            <span>📞</span> +91 78509 18258
          </a>
        </div>
      </section>
    </>
  );
}
