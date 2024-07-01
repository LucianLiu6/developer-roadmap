/* empty css                             */
import { l as createComponent, m as renderTemplate, p as renderComponent, n as maybeRenderHead } from './astro/server_DJHfVkFr.mjs';
import 'kleur/colors';
import { A as AuthenticationForm, t as AccountTerms } from './BaseLayout_CyQdLUYI.mjs';
import { $ as $$AccountLayout } from './AccountLayout_B_1T_z4s.mjs';

const $$Login = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "AccountLayout", $$AccountLayout, { "title": "Login - roadmap.sh", "description": "Register yourself to receive occasional emails about new roadmaps, updates, guides and videos", "permalink": "/signup", "noIndex": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="container"> <div class="mx-auto flex flex-col items-start justify-start pb-28 pt-10 sm:max-w-[400px] sm:items-center sm:justify-center sm:pt-20"> <div class="mb-2 text-left sm:mb-5 sm:text-center"> <h1 class="mb-2 text-3xl font-semibold sm:mb-5 sm:text-5xl">Login</h1> <p class="mb-3 text-base leading-6 text-gray-600">
Welcome back! Let's take you to your account.
</p> </div> ${renderComponent($$result2, "AuthenticationForm", AuthenticationForm, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/workspaces/developer-roadmap/src/components/AuthenticationFlow/AuthenticationForm", "client:component-export": "AuthenticationForm" })} <div class="mt-3 w-full rounded-md border py-2 text-center text-sm text-slate-600">
Don't have an account?${" "} <a href="/signup" class="font-medium text-blue-700 hover:text-blue-600 hover:underline">
Sign up
</a> </div> ${renderComponent($$result2, "AccountTerms", AccountTerms, {})} </div> </div> ` })}`;
}, "/workspaces/developer-roadmap/src/pages/login.astro", void 0);

const $$file = "/workspaces/developer-roadmap/src/pages/login.astro";
const $$url = "/login";

export { $$Login as default, $$file as file, $$url as url };
