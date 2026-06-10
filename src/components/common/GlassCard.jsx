const GlassCard = ({
  children,
  className = "",
}) => {
  return (
    <div
      className={`
        relative
        w-full
        max-w-2xl
        p-8 md:p-10

        rounded-[32px]

        bg-white/10
        backdrop-blur-2xl

        border
        border-white/20

        shadow-[0_8px_32px_rgba(255,20,147,0.25)]

        overflow-hidden

        transition-all
        duration-500

        hover:scale-[1.02]

        ${className}
      `}
    >
      {/* Top Glow */}
      <div
        className="
          absolute
          -top-24
          -left-24
          w-60
          h-60
          bg-pink-400/20
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
          w-60
          h-60
          bg-rose-500/20
          rounded-full
          blur-3xl
        "
      />

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
        {children}
      </div>
    </div>
  );
};

export default GlassCard;