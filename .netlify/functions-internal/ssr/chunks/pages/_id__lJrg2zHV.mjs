/* empty css                         */
import { c as createAstro, d as createComponent, r as renderTemplate, m as maybeRenderHead, e as addAttribute, f as renderComponent, g as renderHead, h as renderSlot, i as renderTransition } from '../astro_nym0zEyX.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
import { jsxs, jsx } from 'react/jsx-runtime';
import { useState, useEffect, useRef } from 'react';
import { create } from 'zustand';
/* empty css                          */

const $$Astro$3 = createAstro();
const $$Aside = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Aside;
  return renderTemplate`${maybeRenderHead()}<aside class="hidden md:flex flex-col bg-white p-4 rounded-md max-w-[500px] min-w-[250px] max-h-[600px] shadow-lg" id="menu-toggle"> <header class="flex flex-col items-center text-center gap-2 mb-6"> <img src="/profile.jpeg" alt="User avatar" class="rounded-full w-16 h-16"> <div class="w-full"> <h2 class="text-base font-semibold">Ivan</h2> <p class="text-blue-600 text-sm truncate">ivandev2oo6@gmail.com</p> </div> </header> <nav> <div> <h2 class="text-lg font-semibold">Browse</h2> <ul class="py-4 px-2 flex flex-col gap-4 text-zinc-600/80 font-semibold text-sm"> <li class="text-zinc-900/90 relative cursor-pointer"> <div class="absolute bg-blue-600 rounded-xl w-[2.5px] h-[15px] z-50 left-[23px] active-nav"></div> <i class="ri-home-5-line pr-4"></i> <span class="max-[200px]:hidden">Home</span> </li> <li class="cursor-pointer"> <i class="ri-play-list-line pr-4"></i> <span class="max-[200px]:hidden">Playlist</span> </li> <li class="cursor-pointer"> <i class="ri-user-line pr-4"></i> <span class="max-[200px]:hidden">Artist</span> </li> <li class="cursor-pointer"> <i class="ri-folder-5-line pr-4"></i> <span class="max-[200px]:hidden">Albums</span> </li> </ul> </div> <div> <h2 class="text-lg font-semibold">Discover</h2> <ul class="py-4 px-2 flex flex-col gap-4 text-zinc-600/80 font-semibold text-sm"> <li class="cursor-pointer"> <i class="ri-rfid-line pr-4"></i> <span class="max-[200px]:hidden">Radio</span> </li> <li class="cursor-pointer"> <i class="ri-calendar-event-fill pr-4"></i> <span class="max-[200px]:hidden">Event</span> </li> <li class="cursor-pointer"> <i class="ri-mic-line pr-4"></i> <span class="max-[200px]:hidden">Podcast</span> </li> <li class="cursor-pointer"> <i class="ri-heart-line pr-4"></i> <span class="max-[200px]:hidden">For you</span> </li> </ul> </div> </nav> </aside>`;
}, "/mnt/sda2/Projects/Tune-beta2/src/components/Aside.astro", void 0);

async function fetchSongData(requestData) {
  try {
    const response = await fetch("/api/songsSearch.json", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestData),
    });

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json();
    // Muestra la respuesta en la consola
    return data;
  } catch (error) {
    console.error("There was a problem with your fetch operation:", error);
    throw error;
  }
}

const playerStore = create((set) => ({
  isPlaying: false,
  setIsPlaying: (isPlaying) => set({ isPlaying }),
  playingMusic: {
    id: 1,
    songBg: "https://i.scdn.co/image/ab67616d0000b2734ae1c4c5c45aabe565499163",
    songTitle: "I Wanna Be Yours",
    songArtist: "Artic Monkeys",
    songUri: "/MUSIC/01.mp3"
    // nextPlay: 1,
    // typePlaylist: null
  },
  setPlayingMusic: (playingMusic) => set({ playingMusic }),
  loading: false,
  setLoading: (loading) => set({ loading })
}));

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
    if (time === void 0 || time === null)
      return "00:00";
    const formattedSeconds = Math.floor(time);
    const minutes = Math.floor(formattedSeconds / 60);
    const remainingSeconds = formattedSeconds % 60;
    return `${minutes < 10 ? "0" + minutes : minutes}:${remainingSeconds < 10 ? "0" + remainingSeconds : remainingSeconds}`;
  }
  const duration = audio?.current?.duration ?? 0;
  const result = typeof duration === "number" && !isNaN(duration) ? duration : 0;
  return /* @__PURE__ */ jsxs("div", { className: " w-[500px] items-center gap-4 hidden lg:flex", children: [
    /* @__PURE__ */ jsx("span", { className: "w-8", children: formatTime(currentTime) }),
    /* @__PURE__ */ jsx(
      "input",
      {
        type: "range",
        value: currentTime,
        max: result,
        min: 0,
        onChange: (event) => {
          const newCurrentTime = event.target.value;
          audio.current.currentTime = newCurrentTime;
        },
        className: "w-full h-full appearance-none flex items-center cursor-pointer bg-transparent z-30\n        [&::-webkit-slider-thumb]:bg-blue-600 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:border-0 [&::-webkit-slider-thumb]:w-3 [&::-webkit-slider-thumb]:h-2 [&::-webkit-slider-thumb]:appearance-none\n        [&::-moz-range-thumb]:bg-blue-600 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:border-0 [&::-moz-range-thumb]:w-2.5 [&::-moz-range-thumb]:h-2 [&::-moz-range-thumb]:appearance-none\n        [&::-ms-thumb]:bg-blue-400  [&::-ms-thumb]:rounded-full [&::-ms-thumb]:border-0 [&::-ms-thumb]:w-2.5 [&::-ms-thumb]:h-2.5 [&::-ms-thumb]:appearance-none\n        [&::-webkit-slider-runnable-track]:bg-blue-100 [&::-webkit-slider-runnable-track]:rounded-full [&::-webkit-slider-runnable-track]:overflow-hidden [&::-moz-range-track]:bg-blue-100 [&::-moz-range-track]:rounded-full [&::-ms-track]:bg-blue-100 [&::-ms-track]:rounded-full\n        [&::-moz-range-progress]:bg-blue-400  [&::-moz-range-progress]:rounded-full [&::-ms-fill-lower]:bg-blue-400  [&::-ms-fill-lower]:rounded-full [&::-webkit-slider-thumb]:shadow-[-999px_0px_0px_990px_#4e97ff]"
      }
    ),
    /* @__PURE__ */ jsx("span", { className: "w-8", children: duration ? formatTime(duration) : "00:00" })
  ] });
};

function Player() {
  const [drop, setDrop] = useState(false);
  const { isPlaying, setIsPlaying, playingMusic, setPlayingMusic } = playerStore((state) => state);
  const { songBg, songTitle, songArtist, songUri } = playingMusic;
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
  const handleClick = () => {
    setIsPlaying(!isPlaying);
  };
  const nextSong = async () => {
    try {
      const res = await fetchSongData({
        id: playingMusic.nextPlay,
        lib: playingMusic.typePlaylist,
        searchById: false
      });
      setIsPlaying(true);
      const { id, cover, title, artist, audio } = res.song;
      setPlayingMusic({
        id,
        songBg: cover,
        songTitle: title,
        songArtist: artist,
        songUri: audio,
        nextPlay: playingMusic.nextPlay + 1,
        typePlaylist: playingMusic.typePlaylist
      });
    } catch (error) {
      console.error("Error fetching next song:", error);
    }
  };
  const dropActive = drop ? "h-screen" : "min-h-[50px]";
  return /* @__PURE__ */ jsxs(
    "footer",
    {
      className: `flex items-center gap-4 ${dropActive} justify-around fixed bottom-0 w-full py-4 px-6 md:px-10 bg-[#FFFFFF] shadow-2xl shadow-blue-950`,
      children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsx(
            "img",
            {
              src: songBg,
              alt: "",
              className: "rounded-full w-12 h-12  md:w-14 md:h-14"
            }
          ),
          /* @__PURE__ */ jsxs("div", { className: "flex-1 overflow-hidden max-w-[200px]", children: [
            /* @__PURE__ */ jsx("h3", { className: "text-base font-semibold truncate ... overflow-hidden", children: songTitle }),
            /* @__PURE__ */ jsx("p", { className: "text-zinc-500 text-sm truncate ... overflow-hidden", children: songArtist })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex gap-6 items-center justify-between", children: [
          /* @__PURE__ */ jsxs("div", { className: "text-4xl flex gap-2 items-center md:w-32", children: [
            /* @__PURE__ */ jsx("button", { children: /* @__PURE__ */ jsx("i", { className: "ri-skip-left-fill cursor-pointer" }) }),
            /* @__PURE__ */ jsx(
              "button",
              {
                className: "text-black cursor-pointer text-3xl",
                onClick: handleClick,
                children: /* @__PURE__ */ jsx("i", { className: isPlaying ? "ri-pause-line " : "ri-play-line" })
              }
            ),
            /* @__PURE__ */ jsx("i", { className: "ri-skip-right-fill cursor-pointer" }),
            /* @__PURE__ */ jsx("audio", { ref: audioRef, onEnded: nextSong })
          ] }),
          /* @__PURE__ */ jsx(SongControl, { audio: audioRef })
        ] }),
        /* @__PURE__ */ jsx(
          "button",
          {
            onClick: () => setDrop(!drop),
            className: "hidden text-xl md:text-2xl rounded-full h-5 md:h-6 text-white bg-blue-600 items-center absolute top-[-10px] right-6 md:bg-transparent md:text-black md:static\n      ",
            children: /* @__PURE__ */ jsx("i", { className: "ri-arrow-up-s-line" })
          }
        )
      ]
    }
  );
}

const $$Astro$2 = createAstro();
const $$ViewTransitions = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$ViewTransitions;
  const { fallback = "animate" } = Astro2.props;
  return renderTemplate`<meta name="astro-view-transitions-enabled" content="true"><meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>`;
}, "/mnt/sda2/Projects/Tune-beta2/node_modules/astro/components/ViewTransitions.astro", void 0);

const $$Astro$1 = createAstro();
const $$LayoutBase = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$LayoutBase;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="en" data-astro-cid-2rcmfwqw> <head><meta charset="utf-8"><link rel="icon" type="image/svg+xml" href="/iconMusic.svg"><meta name="viewport" content="width=device-width"><!-- <meta name="generator" content={} /> -->${renderComponent($$result, "ViewTransitions", $$ViewTransitions, { "fallback": "none", "data-astro-cid-2rcmfwqw": true })}<title>${title}</title><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Barlow:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet">${renderHead()}</head> <body class="bg-[#f4f6ff] min-h-screen" data-astro-cid-2rcmfwqw> <div class="pt-6 px-2 md:px-6 gap-6 w-full flex" data-astro-cid-2rcmfwqw> ${renderComponent($$result, "Aside", $$Aside, { "data-astro-cid-2rcmfwqw": true })} <main class="flex flex-col gap-10" data-astro-cid-2rcmfwqw> ${renderSlot($$result, $$slots["default"])} </main> </div> ${renderComponent($$result, "Player", Player, { "data-astro-transition-persist": "player", "client:visible": true, "client:component-hydration": "visible", "client:component-path": "/mnt/sda2/Projects/Tune-beta2/src/components/Player", "client:component-export": "default", "data-astro-cid-2rcmfwqw": true, "data-astro-transition-scope": renderTransition($$result, "6dks3ljt", "", "player") })}  </body> </html>`;
}, "/mnt/sda2/Projects/Tune-beta2/src/layouts/LayoutBase.astro", "self");

const albums = [
  {
    id: 1,
    title: "Graduation",
    cover: "https://i.scdn.co/image/ab67616d0000b27326f7f19c7f0381e56156c94a",
    artist: "Kanye West",
    year: 2007,
    songNumber: 14,
    albumId: 101
  },
  {
    id: 2,
    title: "Donda",
    cover: "https://upload.wikimedia.org/wikipedia/commons/6/60/Kanye_donda.jpg",
    artist: "Kanye West",
    year: 2021,
    songNumber: 27,
    albumId: 102
  },
  {
    id: 3,
    title: "DAMN",
    cover: "https://i.scdn.co/image/ab67616d0000b2738b52c6b9bc4e43d873869699",
    artist: "Kendrick Lamar",
    year: 2017,
    songNumber: 14,
    albumId: 103
  },
  {
    id: 4,
    title: "Certified Lover Boy",
    cover: "https://i.scdn.co/image/ab67616d0000b273cd945b4e3de57edd28481a3f",
    artist: "Drake",
    year: 2021,
    songNumber: 21,
    albumId: 104
  },
  {
    id: 5,
    title: "More Life",
    cover: "https://i.scdn.co/image/ab67616d0000b2734f0fd9dad63977146e685700",
    artist: "Drake",
    year: 2017,
    songNumber: 22,
    albumId: 105
  }
];
const Allsong = [
  {
    id: 1,
    cover: "https://i.scdn.co/image/ab67616d0000b2734ae1c4c5c45aabe565499163",
    title: "I Wanna Be Yours",
    artist: "Artic Monkeys",
    audio: "/MUSIC/01.mp3",
    isTop: true,
    isPopular: false
  },
  {
    id: 2,
    cover: "https://i.scdn.co/image/ab67616d0000b2738c6b830c36c7b4ac43c3cee8",
    title: "Downtown",
    artist: "Anitta & J Balvin",
    audio: "/MUSIC/02.mp3",
    isTop: false,
    isPopular: true
  },
  {
    id: 3,
    cover: "https://images.squarespace-cdn.com/content/v1/58ab2fce20099e7487a18b2a/1488317118917-H6WVRJKUFWD45WAUJ4LY/image-asset.png?format=500w",
    title: "Stargirl Interlude",
    artist: "The Weeknd ft. Lana Del Rey",
    audio: "/MUSIC/03.mp3",
    isTop: false,
    isPopular: true
  },
  {
    id: 4,
    cover: "https://i.scdn.co/image/ab67616d0000b273c027ad28821777b00dcaa888",
    title: "All The Stars",
    artist: "Kendrick Lamar, SZA",
    audio: "/MUSIC/04.mp3",
    isTop: false,
    isPopular: true
  },
  {
    id: 5,
    cover: "https://source.boomplaymusic.com/group10/M00/04/29/28d98f00ed5e48b09ca47ba4f39b351d_464_464.jpg",
    title: "Never Felt So Alone",
    artist: "Labrinth",
    audio: "/MUSIC/05.mp3",
    isTop: false,
    isPopular: true
  },
  {
    id: 6,
    cover: "https://i.scdn.co/image/ab67616d0000b273a3b3f48ca81acacb3ad4ec8a",
    title: "Art Deco",
    artist: "Lana Del Rey",
    audio: "/MUSIC/06.mp3",
    isTop: true,
    isPopular: true
  },
  {
    id: 7,
    cover: "https://i1.sndcdn.com/artworks-6OXCGF37MPCsUJNe-1XCKnA-t500x500.jpg",
    title: "Die Hard",
    artist: "Kendrick Lamar ft. Blxst & Amanda Reifer",
    audio: "/MUSIC/07.mp3",
    isTop: true,
    isPopular: true
  },
  {
    id: 8,
    cover: "https://i1.sndcdn.com/artworks-lYeaZq98UTZ3-0-t500x500.jpg",
    title: "LOVE",
    artist: "Kendrick Lamar ft. Zacari",
    audio: "/MUSIC/08.mp3",
    isTop: true,
    isPopular: true
  },
  {
    id: 9,
    cover: "https://i.scdn.co/image/ab67616d0000b273e4d4d2f030244ddc6cbb0948",
    title: "Brooklyn Baby",
    artist: "Lana Del Rey",
    audio: "/MUSIC/09.mp3",
    isTop: false,
    isPopular: true
  },
  {
    id: 10,
    cover: "https://i.scdn.co/image/ab67616d0000b27326f7f19c7f0381e56156c94a",
    title: "I Wonder",
    artist: "Kanye West",
    audio: "/MUSIC/01/10.mp3",
    isTop: false,
    isPopular: true
  },
  {
    id: 11,
    cover: "https://i.scdn.co/image/ab67616d0000b273f14aa81116510d3a6df8432b",
    title: "Streets",
    artist: "Doja Cat",
    audio: "/MUSIC/11.mp3",
    isTop: false,
    isPopular: true
  },
  {
    id: 12,
    cover: "https://i.scdn.co/image/ab67616d0000b273cd945b4e3de57edd28481a3f",
    title: "Yebba’s Heartbreak",
    artist: "Drake",
    audio: "/MUSIC/12.mp3",
    isTop: false,
    isPopular: true
  },
  {
    id: 13,
    cover: "https://i.scdn.co/image/ab67616d0000b273c43368aa62f0e675fb46102e",
    title: "Carnaval",
    artist: "Maluma",
    audio: "/MUSIC/13.mp3",
    isTop: false,
    isPopular: true
  },
  {
    id: 14,
    cover: "https://i.scdn.co/image/ab67616d0000b2736a0ac31ac69f887a0d1e5b4f",
    title: "Verte Ir",
    artist: "Dj Luian x Mambo Kingz x Anuel Aa x Darell x Nicky Jam x Brytiago",
    audio: "/MUSIC/14.mp3",
    isTop: true,
    isPopular: true
  },
  {
    id: 15,
    cover: "https://i.scdn.co/image/ab67616d0000b27327b1493f2cc7fdb102cc14e2",
    title: "Praise God ",
    artist: "Kanye West",
    audio: "/MUSIC/15.mp3",
    isTop: false,
    isPopular: true
  },
  {
    id: 16,
    cover: "https://i.scdn.co/image/ab67616d0000b273b1d146bde876bf560eb1a089",
    title: "Moth To A Flame",
    artist: "Swedish House Mafia and The Weeknd",
    audio: "/MUSIC/16.mp3",
    isTop: false,
    isPopular: true
  },
  {
    id: 17,
    cover: "https://i.scdn.co/image/ab67616d0000b273e859698c8fe21d42a13ec252",
    title: "SAD GIRLZ LUV MONEY Remix",
    artist: "Amaarae ft Kali Uchis",
    audio: "/MUSIC/17.mp3",
    isTop: false,
    isPopular: true
  },
  {
    id: 18,
    cover: "https://i.scdn.co/image/ab67616d0000b2734d382194384bc6e08eb090f6",
    title: "MIA",
    artist: "Bad Bunny Ft. Drake",
    audio: "/MUSIC/18.mp3",
    isTop: true,
    isPopular: true
  },
  {
    id: 19,
    cover: "https://i.scdn.co/image/ab67616d0000b273212d776c31027c511f0ee3bc",
    title: "Let Me Love You",
    artist: "DJ Snake ft. Justin Bieber",
    audio: "/MUSIC/19.mp3",
    isTop: false,
    isPopular: true
  },
  {
    id: 20,
    cover: "https://i.scdn.co/image/ab67616d0000b273dadd66355a0c4572a47ff4f5",
    title: "La Forma En Que Me Miras ",
    artist: "Myke Towers Ft. Sammy x Lenny Tavarez x Súper Yei x Rafa Pabon",
    audio: "/MUSIC/20.mp3",
    isTop: false,
    isPopular: true
  },
  {
    id: 21,
    cover: "https://i.scdn.co/image/ab67616d0000b273ff251317ecc342a3da4ed9b2",
    title: "Alokate Remake",
    artist: "Mora",
    audio: "/MUSIC/21.mp3",
    isTop: true,
    isPopular: true
  },
  {
    id: 22,
    cover: "https://i.scdn.co/image/ab67616d0000b273dcec31b44548687b2a81d0c2",
    title: "Tuyo",
    artist: "Mora",
    audio: "/MUSIC/22.mp3",
    isTop: true,
    isPopular: true
  },
  {
    id: 23,
    cover: "https://i.scdn.co/image/ab67616d0000b273d84f29a73f8a6e45b2640d10",
    title: "Pensabas",
    artist: "Mora, Brray, Eladio Carrion, Joyce Santana",
    audio: "/MUSIC/23.mp3",
    isTop: true,
    isPopular: true
  }
];
let indexCounter = 0;
const songsTop = Allsong.filter((song) => song.isTop).map((song) => ({ ...song, indexPlay: ++indexCounter }));
indexCounter = 0;
const songsPopular = Allsong.filter((song) => song.isPopular).map((song) => ({ ...song, indexPlay: ++indexCounter }));

const $$Astro = createAstro();
const $$id = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$id;
  const { id } = Astro2.params;
  const albumData = albums.find((album) => album.id === parseInt(id));
  const { title, cover, artist, year, songNumber } = albumData;
  return renderTemplate`${renderComponent($$result, "LayoutBase", $$LayoutBase, { "title": `Album n\xB0 ${id} - ${title}` }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div> <a href="/" class="text-3xl"><i class="ri-arrow-left-s-line"></i></a> <header class="flex md:items-end gap-4 flex-col md:flex-row w-full mt-2"> <picture> <img${addAttribute(cover, "src")} alt="" class="w-60 md:w-56 rounded-md"${addAttribute(renderTransition($$result2, "7vhtwoox", "", `${title}-image`), "data-astro-transition-scope")}> </picture> <article class="flex items-start flex-col"> <span class="hidden md:block">Álbum</span> <h1 class="text-4xl md:text-7xl font-semibold"${addAttribute(renderTransition($$result2, "2b7qu5ut", "", `${title}-title`), "data-astro-transition-scope")}> ${title} </h1> <div class="flex md:gap-6 md:items-center flex-col md:flex-row text-lg"> <h3 class="font-medium text-xl">${artist}</h3> <span class="hidden md:block">.</span> <p class="text-gray-700"> <span class="md:hidden">Álbum -</span>${year} </p> <span class="hidden md:block">.</span> <p class="text-gray-700 hidden md:block">${songNumber} Canciones</p> </div> </article> <hr class="bg-black md:hidden"> </header> </div> <hr class="bg-black hidden md:block h-[1 .1px]"> ` })}`;
}, "/mnt/sda2/Projects/Tune-beta2/src/pages/albums/[id].astro", "self");

const $$file = "/mnt/sda2/Projects/Tune-beta2/src/pages/albums/[id].astro";
const $$url = "/albums/[id]";

const _id_ = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$id,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$LayoutBase as $, _id_ as _, songsTop as a, albums as b, fetchSongData as f, playerStore as p, songsPopular as s };
