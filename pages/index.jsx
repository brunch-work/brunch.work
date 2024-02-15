import { useRouter } from "next/router";
import text from "../translations/text";

import Nav from "../components/Nav/Nav";
import AnimatedTextSlide from "../components/AnimatedTextSlide";
import useTranslateSlide from "../hooks/useTranslateSlide";

export default function Home(pageProps) {

  const router = useRouter();
  const { locale } = router;
  const currentLanguage = text[locale];
  const {slideOne, slideTwo} = useTranslateSlide(currentLanguage, locale);

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
