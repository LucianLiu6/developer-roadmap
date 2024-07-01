/* empty css                             */
import { k as createAstro, l as createComponent, m as renderTemplate, p as renderComponent, n as maybeRenderHead } from './astro/server_DJHfVkFr.mjs';
import 'kleur/colors';
import { a as api } from './api_DzV6uVim.mjs';
import { jsxs, jsx, Fragment } from 'react/jsx-runtime';
import { Lock, Github, LinkedinIcon, Twitter, Globe, Mail } from 'lucide-react';
import CalendarHeatmap from 'react-calendar-heatmap';
import { Tooltip } from 'react-tooltip';
/* empty css                              */
import { f as formatMonthDate, a as formatActivityDate } from './date_DLWWd5g0.mjs';
import dayjs from 'dayjs';
import { a as $$BaseLayout } from './BaseLayout_CyQdLUYI.mjs';

function userApi(context) {
  return {
    getPublicProfile: async function(username) {
      return api(context).get(
        `${{"BASE_URL": "/", "MODE": "production", "DEV": false, "PROD": true, "SSR": true, "SITE": "https://roadmap.sh/", "ASSETS_PREFIX": undefined}.PUBLIC_API_URL}/v1-get-public-profile/${username}`
      );
    },
    getUserProfileRoadmap: async function(username, resourceId, resourceType = "roadmap") {
      return api(context).get(
        `${{"BASE_URL": "/", "MODE": "production", "DEV": false, "PROD": true, "SSR": true, "SITE": "https://roadmap.sh/", "ASSETS_PREFIX": undefined}.PUBLIC_API_URL}/v1-get-user-profile-roadmap/${username}`,
        {
          resourceId,
          resourceType
        }
      );
    }
  };
}

function PrivateProfileBanner(props) {
  const { isOwnProfile, profileVisibility } = props;
  if (isOwnProfile && profileVisibility === "private") {
    return /* @__PURE__ */ jsxs("div", { className: "-mb-4 -mt-5 rounded-lg border border-yellow-400 bg-yellow-100 p-2 text-center text-sm font-medium", children: [
      /* @__PURE__ */ jsx(Lock, { className: "-mt-1 mr-1.5 inline-block h-4 w-4" }),
      "Your profile is private. Only you can see this page."
    ] });
  }
  return null;
}

const legends = [
  { count: "1-2", color: "bg-gray-200" },
  { count: "3-4", color: "bg-gray-300" },
  { count: "5-9", color: "bg-gray-500" },
  { count: "10-19", color: "bg-gray-600" },
  { count: "20+", color: "bg-gray-800" }
];
function UserActivityHeatmap(props) {
  const { activity } = props;
  const data = Object.entries(activity.activityCount).map(([date, count]) => ({
    date,
    count
  }));
  const startDate = dayjs().subtract(1, "year").toDate();
  const endDate = dayjs().toDate();
  return /* @__PURE__ */ jsxs("div", { className: "rounded-lg border bg-white p-4", children: [
    /* @__PURE__ */ jsxs("div", { className: "-mx-4 mb-8 flex justify-between border-b px-4 pb-3", children: [
      /* @__PURE__ */ jsxs("div", { className: "", children: [
        /* @__PURE__ */ jsx("h2", { className: "mb-0.5 font-semibold", children: "Activity" }),
        /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-500", children: "Progress updates over the past year" })
      ] }),
      /* @__PURE__ */ jsxs("span", { className: "text-sm text-gray-400", children: [
        "Member since: ",
        formatMonthDate(props.joinedAt)
      ] })
    ] }),
    /* @__PURE__ */ jsx(
      CalendarHeatmap,
      {
        startDate,
        endDate,
        values: data,
        classForValue: (value) => {
          if (!value) {
            return "fill-gray-100 rounded-md [rx:2px] focus:outline-none";
          }
          const { count } = value;
          if (count >= 20) {
            return "fill-gray-800 rounded-md [rx:2px] focus:outline-none";
          } else if (count >= 10) {
            return "fill-gray-600 rounded-md [rx:2px] focus:outline-none";
          } else if (count >= 5) {
            return "fill-gray-500 rounded-md [rx:2px] focus:outline-none";
          } else if (count >= 3) {
            return "fill-gray-300 rounded-md [rx:2px] focus:outline-none";
          } else {
            return "fill-gray-200 rounded-md [rx:2px] focus:outline-none";
          }
        },
        tooltipDataAttrs: (value) => {
          if (!value || !value.date) {
            return null;
          }
          const formattedDate = formatActivityDate(value.date);
          return {
            "data-tooltip-id": "user-activity-tip",
            "data-tooltip-content": `${value.count} Updates - ${formattedDate}`
          };
        }
      }
    ),
    /* @__PURE__ */ jsx(
      Tooltip,
      {
        id: "user-activity-tip",
        className: "!rounded-lg !bg-gray-900 !p-1 !px-2 !text-sm"
      }
    ),
    /* @__PURE__ */ jsxs("div", { className: "mt-4 flex items-center justify-between", children: [
      /* @__PURE__ */ jsx("span", { className: "text-sm text-gray-400", children: "Number of topics marked as learning, or completed by day" }),
      /* @__PURE__ */ jsxs("div", { className: "flex items-center", children: [
        /* @__PURE__ */ jsx("span", { className: "mr-2 text-xs text-gray-500", children: "Less" }),
        legends.map((legend) => /* @__PURE__ */ jsx(
          "div",
          {
            className: "flex items-center",
            "data-tooltip-id": "user-activity-tip",
            "data-tooltip-content": `${legend.count} Updates`,
            children: /* @__PURE__ */ jsx("div", { className: `h-3 w-3 ${legend.color} mr-1 rounded-sm` })
          },
          legend.count
        )),
        /* @__PURE__ */ jsx("span", { className: "ml-2 text-xs text-gray-500", children: "More" }),
        /* @__PURE__ */ jsx(
          Tooltip,
          {
            id: "user-activity-tip",
            className: "!rounded-lg !bg-gray-900 !p-1 !px-2 !text-sm"
          }
        )
      ] })
    ] })
  ] });
}

function DailyDevIcon(props) {
  return /* @__PURE__ */ jsx("svg", { viewBox: "0 0 32 18", xmlns: "http://www.w3.org/2000/svg", ...props, children: /* @__PURE__ */ jsxs("g", { fill: "currentColor", fillRule: "nonzero", children: [
    /* @__PURE__ */ jsx(
      "path",
      {
        d: "M26.633 8.69l-3.424-3.431 1.711-3.43 5.563 5.575c.709.71.709 1.861 0 2.572l-6.847 6.86c-.709.711-1.858.711-2.567 0a1.821 1.821 0 010-2.571l5.564-5.575z",
        fillOpacity: "0.64"
      }
    ),
    /* @__PURE__ */ jsx("path", { d: "M21.07.536a1.813 1.813 0 012.568 0l1.283 1.286L9.945 16.83c-.709.71-1.858.71-2.567 0l-1.284-1.287L21.071.536zm-6.418 4.717l-2.567 2.572-3.424-3.43-4.28 4.288 3.424 3.43-1.71 3.43L.531 9.97a1.821 1.821 0 010-2.572L7.378.537A1.813 1.813 0 019.945.535l4.707 4.717z" })
  ] }) });
}

function UserPublicProfileHeader(props) {
  const { userDetails } = props;
  const { name, links, publicConfig, avatar, email } = userDetails;
  const { headline, isAvailableForHire, isEmailVisible } = publicConfig;
  return /* @__PURE__ */ jsxs("div", { className: "container flex items-center gap-6 rounded-xl border bg-white p-8", children: [
    /* @__PURE__ */ jsx(
      "img",
      {
        src: avatar ? `${{"BASE_URL": "/", "MODE": "production", "DEV": false, "PROD": true, "SSR": true, "SITE": "https://roadmap.sh/", "ASSETS_PREFIX": undefined}.PUBLIC_AVATAR_BASE_URL}/${avatar}` : "/images/default-avatar.png",
        alt: name,
        className: "h-32 w-32 rounded-full"
      }
    ),
    /* @__PURE__ */ jsxs("div", { children: [
      isAvailableForHire && /* @__PURE__ */ jsx("span", { className: "mb-1 inline-block rounded-md bg-green-100 px-2 py-1 text-sm text-green-700", children: "Available for hire" }),
      /* @__PURE__ */ jsx("h1", { className: "text-3xl font-bold", children: name }),
      /* @__PURE__ */ jsx("p", { className: "mt-1 text-base text-gray-500", children: headline }),
      /* @__PURE__ */ jsxs("div", { className: "mt-3 flex items-center gap-2", children: [
        links?.github && /* @__PURE__ */ jsx(UserLink, { href: links?.github, icon: Github }),
        links?.linkedin && /* @__PURE__ */ jsx(UserLink, { href: links?.linkedin, icon: LinkedinIcon }),
        links?.twitter && /* @__PURE__ */ jsx(UserLink, { href: links?.twitter, icon: Twitter }),
        links?.dailydev && /* @__PURE__ */ jsx(UserLink, { href: links?.dailydev, icon: DailyDevIcon }),
        links?.website && /* @__PURE__ */ jsx(UserLink, { href: links?.website, icon: Globe }),
        isEmailVisible && /* @__PURE__ */ jsx(UserLink, { href: `mailto:${email}`, icon: Mail })
      ] })
    ] })
  ] });
}
function UserLink(props) {
  const { href, icon: Icon } = props;
  return /* @__PURE__ */ jsx(
    "a",
    {
      target: "_blank",
      href,
      className: "flex h-6 w-6 items-center justify-center rounded-md border",
      children: /* @__PURE__ */ jsx(Icon, { className: "h-3.5 w-3.5 shrink-0 stroke-2" })
    }
  );
}

function getPercentage(portion, total) {
  if (total <= 0 || portion <= 0) {
    return "0";
  } else if (portion > total) {
    return "100";
  }
  return (portion / total * 100).toFixed(2);
}

function UserPublicProgresses(props) {
  const {
    roadmaps: roadmapProgresses = [],
    username,
    publicConfig,
    userId
  } = props;
  const { roadmapVisibility, customRoadmapVisibility } = publicConfig || {};
  const roadmaps = roadmapProgresses.filter(
    (roadmap) => !roadmap.isCustomResource
  );
  const customRoadmaps = roadmapProgresses.filter(
    (roadmap) => roadmap.isCustomResource
  );
  return /* @__PURE__ */ jsxs("div", { children: [
    customRoadmapVisibility !== "none" && customRoadmaps?.length > 0 && /* @__PURE__ */ jsxs("div", { className: "mb-5", children: [
      /* @__PURE__ */ jsx("h2", { className: "mb-2 text-xs uppercase tracking-wide text-gray-400", children: "Roadmaps made by me" }),
      /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 gap-1.5 sm:grid-cols-2 md:grid-cols-3", children: customRoadmaps.map((roadmap, counter) => {
        const doneCount = roadmap.done;
        const skippedCount = roadmap.skipped;
        const totalCount = roadmap.total;
        const totalMarked = doneCount + skippedCount;
        getPercentage(totalMarked, totalCount);
        return /* @__PURE__ */ jsx(
          "a",
          {
            target: "_blank",
            href: `/r/${roadmap.roadmapSlug}`,
            className: "rounded-md border bg-white px-3 py-2 text-left text-sm shadow-sm transition-all hover:border-gray-300 hover:bg-gray-50",
            children: roadmap.title
          },
          roadmap.id + counter
        );
      }) })
    ] }),
    roadmapVisibility !== "none" && roadmaps.length > 0 && /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsx("h2", { className: "mb-2 text-xs uppercase tracking-wide text-gray-400", children: "Skills I have mastered" }),
      /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 gap-1.5 sm:grid-cols-2 md:grid-cols-3", children: roadmaps.map((roadmap, counter) => {
        const percentageDone = getPercentage(
          roadmap.done + roadmap.skipped,
          roadmap.total
        );
        return /* @__PURE__ */ jsxs(
          "a",
          {
            target: "_blank",
            href: `/${roadmap.id}?s=${userId}`,
            className: "relative group border-gray-300 flex items-center justify-between rounded-md border bg-white px-3 py-2 text-left text-sm transition-all hover:border-gray-400 overflow-hidden",
            children: [
              /* @__PURE__ */ jsx("span", { className: "flex-grow truncate", children: roadmap.title }),
              /* @__PURE__ */ jsxs("span", { className: "text-xs text-gray-400", children: [
                parseInt(percentageDone, 10),
                "%"
              ] }),
              /* @__PURE__ */ jsx(
                "span",
                {
                  className: "absolute transition-colors left-0 top-0 block h-full cursor-pointer rounded-tl-md bg-black/5 group-hover:bg-black/10",
                  style: {
                    width: `${percentageDone}%`
                  }
                }
              )
            ]
          },
          roadmap.id + counter
        );
      }) })
    ] })
  ] });
}

function UserPublicProfilePage(props) {
  const {
    activity,
    username,
    isOwnProfile,
    profileVisibility,
    _id: userId,
    createdAt
  } = props;
  return /* @__PURE__ */ jsx("div", { className: "bg-gray-200/40 min-h-full flex-grow pt-10 pb-36", children: /* @__PURE__ */ jsxs("div", { className: "container flex flex-col gap-8", children: [
    /* @__PURE__ */ jsx(
      PrivateProfileBanner,
      {
        isOwnProfile,
        profileVisibility
      }
    ),
    /* @__PURE__ */ jsx(UserPublicProfileHeader, { userDetails: props }),
    /* @__PURE__ */ jsx(UserActivityHeatmap, { joinedAt: createdAt, activity }),
    /* @__PURE__ */ jsx(
      UserPublicProgresses,
      {
        username,
        userId,
        roadmaps: props.roadmaps,
        publicConfig: props.publicConfig
      }
    )
  ] }) });
}

const $$Astro = createAstro("https://roadmap.sh/");
const prerender = false;
const $$username = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$username;
  const { username } = Astro2.params;
  if (!username) {
    return Astro2.redirect("/404");
  }
  const userClient = userApi(Astro2);
  const { response: userDetails, error } = await userClient.getPublicProfile(username);
  let errorMessage = "";
  if (error || !userDetails) {
    errorMessage = error?.message || "User not found";
  }
  const origin = Astro2.url.origin;
  const ogImage = `${origin}/og/user/${username}`;
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": `${userDetails?.name || "Unknown"} - Skill Profile at roadmap.sh`, "description": "Check out my skill profile at roadmap.sh", "ogImageUrl": ogImage }, { "default": ($$result2) => renderTemplate`${!errorMessage && renderTemplate`${renderComponent($$result2, "UserPublicProfilePage", UserPublicProfilePage, { ...userDetails, "client:load": true, "client:component-hydration": "load", "client:component-path": "/workspaces/developer-roadmap/src/components/UserPublicProfile/UserPublicProfilePage", "client:component-export": "UserPublicProfilePage" })}`}${errorMessage && renderTemplate`${maybeRenderHead()}<div class="container my-24 flex flex-col"> <picture> <source srcset="https://fonts.gstatic.com/s/e/notoemoji/latest/1f61e/512.webp" type="image/webp"> <img src="https://fonts.gstatic.com/s/e/notoemoji/latest/1f61e/512.gif" alt="😞" width="120" height="120"> </picture> <h2 class="my-2 text-2xl font-bold sm:my-3 sm:text-4xl">
Problem loading user!
</h2> <p class="text-lg"> <span class="rounded-md bg-red-600 px-2 py-1 text-white"> ${errorMessage} </span> </p> </div>`}` })}`;
}, "/workspaces/developer-roadmap/src/pages/u/[username].astro", void 0);

const $$file = "/workspaces/developer-roadmap/src/pages/u/[username].astro";
const $$url = "/u/[username]";

export { $$username as default, $$file as file, prerender, $$url as url };
