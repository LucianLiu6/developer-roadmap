/* empty css                             */
import { k as createAstro, l as createComponent, m as renderTemplate, p as renderComponent, n as maybeRenderHead } from './astro/server_DJHfVkFr.mjs';
import 'kleur/colors';
import { $ as $$Loader } from './Loader_DjsueaOk.mjs';
import { $ as $$SkeletonLayout } from './SkeletonLayout_BlHjE0q7.mjs';
import { $ as $$AstroIcon } from './BaseLayout_CyQdLUYI.mjs';

const $$Astro = createAstro("https://roadmap.sh/");
const $$Embed = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Embed;
  return renderTemplate`${renderComponent($$result, "SkeletonLayout", $$SkeletonLayout, { "title": "Roadmaps", "noIndex": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="relative flex min-h-[550px] flex-col"> <div data-roadmap-loader class="flex w-full grow flex-col"> <div class="flex grow items-center justify-center"> ${renderComponent($$result2, "Loader", $$Loader, {})} </div> </div> ${renderComponent($$result2, "CustomRoadmap", null, { "isEmbed": true, "client:only": "react", "client:component-hydration": "only", "client:component-path": "/workspaces/developer-roadmap/src/components/CustomRoadmap/CustomRoadmap", "client:component-export": "CustomRoadmap" })} <div class="fixed bottom-5 right-4"> <a target="_blank" class="rounded-md bg-gray-600 py-2 pr-2 pl-1.5 text-white hover:bg-black flex items-center gap-0.5" href="https://roadmap.sh"> ${renderComponent($$result2, "Icon", $$AstroIcon, { "icon": "logo", "class": "h-5" })}
roadmap.sh
</a> </div> </div> ` })}`;
}, "/workspaces/developer-roadmap/src/pages/r/embed.astro", void 0);

const $$file = "/workspaces/developer-roadmap/src/pages/r/embed.astro";
const $$url = "/r/embed";

export { $$Embed as default, $$file as file, $$url as url };
