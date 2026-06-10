import confetti from "canvas-confetti";

const ConfettiEffect = () => {
  confetti({
    particleCount: 150,
    spread: 100,
    origin: { y: 0.6 },
  });

  return null;
};

export default ConfettiEffect;