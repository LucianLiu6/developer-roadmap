import { l as createComponent, m as renderTemplate, n as maybeRenderHead, u as unescapeHTML } from './astro/server_DJHfVkFr.mjs';
import 'kleur/colors';
import 'clsx';

const html = "";

				const frontmatter = {"jsonUrl":"/jsons/roadmaps/full-stack.json","pdfUrl":"/pdfs/roadmaps/full-stack.pdf","order":3,"briefTitle":"Full Stack","briefDescription":"Step by step guide to becoming a full stack developer in 2024","title":"Full Stack Developer","description":"Step by step guide to becoming a modern full stack developer in 2024","isNew":false,"hasTopics":true,"dimensions":{"width":968,"height":1951.64},"question":{"title":"What is Full Stack Development?","description":"Full stack development is the practice of being proficient in both the front-end and back-end aspects of web application development. A full stack developer is capable of working on all layers of a software application, from the user interface and user experience (front-end) to the server, database, and server-side logic (back-end). This versatility allows them to create and maintain complete web applications independently or as part of a development team.\n"},"schema":{"headline":"Full Stack Developer Roadmap","description":"Learn how to become a Full Stack Developer with this interactive step by step guide in 2024. We also have resources and short descriptions attached to the roadmap items so you can get everything you want to learn in one place.","imageUrl":"https://roadmap.sh/roadmaps/full-stack.png","datePublished":"2023-01-05","dateModified":"2023-01-20"},"seo":{"title":"Full Stack Developer Roadmap","description":"Learn to become a modern full stack developer using this roadmap. Community driven, articles, resources, guides, interview questions, quizzes for modern full stack development.","keywords":["javascript roadmap 2024","full stack roadmap 2024","full stack developer roadmap 2024","guide to becoming a developer","guide to becoming a full stack developer","full stack developer","full stack engineer","full stack skills","full stack development","full stack development skills","full stack development skills test","full stack roadmap","full stack engineer roadmap","full stack developer roadmap","become a full stack developer","full stack developer career path","javascript developer","modern javascript developer","node developer","skills for full stack development","learn full stack development","what is full stack development","full stack developer quiz","full stack developer interview questions"]},"relatedRoadmaps":["frontend","backend","devops","react","nodejs","docker"],"sitemap":{"priority":1,"changefreq":"monthly"},"tags":["roadmap","main-sitemap","role-roadmap"]};
				const file = "/workspaces/developer-roadmap/src/data/roadmaps/full-stack/full-stack.md";
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

const __vite_glob_2_19 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
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

export { __vite_glob_2_19 as _ };
