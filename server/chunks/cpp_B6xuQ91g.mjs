import { l as createComponent, m as renderTemplate, n as maybeRenderHead, u as unescapeHTML } from './astro/server_DJHfVkFr.mjs';
import 'kleur/colors';
import 'clsx';

const html = "";

				const frontmatter = {"jsonUrl":"/jsons/roadmaps/cpp.json","pdfUrl":"/pdfs/roadmaps/cpp.pdf","order":10,"briefTitle":"C++","briefDescription":"Step by step guide to becoming a C++ Developer in 2024","title":"C++ Developer Roadmap","description":"Step by step guide to becoming a C++ developer in 2024","isNew":false,"hasTopics":true,"dimensions":{"width":1000,"height":2639.34},"schema":{"headline":"C++ Developer Roadmap","description":"Learn how to become a C++ Developer with this interactive step by step guide in 2024. We also have resources and short descriptions attached to the roadmap items so you can get everything you want to learn in one place.","imageUrl":"https://roadmap.sh/roadmaps/cpp.png","datePublished":"2023-06-01","dateModified":"2023-06-01"},"seo":{"title":"C++ Developer Roadmap","description":"Community driven, articles, resources, guides, interview questions, quizzes for C++ development. Learn to become a modern C++ developer by following the steps, skills, resources and guides listed in this roadmap.","keywords":["guide to becoming a c++ developer","c++ developer","c++ engineer","c++ skills","guide to c++","c++ roadmap","c++ skills","c++ skills test","skills for c++","what is c++","c++ quiz","c++ interview questions","c++ engineer roadmap","c++ developer roadmap","become a c++ developer","c++ developer career path","c++ developer","modern c++ developer"]},"relatedRoadmaps":["backend","devops","python","golang","java","nodejs"],"sitemap":{"priority":1,"changefreq":"monthly"},"tags":["roadmap","main-sitemap","skill-roadmap"]};
				const file = "/workspaces/developer-roadmap/src/data/roadmaps/cpp/cpp.md";
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

const __vite_glob_2_10 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
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

export { __vite_glob_2_10 as _ };
