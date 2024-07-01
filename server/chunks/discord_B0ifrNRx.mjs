/* empty css                             */
import { k as createAstro, l as createComponent } from './astro/server_DJHfVkFr.mjs';
import 'kleur/colors';
import 'clsx';

const $$Astro = createAstro("https://roadmap.sh/");
const prerender = false;
const $$Discord = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Discord;
  const discordLink = "https://discord.gg/cJpEt5Qbwa";
  return Astro2.redirect(discordLink);
}, "/workspaces/developer-roadmap/src/pages/discord.astro", void 0);

const $$file = "/workspaces/developer-roadmap/src/pages/discord.astro";
const $$url = "/discord";

export { $$Discord as default, $$file as file, prerender, $$url as url };
