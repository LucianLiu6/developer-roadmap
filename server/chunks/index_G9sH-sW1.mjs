/* empty css                             */
import { l as createComponent, m as renderTemplate, p as renderComponent, n as maybeRenderHead } from './astro/server_DJHfVkFr.mjs';
import 'kleur/colors';
import { $ as $$GridItem } from './GridItem_Dp_ZEsUB.mjs';
import { $ as $$SimplePageHeader } from './SimplePageHeader_-stMut80.mjs';
import { a as $$BaseLayout } from './BaseLayout_CyQdLUYI.mjs';
import { g as getAllBestPractices } from './best-practice_Cjq4FQpQ.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const bestPractices = await getAllBestPractices();
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Best Practices", "description": "Best practices on different topics with detailed implementation guidelines", "permalink": "/best-practices" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "SimplePageHeader", $$SimplePageHeader, { "title": "Best Practices", "description": "Best practices on different topics with detailed implementation guidelines" })} ${maybeRenderHead()}<div class="bg-gray-100 pt-4 pb-14 sm:pt-8 sm:pb-16"> <div class="container"> <div class="grid grid-cols-1 sm:grid-cols-2 gap-0.5 sm:gap-3"> ${bestPractices.map((bestPractice) => renderTemplate`${renderComponent($$result2, "GridItem", $$GridItem, { "url": `/best-practices/${bestPractice.id}`, "isNew": bestPractice.frontmatter.isNew, "title": bestPractice.frontmatter.briefTitle, "description": bestPractice.frontmatter.description })}`)} </div> </div> </div> ` })}`;
}, "/workspaces/developer-roadmap/src/pages/best-practices/index.astro", void 0);

const $$file = "/workspaces/developer-roadmap/src/pages/best-practices/index.astro";
const $$url = "/best-practices";

export { $$Index as default, $$file as file, $$url as url };
