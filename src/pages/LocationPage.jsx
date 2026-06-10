import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

import FloatingHearts from "../components/effects/FloatingHearts";
import Sparkles from "../components/effects/Sparkles";
import ProgressBar from "../components/common/ProgressBar";
import LocationCard from "../components/date/LocationCard";

import { locations } from "../data/locations";

const LocationPage = () => {
  const navigate = useNavigate();

  const [selectedLocation, setSelectedLocation] =
    useState(null);

  const handleNext = () => {
    if (!selectedLocation) {
      alert("📍 Please select a location ❤️");
      return;
    }

    localStorage.setItem(
      "location",
      JSON.stringify(selectedLocation)
    );

    navigate("/food");
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

      {/* Pink Glow Effects */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl" />

      <div className="absolute bottom-0 right-0 w-96 h-96 bg-rose-500/20 rounded-full blur-3xl" />

      <FloatingHearts />
      <Sparkles />

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-10">

        <ProgressBar
          currentStep={6}
          totalSteps={8}
        />

        {/* Heading */}
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
            📍 Pick Our Location
          </h1>

          <p
            className="
              text-white/80
              text-lg
              mt-4
            "
          >
            Where would you like our
            special date to be? ❤️
          </p>
        </motion.div>

        {/* Location Grid */}
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
            grid-cols-1
            sm:grid-cols-2
            md:grid-cols-3
            lg:grid-cols-4
            xl:grid-cols-5
            gap-5
            justify-items-center
          "
        >
          {locations.map((location) => (
            <LocationCard
              key={location.id}
              image={location.image}
              title={location.title}
              selected={
                selectedLocation?.id ===
                location.id
              }
              onClick={() =>
                setSelectedLocation(location)
              }
            />
          ))}
        </motion.div>

        {/* Selected Location */}
        {selectedLocation && (
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
              text-center
              bg-white/10
              backdrop-blur-xl
              border
              border-pink-300/20
              rounded-3xl
              p-6
              max-w-lg
              mx-auto
            "
          >
            <h2
              className="
                text-2xl
                font-bold
                text-pink-300
              "
            >
              ❤️ Selected Location
            </h2>

            <p
              className="
                text-white
                text-xl
                mt-3
              "
            >
              {selectedLocation.title}
            </p>
          </motion.div>
        )}

        {/* Next Button */}
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
              shadow-pink-500/30
            "
          >
            Continue To Food 🍽️ ❤️
          </motion.button>
        </div>

      </div>
    </div>
  );
};

export default LocationPage;