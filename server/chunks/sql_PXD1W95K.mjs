import { l as createComponent, m as renderTemplate, n as maybeRenderHead, u as unescapeHTML } from './astro/server_DJHfVkFr.mjs';
import 'kleur/colors';
import 'clsx';

const html = "";

				const frontmatter = {"jsonUrl":"/jsons/roadmaps/sql.json","pdfUrl":"/pdfs/roadmaps/sql.pdf","order":8,"briefTitle":"SQL","briefDescription":"Step by step guide to learning SQL in 2024","title":"SQL Roadmap","description":"Step by step guide to learning SQL in 2024","isNew":false,"hasTopics":true,"dimensions":{"width":968,"height":2116.16},"schema":{"headline":"SQL Roadmap","description":"Comprehensive roadmap to learn SQL from scratch in 2024. From basic syntax to advanced querying, this step-by-step guide will equip you with the skills needed to excel in database management and data analysis.","imageUrl":"https://roadmap.sh/roadmaps/sql.png","datePublished":"2023-07-10","dateModified":"2023-07-10"},"seo":{"title":"SQL Roadmap - roadmap.sh","description":"Comprehensive roadmap to learn SQL from scratch in 2024. From basic syntax to advanced querying, this step-by-step guide will equip you with the skills needed to excel in database management and data analysis.","ogImageUrl":"https://roadmap.sh/og-images/sql-roadmap.png","keywords":["sql tutorial","step by step guide for sql","sql for beginners","how to learn sql","use sql in production","sql roadmap 2024","guide to learning sql","sql roadmap","sql learning path","sql learning roadmap","container roadmap","sql","sql learning guide","sql skills","sql for development","sql for development skills","sql for development skills test","sql learning guide","become a sql expert","sql career path","learn sql for development","what is sql","sql quiz","sql interview questions"]},"relatedRoadmaps":["postgresql-dba","backend","devops"],"sitemap":{"priority":1,"changefreq":"monthly"},"tags":["roadmap","main-sitemap","skill-roadmap"]};
				const file = "/workspaces/developer-roadmap/src/data/roadmaps/sql/sql.md";
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

const __vite_glob_2_43 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
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

export { __vite_glob_2_43 as _ };
