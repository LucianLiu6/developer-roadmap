import { l as createComponent, m as renderTemplate, n as maybeRenderHead, u as unescapeHTML } from './astro/server_DJHfVkFr.mjs';
import 'kleur/colors';
import 'clsx';

const html = "";

				const frontmatter = {"jsonUrl":"/jsons/roadmaps/code-review.json","pdfUrl":"/pdfs/roadmaps/code-review.pdf","order":14,"briefTitle":"Code Review","briefDescription":"Learn what to focus on when conducting a code review.","title":"Code Review Pyramid","description":"Learn what to focus on when conducting a code review.","isNew":false,"hasTopics":true,"dimensions":{"width":968,"height":506.06},"schema":{"headline":"Code Review Guide","description":"Learn what to review when conducting Code Reviews with this interactive guide. We also have resources and short descriptions attached to the roadmap items so you can get everything you want to learn in one place.","imageUrl":"https://roadmap.sh/roadmaps/code-review.png","datePublished":"2023-06-03","dateModified":"2023-06-03"},"seo":{"title":"Code Review - roadmap.sh","description":"Learn what to review when conducting code reviews. We also have questions to ask yourself under each node of the pyramid to guide you further.","keywords":["code review tutorial","code review guide","code review for beginners","code reviews","code review best practices","code review roadmap 2024","guide to learning code review","code review roadmap","code review learning path","code review learning roadmap","what is code review"]},"relatedRoadmaps":["backend","frontend","devops","system-design"],"sitemap":{"priority":1,"changefreq":"monthly"},"tags":["roadmap","main-sitemap","skill-roadmap"]};
				const file = "/workspaces/developer-roadmap/src/data/roadmaps/code-review/code-review.md";
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

const __vite_glob_2_8 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
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

export { __vite_glob_2_8 as _ };
