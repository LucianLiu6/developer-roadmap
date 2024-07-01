import { l as createComponent, m as renderTemplate, n as maybeRenderHead, u as unescapeHTML } from './astro/server_DJHfVkFr.mjs';
import 'kleur/colors';
import 'clsx';

const html = "";

				const frontmatter = {"jsonUrl":"/jsons/roadmaps/data-analyst.json","pdfUrl":"/pdfs/roadmaps/data-analyst.pdf","order":4,"briefTitle":"Data Analyst","briefDescription":"Step by step guide to becoming an Data Analyst in 2024","title":"Data Analyst Roadmap","description":"Step by step guide to becoming an Data Analyst in 2024","hasTopics":true,"isNew":true,"dimensions":{"width":968,"height":2410.4},"schema":{"headline":"Data Analyst Roadmap","description":"Learn how to become an Data Analyst with this interactive step by step guide in 2023. We also have resources and short descriptions attached to the roadmap items so you can get everything you want to learn in one place.","imageUrl":"https://roadmap.sh/roadmaps/data-analyst.png","datePublished":"2024-04-02","dateModified":"2024-04-02"},"seo":{"title":"Data Analyst Roadmap","description":"Learn to become an Data Analyst using this roadmap. Community driven, articles, resources, guides, interview questions, quizzes for modern backend development.","keywords":["data analyst roadmap 2024","data analytics roadmap 2024","guide to becoming an data analyst","data analyst roadmap","data analyst","data analyst roadmap","data scientist roadmap","data analytics skills","data analyst skills","skills for data analyst","data analyst quiz","data analyst interview questions"]},"relatedRoadmaps":["sql","ai-data-scientist","postgresql-dba","python"],"sitemap":{"priority":1,"changefreq":"monthly"},"tags":["roadmap","main-sitemap","role-roadmap"]};
				const file = "/workspaces/developer-roadmap/src/data/roadmaps/data-analyst/data-analyst.md";
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

const __vite_glob_2_12 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
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

export { __vite_glob_2_12 as _ };
