import { l as createComponent, m as renderTemplate, n as maybeRenderHead, u as unescapeHTML } from './astro/server_DJHfVkFr.mjs';
import 'kleur/colors';
import 'clsx';

const html = "";

				const frontmatter = {"jsonUrl":"/jsons/roadmaps/golang.json","pdfUrl":"/pdfs/roadmaps/golang.pdf","order":11,"briefTitle":"Go","briefDescription":"Step by step guide to becoming a Go developer in 2024","title":"Go Developer","description":"Step by step guide to becoming a Go developer in 2024","hasTopics":true,"dimensions":{"width":968,"height":1495.21},"schema":{"headline":"Go Developer Roadmap","description":"Learn how to become a Go Developer with this interactive step by step guide in 2024. We also have resources and short descriptions attached to the roadmap items so you can get everything you want to learn in one place.","imageUrl":"https://roadmap.sh/roadmaps/golang.png","datePublished":"2023-01-05","dateModified":"2023-01-20"},"seo":{"title":"Learn to become a Go developer","description":"Community driven, articles, resources, guides, interview questions, quizzes for Go development. Learn to become a modern Go developer by following the steps, skills, resources and guides listed in this roadmap.","keywords":["guide to becoming a golang developer","guide to becoming a go developer","golang developer","go developer","guide to golang","guide to go","golang roadmap","go roadmap","golang skills","go skills","golang skills test","go skills test","skills for golang","skills for go","cloud development","what is golang","what is go","golang quiz","go quiz","golang interview questions","go interview questions"]},"relatedRoadmaps":["backend","devops","python","java","javascript","nodejs"],"sitemap":{"priority":1,"changefreq":"monthly"},"tags":["roadmap","main-sitemap","skill-roadmap"]};
				const file = "/workspaces/developer-roadmap/src/data/roadmaps/golang/golang.md";
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

const __vite_glob_2_21 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
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

export { __vite_glob_2_21 as _ };
