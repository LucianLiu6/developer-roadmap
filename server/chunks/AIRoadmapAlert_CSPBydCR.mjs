import { jsxs, jsx } from 'react/jsx-runtime';
import { Wand, Telescope, BadgeCheck } from 'lucide-react';

function AIRoadmapAlert(props) {
  const { isListing = false } = props;
  return /* @__PURE__ */ jsxs("div", { className: "mb-3 w-full rounded-xl bg-yellow-100 px-4 py-3 text-yellow-800", children: [
    /* @__PURE__ */ jsxs("h2", { className: "flex items-center text-base font-semibold text-yellow-800 sm:text-lg", children: [
      "AI Generated Roadmap",
      isListing ? "s" : "",
      " ",
      /* @__PURE__ */ jsx("span", { className: "ml-1.5 rounded-md border border-yellow-500 bg-yellow-200 px-1.5 text-xs uppercase tracking-wide text-yellow-800", children: "Beta" })
    ] }),
    /* @__PURE__ */ jsxs("p", { className: "mb-2 mt-1", children: [
      isListing ? "These are AI generated roadmaps and are not verified by" : "This is an AI generated roadmap and is not verified by",
      " ",
      /* @__PURE__ */ jsx("span", { className: "font-semibold", children: "roadmap.sh" }),
      ". We are currently in beta and working hard to improve the quality of the generated roadmaps."
    ] }),
    /* @__PURE__ */ jsxs("p", { className: "mb-1.5 mt-2 flex flex-col gap-2 text-sm sm:flex-row", children: [
      isListing ? /* @__PURE__ */ jsxs(
        "a",
        {
          href: "/ai",
          className: "flex items-center gap-1.5 rounded-md border border-yellow-600 px-2 py-1 text-yellow-700 transition-colors hover:bg-yellow-300 hover:text-yellow-800",
          children: [
            /* @__PURE__ */ jsx(Wand, { size: 15 }),
            "Create your own Roadmap with AI"
          ]
        }
      ) : /* @__PURE__ */ jsxs(
        "a",
        {
          href: "/ai/explore",
          className: "flex items-center gap-1.5 rounded-md border border-yellow-600 px-2 py-1 text-yellow-700 transition-colors hover:bg-yellow-300 hover:text-yellow-800",
          children: [
            /* @__PURE__ */ jsx(Telescope, { size: 15 }),
            "Explore other AI Roadmaps"
          ]
        }
      ),
      /* @__PURE__ */ jsxs(
        "a",
        {
          href: "/roadmaps",
          className: "flex items-center gap-1.5 rounded-md border border-yellow-600 bg-yellow-200 px-2 py-1 text-yellow-800 transition-colors hover:bg-yellow-300",
          children: [
            /* @__PURE__ */ jsx(BadgeCheck, { size: 15 }),
            "Visit Official Roadmaps"
          ]
        }
      )
    ] })
  ] });
}

export { AIRoadmapAlert as A };
