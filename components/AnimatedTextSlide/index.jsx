import { motion } from "framer-motion";

import AnimatedText from "./AnimatedText";

export default function AnimatedTextSlide({ container, content, isSlideOne }) {

  let animation;

  if (isSlideOne) {
    animation = {animate: "visible"}
  } else {
    animation = {whileInView: "visible"}
  }

  return (
    <motion.div
      className={isSlideOne ? "slide hero" : "slide hero hero--second"}
      initial="hidden"
      {...animation}
      variants={container}
      viewport={{ amount: 0.5, once: true }}
    >
      <div className="main-grid">
        <div className="margin" />
        <div className="main-body">
          <div className="hero__wrapper">
            {content.map((word, index) => {
              return (
                <AnimatedText
                  key={index}
                  word={word.word}
                  className={word.class}
                />
              );
            })}
          </div>
        </div>
        <div className="margin" />
      </div>
    </motion.div>
  );
}
