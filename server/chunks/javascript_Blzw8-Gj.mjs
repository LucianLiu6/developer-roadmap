import { l as createComponent, m as renderTemplate, n as maybeRenderHead, u as unescapeHTML } from './astro/server_DJHfVkFr.mjs';
import 'kleur/colors';
import 'clsx';

const html = "";

				const frontmatter = {"jsonUrl":"/jsons/roadmaps/javascript.json","pdfUrl":"/pdfs/roadmaps/javascript.pdf","order":5,"briefTitle":"JavaScript","briefDescription":"Step by step guide to learn JavaScript in 2024","title":"JavaScript Roadmap","description":"Step by step guide to learn JavaScript in 2024","isNew":false,"hasTopics":true,"dimensions":{"width":968,"height":2438.9},"schema":{"headline":"JavaScript Roadmap","description":"Learn JavaScript with this interactive step by step guide in 2024. We also have resources and short descriptions attached to the roadmap items so you can get everything you want to learn in one place.","imageUrl":"https://roadmap.sh/roadmaps/javascript.png","datePublished":"2023-01-05","dateModified":"2023-01-20"},"seo":{"title":"JavaScript Developer Roadmap: Step by step guide to learn JavaScript","description":"Community driven, articles, resources, guides, interview questions, quizzes for javascript development. Learn to become a modern JavaScript developer by following the steps, skills, resources and guides listed in this roadmap.","keywords":["javascript guide 2024","learn javascript","step by step javascript guide","javascript roadmap 2024","javascript developer roadmap 2024","guide to becoming a javascript developer","javascript developer roadmap","javascript roadmap","become javascript developer","javascript developer skills","javascript skills test","skills for javascript development","learn javascript development","what is javascript","javascript quiz","javascript interview questions"]},"relatedRoadmaps":["nodejs","typescript","frontend","backend","react","angular","vue"],"relatedQuestions":["javascript","react"],"sitemap":{"priority":1,"changefreq":"monthly"},"tags":["roadmap","main-sitemap","skill-roadmap"]};
				const file = "/workspaces/developer-roadmap/src/data/roadmaps/javascript/javascript.md";
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

const __vite_glob_2_25 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
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

export { __vite_glob_2_25 as _ };
