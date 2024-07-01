import { l as createComponent, m as renderTemplate, n as maybeRenderHead, u as unescapeHTML } from './astro/server_DJHfVkFr.mjs';
import 'kleur/colors';
import 'clsx';

const html = "";

				const frontmatter = {"pdfUrl":"/pdfs/roadmaps/technical-writer.pdf","order":17,"briefTitle":"Technical Writer","briefDescription":"Roadmap for anyone looking for a career in technical writing","title":"Technical Writer","description":"Roadmap for anyone looking for a career in technical writing","hasTopics":true,"isNew":false,"dimensions":{"width":968,"height":1958.71},"schema":{"headline":"Technical Writer Roadmap","description":"Learn what technical writing is, what technical writers do and how to become one using our community-driven roadmap.","imageUrl":"https://roadmap.sh/roadmaps/technical-writer.png","datePublished":"2023-11-07","dateModified":"2023-11-07"},"seo":{"title":"Technical Writer Roadmap","description":"Learn what technical writing is, what technical writers do and how to become one using our community-driven roadmap.","keywords":["technical writer roadmap 2024","guide to becoming a technical writer","technical writer roadmap","technical writer","technical writing skills","technical writing","technical writing test","become a technical writer","technical writer career path","skills for technical writing","learn technical writing","what is technical writing","technical writer quiz","technical writer interview questions"]},"sitemap":{"priority":1,"changefreq":"monthly"},"tags":["roadmap","main-sitemap","role-roadmap"]};
				const file = "/workspaces/developer-roadmap/src/data/roadmaps/technical-writer/technical-writer.md";
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

const __vite_glob_2_45 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
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

export { __vite_glob_2_45 as _ };
