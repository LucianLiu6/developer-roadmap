/* empty css                             */
import { l as createComponent, m as renderTemplate, p as renderComponent, n as maybeRenderHead } from './astro/server_DJHfVkFr.mjs';
import 'kleur/colors';
import { A as AuthenticationForm, t as AccountTerms } from './BaseLayout_CyQdLUYI.mjs';
import { $ as $$AccountLayout } from './AccountLayout_B_1T_z4s.mjs';

const $$Signup = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "AccountLayout", $$AccountLayout, { "title": "Signup - roadmap.sh", "description": "Create an account to track your progress, showcase your skillset", "permalink": "/signup", "noIndex": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="container"> <div class="mx-auto flex flex-col items-start justify-start pb-28 pt-10 sm:max-w-[400px] sm:items-center sm:justify-center sm:pt-20"> <div class="mb-2 text-left sm:mb-5 sm:text-center"> <h1 class="mb-2 text-3xl font-semibold sm:mb-5 sm:text-5xl">Sign Up</h1> <p class="mb-3 hidden text-base leading-6 text-gray-600 sm:block">
Create an account to track your progress, showcase your skill-set and
          be a part of the community.
</p> <p class="mb-3 block text-sm text-gray-600 sm:hidden">
Create an account to track your progress, showcase your skill-set and
          be a part of the community.
</p> </div> ${renderComponent($$result2, "AuthenticationForm", AuthenticationForm, { "type": "signup", "client:load": true, "client:component-hydration": "load", "client:component-path": "/workspaces/developer-roadmap/src/components/AuthenticationFlow/AuthenticationForm", "client:component-export": "AuthenticationForm" })} <div class="mt-3 w-full rounded-md border py-2 text-center text-sm text-slate-600">
Already have an account? <a href="/login" class="font-medium text-blue-700 hover:text-blue-600">Login</a> </div> ${renderComponent($$result2, "AccountTerms", AccountTerms, {})} </div> </div> ` })}`;
}, "/workspaces/developer-roadmap/src/pages/signup.astro", void 0);

const $$file = "/workspaces/developer-roadmap/src/pages/signup.astro";
const $$url = "/signup";

export { $$Signup as default, $$file as file, $$url as url };
