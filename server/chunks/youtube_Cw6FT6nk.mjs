/* empty css                             */
import { k as createAstro, l as createComponent } from './astro/server_DJHfVkFr.mjs';
import 'kleur/colors';
import 'clsx';

const $$Astro = createAstro("https://roadmap.sh/");
const prerender = false;
const $$Youtube = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Youtube;
  const youtubeLink = "https://youtube.com/@roadmapsh";
  return Astro2.redirect(youtubeLink);
}, "/workspaces/developer-roadmap/src/pages/youtube.astro", void 0);

const $$file = "/workspaces/developer-roadmap/src/pages/youtube.astro";
const $$url = "/youtube";

export { $$Youtube as default, $$file as file, prerender, $$url as url };
