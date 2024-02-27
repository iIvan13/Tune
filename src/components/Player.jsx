import { useEffect, useRef, useState } from "react";
import { fetchSongData } from "../utils/fetchSong";
import { playerStore } from "../store/playMusic";
import SongControl from "./SongControl";
import {
  PlayTrackPrev,
  PlayTrackNext,
  Loading,
  Play,
  Pause,
} from "./PlayButtons";

const classPlayer = {
  screen: " h-screen flex-col justify-between ",
  controlAll: "flex-col",
  control: "block w-full",
};

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
    if (audioRef.current && songUri !== audioRef.current.src) {
      audioRef.current.src = songUri;
      isPlaying ? audioRef.current.play() : audioRef.current.pause();
    }
  }, [songUri]);

  useEffect(() => {
    const handleCanPlay = () => setIsLoading(false);
    audioRef.current.addEventListener("canplay", handleCanPlay);
    return () => {
      audioRef.current.removeEventListener("canplay", handleCanPlay);
    };
  }, []);

  const handleClick = () => setIsPlaying(!isPlaying);

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

  const endSong = () => fetchNextSong(1);

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
          <header>
            <button
              className="text-3xl font-medium grid place-content-center hover:text-blue-600 hover:scale-125 transition duration-300 rounded-full"
              onClick={() => setDrop(!drop)}>
              <i className="ri-arrow-left-s-line"></i>
            </button>
          </header>
          <section className="mt-4">
            <article>
              <div className="max-w-[400px]">
                <img src={songBg} alt={songTitle} className="rounded-xl" />
              </div>

              <div className="mt-5">
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
          className={`text-4xl grid gap-2 place-content-center grid-flow-col w-fit ${
            drop ? "pl-2 bottom-5 absolute z-50" : ""
          }`}>
          <button onClick={() => fetchNextSong(-1)}>
            <PlayTrackPrev />
          </button>

          <button
            className="text-black cursor-pointer w-fit"
            onClick={handleClick}>
            {isLoading ? (
              <Loading lg={drop ?? true} />
            ) : isPlaying ? (
              <Play lg={drop ?? true} />
            ) : (
              <Pause lg={drop ?? true} />
            )}
          </button>

          <button onClick={() => fetchNextSong(1)}>
            <PlayTrackNext />
          </button>

          <audio ref={audioRef} onEnded={endSong}></audio>
        </div>

        <div className={`md:block ${drop ? classPlayer.control : "hidden"}`}>
          <SongControl audio={audioRef} classRange={drop} />
        </div>
      </div>

      <button
        onClick={() => setDrop(!drop)}
        className={`text-xl rounded-full h-5 pt-[1px] flex text-white bg-blue-600 items-center absolute top-[-10px] right-6 ${
          drop ? "hidden" : ""
        }`}>
        <i className="ri-arrow-up-s-line"></i>
      </button>
    </footer>
  );
}

export default Player;
