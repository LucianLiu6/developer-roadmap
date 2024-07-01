import { l as createComponent, m as renderTemplate, n as maybeRenderHead, u as unescapeHTML } from './astro/server_DJHfVkFr.mjs';
import 'kleur/colors';
import 'clsx';

const html = "";

				const frontmatter = {"jsonUrl":"/jsons/roadmaps/software-architect.json","pdfUrl":"/pdfs/roadmaps/software-architect.pdf","order":8,"briefTitle":"Software Architect","briefDescription":"Step by step guide to become a Software Architect in 2024","title":"Software Architect","description":"Step by step guide to becoming a Software Architect in 2024","isNew":false,"hasTopics":true,"dimensions":{"width":968,"height":1882.18},"schema":{"headline":"Software Architect Roadmap","description":"Learn to become a Software Architect with this interactive step by step guide in 2024. We also have resources and short descriptions attached to the roadmap items so you can get everything you want to learn in one place.","imageUrl":"https://roadmap.sh/roadmaps/software-architect.png","datePublished":"2023-01-05","dateModified":"2023-01-20"},"seo":{"title":"Software Architect Roadmap","description":"Community driven, articles, resources, guides, interview questions, quizzes for DevOps. Learn to become a modern DevOps engineer by following the steps, skills, resources and guides listed in this roadmap.","keywords":["solution architect roadmap","enterprise architect roadmap","guide to becoming a software architect","guide to becoming a Software Architect","software architect roadmap","db administrator roadmap","software architect roadmap","software architect skills","db administrator skills","become software architect","modern software architect skills","software architect skills test","skills for software architect","skills for software architect","learn software architect","what is software architect","software architect quiz","software architect interview questions"]},"relatedRoadmaps":["backend","software-design-architecture","python","nodejs","golang","java","devops"],"sitemap":{"priority":1,"changefreq":"monthly"},"tags":["roadmap","main-sitemap","role-roadmap"]};
				const file = "/workspaces/developer-roadmap/src/data/roadmaps/software-architect/software-architect.md";
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

const __vite_glob_2_40 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
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

export { __vite_glob_2_40 as _ };
