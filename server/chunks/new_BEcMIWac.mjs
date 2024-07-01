/* empty css                             */
import { l as createComponent, m as renderTemplate, p as renderComponent } from './astro/server_DJHfVkFr.mjs';
import 'kleur/colors';
import { $ as $$AccountSidebar } from './AccountSidebar_C4eYu0rC.mjs';
import { $ as $$AccountLayout } from './AccountLayout_B_1T_z4s.mjs';

const $$New = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "AccountLayout", $$AccountLayout, { "title": "Create Team", "noIndex": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "AccountSidebar", $$AccountSidebar, { "hasDesktopSidebar": false, "activePageId": "create-team", "activePageTitle": "Create Team" }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "CreateTeamForm", null, { "client:only": "react", "client:component-hydration": "only", "client:component-path": "/workspaces/developer-roadmap/src/components/CreateTeam/CreateTeamForm", "client:component-export": "CreateTeamForm" })} ` })} ` })}`;
}, "/workspaces/developer-roadmap/src/pages/team/new.astro", void 0);

const $$file = "/workspaces/developer-roadmap/src/pages/team/new.astro";
const $$url = "/team/new";

export { $$New as default, $$file as file, $$url as url };
