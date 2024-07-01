import { l as createComponent, m as renderTemplate, n as maybeRenderHead, u as unescapeHTML } from './astro/server_DJHfVkFr.mjs';
import 'kleur/colors';
import 'clsx';

const html = "";

				const frontmatter = {"jsonUrl":"/jsons/roadmaps/terraform.json","pdfUrl":"/pdfs/roadmaps/terraform.pdf","order":15,"briefTitle":"Terraform","briefDescription":"Step by step guide to learning Terraform in 2024","title":"Terraform Roadmap","description":"Step by step guide to learning Terraform in 2024","isNew":true,"hasTopics":true,"dimensions":{"width":968,"height":2600},"schema":{"headline":"Terraform Roadmap","description":"Learn how to use Terraform with this interactive step by step guide in 2024. We also have resources and short descriptions attached to the roadmap items so you can get everything you want to learn in one place.","imageUrl":"https://roadmap.sh/roadmaps/terraform.png","datePublished":"2024-06-21","dateModified":"2024-06-21"},"seo":{"title":"Terraform Roadmap - roadmap.sh","description":"Step by step guide to learn Terraform in 2024. We also have resources and short descriptions attached to the roadmap items so you can get everything you want to learn in one place.","keywords":["terraform tutorial","step by step guide for terraform","terraform for beginners","how to learn terraform","use terraform in production","terraform roadmap 2024","guide to learning terraform","terraform roadmap","terraform learning path","terraform learning roadmap","container roadmap","terraform","terraform learning guide","terraform skills","terraform for development","terraform for development skills","terraform for development skills test","terraform learning guide","become a terraform expert","terraform career path","learn terraform for development","what is terraform","terraform quiz","terraform interview questions"]},"relatedRoadmaps":["devops","backend"],"sitemap":{"priority":1,"changefreq":"monthly"},"tags":["roadmap","main-sitemap","skill-roadmap"],"renderer":"editor"};
				const file = "/workspaces/developer-roadmap/src/data/roadmaps/terraform/terraform.md";
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

const __vite_glob_2_46 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
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

export { __vite_glob_2_46 as _ };
