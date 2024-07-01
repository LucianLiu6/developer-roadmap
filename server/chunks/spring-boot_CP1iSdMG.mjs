import { l as createComponent, m as renderTemplate, n as maybeRenderHead, u as unescapeHTML } from './astro/server_DJHfVkFr.mjs';
import 'kleur/colors';
import 'clsx';

const html = "";

				const frontmatter = {"jsonUrl":"/jsons/roadmaps/spring-boot.json","pdfUrl":"/pdfs/roadmaps/spring-boot.pdf","order":10,"briefTitle":"Spring Boot","briefDescription":"Step by step guide to becoming a Spring Boot Developer in 2024","title":"Spring Boot Developer","description":"Step by step guide to becoming a Spring Boot developer in 2024","hasTopics":true,"isNew":false,"dimensions":{"width":968,"height":1245.52},"schema":{"headline":"Spring Boot Roadmap","description":"Learn Spring Boot with this interactive step by step guide in 2024. We also have resources and short descriptions attached to the roadmap items so you can get everything you want to learn in one place.","imageUrl":"https://roadmap.sh/roadmaps/spring-boot.png","datePublished":"2023-01-05","dateModified":"2023-01-20"},"seo":{"title":"Learn to become a modern Spring Boot developer","description":"Community driven, articles, resources, guides, interview questions, quizzes for spring boot development. Learn to become a modern Spring Boot developer by following the steps, skills, resources and guides listed in this roadmap.","keywords":["guide to becoming a developer","guide to becoming a spring boot developer","spring boot developer","spring boot engineer","spring boot skills","guide to spring boot","spring boot guide","spring boot roadmap","spring boot skills","spring boot skills test","skills for spring boot","cloud development","what is spring boot","spring boot quiz","spring boot interview questions","spring boot engineer roadmap","spring boot developer roadmap","become a spring boot developer","spring boot developer career path","spring boot developer","modern spring boot developer"]},"relatedRoadmaps":["backend","devops","python","golang","nodejs"],"sitemap":{"priority":1,"changefreq":"monthly"},"tags":["roadmap","main-sitemap","skill-roadmap"]};
				const file = "/workspaces/developer-roadmap/src/data/roadmaps/spring-boot/spring-boot.md";
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

const __vite_glob_2_42 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
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

export { __vite_glob_2_42 as _ };
