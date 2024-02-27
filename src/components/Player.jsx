import { useEffect, useRef, useState } from "react";
import { fetchSongData } from "../utils/fetchSong";
import { playerStore } from "../store/playMusic";
import SongControl from "./SongControl";
import Loading from "./Loading";

function Player() {
  const [drop, setDrop] = useState(true);
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
    if (audioRef.current) {
      audioRef.current.src = songUri;
      if (isPlaying) {
        audioRef.current.play();
      } else {
        audioRef.current.pause();
      }
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
      console.error(error);
      setIsLoading(false);
    }
  };

  const beforeSong = () => fetchNextSong(-1);
  const nextSong = () => fetchNextSong(1);
  const endSong = () => fetchNextSong(1);

  const classPlayer = {
    screen: "min-h-full flex-col justify-between",
    controlAll: "flex-col",
    control: "block w-full",
  };

  return (
    <footer
      className={`flex gap-4 ${
        drop ? classPlayer.screen : "justify-around"
      } fixed bottom-0 w-full py-4 px-6 md:px-10 bg-[#FFFFFF] shadow-2xl shadow-blue-950`}>
      {!drop ? (
        <div className="flex items-center gap-2 w-[250px]">
          <img
            src={songBg}
            alt={songTitle}
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
      ) : (
        <div>
          <header className="pb-[20%]">
            <button
              className="text-3xl w-9 h-9 font-medium grid place-content-center hover:text-blue-600 hover:scale-125 transition duration-300 rounded-full"
              onClick={() => setDrop(!drop)}>
              <i class="ri-arrow-left-s-line"></i>
            </button>
          </header>
          <section>
            <article>
              <div className="w-full flex justify-center">
                <img
                  src={songBg}
                  alt={songTitle}
                  className="rounded-full w-full max-w-[400px]"
                />
              </div>

              <div className="mt-5 w-full items-center flex flex-col">
                <h3 className="text-2xl font-semibold truncate ... overflow-hidden">
                  {songTitle}
                </h3>
                <p className="text-zinc-500 text-lg truncate ... overflow-hidden">
                  {songArtist}
                </p>
              </div>
            </article>
          </section>
        </div>
      )}

      <div
        className={`flex gap-6 items-center justify-between relative ${
          drop ? classPlayer.controlAll : ""
        }`}>
        <div
          className={`text-4xl grid gap-2 place-content-center grid-flow-col w-32 ${
            drop ? " mt-6 text-5xl top-[30%] absolute z-50" : ""
          }`}>
          <button onClick={beforeSong} className="flex items-center">
            <i className="ri-skip-left-fill cursor-pointer"></i>
          </button>

          <button
            className={`text-black cursor-pointer text-[28px] ${
              drop ? "text-[36px]" : ""
            } w-7 flex items-center`}
            onClick={handleClick}>
            {isLoading ? (
              <Loading />
            ) : (
              <i className={isPlaying ? "ri-pause-line " : "ri-play-line"}></i>
            )}
          </button>

          <button onClick={nextSong} className="flex items-center">
            <i className="ri-skip-right-fill cursor-pointer"></i>
          </button>

          <audio ref={audioRef} onEnded={endSong}></audio>
        </div>

        <div className={`md:block ${drop ? classPlayer.control : "hidden"}`}>
          <SongControl audio={audioRef} classRange={drop} />
        </div>
      </div>

      <button
        onClick={() => setDrop(!drop)}
        className={`text-xl rounded-full h-5 pt-[1px] flex text-white bg-blue-600 items-center absolute top-[-10px] right-6 md:hidden ${
          drop ? "hidden" : ""
        }`}>
        <i className="ri-arrow-up-s-line"></i>
      </button>
    </footer>
  );
}

export default Player;
