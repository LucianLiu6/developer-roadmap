import { l as createComponent, m as renderTemplate, n as maybeRenderHead, u as unescapeHTML } from './astro/server_DJHfVkFr.mjs';
import 'kleur/colors';
import 'clsx';

const html = "";

				const frontmatter = {"jsonUrl":"/jsons/roadmaps/rust.json","pdfUrl":"/pdfs/roadmaps/rust.pdf","order":11,"briefTitle":"Rust","briefDescription":"Step by step guide to becoming a Rust developer in 2024","title":"Rust Developer","description":"Step by step guide to becoming a Rust developer in 2024","hasTopics":true,"isNew":false,"dimensions":{"width":968,"height":2220.4},"schema":{"headline":"Rust Developer Roadmap","description":"Learn how to become a Rust Developer with this interactive step by step guide in 2024. We also have resources and short descriptions attached to the roadmap items so you can get everything you want to learn in one place.","imageUrl":"https://roadmap.sh/roadmaps/rust.png","datePublished":"2023-11-14","dateModified":"2023-11-14"},"seo":{"title":"Learn to become a Rust developer","description":"Community driven, articles, resources, guides, interview questions, quizzes for Rust development. Learn to become a modern Rust developer by following the steps, skills, resources and guides listed in this roadmap.","keywords":["guide to becoming a rust developer","rust developer","guide to rust","rust roadmap","rust skills","rust skills test","skills for rust","cloud development","what is rust","rust quiz","rust interview questions"]},"relatedRoadmaps":["backend","devops","golang","java","nodejs"],"sitemap":{"priority":1,"changefreq":"monthly"},"tags":["roadmap","main-sitemap","skill-roadmap"]};
				const file = "/workspaces/developer-roadmap/src/data/roadmaps/rust/rust.md";
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

const __vite_glob_2_38 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
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

export { __vite_glob_2_38 as _ };
