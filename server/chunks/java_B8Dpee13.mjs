import { l as createComponent, m as renderTemplate, n as maybeRenderHead, u as unescapeHTML } from './astro/server_DJHfVkFr.mjs';
import 'kleur/colors';
import 'clsx';

const html = "";

				const frontmatter = {"jsonUrl":"/jsons/roadmaps/java.json","pdfUrl":"/pdfs/roadmaps/java.pdf","order":9,"briefTitle":"Java","briefDescription":"Step by step guide to becoming a Java Developer in 2024","title":"Java Developer","description":"Step by step guide to becoming a Java developer in 2024","hasTopics":true,"dimensions":{"width":968,"height":1167.29},"schema":{"headline":"Java Developer Roadmap","description":"Learn how to become a Java Developer with this interactive step by step guide in 2024. We also have resources and short descriptions attached to the roadmap items so you can get everything you want to learn in one place.","imageUrl":"https://roadmap.sh/roadmaps/java.png","datePublished":"2023-01-05","dateModified":"2023-01-20"},"seo":{"title":"Learn to become a modern Java developer","description":"Community driven, articles, resources, guides, interview questions, quizzes for java development. Learn to become a modern Java developer by following the steps, skills, resources and guides listed in this roadmap.","keywords":["guide to becoming a developer","guide to becoming a java developer","java developer","java engineer","java skills","guide to java","java roadmap","java skills","java skills test","skills for java","cloud development","what is java","java quiz","java interview questions","java engineer roadmap","java developer roadmap","become a java developer","java developer career path","java developer","modern java developer"]},"relatedRoadmaps":["backend","spring-boot","devops","python","golang","javascript","nodejs"],"sitemap":{"priority":1,"changefreq":"monthly"},"tags":["roadmap","main-sitemap","skill-roadmap"]};
				const file = "/workspaces/developer-roadmap/src/data/roadmaps/java/java.md";
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

const __vite_glob_2_24 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
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

export { __vite_glob_2_24 as _ };
