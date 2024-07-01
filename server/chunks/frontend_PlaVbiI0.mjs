import { l as createComponent, m as renderTemplate, n as maybeRenderHead, u as unescapeHTML } from './astro/server_DJHfVkFr.mjs';
import 'kleur/colors';
import 'clsx';

const html = "";

				const frontmatter = {"renderer":"editor","jsonUrl":"/jsons/roadmaps/frontend.json","pdfUrl":"/pdfs/roadmaps/frontend.pdf","order":1,"briefTitle":"Frontend","briefDescription":"Step by step guide to becoming a frontend developer in 2024","title":"Frontend Developer","description":"Step by step guide to becoming a modern frontend developer in 2024","hasTopics":true,"tnsBannerLink":"https://thenewstack.io?utm_source=roadmap.sh&utm_medium=Referral&utm_campaign=Alert","question":{"title":"What is Frontend Development?","description":"Front-end development is the development of visual and interactive elements of a website that users interact with directly. It's a combination of HTML, CSS and [JavaScript](/javascript), where HTML provides the structure, CSS the styling and layout, and JavaScript the dynamic behaviour and interactivity.\n\n## What does a Frontend Developer do?\nAs a front-end developer, you'll be responsible for creating the user interface of a website, to ensure it looks good and is easy to use, with great focus on design principles and user experience. You'll be working closely with designers, back-end developers, and project managers to make sure the final product meets the client's needs and provides the best possible experience for the end-users.\n"},"dimensions":{"width":968,"height":2775},"schema":{"headline":"Frontend Developer Roadmap: What is Frontend Development?","description":"Learn what Frontend Development is, what frontend developers do and how to become a modern frontend developer using our community-driven roadmap.","imageUrl":"https://roadmap.sh/roadmaps/frontend.png","datePublished":"2023-01-05","dateModified":"2023-01-20"},"seo":{"title":"Frontend Developer Roadmap: What is Frontend Development?","description":"Learn what Frontend Development is, what frontend developers do and how to become a modern frontend developer using our community-driven roadmap.","keywords":["javascript roadmap 2024","frontend roadmap 2024","frontend developer roadmap 2024","guide to becoming a developer","guide to becoming a frontend developer","frontend developer","frontend engineer","frontend skills","frontend development","javascript developer","frontend development skills","frontend development skills test","frontend roadmap","frontend engineer roadmap","frontend developer roadmap","become a frontend developer","frontend developer career path","javascript developer","modern javascript developer","node developer","skills for frontend development","learn frontend development","what is frontend development","frontend developer quiz","frontend developer interview questions"]},"relatedRoadmaps":["full-stack","javascript","nodejs","react","angular","vue","design-system"],"relatedQuestions":["javascript","react"],"sitemap":{"priority":1,"changefreq":"monthly"},"tags":["roadmap","main-sitemap","role-roadmap"]};
				const file = "/workspaces/developer-roadmap/src/data/roadmaps/frontend/frontend.md";
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

const __vite_glob_2_18 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
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

export { __vite_glob_2_18 as _ };
