/* empty css                             */
import { k as createAstro, l as createComponent } from './astro/server_DJHfVkFr.mjs';
import 'kleur/colors';
import 'clsx';

const $$Astro = createAstro("https://roadmap.sh/");
const prerender = false;
const $$Github = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Github;
  const githubLink = "https://github.com/kamranahmedse/developer-roadmap";
  return Astro2.redirect(githubLink);
}, "/workspaces/developer-roadmap/src/pages/github.astro", void 0);

const $$file = "/workspaces/developer-roadmap/src/pages/github.astro";
const $$url = "/github";

export { $$Github as default, $$file as file, prerender, $$url as url };
