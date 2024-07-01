import { jsx, jsxs, Fragment } from 'react/jsx-runtime';
import { useState, useEffect, useRef } from 'react';
import { c as cn, u as useOutsideClick, S as Spinner, h as httpGet } from './BaseLayout_CyQdLUYI.mjs';
import { u as useAuth } from './use-auth_B35AaiBa.mjs';
import { atom, computed } from 'nanostores';
import { useStore } from '@nanostores/react';
import { u as useToast } from './use-toast_BupOxZu-.mjs';

const $teamList = atom([]);
const $currentTeam = atom();
const $currentTeamRole = computed($currentTeam, (team) => team?.role);
const $isCurrentTeamAdmin = computed(
  $currentTeamRole,
  (role) => ["admin"].includes(role)
);
computed(
  $currentTeamRole,
  (role) => ["admin", "manager"].includes(role)
);

function useTeamId() {
  const [teamId, setTeamId] = useState(null);
  useEffect(() => {
    const searchTeamId = new URLSearchParams(window.location.search).get("t") || null;
    setTeamId(searchTeamId);
  }, []);
  return { teamId };
}

function DropdownIcon(props) {
  const { className } = props;
  return /* @__PURE__ */ jsx(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      fill: "none",
      viewBox: "0 0 24 24",
      strokeWidth: "1.5",
      stroke: "currentColor",
      className: cn("h-5 w-5", className),
      children: /* @__PURE__ */ jsx(
        "path",
        {
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M19.5 8.25l-7.5 7.5-7.5-7.5"
        }
      )
    }
  );
}

function TeamDropdown() {
  const user = useAuth();
  const { teamId } = useTeamId();
  const [shouldShowTeamsIndicator, setShouldShowTeamsIndicator] = useState(false);
  useEffect(() => {
    const viewedTeamsCount = localStorage.getItem("viewedTeamsCount");
    const viewedTeamsCountNumber = parseInt(viewedTeamsCount || "0", 10);
    const shouldShowTeamIndicator = viewedTeamsCountNumber < 5;
    setShouldShowTeamsIndicator(shouldShowTeamIndicator);
    if (shouldShowTeamIndicator) {
      localStorage.setItem(
        "viewedTeamsCount",
        (viewedTeamsCountNumber + 1).toString()
      );
    }
  }, []);
  const teamList = useStore($teamList);
  const currentTeam = useStore($currentTeam);
  const toast = useToast();
  const dropdownRef = useRef(null);
  const [isLoading, setIsLoading] = useState(true);
  const [showDropdown, setShowDropdown] = useState(false);
  const selectedAvatar = currentTeam ? currentTeam.avatar : user?.avatar;
  const selectedLabel = currentTeam ? currentTeam.name : user?.name;
  useOutsideClick(dropdownRef, () => {
    setShowDropdown(false);
  });
  async function getAllTeams() {
    const { response, error } = await httpGet(
      `${{"BASE_URL": "/", "MODE": "production", "DEV": false, "PROD": true, "SSR": true, "SITE": "https://roadmap.sh/", "ASSETS_PREFIX": undefined}.PUBLIC_API_URL}/v1-get-user-teams`
    );
    if (error || !response) {
      toast.error(error?.message || "Something went wrong");
      return;
    }
    $teamList.set(response);
  }
  useEffect(() => {
    if (!teamId || !teamList) {
      return;
    }
    $currentTeam.set(teamList.find((team) => team._id === teamId));
  }, [teamList, teamId]);
  useEffect(() => {
    setIsLoading(true);
    getAllTeams().finally(() => {
      setIsLoading(false);
    });
  }, []);
  const pendingTeamIds = teamList.filter((team) => team.status === "invited").map((team) => team._id);
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs("div", { className: "relative mr-2", children: [
      /* @__PURE__ */ jsxs("span", { className: "mb-2 flex items-center justify-between text-xs uppercase text-gray-400", children: [
        /* @__PURE__ */ jsx("span", { children: "Choose Team" }),
        shouldShowTeamsIndicator && /* @__PURE__ */ jsx("span", { className: "mr-1 inline-flex h-1 w-1 items-center justify-center font-medium text-blue-300", children: /* @__PURE__ */ jsxs("span", { className: "relative flex items-center", children: [
          /* @__PURE__ */ jsx("span", { className: "relative rounded-full bg-gray-200 p-1 text-xs" }),
          /* @__PURE__ */ jsx("span", { className: "absolute bottom-0 left-0 right-0 top-0 animate-ping rounded-full bg-gray-400 p-1 text-xs" })
        ] }) })
      ] }),
      /* @__PURE__ */ jsxs(
        "button",
        {
          className: "relative flex w-full cursor-pointer items-center justify-between rounded border p-2 text-sm hover:bg-gray-100",
          onClick: () => setShowDropdown(!showDropdown),
          children: [
            pendingTeamIds.length > 0 && /* @__PURE__ */ jsx("span", { className: "absolute -left-1.5 -top-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-xs font-medium text-white", children: pendingTeamIds.length }),
            /* @__PURE__ */ jsxs("div", { className: "mr-1.5 inline-grid grid-cols-[16px_auto] items-center gap-1.5", children: [
              isLoading && /* @__PURE__ */ jsx(Spinner, { className: "h-4 w-4", isDualRing: false }),
              !isLoading && /* @__PURE__ */ jsx(
                "img",
                {
                  src: selectedAvatar ? `${{"BASE_URL": "/", "MODE": "production", "DEV": false, "PROD": true, "SSR": true, "SITE": "https://roadmap.sh/", "ASSETS_PREFIX": undefined}.PUBLIC_AVATAR_BASE_URL}/${selectedAvatar}` : "/images/default-avatar.png",
                  alt: "",
                  className: "h-4 w-4 rounded-full object-cover"
                }
              ),
              /* @__PURE__ */ jsxs("span", { className: "truncate", children: [
                !isLoading && selectedLabel,
                isLoading && "Loading .."
              ] })
            ] }),
            /* @__PURE__ */ jsx(DropdownIcon, { className: "h-4 w-4" })
          ]
        }
      ),
      showDropdown && /* @__PURE__ */ jsxs(
        "div",
        {
          ref: dropdownRef,
          className: "absolute top-full z-50 mt-2 w-full rounded-md bg-slate-800 px-2 py-2 text-white shadow-md",
          children: [
            /* @__PURE__ */ jsxs("ul", { children: [
              /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(
                "a",
                {
                  className: "flex w-full cursor-pointer items-center gap-2 truncate rounded p-2 text-sm font-medium text-slate-100 hover:bg-slate-700",
                  href: "/account",
                  children: /* @__PURE__ */ jsx("span", { className: "truncate", children: "Personal Account" })
                }
              ) }),
              teamList.map((team) => {
                let pageLink = "";
                if (team.status === "invited") {
                  pageLink = `/respond-invite?i=${team.memberId}`;
                } else if (team.status === "joined") {
                  pageLink = `/team/activity?t=${team._id}`;
                }
                return /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs(
                  "a",
                  {
                    className: "flex w-full cursor-pointer items-center gap-2 rounded p-2 text-sm font-medium text-slate-100 hover:bg-slate-700",
                    href: `${pageLink}`,
                    children: [
                      /* @__PURE__ */ jsx("span", { className: "min-w-0 flex-grow truncate", children: team.name }),
                      pendingTeamIds.includes(team._id) && /* @__PURE__ */ jsx("span", { className: "flex rounded-md bg-red-500 px-2 text-xs text-white", children: "Invite" })
                    ]
                  }
                ) }, team?._id);
              })
            ] }),
            /* @__PURE__ */ jsxs(
              "a",
              {
                className: "mt-2 flex w-full cursor-pointer items-center justify-center gap-2 rounded bg-gray-100 p-2 text-sm font-medium text-slate-800 hover:opacity-90",
                href: "/team/new",
                children: [
                  /* @__PURE__ */ jsx("span", { children: "+" }),
                  /* @__PURE__ */ jsx("span", { children: "New Team" })
                ]
              }
            )
          ]
        }
      )
    ] }),
    /* @__PURE__ */ jsx("hr", { className: "my-4" })
  ] });
}

export { $currentTeam as $, TeamDropdown as T, $isCurrentTeamAdmin as a, useTeamId as u };
