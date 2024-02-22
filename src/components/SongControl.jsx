import { useEffect, useState } from "react";

const SongControl = ({ audio }) => {
  const [currentTime, setCurrentTime] = useState(0);

  useEffect(() => {
    audio.current.addEventListener("timeupdate", handleTimeUpdate);

    return () => {
      audio.current.removeEventListener("timeupdate", handleTimeUpdate);
    };
  }, []);

  const handleTimeUpdate = () => {
    setCurrentTime(audio.current.currentTime);
  };

  function formatTime(time) {
    if (time === undefined || time === null) return "00:00";

    const formattedSeconds = Math.floor(time);
    const minutes = Math.floor(formattedSeconds / 60);
    const remainingSeconds = formattedSeconds % 60;

    return `${minutes < 10 ? "0" + minutes : minutes}:${
      remainingSeconds < 10 ? "0" + remainingSeconds : remainingSeconds
    }`;
  }

  const duration = audio?.current?.duration ?? 0;
  const result =
    typeof duration === "number" && !isNaN(duration) ? duration : 0;

  return (
    <div className=" w-[500px] items-center gap-4 hidden lg:flex">
      <span className="w-8">{formatTime(currentTime)}</span>
      <input
        type="range"
        value={currentTime}
        max={result}
        min={0}
        onChange={(event) => {
          const newCurrentTime = event.target.value;
          audio.current.currentTime = newCurrentTime;
        }}
        className="w-full h-full appearance-none flex items-center cursor-pointer bg-transparent z-30
        [&::-webkit-slider-thumb]:bg-blue-600 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:border-0 [&::-webkit-slider-thumb]:w-3 [&::-webkit-slider-thumb]:h-2 [&::-webkit-slider-thumb]:appearance-none
        [&::-moz-range-thumb]:bg-blue-600 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:border-0 [&::-moz-range-thumb]:w-2.5 [&::-moz-range-thumb]:h-2 [&::-moz-range-thumb]:appearance-none
        [&::-ms-thumb]:bg-blue-400  [&::-ms-thumb]:rounded-full [&::-ms-thumb]:border-0 [&::-ms-thumb]:w-2.5 [&::-ms-thumb]:h-2.5 [&::-ms-thumb]:appearance-none
        [&::-webkit-slider-runnable-track]:bg-blue-100 [&::-webkit-slider-runnable-track]:rounded-full [&::-webkit-slider-runnable-track]:overflow-hidden [&::-moz-range-track]:bg-blue-100 [&::-moz-range-track]:rounded-full [&::-ms-track]:bg-blue-100 [&::-ms-track]:rounded-full
        [&::-moz-range-progress]:bg-blue-400  [&::-moz-range-progress]:rounded-full [&::-ms-fill-lower]:bg-blue-400  [&::-ms-fill-lower]:rounded-full [&::-webkit-slider-thumb]:shadow-[-999px_0px_0px_990px_#4e97ff]"
      />
      <span className="w-8">{duration ? formatTime(duration) : "00:00"}</span>
    </div>
  );
};

export default SongControl;
