import { motion } from "framer-motion";

import AnimatedText from "./AnimatedText";

export default function AnimatedTextSlide({ container, content, isSlideOne }) {

  return (
    <motion.div
      className={isSlideOne ? "text-slide" : "text-slide text-slide--second"}
      initial="hidden"
      whileInView="visible"
      variants={container}
      viewport={{ amount: 0.5 }}
    >
      <div className="main-grid">
        <div className="margin" />
        <div className="main-body">
          <div className="text-slide__wrapper">
            {content.map((item, index) => {
              return (
                <AnimatedText
                  {...item}
                  key={index}
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
