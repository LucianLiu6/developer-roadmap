import { l as createComponent, m as renderTemplate, n as maybeRenderHead, u as unescapeHTML } from './astro/server_DJHfVkFr.mjs';
import 'kleur/colors';
import 'clsx';

const html = "";

				const frontmatter = {"jsonUrl":"/jsons/roadmaps/ai-data-scientist.json","pdfUrl":"/pdfs/roadmaps/ai-data-scientist.pdf","order":4,"briefTitle":"AI and Data Scientist","briefDescription":"Step by step guide to becoming an AI and Data Scientist in 2024","title":"AI and Data Scientist Roadmap","description":"Step by step guide to becoming an AI and Data Scientist in 2024","hasTopics":true,"isNew":false,"dimensions":{"width":968,"height":2243.96},"schema":{"headline":"AI and Data Scientist Roadmap","description":"Learn how to become an AI and Data Scientist with this interactive step by step guide in 2023. We also have resources and short descriptions attached to the roadmap items so you can get everything you want to learn in one place.","imageUrl":"https://roadmap.sh/roadmaps/ai-data-scientist.png","datePublished":"2023-08-17","dateModified":"2023-08-17"},"seo":{"title":"AI and Data Scientist Roadmap","description":"Learn to become an AI and Data Scientist using this roadmap. Community driven, articles, resources, guides, interview questions, quizzes for modern backend development.","keywords":["ai and data scientist roadmap 2024","ai and data scientist roadmap 2024","guide to becoming an ai and data scientist","ai and data scientist roadmap","ai scientist","ai scientist roadmap","data scientist roadmap","ai skills","data scientist skills","ai engineer roadmap","ai skills test","data scientist skills test","ai and data scientist roadmap","become an ai and data scientist","ai and data scientist career path","ai career path","data scientist career path","skills for ai engineer","skills for data scientist","learn ai for developers","ai and data scientist quiz","ai and data scientist interview questions"]},"relatedRoadmaps":["python","backend","devops"],"sitemap":{"priority":1,"changefreq":"monthly"},"tags":["roadmap","main-sitemap","role-roadmap"]};
				const file = "/workspaces/developer-roadmap/src/data/roadmaps/ai-data-scientist/ai-data-scientist.md";
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

const __vite_glob_2_0 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
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

export { __vite_glob_2_0 as _ };
