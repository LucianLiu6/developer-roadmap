import { k as createAstro, l as createComponent, m as renderTemplate, n as maybeRenderHead, o as addAttribute } from './astro/server_DJHfVkFr.mjs';
import 'kleur/colors';
import 'clsx';

const $$Astro = createAstro("https://roadmap.sh/");
const $$VideoListItem = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$VideoListItem;
  const { video } = Astro2.props;
  const { frontmatter, id } = video;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute([
    "block no-underline py-2 group text-md items-center text-gray-600 hover:text-blue-600 flex justify-between border-b"
  ], "class:list")}${addAttribute(`/videos/${id}`, "href")}> <span class="group-hover:translate-x-2 transition-transform"> ${frontmatter.title} ${frontmatter.isNew && renderTemplate`<span class="bg-green-300 text-green-900 text-xs font-medium px-1.5 py-0.5 rounded-sm uppercase ml-1.5">
New
<span class="hidden sm:inline">
&middot;
${new Date(frontmatter.date).toLocaleString("default", {
    month: "long"
  })} </span> </span>`} </span> <span class="capitalize text-gray-500 text-xs hidden sm:block"> ${frontmatter.duration} </span> <span class="text-gray-400 text-xs block sm:hidden"> &raquo;</span> </a>`;
}, "/workspaces/developer-roadmap/src/components/VideoListItem.astro", void 0);

export { $$VideoListItem as $ };
