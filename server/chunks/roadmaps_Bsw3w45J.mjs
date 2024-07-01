/* empty css                             */
import { l as createComponent, m as renderTemplate, p as renderComponent } from './astro/server_DJHfVkFr.mjs';
import 'kleur/colors';
import { $ as $$AccountSidebar } from './AccountSidebar_C4eYu0rC.mjs';
import { $ as $$AccountLayout } from './AccountLayout_B_1T_z4s.mjs';

const $$Roadmaps = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "AccountLayout", $$AccountLayout, { "title": "Roadmaps", "noIndex": true, "initialLoadingMessage": "Loading roadmaps" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "AccountSidebar", $$AccountSidebar, { "activePageId": "roadmaps", "activePageTitle": "Roadmaps" }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "RoadmapListPage", null, { "client:only": "react", "client:component-hydration": "only", "client:component-path": "/workspaces/developer-roadmap/src/components/CustomRoadmap/RoadmapListPage", "client:component-export": "RoadmapListPage" })} ` })} ` })}`;
}, "/workspaces/developer-roadmap/src/pages/account/roadmaps.astro", void 0);

const $$file = "/workspaces/developer-roadmap/src/pages/account/roadmaps.astro";
const $$url = "/account/roadmaps";

export { $$Roadmaps as default, $$file as file, $$url as url };
