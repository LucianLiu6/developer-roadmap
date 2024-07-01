import { k as createAstro, l as createComponent, m as renderTemplate, p as renderComponent, n as maybeRenderHead, t as renderSlot } from './astro/server_DJHfVkFr.mjs';
import 'kleur/colors';
import { a as $$BaseLayout } from './BaseLayout_CyQdLUYI.mjs';

const $$Astro = createAstro("https://roadmap.sh/");
const $$MarkdownLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$MarkdownLayout;
  const { frontmatter = {} } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { ...frontmatter }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="container prose py-12"> ${renderSlot($$result2, $$slots["default"])} </div> ` })}`;
}, "/workspaces/developer-roadmap/src/layouts/MarkdownLayout.astro", void 0);

export { $$MarkdownLayout as $ };
