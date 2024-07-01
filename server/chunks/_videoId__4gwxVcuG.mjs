/* empty css                             */
import { k as createAstro, l as createComponent, m as renderTemplate, n as maybeRenderHead, o as addAttribute, p as renderComponent } from './astro/server_DJHfVkFr.mjs';
import 'kleur/colors';
import 'clsx';
import { a as $$BaseLayout } from './BaseLayout_CyQdLUYI.mjs';
import { a as getAllVideos } from './video_NKn1GyjA.mjs';

const $$Astro$1 = createAstro("https://roadmap.sh/");
const $$VideoHeader = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$VideoHeader;
  const { video } = Astro2.props;
  const { frontmatter, author } = video;
  return renderTemplate`${maybeRenderHead()}<div class="border-b bg-white py-5 sm:py-12"> <div class="container text-left sm:text-center"> <p class="hidden items-center justify-start text-gray-400 sm:flex sm:justify-center"> <a${addAttribute(`/authors/${author.id}`, "href")} class="inline-flex items-center font-medium hover:text-gray-600 hover:underline"> <img${addAttribute(author.frontmatter.name, "alt")}${addAttribute(author.frontmatter.imageUrl, "src")} class="mr-2 inline h-5 w-5 rounded-full"> ${author.frontmatter.name} </a> <span class="mx-1.5">&middot;</span> <span class="capitalize">Illustrated Video</span> </p> <h1 class="my-0 text-2xl font-bold sm:my-3.5 sm:text-5xl"> ${frontmatter.title} </h1> <p class="text-md hidden text-gray-400 sm:block"> ${frontmatter.description} </p> </div> </div>`;
}, "/workspaces/developer-roadmap/src/components/VideoHeader.astro", void 0);

const $$Astro = createAstro("https://roadmap.sh/");
async function getStaticPaths() {
  const videos = await getAllVideos();
  return videos.map((video) => ({
    params: { videoId: video.id },
    props: { video }
  }));
}
const $$videoId = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$videoId;
  const { videoId } = Astro2.params;
  const { video } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": video.frontmatter.title, "description": video.frontmatter.description, "permalink": `/videos/${videoId}` }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "VideoHeader", $$VideoHeader, { "video": video })} ${maybeRenderHead()}<div class="bg-gray-50 py-5 sm:py-10"> <div class="container prose prose-h2:mb-2 prose-h2:mt-4 prose-h2:text-3xl prose-h3:mt-2 prose-code:bg-transparent prose-img:mt-1"> ${renderComponent($$result2, "video.Content", video.Content, {})} </div> </div> ` })}`;
}, "/workspaces/developer-roadmap/src/pages/videos/[videoId].astro", void 0);

const $$file = "/workspaces/developer-roadmap/src/pages/videos/[videoId].astro";
const $$url = "/videos/[videoId]";

export { $$videoId as default, $$file as file, getStaticPaths, $$url as url };
