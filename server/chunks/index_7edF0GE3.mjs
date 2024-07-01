/* empty css                             */
import { k as createAstro, l as createComponent, m as renderTemplate, n as maybeRenderHead, p as renderComponent, o as addAttribute } from './astro/server_DJHfVkFr.mjs';
import 'kleur/colors';
import { $ as $$VideoListItem } from './VideoListItem_yisQuaNt.mjs';
import { $ as $$GuideListItem } from './GuideListItem_0mSe9T6n.mjs';
import { jsxs, Fragment, jsx } from 'react/jsx-runtime';
import { Plus } from 'lucide-react';
import { c as cn, k as isLoggedIn, a as $$BaseLayout } from './BaseLayout_CyQdLUYI.mjs';
import { s as showLoginPopup } from './popup_DWUkHIfQ.mjs';
import { C as CreateRoadmapModal } from './CreateRoadmapModal_dwmfkRWg.mjs';
import { useState } from 'react';
import { g as getAllBestPractices } from './best-practice_Cjq4FQpQ.mjs';
import { c as getAllGuides } from './guide_2lwLlurY.mjs';
import { a as getRoadmapsByTag } from './roadmap_DU5YuMTS.mjs';
import { a as getAllVideos } from './video_NKn1GyjA.mjs';
import { g as getAllQuestionGroups } from './question-group_C-CQO0is.mjs';

const $$Astro$3 = createAstro("https://roadmap.sh/");
const $$FeaturedVideos = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$FeaturedVideos;
  const { heading, videos } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="container"> <h2 class="text-2xl sm:text-3xl font-bold block">${heading}</h2> <div class="mt-3 sm:my-5"> ${videos.map((video) => renderTemplate`${renderComponent($$result, "VideoListItem", $$VideoListItem, { "video": video })}`)} </div> <a href="/videos" class="hidden sm:inline transition-colors py-2 px-3 text-xs font-medium rounded-full bg-gradient-to-r from-slate-600 to-black hover:from-blue-600 hover:to-blue-800 text-white">
View All Videos &rarr;
</a> <div class="block sm:hidden mt-3"> <a href="/videos" class="text-sm font-regular block p-2 border border-black text-black rounded-md text-center hover:bg-black hover:text-gray-50">
View All Videos &nbsp;&rarr;
</a> </div> </div>`;
}, "/workspaces/developer-roadmap/src/components/FeaturedVideos.astro", void 0);

const $$Astro$2 = createAstro("https://roadmap.sh/");
const $$FeaturedGuides = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$FeaturedGuides;
  const { heading, guides, questions = [] } = Astro2.props;
  const sortedGuides = [
    ...guides,
    ...questions
  ].sort((a, b) => {
    const aDate = new Date(a.frontmatter.date);
    const bDate = new Date(b.frontmatter.date);
    return bDate.getTime() - aDate.getTime();
  });
  return renderTemplate`${maybeRenderHead()}<div class="container"> <h2 class="block text-2xl font-bold sm:text-3xl">${heading}</h2> <div class="mt-3 sm:my-5"> ${sortedGuides.map((guide) => renderTemplate`${renderComponent($$result, "GuideListItem", $$GuideListItem, { "guide": guide })}`)} </div> <a href="/guides" class="hidden rounded-full bg-gradient-to-r from-slate-600 to-black px-3 py-2 text-xs font-medium text-white transition-colors hover:from-blue-600 hover:to-blue-800 sm:inline">
View All Guides &rarr;
</a> <div class="mt-3 block sm:hidden"> <a href="/guides" class="font-regular block rounded-md border border-black p-2 text-center text-sm text-black hover:bg-black hover:text-gray-50">
View All Guides &nbsp;&rarr;
</a> </div> </div>`;
}, "/workspaces/developer-roadmap/src/components/FeaturedGuides.astro", void 0);

function CreateRoadmapButton(props) {
  const { teamId, className, text = "Create your own Roadmap" } = props;
  const [isCreatingRoadmap, setIsCreatingRoadmap] = useState(false);
  function toggleCreateRoadmapHandler() {
    if (!isLoggedIn()) {
      return showLoginPopup();
    }
    setIsCreatingRoadmap(true);
  }
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    isCreatingRoadmap && /* @__PURE__ */ jsx(
      CreateRoadmapModal,
      {
        teamId,
        onClose: () => {
          setIsCreatingRoadmap(false);
        }
      }
    ),
    /* @__PURE__ */ jsxs(
      "button",
      {
        className: cn(
          "flex h-full w-full items-center justify-center gap-1 overflow-hidden rounded-md border border-dashed border-gray-800 p-3 text-sm text-gray-400 hover:border-gray-600 hover:bg-gray-900 hover:text-gray-300",
          className
        ),
        onClick: toggleCreateRoadmapHandler,
        children: [
          /* @__PURE__ */ jsx(Plus, { size: 16 }),
          text
        ]
      }
    )
  ] });
}

const $$Astro$1 = createAstro("https://roadmap.sh/");
const $$FeaturedItem = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$FeaturedItem;
  const {
    isUpcoming = false,
    isNew = false,
    text,
    url,
    allowBookmark = true
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute([
    "group border border-slate-800 bg-slate-900 p-2.5 sm:p-3.5 block no-underline rounded-lg relative text-slate-400 font-regular text-md hover:border-slate-600 hover:text-slate-100 overflow-hidden",
    {
      "opacity-50": isUpcoming
    }
  ], "class:list")}${addAttribute(url, "href")}> <span class="relative z-20 text-slate-400"> ${text} </span> ${allowBookmark && renderTemplate`${renderComponent($$result, "MarkFavorite", null, { "resourceId": url.split("/").pop(), "resourceType": url.includes("best-practices") ? "best-practice" : "roadmap", "client:only": "react", "client:component-hydration": "only", "client:component-path": "/workspaces/developer-roadmap/src/components/FeaturedItems/MarkFavorite", "client:component-export": "MarkFavorite" })}`} ${isNew && renderTemplate`<span class="absolute bottom-1.5 right-2 flex items-center rounded-br rounded-tl text-xs font-medium text-purple-300"> <span class="mr-1.5 flex h-2 w-2"> <span class="absolute inline-flex h-2 w-2 animate-ping rounded-full bg-purple-400 opacity-75"></span> <span class="relative inline-flex h-2 w-2 rounded-full bg-purple-500"></span> </span>
New
</span>`} ${isUpcoming && renderTemplate`<span class="absolute bottom-1.5 right-2 flex items-center rounded-br rounded-tl text-xs font-medium text-slate-500"> <span class="mr-1.5 flex h-2 w-2"> <span class="absolute inline-flex h-2 w-2 animate-ping rounded-full bg-slate-500 opacity-75"></span> <span class="relative inline-flex h-2 w-2 rounded-full bg-slate-600"></span> </span>
Upcoming
</span>`} <span data-progress class="absolute bottom-0 left-0 top-0 z-10 w-0 bg-[#172a3a] transition-[width] duration-300"></span> </a>`;
}, "/workspaces/developer-roadmap/src/components/FeaturedItems/FeaturedItem.astro", void 0);

const $$Astro = createAstro("https://roadmap.sh/");
const $$FeaturedItems = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$FeaturedItems;
  const {
    featuredItems,
    heading,
    showCreateRoadmap,
    allowBookmark = true
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="relative border-b border-b-[#1e293c] py-10 sm:py-14"> <div class="container"> <h2 class="text-md font-regular absolute -top-[17px] flex rounded-lg border border-[#1e293c] bg-slate-900 px-3 py-1 text-slate-400 sm:left-1/2 sm:-translate-x-1/2"> ${heading} </h2> <ul class="grid grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-3"> ${featuredItems.map((featuredItem) => renderTemplate`<li> ${renderComponent($$result, "FeaturedItem", $$FeaturedItem, { "allowBookmark": allowBookmark, "text": featuredItem.text, "url": featuredItem.url, "isNew": featuredItem.isNew, "isUpcoming": featuredItem.isUpcoming })} </li>`)} ${showCreateRoadmap && renderTemplate`<li> ${renderComponent($$result, "CreateRoadmapButton", CreateRoadmapButton, { "client:load": true, "className": "min-h-[54px]", "client:component-hydration": "load", "client:component-path": "/workspaces/developer-roadmap/src/components/CustomRoadmap/CreateRoadmap/CreateRoadmapButton", "client:component-export": "CreateRoadmapButton" })} </li>`} </ul> </div> </div>`;
}, "/workspaces/developer-roadmap/src/components/FeaturedItems/FeaturedItems.astro", void 0);

function AIAnnouncement(props) {
  return /* @__PURE__ */ jsxs(
    "a",
    {
      className: "rounded-md border border-dashed border-purple-600 px-3 py-1.5 text-purple-400 transition-colors hover:border-purple-400 hover:text-purple-200",
      href: "/ai",
      children: [
        /* @__PURE__ */ jsx("span", { className: "relative -top-[1px] mr-1 text-xs font-semibold uppercase text-white", children: "New" }),
        " ",
        /* @__PURE__ */ jsx("span", { className: "hidden sm:inline", children: "Generate visual roadmaps with AI" }),
        /* @__PURE__ */ jsx("span", { className: "inline text-sm sm:hidden", children: "AI Roadmap Generator!" })
      ]
    }
  );
}

const $$HeroSection = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="min-h-auto relative min-h-[192px] border-b border-b-[#1e293c] transition-all sm:min-h-[281px]"> <div class="container px-5 py-6 pb-14 text-left transition-opacity duration-300 sm:px-0 sm:py-20 sm:text-center" id="hero-text"> <p class="-mt-4 mb-7 sm:-mt-10 sm:mb-4"> ${renderComponent($$result, "AIAnnouncement", AIAnnouncement, {})} </p> <h1 class="mb-2 bg-gradient-to-b from-amber-50 to-purple-500 bg-clip-text text-2xl font-bold text-transparent sm:mb-4 sm:text-5xl sm:leading-tight">
Developer Roadmaps
</h1> <p class="hidden px-4 text-lg text-gray-400 sm:block"> <span class="font-medium text-gray-400">roadmap.sh</span> is a community effort
      to create roadmaps, guides and other educational content to help guide developers
      in picking up a path and guide their learnings.
</p> <p class="text-md block px-0 text-gray-400 sm:hidden">
Community created roadmaps, guides and articles to help developers grow in
      their career.
</p> </div> ${renderComponent($$result, "FavoriteRoadmaps", null, { "client:only": "react", "client:component-hydration": "only", "client:component-path": "/workspaces/developer-roadmap/src/components/HeroSection/FavoriteRoadmaps", "client:component-export": "FavoriteRoadmaps" })} </div>`;
}, "/workspaces/developer-roadmap/src/components/HeroSection/HeroSection.astro", void 0);

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const roleRoadmaps = await getRoadmapsByTag("role-roadmap");
  const skillRoadmaps = await getRoadmapsByTag("skill-roadmap");
  const bestPractices = await getAllBestPractices();
  const questionGroups = await getAllQuestionGroups();
  const guides = await getAllGuides();
  const questionGuides = (await getAllQuestionGroups()).filter(
    (questionGroup) => questionGroup.frontmatter.authorId
  );
  const videos = await getAllVideos();
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Developer Roadmaps - roadmap.sh", "description": "Community driven roadmaps, articles and guides for developers to grow in their career.", "permalink": "/" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="bg-gradient-to-b from-slate-900 to-black"> ${renderComponent($$result2, "HeroSection", $$HeroSection, {})} ${renderComponent($$result2, "FeaturedItems", $$FeaturedItems, { "heading": "Role based Roadmaps", "featuredItems": roleRoadmaps.filter((roadmapItem) => !roadmapItem.frontmatter.isHidden).map((roadmapItem) => ({
    text: roadmapItem.frontmatter.briefTitle,
    url: `/${roadmapItem.id}`,
    isNew: roadmapItem.frontmatter.isNew,
    isUpcoming: roadmapItem.frontmatter.isUpcoming
  })), "showCreateRoadmap": true })} ${renderComponent($$result2, "FeaturedItems", $$FeaturedItems, { "heading": "Skill based Roadmaps", "featuredItems": skillRoadmaps.filter((roadmapItem) => !roadmapItem.frontmatter.isHidden).map((roadmapItem) => ({
    text: roadmapItem.frontmatter.briefTitle === "Go" ? "Go Roadmap" : roadmapItem.frontmatter.briefTitle,
    url: `/${roadmapItem.id}`,
    isNew: roadmapItem.frontmatter.isNew,
    isUpcoming: roadmapItem.frontmatter.isUpcoming
  })), "showCreateRoadmap": true })} ${renderComponent($$result2, "FeaturedItems", $$FeaturedItems, { "heading": "Best Practices", "featuredItems": bestPractices.map((bestPractice) => ({
    text: bestPractice.frontmatter.briefTitle,
    url: `/best-practices/${bestPractice.id}`,
    isNew: bestPractice.frontmatter.isNew,
    isUpcoming: bestPractice.frontmatter.isUpcoming
  })) })} ${renderComponent($$result2, "FeaturedItems", $$FeaturedItems, { "heading": "Questions", "allowBookmark": false, "featuredItems": questionGroups.map((questionGroup) => ({
    text: questionGroup.frontmatter.briefTitle,
    url: `/questions/${questionGroup.id}`,
    isNew: questionGroup.frontmatter.isNew
  })) })} <div class="grid grid-cols-1 gap-7 bg-gray-50 py-7 sm:gap-16 sm:py-16"> ${renderComponent($$result2, "FeaturedGuides", $$FeaturedGuides, { "heading": "Guides", "guides": guides.slice(0, 7), "questions": questionGuides.slice(0, 7) })} ${renderComponent($$result2, "FeaturedVideos", $$FeaturedVideos, { "heading": "Videos", "videos": videos.slice(0, 7) })} </div> </div> ` })}`;
}, "/workspaces/developer-roadmap/src/pages/index.astro", void 0);

const $$file = "/workspaces/developer-roadmap/src/pages/index.astro";
const $$url = "";

export { $$Index as default, $$file as file, $$url as url };
