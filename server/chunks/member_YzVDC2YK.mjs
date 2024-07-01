/* empty css                             */
import { l as createComponent, m as renderTemplate, p as renderComponent } from './astro/server_DJHfVkFr.mjs';
import 'kleur/colors';
import { T as TeamSidebar } from './TeamSidebar_DUJgS0Qm.mjs';
import { $ as $$AccountLayout } from './AccountLayout_B_1T_z4s.mjs';

const $$Member = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "AccountLayout", $$AccountLayout, { "title": "Team Members", "noIndex": true, "initialLoadingMessage": "Loading member" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "TeamSidebar", TeamSidebar, { "activePageId": "members", "client:load": true, "client:component-hydration": "load", "client:component-path": "/workspaces/developer-roadmap/src/components/TeamSidebar", "client:component-export": "TeamSidebar" }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "TeamMemberDetailsPage", null, { "client:only": "react", "client:component-hydration": "only", "client:component-path": "/workspaces/developer-roadmap/src/components/TeamMemberDetails/TeamMemberDetailsPage", "client:component-export": "TeamMemberDetailsPage" })} ` })} ` })}`;
}, "/workspaces/developer-roadmap/src/pages/team/member.astro", void 0);

const $$file = "/workspaces/developer-roadmap/src/pages/team/member.astro";
const $$url = "/team/member";

export { $$Member as default, $$file as file, $$url as url };
