'use client'
import { useRouter } from "next/router";
import text from "../translations/text";

import Nav from "../components/Nav/Nav";
import Footer from "../components/Footer/index";
import AnimatedTextSlide from "../components/AnimatedTextSlide";
import useTranslateSlide from "../hooks/useTranslateSlide";

export default function Home() {
  const router = useRouter();
  const { locale } = router;
  const currentLanguage = text[locale];
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
    <>
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
                  <p>Design</p>
                </div>
                <div className="column column--right">
                  <ul>
                    <li>Brand Identity</li>
                    <li>Web Design & Development</li>
                    <li>Content Strategy & Production</li>
                  </ul>
                </div>
              </div>

              <div className="block block--operations">
                <div className="column column--left">
                  <p>Operations</p>
                </div>
                <div className="column column--right">
                  <ul>
                    <li>Operational Consulting</li>
                    <li>Recruitment</li>
                  </ul>
                </div>
              </div>

              <div className="block block--contact">
                <div className="column column--left" />
                <div className="column column--right">
                  <a href="https://3l27bruyzob.typeform.com/to/NpR7mDJ8" target="_blank">
                    See our detailed capabilities
                  </a>
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      id="Vector"
                      d="M17.9922 0.00978898L18 14.7501H15.5253L15.5214 4.36785L1.88732 18L0 16.1107L13.6341 2.48053L3.22449 2.50402L3.19709 0L17.9922 0.00978898Z"
                      fill="#D7D2CB"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <div className="margin" />
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
}
