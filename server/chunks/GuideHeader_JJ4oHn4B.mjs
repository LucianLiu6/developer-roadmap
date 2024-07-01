import { k as createAstro, l as createComponent, m as renderTemplate, n as maybeRenderHead, p as renderComponent, o as addAttribute } from './astro/server_DJHfVkFr.mjs';
import 'kleur/colors';
import { b as getGuideTableOfContent } from './guide_2lwLlurY.mjs';
import { $ as $$MarkdownFile } from './MarkdownFile_CKhC2S16.mjs';
import { T as TableOfContent } from './TableOfContent_CdmXb9C6.mjs';
import { r as replaceVariables } from './markdown_7JFDt8o8.mjs';
import 'clsx';
import 'markdown-it';

const $$Astro$1 = createAstro("https://roadmap.sh/");
const $$GuideContent = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$GuideContent;
  const { guide } = Astro2.props;
  const allHeadings = guide.getHeadings();
  const tableOfContent = getGuideTableOfContent(allHeadings);
  const showTableOfContent = tableOfContent.length > 0;
  const { frontmatter: guideFrontmatter, author } = guide;
  return renderTemplate`${maybeRenderHead()}<article class="lg:grid lg:max-w-full lg:grid-cols-[1fr_minmax(0,700px)_1fr]"> ${showTableOfContent && renderTemplate`<div class="bg-gradient-to-r from-gray-50 py-0 lg:col-start-3 lg:col-end-4 lg:row-start-1"> ${renderComponent($$result, "TableOfContent", TableOfContent, { "toc": tableOfContent, "client:load": true, "client:component-hydration": "load", "client:component-path": "/workspaces/developer-roadmap/src/components/TableOfContent/TableOfContent", "client:component-export": "TableOfContent" })} </div>`} <div${addAttribute([
    "col-start-2 col-end-3 row-start-1 mx-auto max-w-[700px] py-5 sm:py-10",
    {
      "lg:border-r": showTableOfContent
    }
  ], "class:list")}> ${renderComponent($$result, "MarkdownFile", $$MarkdownFile, {}, { "default": ($$result2) => renderTemplate` <h1 class="mb-3 text-balance text-4xl font-bold"> ${replaceVariables(guideFrontmatter.title)} </h1> <p class="my-0 flex items-center justify-start text-sm text-gray-400"> <a${addAttribute(`/authors/${author.id}`, "href")} class="inline-flex items-center font-medium underline-offset-2 hover:text-gray-600 hover:underline"> <img${addAttribute(author.frontmatter.name, "alt")}${addAttribute(author.frontmatter.imageUrl, "src")} class="mb-0 mr-2 inline h-5 w-5 rounded-full"> ${author.frontmatter.name} </a> <span class="mx-2 hidden sm:inline">&middot;</span> <a class="hidden underline-offset-2 hover:text-gray-600 sm:inline"${addAttribute(`https://github.com/kamranahmedse/developer-roadmap/tree/master/src/data/guides/${guide.id}.md`, "href")} target="_blank">
Improve this Guide
</a> </p> ${renderComponent($$result2, "guide.Content", guide.Content, {})} ` })} </div> </article>`;
}, "/workspaces/developer-roadmap/src/components/Guide/GuideContent.astro", void 0);

const $$Astro = createAstro("https://roadmap.sh/");
const $$GuideHeader = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$GuideHeader;
  Astro2.props;
  return void 0;
}, "/workspaces/developer-roadmap/src/components/GuideHeader.astro", void 0);

export { $$GuideHeader as $, $$GuideContent as a };
