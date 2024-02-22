import { renderers } from './renderers.mjs';
import { manifest } from './manifest_k6G7Moiv.mjs';
import * as serverEntrypointModule from '@astrojs/netlify/ssr-function.js';
import { onRequest } from './_noop-middleware.mjs';

const _page0 = () => import('./chunks/generic_v7UIOfpE.mjs');
const _page1 = () => import('./chunks/_id__cjDar0Yo.mjs');
const _page2 = () => import('./chunks/songsSearch_KLwkr0lm.mjs');
const _page3 = () => import('./chunks/index_pSB5rD5g.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/albums/[id].astro", _page1],
    ["src/pages/api/songsSearch.json.ts", _page2],
    ["src/pages/index.astro", _page3]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    renderers,
    middleware: onRequest
});
const _args = {
    "middlewareSecret": "bb5a2a3c-4a6a-495e-b319-8d27631dd070"
};
const _exports = serverEntrypointModule.createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
