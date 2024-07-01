import { l as createComponent, m as renderTemplate, n as maybeRenderHead, u as unescapeHTML } from './astro/server_DJHfVkFr.mjs';
import 'kleur/colors';
import 'clsx';

const html = "";

				const frontmatter = {"pdfUrl":"https://roadmap.sh/roadmaps/product-manager.pdf","order":19,"title":"Product Manager","description":"Everything you need to know to become a Product Manager.","briefTitle":"Product Manager","briefDescription":"Everything you need to know to become a Product Manager.","hasTopics":true,"isHidden":false,"isUpcoming":false,"isNew":true,"seo":{"title":"Product Manager","description":"Learn what product management is, what product managers do and how to become one using our community-driven roadmap."},"dimensions":{"width":968,"height":5200},"schema":{"headline":"Product Manager","description":"Learn what product management is, what product managers do and how to become one using our community-driven roadmap.","datePublished":"2024-06-10","dateModified":"2024-06-27","imageUrl":"https://roadmap.sh/roadmaps/product-manager.png"},"relatedRoadmaps":["ux-design","data-analyst","api-design","design-system","software-architect"],"sitemap":{"priority":1,"changefreq":"monthly"},"tags":["roadmap","main-sitemap","role-roadmap"],"renderer":"editor"};
				const file = "/workspaces/developer-roadmap/src/data/roadmaps/product-manager/product-manager.md";
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

const __vite_glob_2_32 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
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

export { __vite_glob_2_32 as _ };
