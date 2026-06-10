import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import confetti from "canvas-confetti";

import FloatingHearts from "../components/effects/FloatingHearts";
import Sparkles from "../components/effects/Sparkles";
import MusicPlayer from "../components/music/MusicPlayer";
import ProgressBar from "../components/common/ProgressBar";

const CelebrationPage = () => {
  const navigate = useNavigate();

  const [showButton, setShowButton] =
    useState(false);

  useEffect(() => {
    confetti({
      particleCount: 300,
      spread: 150,
      origin: {
        y: 0.6,
      },
    });

    const timer = setTimeout(() => {
      setShowButton(true);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

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

      {/* Glow Effects */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl" />

      <div className="absolute bottom-0 right-0 w-96 h-96 bg-rose-500/20 rounded-full blur-3xl" />

      <FloatingHearts />
      <Sparkles />

      {/* Music */}
      <MusicPlayer />

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
        className="
          relative
          z-10

          w-full
          max-w-3xl
          px-4
        "
      >
        <ProgressBar
          currentStep={3}
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

            {/* Animated Heart */}
            <motion.div
              animate={{
                scale: [1, 1.25, 1],
                rotate: [0, 8, -8, 0],
              }}
              transition={{
                repeat: Infinity,
                duration: 2,
              }}
              className="mb-8"
            >
              <div
                className="
                  w-32
                  h-32
                  mx-auto

                  rounded-full

                  bg-gradient-to-r
                  from-pink-500
                  via-rose-500
                  to-red-500

                  flex
                  items-center
                  justify-center

                  text-6xl

                  shadow-lg
                  shadow-pink-500/40
                "
              >
                ❤️
              </div>
            </motion.div>

            <h1
              className="
                text-5xl
                md:text-7xl

                font-extrabold

                bg-gradient-to-r
                from-pink-300
                via-rose-300
                to-red-300

                bg-clip-text
                text-transparent
              "
            >
              She Said Yes!
            </h1>

            <p
              className="
                text-white/90
                text-xl

                mt-8
              "
            >
              You just made this moment
              unforgettable 💖
            </p>

            <p
              className="
                text-pink-200
                text-lg

                mt-3
              "
            >
              Let's plan our first
              date together ✨
            </p>

            <div className="mt-8 text-3xl">
              ❤️ 💖 🌹 💕 ✨ ❤️
            </div>

            {showButton && (
              <motion.button
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                whileHover={{
                  scale: 1.05,
                }}
                whileTap={{
                  scale: 0.95,
                }}
                onClick={() =>
                  navigate("/meet")
                }
                className="
                  mt-10

                  px-10
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
                  shadow-pink-500/40
                "
              >
                Continue Our Story ❤️
              </motion.button>
            )}

          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default CelebrationPage;