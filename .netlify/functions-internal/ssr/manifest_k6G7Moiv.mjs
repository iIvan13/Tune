import 'cookie';
import 'kleur/colors';
import 'string-width';
import '@astrojs/internal-helpers/path';
import 'html-escaper';
import 'clsx';
import './chunks/astro_nym0zEyX.mjs';
import { compile } from 'path-to-regexp';

if (typeof process !== "undefined") {
  let proc = process;
  if ("argv" in proc && Array.isArray(proc.argv)) {
    if (proc.argv.includes("--verbose")) ; else if (proc.argv.includes("--silent")) ; else ;
  }
}

function getRouteGenerator(segments, addTrailingSlash) {
  const template = segments.map((segment) => {
    return "/" + segment.map((part) => {
      if (part.spread) {
        return `:${part.content.slice(3)}(.*)?`;
      } else if (part.dynamic) {
        return `:${part.content}`;
      } else {
        return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]").replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      }
    }).join("");
  }).join("");
  let trailing = "";
  if (addTrailingSlash === "always" && segments.length) {
    trailing = "/";
  }
  const toPath = compile(template + trailing);
  return toPath;
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware(_, next) {
      return next();
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    clientDirectives,
    routes
  };
}

const manifest = deserializeManifest({"adapterName":"@astrojs/netlify","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.DIC1WmG9.js"}],"styles":[{"type":"external","src":"/_astro/_id_.s-8Jpmqk.css"},{"type":"inline","content":"@keyframes astroFadeInOut{0%{opacity:1}to{opacity:0}}@keyframes astroFadeIn{0%{opacity:0}}@keyframes astroFadeOut{to{opacity:0}}@keyframes astroSlideFromRight{0%{transform:translate(100%)}}@keyframes astroSlideFromLeft{0%{transform:translate(-100%)}}@keyframes astroSlideToRight{to{transform:translate(100%)}}@keyframes astroSlideToLeft{to{transform:translate(-100%)}}@media (prefers-reduced-motion){::view-transition-group(*),::view-transition-old(*),::view-transition-new(*){animation:none!important}[data-astro-transition-scope]{animation:none!important}}\n"}],"routeData":{"route":"/albums/[id]","isIndex":false,"type":"page","pattern":"^\\/albums\\/([^/]+?)\\/?$","segments":[[{"content":"albums","dynamic":false,"spread":false}],[{"content":"id","dynamic":true,"spread":false}]],"params":["id"],"component":"src/pages/albums/[id].astro","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/songssearch.json","isIndex":false,"type":"endpoint","pattern":"^\\/api\\/songsSearch\\.json\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"songsSearch.json","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/songsSearch.json.ts","pathname":"/api/songsSearch.json","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.IlCwdbHB.js"}],"styles":[{"type":"external","src":"/_astro/_id_.s-8Jpmqk.css"},{"type":"inline","content":"@keyframes astroFadeInOut{0%{opacity:1}to{opacity:0}}@keyframes astroFadeIn{0%{opacity:0}}@keyframes astroFadeOut{to{opacity:0}}@keyframes astroSlideFromRight{0%{transform:translate(100%)}}@keyframes astroSlideFromLeft{0%{transform:translate(-100%)}}@keyframes astroSlideToRight{to{transform:translate(100%)}}@keyframes astroSlideToLeft{to{transform:translate(-100%)}}@media (prefers-reduced-motion){::view-transition-group(*),::view-transition-old(*),::view-transition-new(*){animation:none!important}[data-astro-transition-scope]{animation:none!important}}\n.carucel[data-astro-cid-ivdev4kk]{display:grid;grid-auto-flow:column;grid-auto-columns:calc((100% / 3)-12px);overflow:hidden;scroll-behavior:smooth}\n"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["/mnt/sda2/Projects/Tune-beta2/src/pages/albums/[id].astro",{"propagation":"in-tree","containsHead":true}],["/mnt/sda2/Projects/Tune-beta2/src/pages/index.astro",{"propagation":"in-tree","containsHead":true}],["/mnt/sda2/Projects/Tune-beta2/src/layouts/LayoutBase.astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/albums/[id]@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astrojs-ssr-virtual-entry",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/index@_@astro",{"propagation":"in-tree","containsHead":false}],["/mnt/sda2/Projects/Tune-beta2/src/components/AlbumCard.astro",{"propagation":"in-tree","containsHead":false}],["/mnt/sda2/Projects/Tune-beta2/src/components/Main.astro",{"propagation":"in-tree","containsHead":false}]],"renderers":[],"clientDirectives":[["idle","(()=>{var i=t=>{let e=async()=>{await(await t())()};\"requestIdleCallback\"in window?window.requestIdleCallback(e):setTimeout(e,200)};(self.Astro||(self.Astro={})).idle=i;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var l=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let a of e)if(a.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=l;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000noop-middleware":"_noop-middleware.mjs","/node_modules/astro/dist/assets/endpoint/generic.js":"chunks/pages/generic_5cV17t7Y.mjs","/src/pages/index.astro":"chunks/pages/index_W7_dZGXW.mjs","/src/pages/api/songsSearch.json.ts":"chunks/pages/songsSearch_Nj-sF1GO.mjs","\u0000@astrojs-manifest":"manifest_k6G7Moiv.mjs","/mnt/sda2/Projects/Tune-beta2/node_modules/@astrojs/react/vnode-children.js":"chunks/vnode-children_3wEZly-Z.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"chunks/generic_v7UIOfpE.mjs","\u0000@astro-page:src/pages/albums/[id]@_@astro":"chunks/_id__cjDar0Yo.mjs","\u0000@astro-page:src/pages/api/songsSearch.json@_@ts":"chunks/songsSearch_KLwkr0lm.mjs","\u0000@astro-page:src/pages/index@_@astro":"chunks/index_pSB5rD5g.mjs","/astro/hoisted.js?q=0":"_astro/hoisted.IlCwdbHB.js","/mnt/sda2/Projects/Tune-beta2/src/components/CardPlay":"_astro/CardPlay.3Os5ZJVB.js","/mnt/sda2/Projects/Tune-beta2/src/components/ListCardSongPopular":"_astro/ListCardSongPopular.PBcaPUEm.js","/mnt/sda2/Projects/Tune-beta2/src/components/Player":"_astro/Player.PNG7o9zU.js","/astro/hoisted.js?q=1":"_astro/hoisted.DIC1WmG9.js","@astrojs/react/client.js":"_astro/client.kAWTSSlb.js","astro:scripts/before-hydration.js":""},"assets":["/_astro/remixicon.4gLpZmQg.eot","/_astro/remixicon.LCZT1ya9.woff2","/_astro/remixicon.C3JuO1s9.woff","/_astro/remixicon.BFNNtX32.ttf","/_astro/remixicon.7NKkMgfj.svg","/_astro/_id_.s-8Jpmqk.css","/disc.png","/iconMusic.svg","/profile.jpeg","/MUSIC/01.mp3","/MUSIC/02.mp3","/MUSIC/03.mp3","/MUSIC/04.mp3","/MUSIC/05.mp3","/MUSIC/06.mp3","/MUSIC/07.mp3","/MUSIC/08.mp3","/MUSIC/09.mp3","/MUSIC/11.mp3","/MUSIC/12.mp3","/MUSIC/13.mp3","/MUSIC/14.mp3","/MUSIC/15.mp3","/MUSIC/16.mp3","/MUSIC/17.mp3","/MUSIC/18.mp3","/MUSIC/19.mp3","/MUSIC/20.mp3","/MUSIC/21.mp3","/MUSIC/22.mp3","/MUSIC/23.mp3","/_astro/CardPlay.3Os5ZJVB.js","/_astro/ListCardSongPopular.PBcaPUEm.js","/_astro/Player.PNG7o9zU.js","/_astro/client.kAWTSSlb.js","/_astro/hoisted.DIC1WmG9.js","/_astro/hoisted.IlCwdbHB.js","/_astro/index.120yQdpc.js","/_astro/playMusic.Wu9II8Do.js","/MUSIC/01/10.mp3"],"buildFormat":"directory"});

export { manifest };
