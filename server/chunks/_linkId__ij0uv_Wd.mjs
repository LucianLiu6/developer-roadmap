/* empty css                             */
import { l as createComponent, m as renderTemplate, n as maybeRenderHead, u as unescapeHTML, k as createAstro, p as renderComponent, o as addAttribute } from './astro/server_DJHfVkFr.mjs';
import 'kleur/colors';
import { $ as $$SkeletonLayout } from './SkeletonLayout_BlHjE0q7.mjs';
import 'clsx';

const html = "";

				const frontmatter = {"byte-byte-go":"https://blog.bytebytego.com/archive","speedup-js":"https://marvinh.dev/blog/speeding-up-javascript-ecosystem/","23-min-ts":"https://www.youtube.com/watch?v=YmxwicpROps","bun-vs-node":"https://www.youtube.com/watch?v=qCX8rw4qOSA","aws-2023":"https://cs.fyi/guide/how-to-learn-aws/","db-playground":"https://github.com/kamranahmedse/db-playground"};
				const file = "/workspaces/developer-roadmap/src/data/link-groups/1.md";
				const url = undefined;
				function rawContent() {
					return "";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

const __vite_glob_0_0 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	Content,
	compiledContent,
	default: Content,
	file,
	frontmatter,
	getHeadings,
	rawContent,
	url
}, Symbol.toStringTag, { value: 'Module' }));

function linkGroupPathToId(filePath) {
  const fileName = filePath.split("/").pop() || "";
  return fileName.replace(".md", "");
}
async function getAllLinkGroups() {
  const linkGroups = await /* #__PURE__ */ Object.assign({"/src/data/link-groups/1.md": __vite_glob_0_0




});
  return Object.values(linkGroups).map((linkGroupFile) => ({
    ...linkGroupFile,
    id: linkGroupPathToId(linkGroupFile.file)
  }));
}

const $$Astro = createAstro("https://roadmap.sh/");
async function getStaticPaths() {
  const linkGroups = await getAllLinkGroups();
  return linkGroups.flatMap((linkGroup) => {
    const linkGroupLinks = linkGroup.frontmatter;
    return Object.keys(linkGroupLinks).map((slug) => {
      return {
        params: {
          linkGroupId: linkGroup.id,
          linkId: slug
        },
        props: {
          linkGroup
        }
      };
    });
  });
}
const $$linkId = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$linkId;
  const { linkId } = Astro2.params;
  const { linkGroup } = Astro2.props;
  const fullUrl = linkGroup.frontmatter[linkId];
  return renderTemplate`${renderComponent($$result, "SkeletonLayout", $$SkeletonLayout, { "title": "Redirecting..", "noIndex": true, "redirectUrl": fullUrl }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="p-8"> <h2 class="text-xl font-bold">Redirecting ..</h2> <p>Click the link below if you are not redirected automatically.</p> <p><a${addAttribute(fullUrl, "href")} class="text-blue-700 underline">${fullUrl}</a></p> </div> ` })}`;
}, "/workspaces/developer-roadmap/src/pages/g/[linkGroupId]/[linkId].astro", void 0);

const $$file = "/workspaces/developer-roadmap/src/pages/g/[linkGroupId]/[linkId].astro";
const $$url = "/g/[linkGroupId]/[linkId]";

export { $$linkId as default, $$file as file, getStaticPaths, $$url as url };
