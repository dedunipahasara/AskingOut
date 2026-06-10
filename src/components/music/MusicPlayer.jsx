import { useRef, useState } from "react";
import {
  FaMusic,
  FaPause,
  FaPlay,
  FaHeart,
} from "react-icons/fa";

const MusicPlayer = () => {
  const audioRef = useRef(null);

  const [isPlaying, setIsPlaying] =
    useState(false);

  const toggleMusic = async () => {
    if (!audioRef.current) return;

    try {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        await audioRef.current.play();
        setIsPlaying(true);
      }
    } catch (error) {
      console.error(error);

      alert(
        "❌ Music could not be played.\nCheck your MP3 file."
      );
    }
  };

  return (
    <>
      <audio
        ref={audioRef}
        src="/music/i-really-like-u.mp3"
        loop
        preload="auto"
        onPlay={() =>
          setIsPlaying(true)
        }
        onPause={() =>
          setIsPlaying(false)
        }
        onError={() => {
          alert(
            "❌ MP3 file not found or unsupported."
          );
        }}
      />

      <div
        className="
          fixed
          bottom-6
          right-6
          z-50

          flex
          items-center
          gap-3

          px-5
          py-3

          rounded-full

          bg-white/10
          backdrop-blur-xl

          border
          border-pink-300/20

          shadow-[0_0_30px_rgba(236,72,153,0.3)]
        "
      >
        <div
          className="
            flex
            items-center
            gap-2

            text-pink-300
            font-semibold
          "
        >
          <FaHeart className="animate-pulse" />

          <span>
            Romantic Mode
          </span>
        </div>

        <button
          onClick={toggleMusic}
          className="
            w-12
            h-12

            rounded-full

            bg-gradient-to-r
            from-pink-500
            via-rose-500
            to-red-500

            text-white

            flex
            items-center
            justify-center

            shadow-lg

            hover:scale-110
            transition-all
            duration-300
          "
        >
          {isPlaying ? (
            <FaPause size={18} />
          ) : (
            <FaPlay size={18} />
          )}
        </button>

        <FaMusic
          className="
            text-pink-300
            animate-bounce
          "
        />
      </div>
    </>
  );
};

export default MusicPlayer;