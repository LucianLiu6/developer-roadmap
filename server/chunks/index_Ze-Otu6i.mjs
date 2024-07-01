/* empty css                             */
import { l as createComponent, m as renderTemplate, p as renderComponent, n as maybeRenderHead } from './astro/server_DJHfVkFr.mjs';
import 'kleur/colors';
import { $ as $$VideoListItem } from './VideoListItem_yisQuaNt.mjs';
import { $ as $$SimplePageHeader } from './SimplePageHeader_-stMut80.mjs';
import { a as $$BaseLayout } from './BaseLayout_CyQdLUYI.mjs';
import { a as getAllVideos } from './video_NKn1GyjA.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const videos = await getAllVideos();
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Illustrated Videos - roadmap.sh", "description": "Graphical video demonstrations on software engineering topics.", "permalink": `/videos` }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "SimplePageHeader", $$SimplePageHeader, { "title": "Videos", "description": "Graphical video demonstrations on software engineering topics." })} ${maybeRenderHead()}<div class="pb-20 pt-2 bg-gray-50"> <div class="container"> <div class="mt-3 sm:my-5"> ${videos.map((video) => renderTemplate`${renderComponent($$result2, "VideoListItem", $$VideoListItem, { "video": video })}`)} </div> </div> </div> ` })}`;
}, "/workspaces/developer-roadmap/src/pages/videos/index.astro", void 0);

const $$file = "/workspaces/developer-roadmap/src/pages/videos/index.astro";
const $$url = "/videos";

export { $$Index as default, $$file as file, $$url as url };
