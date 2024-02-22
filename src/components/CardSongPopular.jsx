import { useState } from "react";
import { playerStore } from "../store/playMusic";
import { fetchSongData } from "../utils/fetchSong";

function CardSongPopular({ songId, cover, title, artist }) {
  const [like, setLike] = useState(false);
  const { isPlaying, setIsPlaying, playingMusic, setPlayingMusic } = playerStore();

  const isPlayingSong = isPlaying && playingMusic?.id === songId;

  const handleClick = () => {
    if (playingMusic?.id === songId) {
      setIsPlaying(!isPlaying);
      return;
    }

    const playNewSong = async () => {
      const res = await fetchSongData({
        id: songId,
        lib: playingMusic.typePlaylist || "songsPopular",
        searchById: true,
      });
      setIsPlaying(true);
      const { id, cover, title, artist, audio, indexPlay } = res.song;
      setPlayingMusic({
        id,
        songBg: cover,
        songTitle: title,
        songArtist: artist,
        songUri: audio,
        nextPlay: indexPlay + 1,
        typePlaylist: "songsPopular",
      });
    };

    playNewSong();
  };

  const classPlay = isPlayingSong
    ? "bg-white/60 shadow-lg shadow-blue-500/20 "
    : "";

  const classBut = isPlayingSong ? "text-blue-600" : "text-slate-950/75";

  const classIconHeart = like ? "fill text-red-600" : "line";
  return (
    <div
      className={`flex justify-between rounded-full px-3 md:px-5 py-3 ${classPlay}`}>
      <div className="flex gap-3 items-center flex-1">
        <button
          className={`${classBut} text-2xl cursor-pointer`}
          onClick={handleClick}>
          <span>
            <i className={isPlayingSong ? "ri-pause-line" : "ri-play-line"}></i>
          </span>
        </button>
        <article className="flex flex-1 gap-3 items-center">
          <img src={cover} className="rounded-full w-12" />
          <div className="flex-1 overflow-hidden max-w-[200px]">
            <h3 className="text-base font-medium truncate overflow-hidden">
              {title}
            </h3>
            <p className="text-zinc-500 text-sm truncate overflow-hidden">
              {artist}
            </p>
          </div>
        </article>
      </div>
      <div className="flex gap-3 items-center w-14">
        <span>3:41</span>
        <span onClick={() => setLike(!like)} className="text-lg">
          <i className={`ri-heart-2-${classIconHeart}`}></i>
        </span>
      </div>
    </div>
  );
}

export default CardSongPopular;
