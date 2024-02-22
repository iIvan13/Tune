/* empty css                         */
import { c as createAstro, d as createComponent, r as renderTemplate, m as maybeRenderHead, e as addAttribute, i as renderTransition, f as renderComponent } from '../astro_nym0zEyX.mjs';
import 'kleur/colors';
import 'html-escaper';
import { p as playerStore, f as fetchSongData, s as songsPopular, a as songsTop, b as albums, $ as $$LayoutBase } from './_id__lJrg2zHV.mjs';
import 'clsx';
/* empty css                          */
import { jsxs, jsx, Fragment } from 'react/jsx-runtime';
import { useState } from 'react';
/* empty css                          */

const $$Astro$3 = createAstro();
const $$AlbumCard = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$AlbumCard;
  const { cover, title, id } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(`/albums/${id}`, "href")}> <div class="mt-4 pl-4 relative"> <picture class="flex relative items-center"> <img${addAttribute(cover, "src")} alt="fgergeee ergg" class="w-60 rounded-md"${addAttribute(renderTransition($$result, "uirlhscr", "", `${title}-image`), "data-astro-transition-scope")}> <img src="/disc.png" alt="" class="w-60 absolute -z-50 left-[110px] drop-shadow-2xl"> </picture> <h3 class="text-lg font-semibold truncate ... w-60 mt-1"${addAttribute(renderTransition($$result, "2dfog3ph", "", `${title}-title`), "data-astro-transition-scope")}> ${title} </h3> </div> </a>`;
}, "/mnt/sda2/Projects/Tune-beta2/src/components/AlbumCard.astro", "self");

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
        searchById: true
      });
      setIsPlaying(true);
      const { id, cover: cover2, title: title2, artist: artist2, audio, indexPlay } = res.song;
      setPlayingMusic({
        id,
        songBg: cover2,
        songTitle: title2,
        songArtist: artist2,
        songUri: audio,
        nextPlay: indexPlay + 1,
        typePlaylist: "songsPopular"
      });
    };
    playNewSong();
  };
  const classPlay = isPlayingSong ? "bg-white/60 shadow-lg shadow-blue-500/20 " : "";
  const classBut = isPlayingSong ? "text-blue-600" : "text-slate-950/75";
  const classIconHeart = like ? "fill text-red-600" : "line";
  return /* @__PURE__ */ jsxs(
    "div",
    {
      className: `flex justify-between rounded-full px-3 md:px-5 py-3 ${classPlay}`,
      children: [
        /* @__PURE__ */ jsxs("div", { className: "flex gap-3 items-center flex-1", children: [
          /* @__PURE__ */ jsx(
            "button",
            {
              className: `${classBut} text-2xl cursor-pointer`,
              onClick: handleClick,
              children: /* @__PURE__ */ jsx("span", { children: /* @__PURE__ */ jsx("i", { className: isPlayingSong ? "ri-pause-line" : "ri-play-line" }) })
            }
          ),
          /* @__PURE__ */ jsxs("article", { className: "flex flex-1 gap-3 items-center", children: [
            /* @__PURE__ */ jsx("img", { src: cover, className: "rounded-full w-12" }),
            /* @__PURE__ */ jsxs("div", { className: "flex-1 overflow-hidden max-w-[200px]", children: [
              /* @__PURE__ */ jsx("h3", { className: "text-base font-medium truncate overflow-hidden", children: title }),
              /* @__PURE__ */ jsx("p", { className: "text-zinc-500 text-sm truncate overflow-hidden", children: artist })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex gap-3 items-center w-14", children: [
          /* @__PURE__ */ jsx("span", { children: "3:41" }),
          /* @__PURE__ */ jsx("span", { onClick: () => setLike(!like), className: "text-lg", children: /* @__PURE__ */ jsx("i", { className: `ri-heart-2-${classIconHeart}` }) })
        ] })
      ]
    }
  );
}

function ListCardSongPopular() {
  const [visibleSongs, setVisibleSongs] = useState(5);
  const handleShowMoreSongs = () => {
    setVisibleSongs((prevVisibleSongs) => prevVisibleSongs + 5);
  };
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    songsPopular.slice(0, visibleSongs).map((song) => {
      const { id, cover, title, artist } = song;
      return /* @__PURE__ */ jsx(
        CardSongPopular,
        {
          songId: id,
          cover,
          title,
          artist
        },
        id
      );
    }),
    /* @__PURE__ */ jsx("span", { className: "w-full flex justify-center", children: visibleSongs < songsPopular.length && /* @__PURE__ */ jsx(
      "button",
      {
        onClick: handleShowMoreSongs,
        className: "text-2xl w-9 h-9 font-medium grid place-content-center hover:text-blue-600 hover:scale-125 transition duration-300 rounded-full",
        children: /* @__PURE__ */ jsx("i", { className: "ri-arrow-down-s-line" })
      }
    ) })
  ] });
}

function CardPlay({ songId }) {
  const { isPlaying, setIsPlaying, playingMusic, setPlayingMusic } = playerStore((state) => state);
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
        searchById: true
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
        typePlaylist: "songsTop"
      });
    };
    playNewSong();
  };
  return /* @__PURE__ */ jsx(
    "button",
    {
      className: "absolute text-blue-600 text-7xl bottom-16 right-2 opacity-0 group-hover:opacity-100 transition-all duration-500",
      onClick: handleClick,
      children: isPlayingSong ? /* @__PURE__ */ jsx("i", { className: "ri-pause-circle-fill onplay" }) : /* @__PURE__ */ jsx("i", { className: "ri-play-circle-fill onplay" })
    }
  );
}

const $$Astro$2 = createAstro();
const $$CardSong = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$CardSong;
  const { id, cover, title, artist } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="flex flex-col gap-3 relative playCard group w-60"> <img${addAttribute(cover, "src")} alt="" class="rounded-2xl w-full cursor-pointer shadow-lg shadow-blue-950/40 object-cover"> <div class="px-2"> <h3 class="text-lg font-semibold truncate ... overflow-hidden cursor-pointer"> ${title} </h3> <p class="text-zinc-500 text-sm cursor-pointer truncate ... overflow-hidden"> ${artist} </p> </div> ${renderComponent($$result, "CardPlay", CardPlay, { "songId": id, "client:visible": true, "client:component-hydration": "visible", "client:component-path": "/mnt/sda2/Projects/Tune-beta2/src/components/CardPlay", "client:component-export": "default" })} </div>`;
}, "/mnt/sda2/Projects/Tune-beta2/src/components/CardSong.astro", void 0);

const $$Astro$1 = createAstro();
const $$Main = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Main;
  return renderTemplate`${maybeRenderHead()}<header class="flex md:justify-between gap-4 items-center w-full" data-astro-cid-ivdev4kk> <div class="flex items-center gap-4 w-full" data-astro-cid-ivdev4kk> <i class="ri-menu-3-fill cursor-pointer text-xl md:hidden" id="icon-toggle" data-astro-cid-ivdev4kk></i> <i class="ri-search-line cursor-pointer text-xl" data-astro-cid-ivdev4kk></i> <input type="text" class="w-[80%] rounded-2xl p-2 placeholder:text-base truncate ..." placeholder="Search for song, artists, etc..." data-astro-cid-ivdev4kk> </div> <div class="flex gap-4 md:gap-6 text-xl items-center" data-astro-cid-ivdev4kk> <i class="ri-settings-line" data-astro-cid-ivdev4kk></i> <i class="ri-notification-line" data-astro-cid-ivdev4kk></i> </div> </header> <section data-astro-cid-ivdev4kk> <article class="flex justify-between text-xl" data-astro-cid-ivdev4kk> <h1 class="font-semibold" data-astro-cid-ivdev4kk>Top Music</h1> <div class="flex gap-4" data-astro-cid-ivdev4kk> <i class="ri-arrow-left-line cursor-pointer btn hover:text-blue-600" id="left" data-astro-cid-ivdev4kk></i> <i class="ri-arrow-right-line cursor-pointer btn hover:text-blue-600" id="right" data-astro-cid-ivdev4kk></i> </div> </article> <article class="flex w-full py-4" data-astro-cid-ivdev4kk> <ul class="carucel gap-8" data-astro-cid-ivdev4kk> ${songsTop.map((song) => {
    const { id, cover, title, artist } = song;
    return renderTemplate`<li class="card" data-astro-cid-ivdev4kk> ${renderComponent($$result, "CardSong", $$CardSong, { "id": id, "cover": cover, "title": title, "artist": artist, "data-astro-cid-ivdev4kk": true })} </li>`;
  })} </ul> </article> </section> <section class="flex w-full flex-wrap mb-24 gap-4" data-astro-cid-ivdev4kk> <article class="w-full sm:min-w-[440px] md:w-[48%]" data-astro-cid-ivdev4kk> <h2 class="font-semibold text-xl" data-astro-cid-ivdev4kk>Popular</h2> <div class="pt-2 md:pr-6 flex flex-col gap-4 mt-2 overflow-y-auto overflow-x-hidden w-full pb-6 md:max-h-[320px]" id="container" data-astro-cid-ivdev4kk> ${renderComponent($$result, "ListCardSongPopular", ListCardSongPopular, { "client:visible": true, "client:component-hydration": "visible", "client:component-path": "/mnt/sda2/Projects/Tune-beta2/src/components/ListCardSongPopular", "client:component-export": "default", "data-astro-cid-ivdev4kk": true })} </div> </article> <article class="w-full
      sm:min-w-[440px]
      md:max-w-[48%]" data-astro-cid-ivdev4kk> <h2 class="font-semibold text-xl" data-astro-cid-ivdev4kk>Recommended Album</h2> <div class="flex gap-40 overflow-x-auto pb-6" data-astro-cid-ivdev4kk> ${albums.map((album) => {
    const { id, cover, title } = album;
    return renderTemplate`${renderComponent($$result, "AlbumCard", $$AlbumCard, { "cover": cover, "title": title, "id": id, "data-astro-cid-ivdev4kk": true })}`;
  })} </div> </article> </section>  `;
}, "/mnt/sda2/Projects/Tune-beta2/src/components/Main.astro", void 0);

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${renderComponent($$result, "LayoutBase", $$LayoutBase, { "title": "Tune - App Music" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Main", $$Main, {})} ` })}`;
}, "/mnt/sda2/Projects/Tune-beta2/src/pages/index.astro", void 0);

const $$file = "/mnt/sda2/Projects/Tune-beta2/src/pages/index.astro";
const $$url = "";

export { $$Index as default, $$file as file, $$url as url };
