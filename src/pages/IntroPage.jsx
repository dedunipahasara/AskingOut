import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

import FloatingHearts from "../components/effects/FloatingHearts";
import Sparkles from "../components/effects/Sparkles";
import TypingText from "../components/effects/TypingText";

const IntroPage = () => {
  const navigate = useNavigate();

  const handleOpen = () => {
    navigate("/proposal");
  };

  return (
    <div
      className="
        min-h-screen
        relative
        flex
        items-center
        justify-center
        overflow-hidden
        bg-cover
        bg-center
      "
      style={{
        backgroundImage:
          "url('/images/bg/intro-bg.jpeg')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Pink Glow */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-pink-500/20 blur-3xl rounded-full" />

      <div className="absolute bottom-10 right-10 w-72 h-72 bg-rose-500/20 blur-3xl rounded-full" />

      <FloatingHearts />
      <Sparkles />

      <motion.div
        initial={{
          opacity: 0,
          scale: 0.8,
        }}
        animate={{
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 0.8,
        }}
        className="relative z-10 w-full px-4 flex justify-center"
      >
        <div
          className="
            relative
            overflow-hidden

            w-full
            max-w-2xl

            rounded-[32px]

            bg-white/10
            backdrop-blur-2xl

            border
            border-pink-300/20

            shadow-[0_0_50px_rgba(236,72,153,0.25)]

            p-8
            md:p-12
          "
        >
          {/* Glass Shine */}
          <div
            className="
              absolute
              inset-0
              bg-gradient-to-br
              from-white/10
              via-transparent
              to-white/5
            "
          />

          <div className="relative z-10 text-center">

            {/* Heart */}
            <motion.div
              animate={{
                scale: [1, 1.25, 1],
              }}
              transition={{
                repeat: Infinity,
                duration: 2,
              }}
              className="mb-6"
            >
              <div
                className="
                  w-24
                  h-24
                  mx-auto

                  rounded-full

                  bg-gradient-to-r
                  from-pink-500
                  via-rose-500
                  to-red-500

                  flex
                  items-center
                  justify-center

                  text-5xl

                  shadow-lg
                "
              >
                ❤️
              </div>
            </motion.div>

            <TypingText
              text="I Need To Tell You Something..."
            />

            <p
              className="
                text-white/80
                text-lg

                mt-6

                max-w-md
                mx-auto
              "
            >
              There's something I've
              wanted to say for a very
              long time...
            </p>

            <motion.button
              whileHover={{
                scale: 1.05,
              }}
              whileTap={{
                scale: 0.95,
              }}
              onClick={handleOpen}
              className="
                mt-10

                px-8
                py-4

                rounded-full

                bg-gradient-to-r
                from-pink-500
                via-rose-500
                to-red-500

                text-white
                font-bold
                text-lg

                shadow-lg
                shadow-pink-500/30
              "
            >
              💌 Open My Letter
            </motion.button>

            <p className="text-pink-200 text-sm mt-5">
              Click to continue ❤️
            </p>

          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default IntroPage;