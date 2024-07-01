import { l as createComponent, m as renderTemplate, n as maybeRenderHead, u as unescapeHTML } from './astro/server_DJHfVkFr.mjs';
import 'kleur/colors';
import 'clsx';

const html = "";

				const frontmatter = {"jsonUrl":"/jsons/roadmaps/aspnet-core.json","pdfUrl":"/pdfs/roadmaps/aspnet-core.pdf","order":9,"briefTitle":"ASP.NET Core","briefDescription":"Step by step guide to becoming an ASP.NET Core Developer in 2024","title":"ASP.NET Core Developer","description":"Step by step guide to becoming an ASP.NET core developer in 2024","isNew":false,"hasTopics":true,"dimensions":{"width":968,"height":2773.45},"schema":{"headline":"ASP.NET Core Developer Roadmap","description":"Learn how to become a ASP.NET Core Developer with this interactive step by step guide in 2024. We also have resources and short descriptions attached to the roadmap items so you can get everything you want to learn in one place.","imageUrl":"https://roadmap.sh/roadmaps/aspnet-core.png","datePublished":"2023-01-05","dateModified":"2023-01-20"},"seo":{"title":"Learn to become a modern ASP.NET core developer","description":"Community driven, articles, resources, guides, interview questions, quizzes for asp.net core development. Learn to become a modern ASP.NET core developer by following the steps, skills, resources and guides listed in this roadmap.","keywords":["guide to becoming a developer","guide to becoming an asp.net core developer","asp.net core developer","asp.net core engineer","asp.net core skills","guide to asp.net core","asp.net developer roadmap","asp net developer roadmap","asp developer roadmap","asp.net core roadmap","asp.net core skills","asp.net core skills test","skills for asp.net core","cloud development","what is asp.net core","asp.net core quiz","asp.net core interview questions","asp.net core engineer roadmap","asp.net core developer roadmap","become an asp.net core developer","asp.net core developer career path","asp.net core developer","modern asp.net core developer"]},"relatedRoadmaps":["backend","devops","python","golang","java","nodejs"],"sitemap":{"priority":1,"changefreq":"monthly"},"tags":["roadmap","main-sitemap","skill-roadmap"]};
				const file = "/workspaces/developer-roadmap/src/data/roadmaps/aspnet-core/aspnet-core.md";
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

const __vite_glob_2_4 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
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

export { __vite_glob_2_4 as _ };
