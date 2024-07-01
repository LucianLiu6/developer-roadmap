import { l as createComponent, m as renderTemplate, n as maybeRenderHead, u as unescapeHTML } from './astro/server_DJHfVkFr.mjs';
import 'kleur/colors';
import 'clsx';

const html = "";

				const frontmatter = {"pdfUrl":"/pdfs/roadmaps/server-side-game-developer.pdf","order":17,"briefTitle":"Server Side Game Developer","briefDescription":"Roadmap to becoming a Server Side Game Developer in 2024","title":"Server Side Game Developer","description":"Roadmap to becoming a Server Side Game Developer in 2024","hasTopics":true,"isNew":true,"isHidden":true,"dimensions":{"width":968,"height":2618.02},"schema":{"headline":"Server Side Game Developer Roadmap","description":"Learn what Server Side Game Development is, what server side game developers do and how to become one using our community-driven roadmap.","imageUrl":"https://roadmap.sh/roadmaps/server-side-game-developer.png","datePublished":"2023-10-26","dateModified":"2023-10-26"},"seo":{"title":"Server Side Game Developer Roadmap","description":"Learn what Server Side Game Development is, what server side game developers do and how to become one using our community-driven roadmap.","keywords":["server side game developer roadmap 2024","server side game developer roadmap 2024","guide to becoming a server side game developer","guide to becoming a server side game developer","server side game developer roadmap","server side game developer","server side game engineer","server side game skills","server side game development","server side game development skills","server side game development skills test","server side game engineer roadmap","server side game developer roadmap","become a server side game developer","server side game developer career path","skills for game development","learn server side game development","what is server side game development","server side game developer quiz","server side game developer interview questions"]},"relatedRoadmaps":["backend"],"sitemap":{"priority":1,"changefreq":"monthly"},"tags":["roadmap","main-sitemap","role-roadmap"]};
				const file = "/workspaces/developer-roadmap/src/data/roadmaps/server-side-game-developer/server-side-game-developer.md";
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

const __vite_glob_2_39 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
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

export { __vite_glob_2_39 as _ };
