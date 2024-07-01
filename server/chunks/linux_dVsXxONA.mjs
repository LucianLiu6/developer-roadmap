import { l as createComponent, m as renderTemplate, n as maybeRenderHead, u as unescapeHTML } from './astro/server_DJHfVkFr.mjs';
import 'kleur/colors';
import 'clsx';

const html = "";

				const frontmatter = {"jsonUrl":"/jsons/roadmaps/linux.json","pdfUrl":"/pdfs/roadmaps/linux.pdf","order":14,"briefTitle":"Linux","briefDescription":"Step by step guide to learning Linux in 2024","title":"Linux Roadmap","description":"Step by step guide to learning Linux in 2024","isNew":true,"hasTopics":true,"dimensions":{"width":968,"height":2070},"schema":{"headline":"Linux Roadmap","description":"Learn how to use Linux with this interactive step by step guide in 2024. We also have resources and short descriptions attached to the roadmap items so you can get everything you want to learn in one place.","imageUrl":"https://roadmap.sh/roadmaps/linux.png","datePublished":"2024-04-24","dateModified":"2024-04-24"},"seo":{"title":"Linux Roadmap - roadmap.sh","description":"Step by step guide to learn Linux in 2024. We also have resources and short descriptions attached to the roadmap items so you can get everything you want to learn in one place.","keywords":["linux tutorial","step by step guide for linux","linux for beginners","how to learn linux","use linux in production","linux roadmap 2024","guide to learning linux","linux roadmap","linux learning path","linux learning roadmap","container roadmap","linux","linux learning guide","linux skills","linux for development","linux for development skills","linux for development skills test","linux learning guide","become a linux expert","linux career path","learn linux for development","what is linux","linux quiz","linux interview questions"]},"relatedRoadmaps":["devops","backend","docker"],"sitemap":{"priority":1,"changefreq":"monthly"},"tags":["roadmap","main-sitemap","skill-roadmap"]};
				const file = "/workspaces/developer-roadmap/src/data/roadmaps/linux/linux.md";
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

const __vite_glob_2_27 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
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

export { __vite_glob_2_27 as _ };
