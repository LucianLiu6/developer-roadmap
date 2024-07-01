import { l as createComponent, m as renderTemplate, n as maybeRenderHead, u as unescapeHTML } from './astro/server_DJHfVkFr.mjs';
import 'kleur/colors';
import 'clsx';

const html = "";

				const frontmatter = {"jsonUrl":"/jsons/roadmaps/ux-design.json","pdfUrl":"/pdfs/roadmaps/ux-design.pdf","order":12,"briefTitle":"UX Design","briefDescription":"Step by step guide to becoming a UX Designer in 2024","title":"UX Design","description":"Step by step guide to becoming a UX Designer in 2024","isNew":false,"hasTopics":true,"dimensions":{"width":968,"height":2590.38},"schema":{"headline":"UX Design Roadmap","description":"Learn all about UX Design with this interactive step by step guide in 2024. We also have resources and short descriptions attached to the roadmap items so you can get everything you want to learn in one place.","imageUrl":"https://roadmap.sh/roadmaps/ux-design.png","datePublished":"2023-04-26","dateModified":"2023-04-26"},"seo":{"title":"UX Design Roadmap: Step by Step guide to learn UX Design in 2024","description":"Learn how to become a UX Designer in 2024. We also have resources and short descriptions attached to the roadmap items so you can get everything you want to learn in one place.","keywords":["guide to learn ux design","guide to becoming a ux designer","ux designer","ux design skills","guide to ux design","ux design roadmap","ux design skills","ux design skills test","skills for ux design","what is ux design","ux design quiz","ux design interview questions","ux designer roadmap","ux designer roadmap","become a ux designer","ux designer career path","ux designer","modern ux designer"]},"relatedRoadmaps":["design-system","frontend"],"sitemap":{"priority":1,"changefreq":"monthly"},"tags":["roadmap","main-sitemap","role-roadmap"]};
				const file = "/workspaces/developer-roadmap/src/data/roadmaps/ux-design/ux-design.md";
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

const __vite_glob_2_48 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
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

export { __vite_glob_2_48 as _ };
