/* empty css                             */
import { l as createComponent, m as renderTemplate, p as renderComponent } from './astro/server_DJHfVkFr.mjs';
import 'kleur/colors';
import { T as TeamSidebar } from './TeamSidebar_DUJgS0Qm.mjs';
import { $ as $$AccountLayout } from './AccountLayout_B_1T_z4s.mjs';

const $$Members = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "AccountLayout", $$AccountLayout, { "title": "Team Members", "noIndex": true, "initialLoadingMessage": "Loading members" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "TeamSidebar", TeamSidebar, { "activePageId": "members", "client:load": true, "client:component-hydration": "load", "client:component-path": "/workspaces/developer-roadmap/src/components/TeamSidebar", "client:component-export": "TeamSidebar" }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "TeamMembersPage", null, { "client:only": "react", "client:component-hydration": "only", "client:component-path": "/workspaces/developer-roadmap/src/components/TeamMembers/TeamMembersPage", "client:component-export": "TeamMembersPage" })} ` })} ` })}`;
}, "/workspaces/developer-roadmap/src/pages/team/members.astro", void 0);

const $$file = "/workspaces/developer-roadmap/src/pages/team/members.astro";
const $$url = "/team/members";

export { $$Members as default, $$file as file, $$url as url };
