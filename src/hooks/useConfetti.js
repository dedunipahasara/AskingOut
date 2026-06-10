import confetti from "canvas-confetti";

const useConfetti = () => {
  const celebrate = () => {
    confetti({
      particleCount: 250,
      spread: 120,
      origin: {
        y: 0.6,
      },
    });
  };

  const hearts = () => {
    confetti({
      particleCount: 120,
      spread: 80,
      scalar: 1.2,
    });
  };

  return {
    celebrate,
    hearts,
  };
};

export default useConfetti;