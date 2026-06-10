const Sparkles = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {[...Array(30)].map((_, i) => (
        <span
          key={i}
          className="absolute animate-pulse text-yellow-300"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            fontSize: `${10 + Math.random() * 15}px`,
          }}
        >
          ✨
        </span>
      ))}
    </div>
  );
};

export default Sparkles;