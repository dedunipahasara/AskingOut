import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

import FloatingHearts from "../components/effects/FloatingHearts";
import Sparkles from "../components/effects/Sparkles";
import ProgressBar from "../components/common/ProgressBar";
import CopyButton from "../components/common/CopyButton";

const SummaryPage = () => {
  const navigate = useNavigate();

  const date =
    localStorage.getItem("date") || "";

  const time =
    localStorage.getItem("time") || "";

  const location = JSON.parse(
    localStorage.getItem("location")
  );

  const food = JSON.parse(
    localStorage.getItem("food")
  );

  const summaryText = `
❤️ DATE CONFIRMED ❤️

📅 Date: ${date}
⏰ Time: ${time}
📍 Location: ${location?.title}
🍣 Food: ${food?.title}

💌 Can't wait to see you ❤️
`;

  const handleDM = () => {
    const message =
      encodeURIComponent(summaryText);

    window.open(
      `https://wa.me/?text=${message}`
    );
  };

  return (
    <div
      className="
        min-h-screen
        relative
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
      <div className="absolute inset-0 bg-black/70" />

      {/* Glow Effects */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-pink-500/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-rose-500/20 rounded-full blur-3xl" />

      <FloatingHearts />
      <Sparkles />

      <div
        className="
          relative
          z-10
          min-h-screen
          flex
          items-center
          justify-center
          px-4
          py-6
        "
      >
        <motion.div
          initial={{
            opacity: 0,
            scale: 0.9,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 0.8,
          }}
          className="
            w-full
            max-w-2xl
          "
        >
          <div
            className="
              relative
              overflow-hidden

              rounded-[28px]

              bg-white/10
              backdrop-blur-2xl

              border
              border-pink-300/20

              shadow-[0_0_40px_rgba(236,72,153,0.2)]

              p-6
            "
          >
            {/* Shine Effect */}
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

            <div className="relative z-10">
              <ProgressBar
                currentStep={8}
                totalSteps={8}
              />

              {/* Header */}
              <div className="text-center">
                <motion.div
                  animate={{
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 2,
                  }}
                  className="text-5xl"
                >
                  ❤️
                </motion.div>

                <h1
                  className="
                    text-4xl
                    md:text-5xl
                    font-extrabold

                    bg-gradient-to-r
                    from-pink-300
                    via-rose-300
                    to-red-300

                    bg-clip-text
                    text-transparent

                    mt-3
                  "
                >
                  Date Confirmed
                </h1>

                <p
                  className="
                    text-white/80
                    mt-3
                    text-base
                  "
                >
                  Everything is ready for our
                  special day ✨
                </p>
              </div>

              {/* Images */}
              <div
                className="
                  grid
                  md:grid-cols-2
                  gap-4
                  mt-6
                "
              >
                {location && (
                  <motion.div
                    whileHover={{
                      y: -4,
                      scale: 1.02,
                    }}
                    className="
                      overflow-hidden
                      rounded-2xl

                      bg-white/10
                      backdrop-blur-xl

                      border
                      border-pink-300/20

                      shadow-[0_8px_25px_rgba(236,72,153,0.15)]
                    "
                  >
                    <img
                      src={location.image}
                      alt={location.title}
                      className="
                        w-full
                        h-36
                        object-cover

                        transition-transform
                        duration-700

                        hover:scale-105
                      "
                    />

                    <div className="p-3 text-center">
                      <h3
                        className="
                          text-white
                          font-bold
                          text-lg
                        "
                      >
                        📍 {location.title}
                      </h3>
                    </div>
                  </motion.div>
                )}

                {food && (
                  <motion.div
                    whileHover={{
                      y: -4,
                      scale: 1.02,
                    }}
                    className="
                      overflow-hidden
                      rounded-2xl

                      bg-white/10
                      backdrop-blur-xl

                      border
                      border-pink-300/20

                      shadow-[0_8px_25px_rgba(236,72,153,0.15)]
                    "
                  >
                    <img
                      src={food.image}
                      alt={food.title}
                      className="
                        w-full
                        h-36
                        object-cover

                        transition-transform
                        duration-700

                        hover:scale-105
                      "
                    />

                    <div className="p-3 text-center">
                      <h3
                        className="
                          text-white
                          font-bold
                          text-lg
                        "
                      >
                        🍣 {food.title}
                      </h3>
                    </div>
                  </motion.div>
                )}
              </div>

              {/* Details */}
              <div
                className="
                  mt-5

                  rounded-2xl

                  bg-white/10
                  backdrop-blur-xl

                  border
                  border-pink-300/20

                  p-4

                  text-white
                "
              >
                <div
                  className="
                    space-y-2
                    text-base
                  "
                >
                  <p>
                    📅 <strong>Date:</strong>{" "}
                    {date}
                  </p>

                  <p>
                    ⏰ <strong>Time:</strong>{" "}
                    {time}
                  </p>

                  <p>
                    📍 <strong>Location:</strong>{" "}
                    {location?.title}
                  </p>

                  <p>
                    🍣 <strong>Food:</strong>{" "}
                    {food?.title}
                  </p>
                </div>
              </div>

              {/* Buttons */}
              <div
                className="
                  flex
                  flex-wrap
                  justify-center
                  gap-3
                  mt-6
                "
              >
                <CopyButton
                  text={summaryText}
                />

                <button
                  onClick={handleDM}
                  className="
                    px-5
                    py-2.5

                    rounded-full

                    bg-gradient-to-r
                    from-green-500
                    to-emerald-500

                    text-white
                    font-bold
                  "
                >
                  💌 DM Me This
                </button>

                <button
                  onClick={() =>
                    navigate("/")
                  }
                  className="
                    px-5
                    py-2.5

                    rounded-full

                    bg-gradient-to-r
                    from-pink-500
                    to-rose-500

                    text-white
                    font-bold
                  "
                >
                  🔄 Start Again
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default SummaryPage;