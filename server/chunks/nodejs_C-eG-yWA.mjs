import { l as createComponent, m as renderTemplate, n as maybeRenderHead, u as unescapeHTML } from './astro/server_DJHfVkFr.mjs';
import 'kleur/colors';
import 'clsx';

const html = "";

				const frontmatter = {"jsonUrl":"/jsons/roadmaps/nodejs.json","pdfUrl":"/pdfs/roadmaps/nodejs.pdf","order":6,"briefTitle":"Node.js","briefDescription":"Step by step guide to becoming a Node.js developer in 2024","title":"Node.js Developer","description":"Step by step guide to becoming a modern Node.js developer in 2024","isNew":false,"hasTopics":true,"dimensions":{"width":968,"height":2474.06},"schema":{"headline":"Node.js Roadmap","description":"Learn Node.js with this interactive step by step guide in 2024. We also have resources and short descriptions attached to the roadmap items so you can get everything you want to learn in one place.","imageUrl":"https://roadmap.sh/roadmaps/nodejs.png","datePublished":"2023-01-05","dateModified":"2023-01-20"},"seo":{"title":"Node.js Developer Roadmap: Learn to become a modern node.js developer","description":"Learn to become a modern node.js developer using this roadmap. Community driven, articles, resources, guides, interview questions, quizzes for modern node.js development.","keywords":["node.js roadmap 2024","nodejs roadmap 2024","node.js roadmap 2024","nodejs roadmap 2024","node.js developer roadmap 2024","nodejs developer roadmap 2024","guide to becoming a developer","guide to becoming a node.js developer","guid to becoming a node.js developer","node.js developer","nodejs developer","node.js engineer","nodejs engineer","node.js skills","nodejs skills","node.js development","nodejs development","node.js developer","nodejs developer","node.js development skills","nodejs development skills","node.js development skills test","nodejs development skills test","node.js roadmap","nodejs roadmap","node.js engineer roadmap","nodejs engineer roadmap","node.js developer roadmap","nodejs developer roadmap","become a node.js developer","become a node.js developer","node.js developer career path","nodejs developer career path","node.js developer","nodejs developer","modern node.js developer","modern node.js developer","node developer","skills for node.js development","skills for nodejs development","learn node.js development","lear node.js development","node.js developer quiz","nodejs developer quiz","node.js developer interview questions","nodejs developer interview questions"]},"relatedRoadmaps":["javascript","backend","docker","typescript","system-design","graphql","frontend"],"relatedQuestions":["javascript"],"sitemap":{"priority":1,"changefreq":"monthly"},"tags":["roadmap","main-sitemap","skill-roadmap"]};
				const file = "/workspaces/developer-roadmap/src/data/roadmaps/nodejs/nodejs.md";
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

const __vite_glob_2_30 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
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

export { __vite_glob_2_30 as _ };
