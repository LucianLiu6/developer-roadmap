/* empty css                             */
import { l as createComponent, m as renderTemplate, p as renderComponent, n as maybeRenderHead } from './astro/server_DJHfVkFr.mjs';
import 'kleur/colors';
import { $ as $$GridItem } from './GridItem_Dp_ZEsUB.mjs';
import { $ as $$SimplePageHeader } from './SimplePageHeader_-stMut80.mjs';
import { a as $$BaseLayout } from './BaseLayout_CyQdLUYI.mjs';
import { g as getAllQuestionGroups } from './question-group_C-CQO0is.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const questionGroups = await getAllQuestionGroups();
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Questions", "description": "Step by step guides and paths to learn different tools or technologies", "permalink": "/roadmaps" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "SimplePageHeader", $$SimplePageHeader, { "title": "Questions", "description": "Quizzes to help you test and improve your knowledge and skill up", "showYouTubeAlert": false })} ${maybeRenderHead()}<div class="flex bg-gray-100 pb-14 pt-4 sm:pb-16 sm:pt-8"> <div class="container"> <div class="grid grid-cols-1 gap-1 sm:grid-cols-2 sm:gap-3"> ${questionGroups.map((questionGroup) => renderTemplate`${renderComponent($$result2, "GridItem", $$GridItem, { "url": `/questions/${questionGroup.id}`, "isNew": questionGroup.frontmatter.isNew, "title": questionGroup.frontmatter.briefTitle, "description": `${questionGroup.questions.length} Questions &middot; ${questionGroup.allTopics.length} topics` })}`)} </div> </div> </div> ` })}`;
}, "/workspaces/developer-roadmap/src/pages/questions/index.astro", void 0);

const $$file = "/workspaces/developer-roadmap/src/pages/questions/index.astro";
const $$url = "/questions";

export { $$Index as default, $$file as file, $$url as url };
