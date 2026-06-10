import { motion } from "framer-motion";
import { FaHeart } from "react-icons/fa";

const YesPopup = ({ onContinue }) => {
  return (
    <div
      className="
        fixed
        inset-0
        z-50

        flex
        items-center
        justify-center

        bg-black/70
        backdrop-blur-md

        px-4
      "
    >
      <motion.div
        initial={{
          scale: 0,
          rotate: -15,
          opacity: 0,
        }}
        animate={{
          scale: 1,
          rotate: 0,
          opacity: 1,
        }}
        transition={{
          duration: 0.6,
          type: "spring",
        }}
        className="
          relative
          overflow-hidden

          w-full
          max-w-md

          rounded-[32px]

          bg-white/10
          backdrop-blur-2xl

          border
          border-pink-300/20

          shadow-[0_0_40px_rgba(236,72,153,0.35)]

          p-8
        "
      >
        {/* Top Glow */}
        <div
          className="
            absolute
            -top-20
            -left-20

            w-56
            h-56

            bg-pink-500/20
            rounded-full
            blur-3xl
          "
        />

        {/* Bottom Glow */}
        <div
          className="
            absolute
            -bottom-20
            -right-20

            w-56
            h-56

            bg-rose-500/20
            rounded-full
            blur-3xl
          "
        />

        <div className="relative z-10 text-center">

          {/* Animated Heart */}
          <motion.div
            animate={{
              scale: [1, 1.3, 1],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
            }}
            className="flex justify-center mb-4"
          >
            <div
              className="
                w-24
                h-24

                rounded-full

                bg-gradient-to-r
                from-pink-500
                via-rose-500
                to-red-500

                flex
                items-center
                justify-center

                shadow-lg
              "
            >
              <FaHeart
                size={40}
                className="text-white"
              />
            </div>
          </motion.div>

          {/* Emoji */}
          <h2 className="text-5xl mb-4">
            😭❤️
          </h2>

          {/* Title */}
          <h1
            className="
              text-4xl
              font-extrabold

              bg-gradient-to-r
              from-pink-300
              via-rose-300
              to-red-300

              bg-clip-text
              text-transparent
            "
          >
            Ohh Really?
          </h1>

          {/* Message */}
          <p
            className="
              mt-5
              text-white/90
              text-lg
            "
          >
            You just made my day ✨
          </p>

          <p
            className="
              mt-2
              text-pink-200
              text-lg
            "
          >
            I really like you ❤️
          </p>

          {/* Hearts */}
          <div className="flex justify-center gap-3 mt-5">
            <FaHeart className="text-pink-400 animate-pulse" />
            <FaHeart className="text-rose-400 animate-pulse" />
            <FaHeart className="text-red-400 animate-pulse" />
          </div>

          {/* Continue Button */}
          <motion.button
            whileHover={{
              scale: 1.05,
            }}
            whileTap={{
              scale: 0.95,
            }}
            onClick={onContinue}
            className="
              mt-8

              px-8
              py-4

              rounded-full

              bg-gradient-to-r
              from-pink-500
              via-rose-500
              to-red-500

              text-white
              font-bold

              shadow-lg
              shadow-pink-500/30
            "
          >
            Continue Our Story 💖
          </motion.button>

        </div>
      </motion.div>
    </div>
  );
};

export default YesPopup;