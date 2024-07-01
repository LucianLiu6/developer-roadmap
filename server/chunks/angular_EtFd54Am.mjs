import { l as createComponent, m as renderTemplate, n as maybeRenderHead, u as unescapeHTML } from './astro/server_DJHfVkFr.mjs';
import 'kleur/colors';
import 'clsx';

const html = "";

				const frontmatter = {"jsonUrl":"/jsons/roadmaps/angular.json","pdfUrl":"/pdfs/roadmaps/angular.pdf","order":3,"briefTitle":"Angular","briefDescription":"Step by step guide to become a Angular Developer in 2024","title":"Angular Developer","description":"Everything that is there to learn about Angular and the ecosystem in 2024.","hasTopics":true,"dimensions":{"width":968,"height":2277.8},"schema":{"headline":"Angular Developer Roadmap","description":"Learn how to become a Angular Developer with this interactive step by step guide in 2024. We also have resources and short descriptions attached to the roadmap items so you can get everything you want to learn in one place.","imageUrl":"https://roadmap.sh/roadmaps/angular.png","datePublished":"2023-01-05","dateModified":"2023-01-20"},"seo":{"title":"Angular Developer Roadmap: Learn to become a Angular developer","description":"Community driven, articles, resources, guides, interview questions, quizzes for angular development. Learn to become a modern Angular developer by following the steps, skills, resources and guides listed in this roadmap.","keywords":["guide to becoming a angular developer","angular developer roadmap","angular roadmap","become angular developer","angular developer skills","angular skills test","skills for angular development","learn angular development","what is angular","angular quiz","angular interview questions"]},"relatedRoadmaps":["frontend","javascript","react","vue","nodejs"],"relatedQuestions":["javascript"],"sitemap":{"priority":1,"changefreq":"monthly"},"tags":["roadmap","main-sitemap","skill-roadmap"]};
				const file = "/workspaces/developer-roadmap/src/data/roadmaps/angular/angular.md";
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

const __vite_glob_2_2 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
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

export { __vite_glob_2_2 as _ };
