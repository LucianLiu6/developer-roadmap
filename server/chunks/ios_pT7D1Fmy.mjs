import { l as createComponent, m as renderTemplate, n as maybeRenderHead, u as unescapeHTML } from './astro/server_DJHfVkFr.mjs';
import 'kleur/colors';
import 'clsx';

const html = "";

				const frontmatter = {"pdfUrl":"/pdfs/roadmaps/ios.pdf","order":5,"briefTitle":"iOS","briefDescription":"Step by step guide to becoming an iOS Developer in 2024","title":"iOS Developer","description":"Step by step guide to becoming an iOS developer in 2024","hasTopics":true,"isNew":true,"dimensions":{"width":968,"height":3990},"schema":{"headline":"iOS Developer Roadmap","description":"Learn how to become a iOS Developer with this interactive step by step guide in 2024. We also have resources and short descriptions attached to the roadmap items so you can get everything you want to learn in one place.","imageUrl":"https://roadmap.sh/roadmaps/ios.png","datePublished":"2023-01-24","dateModified":"2023-10-24"},"seo":{"title":"iOS Developer Roadmap: Learn to become an iOS developer","description":"Community driven, articles, resources, guides, interview questions, quizzes for ios development. Learn to become a modern iOS developer by following the steps, skills, resources and guides listed in this roadmap.","keywords":["guide to becoming an ios developer","ios developer roadmap","ios roadmap","become ios developer","ios developer skills","ios skills test","skills for ios development","learn ios development","what is ios","ios quiz","ios interview questions"]},"relatedRoadmaps":["react-native","flutter"],"sitemap":{"priority":1,"changefreq":"monthly"},"tags":["roadmap","main-sitemap","role-roadmap"],"renderer":"editor"};
				const file = "/workspaces/developer-roadmap/src/data/roadmaps/ios/ios.md";
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

const __vite_glob_2_23 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
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

export { __vite_glob_2_23 as _ };
