/* empty css                             */
import { l as createComponent, m as renderTemplate, p as renderComponent } from './astro/server_DJHfVkFr.mjs';
import 'kleur/colors';
import { $ as $$AccountLayout } from './AccountLayout_B_1T_z4s.mjs';
import { m as $$LoginPopup } from './BaseLayout_CyQdLUYI.mjs';

const $$Befriend = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "AccountLayout", $$AccountLayout, { "title": "Respond Invite", "noIndex": true, "initialLoadingMessage": "Loading invite" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "LoginPopup", $$LoginPopup, {})} ${renderComponent($$result2, "Befriend", null, { "client:only": "react", "client:component-hydration": "only", "client:component-path": "/workspaces/developer-roadmap/src/components/Befriend", "client:component-export": "Befriend" })} ` })}`;
}, "/workspaces/developer-roadmap/src/pages/befriend.astro", void 0);

const $$file = "/workspaces/developer-roadmap/src/pages/befriend.astro";
const $$url = "/befriend";

export { $$Befriend as default, $$file as file, $$url as url };
