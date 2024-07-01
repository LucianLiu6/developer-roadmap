/* empty css                             */
import { l as createComponent, m as renderTemplate, p as renderComponent } from './astro/server_DJHfVkFr.mjs';
import 'kleur/colors';
import { $ as $$AccountSidebar } from './AccountSidebar_C4eYu0rC.mjs';
import { $ as $$AccountLayout } from './AccountLayout_B_1T_z4s.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "AccountLayout", $$AccountLayout, { "title": "Activity", "noIndex": true, "initialLoadingMessage": "Loading activity" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "AccountSidebar", $$AccountSidebar, { "activePageId": "activity", "activePageTitle": "Activity" }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "ActivityPage", null, { "client:only": "react", "client:component-hydration": "only", "client:component-path": "/workspaces/developer-roadmap/src/components/Activity/ActivityPage", "client:component-export": "ActivityPage" })} ` })} ` })}`;
}, "/workspaces/developer-roadmap/src/pages/account/index.astro", void 0);

const $$file = "/workspaces/developer-roadmap/src/pages/account/index.astro";
const $$url = "/account";

export { $$Index as default, $$file as file, $$url as url };
