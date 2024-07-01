/* empty css                             */
import { l as createComponent, m as renderTemplate, p as renderComponent } from './astro/server_DJHfVkFr.mjs';
import 'kleur/colors';
import { $ as $$AccountSidebar } from './AccountSidebar_C4eYu0rC.mjs';
import { $ as $$AccountLayout } from './AccountLayout_B_1T_z4s.mjs';

const $$Friends = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "AccountLayout", $$AccountLayout, { "title": "Friends", "noIndex": true, "initialLoadingMessage": "Loading friends" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "AccountSidebar", $$AccountSidebar, { "activePageId": "friends", "activePageTitle": "Friends" }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "FriendsPage", null, { "client:only": "react", "client:component-hydration": "only", "client:component-path": "/workspaces/developer-roadmap/src/components/Friends/FriendsPage", "client:component-export": "FriendsPage" })} ` })} ` })}`;
}, "/workspaces/developer-roadmap/src/pages/account/friends.astro", void 0);

const $$file = "/workspaces/developer-roadmap/src/pages/account/friends.astro";
const $$url = "/account/friends";

export { $$Friends as default, $$file as file, $$url as url };
