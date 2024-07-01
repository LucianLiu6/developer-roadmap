/* empty css                             */
import { k as createAstro, l as createComponent } from './astro/server_DJHfVkFr.mjs';
import 'kleur/colors';
import 'clsx';

const $$Astro = createAstro("https://roadmap.sh/");
const prerender = false;
const $$Twitter = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Twitter;
  const twitterLink = "https://twitter.com/roadmapsh";
  return Astro2.redirect(twitterLink);
}, "/workspaces/developer-roadmap/src/pages/twitter.astro", void 0);

const $$file = "/workspaces/developer-roadmap/src/pages/twitter.astro";
const $$url = "/twitter";

export { $$Twitter as default, $$file as file, prerender, $$url as url };
