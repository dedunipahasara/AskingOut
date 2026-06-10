const ProgressBar = ({
  currentStep,
  totalSteps,
}) => {
  const progress =
    (currentStep / totalSteps) * 100;

  return (
    <div className="w-full mb-6">
      <div className="w-full h-4 bg-white/20 rounded-full overflow-hidden">

        <div
          className="h-full bg-gradient-to-r from-pink-500 via-rose-500 to-red-500 transition-all duration-700"
          style={{
            width: `${progress}%`,
          }}
        />

      </div>

      <div className="text-center text-pink-200 mt-3 font-bold">
        ❤️ Step {currentStep} of {totalSteps}
      </div>
    </div>
  );
};

export default ProgressBar;