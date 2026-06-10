import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

import FloatingHearts from "../components/effects/FloatingHearts";
import Sparkles from "../components/effects/Sparkles";
import ProgressBar from "../components/common/ProgressBar";
import DatePicker from "../components/date/DatePicker";
import TimePicker from "../components/date/TimePicker";

const DateTimePage = () => {
  const navigate = useNavigate();

  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const handleNext = () => {
    if (!date || !time) {
      alert(
        "❤️ Please select both a date and time."
      );
      return;
    }

    localStorage.setItem("date", date);
    localStorage.setItem("time", time);

    navigate("/location");
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

      {/* Romantic Glow */}
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
          max-w-2xl
          px-4
        "
      >
        <ProgressBar
          currentStep={5}
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

            p-8
            md:p-10
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

          <div className="relative z-10">

            {/* Header */}
            <div className="text-center mb-8">

              <motion.div
                animate={{
                  scale: [1, 1.15, 1],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 2,
                }}
                className="text-6xl mb-4"
              >
                📅❤️
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
                "
              >
                Pick Our Date
              </h1>

              <p
                className="
                  text-white/80
                  text-lg
                  mt-4
                "
              >
                When should our special
                day begin? ✨
              </p>

            </div>

            {/* Date Picker */}
            <div className="mb-6">
              <DatePicker
                value={date}
                onChange={setDate}
              />
            </div>

            {/* Time Picker */}
            <div>
              <TimePicker
                value={time}
                onChange={setTime}
              />
            </div>

            {/* Preview */}
            {(date || time) && (
              <motion.div
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: 1,
                }}
                className="
                  mt-8

                  rounded-2xl

                  bg-white/10
                  backdrop-blur-xl

                  border
                  border-pink-300/20

                  p-5

                  text-center
                "
              >
                <h3
                  className="
                    text-pink-300
                    font-bold
                    text-lg
                  "
                >
                  ❤️ Our Date Preview
                </h3>

                <p className="text-white mt-2">
                  📅 {date || "Select Date"}
                </p>

                <p className="text-white">
                  ⏰ {time || "Select Time"}
                </p>
              </motion.div>
            )}

            {/* Next Button */}
            <div className="flex justify-center">

              <motion.button
                whileHover={{
                  scale: 1.05,
                }}
                whileTap={{
                  scale: 0.95,
                }}
                onClick={handleNext}
                className="
                  mt-8

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
                Continue ❤️
              </motion.button>

            </div>

          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default DateTimePage;