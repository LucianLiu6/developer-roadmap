import { l as createComponent, m as renderTemplate, n as maybeRenderHead, u as unescapeHTML } from './astro/server_DJHfVkFr.mjs';
import 'kleur/colors';
import 'clsx';

const html = "";

				const frontmatter = {"jsonUrl":"/jsons/roadmaps/qa.json","pdfUrl":"/pdfs/roadmaps/qa.pdf","order":7,"briefTitle":"QA","briefDescription":"Step by step guide to becoming a modern QA Engineer in 2024","title":"QA Engineer","description":"Steps to follow in order to become a modern QA Engineer in 2024","isNew":false,"hasTopics":true,"dimensions":{"width":968,"height":2107.75},"schema":{"headline":"QA Engineer Roadmap","description":"Learn to become a QA Engineer with this interactive step by step guide in 2024. We also have resources and short descriptions attached to the roadmap items so you can get everything you want to learn in one place.","imageUrl":"https://roadmap.sh/roadmaps/qa.png","datePublished":"2023-01-05","dateModified":"2023-01-20"},"seo":{"title":"QA Roadmap: Learn to become a modern QA engineer","description":"Community driven, articles, resources, guides, interview questions, quizzes for modern QA development. Learn to become a modern QA engineer by following the steps, skills, resources and guides listed in this roadmap.","keywords":["guide to becoming a QA engineer","QA engineer","QA skills","QA development skills","QA development skills test","QA engineer roadmap","become a QA engineer","QA engineer career path","skills for QA development","what is QA engineer","QA engineer quiz","QA engineer interview questions"]},"relatedRoadmaps":["frontend","backend","devops","javascript","nodejs"],"sitemap":{"priority":1,"changefreq":"monthly"},"tags":["roadmap","main-sitemap","role-roadmap"]};
				const file = "/workspaces/developer-roadmap/src/data/roadmaps/qa/qa.md";
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

const __vite_glob_2_35 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
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

export { __vite_glob_2_35 as _ };
