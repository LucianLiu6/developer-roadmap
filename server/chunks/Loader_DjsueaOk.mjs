import { k as createAstro, l as createComponent, m as renderTemplate, n as maybeRenderHead, p as renderComponent } from './astro/server_DJHfVkFr.mjs';
import 'kleur/colors';
import { $ as $$AstroIcon } from './BaseLayout_CyQdLUYI.mjs';

const $$Astro = createAstro("https://roadmap.sh/");
const $$Loader = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Loader;
  return renderTemplate`${maybeRenderHead()}<div class="flex justify-center w-full"> ${renderComponent($$result, "Icon", $$AstroIcon, { "icon": "spinner", "class": "h-6 w-6 sm:w-12 sm:h-12 text-gray-200 animate-spin fill-blue-600" })} </div>`;
}, "/workspaces/developer-roadmap/src/components/Loader.astro", void 0);

export { $$Loader as $ };
