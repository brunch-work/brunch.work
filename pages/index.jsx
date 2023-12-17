import { useRouter } from "next/router";
import text from "../translations/text";
import { motion } from "framer-motion";

import Nav from "../components/Nav/Nav";
// import AnimatedText from "../components/AnimatedText/AnimatedText";
import AnimatedTextSlide from "../components/AnimatedTextSlide";

export default function Home() {

   const { locale } = useRouter();
   const currentLanguage = text[locale];

  const container = {
    visible: {
      transition: {
        staggerChildren: 0.025
      }
    }
  };

   const slideOne = [
    {type: 'p', text: currentLanguage.hero_1},
    {type: 'span', text: currentLanguage.hero_2},
    {type: 'p', text: currentLanguage.hero_3},
    {type: locale === 'fr' ? 'p' : 'span', text: currentLanguage.hero_4},
    {type: 'span', text: currentLanguage.hero_5},
    {type: 'p', text: currentLanguage.hero_6},
    {type: 'span', text: currentLanguage.hero_7},
   ]

   const slideTwo = [
    {type: 'p', text: currentLanguage.hero_2_1},
    {type: 'span', text: currentLanguage.hero_2_2},
    {type: 'p', text: currentLanguage.hero_2_3},
    {type: 'p', text: currentLanguage.hero_2_4},
    {type: 'span', text: currentLanguage.hero_2_5},
    {type: 'p', text: currentLanguage.hero_2_6},
    {type: 'span', text: currentLanguage.hero_2_7},
    {type: 'p', text: currentLanguage.hero_2_8}
   ]

  return (
    <>
      <Nav currentLanguage={currentLanguage}/>
      <div className="home">

        <AnimatedTextSlide
          container={container}
          content={slideOne}
          isSlideOne={true}
          />

        <AnimatedTextSlide
          container={container}
          content={slideTwo}
          isSlideOne={false}
        />

      </div>
    </>
  );
}
