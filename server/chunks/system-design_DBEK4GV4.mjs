import { l as createComponent, m as renderTemplate, n as maybeRenderHead, u as unescapeHTML } from './astro/server_DJHfVkFr.mjs';
import 'kleur/colors';
import 'clsx';

const html = "";

				const frontmatter = {"jsonUrl":"/jsons/roadmaps/system-design.json","pdfUrl":"/pdfs/roadmaps/system-design.pdf","order":8,"briefTitle":"System Design","briefDescription":"Guide to learn system Design","title":"System Design","description":"Everything you need to know about designing large scale systems.","isNew":false,"hasTopics":true,"dimensions":{"width":968,"height":2848.5},"schema":{"headline":"System Design Roadmap","description":"Learn System Design with this interactive step by step guide in 2024. We also have resources and short descriptions attached to the roadmap items so you can get everything you want to learn in one place.","imageUrl":"https://roadmap.sh/roadmaps/system-design.png","datePublished":"2023-01-17","dateModified":"2023-01-17"},"seo":{"title":"System Design Roadmap","description":"Learn system design with this step by step guide and resources.","keywords":["guide to learn system design","system design roadmap","distributed systems roadmap","modern system design roadmap","system design roadmap","scalable system roadmap","system design patterns roadmap","system design roadmap","application architectures","system design guide"]},"relatedRoadmaps":["backend","software-architect","devops","python","java","nodejs","golang"],"sitemap":{"priority":1,"changefreq":"monthly"},"tags":["roadmap","main-sitemap","skill-roadmap"]};
				const file = "/workspaces/developer-roadmap/src/data/roadmaps/system-design/system-design.md";
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

const __vite_glob_2_44 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
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

export { __vite_glob_2_44 as _ };
