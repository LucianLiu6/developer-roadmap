import { l as createComponent, m as renderTemplate, n as maybeRenderHead, u as unescapeHTML } from './astro/server_DJHfVkFr.mjs';
import 'kleur/colors';
import 'clsx';

const html = "";

				const frontmatter = {"jsonUrl":"/jsons/roadmaps/prompt-engineering.json","pdfUrl":"/pdfs/roadmaps/prompt-engineering.pdf","order":14,"briefTitle":"Prompt Engineering","briefDescription":"Step by step guide to learning Prompt Engineering","title":"Prompt Engineering Roadmap","description":"Step by step guide to learning Prompt Engineering","hasTopics":true,"dimensions":{"width":968,"height":1624.16},"schema":{"headline":"Prompt Engineering Roadmap: Step by step guide to learning Prompt Engineering","description":"Learn how to use Prompt Engineering with this interactive step by step guide. We also have resources and short descriptions attached to the roadmap items so you can get everything you want to learn in one place.","imageUrl":"https://roadmap.sh/roadmaps/prompt-engineering.png","datePublished":"2023-05-20","dateModified":"2023-05-20"},"seo":{"title":"Prompt Engineering Roadmap - roadmap.sh","description":"Step by step guide to learn Prompt Engineering. We also have resources and short descriptions attached to the roadmap items so you can get everything you want to learn in one place.","keywords":["prompt engineering tutorial","step by step prompt engineering","prompt engineering roadmap 2024","guide to learning prompt engineering","prompt engineering roadmap","prompt engineering","prompt engineering engineer","prompt engineering skills","prompt engineering development","prompt engineering development skills","prompt engineering development skills test","prompt engineering engineer roadmap","prompt engineering roadmap","become a prompt engineering","prompt engineering career path","learn prompt engineering development","what is prompt engineering","prompt engineering quiz","prompt engineering interview questions"]},"relatedRoadmaps":["python","backend","devops"],"sitemap":{"priority":1,"changefreq":"monthly"},"tags":["roadmap","main-sitemap","skill-roadmap"]};
				const file = "/workspaces/developer-roadmap/src/data/roadmaps/prompt-engineering/prompt-engineering.md";
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

const __vite_glob_2_33 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
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

export { __vite_glob_2_33 as _ };
