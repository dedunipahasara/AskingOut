import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

import FloatingHearts from "../components/effects/FloatingHearts";
import Sparkles from "../components/effects/Sparkles";
import ProgressBar from "../components/common/ProgressBar";

const MeetPage = () => {
  const navigate = useNavigate();

  const handleYes = () => {
    navigate("/datetime");
  };

  const handleNo = () => {
    alert(
      "🥺 That's okay. But I'd still love to spend some time with you someday ❤️"
    );
  };

  return (
    <div
      className="
        min-h-screen
        relative
        overflow-hidden
        flex
        items-center
        justify-center
        bg-cover
        bg-center
      "
      style={{
        backgroundImage:
          "url('/images/bg/bg-date.jpeg')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/65" />

      {/* Pink Glows */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl" />

      <div className="absolute bottom-0 right-0 w-96 h-96 bg-rose-500/20 rounded-full blur-3xl" />

      <FloatingHearts />
      <Sparkles />

      <motion.div
        initial={{
          opacity: 0,
          y: 50,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.8,
        }}
        className="
          relative
          z-10

          w-full
          max-w-3xl
          px-4
        "
      >
        <ProgressBar
          currentStep={4}
          totalSteps={8}
        />

        <div
          className="
            relative
            overflow-hidden

            rounded-[32px]

            bg-white/10
            backdrop-blur-2xl

            border
            border-pink-300/20

            shadow-[0_0_50px_rgba(236,72,153,0.25)]

            p-10
          "
        >
          {/* Shine */}
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

            {/* Floating Heart */}
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                y: [0, -10, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
              className="mb-6"
            >
              <div
                className="
                  w-28
                  h-28
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
                💕
              </div>
            </motion.div>

            <h1
              className="
                text-5xl
                md:text-6xl

                font-extrabold

                bg-gradient-to-r
                from-pink-300
                via-rose-300
                to-red-300

                bg-clip-text
                text-transparent
              "
            >
              Would You Like
              To Meet?
            </h1>

            <p
              className="
                text-white/80
                text-lg

                mt-6

                max-w-lg
                mx-auto
              "
            >
              Let's create a beautiful
              memory together and make
              our first date unforgettable ❤️
            </p>

            <div
              className="
                flex
                justify-center
                gap-5

                mt-10

                flex-wrap
              "
            >
              <motion.button
                whileHover={{
                  scale: 1.05,
                }}
                whileTap={{
                  scale: 0.95,
                }}
                onClick={handleYes}
                className="
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
                Yes ❤️
              </motion.button>

              <motion.button
                whileHover={{
                  scale: 1.05,
                }}
                whileTap={{
                  scale: 0.95,
                }}
                onClick={handleNo}
                className="
                  px-8
                  py-4

                  rounded-full

                  border
                  border-white/30

                  bg-white/10
                  backdrop-blur-xl

                  text-white
                  font-semibold
                "
              >
                Maybe 🤍
              </motion.button>
            </div>

          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default MeetPage;