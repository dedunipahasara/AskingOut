import { motion } from "framer-motion";
import { FaHeart } from "react-icons/fa";

const ProposalCard = ({
  onYes,
  onNo,
}) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 100,
        scale: 0.8,
      }}
      animate={{
        opacity: 1,
        y: 0,
        scale: 1,
      }}
      transition={{
        duration: 0.8,
      }}
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
      {/* Top Glow */}
      <div
        className="
          absolute
          -top-24
          -left-24

          w-72
          h-72

          bg-pink-500/20
          rounded-full
          blur-3xl
        "
      />

      {/* Bottom Glow */}
      <div
        className="
          absolute
          -bottom-24
          -right-24

          w-72
          h-72

          bg-rose-500/20
          rounded-full
          blur-3xl
        "
      />

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

        {/* Heart Badge */}
        <motion.div
          animate={{
            scale: [1, 1.25, 1],
            y: [0, -8, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 2,
          }}
          className="mb-8"
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

              shadow-lg
              shadow-pink-500/40
            "
          >
            <FaHeart
              size={45}
              className="text-white"
            />
          </div>
        </motion.div>

        {/* Heading */}
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
          "
        >
          Will You Be
        </h1>

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

            mt-2
          "
        >
          My Girlfriend?
        </h1>

        {/* Message */}
        <p
          className="
            text-white/80
            text-lg

            mt-8

            max-w-xl
            mx-auto
            leading-relaxed
          "
        >
          You make my world brighter,
          my days happier, and my heart
          smile every time I think of you ❤️
        </p>

        <p
          className="
            text-pink-200
            text-lg

            mt-4
          "
        >
          So I have one question...
        </p>

        {/* Buttons */}
        <div
          className="
            flex
            justify-center
            gap-5

            mt-10

            flex-wrap
          "
        >
          {/* Yes Button */}
          <motion.button
            whileHover={{
              scale: 1.08,
            }}
            whileTap={{
              scale: 0.95,
            }}
            onClick={onYes}
            className="
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
            Yes ❤️
          </motion.button>

          {/* No Button */}
          <motion.button
            whileHover={{
              scale: 1.05,
            }}
            whileTap={{
              scale: 0.95,
            }}
            onClick={onNo}
            className="
              px-10
              py-4

              rounded-full

              border
              border-white/30

              bg-white/10
              backdrop-blur-xl

              text-white
              font-semibold
              text-lg

              hover:bg-white/20

              transition-all
              duration-300
            "
          >
            No 🤍
          </motion.button>
        </div>

        {/* Bottom Hearts */}
        <div className="flex justify-center gap-3 mt-8 text-2xl">
          ❤️ 💖 🌹 💕 ❤️
        </div>

      </div>
    </motion.div>
  );
};

export default ProposalCard;