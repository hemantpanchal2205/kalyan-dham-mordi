"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";

export type Language = "hi" | "en" | "gu";

interface Translations {
  [key: string]: {
    hi: string;
    en: string;
    gu: string;
  };
}

export const translations: Translations = {
  // Navigation & Top Bar
  mandirName: {
    hi: "श्री कल्याण धाम मोरड़ी",
    en: "Shri Kalyan Dham Mordi",
    gu: "શ્રી કલ્યાણ ધામ મોરડી",
  },
  darshanTimeTop: {
    hi: "दर्शन समय : प्रातः 7:30 – रात्रि 9:00 बजे",
    en: "Darshan Time : 7:30 AM – 9:00 PM",
    gu: "દર્શન સમય : સવારે 7:30 – રાત્રે 9:00 વાગ્યે",
  },
  home: {
    hi: "होम",
    en: "Home",
    gu: "હોમ",
  },
  about: {
    hi: "हमारे बारे में",
    en: "About Us",
    gu: "અમારા વિશે",
  },
  gallery: {
    hi: "गैलरी",
    en: "Gallery",
    gu: "ગેલેરી",
  },
  events: {
    hi: "उत्सव",
    en: "Events",
    gu: "ઉત્સવ",
  },
  seeAarti: {
    hi: "आरती समय देखें",
    en: "View Aarti Timings",
    gu: "આરતી સમય જુઓ",
  },
  chooseLanguage: {
    hi: "भाषा चुनें",
    en: "Choose Language",
    gu: "ભાષા પસંદ કરો",
  },

  // Home Hero
  heroTag: {
    hi: "सनातन परंपरा • शांति • भक्ति",
    en: "Sanatan Tradition • Peace • Devotion",
    gu: "સનાતન પરંપરા • શાંતિ • ભક્તિ",
  },
  heroTitle1: {
    hi: "जय श्री कल्याण",
    en: "Jai Shri Kalyan",
    gu: "જય શ્રી કલ્યાણ",
  },
  heroTitle2: {
    hi: "मंदिर में आपका स्वागत है",
    en: "Welcome to Mandir",
    gu: "મંદિરમાં આપનું સ્વાગત છે",
  },
  heroDesc: {
    hi: "यह मंदिर श्रद्धा और सेवा का केंद्र है, जहाँ प्रतिदिन आरती, भजन और सामुदायिक उत्सवों के माध्यम से भक्तों को भगवान के दर्शन का सौभाग्य प्राप्त होता है।",
    en: "This temple is a center of faith and service, where devotees receive divine blessings through daily aarti, bhajans, and community festivals.",
    gu: "આ મંદિર શ્રદ્ધા અને સેવાનું કેન્દ્ર છે, જ્યાં દરરોજ આરતી, ભજન અને ઉત્સવોના માધ્યમથી ભક્તોને દર્શનનો પાવન લાભ મળે છે.",
  },
  btnEventCalendar: {
    hi: "उत्सव कैलेंडर देखें",
    en: "View Festival Calendar",
    gu: "ઉત્સવ કેલેન્ડર જુઓ",
  },
  btnAboutMandir: {
    hi: "मंदिर के बारे में",
    en: "About Temple",
    gu: "મંદિર વિશે જાણો",
  },

  // Aarti Schedule
  aartiTag: {
    hi: "दैनिक आरती",
    en: "Daily Aarti",
    gu: "દૈનિક આરતી",
  },
  aartiTitle: {
    hi: "आज का दर्शन समय",
    en: "Today's Darshan Timings",
    gu: "આજનો દર્શન સમય",
  },
  aartiPratahAarti: {
    hi: "प्रातः आरती",
    en: "Morning Aarti",
    gu: "સવારની આરતી",
  },
  aartiPratahDarshan: {
    hi: "प्रातः दर्शन",
    en: "Morning Darshan",
    gu: "સવારના દર્શન",
  },
  aartiSandhyaAarti: {
    hi: "संध्या आरती",
    en: "Evening Aarti",
    gu: "સાંજની આરતી",
  },
  aartiSandhyaDarshan: {
    hi: "संध्या दर्शन",
    en: "Evening Darshan",
    gu: "સાંજના દર્શન",
  },

  // Event Banner on Home
  eventBannerTag: {
    hi: "विशेष पावन आयोजन",
    en: "Special Sacred Event",
    gu: "વિશેષ પાવન આયોજન",
  },
  eventBannerTitle: {
    hi: "आगामी भव्य उत्सव",
    en: "Upcoming Grand Celebration",
    gu: "આગામી ભવ્ય ઉત્સવ",
  },
  eventBannerBadge: {
    hi: "विशेष वार्षिकोत्सव • 20 अगस्त",
    en: "Special Annual Festival • 20 August",
    gu: "વિશેષ વાર્ષિકોત્સવ • 20 ઓગસ્ટ",
  },
  eventBannerHeading1: {
    hi: "भव्य जन्मोत्सव",
    en: "Grand Birth Anniversary",
    gu: "ભવ્ય જન્મોત્સવ",
  },
  eventBannerHeading2: {
    hi: "श्री कल्लाजी राठौड़ महाराज",
    en: "Shri Kallaji Rathore Maharaj",
    gu: "શ્રી કલ્લાજી રાઠોડ મહારાજ",
  },
  eventBannerDesc: {
    hi: "कल्याण धाम मोरडी में बाबाजी हुकुम श्री कल्लाजी राठौड़ महाराज का पावन जन्मोत्सव अत्यंत हर्षोल्लास व वैदिक रीति-रिवाजों के साथ मनाया जा रहा है।",
    en: "The divine birth festival of Babaji Hukum Shri Kallaji Rathore Maharaj is being celebrated with immense devotion and Vedic traditions at Kalyan Dham Mordi.",
    gu: "કલ્યાણ ધામ મોરડીમાં બાબાજી હુકુમ શ્રી કલ્લાજી રાઠોડ મહારાજનો પાવન જન્મોત્સવ ખૂબ જ હર્ષોલ્લાસ અને વૈદિક પરંપરા સાથે ઉજવવામાં આવી રહ્યો છે.",
  },
  pill1Time: { hi: "प्रातः 10:00 बजे", en: "10:00 AM Morning", gu: "સવારે 10:00 વાગ્યે" },
  pill1Title: { hi: "🔥 यज्ञ एवं हवन", en: "🔥 Yajna & Havan", gu: "🔥 યજ્ઞ અને હવન" },
  pill2Time: { hi: "दोपहर 12:00 बजे", en: "12:00 PM Noon", gu: "બપોરે 12:00 વાગ્યે" },
  pill2Title: { hi: "📖 भजन व सुंदरकाण्ड", en: "📖 Bhajan & Sundarkand", gu: "📖 ભજન અને સુંદરકાંડ" },
  pill3Time: { hi: "दोपहर 1:00 बजे", en: "1:00 PM Afternoon", gu: "બપોરે 1:00 વાગ્યે" },
  pill3Title: { hi: "🪔 दिव्य महाआरती", en: "🪔 Divine Maha Aarti", gu: "🪔 દિવ્ય મહાઆરતી" },
  pill4Time: { hi: "दोपहर 2:00 बजे", en: "2:00 PM Afternoon", gu: "બપોરે 2:00 વાગ્યે" },
  pill4Title: { hi: "🍲 महाप्रसादी", en: "🍲 Maha Prasadi (Feast)", gu: "🍲 મહાપ્રસાદી" },
  btnEventDetails: {
    hi: "उत्सव विवरण देखें →",
    en: "View Event Details →",
    gu: "ઉત્સવ વિગત જુઓ →",
  },
  btnContact: {
    hi: "संपर्क करें",
    en: "Contact Us",
    gu: "સંપર્ક કરો",
  },
  bannerImageLabel: {
    hi: "कल्याण धाम मोरडी • दीपोत्सव एवं उत्सव",
    en: "Kalyan Dham Mordi • Deepotsav & Celebrations",
    gu: "કલ્યાણ ધામ મોરડી • દીપોત્સવ અને ઉત્સવ",
  },

  // Highlights Section
  highlightsTag: { hi: "जानिए", en: "Explore", gu: "જાણો" },
  highlightsTitle: { hi: "मंदिर से जुड़ें", en: "Connect with Temple", gu: "મંદિર સાથે જોડાઓ" },
  highlight1Title: { hi: "हमारे बारे में", en: "About Us", gu: "અમારા વિશે" },
  highlight1Desc: { hi: "मंदिर का इतिहास, स्थापना और आध्यात्मिक परंपरा जानें।", en: "Discover temple history, foundation and spiritual heritage.", gu: "મંદિરનો ઇતિહાસ, સ્થાપના અને આધ્યાત્મિક પરંપરા જાણો." },
  highlight2Title: { hi: "गैलरी", en: "Gallery", gu: "ગેલેરી" },
  highlight2Desc: { hi: "उत्सवों, श्रृंगार और मंदिर परिसर की झलकियाँ देखें।", en: "View glimpses of festivals, adornments, and temple premises.", gu: "ઉત્સવો, શૃંગાર અને મંદિર પરિસરની ઝાંખીઓ જુઓ." },
  highlight3Title: { hi: "आगामी उत्सव", en: "Upcoming Events", gu: "આગામી ઉત્સવો" },
  highlight3Desc: { hi: "पर्व, विशेष पूजा और सामुदायिक आयोजनों की सूची।", en: "List of festivals, special poojas and community events.", gu: "પર્વો, વિશેષ પૂજા અને ધાર્મિક કાર્યક્રમોની યાદી." },
  seeMore: { hi: "और देखें →", en: "Explore More →", gu: "વધુ જુઓ →" },

  // Gallery Showcase
  galleryShowcaseTag: { hi: "पावन दर्शन एवं झलकियाँ", en: "Sacred Glimpses", gu: "પાવન દર્શન અને ઝાંખીઓ" },
  galleryShowcaseTitle: { hi: "मंदिर फोटो गैलरी", en: "Temple Photo Gallery", gu: "મંદિર ફોટો ગેલેરી" },
  galleryShowcaseDesc: {
    hi: "कल्याण धाम मोरडी के पावन प्रांगण, दैनिक आरती और दिव्य उत्सवों की कुछ मनमोहक झलकियाँ।",
    en: "Enchanting glimpses of Kalyan Dham Mordi's sacred courtyard, daily aartis, and grand festivals.",
    gu: "કલ્યાણ ધામ મોરડીના પાવન પ્રાંગણ, દૈનિક આરતી અને ભવ્ય ઉત્સવોની સુંદર ઝાંખીઓ.",
  },
  btnViewFullGallery: {
    hi: "📸 संपूर्ण गैलरी देखें (41 छायाचित्र)",
    en: "📸 View Full Gallery (41 Photos)",
    gu: "📸 સંપૂર્ણ ગેલેરી જુઓ (41 ફોટો)",
  },
  zoomView: { hi: "बड़ा देखें", en: "Zoom", gu: "મોટું જુઓ" },

  // Shloka
  shlokaText: {
    hi: '"जहाँ वीरता का सम्मान होता है, वहाँ कल्लाजी का स्मरण होता है।"',
    en: '"Wherever valor is honored, Kallaji is remembered with reverence."',
    gu: '"જ્યાં વીરતાનું સન્માન થાય છે, ત્યાં કલ્લાજીનું સ્મરણ થાય છે."',
  },
  shlokaAuthor: {
    hi: "— वीर कल्लाजी —",
    en: "— Veer Kallaji —",
    gu: "— વીર કલ્લાજી —",
  },

  // Map & Location
  locationTag: { hi: "स्थान व दिशा-निर्देश", en: "Location & Directions", gu: "સ્થાન અને માર્ગદર્શન" },
  locationTitle: { hi: "मंदिर कैसे पहुँचें", en: "How to Reach the Temple", gu: "મંદિર કેવી રીતે પહોંચવું" },
  locationSubtitle: {
    hi: "श्री काली कल्याणगढ़ धाम मोरडी़, गढ़ी परतापुर, जिला बांसवाड़ा (राजस्थान)",
    en: "Shri Kali Kalyan Dham Mordi, Garhi Partapur, Banswara District (Rajasthan)",
    gu: "શ્રી કાલી કલ્યાણગઢ ધામ મોરડી, ગઢી પરતાપુર, જિલ્લો બાંસવાડા (રાજસ્થાન)",
  },
  addressTitle: { hi: "मंदिर का पता", en: "Temple Address", gu: "મંદિરનું સરનામું" },
  addressText1: { hi: "श्री कल्याण धाम, ग्राम मोरडी,", en: "Shri Kalyan Dham, Village Mordi,", gu: "શ્રી કલ્યાણ ધામ, ગામ મોરડી," },
  addressText2: { hi: "तहसील गढ़ी, परतापुर,", en: "Tehsil Garhi, Partapur,", gu: "તાલુકો ગઢી, પરતાપુર," },
  addressText3: { hi: "जिला बांसवाड़ा, राजस्थान - 327022", en: "District Banswara, Rajasthan - 327022", gu: "જિલ્લો બાંસવાડા, રાજસ્થાન - 327022" },
  contactTitle: { hi: "संपर्क सूत्र", en: "Contact Phone", gu: "સંપર્ક નંબર" },
  timingTitle: { hi: "दर्शन समय", en: "Darshan Timings", gu: "દર્શન સમય" },
  timingText1: { hi: "प्रातः ५:०० बजे से रात्रि ९:०० बजे तक", en: "5:00 AM Morning to 9:00 PM Night", gu: "સવારે ૫:૦૦ થી રાત્રે ૯:૦૦ વાગ્યા સુધી" },
  timingText2: { hi: "* रविवार को विशेष भाव सेवा", en: "* Special Seva on Sundays", gu: "* રવિવારે વિશેષ ભાવ સેવા" },
  btnViewMap: { hi: "गूगल मैप पर मार्ग देखें", en: "Get Directions on Google Maps", gu: "ગૂગલ મેપ પર રસ્તો જુઓ" },

  // About Page
  aboutIntroTag: { hi: "हमारा परिचय", en: "About Us", gu: "અમારો પરિચય" },
  aboutIntroTitle: { hi: "हमारे बारे में", en: "About Our Temple", gu: "અમારા વિશે" },
  aboutHistoryTag: { hi: "हमारा इतिहास", en: "Our History", gu: "અમારો ઇતિહાસ" },
  aboutHistoryTitle: { hi: "श्रद्धा से बना यह पावन धाम", en: "A Sacred Abode Built on Deep Faith", gu: "શ્રદ્ધાથી બનેલું આ પાવન ધામ" },
  aboutHistoryP1: {
    hi: "श्री काली कल्याणगढ़ धाम मोरडी़ गढ़ी परतापुर जिला बांसवाड़ा की पावन धरा पर स्थित हे। यह धाम मोरडी़ 50 से 60 वर्ष पुराना हे। यहाँ पर स्वयं श्री कल्लाजी बावजी ने अपने भक्त को सपने में दर्शन दे कर अपनी अपनी जोत वह धाम निर्माण करने का सपना जागृत किया। मालिक श्री के चमत्कार से कई भक्तों के जीवन में खुशियां आए गई, इस धाम पर आने वाला हर दुखी भक्त सुखी होकर जाता है। मान्यता हे कि आज भी गेमर के अंदर शेषनाग कुंवर कल्ला जी राठौड़ विराजते हैं।",
    en: "Shri Kali Kalyan Dham Mordi is situated on the sacred soil of Garhi Partapur, Banswara district. This shrine is 50 to 60 years old. Here, Shri Kallaji Bavji himself appeared in a devotee's dream, awakening the vision to kindle his eternal flame (Jyot) and construct this holy abode. By his divine grace, countless devotees have found joy and sorrow vanishes for all who visit. It is believed that Sheshnag Kunwar Kallaji Rathore resides here today.",
    gu: "શ્રી કાલી કલ્યાણગઢ ધામ મોરડી ગઢી પરતાપુર જિલ્લો બાંસવાડાની પાવન ભૂમિ પર સ્થિત છે. આ ધામ ૫૦ થી ૬૦ વર્ષ જૂનું છે. અહીં સ્વયં શ્રી કલ્લાજી બાવજીએ પોતાના ભક્તને સ્વપ્નમાં દર્શન આપી પોતાની જ્યોત અને ધામ નિર્માણ કરવાનો આદેશ કર્યો. માલિક શ્રીના ચમત્કારથી અનેક ભક્તોના જીવનમાં સુખ આવ્યું છે, અહીં આવનાર દરેક દુઃખી ભક્ત સુખી થઈને જાય છે.",
  },
  aboutHistoryP2: {
    hi: "बाल्यावस्था से ही कुणाल जी शर्मा मालिक श्री कल्लाजी महाराज की आराधना और साधना में लगे हुए थे। तभी श्री मालिक कल्लाजी महाराज ने बावजी हुकुम कुणाल जी शर्मा को सपना दर्शन देकर अपनी जोत वह धाम की सेवा के लिए आदेश किया और निरंतर आज मालिक श्री की सेवा रविवार के दिन भाव सेवा वह दूर-दूर के भक्तों का इस धाम के प्रति अलग भाव आस्था जुड़ी हुई है। मालिक श्री के पुष्प से ही भक्तों का बेड़ा पार होता है।",
    en: "From childhood, Kunal Ji Sharma was devoted to the worship and sadhana of Shri Kallaji Maharaj. Then Shri Kallaji Maharaj blessed Kunal Ji Sharma in a dream vision with the command to serve his Jyot and Dham. Today, continuous Sunday Bhav Seva is performed and devotees from far and wide hold deep faith here. The blessed flower of Malik Shri brings fulfillment and peace to devotees.",
    gu: "બાળપણથી જ કુણાલ જી શર્મા માલિક શ્રી કલ્લાજી મહારાજની આરાધનામાં લીન હતા. ત્યારે શ્રી કલ્લાજી મહારાજે કુણાલ જી શર્માને સ્વપ્ન દર્શન આપી જ્યોત અને ધામની સેવા માટે આદેશ આપ્યો. આજે રવિવારે વિશેષ ભાવ સેવા થાય છે અને દૂર-દૂરથી ભક્તો અખૂટ શ્રદ્ધા સાથે આવે છે.",
  },

  // About Page - 7 Points of Lore
  loreTag: { hi: "वीर गाथा एवं अमर बलिदान", en: "Heroic Lore & Supreme Sacrifice", gu: "વીર ગાથા અને અમર બલિદાન" },
  loreTitle: { hi: "श्री कल्लाजी राठौड़ का जीवन व इतिहास", en: "Life & History of Shri Kallaji Rathore", gu: "શ્રી કલ્લાજી રાઠોડનું જીવન અને ઇતિહાસ" },
  loreSubtitle: { hi: "चार हाथों वाले लोकदेवता, शौर्य, त्याग और सनातन धर्म के अमर रक्षक", en: "Four-Armed Folk Deity, Protector of Valor, Sacrifice and Sanatan Dharma", gu: "ચાર હાથવાળા લોકદેવતા, શૌર્ય, ત્યાગ અને સનાતન ધર્મના અમર રક્ષક" },

  lorePoint1Title: { hi: "1. जन्म और परिवार", en: "1. Birth and Family", gu: "૧. જન્મ અને પરિવાર" },
  lorePoint1Desc: {
    hi: "कल्लाजी राठौड़ का जन्म 16वीं शताब्दी में मेड़ता क्षेत्र में हुआ माना जाता है। वे राठौड़ राजपूत थे और बचपन से ही शस्त्रविद्या, घुड़सवारी तथा युद्धकला में निपुण बताए जाते हैं।",
    en: "Kallaji Rathore was born in the 16th century in the Merta region. Born into the Rathore Rajput clan, he was proficient in weaponry, horsemanship, and warfare from early childhood.",
    gu: "કલ્લાજી રાઠોડનો જન્મ ૧૬મી સદીમાં મેળતા પ્રદેશમાં થયો માનવામાં આવે છે. તેઓ રાઠોડ રાજપૂત હતા અને બાળપણથી જ શસ્ત્રવિદ્યા, અશ્વવિદ્યા અને યુદ્ધકળામાં પ્રવીણ હતા.",
  },

  lorePoint2Title: { hi: "2. विवाह और त्याग", en: "2. Marriage and Renunciation", gu: "૨. વિવાહ અને ત્યાગ" },
  lorePoint2Desc: {
    hi: "लोककथाओं के अनुसार उनका विवाह कृष्णा कंवर से तय हुआ था। लेकिन इसी समय मेवाड़ पर अकबर के आक्रमण की खबर आई। कल्लाजी ने व्यक्तिगत सुख से अधिक मेवाड़ और धर्म की रक्षा को महत्व दिया और युद्ध के लिए निकल पड़े।",
    en: "According to legends, his marriage was arranged with Krishna Kanwar. At that moment, news came of Akbar's siege of Mewar. Prioritizing duty and faith above personal happiness, Kallaji departed for the battlefield.",
    gu: "લોકકથાઓ અનુસાર તેમનો વિવાહ કૃષ્ણા કંવર સાથે નક્કી થયો હતો. પરંતુ આ જ સમયે મેવાડ પર અકબરના આક્રમણના સમાચાર આવ્યા. કલ્લાજીએ અંગત સુખ કરતાં મેવાડ અને ધર્મ રક્ષાને મહત્વ આપી યુદ્ધ માટે પ્રસ્થાન કર્યું.",
  },

  lorePoint3Title: { hi: "3. चित्तौड़ की लड़ाई", en: "3. The Battle of Chittorgarh", gu: "૩. ચિત્તોડની લડાઈ" },
  lorePoint3Desc: {
    hi: "सन् 1567–1568 में अकबर ने चित्तौड़गढ़ पर बड़ा आक्रमण किया। किले की रक्षा के लिए अनेक राजपूत योद्धा एकत्र हुए। कल्लाजी भी अपने साथियों के साथ चित्तौड़ पहुँचे। युद्ध में जयमल राठौड़ और पत्ता सिसोदिया प्रमुख सेनानायकों में थे। कल्लाजी ने भी मुगलों के विरुद्ध अत्यंत वीरता से युद्ध किया।",
    en: "In 1567–1568, Akbar launched a massive siege on Chittorgarh. Rajput warriors gathered to protect the fort. Kallaji joined them alongside commander Jaimal Rathore and Patta Sisodia, fighting with fierce valor.",
    gu: "ઇ.સ. ૧૫૬૭–૧૫૬૮માં અકબરે ચિત્તોડગઢ પર આક્રમણ કર્યું. કિલ્લાની રક્ષા માટે વીર યોદ્ધાઓ એકત્ર થયા. કલ્લાજીએ જયમલ રાઠોડ અને પત્તા સિસોદિયા સાથે અદ્ભુત વીરતાથી યુદ્ધ કર્યું.",
  },

  lorePoint4Title: { hi: "4. “चार हाथों वाले” कल्लाजी", en: "4. The 'Four-Armed' Legend", gu: "૪. “ચાર હાથવાળા” કલ્લાજી" },
  lorePoint4Desc: {
    hi: "युद्ध के दौरान जयमल घायल हो गए और चलने में असमर्थ हो गए। तब कल्लाजी ने उन्हें अपने कंधों पर बैठा लिया और युद्ध जारी रखा। दोनों ने मिलकर तलवारें चलाईं, जिसके कारण दोनों के मिलकर चार हाथों से युद्ध करने की अद्भुत छवि लोककथाओं में प्रसिद्ध हुई। इसी कारण कल्लाजी को “चार हाथों वाले वीर” के रूप में याद किया जाता है।",
    en: "When Jaimal was wounded, Kallaji carried him upon his shoulders and continued battling. Both swung swords simultaneously, creating the legendary vision of fighting with four arms, earning him the revered title 'The Four-Armed Deity'.",
    gu: "યુદ્ધમાં જયમલ ઘાયલ થતાં કલ્લાજીએ તેમને પોતાના ખભા પર બેસાડી લીધા અને બંનેએ સાથે તલવારો ચલાવી. આ અદભુત દ્રશ્યથી લોકગાથામાં તેઓ 'ચાર હાથવાળા વીર' તરીકે અમર થયા.",
  },

  lorePoint5Title: { hi: "5. वीरगति एवं अमर बलिदान", en: "5. Martyrdom & Supreme Sacrifice", gu: "૫. વીરગતિ અને અમર બલિદાન" },
  lorePoint5Desc: {
    hi: "चित्तौड़ की अंतिम लड़ाई में कल्लाजी वीरगति को प्राप्त हुए। उनके बलिदान की कथा राजस्थान की लोकपरंपरा में प्रसिद्ध हो गई। लोकमान्यता यह भी है कि सिर कट जाने के बाद भी उनका धड़ युद्ध करता रहा—यह उनकी अद्वितीय वीरता और त्याग का प्रतीक है।",
    en: "Kallaji achieved martyrdom in the final battle of Chittorgarh. Tradition cherishes that even after beheading, his body continued fighting for dharma—a timeless testament to unmatched courage and sacrifice.",
    gu: "ચિત્તોડની લડાઈમાં કલ્લાજી વીરગતિ પામ્યા. લોકમાન્યતા છે કે શીશ કપાઈ ગયા પછી પણ તેમનું ધડ યુદ્ધ કરતું રહ્યું — જે તેમની અજોડ વીરતા અને ત્યાગનું પ્રતીક છે.",
  },

  lorePoint6Title: { hi: "6. लोकदेवता के रूप में पूजा", en: "6. Revered as Folk Deity", gu: "૬. લોકદેવતા તરીકે પૂજા" },
  lorePoint6Desc: {
    hi: "समय के साथ कल्लाजी केवल ऐतिहासिक योद्धा नहीं रहे, बल्कि राजस्थान के लोकदेवता बन गए। विशेष रूप से राजस्थान और आसपास के क्षेत्रों में लोग उन्हें संकट से रक्षा करने वाले वीर के रूप में मानते हैं। उनकी प्रमुख आस्था-स्थली रनेला (राजस्थान) व कल्याण धाम मोरडी से जुड़ी है।",
    en: "Over time, Kallaji transformed from a historical warrior into a beloved folk deity, revered across Rajasthan and Gujarat as a savior from distress. His prominent abodes include Ranela and Kalyan Dham Mordi.",
    gu: "સમય સાથે કલ્લાજી રાજસ્થાન અને ગુજરાતના પૂજનીય લોકદેવતા બન્યા. ભક્તો તેમને સંકટ હરનાર વીર માને છે. તેમનું પ્રમુખ ધામ રનેલા અને કલ્યાણ ધામ મોરડી છે.",
  },

  lorePoint7Tag: { hi: "उनकी गाथा का पावन संदेश", en: "Sacred Message of his Lore", gu: "તેમની ગાથાનો પાવન સંદેશ" },
  lorePoint7Quote: {
    hi: "“व्यक्तिगत सुख से ऊपर मातृभूमि, कर्तव्य और स्वाभिमान।”",
    en: "“Motherland, Duty and Self-Respect Above Personal Comfort.”",
    gu: "“અંગત સુખ કરતાં માતૃભૂમિ, કર્તવ્ય અને સ્વાભિમાન સર્વોપરી.”",
  },
  lorePoint7Desc: {
    hi: "इसी कारण राजस्थान की लोक-संस्कृति और कल्याण धाम मोरडी में कल्लाजी राठौड़ आज भी वीरता, त्याग और शौर्य के परम प्रतीक माने जाते हैं।",
    en: "For this reason, Veer Kallaji Rathore remains an eternal symbol of valor, sacrifice, and devotion in folk culture and at Kalyan Dham Mordi.",
    gu: "આથી જ રાજસ્થાન અને કલ્યાણ ધામ મોરડીમાં કલ્લાજી રાઠોડ આજે પણ વીરતા, ત્યાગ અને શૌર્યના પરમ પ્રતીક છે.",
  },

  // About Values
  valuesTag: { hi: "हमारे मूल्य", en: "Our Values", gu: "અમારા મૂલ્યો" },
  valuesTitle: { hi: "हम किस पर विश्वास करते हैं", en: "What We Believe In", gu: "અમે શામાં માનીએ છીએ" },
  val1Title: { hi: "भक्ति", en: "Devotion", gu: "ભક્તિ" },
  val1Desc: { hi: "प्रतिदिन आरती, भजन-कीर्तन और सत्संग के माध्यम से भक्ति भाव को सशक्त बनाना।", en: "Strengthening spiritual devotion through daily aarti, bhajans, and satsang.", gu: "દરરોજ આરતી, ભજન અને સત્સંગ દ્વારા ભક્તિભાવ સુદ્રઢ કરવો." },
  val2Title: { hi: "सेवा", en: "Service", gu: "સેવા" },
  val2Desc: { hi: "अन्नदान, शिक्षा और सामाजिक सेवा कार्यों के माध्यम से समाज की सेवा करना।", en: "Serving society through food distribution (Annadaan), education, and social charity.", gu: "અન્નદાન, શિક્ષણ અને સામાજિક સેવા કાર્યો દ્વારા સમાજની સેવા કરવી." },
  val3Title: { hi: "परंपरा", en: "Tradition", gu: "પરંપરા" },
  val3Desc: { hi: "प्राचीन वैदिक परंपराओं और मंदिर की रीति-रिवाजों का संरक्षण करना।", en: "Preserving ancient Vedic traditions and sacred temple customs.", gu: "પ્રાચીન વૈદિક પરંપરાઓ અને મંદિરના રીતિ-રિવાજોનું સંરક્ષણ કરવું." },

  // About Trust
  trustTitle: { hi: "ट्रस्ट एवं प्रबंधन", en: "Trust & Management", gu: "ટ્રસ્ટ અને વ્યવસ્થાપન" },
  trustDesc: {
    hi: "मंदिर का संचालन भक्तों व गादीपति कुणाल जी शर्मा द्वारा किया जाता है, जो पूजा-अर्चना, रख-रखाव और सामाजिक सेवा कार्यों की पारदर्शी व्यवस्था सुनिश्चित करता है। सभी दान का उपयोग मंदिर के विकास एवं सेवा कार्यों में किया जाता है।",
    en: "The temple is managed transparently by devotees and Gadipati Kunal Ji Sharma, overseeing worship, maintenance, and social service. All donations are devoted to temple development and charitable activities.",
    gu: "મંદિરનું સંચાલન ભક્તો અને ગાદીપતિ કુણાલ જી શર્મા દ્વારા થાય છે, જે પૂજા-અર્ચના, જાળવણી અને સેવા કાર્યોની પારદર્શી વ્યવસ્થા સુનિશ્ચિત કરે છે.",
  },

  // Events Page Full Content
  eventsHeroTag: { hi: "कल्याण धाम मोरडी • विशेष वार्षिकोत्सव", en: "Kalyan Dham Mordi • Annual Festival", gu: "કલ્યાણ ધામ મોરડી • વિશેષ વાર્ષિકોત્સવ" },
  eventsHeroTitle: { hi: "श्री कल्लाजी राठौड़ जन्मोत्सव", en: "Shri Kallaji Rathore Janmotsav", gu: "શ્રી કલ્લાજી રાઠોડ જન્મોત્સવ" },
  eventsHeroDesc: {
    hi: "वीरता, त्याग, धर्मनिष्ठा और मातृभूमि के प्रति समर्पण के अमर प्रतीक श्री कल्लाजी राठौड़ महाराज का पावन जन्मोत्सव।",
    en: "The auspicious birth festival of Shri Kallaji Rathore Maharaj, eternal symbol of valor, sacrifice, righteousness, and patriotism.",
    gu: "વીરતા, ત્યાગ, ધર્મનિષ્ઠા અને માતૃભૂમિ પ્રત્યે સમર્પણના અમર પ્રતીક શ્રી કલ્લાજી રાઠોડ મહારાજનો પાવન જન્મોત્સવ.",
  },
  eventsHeroBadge: { hi: "📅 20 अगस्त • सुबह 10:00 बजे से", en: "📅 20 August • 10:00 AM Onwards", gu: "📅 20 ઓગસ્ટ • સવારે 10:00 વાગ્યાથી" },

  eventsIntroTitle: { hi: "श्री कल्लाजी राठौड़ जन्मोत्सव", en: "About Shri Kallaji Rathore Janmotsav", gu: "શ્રી કલ્લાજી રાઠોડ જન્મોત્સવ" },
  eventsIntroDesc: {
    hi: "श्री कल्लाजी राठौड़ राजस्थान की वीरभूमि की गौरवशाली परंपरा से जुड़े महान योद्धा और लोकदेवता हैं। उनकी वीरता, त्याग, धर्मनिष्ठा और मातृभूमि के प्रति समर्पण की गाथा आज भी राजस्थान और आसपास के क्षेत्रों में श्रद्धा एवं सम्मान के साथ स्मरण की जाती है। उनके जन्मोत्सव का आयोजन इसी वीर परंपरा और लोकआस्था को जीवंत रखने का महत्वपूर्ण अवसर है।",
    en: "Shri Kallaji Rathore is a revered warrior and folk deity of Rajasthan. His valor, sacrifice, piety, and devotion to the motherland are cherished with profound faith across Rajasthan and Gujarat. This Janmotsav celebration is an auspicious occasion to celebrate this heroic heritage.",
    gu: "શ્રી કલ્લાજી રાઠોડ રાજસ્થાનની વીરભૂમિના ગૌરવશાળી લોકદેવતા છે. તેમની વીરતા, ત્યાગ અને ધર્મનિષ્ઠા આજે પણ શ્રદ્ધા સાથે સ્મરણ થાય છે. તેમનો જન્મોત્સવ લોકઆસ્થાને જીવંત રાખવાનો પાવન અવસર છે.",
  },

  eventsScheduleTag: { hi: "20 अगस्त • पावन कार्यक्रम", en: "20 August • Schedule of Events", gu: "20 ઓગસ્ટ • પાવન કાર્યક્રમ" },
  eventsScheduleTitle: { hi: "जन्मोत्सव कार्यक्रम सारणी", en: "Janmotsav Program Schedule", gu: "જન્મોત્સવ કાર્યક્રમ સૂચિ" },

  eventsSignificanceTitle: { hi: "जन्मोत्सव का महत्व", en: "Significance of Janmotsav", gu: "જન્મોત્સવનું મહત્વ" },
  eventsSignificanceP1: {
    hi: "कल्लाजी राठौड़ का जन्मोत्सव श्रद्धालुओं के लिए केवल एक धार्मिक आयोजन नहीं, बल्कि वीरता, त्याग, कर्तव्य और संस्कारों का उत्सव है। इस अवसर पर भक्तजन कल्लाजी के जीवन और उनके आदर्शों को याद करते हैं तथा उनके प्रति अपनी श्रद्धा व्यक्त करते हैं।",
    en: "Kallaji Rathore's Janmotsav is a celebration of courage, duty, and noble values. Devotees remember his ideals and offer prayers with deep reverence.",
    gu: "કલ્લાજી રાઠોડનો જન્મોત્સવ વીરતા, ત્યાગ, કર્તવ્ય અને સંસ્કારોનો ઉત્સવ છે. ભક્તો તેમના આદર્શોને યાદ કરી પોતાની શ્રદ્ધા વ્યક્ત કરે છે.",
  },
  eventsSignificanceP2: {
    hi: "जन्मोत्सव के अवसर पर मंदिरों एवं पूजा स्थलों में विशेष पूजा-अर्चना की जाती है। श्रद्धालु दर्शन करने के लिए दूर-दूर से आते हैं और कल्लाजी के चरणों में श्रद्धा अर्पित करते हैं।",
    en: "Special poojas and rituals are conducted. Devotees arrive from distant towns to bow at the holy feet of Shri Kallaji.",
    gu: "જન્મોત્સવ પ્રસંગે મંદિરમાં વિશેષ પૂજા-અર્ચના થાય છે અને દૂર-દૂરથી શ્રદ્ધાળુઓ દર્શન માટે પધારે છે.",
  },

  eventsInspirationTitle: { hi: "वीरता और त्याग की प्रेरणा", en: "Inspiration of Valor & Sacrifice", gu: "વીરતા અને ત્યાગની પ્રેરણા" },
  eventsInspirationP1: {
    hi: "कल्लाजी राठौड़ का जीवन साहस और त्याग का प्रतीक माना जाता है। चित्तौड़ की रक्षा के लिए उनके द्वारा किए गए बलिदान की गाथा राजस्थान की लोकस्मृति में आज भी जीवित है।",
    en: "Kallaji Rathore's life epitomizes courage and selflessness. His supreme sacrifice for Chittorgarh remains immortal in cultural memory.",
    gu: "કલ્લાજી રાઠોડનું જીવન સાહસ અને ત્યાગનું પ્રતીક છે. ચિત્તોડની રક્ષા માટેનું તેમનું બલિદાન લોકસ્મૃતિમાં આજે પણ અમર છે.",
  },
  eventsInspirationP2: {
    hi: "उनके जीवन से हमें कर्तव्य के प्रति निष्ठा, मातृभूमि के प्रति प्रेम, साहस और आत्मसम्मान की प्रेरणा मिलती है।",
    en: "His life inspires steadfast duty, love for the motherland, bravery, and self-respect.",
    gu: "તેમના જીવનમાંથી આપણને કર્તવ્યનિષ્ઠા, માતૃભૂમિ પ્રત્યે પ્રેમ, સાહસ અને આત્મસન્માનની પ્રેરણા મળે છે.",
  },

  eventsMajorTitle: { hi: "जन्मोत्सव के प्रमुख आयोजन", en: "Key Highlights of the Janmotsav", gu: "જન્મોત્સવના પ્રમુખ આયોજનો" },
  eventsMajorDesc: {
    hi: "जन्मोत्सव के दौरान विभिन्न स्थानों पर स्थानीय परंपराओं के अनुसार कई कार्यक्रम आयोजित किए जाते हैं:",
    en: "During the Janmotsav, multiple sacred programs are organized according to Vedic traditions:",
    gu: "જન્મોત્સવ દરમિયાન પરંપરા અનુસાર વિવિધ ધાર્મિક કાર્યક્રમો યોજવામાં આવે છે:",
  },
  h1: { hi: "कल्लाजी महाराज की विशेष पूजा एवं आरती", en: "Special Pooja & Aarti of Kallaji Maharaj", gu: "કલ્લાજી મહારાજની વિશેષ પૂજા અને આરતી" },
  h2: { hi: "ध्वजा एवं धार्मिक अनुष्ठान", en: "Flag Hoisting (Dhwaja) & Vedic Rituals", gu: "ધ્વજા રોહણ અને ધાર્મિક અનુષ્ઠાન" },
  h3: { hi: "भजन-कीर्तन एवं लोकगीत", en: "Bhajans, Kirtans & Folk Songs", gu: "ભજન-કીર્તન અને લોકગીતો" },
  h4: { hi: "कल्लाजी की वीरगाथाओं का वाचन", en: "Recitation of Kallaji's Heroic Lore", gu: "કલ્લાજીની વીરગાથાઓનું વાચન" },
  h5: { hi: "शोभायात्रा एवं धार्मिक जुलूस", en: "Grand Shobhayatra & Procession", gu: "ભવ્ય શોભાયાત્રા અને ધાર્મિક સરઘસ" },
  h6: { hi: "प्रसाद वितरण", en: "Prasad Distribution to Devotees", gu: "પાવન પ્રસાદ વિતરણ" },
  h7: { hi: "भंडारे का आयोजन (महाप्रसादी)", en: "Community Feast (Maha Prasadi Bhandara)", gu: "ભંડારાનું આયોજન (મહાપ્રસાદી)" },
  h8: { hi: "मेले एवं सांस्कृतिक कार्यक्रम", en: "Festive Fairs & Cultural Programs", gu: "મેળા અને સાંસ્કૃતિક કાર્યક્રમો" },
  eventsMajorFooterNote: {
    hi: "* इन आयोजनों में बच्चे, युवा, बुजुर्ग और बड़ी संख्या में श्रद्धालु उत्साहपूर्वक भाग लेते हैं।",
    en: "* Devotees of all ages, elders, youth, and children participate with deep enthusiasm.",
    gu: "* આ આયોજનોમાં તમામ ભક્તો ખૂબ જ ઉત્સાહપૂર્વક ભાગ લે છે.",
  },

  eventsFaithTitle: { hi: "श्रद्धा और लोकपरंपरा", en: "Faith and Living Tradition", gu: "શ્રદ્ધા અને લોકપરંપરા" },
  eventsFaithP1: {
    hi: "समय के साथ कल्लाजी राठौड़ की वीरगाथा लोकआस्था का महत्वपूर्ण हिस्सा बन गई। राजस्थान के विभिन्न क्षेत्रों में उनके मंदिर एवं पूजा स्थल हैं, जहाँ श्रद्धालु अपनी आस्था के साथ उनका स्मरण करते हैं। रनेला को कल्लाजी से जुड़े प्रमुख धार्मिक स्थलों में माना जाता है।",
    en: "Over generations, Kallaji Rathore's lore became integral to folk spirituality. Temples across Rajasthan and neighboring regions celebrate his glory, with Ranela standing as a prominent pilgrimage center.",
    gu: "સમય સાથે કલ્લાજી રાઠોડની વીરગાથા લોકઆસ્થાનો અભિન્ન ભાગ બની. રનેલા અને મોરડી તેમના પ્રમુખ ધામ તરીકે પૂજાય છે.",
  },
  eventsFaithP2: {
    hi: "कल्लाजी जन्मोत्सव इसी लोकपरंपरा को आगे बढ़ाने और आने वाली पीढ़ियों को उनके शौर्य एवं आदर्शों से परिचित कराने का अवसर प्रदान करता है।",
    en: "The Janmotsav keeps this tradition vibrant and passes his ideals of valor and service to future generations.",
    gu: "કલ્લાજી જન્મોત્સવ નવી પેઢીને તેમના શૌર્ય અને આદર્શોથી પરિચિત કરાવવાનો શ્રેષ્ઠ અવસર પૂરો પાડે છે.",
  },

  eventsPledgeTag: { hi: "हमारा संकल्प", en: "Our Sacred Pledge", gu: "અમારો સંકલ્પ" },
  eventsPledgeDesc: {
    hi: "कल्लाजी राठौड़ के जीवन और उनके आदर्शों से प्रेरणा लेते हुए हम वीरता, सेवा, संस्कार, एकता और समाज के प्रति जिम्मेदारी की भावना को आगे बढ़ाने का संकल्प लेते हैं।",
    en: "Drawing inspiration from the noble life of Kallaji Rathore, we pledge to uphold courage, selfless service, sacred culture, unity, and social responsibility.",
    gu: "કલ્લાજી રાઠોડના જીવનમાંથી પ્રેરણા લઈને અમે વીરતા, સેવા, સંસ્કાર, એકતા અને સામાજિક જવાબદારીની ભાવનાને આગળ વધારવાનો સંકલ્પ કરીએ છીએ.",
  },
  eventsChant1: { hi: "जय श्री कल्लाजी महाराज।", en: "Jai Shri Kallaji Maharaj!", gu: "જય શ્રી કલ્લાજી મહારાજ." },
  eventsChant2: { hi: "वीर कल्लाजी राठौड़ अमर रहें।", en: "Long Live the Legend of Veer Kallaji Rathore!", gu: "વીર કલ્લાજી રાઠોડ અમર રહો." },

  eventsBookingTitle: { hi: "विशेष पूजा व सेवा सहयोग", en: "Special Pooja & Seva Inquiries", gu: "વિશેષ પૂજા અને સેવા સહયોગ" },
  eventsBookingDesc: {
    hi: "जन्मोत्सव, हवन या विशेष पूजा सेवा हेतु मंदिर कार्यालय से संपर्क करें।",
    en: "For Janmotsav, Havan, or special pooja seva, please contact the temple office.",
    gu: "જન્મોત્સવ, હવન કે વિશેષ પૂજા સેવા માટે મંદિર કાર્યાલયનો સંપર્ક કરો.",
  },

  // Gallery Page
  galleryTitle: { hi: "चित्र दीर्घा (गैलरी)", en: "Photo Gallery", gu: "ચિત્ર દીર્ઘા (ગેલેરી)" },
  galleryTag: { hi: "कल्याण धाम मोरडी • पावन झलकियाँ", en: "Kalyan Dham Mordi • Sacred Glimpses", gu: "કલ્યાણ ધામ મોરડી • પાવન ઝાંખીઓ" },
  galleryDesc: {
    hi: "कल्याण धाम मोरडी के पावन प्रांगण, दैनिक दर्शन और उत्सवों की सभी 41 मनमोहक झलकियाँ।",
    en: "All 41 enchanting glimpses of Kalyan Dham Mordi's sacred premises, daily darshan, and festivals.",
    gu: "કલ્યાણ ધામ મોરડીના પાવન પ્રાંગણ, દૈનિક દર્શન અને ઉત્સવોની તમામ 41 સુંદર ઝાંખીઓ.",
  },
  galleryTotal: { hi: "कुल चित्र:", en: "Total Photos:", gu: "કુલ ફોટા:" },
  galleryHint: { hi: "* किसी भी चित्र पर क्लिक करके बड़े आकार में देखें", en: "* Click on any photo to view in full resolution", gu: "* કોઈપણ ફોટો પર ક્લિક કરીને મોટો જુઓ" },
  galleryPhotoNumber: { hi: "चित्र", en: "Photo", gu: "ફોટો" },
  galleryOriginal: { hi: "मूल चित्र देखें", en: "View Original Image", gu: "મૂળ ચિત્ર જુઓ" },
  galleryClose: { hi: "बंद करें (Esc)", en: "Close (Esc)", gu: "બંધ કરો (Esc)" },

  // Footer
  footerDesc: {
    hi: "भक्ति, शांति और सेवा का केंद्र — सभी श्रद्धालुओं का हार्दिक स्वागत है।",
    en: "Center of devotion, peace and service — all devotees are cordially welcomed.",
    gu: "ભક્તિ, શાંતિ અને સેવાનું કેન્દ્ર — તમામ ભક્તોનું હાર્દિક સ્વાગત છે.",
  },
  quickLinks: { hi: "त्वरित लिंक", en: "Quick Links", gu: "ઝડપી લિંક્સ" },
  darshanAartiTiming: { hi: "दर्शन व आरती समय", en: "Darshan & Aarti Times", gu: "દર્શન અને આરતી સમય" },
  copyright: {
    hi: "श्री काली कल्याण धाम मंदिर ट्रस्ट. सर्वाधिकार सुरक्षित।",
    en: "Shri Kali Kalyan Dham Mandir Trust. All rights reserved.",
    gu: "શ્રી કાલી કલ્યાણ ધામ મંદિર ટ્રસ્ટ. સર્વાધિકાર સુરક્ષિત.",
  },
  designedBy: {
    hi: "Designed & Developed by",
    en: "Designed & Developed by",
    gu: "Designed & Developed by",
  },
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType>({
  language: "hi",
  setLanguage: () => {},
  t: (key: string) => key,
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>("hi");

  useEffect(() => {
    try {
      const saved = localStorage.getItem("kalyan_dham_lang") as Language;
      if (saved === "hi" || saved === "en" || saved === "gu") {
        setLanguageState(saved);
      } else {
        setLanguageState("hi");
        localStorage.setItem("kalyan_dham_lang", "hi");
      }
    } catch {
      setLanguageState("hi");
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    try {
      localStorage.setItem("kalyan_dham_lang", lang);
    } catch {
      // ignore
    }
  };

  const t = (key: string): string => {
    if (translations[key] && translations[key][language]) {
      return translations[key][language];
    }
    return key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
