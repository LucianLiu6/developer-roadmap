import { l as createComponent, m as renderTemplate, n as maybeRenderHead, u as unescapeHTML } from './astro/server_DJHfVkFr.mjs';
import 'kleur/colors';
import 'clsx';

const html = "";

				const frontmatter = {"jsonUrl":"/jsons/roadmaps/software-design-architecture.json","pdfUrl":"/pdfs/roadmaps/software-design-architecture.pdf","order":12,"briefTitle":"Design and Architecture","briefDescription":"Guide to learn software design and architecture","title":"Software Design and Architecture","description":"Step by step guide to learn software design and architecture","isNew":false,"hasTopics":true,"dimensions":{"width":968,"height":1764.66},"schema":{"headline":"Software Design and Architecture Roadmap","description":"Learn Software Design and Architecture with this interactive step by step guide in 2024. We also have resources and short descriptions attached to the roadmap items so you can get everything you want to learn in one place.","imageUrl":"https://roadmap.sh/roadmaps/software-design-architecture.png","datePublished":"2023-01-05","dateModified":"2023-01-20"},"seo":{"title":"Software Design and Architecture Roadmap","description":"Learn software design and architecture with this step by step guide and resources.","keywords":["guide to learn software design and architecture","software design roadmap","software architecture roadmap","software design and architecture roadmap","modern software design and architecture roadmap","fullstack software design and architecture roadmap","design and architecture roadmap","scalable design roadmap","software design patterns roadmap","software architecture patterns roadmap","design architecture patterns roadmap","application architectures","software architecture guide"]},"relatedRoadmaps":["backend","software-architect","devops","python","java","nodejs","golang"],"sitemap":{"priority":1,"changefreq":"monthly"},"tags":["roadmap","main-sitemap","skill-roadmap"]};
				const file = "/workspaces/developer-roadmap/src/data/roadmaps/software-design-architecture/software-design-architecture.md";
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

const __vite_glob_2_41 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
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

export { __vite_glob_2_41 as _ };
