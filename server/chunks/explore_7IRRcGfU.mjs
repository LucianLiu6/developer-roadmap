/* empty css                             */
import { l as createComponent, m as renderTemplate, p as renderComponent } from './astro/server_DJHfVkFr.mjs';
import 'kleur/colors';
import { jsxs, jsx, Fragment } from 'react/jsx-runtime';
import { useState, useRef, useMemo, useEffect } from 'react';
import { u as useToast } from './use-toast_BupOxZu-.mjs';
import { u as useOutsideClick, c as cn, S as Spinner, h as httpGet, a as $$BaseLayout } from './BaseLayout_CyQdLUYI.mjs';
import { A as AIRoadmapAlert } from './AIRoadmapAlert_CSPBydCR.mjs';
import { ChevronDown, Check, MoreHorizontal, Wand2, Map, Eye, Search } from 'lucide-react';
import { g as getUrlParams, s as setUrlParams, d as deleteUrlParam } from './browser_DmlLShyb.mjs';
import { g as getRelativeTimeString } from './date_DLWWd5g0.mjs';
import { u as useDebounceValue } from './use-debounce_BdAoSD5T.mjs';

const sortingLabels = [
  {
    label: "Most Viewed",
    value: "viewCount"
  },
  {
    label: "Newest",
    value: "createdAt"
  },
  {
    label: "Oldest",
    value: "-createdAt"
  }
];
function ExploreAISorting(props) {
  const { sortBy, onSortChange } = props;
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const selectedValue = sortingLabels.find((item) => item.value === sortBy);
  useOutsideClick(dropdownRef, () => {
    setIsOpen(false);
  });
  return /* @__PURE__ */ jsxs(
    "div",
    {
      className: "min-auto relative flex flex-shrink-0 sm:min-w-[140px]",
      ref: dropdownRef,
      children: [
        /* @__PURE__ */ jsxs(
          "button",
          {
            className: "py-15 flex w-full items-center justify-between gap-2 rounded-md border px-2 text-sm",
            onClick: () => setIsOpen(!isOpen),
            children: [
              /* @__PURE__ */ jsx("span", { children: selectedValue?.label }),
              /* @__PURE__ */ jsx("span", { children: /* @__PURE__ */ jsx(ChevronDown, { className: "ml-4 h-3.5 w-3.5" }) })
            ]
          }
        ),
        isOpen && /* @__PURE__ */ jsx("div", { className: "absolute right-0 top-10 z-10 min-w-40 overflow-hidden rounded-md border border-gray-200 bg-white shadow-lg", children: sortingLabels.map((item) => /* @__PURE__ */ jsxs(
          "button",
          {
            className: "flex w-full items-center gap-2 px-4 py-2 text-sm hover:bg-gray-100",
            onClick: () => {
              onSortChange(item.value);
              setIsOpen(false);
            },
            children: [
              /* @__PURE__ */ jsx("span", { children: item.label }),
              item.value === sortBy && /* @__PURE__ */ jsx(Check, { className: "ml-auto h-4 w-4" })
            ]
          },
          item.value
        )) })
      ]
    }
  );
}

function usePagination(currentPage, totalPages, maxPagesToShow) {
  return useMemo(() => {
    const pages = [];
    const half = Math.floor(maxPagesToShow / 2);
    const start = Math.max(1, currentPage - half);
    const end = Math.min(totalPages, currentPage + half);
    if (start > 1) {
      pages.push(1);
    }
    if (start > 2) {
      pages.push("more");
    }
    for (let i = start; i <= end; i++) {
      pages.push(i);
    }
    if (end < totalPages - 1) {
      pages.push("more");
    }
    if (end < totalPages) {
      pages.push(totalPages);
    }
    return pages;
  }, [currentPage, totalPages, maxPagesToShow]);
}

const formatter = Intl.NumberFormat("en-US", {
  useGrouping: true
});
function formatCommaNumber(number) {
  return formatter.format(number);
}

function Pagination(props) {
  const {
    variant = "default",
    onPageChange,
    totalCount,
    totalPages,
    currPage,
    perPage,
    isDisabled = false
  } = props;
  if (!totalPages || totalPages === 1) {
    return null;
  }
  const pages = usePagination(currPage, totalPages, 5);
  return /* @__PURE__ */ jsxs(
    "div",
    {
      className: cn("flex items-center", {
        "justify-between": variant === "default",
        "justify-start": variant === "minimal"
      }),
      children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-1 text-xs font-medium", children: [
          /* @__PURE__ */ jsx(
            "button",
            {
              onClick: () => {
                onPageChange(currPage - 1);
              },
              disabled: currPage === 1 || isDisabled,
              className: "rounded-md border px-2 py-1 hover:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-40",
              children: "←"
            }
          ),
          variant === "default" && /* @__PURE__ */ jsx(Fragment, { children: pages.map((page, counter) => {
            if (page === "more") {
              return /* @__PURE__ */ jsx(
                "span",
                {
                  className: "hidden sm:block",
                  children: /* @__PURE__ */ jsx(MoreHorizontal, { className: "text-gray-400", size: 14 })
                },
                `page-${page}-${counter}`
              );
            }
            return /* @__PURE__ */ jsx(
              "button",
              {
                disabled: isDisabled,
                onClick: () => {
                  onPageChange(page);
                },
                className: cn(
                  "hidden rounded-md border px-2 py-1 hover:bg-gray-100 sm:block",
                  {
                    "border-black text-black": currPage === page
                  }
                ),
                children: page
              },
              `page-${page}`
            );
          }) }),
          /* @__PURE__ */ jsx(
            "button",
            {
              disabled: currPage === totalPages || isDisabled,
              className: "rounded-md border px-2 py-1 hover:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-40",
              onClick: () => {
                onPageChange(currPage + 1);
              },
              children: "→"
            }
          )
        ] }),
        /* @__PURE__ */ jsxs("span", { className: "ml-2 hidden text-sm font-normal text-gray-500 sm:block", children: [
          "Showing ",
          formatCommaNumber((currPage - 1) * perPage),
          " to",
          " ",
          formatCommaNumber((currPage - 1) * perPage + perPage),
          " of",
          " ",
          formatCommaNumber(totalCount),
          " entries"
        ] })
      ]
    }
  );
}

function LoadingRoadmaps() {
  return /* @__PURE__ */ jsx("ul", { className: "grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3", children: new Array(21).fill(0).map((_, index) => /* @__PURE__ */ jsx(
    "li",
    {
      className: "h-[95px] animate-pulse rounded-md border bg-gray-100"
    },
    index
  )) });
}

function EmptyRoadmaps() {
  return /* @__PURE__ */ jsxs("div", { className: "flex min-h-[250px] flex-col items-center justify-center rounded-xl border px-5 py-3 sm:px-0 sm:py-20", children: [
    /* @__PURE__ */ jsx(Wand2, { className: "mb-4 h-8 w-8 opacity-10 sm:h-14 sm:w-14" }),
    /* @__PURE__ */ jsx("h2", { className: "mb-1 text-lg font-semibold sm:text-xl", children: "No Roadmaps Found" }),
    /* @__PURE__ */ jsx("p", { className: "mb-3 text-balance text-center text-xs text-gray-800 sm:text-sm", children: "Try searching for something else or create a new roadmap with AI." }),
    /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center gap-1 sm:flex-row sm:gap-1.5", children: [
      /* @__PURE__ */ jsxs(
        "a",
        {
          href: "/ai",
          className: "flex w-full items-center gap-1.5 rounded-md bg-gray-900 px-3 py-1.5 text-xs text-white sm:w-auto sm:text-sm",
          children: [
            /* @__PURE__ */ jsx(Wand2, { className: "h-4 w-4" }),
            "Create one with AI"
          ]
        }
      ),
      /* @__PURE__ */ jsxs(
        "a",
        {
          href: "/roadmaps",
          className: "flex w-full items-center gap-1.5 rounded-md bg-yellow-400 px-3 py-1.5 text-xs text-black hover:bg-yellow-500 sm:w-auto sm:text-sm",
          children: [
            /* @__PURE__ */ jsx(Map, { className: "h-4 w-4" }),
            "Visit Official Roadmaps"
          ]
        }
      )
    ] })
  ] });
}

function AIRoadmapsList(props) {
  const { response } = props;
  if (!response) {
    return null;
  }
  const roadmaps = response.data || [];
  return /* @__PURE__ */ jsx("ul", { className: "mb-4 grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3", children: roadmaps.map((roadmap) => {
    const roadmapLink = `/ai/${roadmap.slug}`;
    return /* @__PURE__ */ jsxs(
      "a",
      {
        href: roadmapLink,
        className: "flex min-h-[95px] flex-col rounded-md border transition-colors hover:bg-gray-100",
        target: "_blank",
        children: [
          /* @__PURE__ */ jsx("h2", { className: "flex-grow px-2.5 py-2.5 text-base font-medium leading-tight", children: roadmap.title }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between gap-2 px-2.5 py-2", children: [
            /* @__PURE__ */ jsxs("span", { className: "flex items-center gap-1.5 text-xs text-gray-400", children: [
              /* @__PURE__ */ jsx(Eye, { size: 15, className: "inline-block" }),
              Intl.NumberFormat("en-US", {
                notation: "compact"
              }).format(roadmap.viewCount),
              " ",
              "views"
            ] }),
            /* @__PURE__ */ jsx("span", { className: "flex items-center gap-1.5 text-xs text-gray-400", children: getRelativeTimeString(String(roadmap?.createdAt)) })
          ] })
        ]
      },
      roadmap._id
    );
  }) });
}

function ExploreAISearch(props) {
  const { onSubmit, isLoading = false, total, value: defaultValue } = props;
  const [term, setTerm] = useState(defaultValue);
  const debouncedTerm = useDebounceValue(term, 500);
  useEffect(() => {
    setTerm(defaultValue);
  }, [defaultValue]);
  useEffect(() => {
    if (debouncedTerm && debouncedTerm.length < 3) {
      return;
    }
    if (debouncedTerm === defaultValue) {
      return;
    }
    onSubmit(debouncedTerm);
  }, [debouncedTerm]);
  return /* @__PURE__ */ jsxs("div", { className: "relative flex w-full items-center gap-3", children: [
    /* @__PURE__ */ jsxs("div", { className: "relative flex w-full max-w-[310px] items-center", children: [
      /* @__PURE__ */ jsx(
        "label",
        {
          className: "absolute left-3 flex h-full items-center text-gray-500",
          htmlFor: "search",
          children: /* @__PURE__ */ jsx(Search, { className: "h-4 w-4" })
        }
      ),
      /* @__PURE__ */ jsx(
        "input",
        {
          id: "search",
          name: "search",
          type: "text",
          placeholder: "Type 3 or more characters to search...",
          className: "w-full rounded-md border border-gray-200 px-3 py-2 pl-9 text-sm transition-colors focus:border-black focus:outline-none",
          value: term,
          onChange: (e) => setTerm(e.target.value)
        }
      ),
      isLoading && /* @__PURE__ */ jsx("span", { className: "absolute right-3 top-0 flex h-full items-center text-gray-500", children: /* @__PURE__ */ jsx(Spinner, { isDualRing: false, className: `h-3 w-3` }) })
    ] }),
    total > 0 && /* @__PURE__ */ jsxs("p", { className: "flex-shrink-0 text-sm text-gray-500 hidden sm:block", children: [
      Intl.NumberFormat("en-US", {
        notation: "compact"
      }).format(total),
      " ",
      "results found"
    ] })
  ] });
}

function ExploreAIRoadmap() {
  const toast = useToast();
  const [pageState, setPageState] = useState({
    searchTerm: "",
    sortBy: "createdAt",
    currentPage: 0
  });
  useEffect(() => {
    const queryParams = getUrlParams();
    setPageState({
      searchTerm: queryParams.q || "",
      sortBy: queryParams.s || "createdAt",
      currentPage: +(queryParams.p || "1")
    });
  }, []);
  useEffect(() => {
    setIsLoading(true);
    if (!pageState.currentPage) {
      return;
    }
    if (pageState.currentPage !== 1 || pageState.searchTerm !== "" || pageState.sortBy !== "createdAt") {
      setUrlParams({
        q: pageState.searchTerm,
        s: pageState.sortBy,
        p: String(pageState.currentPage)
      });
    } else {
      deleteUrlParam("q");
      deleteUrlParam("s");
      deleteUrlParam("p");
    }
    loadAIRoadmaps(
      pageState.currentPage,
      pageState.searchTerm,
      pageState.sortBy
    ).finally(() => {
      setIsLoading(false);
    });
  }, [pageState]);
  const [isLoading, setIsLoading] = useState(true);
  const [roadmapsResponse, setRoadmapsResponse] = useState(null);
  const loadAIRoadmaps = async (currPage = 1, searchTerm = "", sortBy = "createdAt") => {
    const { response, error } = await httpGet(
      `${{"BASE_URL": "/", "MODE": "production", "DEV": false, "PROD": true, "SSR": true, "SITE": "https://roadmap.sh/", "ASSETS_PREFIX": undefined}.PUBLIC_API_URL}/v1-list-ai-roadmaps`,
      {
        currPage,
        ...searchTerm && { term: searchTerm },
        ...sortBy && { sortBy }
      }
    );
    if (error || !response) {
      toast.error(error?.message || "Something went wrong");
      return;
    }
    setRoadmapsResponse(response);
  };
  const roadmaps = roadmapsResponse?.data || [];
  const loadingIndicator = isLoading && /* @__PURE__ */ jsx(LoadingRoadmaps, {});
  const emptyRoadmaps = !isLoading && roadmaps.length === 0 && /* @__PURE__ */ jsx(EmptyRoadmaps, {});
  const roadmapsList = !isLoading && roadmaps.length > 0 && /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(AIRoadmapsList, { response: roadmapsResponse }),
    /* @__PURE__ */ jsx(
      Pagination,
      {
        currPage: roadmapsResponse?.currPage || 1,
        totalPages: roadmapsResponse?.totalPages || 1,
        perPage: roadmapsResponse?.perPage || 0,
        isDisabled: isLoading,
        totalCount: roadmapsResponse?.totalCount || 0,
        onPageChange: (page) => {
          setPageState({
            ...pageState,
            currentPage: page
          });
        }
      }
    )
  ] });
  return /* @__PURE__ */ jsxs("section", { className: "container mx-auto py-3 sm:py-6", children: [
    /* @__PURE__ */ jsx(AIRoadmapAlert, { isListing: true }),
    /* @__PURE__ */ jsxs("div", { className: "my-3.5 flex items-stretch justify-between gap-2.5", children: [
      /* @__PURE__ */ jsx(
        ExploreAISearch,
        {
          total: roadmapsResponse?.totalCount || 0,
          isLoading,
          value: pageState.searchTerm,
          onSubmit: (term) => {
            setPageState({
              ...pageState,
              searchTerm: term,
              currentPage: 1
            });
          }
        }
      ),
      /* @__PURE__ */ jsx(
        ExploreAISorting,
        {
          sortBy: pageState.sortBy,
          onSortChange: (sortBy) => {
            setPageState({
              ...pageState,
              sortBy,
              currentPage: 1
            });
          }
        }
      )
    ] }),
    loadingIndicator,
    emptyRoadmaps,
    roadmapsList
  ] });
}

const $$Explore = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Explore AI Generated Roadmaps" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "ExploreAIRoadmap", ExploreAIRoadmap, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/workspaces/developer-roadmap/src/components/ExploreAIRoadmap/ExploreAIRoadmap", "client:component-export": "ExploreAIRoadmap" })} ` })}`;
}, "/workspaces/developer-roadmap/src/pages/ai/explore.astro", void 0);

const $$file = "/workspaces/developer-roadmap/src/pages/ai/explore.astro";
const $$url = "/ai/explore";

export { $$Explore as default, $$file as file, $$url as url };
