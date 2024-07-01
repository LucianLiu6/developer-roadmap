import { l as createComponent, m as renderTemplate, n as maybeRenderHead, u as unescapeHTML } from './astro/server_DJHfVkFr.mjs';
import 'kleur/colors';
import 'clsx';

const html = "";

				const frontmatter = {"jsonUrl":"/jsons/roadmaps/computer-science.json","pdfUrl":"/pdfs/roadmaps/computer-science.pdf","order":1,"briefTitle":"Computer Science","briefDescription":"Curriculum with free resources for a self-taught developer.","title":"Computer Science","description":"Computer Science curriculum with free resources for a self-taught developer.","isNew":false,"hasTopics":true,"dimensions":{"width":968,"height":3009.05},"schema":{"headline":"Computer Science Roadmap","description":"Computer Science roadmap for the self-taught developers and bootcamp grads. We also have resources and short descriptions attached to the roadmap items so you can get everything you want to learn in one place.","imageUrl":"https://roadmap.sh/roadmaps/computer-science.png","datePublished":"2023-01-05","dateModified":"2023-01-20"},"seo":{"title":"Computer Science Roadmap: Curriculum for the self taught developer","description":"Computer Science study plan with free resources for the self-taught and bootcamp grads wanting to learn Computer Science.","keywords":["computer science roadmap","computer science","computer science roadmap 2024","guide to computer science","software engineer roadmap","software engineer roadmap 2024","self-taught computer science roadmap","computer science skills","computer science skills test","cs roadmap","computer science curriculum","cs curriculum","skills for computer science","what is computer science","computer science quiz","computer science interview questions"]},"relatedRoadmaps":["frontend","backend","devops","software-design-architecture"],"sitemap":{"priority":1,"changefreq":"monthly"},"tags":["roadmap","main-sitemap","skill-roadmap"]};
				const file = "/workspaces/developer-roadmap/src/data/roadmaps/computer-science/computer-science.md";
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

const __vite_glob_2_9 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
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

export { __vite_glob_2_9 as _ };
