import { l as createComponent, m as renderTemplate, n as maybeRenderHead, u as unescapeHTML } from './astro/server_DJHfVkFr.mjs';
import 'kleur/colors';
import 'clsx';

const html = "";

				const frontmatter = {"jsonUrl":"/jsons/roadmaps/design-system.json","pdfUrl":"/pdfs/roadmaps/design-system.pdf","order":13,"briefTitle":"Design System","briefDescription":"Step by step guide to building a modern Design System","title":"Design System","description":"Learn how to create a design system with this step by step guide","isNew":false,"hasTopics":true,"note":"**Note:** System Design is a different topic, visit [System Design roadmap](/system-design) for that.","dimensions":{"width":968,"height":2309.7},"schema":{"headline":"Design System Roadmap","description":"Learn how to create a Design System with this interactive step by step guide in 2024. We also have resources and short descriptions attached to the roadmap items so you can get everything you want to learn in one place.","imageUrl":"https://roadmap.sh/roadmaps/design-system.png","datePublished":"2023-01-05","dateModified":"2023-01-19"},"seo":{"title":"How to Create a Design System","description":"Learn how to create a design system or become a design system engineer with this step by step guide with resources.","keywords":["guide to create a design system","guide to becoming a design system engineer","design system engineer","design system engineer","design system skills","guide to design system","design system roadmap","design system skills","design system skills test","skills for design system","what is design system","design system quiz","design system interview questions","design system engineer roadmap","design system engineer roadmap","become a design system engineer","design system engineer career path","design system engineer","modern design system engineer"]},"relatedRoadmaps":["frontend","javascript","react","vue","angular","nodejs"],"sitemap":{"priority":1,"changefreq":"monthly"},"tags":["roadmap","main-sitemap","skill-roadmap"]};
				const file = "/workspaces/developer-roadmap/src/data/roadmaps/design-system/design-system.md";
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

const __vite_glob_2_14 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
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

export { __vite_glob_2_14 as _ };
