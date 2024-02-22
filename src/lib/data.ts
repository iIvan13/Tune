import type Index from "../pages/index.astro";

interface Albums {
    id: number;
    title: string;
    cover: string;
    artist: string;
    year: number;
    songNumber: number;
    albumId: number;
}

export const albums: Albums[] = [
    {
        id: 1,
        title: "Graduation",
        cover: "https://i.scdn.co/image/ab67616d0000b27326f7f19c7f0381e56156c94a",
        artist: "Kanye West",
        year: 2007,
        songNumber: 14,
        albumId: 101,
    },
    {
        id: 2,
        title: "Donda",
        cover: "https://upload.wikimedia.org/wikipedia/commons/6/60/Kanye_donda.jpg",
        artist: "Kanye West",
        year: 2021,
        songNumber: 27,
        albumId: 102,
    },
    {
        id: 3,
        title: "DAMN",
        cover: "https://i.scdn.co/image/ab67616d0000b2738b52c6b9bc4e43d873869699",
        artist: "Kendrick Lamar",
        year: 2017,
        songNumber: 14,
        albumId: 103,
    },
    {
        id: 4,
        title: "Certified Lover Boy",
        cover: "https://i.scdn.co/image/ab67616d0000b273cd945b4e3de57edd28481a3f",
        artist: "Drake",
        year: 2021,
        songNumber: 21,
        albumId: 104,
    },
    {
        id: 5,
        title: "More Life",
        cover: "https://i.scdn.co/image/ab67616d0000b2734f0fd9dad63977146e685700",
        artist: "Drake",
        year: 2017,
        songNumber: 22,
        albumId: 105,
    },
];


export interface Song {
    id: number;
    cover: string;
    title: string;
    artist: string;
    audio: string;
    isTop: boolean;
    isPopular: boolean
    indexPlay?: number
}

export const Allsong: Song[] = [
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
        cover:
            "https://images.squarespace-cdn.com/content/v1/58ab2fce20099e7487a18b2a/1488317118917-H6WVRJKUFWD45WAUJ4LY/image-asset.png?format=500w",
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
        cover:
            "https://source.boomplaymusic.com/group10/M00/04/29/28d98f00ed5e48b09ca47ba4f39b351d_464_464.jpg",
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
        cover:
            "https://i1.sndcdn.com/artworks-6OXCGF37MPCsUJNe-1XCKnA-t500x500.jpg",
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
    },
    {
        id: 24,
        cover: "https://i.scdn.co/image/ab67616d0000b273b0dd6a5cd1dec96c4119c262",
        title: "One Of The Girls",
        artist: "Jennie, Lily-Rose Melody Depp y The Weeknd",
        audio: "/MUSIC/24.mp3",
        isTop: true,
        isPopular: true
    },
]



let indexCounter = 0;

export const songsTop: Song[] = Allsong
    .filter(song => song.isTop)
    .map(song => ({ ...song, indexPlay: ++indexCounter }));

indexCounter = 0; // Reinicia el contador

export const songsPopular: Song[] = Allsong
    .filter(song => song.isPopular)
    .map(song => ({ ...song, indexPlay: ++indexCounter }));
