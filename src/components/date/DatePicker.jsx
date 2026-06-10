import { FaCalendarAlt } from "react-icons/fa";

const DatePicker = ({
  value,
  onChange,
}) => {
  return (
    <div className="w-full">

      <label
        className="
          flex
          items-center
          gap-2
          text-pink-200
          font-semibold
          mb-3
          text-lg
        "
      >
        <FaCalendarAlt />
        Select Our Date ❤️
      </label>

      <div className="relative">

        <input
          type="date"
          value={value}
          onChange={(e) =>
            onChange(e.target.value)
          }
          className="
            w-full
            px-5
            py-4

            rounded-2xl

            bg-white/10
            backdrop-blur-xl

            border
            border-pink-300/20

            text-white
            text-lg

            outline-none

            shadow-lg
            shadow-pink-500/10

            transition-all
            duration-300

            hover:border-pink-400/50
            focus:border-pink-500
            focus:shadow-pink-500/30
          "
        />

      </div>

    </div>
  );
};

export default DatePicker;