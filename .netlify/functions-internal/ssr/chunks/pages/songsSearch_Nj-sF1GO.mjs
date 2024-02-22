import { a as songsTop, s as songsPopular } from './_id__lJrg2zHV.mjs';

const findSongByIdOrIndex = (identifier, songList, searchById) => {
  return songList.find((song) => {
    return searchById ? song.id === identifier : song.indexPlay === identifier;
  });
};
const librarySearch = (lib) => {
  let songList;
  if (lib === "songsTop") {
    songList = songsTop;
  } else if (lib === "songsPopular") {
    songList = songsPopular;
  } else {
    throw new Error("Invalid library parameter");
  }
  return songList;
};
const POST = async ({ request }) => {
  try {
    const requestData = await request.json();
    console.log(requestData);
    const library = requestData.lib;
    const isById = requestData.searchById;
    const identifier = requestData.id;
    const songList = librarySearch(library);
    if (!songList) {
      return new Response("Invalid library parameter", { status: 400 });
    }
    const song = findSongByIdOrIndex(identifier, songList, isById);
    if (!song) {
      return new Response("Song not found", { status: 404 });
    }
    return new Response(JSON.stringify({ song }), { headers: { "Content-Type": "application/json" } });
  } catch (error) {
    console.error("Error handling request:", error);
    return new Response("Internal Server Error", { status: 500 });
  }
};

export { POST };
