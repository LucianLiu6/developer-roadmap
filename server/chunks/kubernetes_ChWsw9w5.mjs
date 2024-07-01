import { l as createComponent, m as renderTemplate, n as maybeRenderHead, u as unescapeHTML } from './astro/server_DJHfVkFr.mjs';
import 'kleur/colors';
import 'clsx';

const html = "";

				const frontmatter = {"jsonUrl":"/jsons/roadmaps/kubernetes.json","pdfUrl":"/pdfs/roadmaps/kubernetes.pdf","order":14,"briefTitle":"Kubernetes","briefDescription":"Step by step guide to learning Kubernetes in 2024","title":"Kubernetes Roadmap","description":"Step by step guide to learning Kubernetes in 2024","isNew":false,"hasTopics":true,"tnsBannerLink":"https://thenewstack.io/kubernetes?utm_source=roadmap.sh&utm_medium=Referral&utm_campaign=Alert","dimensions":{"width":968,"height":1785.73},"schema":{"headline":"Kubernetes Roadmap","description":"Learn how to use Kubernetes with this interactive step by step guide in 2024. We also have resources and short descriptions attached to the roadmap items so you can get everything you want to learn in one place.","imageUrl":"https://roadmap.sh/roadmaps/kubernetes.png","datePublished":"2023-05-04","dateModified":"2023-05-04"},"seo":{"title":"Kubernetes Roadmap - roadmap.sh","description":"Step by step guide to learn Kubernetes in 2024. We also have resources and short descriptions attached to the roadmap items so you can get everything you want to learn in one place.","keywords":["kubernetes tutorial","step by step kubernetes","kubernetes roadmap 2024","guide to learning kubernetes","kubernetes roadmap","kubernetes","kubernetes engineer","kubernetes skills","kubernetes development","kubernetes development skills","kubernetes development skills test","kubernetes engineer roadmap","kubernetes roadmap","become a kubernetes expert","kubernetes career path","learn kubernetes development","what is kubernetes","kubernetes quiz","kubernetes interview questions"]},"relatedRoadmaps":["devops","system-design","backend"],"sitemap":{"priority":1,"changefreq":"monthly"},"tags":["roadmap","main-sitemap","skill-roadmap"]};
				const file = "/workspaces/developer-roadmap/src/data/roadmaps/kubernetes/kubernetes.md";
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

const __vite_glob_2_26 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
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

export { __vite_glob_2_26 as _ };
