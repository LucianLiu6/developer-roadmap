import { l as createComponent, m as renderTemplate, n as maybeRenderHead, u as unescapeHTML } from './astro/server_DJHfVkFr.mjs';
import 'kleur/colors';
import 'clsx';

const html = "";

				const frontmatter = {"pdfUrl":"/pdfs/roadmaps/android.pdf","order":5,"briefTitle":"Android","briefDescription":"Step by step guide to becoming an Android Developer in 2024","title":"Android Developer","description":"Step by step guide to becoming an Android developer in 2024","hasTopics":true,"isNew":false,"dimensions":{"width":968,"height":2197.76},"schema":{"headline":"Android Developer Roadmap","description":"Learn how to become a Android Developer with this interactive step by step guide in 2024. We also have resources and short descriptions attached to the roadmap items so you can get everything you want to learn in one place.","imageUrl":"https://roadmap.sh/roadmaps/android.png","datePublished":"2023-01-24","dateModified":"2023-10-24"},"seo":{"title":"Android Developer Roadmap: Learn to become an Android developer","description":"Community driven, articles, resources, guides, interview questions, quizzes for android development. Learn to become a modern Android developer by following the steps, skills, resources and guides listed in this roadmap.","keywords":["guide to becoming an android developer","android developer roadmap","android roadmap","become android developer","android developer skills","android skills test","skills for android development","learn android development","what is android","android quiz","android interview questions"]},"relatedRoadmaps":["react-native","flutter"],"sitemap":{"priority":1,"changefreq":"monthly"},"tags":["roadmap","main-sitemap","role-roadmap"]};
				const file = "/workspaces/developer-roadmap/src/data/roadmaps/android/android.md";
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

const __vite_glob_2_1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
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

export { __vite_glob_2_1 as _ };
