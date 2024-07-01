/* empty css                             */
import { l as createComponent, m as renderTemplate, p as renderComponent } from './astro/server_DJHfVkFr.mjs';
import 'kleur/colors';
import { $ as $$AccountSidebar } from './AccountSidebar_C4eYu0rC.mjs';
import { $ as $$AccountLayout } from './AccountLayout_B_1T_z4s.mjs';

const $$RoadCard = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "AccountLayout", $$AccountLayout, { "title": "Road Card", "noIndex": true, "initialLoadingMessage": "Preparing card" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "AccountSidebar", $$AccountSidebar, { "activePageId": "road-card", "activePageTitle": "Road Card" }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "RoadCardPage", null, { "client:only": "react", "client:component-hydration": "only", "client:component-path": "/workspaces/developer-roadmap/src/components/RoadCard/RoadCardPage", "client:component-export": "RoadCardPage" })} ` })} ` })}`;
}, "/workspaces/developer-roadmap/src/pages/account/road-card.astro", void 0);

const $$file = "/workspaces/developer-roadmap/src/pages/account/road-card.astro";
const $$url = "/account/road-card";

export { $$RoadCard as default, $$file as file, $$url as url };
