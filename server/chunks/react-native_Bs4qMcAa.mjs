import { l as createComponent, m as renderTemplate, n as maybeRenderHead, u as unescapeHTML } from './astro/server_DJHfVkFr.mjs';
import 'kleur/colors';
import 'clsx';

const html = "";

				const frontmatter = {"order":13,"briefTitle":"React Native","briefDescription":"Step by step guide to becoming a React Native Developer in 2024","title":"React Native Developer","description":"Step by step guide to becoming a React Native developer in 2024","pdfUrl":"/pdfs/roadmaps/react-native.pdf","hasTopics":true,"isNew":false,"dimensions":{"width":968,"height":2333.39},"schema":{"headline":"React Native Roadmap","description":"Learn how to become a React Native Developer with this interactive step by step guide in 2024. We also have resources and short descriptions attached to the roadmap items so you can get everything you want to learn in one place.","imageUrl":"https://roadmap.sh/roadmaps/react-native.png","datePublished":"2023-06-27","dateModified":"2023-06-27"},"seo":{"title":"Learn to become a modern React Native developer","description":"Community driven, articles, resources, guides, interview questions, quizzes for react native development. Learn to become a modern React Native developer by following the steps, skills, resources and guides listed in this roadmap.","keywords":["guide to becoming a react native developer","guide to becoming a react native developer","react native developer","react native engineer","react native skills","guide to react native","react native roadmap","react native skills","react native skills test","skills for react native","what is react native","react native quiz","react native interview questions","react native engineer roadmap","react native developer roadmap","become a react native developer","react native developer career path","react native developer","modern react native developer"]},"relatedRoadmaps":["javascript","react","frontend","flutter","android"],"sitemap":{"priority":1,"changefreq":"monthly"},"tags":["roadmap","main-sitemap","skill-roadmap"]};
				const file = "/workspaces/developer-roadmap/src/data/roadmaps/react-native/react-native.md";
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

const __vite_glob_2_36 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
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

export { __vite_glob_2_36 as _ };
