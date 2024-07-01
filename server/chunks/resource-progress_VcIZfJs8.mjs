import { k as createAstro, l as createComponent, m as renderTemplate, n as maybeRenderHead, o as addAttribute, p as renderComponent } from './astro/server_DJHfVkFr.mjs';
import 'kleur/colors';
import { $ as $$Loader } from './Loader_DjsueaOk.mjs';
/* empty css                         */
import Cookies from 'js-cookie';
import { n as getUser, f as httpPost, T as TOKEN_COOKIE_NAME, h as httpGet } from './BaseLayout_CyQdLUYI.mjs';
import { r as roadmapProgress, t as totalRoadmapNodes } from './roadmap_41ouUrOm.mjs';

const $$Astro = createAstro("https://roadmap.sh/");
const $$FrameRenderer = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$FrameRenderer;
  const { resourceId, resourceType, dimensions = null } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div id="resource-svg-wrap"${addAttribute(dimensions ? `--aspect-ratio:${dimensions.width}/${dimensions.height}` : null, "style")}${addAttribute(resourceType, "data-resource-type")}${addAttribute(resourceId, "data-resource-id")}> <div id="resource-loader"> ${renderComponent($$result, "Loader", $$Loader, {})} </div> </div> ${renderComponent($$result, "ProgressNudge", null, { "resourceId": resourceId, "resourceType": resourceType, "client:only": "react", "client:component-hydration": "only", "client:component-path": "/workspaces/developer-roadmap/src/components/FrameRenderer/ProgressNudge", "client:component-export": "ProgressNudge" })} `;
}, "/workspaces/developer-roadmap/src/components/FrameRenderer/FrameRenderer.astro", void 0);

async function isTopicDone(topic) {
  const { topicId, resourceType, resourceId } = topic;
  const { done = [] } = await getResourceProgress(resourceType, resourceId) || {};
  return done?.includes(topicId);
}
async function getTopicStatus(topic) {
  const { topicId, resourceType, resourceId } = topic;
  const progressResult = await getResourceProgress(resourceType, resourceId);
  if (progressResult?.done?.includes(topicId)) {
    return "done";
  }
  if (progressResult?.learning?.includes(topicId)) {
    return "learning";
  }
  if (progressResult?.skipped?.includes(topicId)) {
    return "skipped";
  }
  return "pending";
}
async function updateResourceProgress(topic, progressType) {
  const { topicId, resourceType, resourceId } = topic;
  const { response, error } = await httpPost(`${{"BASE_URL": "/", "MODE": "production", "DEV": false, "PROD": true, "SSR": true, "SITE": "https://roadmap.sh/", "ASSETS_PREFIX": undefined}.PUBLIC_API_URL}/v1-update-resource-progress`, {
    topicId,
    resourceType,
    resourceId,
    progress: progressType
  });
  if (error || !response?.done || !response?.learning) {
    throw new Error(error?.message || "Something went wrong");
  }
  setResourceProgress(
    resourceType,
    resourceId,
    response.done,
    response.learning,
    response.skipped
  );
  return response;
}
function clearMigratedRoadmapProgress(resourceType, resourceId) {
  const migratedRoadmaps = ["frontend", "backend"];
  if (!migratedRoadmaps.includes(resourceId)) {
    return;
  }
  const userId = getUser()?.id;
  if (!userId) {
    return;
  }
  const roadmapKey = `${resourceType}-${resourceId}-${userId}-progress`;
  const clearedKey = `${resourceType}-${resourceId}-${userId}-cleared`;
  const clearedCount = parseInt(localStorage.getItem(clearedKey) || "0", 10);
  if (clearedCount >= 10) {
    return;
  }
  localStorage.removeItem(roadmapKey);
  localStorage.setItem(clearedKey, `${clearedCount + 1}`);
}
async function getResourceProgress(resourceType, resourceId) {
  if (!Cookies.get(TOKEN_COOKIE_NAME)) {
    return {
      done: [],
      learning: [],
      skipped: []
    };
  }
  const userId = getUser()?.id;
  const progressKey = `${resourceType}-${resourceId}-${userId}-progress`;
  const isFavoriteKey = `${resourceType}-${resourceId}-favorite`;
  const rawIsFavorite = localStorage.getItem(isFavoriteKey);
  const isFavorite = JSON.parse(rawIsFavorite || "0") === 1;
  const rawProgress = localStorage.getItem(progressKey);
  const progress = JSON.parse(rawProgress || "null");
  const progressTimestamp = progress?.timestamp;
  const diff = (/* @__PURE__ */ new Date()).getTime() - parseInt(progressTimestamp || "0", 10);
  const isProgressExpired = diff > 15 * 60 * 1e3;
  if (!progress || isProgressExpired) {
    return loadFreshProgress(resourceType, resourceId);
  } else {
    setResourceProgress(
      resourceType,
      resourceId,
      progress?.done || [],
      progress?.learning || [],
      progress?.skipped || []
    );
  }
  window.dispatchEvent(
    new CustomEvent("mark-favorite", {
      detail: {
        resourceType,
        resourceId,
        isFavorite
      }
    })
  );
  return progress;
}
async function loadFreshProgress(resourceType, resourceId) {
  const { response, error } = await httpGet(`${{"BASE_URL": "/", "MODE": "production", "DEV": false, "PROD": true, "SSR": true, "SITE": "https://roadmap.sh/", "ASSETS_PREFIX": undefined}.PUBLIC_API_URL}/v1-get-user-resource-progress`, {
    resourceType,
    resourceId
  });
  if (error || !response) {
    console.error(error);
    return {
      done: [],
      learning: [],
      skipped: []
    };
  }
  setResourceProgress(
    resourceType,
    resourceId,
    response?.done || [],
    response?.learning || [],
    response?.skipped || []
  );
  window.dispatchEvent(
    new CustomEvent("mark-favorite", {
      detail: {
        resourceType,
        resourceId,
        isFavorite: response.isFavorite
      }
    })
  );
  return response;
}
function setResourceProgress(resourceType, resourceId, done, learning, skipped) {
  roadmapProgress.set({
    done,
    learning,
    skipped
  });
  const userId = getUser()?.id;
  localStorage.setItem(
    `${resourceType}-${resourceId}-${userId}-progress`,
    JSON.stringify({
      done,
      learning,
      skipped,
      timestamp: (/* @__PURE__ */ new Date()).getTime()
    })
  );
}
function topicSelectorAll(topicId, parentElement = document) {
  const matchingElements = [];
  parentElement.querySelectorAll(`[data-group-id$="-${topicId}"]`).forEach((element) => {
    const foundGroupId = element?.dataset?.groupId || "";
    const validGroupRegex = new RegExp(`^\\d+-${topicId}$`);
    if (validGroupRegex.test(foundGroupId)) {
      matchingElements.push(element);
    }
  });
  getMatchingElements(
    [
      `[data-group-id="${topicId}"]`,
      // Elements with exact match of the topic id
      `[data-group-id="check:${topicId}"]`,
      // Matching "check:XXXX" box of the topic
      `[data-node-id="${topicId}"]`,
      // Matching custom roadmap nodes
      `[data-id="${topicId}"]`,
      // Matching custom roadmap nodes
      `[data-checklist-checkbox][data-checklist-id="${topicId}"]`,
      // Matching checklist checkboxes
      `[data-checklist-label][data-checklist-id="${topicId}"]`
      // Matching checklist labels
    ],
    parentElement
  ).forEach((element) => {
    matchingElements.push(element);
  });
  return matchingElements;
}
function renderTopicProgress(topicId, topicProgress) {
  const isLearning = topicProgress === "learning";
  const isSkipped = topicProgress === "skipped";
  const isDone = topicProgress === "done";
  const isRemoved = topicProgress === "removed";
  const matchingElements = topicSelectorAll(topicId);
  matchingElements.forEach((element) => {
    if (isDone) {
      element.classList.add("done");
      element.classList.remove("learning", "skipped");
    } else if (isLearning) {
      element.classList.add("learning");
      element.classList.remove("done", "skipped");
    } else if (isSkipped) {
      element.classList.add("skipped");
      element.classList.remove("done", "learning");
    } else if (isRemoved) {
      element.classList.add("removed");
      element.classList.remove("done", "learning", "skipped");
    } else {
      element.classList.remove("done", "skipped", "learning", "removed");
    }
  });
}
async function renderResourceProgress(resourceType, resourceId) {
  const {
    done = [],
    learning = [],
    skipped = []
  } = await getResourceProgress(resourceType, resourceId) || {};
  done.forEach((topicId) => {
    renderTopicProgress(topicId, "done");
  });
  learning.forEach((topicId) => {
    renderTopicProgress(topicId, "learning");
  });
  skipped.forEach((topicId) => {
    renderTopicProgress(topicId, "skipped");
  });
  refreshProgressCounters();
}
function getMatchingElements(queries, parentElement = document) {
  const matchingElements = [];
  queries.forEach((query) => {
    parentElement.querySelectorAll(query).forEach((element) => {
      matchingElements.push(element);
    });
  });
  return matchingElements;
}
function refreshProgressCounters() {
  const progressNumsContainers = document.querySelectorAll(
    "[data-progress-nums-container]"
  );
  const progressNums = document.querySelectorAll("[data-progress-nums]");
  if (progressNumsContainers.length === 0 || progressNums.length === 0) {
    return;
  }
  const totalClickable = getMatchingElements([
    ".clickable-group",
    '[data-type="topic"]',
    '[data-type="subtopic"]',
    ".react-flow__node-topic",
    ".react-flow__node-subtopic"
  ]).length;
  const externalLinks = document.querySelectorAll(
    '[data-group-id^="ext_link:"]'
  ).length;
  const roadmapSwitchers = document.querySelectorAll(
    '[data-group-id^="json:"]'
  ).length;
  const checkBoxes = document.querySelectorAll(
    '[data-group-id^="check:"]'
  ).length;
  const totalCheckBoxesDone = document.querySelectorAll(
    '[data-group-id^="check:"].done'
  ).length;
  const totalCheckBoxesLearning = document.querySelectorAll(
    '[data-group-id^="check:"].learning'
  ).length;
  const totalCheckBoxesSkipped = document.querySelectorAll(
    '[data-group-id^="check:"].skipped'
  ).length;
  const totalRemoved = document.querySelectorAll(
    ".clickable-group.removed"
  ).length;
  const totalItems = totalClickable - externalLinks - roadmapSwitchers - checkBoxes - totalRemoved;
  totalRoadmapNodes.set(totalItems);
  const totalDone = getMatchingElements([
    '.clickable-group.done:not([data-group-id^="ext_link:"])',
    "[data-node-id].done",
    // All data-node-id=*.done elements are custom roadmap nodes
    "[data-id].done"
    // All data-id=*.done elements are custom roadmap nodes
  ]).length - totalCheckBoxesDone;
  const totalLearning = getMatchingElements([
    ".clickable-group.learning",
    "[data-node-id].learning",
    "[data-id].learning"
  ]).length - totalCheckBoxesLearning;
  const totalSkipped = getMatchingElements([
    ".clickable-group.skipped",
    "[data-node-id].skipped",
    "[data-id].skipped"
  ]).length - totalCheckBoxesSkipped;
  const doneCountEls = document.querySelectorAll("[data-progress-done]");
  if (doneCountEls.length > 0) {
    doneCountEls.forEach(
      (doneCountEl) => doneCountEl.innerHTML = `${totalDone}`
    );
  }
  const learningCountEls = document.querySelectorAll(
    "[data-progress-learning]"
  );
  if (learningCountEls.length > 0) {
    learningCountEls.forEach(
      (learningCountEl) => learningCountEl.innerHTML = `${totalLearning}`
    );
  }
  const skippedCountEls = document.querySelectorAll("[data-progress-skipped]");
  if (skippedCountEls.length > 0) {
    skippedCountEls.forEach(
      (skippedCountEl) => skippedCountEl.innerHTML = `${totalSkipped}`
    );
  }
  const totalCountEls = document.querySelectorAll("[data-progress-total]");
  if (totalCountEls.length > 0) {
    totalCountEls.forEach(
      (totalCountEl) => totalCountEl.innerHTML = `${totalItems}`
    );
  }
  const progressPercentage = Math.round((totalDone + totalSkipped) / totalItems * 100) || 0;
  const progressPercentageEls = document.querySelectorAll(
    "[data-progress-percentage]"
  );
  if (progressPercentageEls.length > 0) {
    progressPercentageEls.forEach(
      (progressPercentageEl) => progressPercentageEl.innerHTML = `${progressPercentage}`
    );
  }
  progressNumsContainers.forEach(
    (progressNumsContainer) => progressNumsContainer.classList.remove("striped-loader")
  );
  progressNums.forEach((progressNum) => {
    progressNum.classList.remove("opacity-0");
  });
}

export { $$FrameRenderer as $, refreshProgressCounters as a, renderResourceProgress as b, clearMigratedRoadmapProgress as c, getTopicStatus as g, isTopicDone as i, renderTopicProgress as r, updateResourceProgress as u };
