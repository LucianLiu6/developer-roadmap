import { l as createComponent, m as renderTemplate, n as maybeRenderHead, u as unescapeHTML } from './astro/server_DJHfVkFr.mjs';
import 'kleur/colors';
import 'clsx';

const html = "";

				const frontmatter = {"jsonUrl":"/jsons/roadmaps/python.json","pdfUrl":"/pdfs/roadmaps/python.pdf","order":7,"briefTitle":"Python","briefDescription":"Step by step guide to becoming a Python Developer in 2024","title":"Python Developer","description":"Step by step guide to becoming a Python developer in 2024","hasTopics":true,"dimensions":{"width":992,"height":1259.03},"schema":{"headline":"Python Roadmap","description":"Learn Python with this interactive step by step guide in 2024. We also have resources and short descriptions attached to the roadmap items so you can get everything you want to learn in one place.","imageUrl":"https://roadmap.sh/roadmaps/python.png","datePublished":"2023-01-05","dateModified":"2023-01-20"},"seo":{"title":"Learn to become a modern Python developer","description":"Community driven, articles, resources, guides, interview questions, quizzes for python development. Learn to become a modern Python developer by following the steps, skills, resources and guides listed in this roadmap.","keywords":["guide to becoming an python developer","python developer roadmap","python roadmap","become python developer","python developer skills","python skills test","skills for python development","learn python development","what is python","python quiz","python interview questions"]},"relatedRoadmaps":["backend","devops","golang","java","javascript","nodejs"],"sitemap":{"priority":1,"changefreq":"monthly"},"tags":["roadmap","main-sitemap","skill-roadmap"]};
				const file = "/workspaces/developer-roadmap/src/data/roadmaps/python/python.md";
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

const __vite_glob_2_34 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
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

export { __vite_glob_2_34 as _ };
