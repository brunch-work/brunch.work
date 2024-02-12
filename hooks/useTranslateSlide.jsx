const useTranslateSlide = (currentLanguage, locale) => {

    let slideOne = [];
    let slideTwo = [];

    if (currentLanguage === "en") {
      slideOne = [
        { type: "p", text: currentLanguage.hero_1 },
        { type: "span", text: currentLanguage.hero_2 },
        { type: "p", text: currentLanguage.hero_3 },
        { type: locale === "fr" ? "p" : "span", text: currentLanguage.hero_4 },
        { type: "span", text: currentLanguage.hero_5 },
        { type: "p", text: currentLanguage.hero_6 },
        { type: "p", text: currentLanguage.hero_7 },
        { type: "span", text: currentLanguage.hero_8 },
        { type: "span", text: currentLanguage.hero_9 },
      ];

      slideTwo = [
        { type: "p", text: currentLanguage.hero_2_1 },
        { type: "span", text: currentLanguage.hero_2_2 },
        { type: "p", text: currentLanguage.hero_2_3 },
        { type: "p", text: currentLanguage.hero_2_4 },
        { type: "span", text: currentLanguage.hero_2_5 },
        { type: "p", text: currentLanguage.hero_2_6 },
        { type: "span", text: currentLanguage.hero_2_7 },
        { type: "p", text: currentLanguage.hero_2_8 },
      ];
    } else {
      slideOne = [
        { type: "p", text: currentLanguage.hero_1 },
        { type: "span", text: currentLanguage.hero_2 },
        { type: "p", text: currentLanguage.hero_3 },
        { type: locale === "fr" ? "p" : "span", text: currentLanguage.hero_4 },
        { type: "span", text: currentLanguage.hero_5 },
        { type: "span", text: currentLanguage.hero_6 },
        { type: "p", text: currentLanguage.hero_7 },
        { type: "span", text: currentLanguage.hero_8 },
        { type: "span", text: currentLanguage.hero_9 },
      ];

      slideTwo = [
        { type: "p", text: currentLanguage.hero_2_1 },
        { type: "span", text: currentLanguage.hero_2_2 },
        { type: "p", text: currentLanguage.hero_2_3 },
        { type: "p", text: currentLanguage.hero_2_4 },
        { type: "p", text: currentLanguage.hero_2_5 },
        { type: "span", text: currentLanguage.hero_2_6 },
        { type: "p", text: currentLanguage.hero_2_7 },
        { type: "p", text: currentLanguage.hero_2_8 },
      ];
    }

    return { slideOne, slideTwo }
}

export default useTranslateSlide;