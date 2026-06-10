import { motion } from "framer-motion";

const LocationCard = ({
  image,
  title,
  selected,
  onClick,
}) => {
  return (
    <motion.div
      whileHover={{
        scale: 1.03,
        y: -8,
      }}
      whileTap={{
        scale: 0.97,
      }}
      onClick={onClick}
      className={`
        relative
        w-[220px]
        overflow-hidden
        rounded-[24px]
        cursor-pointer
        border
        transition-all
        duration-300

        ${
          selected
            ? "border-pink-500 shadow-[0_0_30px_rgba(236,72,153,0.5)]"
            : "border-white/20 hover:border-pink-300/40"
        }
      `}
    >
      {/* Image */}
      <img
        src={image}
        alt={title}
        className="
          w-full
          h-40
          object-cover
          transition-transform
          duration-700
          hover:scale-110
        "
      />

      {/* Gradient Overlay */}
      <div
        className="
          absolute
          inset-0
          bg-gradient-to-t
          from-black/90
          via-black/30
          to-transparent
        "
      />

      {/* Glass Effect */}
      <div
        className="
          absolute
          inset-0
          bg-white/[0.03]
          backdrop-blur-[1px]
        "
      />

      {/* Selected Heart */}
      {selected && (
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="
            absolute
            top-3
            right-3
            w-8
            h-8
            rounded-full
            bg-gradient-to-r
            from-pink-500
            to-rose-500
            flex
            items-center
            justify-center
            text-white
            text-sm
            shadow-lg
          "
        >
          ❤️
        </motion.div>
      )}

      {/* Content */}
      <div
        className="
          absolute
          bottom-0
          left-0
          right-0
          p-3
        "
      >
        <h2
          className="
            text-white
            text-base
            font-bold
            text-center
          "
        >
          {title}
        </h2>

        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="
              mt-2
              mx-auto
              w-fit
              px-3
              py-1
              rounded-full
              bg-pink-500
              text-white
              text-[11px]
              font-semibold
            "
          >
            ❤️ Selected
          </motion.div>
        )}
      </div>

      {/* Shine Effect */}
      <div
        className="
          absolute
          inset-0
          opacity-0
          hover:opacity-100
          bg-gradient-to-r
          from-transparent
          via-white/10
          to-transparent
          transition-opacity
          duration-500
        "
      />
    </motion.div>
  );
};

export default LocationCard;