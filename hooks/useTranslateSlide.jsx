const useTranslateSlide = (currentLanguage, locale) => {

    let slideOne = [];
    let slideTwo = [];

    if (locale === "en") {
      slideOne = [
        { class: "font--main", text: currentLanguage.hero_1 },
        { class: "font--alt", text: currentLanguage.hero_2 },
        { class: "font--main", text: currentLanguage.hero_3 },
        { class: "font--alt", text: currentLanguage.hero_4 },
        { class: "font--alt", text: currentLanguage.hero_5 },
        { class: "font--main", text: currentLanguage.hero_6 },
        { class: "font--main", text: currentLanguage.hero_7 },
        { class: "font--alt", text: currentLanguage.hero_8 },
        { class: "font--alt", text: currentLanguage.hero_9 },
      ];

      slideTwo = [
        { class: "font--main", text: currentLanguage.hero_2_1 },
        { class: "font--alt", text: currentLanguage.hero_2_2 },
        { class: "font--main", text: currentLanguage.hero_2_3 },
        { class: "font--main", text: currentLanguage.hero_2_4 },
        { class: "font--alt", text: currentLanguage.hero_2_5 },
        { class: "font--main", text: currentLanguage.hero_2_6 },
        { class: "font--alt", text: currentLanguage.hero_2_7 },
        { class: "font--main", text: currentLanguage.hero_2_8 },
      ];
    } else {
      slideOne = [
        { class: "font--main", text: currentLanguage.hero_1 },
        { class: "font--alt", text: currentLanguage.hero_2 },
        { class: "font--main", text: currentLanguage.hero_3 },
        { class: "font--main", text: currentLanguage.hero_4 },
        { class: "font--main", text: currentLanguage.hero_5 },
        { class: "font--alt", text: currentLanguage.hero_6 },
        { class: "font--alt", text: currentLanguage.hero_7 },
        { class: "font--main", text: currentLanguage.hero_8 },
        { class: "font--alt", text: currentLanguage.hero_9 },
      ];

      slideTwo = [
        { class: "font--main", text: currentLanguage.hero_2_1 },
        { class: "font--alt", text: currentLanguage.hero_2_2 },
        { class: "font--main", text: currentLanguage.hero_2_3 },
        { class: "font--main", text: currentLanguage.hero_2_4 },
        { class: "font--main", text: currentLanguage.hero_2_5 },
        { class: "font--main", text: currentLanguage.hero_2_6 },
        { class: "font--alt", text: currentLanguage.hero_2_7 },
        { class: "font--alt", text: currentLanguage.hero_2_8 },
      ];
    }

    return { slideOne, slideTwo }
}

export default useTranslateSlide;