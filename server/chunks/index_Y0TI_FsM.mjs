/* empty css                             */
import { l as createComponent, m as renderTemplate, p as renderComponent, n as maybeRenderHead } from './astro/server_DJHfVkFr.mjs';
import 'kleur/colors';
import { a as $$BaseLayout } from './BaseLayout_CyQdLUYI.mjs';
import { S as SkeletonRoadmapHeader } from './SkeletonRoadmapHeader_CVIlQ8kL.mjs';
import { $ as $$Loader } from './Loader_DjsueaOk.mjs';
import { $ as $$ProgressHelpPopup } from './ProgressHelpPopup_nIya96C8.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Roadmaps", "noIndex": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "ProgressHelpPopup", $$ProgressHelpPopup, {})} ${maybeRenderHead()}<div> <div class="flex min-h-[550px] flex-col"> <div data-roadmap-loader class="flex w-full grow flex-col"> ${renderComponent($$result2, "SkeletonRoadmapHeader", SkeletonRoadmapHeader, {})} <div class="flex grow items-center justify-center"> ${renderComponent($$result2, "Loader", $$Loader, {})} </div> </div> ${renderComponent($$result2, "CustomRoadmap", null, { "client:only": "react", "client:component-hydration": "only", "client:component-path": "/workspaces/developer-roadmap/src/components/CustomRoadmap/CustomRoadmap", "client:component-export": "CustomRoadmap" })} </div> </div> ` })}`;
}, "/workspaces/developer-roadmap/src/pages/r/index.astro", void 0);

const $$file = "/workspaces/developer-roadmap/src/pages/r/index.astro";
const $$url = "/r";

export { $$Index as default, $$file as file, $$url as url };
