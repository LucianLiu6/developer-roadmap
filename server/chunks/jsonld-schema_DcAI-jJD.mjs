import { k as createAstro, l as createComponent, m as renderTemplate, n as maybeRenderHead, o as addAttribute, p as renderComponent } from './astro/server_DJHfVkFr.mjs';
import 'kleur/colors';
import { $ as $$AstroIcon, u as useOutsideClick, k as isLoggedIn, g as useKeydown, S as Spinner, G as GitHubIcon, c as cn, o as GoogleIcon, p as pageProgressMessage, q as sponsorHidden, h as httpGet } from './BaseLayout_CyQdLUYI.mjs';
import { jsxs, jsx, Fragment } from 'react/jsx-runtime';
import { useEffect, useState, useRef, useMemo } from 'react';
import { g as getTopicStatus, u as updateResourceProgress, r as renderTopicProgress, a as refreshProgressCounters, i as isTopicDone } from './resource-progress_VcIZfJs8.mjs';
import { s as showLoginPopup } from './popup_DWUkHIfQ.mjs';
import { u as useToast } from './use-toast_BupOxZu-.mjs';
import { ChevronDown, X, FileText, HeartHandshake, Ban } from 'lucide-react';
import { s as sanitizeMarkdown, m as markdownToHtml } from './markdown_7JFDt8o8.mjs';
import { g as getUrlParams, p as parseUrl } from './browser_DmlLShyb.mjs';
import { r as resourceTitleFromId } from './roadmap_DU5YuMTS.mjs';

const $$Astro$2 = createAstro("https://roadmap.sh/");
const $$ResourceProgressStats = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$ResourceProgressStats;
  const { hasSecondaryBanner = false, resourceId, resourceType } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div data-progress-nums-container${addAttribute([
    "hidden sm:flex justify-between px-2 bg-white items-center py-1.5 relative striped-loader bg-white",
    {
      "rounded-tl-md rounded-tr-md": hasSecondaryBanner,
      "rounded-md": !hasSecondaryBanner
    }
  ], "class:list")}> <p class="flex text-sm opacity-0 transition-opacity duration-300" data-progress-nums> <span class="mr-2.5 rounded-sm bg-yellow-200 px-1 py-0.5 text-xs font-medium uppercase text-yellow-900"> <span data-progress-percentage>0</span>% Done
</span> <span class="itesm-center hidden md:flex"> <span><span data-progress-done>0</span> completed</span><span class="mx-1.5 text-gray-400">&middot;</span> <span><span data-progress-learning>0</span> in progress</span><span class="mx-1.5 text-gray-400">&middot;</span> <span><span data-progress-skipped>0</span> skipped</span><span class="mx-1.5 text-gray-400">&middot;</span> <span><span data-progress-total>0</span> Total</span> </span> <span class="md:hidden"> <span data-progress-done>0</span> of <span data-progress-total>0</span> Done
</span> </p> <div class="flex items-center gap-3 opacity-0 transition-opacity duration-300" data-progress-nums> ${renderComponent($$result, "ProgressShareButton", null, { "resourceId": resourceId, "resourceType": resourceType, "client:only": "react", "client:component-hydration": "only", "client:component-path": "/workspaces/developer-roadmap/src/components/UserProgress/ProgressShareButton", "client:component-export": "ProgressShareButton" })} <button data-popup="progress-help" class="flex items-center gap-1 text-sm font-medium text-gray-500 opacity-0 transition-opacity hover:text-black" data-progress-nums> ${renderComponent($$result, "AstroIcon", $$AstroIcon, { "icon": "question" })}
Track Progress
</button> </div> </div> <div data-progress-nums-container class="striped-loader relative -mb-2 flex items-center justify-between rounded-md border bg-white px-2 py-1.5 text-sm text-gray-700 sm:hidden"> <span data-progress-nums class="text-gray-500 opacity-0 transition-opacity duration-300"> <span data-progress-done>0</span> of <span data-progress-total>0</span> Done
</span> <div class="flex items-center gap-2 opacity-0 transition-opacity duration-300" data-progress-nums> ${renderComponent($$result, "ProgressShareButton", null, { "resourceId": resourceId, "resourceType": resourceType, "client:only": "react", "client:component-hydration": "only", "client:component-path": "/workspaces/developer-roadmap/src/components/UserProgress/ProgressShareButton", "client:component-export": "ProgressShareButton" })} </div> </div>`;
}, "/workspaces/developer-roadmap/src/components/ResourceProgressStats.astro", void 0);

const $$Astro$1 = createAstro("https://roadmap.sh/");
const $$ShareIcons = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$ShareIcons;
  const { pageUrl, description } = Astro2.props;
  const twitterUrl = `https://twitter.com/intent/tweet?text=${description}&url=${pageUrl}`;
  const fbUrl = `https://www.facebook.com/sharer/sharer.php?quote=${description}&u=${pageUrl}`;
  const hnUrl = `https://news.ycombinator.com/submitlink?t=${description}&u=${pageUrl}`;
  const redditUrl = `https://www.reddit.com/submit?title=${description}&url=${pageUrl}`;
  return renderTemplate`${maybeRenderHead()}<div class="absolute left-[-18px] top-[110px] h-full hidden" id="page-share-icons"> <div class="flex sticky top-[100px] flex-col gap-1.5 items-center"> <a${addAttribute(twitterUrl, "href")} target="_blank" class="text-gray-500 hover:text-gray-700 mb-0.5"> ${renderComponent($$result, "Icon", $$AstroIcon, { "icon": "twitter" })} </a> <a${addAttribute(fbUrl, "href")} target="_blank" class="text-gray-500 hover:text-gray-700"> ${renderComponent($$result, "Icon", $$AstroIcon, { "icon": "facebook" })} </a> <a${addAttribute(hnUrl, "href")} target="_blank" class="text-gray-500 hover:text-gray-700"> ${renderComponent($$result, "Icon", $$AstroIcon, { "icon": "hackernews" })} </a> <a${addAttribute(redditUrl, "href")} target="_blank" class="text-gray-500 hover:text-gray-700"> ${renderComponent($$result, "Icon", $$AstroIcon, { "icon": "reddit" })} </a> </div> </div> `;
}, "/workspaces/developer-roadmap/src/components/ShareIcons/ShareIcons.astro", void 0);

function useLoadTopic(callback) {
  useEffect(() => {
    function handleTopicClick(e) {
      const {
        resourceType,
        resourceId,
        topicId,
        isCustomResource = false
      } = e.detail;
      callback({
        resourceType,
        resourceId,
        topicId,
        isCustomResource
      });
    }
    window.addEventListener(`roadmap.topic.click`, handleTopicClick);
    window.addEventListener(`best-practice.topic.click`, handleTopicClick);
    window.addEventListener(`roadmap.node.click`, handleTopicClick);
    return () => {
      window.removeEventListener(`roadmap.topic.click`, handleTopicClick);
      window.removeEventListener(`best-practice.topic.click`, handleTopicClick);
      window.removeEventListener(`roadmap.node.click`, handleTopicClick);
    };
  }, []);
}

function useToggleTopic(callback) {
  useEffect(() => {
    function handleToggleTopic(e) {
      const { resourceType, resourceId, topicId } = e.detail;
      callback({
        resourceType,
        resourceId,
        topicId
      });
    }
    window.addEventListener(`roadmap.topic.toggle`, handleToggleTopic);
    window.addEventListener(`best-practice.topic.toggle`, handleToggleTopic);
    return () => {
      window.removeEventListener(
        `best-practice.topic.toggle`,
        handleToggleTopic
      );
    };
  }, []);
}

const statusColors = {
  done: "bg-green-500",
  learning: "bg-yellow-500",
  pending: "bg-gray-300",
  skipped: "bg-black",
  removed: ""
};
function TopicProgressButton(props) {
  const { topicId, resourceId, resourceType, onClose } = props;
  const toast = useToast();
  const [isUpdatingProgress, setIsUpdatingProgress] = useState(true);
  const [progress, setProgress] = useState("pending");
  const [showChangeStatus, setShowChangeStatus] = useState(false);
  const changeStatusRef = useRef(null);
  useOutsideClick(changeStatusRef, () => {
    setShowChangeStatus(false);
  });
  const isGuest = useMemo(() => !isLoggedIn(), []);
  useEffect(() => {
    if (!topicId || !resourceId || !resourceType) {
      return;
    }
    setIsUpdatingProgress(true);
    getTopicStatus({ topicId, resourceId, resourceType }).then((status) => {
      setIsUpdatingProgress(false);
      setProgress(status);
    }).catch(console.error);
  }, [topicId, resourceId, resourceType]);
  useKeydown(
    "d",
    () => {
      if (progress === "done") {
        onClose();
        return;
      }
      handleUpdateResourceProgress("done");
    },
    [progress]
  );
  useKeydown(
    "l",
    () => {
      if (progress === "learning") {
        return;
      }
      handleUpdateResourceProgress("learning");
    },
    [progress]
  );
  useKeydown(
    "s",
    () => {
      if (progress === "skipped") {
        onClose();
        return;
      }
      handleUpdateResourceProgress("skipped");
    },
    [progress]
  );
  useKeydown(
    "r",
    () => {
      console.log(progress);
      if (progress === "pending") {
        onClose();
        return;
      }
      handleUpdateResourceProgress("pending");
    },
    [progress]
  );
  const handleUpdateResourceProgress = (progress2) => {
    if (isGuest) {
      onClose();
      showLoginPopup();
      return;
    }
    setIsUpdatingProgress(true);
    updateResourceProgress(
      {
        topicId,
        resourceId,
        resourceType
      },
      progress2
    ).then(() => {
      setProgress(progress2);
      if (progress2 !== "learning") {
        onClose();
      }
      renderTopicProgress(topicId, progress2);
      refreshProgressCounters();
    }).catch((err) => {
      toast.error(err.message || "Error updating progress");
      console.error(err);
    }).finally(() => {
      setIsUpdatingProgress(false);
    });
  };
  const allowMarkingSkipped = ["pending", "learning", "done"].includes(
    progress
  );
  const allowMarkingDone = ["skipped", "pending", "learning"].includes(
    progress
  );
  const allowMarkingLearning = ["done", "skipped", "pending"].includes(
    progress
  );
  const allowMarkingPending = ["skipped", "done", "learning"].includes(
    progress
  );
  if (isUpdatingProgress) {
    return /* @__PURE__ */ jsxs("button", { className: "inline-flex cursor-default items-center rounded-md border border-gray-300 bg-white p-1 px-2 text-sm text-black", children: [
      /* @__PURE__ */ jsx(Spinner, { className: "h-4 w-4" }),
      /* @__PURE__ */ jsx("span", { className: "ml-2", children: "Updating Status.." })
    ] });
  }
  return /* @__PURE__ */ jsxs("div", { className: "relative inline-flex rounded-md border border-gray-300", children: [
    /* @__PURE__ */ jsxs("span", { className: "inline-flex cursor-default items-center  p-1 px-2 text-sm text-black", children: [
      /* @__PURE__ */ jsx("span", { className: "flex h-2 w-2", children: /* @__PURE__ */ jsx(
        "span",
        {
          className: `relative inline-flex h-2 w-2 rounded-full ${statusColors[progress]}`
        }
      ) }),
      /* @__PURE__ */ jsx("span", { className: "ml-2 capitalize", children: progress === "learning" ? "In Progress" : progress })
    ] }),
    /* @__PURE__ */ jsxs(
      "button",
      {
        className: "inline-flex cursor-pointer items-center rounded-br-md rounded-tr-md border-l border-l-gray-300 bg-gray-100 p-1 px-2 text-sm text-black hover:bg-gray-200",
        onClick: () => setShowChangeStatus(true),
        children: [
          /* @__PURE__ */ jsx("span", { className: "mr-0.5", children: "Update Status" }),
          /* @__PURE__ */ jsx(ChevronDown, { className: "h-4 w-4" })
        ]
      }
    ),
    showChangeStatus && /* @__PURE__ */ jsxs(
      "div",
      {
        className: "absolute right-0 top-full mt-1 flex min-w-[160px] flex-col divide-y rounded-md border border-gray-200 bg-white shadow-md [&>button:first-child]:rounded-t-md [&>button:last-child]:rounded-b-md",
        ref: changeStatusRef,
        children: [
          allowMarkingDone && /* @__PURE__ */ jsxs(
            "button",
            {
              className: "inline-flex justify-between px-3 py-1.5 text-left text-sm text-gray-800 hover:bg-gray-100",
              onClick: () => handleUpdateResourceProgress("done"),
              children: [
                /* @__PURE__ */ jsxs("span", { children: [
                  /* @__PURE__ */ jsx(
                    "span",
                    {
                      className: `mr-2 inline-block h-2 w-2 rounded-full ${statusColors["done"]}`
                    }
                  ),
                  "Done"
                ] }),
                /* @__PURE__ */ jsx("span", { className: "text-xs text-gray-500", children: "D" })
              ]
            }
          ),
          allowMarkingLearning && /* @__PURE__ */ jsxs(
            "button",
            {
              className: "inline-flex justify-between px-3 py-1.5 text-left text-sm text-gray-800 hover:bg-gray-100",
              onClick: () => handleUpdateResourceProgress("learning"),
              children: [
                /* @__PURE__ */ jsxs("span", { children: [
                  /* @__PURE__ */ jsx(
                    "span",
                    {
                      className: `mr-2 inline-block h-2 w-2 rounded-full ${statusColors["learning"]}`
                    }
                  ),
                  "In Progress"
                ] }),
                /* @__PURE__ */ jsx("span", { className: "text-xs text-gray-500", children: "L" })
              ]
            }
          ),
          allowMarkingPending && /* @__PURE__ */ jsxs(
            "button",
            {
              className: "inline-flex justify-between px-3 py-1.5 text-left text-sm text-gray-800 hover:bg-gray-100",
              onClick: () => handleUpdateResourceProgress("pending"),
              children: [
                /* @__PURE__ */ jsxs("span", { children: [
                  /* @__PURE__ */ jsx(
                    "span",
                    {
                      className: `mr-2 inline-block h-2 w-2 rounded-full ${statusColors["pending"]}`
                    }
                  ),
                  "Reset"
                ] }),
                /* @__PURE__ */ jsx("span", { className: "text-xs text-gray-500", children: "R" })
              ]
            }
          ),
          allowMarkingSkipped && /* @__PURE__ */ jsxs(
            "button",
            {
              className: "inline-flex justify-between px-3 py-1.5 text-left text-sm text-gray-800 hover:bg-gray-100",
              onClick: () => handleUpdateResourceProgress("skipped"),
              children: [
                /* @__PURE__ */ jsxs("span", { children: [
                  /* @__PURE__ */ jsx(
                    "span",
                    {
                      className: `mr-2 inline-block h-2 w-2 rounded-full ${statusColors["skipped"]}`
                    }
                  ),
                  "Skip"
                ] }),
                /* @__PURE__ */ jsx("span", { className: "text-xs text-gray-500", children: "S" })
              ]
            }
          )
        ]
      }
    )
  ] });
}

function YouTubeIcon(props) {
  const { className } = props;
  return /* @__PURE__ */ jsx(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: "20",
      height: "20",
      viewBox: "0 0 24 24",
      fill: "currentColor",
      className,
      children: /* @__PURE__ */ jsx("path", { d: "M19.615 3.184c-3.604-.246-11.631-.245-15.23 0C.488 3.45.029 5.804 0 12c.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0C23.512 20.55 23.971 18.196 24 12c-.029-6.185-.484-8.549-4.385-8.816zM9 16V8l8 3.993L9 16z" })
    }
  );
}

const linkTypes = {
  article: "bg-yellow-300",
  course: "bg-green-400",
  opensource: "bg-black text-white",
  "roadmap.sh": "bg-black text-white",
  roadmap: "bg-black text-white",
  podcast: "bg-purple-300",
  video: "bg-purple-300",
  website: "bg-blue-300",
  official: "bg-blue-600 text-white",
  feed: "bg-[#ce3df3] text-white"
};
function TopicDetail(props) {
  const { canSubmitContribution, isEmbed = false, resourceTitle } = props;
  const [hasEnoughLinks, setHasEnoughLinks] = useState(false);
  const [contributionUrl, setContributionUrl] = useState("");
  const [isActive, setIsActive] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isContributing, setIsContributing] = useState(false);
  const [error, setError] = useState("");
  const [topicHtml, setTopicHtml] = useState("");
  const [hasContent, setHasContent] = useState(false);
  const [topicTitle, setTopicTitle] = useState("");
  const [topicHtmlTitle, setTopicHtmlTitle] = useState("");
  const [links, setLinks] = useState([]);
  const toast = useToast();
  const { secret } = getUrlParams();
  const isGuest = useMemo(() => !isLoggedIn(), []);
  const topicRef = useRef(null);
  const [topicId, setTopicId] = useState("");
  const [resourceId, setResourceId] = useState("");
  const [resourceType, setResourceType] = useState("roadmap");
  useOutsideClick(topicRef, () => {
    setIsActive(false);
  });
  useKeydown("Escape", () => {
    setIsActive(false);
  });
  useToggleTopic(({ topicId: topicId2, resourceType: resourceType2, resourceId: resourceId2 }) => {
    if (isGuest) {
      showLoginPopup();
      return;
    }
    pageProgressMessage.set("Updating");
    isTopicDone({ topicId: topicId2, resourceId: resourceId2, resourceType: resourceType2 }).then(
      (oldIsDone) => updateResourceProgress(
        {
          topicId: topicId2,
          resourceId: resourceId2,
          resourceType: resourceType2
        },
        oldIsDone ? "pending" : "done"
      )
    ).then(({ done = [] }) => {
      renderTopicProgress(
        topicId2,
        done.includes(topicId2) ? "done" : "pending"
      );
      refreshProgressCounters();
    }).catch((err) => {
      toast.error(err.message);
      console.error(err);
    }).finally(() => {
      pageProgressMessage.set("");
    });
  });
  useLoadTopic(({ topicId: topicId2, resourceType: resourceType2, resourceId: resourceId2, isCustomResource }) => {
    setError("");
    setIsLoading(true);
    setIsActive(true);
    sponsorHidden.set(true);
    setTopicId(topicId2);
    setResourceType(resourceType2);
    setResourceId(resourceId2);
    const topicPartial = topicId2.replaceAll(":", "/");
    let topicUrl = resourceType2 === "roadmap" ? `/${resourceId2}/${topicPartial}` : `/best-practices/${resourceId2}/${topicPartial}`;
    if (isCustomResource) {
      topicUrl = `${{"BASE_URL": "/", "MODE": "production", "DEV": false, "PROD": true, "SSR": true, "SITE": "https://roadmap.sh/", "ASSETS_PREFIX": undefined}.PUBLIC_API_URL}/v1-get-node-content/${resourceId2}/${topicId2}${secret ? `?secret=${secret}` : ""}`;
    }
    httpGet(
      topicUrl,
      {},
      {
        ...!isCustomResource && {
          headers: {
            Accept: "text/html"
          }
        }
      }
    ).then(({ response }) => {
      if (!response) {
        setError("Topic not found.");
        setIsLoading(false);
        return;
      }
      let topicHtml2 = "";
      if (!isCustomResource) {
        const topicDom = new DOMParser().parseFromString(
          response,
          "text/html"
        );
        const links2 = topicDom.querySelectorAll("a");
        const urlElem = topicDom.querySelector("[data-github-url]");
        const contributionUrl2 = urlElem?.dataset?.githubUrl || "";
        const titleElem = topicDom.querySelector("h1");
        const otherElems = topicDom.querySelectorAll("body > *:not(h1, div)");
        let ulWithLinks = document.createElement("ul");
        topicDom.querySelectorAll("ul").forEach((ul) => {
          const lisWithJustLinks = Array.from(
            ul.querySelectorAll("li")
          ).filter((li) => {
            return li.children.length === 1 && li.children[0].tagName === "A" && li.children[0].textContent === li.textContent;
          });
          if (lisWithJustLinks.length > 0) {
            ulWithLinks = ul;
          }
        });
        const listLinks = Array.from(ulWithLinks.querySelectorAll("li > a")).map((link, counter) => {
          const typePattern = /@([a-z.]+)@/;
          let linkText = link.textContent || "";
          const linkHref = link.getAttribute("href") || "";
          const linkType = linkText.match(typePattern)?.[1] || "article";
          linkText = linkText.replace(typePattern, "");
          return {
            id: `link-${linkHref}-${counter}`,
            title: linkText,
            url: linkHref,
            type: linkType
          };
        }).sort((a, b) => {
          const order = ["official", "opensource", "article", "video", "feed"];
          return order.indexOf(a.type) - order.indexOf(b.type);
        });
        if (ulWithLinks) {
          ulWithLinks.remove();
        }
        topicHtml2 = topicDom.body.innerHTML;
        setLinks(listLinks);
        setHasContent(otherElems.length > 0);
        setContributionUrl(contributionUrl2);
        setHasEnoughLinks(links2.length >= 3);
        setTopicHtmlTitle(titleElem?.textContent || "");
      } else {
        setLinks(response?.links || []);
        setTopicTitle(response?.title || "");
        const sanitizedMarkdown = sanitizeMarkdown(
          response.description || ""
        );
        setHasContent(sanitizedMarkdown?.length > 0);
        topicHtml2 = markdownToHtml(sanitizedMarkdown, false);
      }
      setIsLoading(false);
      setTopicHtml(topicHtml2);
    }).catch((err) => {
      setError("Something went wrong. Please try again later.");
      setIsLoading(false);
    });
  });
  useEffect(() => {
    if (isActive) topicRef?.current?.focus();
  }, [isActive]);
  if (!isActive) {
    return null;
  }
  const resourceTitleForSearch = resourceTitle?.toLowerCase()?.replace(/\s+?roadmap/gi, "");
  const googleSearchUrl = `https://www.google.com/search?q=${topicHtmlTitle?.toLowerCase()} guide for ${resourceTitleForSearch}`;
  const youtubeSearchUrl = `https://www.youtube.com/results?search_query=${topicHtmlTitle?.toLowerCase()} for ${resourceTitleForSearch}`;
  const tnsLink = "https://thenewstack.io/devops/?utm_source=roadmap.sh&utm_medium=Referral&utm_campaign=Topic";
  return /* @__PURE__ */ jsxs("div", { className: "relative z-[90]", children: [
    /* @__PURE__ */ jsxs(
      "div",
      {
        ref: topicRef,
        tabIndex: 0,
        className: "fixed right-0 top-0 z-40 flex h-screen w-full flex-col overflow-y-auto bg-white p-4 focus:outline-0 sm:max-w-[600px] sm:p-6",
        children: [
          isLoading && /* @__PURE__ */ jsx("div", { className: "flex h-full w-full items-center justify-center", children: /* @__PURE__ */ jsx(
            Spinner,
            {
              outerFill: "#d1d5db",
              className: "h-6 w-6 sm:h-8 sm:w-8",
              innerFill: "#2563eb",
              isDualRing: false
            }
          ) }),
          !isContributing && !isLoading && !error && /* @__PURE__ */ jsxs(Fragment, { children: [
            /* @__PURE__ */ jsxs("div", { className: "flex-1", children: [
              /* @__PURE__ */ jsxs("div", { className: "mb-2", children: [
                !isEmbed && /* @__PURE__ */ jsx(
                  TopicProgressButton,
                  {
                    topicId: topicId.indexOf("@") !== -1 ? topicId.split("@")[1] : topicId,
                    resourceId,
                    resourceType,
                    onClose: () => {
                      setIsActive(false);
                    }
                  }
                ),
                /* @__PURE__ */ jsx(
                  "button",
                  {
                    type: "button",
                    id: "close-topic",
                    className: "absolute right-2.5 top-2.5 inline-flex items-center rounded-lg bg-transparent p-1.5 text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900",
                    onClick: () => {
                      setIsActive(false);
                    },
                    children: /* @__PURE__ */ jsx(X, { className: "h-5 w-5" })
                  }
                )
              ] }),
              hasContent ? /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsxs("div", { className: "prose prose-quoteless prose-h1:mb-2.5 prose-h1:mt-7 prose-h1:text-balance prose-h2:mb-3 prose-h2:mt-0 prose-h3:mb-[5px] prose-h3:mt-[10px] prose-p:mb-2 prose-p:mt-0 prose-blockquote:font-normal prose-blockquote:not-italic prose-blockquote:text-gray-700 prose-li:m-0 prose-li:mb-0.5", children: [
                topicTitle && /* @__PURE__ */ jsx("h1", { children: topicTitle }),
                /* @__PURE__ */ jsx(
                  "div",
                  {
                    id: "topic-content",
                    dangerouslySetInnerHTML: { __html: topicHtml }
                  }
                )
              ] }) }) : /* @__PURE__ */ jsxs(Fragment, { children: [
                !canSubmitContribution && /* @__PURE__ */ jsxs("div", { className: "flex h-[calc(100%-38px)] flex-col items-center justify-center", children: [
                  /* @__PURE__ */ jsx(FileText, { className: "h-16 w-16 text-gray-300" }),
                  /* @__PURE__ */ jsx("p", { className: "mt-2 text-lg font-medium text-gray-500", children: "Empty Content" })
                ] }),
                canSubmitContribution && /* @__PURE__ */ jsxs("div", { className: "mx-auto flex h-[calc(100%-38px)] max-w-[400px] flex-col items-center justify-center text-center", children: [
                  /* @__PURE__ */ jsx(HeartHandshake, { className: "mb-2 h-16 w-16 text-gray-300" }),
                  /* @__PURE__ */ jsx("p", { className: "text-lg font-semibold text-gray-900", children: "Help us write this content" }),
                  /* @__PURE__ */ jsx("p", { className: "mb-3 mt-2 text-sm text-gray-500", children: "Write a brief introduction to this topic and submit a link to a good article, podcast, video, or any other self-vetted resource that helped you understand this topic better." }),
                  /* @__PURE__ */ jsxs(
                    "a",
                    {
                      href: contributionUrl,
                      target: "_blank",
                      className: "flex w-full items-center justify-center rounded-md bg-gray-800 p-2 text-sm text-white transition-colors hover:bg-black hover:text-white disabled:bg-green-200 disabled:text-black",
                      children: [
                        /* @__PURE__ */ jsx(GitHubIcon, { className: "mr-2 inline-block h-4 w-4 text-white" }),
                        "Add Learning Resources"
                      ]
                    }
                  )
                ] })
              ] }),
              links.length > 0 && /* @__PURE__ */ jsx("ul", { className: "mt-6 space-y-1", children: links.map((link) => {
                return /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs(
                  "a",
                  {
                    href: link.url,
                    target: "_blank",
                    className: "group font-medium text-gray-800 underline underline-offset-1 hover:text-black",
                    onClick: () => {
                      if (canSubmitContribution) {
                        const parsedUrl = parseUrl(link.url);
                        window.fireEvent({
                          category: "TopicResourceClick",
                          action: `Click: ${parsedUrl.hostname}`,
                          label: `${resourceType} / ${resourceId} / ${topicId} / ${link.url}`
                        });
                      }
                    },
                    children: [
                      /* @__PURE__ */ jsx(
                        "span",
                        {
                          className: cn(
                            "mr-2 inline-block rounded px-1.5 py-0.5 text-xs uppercase no-underline",
                            link.type in linkTypes ? linkTypes[link.type] : "bg-gray-200"
                          ),
                          children: link.type === "opensource" ? /* @__PURE__ */ jsxs(Fragment, { children: [
                            link.url.includes("github") && "GitHub",
                            link.url.includes("gitlab") && "GitLab"
                          ] }) : link.type
                        }
                      ),
                      link.title
                    ]
                  }
                ) }, link.id);
              }) }),
              canSubmitContribution && !hasEnoughLinks && contributionUrl && /* @__PURE__ */ jsxs("div", { className: "mb-12 mt-3 border-t text-sm text-gray-400 sm:mt-12", children: [
                /* @__PURE__ */ jsxs("div", { className: "mb-4 mt-3", children: [
                  /* @__PURE__ */ jsx("p", { className: "", children: "Find more resources using these pre-filled search queries:" }),
                  /* @__PURE__ */ jsxs("div", { className: "mt-3 flex gap-2  text-gray-700", children: [
                    /* @__PURE__ */ jsxs(
                      "a",
                      {
                        href: googleSearchUrl,
                        target: "_blank",
                        className: "flex items-center gap-2 rounded-md border border-gray-300 px-3 py-1.5 pl-2 text-xs hover:border-gray-700 hover:bg-gray-100",
                        children: [
                          /* @__PURE__ */ jsx(GoogleIcon, { className: "h-4 w-4" }),
                          "Google"
                        ]
                      }
                    ),
                    /* @__PURE__ */ jsxs(
                      "a",
                      {
                        href: youtubeSearchUrl,
                        target: "_blank",
                        className: "flex items-center gap-2 rounded-md border border-gray-300 px-3 py-1.5 pl-2 text-xs hover:border-gray-700 hover:bg-gray-100",
                        children: [
                          /* @__PURE__ */ jsx(YouTubeIcon, { className: "h-4 w-4 text-red-500" }),
                          "YouTube"
                        ]
                      }
                    )
                  ] })
                ] }),
                /* @__PURE__ */ jsx("p", { className: "mb-2 mt-2 leading-relaxed", children: "Help us improve this introduction and submit a link to a good article, podcast, video, or any other self-vetted resource that helped you understand this topic better." }),
                /* @__PURE__ */ jsxs(
                  "a",
                  {
                    href: contributionUrl,
                    target: "_blank",
                    className: "flex w-full items-center justify-center rounded-md bg-gray-800 p-2 text-sm text-white transition-colors hover:bg-black hover:text-white disabled:bg-green-200 disabled:text-black",
                    children: [
                      /* @__PURE__ */ jsx(GitHubIcon, { className: "mr-2 inline-block h-4 w-4 text-white" }),
                      "Add Learning Resources"
                    ]
                  }
                )
              ] })
            ] }),
            resourceId === "devops" && /* @__PURE__ */ jsxs("div", { className: "mt-4", children: [
              /* @__PURE__ */ jsxs(
                "a",
                {
                  href: tnsLink,
                  target: "_blank",
                  className: "hidden rounded-md border bg-gray-200 px-2 py-2 text-sm hover:bg-gray-300 sm:block",
                  children: [
                    /* @__PURE__ */ jsx("span", { className: "badge mr-1.5", children: "Partner" }),
                    "Get the latest ",
                    resourceTitleFromId(resourceId),
                    " news from our sister site",
                    " ",
                    /* @__PURE__ */ jsx("span", { className: "font-medium underline underline-offset-1", children: "TheNewStack.io" })
                  ]
                }
              ),
              /* @__PURE__ */ jsxs(
                "a",
                {
                  href: tnsLink,
                  className: "hidden rounded-md border bg-gray-200 px-2 py-1.5 text-sm hover:bg-gray-300 min-[390px]:block sm:hidden",
                  onClick: () => {
                    window.fireEvent({
                      category: "PartnerClick",
                      action: "TNS Redirect",
                      label: "Roadmap Topic / TNS Link"
                    });
                  },
                  children: [
                    /* @__PURE__ */ jsx("span", { className: "badge mr-1.5", children: "Partner" }),
                    "Visit",
                    " ",
                    /* @__PURE__ */ jsx("span", { className: "font-medium underline underline-offset-1", children: "TheNewStack.io" }),
                    " ",
                    "for ",
                    resourceTitleFromId(resourceId),
                    " news"
                  ]
                }
              )
            ] })
          ] }),
          !isContributing && !isLoading && error && /* @__PURE__ */ jsxs(Fragment, { children: [
            /* @__PURE__ */ jsx(
              "button",
              {
                type: "button",
                id: "close-topic",
                className: "absolute right-2.5 top-2.5 inline-flex items-center rounded-lg bg-transparent p-1.5 text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900",
                onClick: () => {
                  setIsActive(false);
                  setIsContributing(false);
                },
                children: /* @__PURE__ */ jsx(X, { className: "h-5 w-5" })
              }
            ),
            /* @__PURE__ */ jsxs("div", { className: "flex h-full flex-col items-center justify-center", children: [
              /* @__PURE__ */ jsx(Ban, { className: "h-16 w-16 text-red-500" }),
              /* @__PURE__ */ jsx("p", { className: "mt-2 text-lg font-medium text-red-500", children: error })
            ] })
          ] })
        ]
      }
    ),
    /* @__PURE__ */ jsx("div", { className: "fixed inset-0 z-30 bg-gray-900 bg-opacity-50 dark:bg-opacity-80" })
  ] });
}

const $$Astro = createAstro("https://roadmap.sh/");
const $$UpcomingForm = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$UpcomingForm;
  return renderTemplate`${maybeRenderHead()}<div class="my-0 rounded-lg px-5 pb-12 pt-5 text-left sm:pb-16 sm:pt-0 sm:text-center"> <div class="mx-auto sm:max-w-[420px]"> <div class="hidden sm:block">${renderComponent($$result, "Icon", $$AstroIcon, { "icon": "bell" })}</div> <h2 class="text-3xl font-semibold sm:mb-1 sm:font-medium">Upcoming</h2> <p class="mb-0 inline-flex hidden text-gray-600 sm:mb-5" data-auth-required>
You will be notified by email when the roadmap is ready.
</p> <p class="mb-0 inline-flex text-gray-600 sm:mb-5" data-guest-required>
Please check back later or subscribe below.
</p> <button data-guest-required data-popup="login-popup" type="button" name="submit" class="font-regular text-md mt-5 w-full rounded-md bg-gray-700 px-5 py-2.5 text-center text-white hover:bg-black sm:mt-0 flex gap-1 items-center justify-center" aria-label="Get Notified"> ${renderComponent($$result, "Icon", $$AstroIcon, { "icon": "bell", "class": "h-5" })} Notify me when ready!
</button> <button data-auth-required type="button" disabled name="submit" class="font-regular text-md mt-5 sm:mt-0 flex hidden w-full items-center justify-center gap-2 rounded-md bg-gray-300 px-5 py-2.5 text-center text-gray-800" aria-label="Get Notified">
Please check back later
</button> </div> </div>`;
}, "/workspaces/developer-roadmap/src/components/UpcomingForm.astro", void 0);

function generateArticleSchema(article) {
  const { url, headline, description, imageUrl, datePublished, dateModified } = article;
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url
    },
    headline,
    description,
    image: imageUrl,
    author: {
      "@type": "Person",
      name: "Kamran Ahmed",
      url: "https://twitter.com/kamrify"
    },
    publisher: {
      "@type": "Organization",
      name: "roadmap.sh",
      logo: {
        "@type": "ImageObject",
        url: "https://roadmap.sh/images/brand-square.png"
      }
    },
    datePublished,
    dateModified
  };
}
function generateFAQSchema(faqs) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer.join(" ")
      }
    }))
  };
}

export { $$ResourceProgressStats as $, TopicDetail as T, $$ShareIcons as a, $$UpcomingForm as b, generateFAQSchema as c, generateArticleSchema as g };
