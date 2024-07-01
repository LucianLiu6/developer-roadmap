import { l as createComponent, m as renderTemplate, n as maybeRenderHead, u as unescapeHTML } from './astro/server_DJHfVkFr.mjs';
import 'kleur/colors';
import 'clsx';

const html = "";

				const frontmatter = {"jsonUrl":"/jsons/roadmaps/vue.json","pdfUrl":"/pdfs/roadmaps/vue.pdf","order":4,"briefTitle":"Vue","briefDescription":"Step by step guide to become a Vue Developer in 2024","title":"Vue Developer","description":"Everything that is there to learn about Vue and the ecosystem in 2024.","isNew":false,"hasTopics":true,"dimensions":{"width":968,"height":1657.07},"schema":{"headline":"Vue Developer Roadmap","description":"Learn to become a Vue Developer with this interactive step by step guide in 2024. We also have resources and short descriptions attached to the roadmap items so you can get everything you want to learn in one place.","imageUrl":"https://roadmap.sh/roadmaps/vue.png","datePublished":"2023-01-05","dateModified":"2023-01-20"},"seo":{"title":"Vue Developer Roadmap: Learn to become a Vue developer","description":"Community driven, articles, resources, guides, interview questions, quizzes for vue development. Learn to become a modern Vue developer by following the steps, skills, resources and guides listed in this roadmap.","keywords":["guide to becoming a vue developer","guide to becoming a vue.js developer","vue developer roadmap","vue.js developer roadmap","vue roadmap","vue.js roadmap","become vue developer","become vue.js developer","vue developer skills","vue.js developer skills","vue skills test","vue.js skills test","skills for vue development","skills for vue.js development","learn vue development","learn vue.js development","what is vue","what is vue.js","vue quiz","vue.js quiz","vue interview questions","vue.js interview questions"]},"relatedRoadmaps":["frontend","javascript","react","angular","nodejs"],"relatedQuestions":["javascript"],"sitemap":{"priority":1,"changefreq":"monthly"},"tags":["roadmap","main-sitemap","skill-roadmap"]};
				const file = "/workspaces/developer-roadmap/src/data/roadmaps/vue/vue.md";
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

const __vite_glob_2_49 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
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

export { __vite_glob_2_49 as _ };
