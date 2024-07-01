/* empty css                             */
import { l as createComponent, m as renderTemplate, p as renderComponent, n as maybeRenderHead } from './astro/server_DJHfVkFr.mjs';
import 'kleur/colors';
import { $ as $$GuideListItem } from './GuideListItem_0mSe9T6n.mjs';
import { $ as $$SimplePageHeader } from './SimplePageHeader_-stMut80.mjs';
import { a as $$BaseLayout } from './BaseLayout_CyQdLUYI.mjs';
import { c as getAllGuides } from './guide_2lwLlurY.mjs';
import { g as getAllQuestionGroups } from './question-group_C-CQO0is.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const guides = await getAllGuides();
  const questionGuides = (await getAllQuestionGroups()).filter(
    (questionGroup) => questionGroup.frontmatter.authorId
  );
  const allGuides = [...guides, ...questionGuides];
  const sortedGuides = allGuides.sort((a, b) => {
    const aDate = new Date(a.frontmatter.date);
    const bDate = new Date(b.frontmatter.date);
    return bDate.getTime() - aDate.getTime();
  });
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Guides - roadmap.sh", "description": "Detailed guides on Software Engineering Topics", "permalink": `/guides` }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "SimplePageHeader", $$SimplePageHeader, { "title": "Guides", "description": "Succinct graphical explanations to engineering topics." })} ${maybeRenderHead()}<div class="bg-gray-50 pb-20 pt-2"> <div class="container"> <div class="mt-3 sm:my-5"> ${sortedGuides.map((guide) => renderTemplate`${renderComponent($$result2, "GuideListItem", $$GuideListItem, { "guide": guide })}`)} </div> </div> </div> ` })}`;
}, "/workspaces/developer-roadmap/src/pages/guides/index.astro", void 0);

const $$file = "/workspaces/developer-roadmap/src/pages/guides/index.astro";
const $$url = "/guides";

export { $$Index as default, $$file as file, $$url as url };
