import { motion } from "framer-motion";

const FoodCard = ({
  image,
  title,
  selected,
  onClick,
}) => {
  return (
    <motion.div
      whileHover={{
        scale: 1.03,
        y: -5,
      }}
      whileTap={{
        scale: 0.97,
      }}
      onClick={onClick}
      className={`
        relative
        w-full
        max-w-[170px]
        overflow-hidden
        rounded-[20px]
        cursor-pointer
        border
        transition-all
        duration-300

        ${
          selected
            ? "border-pink-500 shadow-[0_0_20px_rgba(236,72,153,0.4)]"
            : "border-white/20 hover:border-pink-300/40"
        }
      `}
    >
      {/* Food Image */}
      <img
        src={image}
        alt={title}
        className="
          w-full
          h-32
          object-cover
          transition-transform
          duration-700
          hover:scale-110
        "
      />

      {/* Overlay */}
      <div
        className="
          absolute
          inset-0
          bg-gradient-to-t
          from-black/90
          via-black/20
          to-transparent
        "
      />

      {/* Selected Heart */}
      {selected && (
        <div
          className="
            absolute
            top-2
            right-2
            w-7
            h-7
            rounded-full
            bg-gradient-to-r
            from-pink-500
            to-rose-500
            flex
            items-center
            justify-center
            text-white
            text-xs
          "
        >
          ❤️
        </div>
      )}

      {/* Content */}
      <div
        className="
          absolute
          bottom-0
          left-0
          right-0
          p-2
        "
      >
        <h2
          className="
            text-white
            text-sm
            font-bold
            text-center
            leading-tight
          "
        >
          {title}
        </h2>

        {selected && (
          <div
            className="
              mt-1
              mx-auto
              w-fit
              px-2
              py-1
              rounded-full
              bg-pink-500
              text-white
              text-[10px]
              font-semibold
            "
          >
            ❤️ Selected
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default FoodCard;