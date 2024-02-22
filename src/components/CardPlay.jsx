import { playerStore } from "../store/playMusic";
import { fetchSongData } from "../utils/fetchSong";

function CardPlay({ songId }) {
  const { isPlaying, setIsPlaying, playingMusic, setPlayingMusic } =
    playerStore((state) => state);

  const isPlayingSong = isPlaying && playingMusic?.id === songId;

  const handleClick = () => {
    if (playingMusic?.id === songId) {
      setIsPlaying(!isPlaying);
      return;
    }

    const playNewSong = async () => {
      const res = await fetchSongData({
        id: songId,
        lib: playingMusic.typePlaylist || "songsTop",
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
        typePlaylist: "songsTop",
      });
    };

    playNewSong();
  };

  return (
    <button
      className="absolute text-blue-600 text-7xl bottom-16 right-2 opacity-0 group-hover:opacity-100 transition-all duration-500"
      onClick={handleClick}>
      {isPlayingSong ? (
        <i className="ri-pause-circle-fill onplay"></i>
      ) : (
        <i className="ri-play-circle-fill onplay"></i>
      )}
    </button>
  );
}

export default CardPlay;
