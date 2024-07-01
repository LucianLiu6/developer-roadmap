import { l as createComponent, m as renderTemplate, n as maybeRenderHead, u as unescapeHTML } from './astro/server_DJHfVkFr.mjs';
import 'kleur/colors';
import 'clsx';

const html = "";

				const frontmatter = {"jsonUrl":"/jsons/roadmaps/docker.json","pdfUrl":"/pdfs/roadmaps/docker.pdf","order":14,"briefTitle":"Docker","briefDescription":"Step by step guide to learning Docker in 2024","title":"Docker Roadmap","description":"Step by step guide to learning Docker in 2024","isNew":false,"hasTopics":true,"dimensions":{"width":968,"height":1808.98},"schema":{"headline":"Docker Roadmap","description":"Learn how to use Docker with this interactive step by step guide in 2024. We also have resources and short descriptions attached to the roadmap items so you can get everything you want to learn in one place.","imageUrl":"https://roadmap.sh/roadmaps/docker.png","datePublished":"2023-05-10","dateModified":"2023-05-10"},"seo":{"title":"Docker Roadmap - roadmap.sh","description":"Step by step guide to learn Docker in 2024. We also have resources and short descriptions attached to the roadmap items so you can get everything you want to learn in one place.","keywords":["docker tutorial","step by step guide for docker","docker for beginners","how to learn docker","use docker in production","docker roadmap 2024","guide to learning docker","docker roadmap","docker learning path","docker learning roadmap","container roadmap","docker","docker learning guide","docker skills","docker for development","docker for development skills","docker for development skills test","docker learning guide","become a docker expert","docker career path","learn docker for development","what is docker","docker quiz","docker interview questions"]},"relatedRoadmaps":["devops","backend"],"sitemap":{"priority":1,"changefreq":"monthly"},"tags":["roadmap","main-sitemap","skill-roadmap"]};
				const file = "/workspaces/developer-roadmap/src/data/roadmaps/docker/docker.md";
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

const __vite_glob_2_16 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
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

export { __vite_glob_2_16 as _ };
