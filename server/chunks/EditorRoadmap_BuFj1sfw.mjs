import { jsxs, jsx } from 'react/jsx-runtime';
import { useRef, useCallback, useEffect, useState } from 'react';
/* empty css                         */
import { b as renderResourceProgress, u as updateResourceProgress, r as renderTopicProgress, a as refreshProgressCounters, c as clearMigratedRoadmapProgress } from './resource-progress_VcIZfJs8.mjs';
import { k as isLoggedIn, p as pageProgressMessage, c as cn, S as Spinner, h as httpGet } from './BaseLayout_CyQdLUYI.mjs';
import { u as useToast } from './use-toast_BupOxZu-.mjs';
import { s as showLoginPopup } from './popup_DWUkHIfQ.mjs';
import { t as totalRoadmapNodes, r as roadmapProgress } from './roadmap_41ouUrOm.mjs';
import { useStore } from '@nanostores/react';
import { g as getUrlParams } from './browser_DmlLShyb.mjs';
import 'clsx';
import 'js-cookie';

function Renderer(props) {
  return /* @__PURE__ */ jsxs("div", { className: "fixed bottom-0 left-0 right-0 top-0 z-[9999] border bg-white p-5 text-black", children: [
    /* @__PURE__ */ jsx("h2", { className: "mb-2 text-xl font-semibold", children: "Private Component" }),
    /* @__PURE__ */ jsx("p", { className: "mb-4", children: "Renderer is a private component. If you are a collaborator and have access to it. Run the following command:" }),
    /* @__PURE__ */ jsx("code", { className: "mt-5 rounded-md bg-gray-800 p-2 text-white", children: "npm run generate-renderer" })
  ] });
}

const regex = /[^A-Za-z0-9_\- ]/g;
function slugify(value) {
  if (typeof value !== "string") {
    return "";
  }
  return value.toLowerCase().replace(regex, "").trim().replace(/ /g, "-");
}

function getNodeDetails(svgElement) {
  const targetGroup = svgElement?.closest("g") || {};
  const nodeId = targetGroup?.dataset?.nodeId;
  const nodeType = targetGroup?.dataset?.type;
  const title = targetGroup?.dataset?.title;
  if (!nodeId || !nodeType) {
    return null;
  }
  return { nodeId, nodeType, targetGroup, title };
}
const allowedNodeTypes = ["topic", "subtopic", "button", "link-item"];
function EditorRoadmapRenderer(props) {
  const { resourceId, nodes = [], edges = [] } = props;
  const roadmapRef = useRef(null);
  const toast = useToast();
  async function updateTopicStatus(topicId, newStatus) {
    pageProgressMessage.set("Updating progress");
    updateResourceProgress(
      {
        resourceId,
        resourceType: "roadmap",
        topicId
      },
      newStatus
    ).then(() => {
      renderTopicProgress(topicId, newStatus);
    }).catch((err) => {
      toast.error("Something went wrong, please try again.");
      console.error(err);
    }).finally(() => {
      pageProgressMessage.set("");
      refreshProgressCounters();
    });
    return;
  }
  const handleSvgClick = useCallback((e) => {
    const target = e.target;
    const { nodeId, nodeType, targetGroup, title } = getNodeDetails(target) || {};
    if (!nodeId || !nodeType || !allowedNodeTypes.includes(nodeType)) {
      return;
    }
    if (nodeType === "button" || nodeType === "link-item") {
      const link = targetGroup?.dataset?.link || "";
      const isExternalLink = link.startsWith("http");
      if (isExternalLink) {
        window.open(link, "_blank");
      } else {
        window.location.href = link;
      }
      return;
    }
    const isCurrentStatusLearning = targetGroup?.classList.contains("learning");
    const isCurrentStatusSkipped = targetGroup?.classList.contains("skipped");
    if (e.shiftKey) {
      e.preventDefault();
      if (!isLoggedIn()) {
        showLoginPopup();
        return;
      }
      updateTopicStatus(
        nodeId,
        isCurrentStatusLearning ? "pending" : "learning"
      );
      return;
    } else if (e.altKey) {
      e.preventDefault();
      if (!isLoggedIn()) {
        showLoginPopup();
        return;
      }
      updateTopicStatus(nodeId, isCurrentStatusSkipped ? "pending" : "skipped");
      return;
    }
    if (!title) {
      return;
    }
    const detailsPattern = `${slugify(title)}@${nodeId}`;
    window.dispatchEvent(
      new CustomEvent("roadmap.node.click", {
        detail: {
          topicId: detailsPattern,
          resourceId,
          resourceType: "roadmap"
        }
      })
    );
  }, []);
  const handleSvgRightClick = useCallback((e) => {
    e.preventDefault();
    const target = e.target;
    const { nodeId, nodeType, targetGroup } = getNodeDetails(target) || {};
    if (!nodeId || !nodeType || !allowedNodeTypes.includes(nodeType)) {
      return;
    }
    if (nodeType === "button") {
      return;
    }
    if (!isLoggedIn()) {
      showLoginPopup();
      return;
    }
    const isCurrentStatusDone = targetGroup?.classList.contains("done");
    updateTopicStatus(nodeId, isCurrentStatusDone ? "pending" : "done");
  }, []);
  useEffect(() => {
    if (!roadmapRef?.current) {
      return;
    }
    roadmapRef?.current?.addEventListener("click", handleSvgClick);
    roadmapRef?.current?.addEventListener("contextmenu", handleSvgRightClick);
    return () => {
      roadmapRef?.current?.removeEventListener("click", handleSvgClick);
      roadmapRef?.current?.removeEventListener(
        "contextmenu",
        handleSvgRightClick
      );
    };
  }, []);
  return /* @__PURE__ */ jsx(
    Renderer,
    {
      ref: roadmapRef,
      roadmap: { nodes, edges },
      onRendered: () => {
        roadmapRef.current?.setAttribute("data-renderer", "editor");
        renderResourceProgress("roadmap", resourceId).finally();
      }
    }
  );
}

function ProgressNudge(props) {
  const $totalRoadmapNodes = useStore(totalRoadmapNodes);
  const $roadmapProgress = useStore(roadmapProgress);
  const done = $roadmapProgress?.done?.length || 0;
  const hasProgress = done > 0;
  if (!$totalRoadmapNodes) {
    return null;
  }
  return /* @__PURE__ */ jsxs(
    "div",
    {
      className: "fixed bottom-5 left-1/2 z-30 hidden -translate-x-1/2 transform animate-fade-slide-up overflow-hidden rounded-full bg-stone-900 px-4 py-2 text-center text-white shadow-2xl transition-all duration-300 sm:block",
      children: [
        /* @__PURE__ */ jsxs(
          "span",
          {
            className: cn("block", {
              hidden: hasProgress
            }),
            children: [
              /* @__PURE__ */ jsx("span", { className: "mr-2 text-sm font-semibold uppercase text-yellow-400", children: "Tip" }),
              /* @__PURE__ */ jsxs("span", { className: "text-sm text-gray-200", children: [
                "Right-click on a topic to mark it as done.",
                " ",
                /* @__PURE__ */ jsx(
                  "button",
                  {
                    "data-popup": "progress-help",
                    className: "cursor-pointer font-semibold text-yellow-500 underline",
                    children: "Learn more."
                  }
                )
              ] })
            ]
          }
        ),
        /* @__PURE__ */ jsxs(
          "span",
          {
            className: cn("relative z-20 block text-sm", {
              hidden: !hasProgress
            }),
            children: [
              /* @__PURE__ */ jsx("span", { className: "relative -top-[0.45px] mr-2 text-xs font-medium uppercase text-yellow-400", children: "Progress" }),
              /* @__PURE__ */ jsx("span", { children: done > $totalRoadmapNodes ? $totalRoadmapNodes : done }),
              " of ",
              /* @__PURE__ */ jsx("span", { children: $totalRoadmapNodes }),
              " Done"
            ]
          }
        ),
        /* @__PURE__ */ jsx(
          "span",
          {
            className: "absolute bottom-0 left-0 top-0 z-10 bg-stone-700",
            style: {
              width: `${done / $totalRoadmapNodes * 100}%`
            }
          }
        )
      ]
    }
  );
}

function EditorRoadmap(props) {
  const { resourceId, resourceType = "roadmap", dimensions } = props;
  const [hasSwitchedRoadmap, setHasSwitchedRoadmap] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [roadmapData, setRoadmapData] = useState(void 0);
  const loadRoadmapData = async () => {
    setIsLoading(true);
    const { r: switchRoadmapId } = getUrlParams();
    const { response, error } = await httpGet(`/${switchRoadmapId || resourceId}.json`);
    if (error) {
      console.error(error);
      return;
    }
    setRoadmapData(response);
    setIsLoading(false);
    setHasSwitchedRoadmap(!!switchRoadmapId);
  };
  useEffect(() => {
    clearMigratedRoadmapProgress(resourceType, resourceId);
    loadRoadmapData().finally();
  }, [resourceId]);
  const aspectRatio = dimensions.width / dimensions.height;
  if (!roadmapData || isLoading) {
    return /* @__PURE__ */ jsx(
      "div",
      {
        style: !hasSwitchedRoadmap ? {
          "--aspect-ratio": aspectRatio
        } : void 0,
        className: "flex aspect-[var(--aspect-ratio)] w-full flex-col justify-center",
        children: /* @__PURE__ */ jsx("div", { className: "flex w-full justify-center", children: /* @__PURE__ */ jsx(
          Spinner,
          {
            innerFill: "#2563eb",
            outerFill: "#E5E7EB",
            className: "h-6 w-6 animate-spin sm:h-12 sm:w-12"
          }
        ) })
      }
    );
  }
  return /* @__PURE__ */ jsxs(
    "div",
    {
      style: !hasSwitchedRoadmap ? {
        "--aspect-ratio": aspectRatio
      } : void 0,
      className: "flex aspect-[var(--aspect-ratio)] w-full flex-col justify-center",
      children: [
        /* @__PURE__ */ jsx(
          EditorRoadmapRenderer,
          {
            ...roadmapData,
            dimensions,
            resourceId
          }
        ),
        /* @__PURE__ */ jsx(ProgressNudge, { resourceId, resourceType })
      ]
    }
  );
}

export { EditorRoadmap as E };
