import { l as createComponent, m as renderTemplate, n as maybeRenderHead, u as unescapeHTML } from './astro/server_DJHfVkFr.mjs';
import 'kleur/colors';
import 'clsx';

const html = "";

				const frontmatter = {"jsonUrl":"/jsons/roadmaps/api-design.json","pdfUrl":"/pdfs/roadmaps/api-design.pdf","order":9,"isForkable":false,"briefTitle":"API Design","briefDescription":"Step by step guide to learn how to design and build robust APIs.","title":"API Design","description":"Step by step guide to learn how to design and build robust APIs.","isNew":true,"hasTopics":true,"dimensions":{"width":968,"height":2317.91},"schema":{"headline":"API Design","description":"Step by step guide to learn how to design and build robust APIs.","imageUrl":"https://roadmap.sh/roadmaps/api-design.png","datePublished":"2023-05-17","dateModified":"2023-05-17"},"seo":{"title":"API Design Roadmap","description":"Learn how to design and develop robust APIs with this community-driven API Design roadmap. It lists all the essential skills and tools you need to develop APIs.","keywords":["guide to becoming a api designer","guide to becoming an api engineer","api developer","api engineer","api skills","guide to api","asp.net developer roadmap","asp net developer roadmap","asp developer roadmap","api roadmap","api skills","api skills test","skills for api","cloud development","what is api","api quiz","api interview questions","api engineer roadmap","api developer roadmap","become an api developer","api developer career path","api developer","modern api developer"]},"relatedRoadmaps":["backend","devops","python","golang","java","nodejs"],"sitemap":{"priority":1,"changefreq":"monthly"},"tags":["roadmap","main-sitemap","skill-roadmap"],"renderer":"editor"};
				const file = "/workspaces/developer-roadmap/src/data/roadmaps/api-design/api-design.md";
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

const __vite_glob_2_3 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
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

export { __vite_glob_2_3 as _ };
