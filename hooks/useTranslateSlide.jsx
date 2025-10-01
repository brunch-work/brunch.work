const useTranslateSlide = (currentLanguage, locale) => {

    let slideOne = [];
    let slideTwo = [];

    if (locale === "en") {
      slideOne = [
        { class: "font--main", word: currentLanguage.hero_1 },
        { class: "font--main", word: currentLanguage.hero_2 },
        { class: "font--main", word: currentLanguage.hero_3 },
        { class: "font--alt", word: currentLanguage.hero_4 },
        { class: "font--alt", word: currentLanguage.hero_5 },
        { class: "font--main", word: currentLanguage.hero_6 },
        { class: "font--main", word: currentLanguage.hero_7 },
        { class: "font--main", word: currentLanguage.hero_8 },
        { class: "font--alt", word: currentLanguage.hero_9 },
        { class: "font--alt", word: currentLanguage.hero_10 },
        { class: "font--main", word: currentLanguage.hero_11 },
        { class: "font--main", word: currentLanguage.hero_12 },
        { class: "font--main", word: currentLanguage.hero_13 },
        { class: "font--alt", word: currentLanguage.hero_14 },
        { class: "font--alt", word: currentLanguage.hero_15 },
      ];

      slideTwo = [
        { class: "font--main", word: currentLanguage.hero_2_1 },
        { class: "font--main", word: currentLanguage.hero_2_2 },
        { class: "font--main", word: currentLanguage.hero_2_3 },
        { class: "font--main", word: currentLanguage.hero_2_4 },
        { class: "font--alt", word: currentLanguage.hero_2_5 },
        { class: "font--main", word: currentLanguage.hero_2_6 },
        { class: "font--main", word: currentLanguage.hero_2_7 },
        { class: "font--main", word: currentLanguage.hero_2_8 },
        { class: "font--main", word: currentLanguage.hero_2_9 },
        { class: "font--alt", word: currentLanguage.hero_2_10 },
        { class: "font--alt", word: currentLanguage.hero_2_11 },
        { class: "font--main", word: currentLanguage.hero_2_12 },
        { class: "font--main", word: currentLanguage.hero_2_13 },
        { class: "font--main", word: currentLanguage.hero_2_14 },
        { class: "font--main", word: currentLanguage.hero_2_15 },
        { class: "font--alt", word: currentLanguage.hero_2_16 },
        { class: "font--main", word: currentLanguage.hero_2_17 },
        { class: "font--main", word: currentLanguage.hero_2_18 },
      ];
    } else {
      slideOne = [
        { class: "font--main", word: currentLanguage.hero_1 },
        { class: "font--main", word: currentLanguage.hero_2 },
        { class: "font--main", word: currentLanguage.hero_3 },
        { class: "font--alt", word: currentLanguage.hero_4 },
        { class: "font--alt", word: currentLanguage.hero_5 },
        { class: "font--main", word: currentLanguage.hero_6 },
        { class: "font--main", word: currentLanguage.hero_7 },
        { class: "font--main", word: currentLanguage.hero_8 },
        { class: "font--alt", word: currentLanguage.hero_9 },
        { class: "font--main", word: currentLanguage.hero_10 },
        { class: "font--main", word: currentLanguage.hero_11 },
        { class: "font--main", word: currentLanguage.hero_12 },
        { class: "font--main", word: currentLanguage.hero_13 },
        { class: "font--alt", word: currentLanguage.hero_14 },
        { class: "font--alt", word: currentLanguage.hero_15 },
        { class: "font--alt", word: currentLanguage.hero_16 },
      ];

      slideTwo = [
        { class: "font--main", word: currentLanguage.hero_2_1 },
        { class: "font--alt", word: currentLanguage.hero_2_2 },
        { class: "font--main", word: currentLanguage.hero_2_3 },
        { class: "font--main", word: currentLanguage.hero_2_4 },
        { class: "font--alt", word: currentLanguage.hero_2_5 },
        { class: "font--main", word: currentLanguage.hero_2_6 },
        { class: "font--main", word: currentLanguage.hero_2_7 },
        { class: "font--main", word: currentLanguage.hero_2_8 },
        { class: "font--main", word: currentLanguage.hero_2_9 },
        { class: "font--main", word: currentLanguage.hero_2_10 },
        { class: "font--alt", word: currentLanguage.hero_2_11 },
        { class: "font--alt", word: currentLanguage.hero_2_12 },
        { class: "font--alt", word: currentLanguage.hero_2_13 },
        { class: "font--alt", word: currentLanguage.hero_2_14 },
      ];
    }

    return { slideOne, slideTwo }
}

export default useTranslateSlide;