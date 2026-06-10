import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

import FloatingHearts from "../components/effects/FloatingHearts";
import Sparkles from "../components/effects/Sparkles";
import ProposalCard from "../components/proposal/ProposalCard";
import YesPopup from "../components/proposal/YesPopup";
import ProgressBar from "../components/common/ProgressBar";

const ProposalPage = () => {
  const navigate = useNavigate();

  const [showPopup, setShowPopup] =
    useState(false);

  const [noCount, setNoCount] =
    useState(0);

  const noMessages = [
    "🥺 Are you sure?",
    "😭 Please think again...",
    "❤️ What if we had sushi together?",
    "🌸 Just hear me out...",
    "💖 I really like you...",
    "🥹 Please don't break my heart...",
  ];

  const handleNo = () => {
    const message =
      noMessages[
        Math.min(
          noCount,
          noMessages.length - 1
        )
      ];

    setNoCount((prev) => prev + 1);

    alert(message);
  };

  const handleYes = () => {
    setShowPopup(true);
  };

  const handleContinue = () => {
    navigate("/celebration");
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
          "url('/images/bg/bg-proposal.jpeg')",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/65" />

      {/* Pink Glow Effects */}
      <div
        className="
          absolute
          top-0
          left-0

          w-96
          h-96

          bg-pink-500/20
          rounded-full
          blur-3xl
        "
      />

      <div
        className="
          absolute
          bottom-0
          right-0

          w-96
          h-96

          bg-rose-500/20
          rounded-full
          blur-3xl
        "
      />

      {/* Effects */}
      <FloatingHearts />
      <Sparkles />

      {/* Main Content */}
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
          px-4

          flex
          justify-center
        "
      >
        <div className="w-full max-w-3xl">

          <ProgressBar
            currentStep={2}
            totalSteps={8}
          />

          {/* Romantic Heading */}
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              delay: 0.4,
            }}
            className="text-center mb-8"
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
              ❤️ A Special Question ❤️
            </h1>

            <p className="text-white/80 mt-4 text-lg">
              I've been wanting to ask
              you this for a long time...
            </p>
          </motion.div>

          <ProposalCard
            onYes={handleYes}
            onNo={handleNo}
          />

        </div>
      </motion.div>

      {/* Popup */}
      {showPopup && (
        <YesPopup
          onContinue={handleContinue}
        />
      )}
    </div>
  );
};

export default ProposalPage;