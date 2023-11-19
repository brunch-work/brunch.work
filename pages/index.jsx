import { useRouter } from "next/router";
import text from "../translations/text";
import { motion } from "framer-motion";

import Nav from "../components/Nav/Nav";
import AnimatedText from "../components/AnimatedText/AnimatedText";

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

        <motion.div
          className="text-slide"
          initial="hidden"
          animate="visible"
          variants={container}
        >
          <div className="main-grid">
            <div className="margin"/>
            <div className="main-body">
              <div className="text-slide__wrapper">
                {slideOne.map((item, index) => {
                  return (<AnimatedText {...item} key={index} />)
                })}
              </div>
            </div>
            <div className="margin"/>
          </div>
        </motion.div>


        <motion.div
          className="text-slide text-slide--second"
          initial="hidden"
          animate="visible"
          variants={container}
        >
          <div className="main-grid">
            <div className="margin"/>
            <div className="main-body">
              <div className="text-slide__wrapper">
                {slideTwo.map((item, index) => {
                  return (<AnimatedText {...item} key={index} />)
                })}
              </div>
            </div>
            <div className="margin"/>
          </div>
        </motion.div>

      </div>
    </>
  );
}
