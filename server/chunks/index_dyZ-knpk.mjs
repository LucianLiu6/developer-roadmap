/* empty css                             */
import { k as createAstro, l as createComponent, m as renderTemplate, n as maybeRenderHead, p as renderComponent, o as addAttribute } from './astro/server_DJHfVkFr.mjs';
import 'kleur/colors';
import { k as isLoggedIn, S as Spinner, b as httpPatch, m as $$LoginPopup, $ as $$AstroIcon, a as $$BaseLayout } from './BaseLayout_CyQdLUYI.mjs';
import { $ as $$ResourceProgressStats, g as generateArticleSchema, a as $$ShareIcons, T as TopicDetail, b as $$UpcomingForm } from './jsonld-schema_DcAI-jJD.mjs';
import { jsx } from 'react/jsx-runtime';
import { useState, useEffect } from 'react';
import { s as showLoginPopup } from './popup_DWUkHIfQ.mjs';
import { u as useToast } from './use-toast_BupOxZu-.mjs';
import { $ as $$ProgressHelpPopup } from './ProgressHelpPopup_nIya96C8.mjs';
import { $ as $$FrameRenderer } from './resource-progress_VcIZfJs8.mjs';
import { $ as $$MarkdownFile } from './MarkdownFile_CKhC2S16.mjs';
import { g as getOpenGraphImageUrl } from './open-graph_SsQiBkmO.mjs';
import { g as getAllBestPractices } from './best-practice_Cjq4FQpQ.mjs';

const $$Astro$2 = createAstro("https://roadmap.sh/");
const $$BestPracticeHint = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$BestPracticeHint;
  const { bestPracticeId } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="mt-4 sm:mt-7 border-0 sm:border rounded-md mb-0 sm:-mb-[65px]"> ${renderComponent($$result, "ResourceProgressStats", $$ResourceProgressStats, { "resourceId": bestPracticeId, "resourceType": "best-practice" })} </div>`;
}, "/workspaces/developer-roadmap/src/components/BestPracticeHint.astro", void 0);

function FavoriteIcon(props) {
  const { isFavorite } = props;
  if (!isFavorite) {
    return /* @__PURE__ */ jsx(
      "svg",
      {
        width: "8",
        height: "10",
        viewBox: "0 0 8 10",
        fill: "none",
        className: "h-3.5 w-3.5",
        xmlns: "http://www.w3.org/2000/svg",
        children: /* @__PURE__ */ jsx(
          "path",
          {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M5.93682 0.5H2.06282C1.63546 0.500094 1.22423 0.663195 0.912987 0.956045C0.601741 1.2489 0.413919 1.64944 0.387822 2.076L0.00182198 8.461C-0.012178 8.6905 0.0548218 8.9185 0.191822 9.104L0.242322 9.1665C0.575322 9.5485 1.15132 9.6165 1.56582 9.31L3.99982 7.5115L6.43382 9.31C6.58413 9.42115 6.76305 9.48708 6.94954 9.50006C7.13603 9.51303 7.32235 9.4725 7.4866 9.38323C7.65085 9.29397 7.78621 9.15967 7.87677 8.99613C7.96733 8.83258 8.00932 8.64659 7.99782 8.46L7.61232 2.0765C7.58622 1.64981 7.39835 1.24914 7.08701 0.956192C6.77567 0.663248 6.36431 0.500094 5.93682 0.5ZM5.93682 1.25C6.42732 1.25 6.83382 1.632 6.86382 2.122L7.24932 8.506C7.25216 8.55018 7.24229 8.59425 7.22089 8.63301C7.19949 8.67176 7.16745 8.70359 7.12854 8.72472C7.08964 8.74585 7.0455 8.75542 7.00134 8.75228C6.95718 8.74914 6.91484 8.73343 6.87932 8.707L4.27582 6.783C4.19591 6.72397 4.09917 6.69211 3.99982 6.69211C3.90047 6.69211 3.80373 6.72397 3.72382 6.783L1.11982 8.707C1.0843 8.73343 1.04196 8.74914 0.9978 8.75228C0.953639 8.75542 0.909502 8.74585 0.8706 8.72472C0.831697 8.70359 0.799653 8.67176 0.778252 8.63301C0.756851 8.59425 0.746986 8.55018 0.749822 8.506L1.13632 2.122C1.16632 1.632 1.57232 1.25 2.06282 1.25H5.93682Z",
            fill: "currentColor"
          }
        )
      }
    );
  }
  return /* @__PURE__ */ jsx(
    "svg",
    {
      width: "8",
      height: "10",
      viewBox: "0 0 8 10",
      className: "h-3.5 w-3.5",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      children: /* @__PURE__ */ jsx(
        "path",
        {
          fillRule: "evenodd",
          clipRule: "evenodd",
          d: "M5.93682 0.5H2.06282C1.63546 0.500094 1.22423 0.663195 0.912987 0.956045C0.601741 1.2489 0.413919 1.64944 0.387822 2.076L0.00182198 8.461C-0.012178 8.6905 0.0548218 8.9185 0.191822 9.104L0.242322 9.1665C0.575322 9.5485 1.15132 9.6165 1.56582 9.31L3.99982 7.5115L6.43382 9.31C6.58413 9.42115 6.76305 9.48708 6.94954 9.50006C7.13603 9.51303 7.32235 9.4725 7.4866 9.38323C7.65085 9.29397 7.78621 9.15967 7.87677 8.99613C7.96733 8.83258 8.00932 8.64659 7.99782 8.46L7.61232 2.0765C7.58622 1.64981 7.39835 1.24914 7.08701 0.956192C6.77567 0.663248 6.36431 0.500094 5.93682 0.5Z",
          fill: "currentColor"
        }
      )
    }
  );
}

function MarkFavorite({
  resourceId,
  resourceType,
  favorite,
  className
}) {
  const isAuthenticated = isLoggedIn();
  const localStorageKey = `${resourceType}-${resourceId}-favorite`;
  const toast = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [isFavorite, setIsFavorite] = useState(
    isAuthenticated ? favorite ?? localStorage.getItem(localStorageKey) === "1" : false
  );
  async function toggleFavoriteHandler(e) {
    e.preventDefault();
    if (!isLoggedIn()) {
      showLoginPopup();
      return;
    }
    if (isLoading) {
      return;
    }
    setIsLoading(true);
    const { error } = await httpPatch(
      `${{"BASE_URL": "/", "MODE": "production", "DEV": false, "PROD": true, "SSR": true, "SITE": "https://roadmap.sh/", "ASSETS_PREFIX": undefined}.PUBLIC_API_URL}/v1-mark-favorite`,
      {
        resourceType,
        resourceId
      }
    );
    if (error) {
      setIsLoading(false);
      toast.error("Failed to update favorite status");
      return;
    }
    window.dispatchEvent(
      new CustomEvent("mark-favorite", {
        detail: {
          resourceId,
          resourceType,
          isFavorite: !isFavorite
        }
      })
    );
    window.dispatchEvent(new CustomEvent("refresh-favorites", {}));
    setIsLoading(false);
  }
  useEffect(() => {
    const listener = (e) => {
      const {
        resourceId: id,
        resourceType: type,
        isFavorite: fav
      } = e.detail;
      if (id === resourceId && type === resourceType) {
        setIsFavorite(fav);
        localStorage.setItem(localStorageKey, fav ? "1" : "0");
      }
    };
    window.addEventListener("mark-favorite", listener);
    return () => {
      window.removeEventListener("mark-favorite", listener);
    };
  }, []);
  return /* @__PURE__ */ jsx(
    "button",
    {
      "aria-label": isFavorite ? "Remove from favorites" : "Add to favorites",
      onClick: toggleFavoriteHandler,
      tabIndex: -1,
      className: `${isFavorite ? "" : "opacity-30 hover:opacity-100"} ${className || "absolute right-1.5 top-1.5 z-30 focus:outline-0"}`,
      children: isLoading ? /* @__PURE__ */ jsx(Spinner, {}) : /* @__PURE__ */ jsx(FavoriteIcon, { isFavorite })
    }
  );
}

const $$Astro$1 = createAstro("https://roadmap.sh/");
const $$BestPracticeHeader = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$BestPracticeHeader;
  const { title, description, bestPracticeId, isUpcoming = false } = Astro2.props;
  const isBestPracticeReady = !isUpcoming;
  return renderTemplate`${renderComponent($$result, "LoginPopup", $$LoginPopup, {})} ${renderComponent($$result, "ProgressHelpPopup", $$ProgressHelpPopup, {})} ${maybeRenderHead()}<div class="border-b"> <div class="container relative py-5 sm:py-12"> <div class="mb-3 mt-0 sm:mb-6"> <h1 class="mb-0.5 text-2xl font-bold sm:mb-2 sm:text-4xl"> ${title} ${renderComponent($$result, "MarkFavorite", MarkFavorite, { "resourceId": bestPracticeId, "resourceType": "best-practice", "className": "text-gray-500 !opacity-100 hover:text-gray-600 [&>svg]:stroke-[0.4] [&>svg]:stroke-gray-400 hover:[&>svg]:stroke-gray-600 [&>svg]:h-4 [&>svg]:w-4 sm:[&>svg]:h-5 sm:[&>svg]:w-5 ml-1.5 relative focus:outline-0", "client:load": true, "client:component-hydration": "load", "client:component-path": "/workspaces/developer-roadmap/src/components/FeaturedItems/MarkFavorite", "client:component-export": "MarkFavorite" })} </h1> <p class="text-sm text-gray-500 sm:text-lg">${description}</p> </div> <div class="flex justify-between"> <div class="flex gap-1 sm:gap-2"> <a href="/best-practices" class="rounded-md bg-gray-500 px-3 py-1.5 text-xs font-medium text-white hover:bg-gray-600 sm:text-sm" aria-label="Back to All Best Practices">
&larr;<span class="hidden sm:inline">&nbsp;All Best Practices</span> </a> ${isBestPracticeReady && renderTemplate`<button data-guest-required data-popup="login-popup" class="inline-flex hidden items-center justify-center rounded-md bg-yellow-400 px-3 py-1.5 text-xs font-medium hover:bg-yellow-500 sm:text-sm" aria-label="Download Roadmap"> ${renderComponent($$result, "Icon", $$AstroIcon, { "icon": "download" })} <span class="ml-2 hidden sm:inline">Download</span> </button>`} ${isBestPracticeReady && renderTemplate`<a data-auth-required class="inline-flex hidden items-center justify-center rounded-md bg-yellow-400 px-3 py-1.5 text-xs font-medium hover:bg-yellow-500 sm:text-sm" aria-label="Download Roadmap" target="_blank"${addAttribute(`/pdfs/best-practices/${bestPracticeId}.pdf`, "href")}> ${renderComponent($$result, "Icon", $$AstroIcon, { "icon": "download" })} <span class="ml-2 hidden sm:inline">Download</span> </a>`} <button data-guest-required data-popup="login-popup" class="inline-flex hidden items-center justify-center rounded-md bg-yellow-400 px-3 py-1.5 text-xs font-medium hover:bg-yellow-500 sm:text-sm" aria-label="Subscribe for Updates"> ${renderComponent($$result, "Icon", $$AstroIcon, { "icon": "email" })} <span class="ml-2">Subscribe</span> </button> </div> ${isBestPracticeReady && renderTemplate`<a${addAttribute(`https://github.com/kamranahmedse/developer-roadmap/issues/new/choose`, "href")} target="_blank" class="inline-flex items-center justify-center rounded-md bg-gray-500 px-3 py-1.5 text-xs font-medium text-white hover:bg-gray-600 sm:text-sm" aria-label="Suggest Changes"> ${renderComponent($$result, "Icon", $$AstroIcon, { "icon": "comment", "class": "h-3 w-3" })} <span class="ml-2 hidden sm:inline">Suggest Changes</span> <span class="ml-2 inline sm:hidden">Suggest</span> </a>`} </div> ${renderComponent($$result, "BestPracticeHint", $$BestPracticeHint, { "bestPracticeId": bestPracticeId })} </div> </div>`;
}, "/workspaces/developer-roadmap/src/components/BestPracticeHeader.astro", void 0);

const $$Astro = createAstro("https://roadmap.sh/");
async function getStaticPaths() {
  const bestPractices = await getAllBestPractices();
  return bestPractices.map((bestPractice) => ({
    params: { bestPracticeId: bestPractice.id },
    props: {
      bestPractice
    }
  }));
}
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const { bestPracticeId } = Astro2.params;
  const { bestPractice } = Astro2.props;
  const bestPracticeData = bestPractice.frontmatter;
  let jsonLdSchema = [];
  if (bestPracticeData.schema) {
    const bestPracticeSchema = bestPracticeData.schema;
    jsonLdSchema.push(
      generateArticleSchema({
        url: `https://roadmap.sh/best-practices/${bestPracticeId}`,
        headline: bestPracticeSchema.headline,
        description: bestPracticeSchema.description,
        datePublished: bestPracticeSchema.datePublished,
        dateModified: bestPracticeSchema.dateModified,
        imageUrl: bestPracticeSchema.imageUrl
      })
    );
  }
  const ogImageUrl = getOpenGraphImageUrl({
    group: "best-practice",
    resourceId: bestPracticeId
  });
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "permalink": `/best-practices/${bestPracticeId}`, "title": bestPracticeData?.seo?.title, "briefTitle": bestPracticeData?.briefTitle, "ogImageUrl": ogImageUrl, "description": bestPracticeData.seo.description, "keywords": bestPracticeData.seo.keywords, "noIndex": bestPracticeData.isUpcoming, "jsonLd": jsonLdSchema, "resourceId": bestPracticeId, "resourceType": "best-practice" }, { "after-header": ($$result2) => renderTemplate`<link rel="preload" href="/fonts/balsamiq.woff2" as="font" type="font/woff2" crossorigin>`, "default": ($$result2) => renderTemplate`   ${renderComponent($$result2, "BestPracticeHeader", $$BestPracticeHeader, { "title": bestPracticeData.title, "description": bestPracticeData.description, "bestPracticeId": bestPracticeId, "isUpcoming": bestPracticeData.isUpcoming })} ${maybeRenderHead()}<div class="bg-gray-50 py-4 sm:py-12"> ${!bestPracticeData.isUpcoming && bestPracticeData.jsonUrl && renderTemplate`<div class="container relative !max-w-[1000px]"> ${renderComponent($$result2, "ShareIcons", $$ShareIcons, { "description": bestPracticeData.briefDescription, "pageUrl": `https://roadmap.sh/best-practices/${bestPracticeId}` })} ${renderComponent($$result2, "TopicDetail", TopicDetail, { "resourceTitle": bestPracticeData.title, "resourceType": "best-practice", "client:idle": true, "canSubmitContribution": true, "client:component-hydration": "idle", "client:component-path": "/workspaces/developer-roadmap/src/components/TopicDetail/TopicDetail", "client:component-export": "TopicDetail" })} ${renderComponent($$result2, "FrameRenderer", $$FrameRenderer, { "resourceType": "best-practice", "resourceId": bestPracticeId, "dimensions": bestPracticeData.dimensions })} </div>`} ${!bestPracticeData.isUpcoming && !bestPracticeData.jsonUrl && renderTemplate`${renderComponent($$result2, "MarkdownFile", $$MarkdownFile, {}, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "bestPractice.Content", bestPractice.Content, {})} ` })}`} </div> ${renderComponent($$result2, "UserProgressModal", null, { "resourceId": bestPracticeId, "resourceType": "best-practice", "client:only": "react", "client:component-hydration": "only", "client:component-path": "/workspaces/developer-roadmap/src/components/UserProgress/UserProgressModal", "client:component-export": "UserProgressModal" })} ${bestPracticeData.isUpcoming && renderTemplate`${renderComponent($$result2, "UpcomingForm", $$UpcomingForm, {})}`}` })}`;
}, "/workspaces/developer-roadmap/src/pages/best-practices/[bestPracticeId]/index.astro", void 0);

const $$file = "/workspaces/developer-roadmap/src/pages/best-practices/[bestPracticeId]/index.astro";
const $$url = "/best-practices/[bestPracticeId]";

export { $$Index as default, $$file as file, getStaticPaths, $$url as url };
