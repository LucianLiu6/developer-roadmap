/* empty css                             */
import { k as createAstro, l as createComponent, m as renderTemplate, p as renderComponent } from './astro/server_DJHfVkFr.mjs';
import 'kleur/colors';
import { $ as $$GuideHeader, a as $$GuideContent } from './GuideHeader_JJ4oHn4B.mjs';
import { a as $$BaseLayout } from './BaseLayout_CyQdLUYI.mjs';
import { c as getAllGuides } from './guide_2lwLlurY.mjs';
import { g as getOpenGraphImageUrl } from './open-graph_SsQiBkmO.mjs';
import { r as replaceVariables } from './markdown_7JFDt8o8.mjs';

const $$Astro = createAstro("https://roadmap.sh/");
async function getStaticPaths() {
  const guides = (await getAllGuides()).filter(
    (guide) => !guide.frontmatter.excludedBySlug
  );
  return guides.map((guide) => ({
    params: { guideId: guide.id },
    props: { guide }
  }));
}
const $$guideId = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$guideId;
  const { guideId } = Astro2.params;
  const { guide } = Astro2.props;
  const { frontmatter: guideData, author } = guide;
  const ogImageUrl = guideData.seo.ogImageUrl || getOpenGraphImageUrl({
    group: "guide",
    resourceId: guideId
  });
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": replaceVariables(guideData.seo.title), "description": replaceVariables(guideData.seo.description), "permalink": `/guides/${guideId}`, "canonicalUrl": guideData.canonicalUrl, "ogImageUrl": ogImageUrl }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "GuideHeader", $$GuideHeader, { "guide": guide })} ${renderComponent($$result2, "GuideContent", $$GuideContent, { "guide": guide })} ` })}`;
}, "/workspaces/developer-roadmap/src/pages/guides/[guideId].astro", void 0);

const $$file = "/workspaces/developer-roadmap/src/pages/guides/[guideId].astro";
const $$url = "/guides/[guideId]";

export { $$guideId as default, $$file as file, getStaticPaths, $$url as url };
