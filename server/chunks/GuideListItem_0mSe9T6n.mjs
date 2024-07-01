import { k as createAstro, l as createComponent, m as renderTemplate, n as maybeRenderHead, o as addAttribute } from './astro/server_DJHfVkFr.mjs';
import 'kleur/colors';
import 'clsx';
import { r as replaceVariables } from './markdown_7JFDt8o8.mjs';

const $$Astro = createAstro("https://roadmap.sh/");
const $$GuideListItem = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$GuideListItem;
  function isQuestionGroupType(guide2) {
    return guide2.questions !== void 0;
  }
  const { guide } = Astro2.props;
  const { frontmatter, id } = guide;
  let pageUrl = "";
  let guideType = "";
  if (isQuestionGroupType(guide)) {
    pageUrl = `/questions/${id}`;
    guideType = "Questions";
  } else {
    const excludedBySlug = frontmatter.excludedBySlug;
    pageUrl = excludedBySlug ? excludedBySlug : `/guides/${id}`;
    guideType = frontmatter.type;
  }
  return renderTemplate`${maybeRenderHead()}<a${addAttribute([
    "text-md group block flex items-center justify-between border-b py-2 text-gray-600 no-underline hover:text-blue-600"
  ], "class:list")}${addAttribute(pageUrl, "href")}> <span class="text-sm transition-transform group-hover:translate-x-2 md:text-base"> ${replaceVariables(frontmatter.title)} ${frontmatter.isNew && renderTemplate`<span class="ml-1.5 rounded-sm bg-green-300 px-1.5 py-0.5 text-xs font-medium uppercase text-green-900">
New
<span class="hidden sm:inline">
&middot;
${new Date(frontmatter.date).toLocaleString("default", {
    month: "long"
  })} </span> </span>`} </span> <span class="hidden text-xs capitalize text-gray-500 sm:block"> ${guideType} </span> <span class="block text-xs text-gray-400 sm:hidden"> &raquo;</span> </a>`;
}, "/workspaces/developer-roadmap/src/components/GuideListItem.astro", void 0);

export { $$GuideListItem as $ };
