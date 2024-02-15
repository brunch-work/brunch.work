import { motion } from "framer-motion";

export default function AnimatedText(props) {

  const Wrapper = (props) => {
      return <span className="word-wrapper">{props.children}</span>;
  }

  // const tagMap = {
  //   p: "p",
  //   span: "span",
  // };

  const item = {
      hidden: {
        y: "200%",
        transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.85 }
      },
      visible: {
        y: 0,
        transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.75 }
      }
    };

  //  Split each word of props.text into an array
  const splitWords = props.text.split(" ");

  // Create storage array
  const words = [];

  // Push each word into words array
  for (const [, item] of splitWords.entries()) {
  words.push(item.split(""));
  }

  // Add a space ("\u00A0") to the end of each word
  words.map((word) => {
  return word.push("\u00A0");
  });

  // // Get the tag name from tagMap
  // const Tag = tagMap[props.type];

  return (
  <div className={props.class}>
    {words.map((word, index) => {
      return (
        // Wrap each word in the Wrapper component
        <Wrapper key={index}>
            <motion.span
              className="word"
              style={{ display: "inline-block" }}
              variants={item}
            >
              {word}
            </motion.span>
        </Wrapper>
      );
    })}
  </div>
  )
}