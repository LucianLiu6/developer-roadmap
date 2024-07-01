import { l as createComponent, m as renderTemplate, n as maybeRenderHead, u as unescapeHTML } from './astro/server_DJHfVkFr.mjs';
import 'kleur/colors';
import 'clsx';

const html = "";

				const frontmatter = {"jsonUrl":"/jsons/roadmaps/blockchain.json","pdfUrl":"/pdfs/roadmaps/blockchain.pdf","order":6,"briefTitle":"Blockchain","briefDescription":"Step by step guide to becoming a blockchain developer in 2024","title":"Blockchain Developer","description":"Step by step guide to becoming a blockchain developer in 2024.","isNew":false,"hasTopics":true,"dimensions":{"width":968,"height":2173.87},"schema":{"headline":"Blockchain Developer Roadmap","description":"Learn how to become a Blockchain Developer with this interactive step by step guide in 2024. We also have resources and short descriptions attached to the roadmap items so you can get everything you want to learn in one place.","imageUrl":"https://roadmap.sh/roadmaps/blockchain.png","datePublished":"2023-01-05","dateModified":"2023-01-20"},"seo":{"title":"Blockchain Developer Roadmap: Learn to become a blockchain developer","description":"Learn to become a blockchain developer using this roadmap. Community driven, articles, resources, guides, interview questions, quizzes for modern backend development.","keywords":["blockchain roadmap 2024","web3 developer roadmap","web3 developer roadmap 2024","web3 roadmap","blockchain developer roadmap 2024","guide to becoming a blockchain developer","guide to becoming a blockchain developer","blockchain roadmap","blockchain developer","blockchain engineer","blockchain skills","blockchain development","javascript developer","blockchain development skills","blockchain development skills test","blockchain engineer roadmap","blockchain developer roadmap","become a blockchain developer","blockchain developer career path","javascript developer","modern javascript developer","node developer","skills for blockchain development","learn blockchain development","what is blockchain development","blockchain developer quiz","blockchain developer interview questions"]},"relatedRoadmaps":["frontend","backend","javascript","nodejs","react","vue","angular"],"sitemap":{"priority":1,"changefreq":"monthly"},"tags":["roadmap","main-sitemap","role-roadmap"]};
				const file = "/workspaces/developer-roadmap/src/data/roadmaps/blockchain/blockchain.md";
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

const __vite_glob_2_7 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
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

export { __vite_glob_2_7 as _ };
