import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

import FloatingHearts from "../components/effects/FloatingHearts";
import Sparkles from "../components/effects/Sparkles";
import ProgressBar from "../components/common/ProgressBar";
import FoodCard from "../components/date/FoodCard";

import { foods } from "../data/foods";

const FoodPage = () => {
  const navigate = useNavigate();

  const [selectedFood, setSelectedFood] =
    useState(null);

  const handleNext = () => {
    if (!selectedFood) {
      alert(
        "🍣 Please choose something delicious ❤️"
      );
      return;
    }

    localStorage.setItem(
      "food",
      JSON.stringify(selectedFood)
    );

    navigate("/summary");
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

      <div className="relative z-10 max-w-[1600px] mx-auto px-4 py-10">

        <ProgressBar
          currentStep={7}
          totalSteps={8}
        />

        {/* Header */}
        <motion.div
          initial={{
            opacity: 0,
            y: -30,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          className="text-center mb-12"
        >
          <motion.div
            animate={{
              scale: [1, 1.1, 1],
            }}
            transition={{
              repeat: Infinity,
              duration: 2,
            }}
            className="text-6xl mb-4"
          >
            🍣❤️
          </motion.div>

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
            What Would You Like To Eat?
          </h1>

          <p
            className="
              text-white/80
              text-lg
              mt-4
            "
          >
            Let's choose something delicious
            for our date ❤️
          </p>
        </motion.div>

        {/* Food Grid */}
        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            delay: 0.2,
          }}
          className="
            grid
            grid-cols-2
            sm:grid-cols-3
            md:grid-cols-4
            lg:grid-cols-5
            xl:grid-cols-7
            gap-4
            justify-items-center
          "
        >
          {foods.map((food) => (
            <FoodCard
              key={food.id}
              image={food.image}
              title={food.title}
              selected={
                selectedFood?.id === food.id
              }
              onClick={() =>
                setSelectedFood(food)
              }
            />
          ))}
        </motion.div>

        {/* Selected Food */}
        {selectedFood && (
          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            className="
              mt-10
              max-w-md
              mx-auto
              rounded-3xl
              bg-white/10
              backdrop-blur-xl
              border
              border-pink-300/20
              p-5
              text-center
            "
          >
            <h2
              className="
                text-2xl
                font-bold
                text-pink-300
              "
            >
              ❤️ Selected Food
            </h2>

            <p
              className="
                text-white
                text-lg
                mt-3
              "
            >
              {selectedFood.title}
            </p>
          </motion.div>
        )}

        {/* Finish Button */}
        <div className="text-center mt-12">
          <motion.button
            whileHover={{
              scale: 1.05,
            }}
            whileTap={{
              scale: 0.95,
            }}
            onClick={handleNext}
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
            Finish Our Date Plan ❤️
          </motion.button>
        </div>

      </div>
    </div>
  );
};

export default FoodPage;