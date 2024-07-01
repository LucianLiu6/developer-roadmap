import { l as createComponent, m as renderTemplate, n as maybeRenderHead, u as unescapeHTML } from './astro/server_DJHfVkFr.mjs';
import 'kleur/colors';
import 'clsx';

const html = "";

				const frontmatter = {"jsonUrl":"/jsons/roadmaps/graphql.json","pdfUrl":"/pdfs/roadmaps/graphql.pdf","order":12,"briefTitle":"GraphQL","briefDescription":"Step by Step guide to learn GraphQL in 2024","title":"GraphQL","description":"Step by step guide to learn GraphQL in 2024","isNew":false,"hasTopics":true,"dimensions":{"width":968,"height":1669.8},"schema":{"headline":"GraphQL Roadmap","description":"Learn how to use GraphQL with this interactive step by step guide in 2024. We also have resources and short descriptions attached to the roadmap items so you can get everything you want to learn in one place.","imageUrl":"https://roadmap.sh/roadmaps/graphql.png","datePublished":"2023-01-05","dateModified":"2023-01-20"},"seo":{"title":"GraphQL Roadmap","description":"Learn GraphQL with this step by step guide and resources.","keywords":["guide to learn graphql","graphql roadmap","graphql roadmap","modern graphql roadmap","fullstack graphql roadmap","design and architecture roadmap","scalable design roadmap","design architecture patterns roadmap","application architectures"]},"relatedRoadmaps":["frontend","backend","nodejs","javascript","react","vue","angular"],"sitemap":{"priority":1,"changefreq":"monthly"},"tags":["roadmap","main-sitemap","skill-roadmap"]};
				const file = "/workspaces/developer-roadmap/src/data/roadmaps/graphql/graphql.md";
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

const __vite_glob_2_22 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
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

export { __vite_glob_2_22 as _ };
