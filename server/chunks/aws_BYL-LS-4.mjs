import { l as createComponent, m as renderTemplate, n as maybeRenderHead, u as unescapeHTML } from './astro/server_DJHfVkFr.mjs';
import 'kleur/colors';
import 'clsx';

const html = "";

				const frontmatter = {"jsonUrl":"/jsons/roadmaps/aws.json","pdfUrl":"/pdfs/roadmaps/aws.pdf","order":14,"briefTitle":"AWS","briefDescription":"Step by step guide to learning AWS in 2024","title":"AWS Roadmap","description":"Step by step guide to learning AWS in 2024","isNew":false,"hasTopics":true,"dimensions":{"width":968,"height":2183.87},"schema":{"headline":"AWS Roadmap","description":"Learn how to use AWS with this interactive step by step guide in 2024. We also have resources and short descriptions attached to the roadmap items so you can get everything you want to learn in one place.","imageUrl":"https://roadmap.sh/roadmaps/aws.png","datePublished":"2023-11-29","dateModified":"2023-11-29"},"seo":{"title":"AWS Roadmap - roadmap.sh","description":"Step by step guide to learn AWS in 2024. We also have resources and short descriptions attached to the roadmap items so you can get everything you want to learn in one place.","keywords":["aws tutorial","step by step guide for aws","aws for beginners","how to learn aws","use aws in production","aws roadmap 2024","guide to learning aws","aws roadmap","aws learning path","aws learning roadmap","container roadmap","aws","aws learning guide","aws skills","aws for development","aws for development skills","aws for development skills test","aws learning guide","become a aws expert","aws career path","learn aws for development","what is aws","aws quiz","aws interview questions"]},"relatedRoadmaps":["devops","backend"],"sitemap":{"priority":1,"changefreq":"monthly"},"tags":["roadmap","main-sitemap","skill-roadmap"]};
				const file = "/workspaces/developer-roadmap/src/data/roadmaps/aws/aws.md";
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

const __vite_glob_2_5 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
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

export { __vite_glob_2_5 as _ };
