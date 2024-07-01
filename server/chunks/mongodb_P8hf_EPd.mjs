import { l as createComponent, m as renderTemplate, n as maybeRenderHead, u as unescapeHTML } from './astro/server_DJHfVkFr.mjs';
import 'kleur/colors';
import 'clsx';

const html = "";

				const frontmatter = {"jsonUrl":"/jsons/roadmaps/mongodb.json","pdfUrl":"/pdfs/roadmaps/mongodb.pdf","order":14,"briefTitle":"MongoDB","briefDescription":"Step by step guide to learning MongoDB in 2024","title":"MongoDB Roadmap","description":"Step by step guide to learning MongoDB in 2024","isNew":false,"hasTopics":true,"dimensions":{"width":968,"height":2123.45},"schema":{"headline":"MongoDB Roadmap: Step by step guide to learning MongoDB in 2024","description":"Learn how to use MongoDB with this interactive step by step guide in 2023. We also have resources and short descriptions attached to the roadmap items so you can get everything you want to learn in one place.","imageUrl":"https://roadmap.sh/roadmaps/mongodb.png","datePublished":"2023-03-16","dateModified":"2023-03-16"},"seo":{"title":"MongoDB Roadmap - roadmap.sh","description":"Step by step guide to learn MongoDB in 2024. We also have resources and short descriptions attached to the roadmap items so you can get everything you want to learn in one place.","keywords":["mongodb tutorial","step by step mongodb","mongodb roadmap 2024","guide to learning mongodb","mongodb roadmap","mongodb","mongodb engineer","mongodb skills","mongodb development","mongodb development skills","mongodb development skills test","mongodb engineer roadmap","mongodb roadmap","mongodb career path","learn mongodb development","what is mongodb","mongodb quiz","mongodb interview questions"]},"relatedRoadmaps":["postgresql-dba","backend","nodejs","system-design"],"sitemap":{"priority":1,"changefreq":"monthly"},"tags":["roadmap","main-sitemap","skill-roadmap"]};
				const file = "/workspaces/developer-roadmap/src/data/roadmaps/mongodb/mongodb.md";
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

const __vite_glob_2_29 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
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

export { __vite_glob_2_29 as _ };
