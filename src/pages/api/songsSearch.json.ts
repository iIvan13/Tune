import { type Song, songsTop, songsPopular } from './../../lib/data';
import type { APIRoute } from "astro";

interface RequestData {
  lib: string;
  id?: number;
  searchById: boolean
}

const findSongByIdOrIndex = (identifier: number, songList: Song[], searchById: boolean) => {
  return songList.find(song => {
    return searchById ? song.id === identifier : song.indexPlay === identifier;
  });
};

const librarySearch = (lib: string): Song[] | undefined => {
  let songList: Song[] | undefined;
  if (lib === "songsTop") {
    songList = songsTop;
  } else if (lib === "songsPopular") {
    songList = songsPopular;
  } else {
    throw new Error("Invalid library parameter");
  }
  return songList;
};


export const POST: APIRoute = async ({ request }) => {
  try {
    const requestData: RequestData = await request.json()
    console.log(requestData)
    const library = requestData.lib
    const isById = requestData.searchById
    const identifier = requestData.id

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
}