import { FaCopy } from "react-icons/fa";
import toast from "react-hot-toast";

const CopyButton = ({ text }) => {
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);

      toast.success("❤️ Date Details Copied!");
    } catch (error) {
      toast.error("❌ Copy Failed");
    }
  };

  return (
    <button
      onClick={handleCopy}
      className="
        group
        relative
        overflow-hidden

        px-6
        py-3

        rounded-full

        bg-gradient-to-r
        from-pink-500
        via-rose-500
        to-red-500

        text-white
        font-semibold

        shadow-lg
        shadow-pink-500/30

        transition-all
        duration-300

        hover:scale-105
        hover:shadow-pink-500/50

        active:scale-95

        flex
        items-center
        gap-3
      "
    >
      {/* Shine Effect */}
      <span
        className="
          absolute
          inset-0
          -translate-x-full
          bg-gradient-to-r
          from-transparent
          via-white/20
          to-transparent
          group-hover:translate-x-full
          transition-transform
          duration-1000
        "
      />

      <FaCopy className="text-lg relative z-10" />

      <span className="relative z-10">
        Copy Date Details ❤️
      </span>
    </button>
  );
};

export default CopyButton;