import { l as createComponent, m as renderTemplate, n as maybeRenderHead, u as unescapeHTML } from './astro/server_DJHfVkFr.mjs';
import 'kleur/colors';
import 'clsx';

const html = "";

				const frontmatter = {"jsonUrl":"/jsons/roadmaps/flutter.json","pdfUrl":"/pdfs/roadmaps/flutter.pdf","order":10,"briefTitle":"Flutter","briefDescription":"Step by step guide to becoming a Flutter Developer in 2024","title":"Flutter Developer","description":"Step by step guide to becoming a Flutter developer in 2024","isNew":false,"hasTopics":true,"dimensions":{"width":968,"height":2042.2},"schema":{"headline":"Flutter Developer Roadmap","description":"Learn how to become a Flutter Developer with this interactive step by step guide in 2024. We also have resources and short descriptions attached to the roadmap items so you can get everything you want to learn in one place.","imageUrl":"https://roadmap.sh/roadmaps/flutter.png","datePublished":"2023-01-05","dateModified":"2023-01-20"},"seo":{"title":"Learn to become a modern Flutter developer","description":"Community driven, articles, resources, guides, interview questions, quizzes for flutter development. Learn to become a modern Flutter developer by following the steps, skills, resources and guides listed in this roadmap.","keywords":["guide to becoming a flutter developer","guide to becoming a flutter developer","flutter developer","flutter engineer","flutter skills","guide to flutter","flutter roadmap","flutter skills","flutter skills test","skills for flutter","what is flutter","flutter quiz","flutter interview questions","flutter engineer roadmap","flutter developer roadmap","become a flutter developer","flutter developer career path","flutter developer","modern flutter developer"]},"relatedRoadmaps":["backend","devops","python","golang","java","nodejs"],"sitemap":{"priority":1,"changefreq":"monthly"},"tags":["roadmap","main-sitemap","skill-roadmap"]};
				const file = "/workspaces/developer-roadmap/src/data/roadmaps/flutter/flutter.md";
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

const __vite_glob_2_17 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
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

export { __vite_glob_2_17 as _ };
