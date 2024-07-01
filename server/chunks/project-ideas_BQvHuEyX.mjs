/* empty css                             */
import { l as createComponent, m as renderTemplate, p as renderComponent } from './astro/server_DJHfVkFr.mjs';
import 'kleur/colors';
import { $ as $$GuideHeader, a as $$GuideContent } from './GuideHeader_JJ4oHn4B.mjs';
import { a as $$BaseLayout } from './BaseLayout_CyQdLUYI.mjs';
import { a as getGuideById } from './guide_2lwLlurY.mjs';
import { g as getOpenGraphImageUrl } from './open-graph_SsQiBkmO.mjs';
import { r as replaceVariables } from './markdown_7JFDt8o8.mjs';

const $$ProjectIdeas = createComponent(async ($$result, $$props, $$slots) => {
  const guideId = "backend-project-ideas";
  const guide = await getGuideById(guideId);
  const { frontmatter: guideData } = guide;
  const ogImageUrl = guideData.seo.ogImageUrl || getOpenGraphImageUrl({
    group: "guide",
    resourceId: guideId
  });
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": replaceVariables(guideData.seo.title), "description": replaceVariables(guideData.seo.description), "permalink": `/backend/project-ideas`, "canonicalUrl": guideData.canonicalUrl, "ogImageUrl": ogImageUrl }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "GuideHeader", $$GuideHeader, { "guide": guide })} ${renderComponent($$result2, "GuideContent", $$GuideContent, { "guide": guide })} ` })}`;
}, "/workspaces/developer-roadmap/src/pages/backend/project-ideas.astro", void 0);

const $$file = "/workspaces/developer-roadmap/src/pages/backend/project-ideas.astro";
const $$url = "/backend/project-ideas";

export { $$ProjectIdeas as default, $$file as file, $$url as url };
