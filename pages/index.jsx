'use client'
import AnimatedTextSlide from "../components/AnimatedTextSlide";
import useTranslateSlide from "../hooks/useTranslateSlide";
import Inline from "../components/ArrowButton/Inline";

import Footer from "../components/Footer";
import Nav from "../components/Nav/Nav";

export default function Home({currentLanguage, locale, router}) {
  const { slideOne, slideTwo } = useTranslateSlide(currentLanguage, locale);

  const container = {
    visible: {
      transition: {
        staggerChildren: 0.025,
      },
    },
    hidden: {
      transition: {
        staggerChildren: 0,
      },
    },
  };

  return (
    <div className="home__wrapper">
      <Nav currentLanguage={currentLanguage} locale={locale} />
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

        <div className="slide services">
          <div className="main-grid">
            <div className="margin" />
            <div className="main-body">
              <div className="block block--design">
                <div className="column column--left">
                  <p>{currentLanguage.services.design}</p>
                </div>
                <div className="column column--right">
                  <ul>
                    <li>{currentLanguage.services.brandIdentity}</li>
                    <li>{currentLanguage.services.productDes}</li>
                    <li>{currentLanguage.services.webDes}</li>
                    <li>{currentLanguage.services.contStrat}</li>
                  </ul>
                </div>
              </div>

              <div className="block block--operations">
                <div className="column column--left">
                  <p>{currentLanguage.services.operations}</p>
                </div>
                <div className="column column--right">
                  <ul>
                    <li>{currentLanguage.services.opCons}</li>
                    <li>{currentLanguage.services.uxCons}</li>
                  </ul>
                </div>
              </div>

              <div className="block block--contact">
                <div className="column column--left" />
                <div className="column column--right">
                  <Inline
                    text={currentLanguage.services.seeCap}
                    link={currentLanguage.services.typeform}
                    isSmall={true}
                  />
                </div>
              </div>
            </div>
            <div className="margin" />
          </div>
        </div>
      </div>
      <Footer currentLanguage={currentLanguage} router={router} />
    </div>
  );
}
