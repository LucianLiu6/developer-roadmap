/* empty css                             */
import { k as createAstro, l as createComponent } from './astro/server_DJHfVkFr.mjs';
import 'kleur/colors';
import 'clsx';

const $$Astro = createAstro("https://roadmap.sh/");
const prerender = false;
const $$X = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$X;
  const twitterLink = "https://twitter.com/roadmapsh";
  return Astro2.redirect(twitterLink);
}, "/workspaces/developer-roadmap/src/pages/x.astro", void 0);

const $$file = "/workspaces/developer-roadmap/src/pages/x.astro";
const $$url = "/x";

export { $$X as default, $$file as file, prerender, $$url as url };
