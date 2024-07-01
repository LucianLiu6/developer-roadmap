import { l as createComponent, m as renderTemplate, n as maybeRenderHead, u as unescapeHTML } from './astro/server_DJHfVkFr.mjs';
import 'kleur/colors';
import 'clsx';

const html = "";

				const frontmatter = {"jsonUrl":"/jsons/roadmaps/react.json","pdfUrl":"/pdfs/roadmaps/react.pdf","order":2,"briefTitle":"React","briefDescription":"Step by step guide to become a React Developer in 2024","title":"React Developer","description":"Everything that is there to learn about React and the ecosystem in 2024.","hasTopics":true,"dimensions":{"width":968,"height":1570.26},"schema":{"headline":"React Developer Roadmap","description":"Learn to become a React developer with this interactive step by step guide in 2024. We also have resources and short descriptions attached to the roadmap items so you can get everything you want to learn in one place.","imageUrl":"https://roadmap.sh/roadmaps/react.png","datePublished":"2023-01-05","dateModified":"2023-01-20"},"seo":{"title":"React Developer Roadmap: Learn to become a React developer","description":"Community driven, articles, resources, guides, interview questions, quizzes for react development. Learn to become a modern React developer by following the steps, skills, resources and guides listed in this roadmap.","keywords":["react roadmap 2024","react developer roadmap 2024","guide to becoming a react developer","react developer roadmap","react roadmap","become react developer","react developer skills","react skills test","skills for react development","learn react development","what is react","react quiz","react interview questions"]},"relatedRoadmaps":["frontend","javascript","angular","vue","nodejs","design-system"],"relatedQuestions":["react","javascript"],"sitemap":{"priority":1,"changefreq":"monthly"},"tags":["roadmap","main-sitemap","skill-roadmap"]};
				const file = "/workspaces/developer-roadmap/src/data/roadmaps/react/react.md";
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

const __vite_glob_2_37 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
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

export { __vite_glob_2_37 as _ };
