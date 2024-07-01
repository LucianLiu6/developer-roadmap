/* empty css                             */
import { l as createComponent, m as renderTemplate, p as renderComponent } from './astro/server_DJHfVkFr.mjs';
import 'kleur/colors';
import { G as GenerateRoadmap } from './GenerateRoadmap_e_mfFHjh.mjs';
import { a as $$BaseLayout } from './BaseLayout_CyQdLUYI.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Roadmap AI" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "GenerateRoadmap", GenerateRoadmap, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/workspaces/developer-roadmap/src/components/GenerateRoadmap/GenerateRoadmap", "client:component-export": "GenerateRoadmap" })} ` })}`;
}, "/workspaces/developer-roadmap/src/pages/ai/index.astro", void 0);

const $$file = "/workspaces/developer-roadmap/src/pages/ai/index.astro";
const $$url = "/ai";

export { $$Index as default, $$file as file, $$url as url };
