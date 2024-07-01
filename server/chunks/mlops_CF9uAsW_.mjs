import { l as createComponent, m as renderTemplate, n as maybeRenderHead, u as unescapeHTML } from './astro/server_DJHfVkFr.mjs';
import 'kleur/colors';
import 'clsx';

const html = "";

				const frontmatter = {"jsonUrl":"/jsons/roadmaps/mlops.json","pdfUrl":"/pdfs/roadmaps/mlops.pdf","order":18,"briefTitle":"MLOps","briefDescription":"Step by step guide to learn MLOps in 2024","title":"MLOps Roadmap","description":"Step by step guide to learn MLOps in 2024","hasTopics":true,"isNew":false,"dimensions":{"width":968,"height":1256.63},"schema":{"headline":"MLOps Roadmap","description":"Learn about MLOps with this interactive step by step guide in 2023. We also have resources and short descriptions attached to the roadmap items so you can get everything you want to learn in one place.","imageUrl":"https://roadmap.sh/roadmaps/mlops.png","datePublished":"2024-02-12","dateModified":"2024-02-12"},"seo":{"title":"MLOps Roadmap","description":"Learn about MLOps using this roadmap. Community driven, articles, resources, guides, interview questions, quizzes for modern backend development.","keywords":["mlops roadmap 2024","mlops engineer","machine learning engineer","ai ops engineer"]},"relatedRoadmaps":["ai-data-scientist","python"],"sitemap":{"priority":1,"changefreq":"monthly"},"tags":["roadmap","main-sitemap","role-roadmap"]};
				const file = "/workspaces/developer-roadmap/src/data/roadmaps/mlops/mlops.md";
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

const __vite_glob_2_28 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
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

export { __vite_glob_2_28 as _ };
