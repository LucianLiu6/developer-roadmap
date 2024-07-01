import { l as createComponent, m as renderTemplate, n as maybeRenderHead, t as renderSlot } from './astro/server_DJHfVkFr.mjs';
import 'kleur/colors';
import 'clsx';

const $$MarkdownFile = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="container prose-h2:text-balance prose-h3:text-balance prose-h4:text-balance prose-h5:text-balance prose prose-xl prose-h2:mb-3 prose-h2:mt-10 prose-h2:scroll-mt-5 prose-h2:text-3xl prose-h3:mt-2 prose-h3:scroll-mt-5 prose-h5:font-medium prose-blockquote:font-normal prose-code:bg-transparent prose-img:mt-1 prose-h2:sm:scroll-mt-10 prose-h3:sm:scroll-mt-10"> ${renderSlot($$result, $$slots["default"])} </div>`;
}, "/workspaces/developer-roadmap/src/components/MarkdownFile.astro", void 0);

export { $$MarkdownFile as $ };
