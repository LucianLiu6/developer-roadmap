/* empty css                             */
import { l as createComponent, m as renderTemplate, p as renderComponent } from './astro/server_DJHfVkFr.mjs';
import 'kleur/colors';
import { T as TeamSidebar } from './TeamSidebar_DUJgS0Qm.mjs';
import { $ as $$AccountLayout } from './AccountLayout_B_1T_z4s.mjs';

const $$Activity = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "AccountLayout", $$AccountLayout, { "title": "Team Activity", "noIndex": true, "initialLoadingMessage": "Loading activity" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "TeamSidebar", TeamSidebar, { "activePageId": "activity", "client:load": true, "client:component-hydration": "load", "client:component-path": "/workspaces/developer-roadmap/src/components/TeamSidebar", "client:component-export": "TeamSidebar" }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "TeamActivityPage", null, { "client:only": "react", "client:component-hydration": "only", "client:component-path": "/workspaces/developer-roadmap/src/components/TeamActivity/TeamActivityPage", "client:component-export": "TeamActivityPage" })} ` })} ` })}`;
}, "/workspaces/developer-roadmap/src/pages/team/activity.astro", void 0);

const $$file = "/workspaces/developer-roadmap/src/pages/team/activity.astro";
const $$url = "/team/activity";

export { $$Activity as default, $$file as file, $$url as url };
