import { l as createComponent, m as renderTemplate, n as maybeRenderHead, u as unescapeHTML } from './astro/server_DJHfVkFr.mjs';
import 'kleur/colors';
import 'clsx';

const html = "";

				const frontmatter = {"jsonUrl":"/jsons/roadmaps/cyber-security.json","pdfUrl":"/pdfs/roadmaps/cyber-security.pdf","order":11,"briefTitle":"Cyber Security","briefDescription":"Step by step guide to becoming a Cyber Security Expert in 2024","title":"Cyber Security Expert","description":"Step by step guide to becoming a Cyber Security Expert in 2024","isNew":false,"hasTopics":true,"dimensions":{"width":968,"height":3316.15},"schema":{"headline":"Cyber Security Roadmap: Learn to become a Cyber Security Expert","description":"Learn how to become a Cyber Security expert with this interactive step by step guide in 2024. We also have resources and short descriptions attached to the roadmap items so you can get everything you want to learn in one place.","imageUrl":"https://roadmap.sh/roadmaps/cyber-security.png","datePublished":"2023-01-05","dateModified":"2023-01-20"},"seo":{"title":"Cyber Security Roadmap: Learn to become a Cyber Security Expert","description":"Community driven, articles, resources, guides, interview questions, quizzes for cyber security. Learn to become a modern Cyber Security Expert by following the steps, skills, resources and guides listed in this roadmap.","keywords":["guide to becoming a cyber security expert","guide to becoming a cyber security expert","cyber security expert","cyber security skills","guide to cyber security","cyber security roadmap","cyber security skills","cyber security skills test","skills for cyber security","what is cyber security","cyber security quiz","cyber security interview questions","cyber security engineer roadmap","cyber security expert roadmap","become a cyber security expert","cyber security expert career path","cyber security expert","modern cyber security expert"]},"relatedRoadmaps":["backend","devops","python"],"sitemap":{"priority":1,"changefreq":"monthly"},"tags":["roadmap","main-sitemap","role-roadmap"]};
				const file = "/workspaces/developer-roadmap/src/data/roadmaps/cyber-security/cyber-security.md";
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

const __vite_glob_2_11 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
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

export { __vite_glob_2_11 as _ };
