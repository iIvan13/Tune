import { useEffect, useRef, useState } from "react";
import { fetchSongData } from "../utils/fetchSong";
import { playerStore } from "../store/playMusic";
import SongControl from "./SongControl";
import Loading from "./Loading";

function Player() {
  const [drop, setDrop] = useState(false);
  const {
    isPlaying,
    setIsPlaying,
    playingMusic,
    setPlayingMusic,
    isLoading,
    setIsLoading,
  } = playerStore((state) => state);

  const { songBg, songTitle, songArtist, songUri, nextPlay, typePlaylist } =
    playingMusic;
  const audioRef = useRef(null);

  useEffect(() => {
    isPlaying ? audioRef.current.play() : audioRef.current.pause();
  }, [isPlaying]);

  useEffect(() => {
    audioRef.current.src = songUri;
    if (audioRef.current && isPlaying) {
      audioRef.current.src = songUri;
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  }, [playingMusic]);

  useEffect(() => {
    const handleCanPlay = () => {
      setIsLoading(false);
    };

    audioRef.current.addEventListener("canplay", handleCanPlay);

    return () => {
      audioRef.current.removeEventListener("canplay", handleCanPlay);
    };
  }, []);

  const handleClick = () => {
    setIsPlaying(!isPlaying);
  };

  const fetchNextSong = async (offset) => {
    try {
      setIsLoading(true);
      setIsPlaying(false);

      const res = await fetchSongData({
        id: nextPlay + offset,
        lib: typePlaylist,
        searchById: false,
      });

      const { id, cover, title, artist, audio } = res.song;
      setPlayingMusic({
        id,
        songBg: cover,
        songTitle: title,
        songArtist: artist,
        songUri: audio,
        nextPlay: nextPlay + offset,
        typePlaylist: typePlaylist,
      });

      setIsPlaying(true);
    } catch (error) {
      console.error("Error fetching next song:", error);
      setIsLoading(false)
    }
  };

  const audioEnd = () => fetchNextSong(1);
  const beforePlay = () => fetchNextSong(-1);
  const nextPlaySong = () => fetchNextSong(1);

  // const dropActive = drop ? "h-screen" : "min-h-[50px]";

  return (
    <footer
      className={`flex items-center gap-4 justify-around fixed bottom-0 w-full py-4 px-6 md:px-10 bg-[#FFFFFF] shadow-2xl shadow-blue-950`}>
      <div className="flex items-center gap-2 w-[250px]">
        <img
          src={songBg}
          alt=""
          className="rounded-full w-12 h-12  md:w-14 md:h-14"
        />
        <div className="flex-1 overflow-hidden max-w-[200px]">
          <h3 className="text-base font-semibold truncate ... overflow-hidden">
            {songTitle}
          </h3>
          <p className="text-zinc-500 text-sm truncate ... overflow-hidden">
            {songArtist}
          </p>
        </div>
      </div>

      <div className="flex gap-6 items-center justify-between">
        <div className="text-4xl flex gap-2 items-center md:w-32">
          <button onClick={beforePlay} className="flex items-center">
            <i className="ri-skip-left-fill  cursor-pointer"></i>
          </button>

          <button
            className="text-black cursor-pointer text-[28px] w-7 pl-[0.5px] flex items-center"
            onClick={handleClick}>
            {isLoading ? (
              <Loading />
            ) : (
              <i className={isPlaying ? "ri-pause-line " : "ri-play-line"}></i>
            )}
          </button>

          <button onClick={nextPlaySong} className="flex items-center">
            <i className="ri-skip-right-fill cursor-pointer"></i>
          </button>

          <audio ref={audioRef} onEnded={audioEnd}></audio>
        </div>

        <SongControl audio={audioRef} />
      </div>

      <button
        onClick={() => setDrop(!drop)}
        className=" text-xl md:text-2xl rounded-full h-5 md:h-6 text-white bg-blue-600 items-center absolute top-[-10px] right-6 md:bg-transparent md:text-black md:static
      ">
        <i className="ri-arrow-up-s-line"></i>
      </button>
    </footer>
  );
}

export default Player;
