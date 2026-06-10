import { motion } from "framer-motion";
import { FaEnvelopeOpen, FaHeart } from "react-icons/fa";

const LoveLetter = ({ onOpen }) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        scale: 0.7,
        y: 100,
      }}
      animate={{
        opacity: 1,
        scale: 1,
        y: 0,
      }}
      transition={{
        duration: 0.8,
        ease: "easeOut",
      }}
      className="
        relative
        overflow-hidden

        w-full
        max-w-lg

        rounded-[32px]

        bg-white/10
        backdrop-blur-2xl

        border
        border-pink-300/20

        shadow-[0_0_40px_rgba(236,72,153,0.25)]

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

        {/* Envelope Icon */}
        <motion.div
          animate={{
            y: [0, -10, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 2,
          }}
          className="flex justify-center"
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
            <FaEnvelopeOpen
              size={42}
              className="text-white"
            />
          </div>
        </motion.div>

        {/* Hearts */}
        <div className="flex justify-center gap-3 mt-4">
          <FaHeart className="text-pink-400 animate-pulse" />
          <FaHeart className="text-rose-400 animate-pulse" />
          <FaHeart className="text-red-400 animate-pulse" />
        </div>

        {/* Title */}
        <h1
          className="
            mt-6

            text-4xl
            md:text-5xl

            font-extrabold

            bg-gradient-to-r
            from-pink-300
            via-rose-300
            to-red-300

            bg-clip-text
            text-transparent
          "
        >
          I Need To Tell You
          Something...
        </h1>

        {/* Subtitle */}
        <p
          className="
            mt-5
            text-white/80
            text-lg
            leading-relaxed
          "
        >
          There's something I've
          wanted to ask you for a
          long time ❤️
        </p>

        {/* Button */}
        <motion.button
          whileHover={{
            scale: 1.05,
          }}
          whileTap={{
            scale: 0.95,
          }}
          onClick={onOpen}
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

            transition-all
            duration-300
          "
        >
          💌 Open My Letter
        </motion.button>

      </div>
    </motion.div>
  );
};

export default LoveLetter;