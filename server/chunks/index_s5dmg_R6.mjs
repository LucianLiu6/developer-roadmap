/* empty css                             */
import { _ as __variableDynamicImportRuntimeHelper } from './dynamic-import-helper_uMTE3ehW.mjs';
import { l as createComponent, m as renderTemplate, n as maybeRenderHead, t as renderSlot, k as createAstro, p as renderComponent, o as addAttribute, u as unescapeHTML, F as Fragment$1 } from './astro/server_DJHfVkFr.mjs';
import 'kleur/colors';
import { E as EditorRoadmap } from './EditorRoadmap_BuFj1sfw.mjs';
import { m as markdownToHtml } from './markdown_7JFDt8o8.mjs';
import 'clsx';
import { $ as $$AstroIcon, u as useOutsideClick, k as isLoggedIn, h as httpGet, f as httpPost, m as $$LoginPopup, a as $$BaseLayout } from './BaseLayout_CyQdLUYI.mjs';
import { $ as $$FrameRenderer } from './resource-progress_VcIZfJs8.mjs';
import { a as getQuestionGroupsByIds } from './question-group_C-CQO0is.mjs';
import { b as getRoadmapsByIds, g as getRoadmapIds } from './roadmap_DU5YuMTS.mjs';
import { Clipboard, Map, GraduationCap, ChevronDown, ChevronUp, Loader2, GitFork } from 'lucide-react';
import { jsxs, jsx, Fragment } from 'react/jsx-runtime';
import { useState, useRef, useEffect } from 'react';
import { $ as $$ResourceProgressStats, g as generateArticleSchema, c as generateFAQSchema, a as $$ShareIcons, T as TopicDetail, b as $$UpcomingForm } from './jsonld-schema_DcAI-jJD.mjs';
import { $ as $$ProgressHelpPopup } from './ProgressHelpPopup_nIya96C8.mjs';
import { u as useToast } from './use-toast_BupOxZu-.mjs';
import { s as showLoginPopup } from './popup_DWUkHIfQ.mjs';
import { S as ShareRoadmapButton } from './ShareRoadmapButton_M9In-tI9.mjs';
import { g as getOpenGraphImageUrl } from './open-graph_SsQiBkmO.mjs';

const $$Answer = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="text-sm sm:text-base leading-relaxed text-left p-2 sm:p-4 text-md text-gray-800 border-t border-t-gray-300 bg-gray-100 rounded-bl-md rounded-br-md [&>p:not(:last-child)]:mb-3 [&>p>a]:underline [&>p>a]:text-blue-700"> ${renderSlot($$result, $$slots["default"])} </div>`;
}, "/workspaces/developer-roadmap/src/components/FAQs/Answer.astro", void 0);

const $$Astro$7 = createAstro("https://roadmap.sh/");
const $$Question = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$Question;
  const { question, isActive = false } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="faq-item bg-white border rounded-md hover:bg-gray-50 border-gray-300"> <button faq-question class="flex flex-row justify-between items-center p-2 sm:p-3 w-full"> <span class="text-sm sm:text-base text-left font-medium">${question}</span> ${renderComponent($$result, "Icon", $$AstroIcon, { "icon": "down", "class": "h-6 hidden sm:block text-gray-400" })} </button> <div${addAttribute(["answer", { hidden: !isActive }], "class:list")} faq-answer> ${renderSlot($$result, $$slots["default"])} </div> </div> `;
}, "/workspaces/developer-roadmap/src/components/FAQs/Question.astro", void 0);

const $$Astro$6 = createAstro("https://roadmap.sh/");
const $$FAQs = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$FAQs;
  const { faqs } = Astro2.props;
  if (faqs.length === 0) {
    return "";
  }
  return renderTemplate`${maybeRenderHead()}<div class="border-t bg-gray-100 mt-8"> <div class="container"> <div class="flex justify-between relative -top-5"> <h2 class="text-sm sm:text-base font-medium py-1 px-3 border bg-white rounded-md">Frequently Asked Questions</h2> </div> <div class="flex flex-col gap-1 pb-14"> ${faqs.map((faq, questionIndex) => renderTemplate`${renderComponent($$result, "Question", $$Question, { "isActive": questionIndex === 0, "question": faq.question }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Answer", $$Answer, {}, { "default": ($$result3) => renderTemplate`${faq.answer.map((answer) => renderTemplate`<p>${unescapeHTML(markdownToHtml(answer))}</p>`)}` })} ` })}`)} </div> </div> </div>`;
}, "/workspaces/developer-roadmap/src/components/FAQs/FAQs.astro", void 0);

const $$Astro$5 = createAstro("https://roadmap.sh/");
const $$RelatedRoadmaps = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$RelatedRoadmaps;
  const { roadmap } = Astro2.props;
  const relatedRoadmaps = roadmap.relatedRoadmaps || [];
  const relatedRoadmapDetails = await getRoadmapsByIds(relatedRoadmaps);
  const relatedQuestions = roadmap.relatedQuestions || [];
  const relatedQuestionDetails = await getQuestionGroupsByIds(relatedQuestions);
  return renderTemplate`${relatedQuestionDetails.length > 0 && renderTemplate`${maybeRenderHead()}<div class="border-t bg-gray-100 pb-3"><div class="container"><div class="relative -top-5 flex justify-between"><span class="text-md flex items-center rounded-md border bg-white px-3 py-1 font-medium">${renderComponent($$result, "Clipboard", Clipboard, { "className": "mr-1.5 text-black", "size": "17px" })}
Test your Knowledge
<span class="ml-2 rounded-md border border-yellow-300 bg-yellow-100 px-1 py-0.5 text-xs uppercase">
New
</span></span><a href="/questions" class="text-md rounded-md border bg-white px-3 py-1 font-medium hover:bg-gray-50"><span class="hidden sm:inline">All Quizzes &rarr;</span><span class="inline sm:hidden">More &rarr;</span></a></div><div class="flex flex-col gap-1 pb-8">${relatedQuestionDetails.map((relatedQuestionGroup) => renderTemplate`<a${addAttribute(`/questions/${relatedQuestionGroup.id}`, "href")} class="flex flex-col gap-0.5 rounded-md border bg-white px-3.5 py-2 hover:bg-gray-50 sm:flex-row sm:gap-0"><span class="inline-block min-w-[150px] font-medium">${relatedQuestionGroup.title}</span><span class="text-gray-500">${relatedQuestionGroup.description}</span></a>`)}</div></div></div>`}${relatedRoadmaps.length && renderTemplate`<div${addAttribute([
    "border-t bg-gray-100",
    {
      "mt-8": !relatedQuestionDetails.length
    }
  ], "class:list")}><div class="container"><div class="relative -top-5 flex justify-between"><span class="text-md flex items-center rounded-md border bg-white px-3 py-1 font-medium">${renderComponent($$result, "Map", Map, { "className": "text-black mr-1.5", "size": "17px" })}
Related <span class="hidden sm:inline">Roadmaps</span></span><a href="/roadmaps" class="text-md rounded-md border bg-white px-3 py-1 font-medium hover:bg-gray-50"><span class="hidden sm:inline">All Roadmaps &rarr;</span><span class="inline sm:hidden">More &rarr;</span></a></div><div class="flex flex-col gap-1 pb-8">${relatedRoadmapDetails.map((relatedRoadmap) => renderTemplate`<a${addAttribute(`/${relatedRoadmap.id}`, "href")} class="flex flex-col gap-0.5 rounded-md border bg-white px-3.5 py-2 hover:bg-gray-50 sm:flex-row sm:gap-0"><span class="inline-block min-w-[150px] font-medium">${relatedRoadmap.frontmatter.briefTitle}</span><span class="text-gray-500">${relatedRoadmap.frontmatter.briefDescription}</span></a>`)}</div></div></div>`}`;
}, "/workspaces/developer-roadmap/src/components/RelatedRoadmaps.astro", void 0);

function RoadmapTitleQuestion(props) {
  const { question, answer } = props;
  const [isAnswerVisible, setIsAnswerVisible] = useState(false);
  const ref = useRef(null);
  useOutsideClick(ref, () => {
    setIsAnswerVisible(false);
  });
  return /* @__PURE__ */ jsxs("div", { className: "relative hidden border-t text-sm font-medium sm:block", children: [
    isAnswerVisible && /* @__PURE__ */ jsx("div", { className: "fixed left-0 right-0 top-0 z-[100] h-full items-center justify-center overflow-y-auto overflow-x-hidden overscroll-contain bg-black/50" }),
    /* @__PURE__ */ jsxs(
      "h2",
      {
        className: "z-50 flex cursor-pointer items-center px-2 py-2.5 text-base font-medium",
        "aria-expanded": isAnswerVisible ? "true" : "false",
        onClick: (e) => {
          e.preventDefault();
          setIsAnswerVisible(!isAnswerVisible);
        },
        children: [
          /* @__PURE__ */ jsxs("span", { className: "flex flex-grow items-center", children: [
            /* @__PURE__ */ jsx(GraduationCap, { className: "mr-2 inline-block h-6 w-6" }),
            question
          ] }),
          /* @__PURE__ */ jsx("span", { className: "flex-shrink-0 text-gray-400", children: /* @__PURE__ */ jsx(ChevronDown, { className: `inline-block h-5 w-5` }) })
        ]
      }
    ),
    /* @__PURE__ */ jsxs(
      "div",
      {
        className: `absolute left-0 right-0 top-0 z-[100] mt-0 rounded-md border bg-white ${isAnswerVisible ? "block" : "hidden"}`,
        ref,
        children: [
          isAnswerVisible && /* @__PURE__ */ jsxs(
            "h2",
            {
              className: "flex cursor-pointer items-center border-b px-[7px] py-[9px] text-base font-medium",
              onClick: () => setIsAnswerVisible(false),
              children: [
                /* @__PURE__ */ jsxs("span", { className: "flex flex-grow items-center", children: [
                  /* @__PURE__ */ jsx(GraduationCap, { className: "mr-2 inline-block h-6 w-6" }),
                  question
                ] }),
                /* @__PURE__ */ jsx("span", { className: "flex-shrink-0 text-gray-400", children: /* @__PURE__ */ jsx(ChevronUp, { className: `inline-block h-5 w-5` }) })
              ]
            }
          ),
          /* @__PURE__ */ jsx(
            "div",
            {
              className: "bg-gray-100 p-3 text-base [&>h2]:mb-2 [&>h2]:mt-5 [&>h2]:text-[17px] [&>h2]:font-medium [&>p:last-child]:mb-0 [&>p>a]:font-semibold [&>p>a]:underline [&>p>a]:underline-offset-2 [&>p]:mb-3 [&>p]:font-normal [&>p]:leading-relaxed [&>p]:text-gray-800",
              dangerouslySetInnerHTML: { __html: markdownToHtml(answer, false) }
            }
          )
        ]
      }
    )
  ] });
}

const $$Astro$4 = createAstro("https://roadmap.sh/");
const $$RoadmapHint = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$RoadmapHint;
  const {
    roadmapId,
    titleQuestion = "",
    titleAnswer = "",
    tnsBannerLink
  } = Astro2.props;
  const hasTitleQuestion = titleQuestion && titleAnswer;
  const hasTnsBanner = !!tnsBannerLink;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute([
    "mb-0 mt-4 rounded-md border-0 bg-white sm:mt-7 sm:border",
    ...hasTnsBanner ? [
      {
        "sm:-mb-[110px]": hasTitleQuestion,
        "sm:-mb-[81px]": !hasTitleQuestion
      }
    ] : [
      {
        "sm:-mb-[88px]": hasTitleQuestion,
        "sm:-mb-[65px]": !hasTitleQuestion
      }
    ]
  ], "class:list")}> ${renderComponent($$result, "ResourceProgressStats", $$ResourceProgressStats, { "resourceId": roadmapId, "resourceType": "roadmap", "hasSecondaryBanner": Boolean(hasTitleQuestion) })} ${hasTitleQuestion && renderTemplate`${renderComponent($$result, "RoadmapTitleQuestion", RoadmapTitleQuestion, { "client:load": true, "question": titleQuestion, "answer": titleAnswer, "client:component-hydration": "load", "client:component-path": "/workspaces/developer-roadmap/src/components/RoadmapTitleQuestion.tsx", "client:component-export": "RoadmapTitleQuestion" })}`} </div>`;
}, "/workspaces/developer-roadmap/src/components/RoadmapHint.astro", void 0);

const $$Astro$3 = createAstro("https://roadmap.sh/");
const $$RoadmapNote = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$RoadmapNote;
  const { text } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="bg-gray-50"> <div class="container pt-1"> <p class="text-sm bg-yellow-100 text-yellow-900 p-2 rounded-md mt-2 sm:mt-5 mb-0 sm:-mb-6 z-10 relative [&>a]:underline">${unescapeHTML(markdownToHtml(text.trim()))}</p> </div> </div>`;
}, "/workspaces/developer-roadmap/src/components/RoadmapNote.astro", void 0);

const $$Astro$2 = createAstro("https://roadmap.sh/");
const $$TopicSearch = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$TopicSearch;
  return renderTemplate` ${maybeRenderHead()}<div class="sm:-mb-[68px] mt-5 sm:mt-6 relative"> <input autofocus type="text" id="search-topic-input" class="border border-gray-300 text-gray-900 text-sm sm:text-md rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full px-2.5 sm:px-3 py-2" placeholder="Search for a topic"> <span class="absolute top-1/2 -translate-y-1/2 right-4 flex items-center text-sm text-gray-500"> ${renderComponent($$result, "Icon", $$AstroIcon, { "icon": "search" })} </span> </div>`;
}, "/workspaces/developer-roadmap/src/components/TopicSearch/TopicSearch.astro", void 0);

function CreateVersion(props) {
  const { roadmapId } = props;
  const toast = useToast();
  const [isLoading, setIsLoading] = useState(true);
  const [isCreating, setIsCreating] = useState(false);
  const [isConfirming, setIsConfirming] = useState(false);
  const [userVersion, setUserVersion] = useState();
  async function loadMyVersion() {
    if (!isLoggedIn()) {
      return;
    }
    setIsLoading(true);
    const { response, error } = await httpGet(
      `${{"BASE_URL": "/", "MODE": "production", "DEV": false, "PROD": true, "SSR": true, "SITE": "https://roadmap.sh/", "ASSETS_PREFIX": undefined}.PUBLIC_API_URL}/v1-get-my-version/${roadmapId}`,
      {}
    );
    if (error || !response) {
      setIsLoading(false);
      return;
    }
    setIsLoading(false);
    setUserVersion(response);
  }
  useEffect(() => {
    loadMyVersion().finally(() => {
      setIsLoading(false);
    });
  }, []);
  async function createVersion() {
    if (isCreating || !roadmapId) {
      return;
    }
    if (!isLoggedIn()) {
      showLoginPopup();
      return;
    }
    setIsCreating(true);
    const { response, error } = await httpPost(
      `${{"BASE_URL": "/", "MODE": "production", "DEV": false, "PROD": true, "SSR": true, "SITE": "https://roadmap.sh/", "ASSETS_PREFIX": undefined}.PUBLIC_API_URL}/v1-create-version/${roadmapId}`,
      {}
    );
    if (error || !response) {
      setIsCreating(false);
      toast.error(error?.message || "Failed to create version");
      return;
    }
    window.location.href = `${{"BASE_URL": "/", "MODE": "production", "DEV": false, "PROD": true, "SSR": true, "SITE": "https://roadmap.sh/", "ASSETS_PREFIX": undefined}.PUBLIC_EDITOR_APP_URL}/${response?.roadmapId}`;
  }
  if (isLoading) {
    return /* @__PURE__ */ jsx("div", { className: "h-[30px] w-[312px] animate-pulse rounded-md bg-gray-300" });
  }
  if (!isLoading && userVersion?._id) {
    return /* @__PURE__ */ jsx("div", { className: "flex items-center", children: /* @__PURE__ */ jsxs(
      "a",
      {
        href: `/r/${userVersion?.slug}`,
        className: "flex items-center rounded-md border border-blue-400 bg-gray-50 px-2.5 py-1 text-xs font-medium text-blue-600 hover:bg-blue-100 disabled:cursor-not-allowed disabled:bg-gray-100 disabled:hover:bg-gray-100 max-sm:hidden sm:text-sm",
        children: [
          /* @__PURE__ */ jsx(Map, { size: "15px", className: "mr-1.5" }),
          "Visit your own version of this Roadmap"
        ]
      }
    ) });
  }
  if (isConfirming) {
    return /* @__PURE__ */ jsxs("p", { className: "flex h-[30px] items-center text-sm text-red-500", children: [
      "Create and edit a custom roadmap from this roadmap?",
      /* @__PURE__ */ jsx(
        "button",
        {
          onClick: () => {
            setIsConfirming(false);
            createVersion().finally(() => null);
          },
          className: "ml-2 font-semibold underline underline-offset-2",
          children: "Yes"
        }
      ),
      /* @__PURE__ */ jsx("span", { className: "text-xs", children: " / " }),
      /* @__PURE__ */ jsx(
        "button",
        {
          className: "font-semibold underline underline-offset-2",
          onClick: () => setIsConfirming(false),
          children: "No"
        }
      )
    ] });
  }
  return /* @__PURE__ */ jsx(
    "button",
    {
      disabled: isCreating,
      className: "flex items-center justify-center rounded-md border border-gray-300 bg-gray-50 px-2.5 py-1 text-xs font-medium text-black hover:bg-gray-200 disabled:cursor-not-allowed disabled:bg-gray-100 disabled:hover:bg-gray-100 max-sm:hidden sm:text-sm",
      onClick: () => {
        if (!isLoggedIn()) {
          showLoginPopup();
          return;
        }
        setIsConfirming(true);
      },
      children: isCreating ? /* @__PURE__ */ jsxs(Fragment, { children: [
        /* @__PURE__ */ jsx(Loader2, { className: "mr-2 h-3 w-3 animate-spin stroke-[2.5]" }),
        "Please wait .."
      ] }) : /* @__PURE__ */ jsxs(Fragment, { children: [
        /* @__PURE__ */ jsx(GitFork, { className: "mr-1.5", size: "16px" }),
        "Create your own version of this roadmap"
      ] })
    }
  );
}

const $$Astro$1 = createAstro("https://roadmap.sh/");
const $$RoadmapHeader = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$RoadmapHeader;
  const {
    title,
    description,
    roadmapId,
    tnsBannerLink,
    isUpcoming = false,
    hasSearch = false,
    note,
    hasTopics = false,
    question,
    isForkable = false
  } = Astro2.props;
  const isRoadmapReady = !isUpcoming;
  const roadmapTitle = roadmapId === "devops" ? "DevOps" : `${roadmapId.charAt(0).toUpperCase()}${roadmapId.slice(1)}`;
  const hasTnsBanner = !!tnsBannerLink;
  return renderTemplate`${renderComponent($$result, "LoginPopup", $$LoginPopup, {})} ${renderComponent($$result, "ProgressHelpPopup", $$ProgressHelpPopup, {})} ${maybeRenderHead()}<div class="relative border-b"> <div${addAttribute([
    "container relative py-5",
    {
      "sm:py-16": hasTnsBanner,
      "sm:py-12": !hasTnsBanner
    }
  ], "class:list")}> <div class="mb-3 mt-0 sm:mb-4"> ${isForkable && renderTemplate`<div class="mb-2"> ${renderComponent($$result, "CreateVersion", CreateVersion, { "client:load": true, "roadmapId": roadmapId, "client:component-hydration": "load", "client:component-path": "/workspaces/developer-roadmap/src/components/CreateVersion/CreateVersion", "client:component-export": "CreateVersion" })} </div>`} <h1 class="mb-0.5 text-2xl font-bold sm:mb-2 sm:text-4xl"> ${title} <span class="relative top-0 sm:-top-1"> ${renderComponent($$result, "MarkFavorite", null, { "resourceId": roadmapId, "resourceType": "roadmap", "className": "relative ml-1.5 text-gray-500 !opacity-100 hover:text-gray-600 focus:outline-0 [&>svg]:h-4 [&>svg]:w-4 [&>svg]:stroke-gray-400 [&>svg]:stroke-[0.4] hover:[&>svg]:stroke-gray-600 sm:[&>svg]:h-4 sm:[&>svg]:w-4", "client:only": "react", "client:component-hydration": "only", "client:component-path": "/workspaces/developer-roadmap/src/components/FeaturedItems/MarkFavorite", "client:component-export": "MarkFavorite" })} </span> </h1> <p class="text-sm text-gray-500 sm:text-lg">${description}</p> </div> <div class="flex justify-between gap-2 sm:gap-0"> <div class="flex gap-1 sm:gap-2"> ${!hasSearch && renderTemplate`${renderComponent($$result, "Fragment", Fragment$1, {}, { "default": ($$result2) => renderTemplate` <a href="/roadmaps" class="rounded-md bg-gray-500 px-3 py-1.5 text-xs font-medium text-white hover:bg-gray-600 sm:text-sm" aria-label="Back to All Roadmaps">
&larr;<span class="hidden sm:inline">&nbsp;All Roadmaps</span> </a> ${renderComponent($$result2, "ShareRoadmapButton", ShareRoadmapButton, { "description": description, "pageUrl": `https://roadmap.sh/${roadmapId}`, "client:idle": true, "client:component-hydration": "idle", "client:component-path": "/workspaces/developer-roadmap/src/components/ShareRoadmapButton", "client:component-export": "ShareRoadmapButton" })} ${isRoadmapReady && renderTemplate`${renderComponent($$result2, "Fragment", Fragment$1, {}, { "default": ($$result3) => renderTemplate` <button data-guest-required data-popup="login-popup" class="inline-flex hidden items-center justify-center rounded-md bg-yellow-400 px-3 py-1.5 text-xs font-medium hover:bg-yellow-500 sm:text-sm" aria-label="Download Roadmap"> ${renderComponent($$result3, "Icon", $$AstroIcon, { "icon": "download" })} <span class="ml-2 hidden sm:inline">Download</span> </button> <a data-auth-required class="inline-flex hidden items-center justify-center rounded-md bg-yellow-400 px-3 py-1.5 text-xs font-medium hover:bg-yellow-500 sm:text-sm" aria-label="Download Roadmap" target="_blank"${addAttribute(`/pdfs/roadmaps/${roadmapId}.pdf`, "href")}> ${renderComponent($$result3, "Icon", $$AstroIcon, { "icon": "download" })} <span class="ml-2 hidden sm:inline">Download</span> </a> ` })}`}` })}`} ${hasSearch && renderTemplate`<a${addAttribute(`/${roadmapId}`, "href")} class="rounded-md bg-gray-500 px-3 py-1.5 text-xs font-medium text-white hover:bg-gray-600 sm:text-sm" aria-label="Back to Visual Roadmap">
&larr;
<span class="inline">&nbsp;Visual Roadmap</span> </a>`} </div> <div class="flex items-center gap-1 sm:gap-2"> ${renderComponent($$result, "TeamVersions", null, { "resourceType": "roadmap", "resourceId": roadmapId, "client:only": "react", "client:component-hydration": "only", "client:component-path": "/workspaces/developer-roadmap/src/components/TeamVersions/TeamVersions", "client:component-export": "TeamVersions" })} ${isRoadmapReady && renderTemplate`<a${addAttribute(`https://github.com/kamranahmedse/developer-roadmap/issues/new/choose`, "href")} target="_blank" class="inline-flex items-center justify-center rounded-md bg-gray-500 px-3 py-1.5 text-xs font-medium text-white hover:bg-gray-600 sm:text-sm" aria-label="Suggest Changes"> ${renderComponent($$result, "Icon", $$AstroIcon, { "icon": "comment", "class": "h-3 w-3" })} <span class="ml-2 hidden sm:inline">Suggest Changes</span> <span class="ml-2 inline sm:hidden">Suggest</span> </a>`} </div> </div> <!-- Desktop: Roadmap Resources - Alert --> ${hasTopics && renderTemplate`${renderComponent($$result, "RoadmapHint", $$RoadmapHint, { "tnsBannerLink": tnsBannerLink, "titleQuestion": question?.title, "titleAnswer": question?.description, "roadmapId": roadmapId })}`} ${hasSearch && renderTemplate`${renderComponent($$result, "TopicSearch", $$TopicSearch, {})}`} </div> ${tnsBannerLink && renderTemplate`<div class="absolute left-0 right-0 top-0 hidden border-b border-b-gray-200 px-2 py-1.5 sm:block"> <p class="py-0.5 text-center text-sm"> <span class="badge mr-1">Partner</span>
Get the latest ${roadmapTitle} news from our sister site${" "} <a${addAttribute(tnsBannerLink, "href")} target="_blank" class="font-medium underline">
TheNewStack.io
</a> </p> </div>`} </div> ${note && renderTemplate`${renderComponent($$result, "RoadmapNote", $$RoadmapNote, { "text": note })}`}`;
}, "/workspaces/developer-roadmap/src/components/RoadmapHeader.astro", void 0);

const $$Astro = createAstro("https://roadmap.sh/");
async function getStaticPaths() {
  const roadmapIds = await getRoadmapIds();
  return roadmapIds.map((roadmapId) => ({
    params: { roadmapId }
  }));
}
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const { roadmapId } = Astro2.params;
  const roadmapFile = await __variableDynamicImportRuntimeHelper((/* #__PURE__ */ Object.assign({"../../data/roadmaps/ai-data-scientist/ai-data-scientist.md": () => import('./ai-data-scientist_DIN_LXkI.mjs').then(n => n._),"../../data/roadmaps/android/android.md": () => import('./android_DT_qCno5.mjs').then(n => n._),"../../data/roadmaps/angular/angular.md": () => import('./angular_EtFd54Am.mjs').then(n => n._),"../../data/roadmaps/api-design/api-design.md": () => import('./api-design_D82w_E99.mjs').then(n => n._),"../../data/roadmaps/aspnet-core/aspnet-core.md": () => import('./aspnet-core_dB_-hH5i.mjs').then(n => n._),"../../data/roadmaps/aws/aws.md": () => import('./aws_BYL-LS-4.mjs').then(n => n._),"../../data/roadmaps/backend/backend.md": () => import('./backend_fNGMZHkm.mjs').then(n => n._),"../../data/roadmaps/blockchain/blockchain.md": () => import('./blockchain_BsCPQA1O.mjs').then(n => n._),"../../data/roadmaps/code-review/code-review.md": () => import('./code-review_D0DVG_nt.mjs').then(n => n._),"../../data/roadmaps/computer-science/computer-science.md": () => import('./computer-science_CZYvQ108.mjs').then(n => n._),"../../data/roadmaps/cpp/cpp.md": () => import('./cpp_B6xuQ91g.mjs').then(n => n._),"../../data/roadmaps/cyber-security/cyber-security.md": () => import('./cyber-security_Cv6quha7.mjs').then(n => n._),"../../data/roadmaps/data-analyst/data-analyst.md": () => import('./data-analyst_u2Pa9Kem.mjs').then(n => n._),"../../data/roadmaps/datastructures-and-algorithms/datastructures-and-algorithms.md": () => import('./datastructures-and-algorithms_Dg326Y1_.mjs').then(n => n._),"../../data/roadmaps/design-system/design-system.md": () => import('./design-system_DFiNUt0Y.mjs').then(n => n._),"../../data/roadmaps/devops/devops.md": () => import('./devops_BNuTjQ6q.mjs').then(n => n._),"../../data/roadmaps/docker/docker.md": () => import('./docker_DwJ-iOt5.mjs').then(n => n._),"../../data/roadmaps/flutter/flutter.md": () => import('./flutter_Dssdu1Pe.mjs').then(n => n._),"../../data/roadmaps/frontend/frontend.md": () => import('./frontend_PlaVbiI0.mjs').then(n => n._),"../../data/roadmaps/full-stack/full-stack.md": () => import('./full-stack_BsQrSaro.mjs').then(n => n._),"../../data/roadmaps/game-developer/game-developer.md": () => import('./game-developer_DAj5k2ra.mjs').then(n => n._),"../../data/roadmaps/golang/golang.md": () => import('./golang_CuCbRRhE.mjs').then(n => n._),"../../data/roadmaps/graphql/graphql.md": () => import('./graphql_CNHi9-UB.mjs').then(n => n._),"../../data/roadmaps/ios/ios.md": () => import('./ios_pT7D1Fmy.mjs').then(n => n._),"../../data/roadmaps/java/java.md": () => import('./java_B8Dpee13.mjs').then(n => n._),"../../data/roadmaps/javascript/javascript.md": () => import('./javascript_Blzw8-Gj.mjs').then(n => n._),"../../data/roadmaps/kubernetes/kubernetes.md": () => import('./kubernetes_ChWsw9w5.mjs').then(n => n._),"../../data/roadmaps/linux/linux.md": () => import('./linux_dVsXxONA.mjs').then(n => n._),"../../data/roadmaps/mlops/mlops.md": () => import('./mlops_CF9uAsW_.mjs').then(n => n._),"../../data/roadmaps/mongodb/mongodb.md": () => import('./mongodb_P8hf_EPd.mjs').then(n => n._),"../../data/roadmaps/nodejs/nodejs.md": () => import('./nodejs_C-eG-yWA.mjs').then(n => n._),"../../data/roadmaps/postgresql-dba/postgresql-dba.md": () => import('./postgresql-dba_ByqYi8Kp.mjs').then(n => n._),"../../data/roadmaps/product-manager/product-manager.md": () => import('./product-manager_C7OryMed.mjs').then(n => n._),"../../data/roadmaps/prompt-engineering/prompt-engineering.md": () => import('./prompt-engineering_1Qylt9hI.mjs').then(n => n._),"../../data/roadmaps/python/python.md": () => import('./python_CD_8-l1d.mjs').then(n => n._),"../../data/roadmaps/qa/qa.md": () => import('./qa_DGE1JY0Y.mjs').then(n => n._),"../../data/roadmaps/react-native/react-native.md": () => import('./react-native_Bs4qMcAa.mjs').then(n => n._),"../../data/roadmaps/react/react.md": () => import('./react_B8qrHTW6.mjs').then(n => n._),"../../data/roadmaps/rust/rust.md": () => import('./rust_BSan8EYx.mjs').then(n => n._),"../../data/roadmaps/server-side-game-developer/server-side-game-developer.md": () => import('./server-side-game-developer_3Q4rxw-L.mjs').then(n => n._),"../../data/roadmaps/software-architect/software-architect.md": () => import('./software-architect_DiMJPRVH.mjs').then(n => n._),"../../data/roadmaps/software-design-architecture/software-design-architecture.md": () => import('./software-design-architecture_CIDmWDPi.mjs').then(n => n._),"../../data/roadmaps/spring-boot/spring-boot.md": () => import('./spring-boot_CP1iSdMG.mjs').then(n => n._),"../../data/roadmaps/sql/sql.md": () => import('./sql_PXD1W95K.mjs').then(n => n._),"../../data/roadmaps/system-design/system-design.md": () => import('./system-design_DBEK4GV4.mjs').then(n => n._),"../../data/roadmaps/technical-writer/technical-writer.md": () => import('./technical-writer_B0fXEzIm.mjs').then(n => n._),"../../data/roadmaps/terraform/terraform.md": () => import('./terraform_CvbBvtWB.mjs').then(n => n._),"../../data/roadmaps/typescript/typescript.md": () => import('./typescript_DG1gJviy.mjs').then(n => n._),"../../data/roadmaps/ux-design/ux-design.md": () => import('./ux-design_C72hnxEE.mjs').then(n => n._),"../../data/roadmaps/vue/vue.md": () => import('./vue_DNFwnC_w.mjs').then(n => n._)})), `../../data/roadmaps/${roadmapId}/${roadmapId}.md`, 6);
  const { faqs: roadmapFAQs = [] } = await __variableDynamicImportRuntimeHelper((/* #__PURE__ */ Object.assign({"../../data/roadmaps/ai-data-scientist/faqs.astro": () => import('./faqs_pChN-Mg8.mjs'),"../../data/roadmaps/android/faqs.astro": () => import('./faqs_CyqNl8-h.mjs'),"../../data/roadmaps/angular/faqs.astro": () => import('./faqs_D8mU_XO6.mjs'),"../../data/roadmaps/api-design/faqs.astro": () => import('./faqs_CewgP29i.mjs'),"../../data/roadmaps/aspnet-core/faqs.astro": () => import('./faqs_B7iYbOEQ.mjs'),"../../data/roadmaps/aws/faqs.astro": () => import('./faqs_2viFe1AH.mjs'),"../../data/roadmaps/backend/faqs.astro": () => import('./faqs_kGW-nVSI.mjs'),"../../data/roadmaps/blockchain/faqs.astro": () => import('./faqs_dxI9F9oT.mjs'),"../../data/roadmaps/code-review/faqs.astro": () => import('./faqs_DvdbtU9T.mjs'),"../../data/roadmaps/computer-science/faqs.astro": () => import('./faqs_CfV9dxjM.mjs'),"../../data/roadmaps/cpp/faqs.astro": () => import('./faqs_CJ8PDnRu.mjs'),"../../data/roadmaps/cyber-security/faqs.astro": () => import('./faqs_DJlNP2lR.mjs'),"../../data/roadmaps/data-analyst/faqs.astro": () => import('./faqs_CQsQP2O2.mjs'),"../../data/roadmaps/datastructures-and-algorithms/faqs.astro": () => import('./faqs_ByoDR5_E.mjs'),"../../data/roadmaps/design-system/faqs.astro": () => import('./faqs_CkhT8nSV.mjs'),"../../data/roadmaps/devops/faqs.astro": () => import('./faqs_Bozp7f5_.mjs'),"../../data/roadmaps/docker/faqs.astro": () => import('./faqs_DrF14ODA.mjs'),"../../data/roadmaps/flutter/faqs.astro": () => import('./faqs_CEs2IxQo.mjs'),"../../data/roadmaps/frontend/faqs.astro": () => import('./faqs_J5ZOb5p6.mjs'),"../../data/roadmaps/full-stack/faqs.astro": () => import('./faqs_BO9K_KO8.mjs'),"../../data/roadmaps/game-developer/faqs.astro": () => import('./faqs_BYYeVwDC.mjs'),"../../data/roadmaps/golang/faqs.astro": () => import('./faqs_EXfzqsnT.mjs'),"../../data/roadmaps/graphql/faqs.astro": () => import('./faqs_D-q-Jh0S.mjs'),"../../data/roadmaps/ios/faqs.astro": () => import('./faqs_dt9jn-fR.mjs'),"../../data/roadmaps/java/faqs.astro": () => import('./faqs_C3Yy0yjc.mjs'),"../../data/roadmaps/javascript/faqs.astro": () => import('./faqs_CLQYS70b.mjs'),"../../data/roadmaps/kubernetes/faqs.astro": () => import('./faqs_Cs8t1FNH.mjs'),"../../data/roadmaps/linux/faqs.astro": () => import('./faqs_aY3FwNK8.mjs'),"../../data/roadmaps/mlops/faqs.astro": () => import('./faqs_CefXvbPA.mjs'),"../../data/roadmaps/mongodb/faqs.astro": () => import('./faqs_l4Md0TYQ.mjs'),"../../data/roadmaps/nodejs/faqs.astro": () => import('./faqs_DG1lgWci.mjs'),"../../data/roadmaps/postgresql-dba/faqs.astro": () => import('./faqs_CG6aldUK.mjs'),"../../data/roadmaps/product-manager/faqs.astro": () => import('./faqs_-jfV_s7m.mjs'),"../../data/roadmaps/prompt-engineering/faqs.astro": () => import('./faqs_DdKIgmj2.mjs'),"../../data/roadmaps/python/faqs.astro": () => import('./faqs_BoL_vn1t.mjs'),"../../data/roadmaps/qa/faqs.astro": () => import('./faqs_C4M56Sji.mjs'),"../../data/roadmaps/react-native/faqs.astro": () => import('./faqs_CgPWdPtH.mjs'),"../../data/roadmaps/react/faqs.astro": () => import('./faqs_Bgn0OeOI.mjs'),"../../data/roadmaps/rust/faqs.astro": () => import('./faqs_DY5alMNZ.mjs'),"../../data/roadmaps/server-side-game-developer/faqs.astro": () => import('./faqs_DfRIxOCy.mjs'),"../../data/roadmaps/software-architect/faqs.astro": () => import('./faqs_DOibPnja.mjs'),"../../data/roadmaps/software-design-architecture/faqs.astro": () => import('./faqs_DuJV71c0.mjs'),"../../data/roadmaps/spring-boot/faqs.astro": () => import('./faqs_DQtVtWc6.mjs'),"../../data/roadmaps/sql/faqs.astro": () => import('./faqs_B0ILWeRR.mjs'),"../../data/roadmaps/system-design/faqs.astro": () => import('./faqs_SZCS5-yV.mjs'),"../../data/roadmaps/technical-writer/faqs.astro": () => import('./faqs_DjhZuJLB.mjs'),"../../data/roadmaps/terraform/faqs.astro": () => import('./faqs_BNY8CTt5.mjs'),"../../data/roadmaps/typescript/faqs.astro": () => import('./faqs_DsgjGVJD.mjs'),"../../data/roadmaps/ux-design/faqs.astro": () => import('./faqs_FtFwY-j9.mjs'),"../../data/roadmaps/vue/faqs.astro": () => import('./faqs_DSw-FBOp.mjs')})), `../../data/roadmaps/${roadmapId}/faqs.astro`, 6);
  const roadmapData = roadmapFile.frontmatter;
  let jsonLdSchema = [];
  if (roadmapData.schema) {
    const roadmapSchema = roadmapData.schema;
    jsonLdSchema.push(
      generateArticleSchema({
        url: `https://roadmap.sh/${roadmapId}`,
        headline: roadmapSchema.headline,
        description: roadmapSchema.description,
        datePublished: roadmapSchema.datePublished,
        dateModified: roadmapSchema.dateModified,
        imageUrl: roadmapSchema.imageUrl
      })
    );
  }
  if (roadmapFAQs.length) {
    jsonLdSchema.push(generateFAQSchema(roadmapFAQs));
  }
  const ogImageUrl = roadmapData?.seo?.ogImageUrl || getOpenGraphImageUrl({
    group: "roadmap",
    resourceId: roadmapId
  });
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "permalink": `/${roadmapId}`, "title": roadmapData?.seo?.title, "briefTitle": roadmapData.briefTitle, "ogImageUrl": ogImageUrl, "description": roadmapData.seo.description, "keywords": roadmapData.seo.keywords, "noIndex": roadmapData.isUpcoming, "jsonLd": jsonLdSchema, "resourceId": roadmapId, "resourceType": "roadmap" }, { "after-header": ($$result2) => renderTemplate`<link rel="preload" href="/fonts/balsamiq.woff2" as="font" type="font/woff2" crossorigin>`, "default": ($$result2) => renderTemplate`   ${renderComponent($$result2, "RoadmapHeader", $$RoadmapHeader, { "title": roadmapData.title, "description": roadmapData.description, "note": roadmapData.note, "tnsBannerLink": roadmapData.tnsBannerLink, "roadmapId": roadmapId, "hasTopics": roadmapData.hasTopics, "isUpcoming": roadmapData.isUpcoming, "isForkable": roadmapData.isForkable, "question": roadmapData.question })} ${maybeRenderHead()}<div class="bg-gray-50 pt-4 sm:pt-12"> ${!roadmapData.isUpcoming && renderTemplate`<div class="container relative !max-w-[1000px]"> ${renderComponent($$result2, "ShareIcons", $$ShareIcons, { "description": roadmapData.briefDescription, "pageUrl": `https://roadmap.sh/${roadmapId}` })} ${renderComponent($$result2, "TopicDetail", TopicDetail, { "resourceTitle": roadmapData.title, "resourceType": "roadmap", "client:idle": true, "canSubmitContribution": true, "client:component-hydration": "idle", "client:component-path": "/workspaces/developer-roadmap/src/components/TopicDetail/TopicDetail", "client:component-export": "TopicDetail" })} ${roadmapData?.renderer === "editor" ? renderTemplate`${renderComponent($$result2, "EditorRoadmap", EditorRoadmap, { "resourceId": roadmapId, "resourceType": "roadmap", "dimensions": roadmapData.dimensions, "client:load": true, "client:component-hydration": "load", "client:component-path": "/workspaces/developer-roadmap/src/components/EditorRoadmap/EditorRoadmap", "client:component-export": "EditorRoadmap" })}` : renderTemplate`${renderComponent($$result2, "FrameRenderer", $$FrameRenderer, { "resourceType": "roadmap", "resourceId": roadmapId, "dimensions": roadmapData.dimensions })}`} </div>`} ${roadmapData.isUpcoming && renderTemplate`${renderComponent($$result2, "UpcomingForm", $$UpcomingForm, {})}`} ${renderComponent($$result2, "UserProgressModal", null, { "resourceId": roadmapId, "resourceType": "roadmap", "renderer": roadmapData?.renderer, "client:only": "react", "client:component-hydration": "only", "client:component-path": "/workspaces/developer-roadmap/src/components/UserProgress/UserProgressModal", "client:component-export": "UserProgressModal" })} ${roadmapId === "docker" && renderTemplate`<p class="mb-8 px-5 text-center text-xs text-gray-400 sm:mb-12">
Roadmap owner Insight Partners is an investor in Docker.
</p>`} ${renderComponent($$result2, "FAQs", $$FAQs, { "faqs": roadmapFAQs })} ${renderComponent($$result2, "RelatedRoadmaps", $$RelatedRoadmaps, { "roadmap": roadmapData })} </div> ` })}`;
}, "/workspaces/developer-roadmap/src/pages/[roadmapId]/index.astro", void 0);

const $$file = "/workspaces/developer-roadmap/src/pages/[roadmapId]/index.astro";
const $$url = "/[roadmapId]";

export { $$Index as default, $$file as file, getStaticPaths, $$url as url };
