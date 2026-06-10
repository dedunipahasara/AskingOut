import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const TypingText = ({
  text,
  speed = 80,
}) => {
  const [displayText, setDisplayText] =
    useState("");

  useEffect(() => {
    let index = 0;

    const interval = setInterval(() => {
      setDisplayText(
        text.slice(0, index + 1)
      );

      index++;

      if (index >= text.length) {
        clearInterval(interval);
      }
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed]);

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 20,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.8,
      }}
      className="text-center"
    >
      <h1
        className="
          text-4xl
          md:text-6xl
          font-extrabold

          bg-gradient-to-r
          from-pink-300
          via-rose-300
          to-red-300

          bg-clip-text
          text-transparent

          drop-shadow-lg
        "
      >
        {displayText}

        <span
          className="
            inline-block
            ml-1
            text-pink-300
            animate-pulse
          "
        >
          |
        </span>
      </h1>

      <div
        className="
          mt-4
          w-32
          h-1
          mx-auto

          rounded-full

          bg-gradient-to-r
          from-pink-500
          via-rose-500
          to-red-500
        "
      />
    </motion.div>
  );
};

export default TypingText;