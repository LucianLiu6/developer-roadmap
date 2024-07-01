/* empty css                             */
import { k as createAstro, l as createComponent, m as renderTemplate, p as renderComponent } from './astro/server_DJHfVkFr.mjs';
import 'kleur/colors';
import { a as api } from './api_DzV6uVim.mjs';
import { a as $$BaseLayout } from './BaseLayout_CyQdLUYI.mjs';
import { G as GenerateRoadmap } from './GenerateRoadmap_e_mfFHjh.mjs';

function aiRoadmapApi(context) {
  return {
    getAIRoadmapBySlug: async function(roadmapSlug) {
      return api(context).get(
        `${{"BASE_URL": "/", "MODE": "production", "DEV": false, "PROD": true, "SSR": true, "SITE": "https://roadmap.sh/", "ASSETS_PREFIX": undefined}.PUBLIC_API_URL}/v1-get-ai-roadmap-by-slug/${roadmapSlug}`
      );
    }
  };
}

const $$Astro = createAstro("https://roadmap.sh/");
const prerender = false;
const $$aiRoadmapSlug = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$aiRoadmapSlug;
  const { aiRoadmapSlug } = Astro2.params;
  if (!aiRoadmapSlug) {
    return Astro2.redirect("/404");
  }
  const aiRoadmapClient = aiRoadmapApi(Astro2);
  const { response: roadmap, error } = await aiRoadmapClient.getAIRoadmapBySlug(aiRoadmapSlug);
  if (error || !roadmap) {
    error?.message || "Error loading AI Roadmap";
  }
  const title = roadmap?.title || "Roadmap AI";
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": title }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "GenerateRoadmap", GenerateRoadmap, { "roadmapId": roadmap?.id, "isAuthenticatedUser": roadmap?.isAuthenticatedUser, "client:load": true, "client:component-hydration": "load", "client:component-path": "/workspaces/developer-roadmap/src/components/GenerateRoadmap/GenerateRoadmap", "client:component-export": "GenerateRoadmap" })} ` })}`;
}, "/workspaces/developer-roadmap/src/pages/ai/[aiRoadmapSlug].astro", void 0);

const $$file = "/workspaces/developer-roadmap/src/pages/ai/[aiRoadmapSlug].astro";
const $$url = "/ai/[aiRoadmapSlug]";

export { $$aiRoadmapSlug as default, $$file as file, prerender, $$url as url };
