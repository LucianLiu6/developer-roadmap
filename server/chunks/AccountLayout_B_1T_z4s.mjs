import { k as createAstro, l as createComponent, m as renderTemplate, p as renderComponent, t as renderSlot, n as maybeRenderHead } from './astro/server_DJHfVkFr.mjs';
import 'kleur/colors';
import { a as $$BaseLayout } from './BaseLayout_CyQdLUYI.mjs';

const $$Astro = createAstro("https://roadmap.sh/");
const $$AccountLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$AccountLayout;
  const props = Astro2.props;
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { ...props, "noIndex": true }, { "default": ($$result2) => renderTemplate` ${renderSlot($$result2, $$slots["default"])}   `, "login-popup": ($$result2) => renderTemplate`${maybeRenderHead()}<div></div>`, "page-footer": ($$result2) => renderTemplate`<div></div>` })}`;
}, "/workspaces/developer-roadmap/src/layouts/AccountLayout.astro", void 0);

export { $$AccountLayout as $ };
