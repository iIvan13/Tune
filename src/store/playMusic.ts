import { create } from "zustand";

interface PlayingMusic {
  id: number;
  songBg: string;
  songTitle: string;
  songArtist: string;
  songUri: string;
  // nextPlay?: number
  // typePlaylist: string
}

interface PlayerStore {
  isPlaying: boolean;
  setIsPlaying: (isPlaying: boolean) => void;
  playingMusic: PlayingMusic;
  setPlayingMusic: (playingMusic: PlayingMusic) => void;
  loading: boolean,
  setLoading: (loading: boolean) => void
}

export const playerStore = create<PlayerStore>((set) => ({
  isPlaying: false,
  setIsPlaying: (isPlaying) => set({ isPlaying }),
  playingMusic: {
    id: 1,
    songBg: "https://i.scdn.co/image/ab67616d0000b2734ae1c4c5c45aabe565499163",
    songTitle: "I Wanna Be Yours",
    songArtist: "Artic Monkeys",
    songUri: "/MUSIC/01.mp3",
    // nextPlay: 1,
    // typePlaylist: null
  },
  setPlayingMusic: (playingMusic) => set({ playingMusic }),
  loading: false,
  setLoading: (loading) => set({ loading })
}));
