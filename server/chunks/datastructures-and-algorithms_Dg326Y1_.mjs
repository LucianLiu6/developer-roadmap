import { l as createComponent, m as renderTemplate, n as maybeRenderHead, u as unescapeHTML } from './astro/server_DJHfVkFr.mjs';
import 'kleur/colors';
import 'clsx';

const html = "";

				const frontmatter = {"jsonUrl":"/jsons/roadmaps/datastructures-and-algorithms.json","pdfUrl":"/pdfs/roadmaps/datastructures-and-algorithms.pdf","order":18,"briefTitle":"Data Structures & Algorithms","briefDescription":"Step by step guide to learn Data Structures and Algorithms in 2024","title":"Data Structures & Algorithms Roadmap","description":"Step by step guide to learn Data Structures and Algorithms in 2024","hasTopics":true,"isNew":false,"dimensions":{"width":968,"height":1814.72},"schema":{"headline":"Data Structures and Algorithms Roadmap","description":"Learn about Data Structures and Algorithms with this interactive step by step guide in 2023. We also have resources and short descriptions attached to the roadmap items so you can get everything you want to learn in one place.","imageUrl":"https://roadmap.sh/roadmaps/datastructures-and-algorithms.png","datePublished":"2024-02-20","dateModified":"2024-02-20"},"seo":{"title":"Data Structures and Algorithms Roadmap","description":"Learn about Data Structures and Algorithms using this roadmap. Community driven, articles, resources, guides, interview questions, quizzes for modern backend development.","keywords":["datastructures and algorithms roadmap 2024","datastructures and algorithms engineer","data structures roadmap","algorithms roadmap","self-taught datastructures and algorithms"]},"relatedRoadmaps":["computer-science","python"],"sitemap":{"priority":1,"changefreq":"monthly"},"tags":["roadmap","main-sitemap","skill-roadmap"]};
				const file = "/workspaces/developer-roadmap/src/data/roadmaps/datastructures-and-algorithms/datastructures-and-algorithms.md";
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

const __vite_glob_2_13 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
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

export { __vite_glob_2_13 as _ };
