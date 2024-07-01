/* empty css                             */
import { k as createAstro, l as createComponent, m as renderTemplate, p as renderComponent, n as maybeRenderHead, o as addAttribute } from './astro/server_DJHfVkFr.mjs';
import 'kleur/colors';
import { a as $$BaseLayout, $ as $$AstroIcon } from './BaseLayout_CyQdLUYI.mjs';
import { g as getGuidesByAuthor } from './guide_2lwLlurY.mjs';
import { g as getVideosByAuthor } from './video_NKn1GyjA.mjs';
import { $ as $$GuideListItem } from './GuideListItem_0mSe9T6n.mjs';
import { g as getAuthorIds, a as getAuthorById } from './author_CpkHpI-S.mjs';
import { $ as $$VideoListItem } from './VideoListItem_yisQuaNt.mjs';
import { g as getAllQuestionGroups } from './question-group_C-CQO0is.mjs';

const $$Astro = createAstro("https://roadmap.sh/");
async function getStaticPaths() {
  const authorIds = await getAuthorIds();
  return authorIds.map((authorId) => ({
    params: { authorId }
  }));
}
const $$authorId = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$authorId;
  const { authorId } = Astro2.params;
  const author = await getAuthorById(authorId);
  const authorFrontmatter = author.frontmatter;
  const guides = await getGuidesByAuthor(authorId);
  const questionGuides = (await getAllQuestionGroups()).filter(
    (group) => group.frontmatter.authorId === authorId
  );
  const videos = await getVideosByAuthor(authorId);
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "permalink": `/author/${author.id}`, "title": `${author.frontmatter.name} - Author at roadmap.sh`, "briefTitle": author.frontmatter.name, "ogImageUrl": `https://roadmap.sh/${authorFrontmatter.imageUrl}`, "description": `${author.frontmatter.name} has written ${guides.length} articles on roadmap.sh on a variety of topics.`, "noIndex": false, "jsonLd": [
    {
      "@context": "https://schema.org/",
      "@type": "Person",
      name: authorFrontmatter.name,
      url: `https://roadmap.sh/authors/${authorId}`,
      image: authorFrontmatter.imageUrl.startsWith("http") ? authorFrontmatter.imageUrl : `https://roadmap.sh${authorFrontmatter.imageUrl}`,
      sameAs: authorFrontmatter.social ? Object.values(authorFrontmatter.social) : [],
      ...authorFrontmatter.employment && {
        jobTitle: authorFrontmatter.employment?.title,
        worksFor: {
          "@type": "Organization",
          name: authorFrontmatter.employment.company
        }
      }
    }
  ] }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="container pb-0 pt-4 md:pb-16 md:pt-8"> <div class=""> <div class="mb-5 flex items-center gap-8 rounded-3xl py-0 md:py-8"> <div class="flex-grow"> <h1 class="text-2xl font-bold md:text-3xl"> ${authorFrontmatter.name} </h1> <div class="mb-4 mt-1 flex flex-col gap-3 leading-normal text-gray-800 md:mb-6 md:mt-4 [&>p>a]:font-semibold [&>p>a]:underline"> ${renderComponent($$result2, "author.Content", author.Content, {})} </div> <div class="flex items-center justify-between"> <div class="flex items-center gap-1.5"> ${authorFrontmatter.social?.github && renderTemplate`<a${addAttribute(authorFrontmatter.social.github, "href")} target="_blank" class="text-gray-500 transition-colors hover:text-gray-800"> ${renderComponent($$result2, "AstroIcon", $$AstroIcon, { "icon": "github", "class": "h-[20px]" })} </a>`} ${authorFrontmatter.social.twitter && renderTemplate`<a${addAttribute(authorFrontmatter.social.twitter, "href")} target="_blank" class="text-gray-500 transition-colors hover:text-gray-800"> ${renderComponent($$result2, "AstroIcon", $$AstroIcon, { "icon": "twitter", "class": "h-[20px]" })} </a>`} ${authorFrontmatter.social.linkedin && renderTemplate`<a${addAttribute(authorFrontmatter.social.linkedin, "href")} target="_blank" class="text-gray-500 transition-colors hover:text-gray-800"> ${renderComponent($$result2, "AstroIcon", $$AstroIcon, { "icon": "linkedin-2", "class": "h-[20px]" })} </a>`} ${authorFrontmatter.social.website && renderTemplate`<a${addAttribute(authorFrontmatter.social.website, "href")} target="_blank" class="text-gray-500 transition-colors hover:text-gray-800"> ${renderComponent($$result2, "AstroIcon", $$AstroIcon, { "icon": "globe", "class": "h-[20px]" })} </a>`} </div> </div> </div> <div class="hidden flex-shrink-0 flex-col md:flex"> <img alt="Kamran Ahmed's profile picture" class="block h-[175px] w-[175px] rounded-full bg-gray-100"${addAttribute(authorFrontmatter.imageUrl, "src")}> </div> </div> </div> <div class="rounded-t-xl bg-gradient-to-b from-gray-100 to-white px-3 py-2 md:px-6 md:py-3 [&>*:last-child]:border-b-0"> ${[...guides, ...questionGuides].sort((a, b) => {
    const aDate = a.frontmatter.date || a.frontmatter.publishedAt;
    const bDate = b.frontmatter.date || b.frontmatter.publishedAt;
    return new Date(bDate) - new Date(aDate);
  }).map((guide) => renderTemplate`${renderComponent($$result2, "GuideListItem", $$GuideListItem, { "guide": guide })}`)} ${videos.map((video) => renderTemplate`${renderComponent($$result2, "VideoListItem", $$VideoListItem, { "video": video })}`)} </div> </div> ` })}`;
}, "/workspaces/developer-roadmap/src/pages/authors/[authorId].astro", void 0);

const $$file = "/workspaces/developer-roadmap/src/pages/authors/[authorId].astro";
const $$url = "/authors/[authorId]";

export { $$authorId as default, $$file as file, getStaticPaths, $$url as url };
