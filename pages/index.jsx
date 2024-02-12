import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger"
import { useGSAP } from "@gsap/react";
import { useRouter } from "next/router";
import { useRef } from "react";
import text from "../translations/text";

import Nav from "../components/Nav/Nav";
import AnimatedTextSlide from "../components/AnimatedTextSlide";
import useTranslateSlide from "../hooks/useTranslateSlide";

export default function Home() {

  const router = useRouter();
  const { locale } = router;
  const currentLanguage = text[locale];
  const {slideOne, slideTwo} = useTranslateSlide(currentLanguage, locale);
  const slideOneRef = useRef(null);
  const slideTwoRef = useRef(null);
  gsap.registerPlugin(ScrollTrigger);

  const container = {
    visible: {
      transition: {
        staggerChildren: 0.025
      }
    },
    hidden: {
      transition: {
        staggerChildren: 0
      }
    }
  };

  return (
    <>
      <Nav currentLanguage={currentLanguage} locale={locale}/>
      <div className="home">

        <AnimatedTextSlide
          ref={slideOneRef}
          container={container}
          content={slideOne}
          isSlideOne={true}
          />

        <AnimatedTextSlide
          ref={slideTwoRef}
          container={container}
          content={slideTwo}
          isSlideOne={false}
        />

      </div>
    </>
  );
}
