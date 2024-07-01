import { l as createComponent, m as renderTemplate, n as maybeRenderHead, u as unescapeHTML } from './astro/server_DJHfVkFr.mjs';
import 'kleur/colors';
import 'clsx';

const html = "";

				const frontmatter = {"jsonUrl":"/jsons/roadmaps/typescript.json","pdfUrl":"/pdfs/roadmaps/typescript.pdf","order":6,"briefTitle":"TypeScript","briefDescription":"Everything you need to learn about TypeScript in 2024","title":"TypeScript","description":"Everything you need to learn about TypeScript in 2024","hasTopics":true,"isNew":false,"dimensions":{"width":968,"height":1884.38},"schema":{"headline":"TypeScript Roadmap","description":"Learn everything about TypeScript with this interactive step by step guide in 2024. We also have resources and short descriptions attached to the roadmap items so you can get everything you want to learn in one place.","imageUrl":"https://roadmap.sh/roadmaps/typescript.png","datePublished":"2023-01-05","dateModified":"2023-01-20"},"seo":{"title":"TypeScript Roadmap: Learn to become a TypeScript developer","description":"Community driven, articles, resources, guides, interview questions, quizzes for typescript development. Learn to become a modern TypeScript developer by following the steps, skills, resources and guides listed in this roadmap.","keywords":["typescript roadmap 2024","typescript developer roadmap 2024","guide to becoming a typescript developer","guide to learning typescript","typescript developer roadmap","typescript roadmap","become typescript developer","typescript developer skills","typescript skills test","skills for typescript development","learn typescript development","what is typescript","typescript quiz","typescript interview questions"]},"relatedRoadmaps":["frontend","backend","javascript","nodejs"],"sitemap":{"priority":1,"changefreq":"monthly"},"tags":["roadmap","main-sitemap","skill-roadmap"]};
				const file = "/workspaces/developer-roadmap/src/data/roadmaps/typescript/typescript.md";
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

const __vite_glob_2_47 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
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

export { __vite_glob_2_47 as _ };
