import { useState } from "react";
import { songsPopular } from "../lib/data";
import CardSongPopular from "./CardSongPopular";

function ListCardSongPopular() {
  const [visibleSongs, setVisibleSongs] = useState(5);

  const handleShowMoreSongs = () => {
    setVisibleSongs((prevVisibleSongs) => prevVisibleSongs + 5);
  };

  return (
    <>
      {songsPopular.slice(0, visibleSongs).map((song) => {
        const { id, cover, title, artist } = song;
        return (
          <CardSongPopular
            key={id}
            songId={id}
            cover={cover}
            title={title}
            artist={artist}
          />
        );
      })}

      <span className="w-full flex justify-center">
        {visibleSongs < songsPopular.length && (
          <button
            onClick={handleShowMoreSongs}
            className="text-2xl w-9 h-9 font-medium grid place-content-center hover:text-blue-600 hover:scale-125 transition duration-300 rounded-full">
            <i className="ri-arrow-down-s-line"></i>
          </button>
        )}
      </span>
    </>
  );
}

export default ListCardSongPopular;
