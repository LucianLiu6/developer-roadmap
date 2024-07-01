/* empty css                             */
import { k as createAstro, l as createComponent, m as renderTemplate, p as renderComponent, n as maybeRenderHead } from './astro/server_DJHfVkFr.mjs';
import 'kleur/colors';
import { a as $$BaseLayout } from './BaseLayout_CyQdLUYI.mjs';
import { S as SkeletonRoadmapHeader } from './SkeletonRoadmapHeader_CVIlQ8kL.mjs';
import { $ as $$Loader } from './Loader_DjsueaOk.mjs';
import { $ as $$ProgressHelpPopup } from './ProgressHelpPopup_nIya96C8.mjs';

const $$Astro = createAstro("https://roadmap.sh/");
const prerender = false;
const $$customRoadmapSlug = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$customRoadmapSlug;
  const { customRoadmapSlug } = Astro2.params;
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Roadmaps" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "ProgressHelpPopup", $$ProgressHelpPopup, {})} ${maybeRenderHead()}<div> <div class="flex min-h-[550px] flex-col"> <div data-roadmap-loader class="flex w-full grow flex-col"> ${renderComponent($$result2, "SkeletonRoadmapHeader", SkeletonRoadmapHeader, {})} <div class="flex grow items-center justify-center"> ${renderComponent($$result2, "Loader", $$Loader, {})} </div> </div> ${renderComponent($$result2, "CustomRoadmap", null, { "slug": customRoadmapSlug, "client:only": "react", "client:component-hydration": "only", "client:component-path": "/workspaces/developer-roadmap/src/components/CustomRoadmap/CustomRoadmap", "client:component-export": "CustomRoadmap" })} </div> </div> ` })}`;
}, "/workspaces/developer-roadmap/src/pages/r/[customRoadmapSlug].astro", void 0);

const $$file = "/workspaces/developer-roadmap/src/pages/r/[customRoadmapSlug].astro";
const $$url = "/r/[customRoadmapSlug]";

export { $$customRoadmapSlug as default, $$file as file, prerender, $$url as url };
