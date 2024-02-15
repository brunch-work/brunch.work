import { motion } from "framer-motion";

export default function AnimatedText({ word, className }) {
  const Wrapper = (props) => {
    return <span className="word-wrapper">{props.children}</span>;
  };

  const item = {
    hidden: {
      y: "200%",
      transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.85 },
    },
    visible: {
      y: 0,
      transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.75 },
    },
  };

  console.log(`"${word}"`);

  return (
    <div className={className}>
      <Wrapper>
        <motion.span
          className="word"
          style={{ display: "inline-block" }}
          variants={item}
        >
          {word}
        </motion.span>
      </Wrapper>
    </div>
  );
}
