
import Image from "next/image";

const values = [
  {
    title: "भक्ति",
    desc: "प्रतिदिन आरती, भजन-कीर्तन और सत्संग के माध्यम से भक्ति भाव को सशक्त बनाना।",
  },
  {
    title: "सेवा",
    desc: "अन्नदान, शिक्षा और सामाजिक सेवा कार्यों के माध्यम से समाज की सेवा करना।",
  },
  {
    title: "परंपरा",
    desc: "प्राचीन वैदिक परंपराओं और मंदिर की रीति-रिवाजों का संरक्षण करना।",
  },
];

export default function About() {
  return (
    <>
      <section className="bg-maroon-dark py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <p className="uppercase tracking-[0.3em] text-marigold text-xs sm:text-sm mb-3">
            हमारा परिचय
          </p>
          <h1 className="font-display text-4xl sm:text-5xl text-ivory">
            हमारे बारे में
          </h1>
        </div>
      </section>
      <div className="spire-divider" aria-hidden="true" />

      <section className="bg-ivory py-16">
        <div className="mx-auto max-w-6xl px-4 grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative h-72 sm:h-96 rounded-2xl overflow-hidden border border-gold/30 shadow-lg order-2 lg:order-1">
            <Image
              src="/images/image-3.jpeg"
              alt="मंदिर का मुख्य द्वार"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
          <div className="order-1 lg:order-2">
            <p className="text-marigold-dark font-semibold tracking-wide text-sm uppercase">
              हमारा इतिहास
            </p>
            <h2 className="font-display text-3xl sm:text-4xl text-maroon mt-2 mb-5">
              श्रद्धा से बना यह पावन धाम
            </h2>
            <p className="text-ink/75 leading-relaxed mb-4">
              श्री काली कल्याणगढ़ धाम मोरडी़
              गढ़ी परतापुर जिला बांसवाड़ा की पावन धरा पर स्थित हे
              यह धाम मोरडी़ 50 से 60 वर्ष पुराना हे
              यहाँ पर स्वयं श्री कल्लाजी बावजी ने अपने भक्त को सपने में दर्शन दे कर अपनी अपनी जोत वह धाम निर्माण करने का सपना जागृत किया मालिक श्री के चमत्कार से कई भक्तों के जीवन में खुशियां आए गई इस धाम पर आने वाला हर दुखी भक्त सुखी होकर जाता है
              मान्यता हे कि आज भी गेमर के अंदर शेषनाग कुंवर कल्ला जी राठौड़ विराजते हैं
            </p>
            <p className="text-ink/75 leading-relaxed">
              बाल्यावस्था से ही कुणाल जी शर्मा मालिक श्री कल्लाजी जी महाराज की आराधना और साधना में लगे हुए थे तभी श्री मालिक कल्लाजी  जी महाराज ने बावजी हुकुम कुणाल जी शर्मा को सपना दर्शन देकर अपनी जोत वह धाम की सेवा के लिए आदेश किया और निरंतर आज मालिक श्री की सेवा रविवार के दिन भाव सेवा वह दूर-दूर के भक्तों का इस धाम के प्रति अलग भाव आस्था जुड़ी हुई है मालिक श्री के पुष्प से ही भक्तों का बेड़ा पार होता है
            </p>
          </div>
        </div>
      </section>

      {/* Veer Kallaji Rathore Lore & History */}
      <section className="bg-sandal/30 py-16 sm:py-20 border-t border-b border-gold/30">
        <div className="mx-auto max-w-6xl px-4">
          <div className="text-center mb-12">
            <p className="text-marigold-dark font-semibold tracking-widest text-sm uppercase">
              वीर गाथा एवं अमर बलिदान
            </p>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-maroon mt-2">
              श्री कल्लाजी राठौड़ का जीवन व इतिहास
            </h2>
            <p className="mt-3 text-ink/75 max-w-2xl mx-auto text-base sm:text-lg">
              चार हाथों वाले लोकदेवता, शौर्य, त्याग और सनातन धर्म के अमर रक्षक
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* 1. जन्म और परिवार */}
            <div className="rounded-2xl bg-ivory border border-gold/40 p-6 sm:p-7 shadow-sm hover:shadow-md transition-shadow">
              <span className="text-3xl mb-3 block">🛕</span>
              <h3 className="font-display text-xl text-maroon mb-2.5">
                1. जन्म और परिवार
              </h3>
              <p className="text-ink/75 text-sm sm:text-base leading-relaxed">
                कल्लाजी राठौड़ का जन्म 16वीं शताब्दी में मेड़ता क्षेत्र में हुआ माना जाता है। वे राठौड़ राजपूत थे और बचपन से ही शस्त्रविद्या, घुड़सवारी तथा युद्धकला में निपुण बताए जाते हैं।
              </p>
            </div>

            {/* 2. विवाह और त्याग */}
            <div className="rounded-2xl bg-ivory border border-gold/40 p-6 sm:p-7 shadow-sm hover:shadow-md transition-shadow">
              <span className="text-3xl mb-3 block">💍</span>
              <h3 className="font-display text-xl text-maroon mb-2.5">
                2. विवाह और त्याग
              </h3>
              <p className="text-ink/75 text-sm sm:text-base leading-relaxed">
                लोककथाओं के अनुसार उनका विवाह कृष्णा कंवर से तय हुआ था। लेकिन इसी समय मेवाड़ पर अकबर के आक्रमण की खबर आई। कल्लाजी ने व्यक्तिगत सुख से अधिक मेवाड़ और धर्म की रक्षा को महत्व दिया और युद्ध के लिए निकल पड़े।
              </p>
            </div>

            {/* 3. चित्तौड़ की लड़ाई */}
            <div className="rounded-2xl bg-ivory border border-gold/40 p-6 sm:p-7 shadow-sm hover:shadow-md transition-shadow">
              <span className="text-3xl mb-3 block">⚔️</span>
              <h3 className="font-display text-xl text-maroon mb-2.5">
                3. चित्तौड़ की लड़ाई
              </h3>
              <p className="text-ink/75 text-sm sm:text-base leading-relaxed">
                सन् 1567–1568 में अकबर ने चित्तौड़गढ़ पर बड़ा आक्रमण किया। किले की रक्षा के लिए अनेक राजपूत योद्धा एकत्र हुए। कल्लाजी भी अपने साथियों के साथ चित्तौड़ पहुँचे। युद्ध में जयमल राठौड़ और पत्ता सिसोदिया प्रमुख सेनानायकों में थे। कल्लाजी ने भी मुगलों के विरुद्ध अत्यंत वीरता से युद्ध किया।
              </p>
            </div>

            {/* 4. “चार हाथों वाले” कल्लाजी */}
            <div className="rounded-2xl bg-ivory border border-gold/40 p-6 sm:p-7 shadow-sm hover:shadow-md transition-shadow">
              <span className="text-3xl mb-3 block">🛡️</span>
              <h3 className="font-display text-xl text-maroon mb-2.5">
                4. “चार हाथों वाले” कल्लाजी
              </h3>
              <p className="text-ink/75 text-sm sm:text-base leading-relaxed">
                युद्ध के दौरान जयमल घायल हो गए और चलने में असमर्थ हो गए। तब कल्लाजी ने उन्हें अपने कंधों पर बैठा लिया और युद्ध जारी रखा। दोनों ने मिलकर तलवारें चलाईं, जिसके कारण दोनों के मिलकर चार हाथों से युद्ध करने की अद्भुत छवि लोककथाओं में प्रसिद्ध हुई। इसी कारण कल्लाजी को “चार हाथों वाले वीर” के रूप में याद किया जाता है।
              </p>
            </div>

            {/* 5. वीरगति */}
            <div className="rounded-2xl bg-ivory border border-gold/40 p-6 sm:p-7 shadow-sm hover:shadow-md transition-shadow">
              <span className="text-3xl mb-3 block">🚩</span>
              <h3 className="font-display text-xl text-maroon mb-2.5">
                5. वीरगति एवं अमर बलिदान
              </h3>
              <p className="text-ink/75 text-sm sm:text-base leading-relaxed">
                चित्तौड़ की अंतिम लड़ाई में कल्लाजी वीरगति को प्राप्त हुए। उनके बलिदान की कथा राजस्थान की लोकपरंपरा में प्रसिद्ध हो गई। लोकमान्यता यह भी है कि सिर कट जाने के बाद भी उनका धड़ युद्ध करता रहा—यह उनकी अद्वितीय वीरता और त्याग का प्रतीक है।
              </p>
            </div>

            {/* 6. लोकदेवता के रूप में पूजा */}
            <div className="rounded-2xl bg-ivory border border-gold/40 p-6 sm:p-7 shadow-sm hover:shadow-md transition-shadow">
              <span className="text-3xl mb-3 block">🪔</span>
              <h3 className="font-display text-xl text-maroon mb-2.5">
                6. लोकदेवता के रूप में पूजा
              </h3>
              <p className="text-ink/75 text-sm sm:text-base leading-relaxed">
                समय के साथ कल्लाजी केवल ऐतिहासिक योद्धा नहीं रहे, बल्कि राजस्थान के लोकदेवता बन गए। विशेष रूप से राजस्थान और आसपास के क्षेत्रों में लोग उन्हें संकट से रक्षा करने वाले वीर के रूप में मानते हैं। उनकी प्रमुख आस्था-स्थली रनेला (राजस्थान) व कल्याण धाम मोरडी से जुड़ी है।
              </p>
            </div>
          </div>

          {/* 7. उनकी गाथा का संदेश */}
          <div className="mt-8 rounded-2xl bg-gradient-to-r from-maroon-dark to-maroon text-ivory p-8 sm:p-10 border border-gold/40 text-center shadow-xl">
            <span className="text-marigold text-sm uppercase tracking-widest font-semibold block mb-2">
              उनकी गाथा का पावन संदेश
            </span>
            <p className="font-display text-2xl sm:text-3xl text-marigold leading-relaxed max-w-3xl mx-auto">
              “व्यक्तिगत सुख से ऊपर मातृभूमि, कर्तव्य और स्वाभिमान।”
            </p>
            <p className="text-sandal/80 text-sm sm:text-base mt-4 max-w-2xl mx-auto leading-relaxed">
              इसी कारण राजस्थान की लोक-संस्कृति और कल्याण धाम मोरडी में कल्लाजी राठौड़ आज भी वीरता, त्याग और शौर्य के परम प्रतीक माने जाते हैं।
            </p>
          </div>
        </div>
      </section>

      <section className="bg-sandal/40 py-16">
        <div className="mx-auto max-w-6xl px-4">
          <div className="text-center mb-10">
            <p className="text-marigold-dark font-semibold tracking-wide text-sm uppercase">
              हमारे मूल्य
            </p>
            <h2 className="font-display text-3xl sm:text-4xl text-maroon mt-2">
              हम किस पर विश्वास करते हैं
            </h2>
          </div>
          <div className="grid sm:grid-cols-3 gap-6">
            {values.map((v) => (
              <div
                key={v.title}
                className="rounded-2xl bg-ivory border border-gold/30 p-8 text-center"
              >
                <h3 className="font-display text-xl text-maroon mb-3">
                  {v.title}
                </h3>
                <p className="text-ink/70 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-maroon py-16">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h2 className="font-display text-2xl sm:text-3xl text-ivory mb-4">
            ट्रस्ट एवं प्रबंधन
          </h2>
          <p className="text-sandal/80 leading-relaxed max-w-2xl mx-auto">
            मंदिर का संचालन भक्तों व गादीपति कुणाल जी शर्मा द्वारा किया जाता है, जो
            पूजा-अर्चना, रख-रखाव और सामाजिक सेवा कार्यों की पारदर्शी व्यवस्था
            सुनिश्चित करता है। सभी दान का उपयोग मंदिर के विकास एवं सेवा कार्यों
            में किया जाता है।
          </p>
        </div>
      </section>
    </>
  );
}
