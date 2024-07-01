import { l as createComponent, m as renderTemplate, n as maybeRenderHead, u as unescapeHTML } from './astro/server_DJHfVkFr.mjs';
import 'kleur/colors';
import 'clsx';

const html = "";

				const frontmatter = {"pdfUrl":"/pdfs/roadmaps/game-developer.pdf","order":17,"briefTitle":"Game Developer","briefDescription":"Roadmap to becoming a Game Developer in 2024","title":"Game Developer","description":"Roadmap to becoming a Game Developer in 2024","hasTopics":true,"isNew":false,"dimensions":{"width":968,"height":2104.59},"schema":{"headline":"Game Developer Roadmap","description":"Learn what Game Development is, what game developers do and how to become one using our community-driven roadmap.","imageUrl":"https://roadmap.sh/roadmaps/game-developer.png","datePublished":"2023-10-26","dateModified":"2023-10-26"},"seo":{"title":"Game Developer Roadmap","description":"Learn what game development is, what game developers do and how to become one using our community-driven roadmap.","keywords":["game developer roadmap 2024","game developer roadmap 2024","guide to becoming a developer","guide to becoming a game developer","game developer roadmap","game developer","game engineer","game skills","game development","javascript developer","game development skills","game development skills test","game engineer roadmap","game developer roadmap","become a game developer","game developer career path","javascript developer","modern javascript developer","node developer","skills for game development","learn game development","what is game development","game developer quiz","game developer interview questions"]},"relatedRoadmaps":["backend"],"sitemap":{"priority":1,"changefreq":"monthly"},"tags":["roadmap","main-sitemap","role-roadmap"]};
				const file = "/workspaces/developer-roadmap/src/data/roadmaps/game-developer/game-developer.md";
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

const __vite_glob_2_20 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
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

export { __vite_glob_2_20 as _ };
