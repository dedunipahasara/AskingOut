import { useRef, useState } from "react";

const useAudio = (src) => {
  const audioRef = useRef(
    new Audio(src)
  );

  const [isPlaying, setIsPlaying] =
    useState(false);

  const play = async () => {
    try {
      console.log("Audio Source:", src);

      await audioRef.current.play();

      setIsPlaying(true);

      console.log("Playing...");
    } catch (error) {
      console.error(
        "Audio Error:",
        error
      );
    }
  };

  const pause = () => {
    audioRef.current.pause();
    setIsPlaying(false);
  };

  const stop = () => {
    audioRef.current.pause();
    audioRef.current.currentTime = 0;
    setIsPlaying(false);
  };

  return {
    play,
    pause,
    stop,
    isPlaying,
  };
};

export default useAudio;