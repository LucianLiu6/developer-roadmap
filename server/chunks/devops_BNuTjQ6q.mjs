import { l as createComponent, m as renderTemplate, n as maybeRenderHead, u as unescapeHTML } from './astro/server_DJHfVkFr.mjs';
import 'kleur/colors';
import 'clsx';

const html = "";

				const frontmatter = {"jsonUrl":"/jsons/roadmaps/devops.json","pdfUrl":"/pdfs/roadmaps/devops.pdf","order":3,"briefTitle":"DevOps","briefDescription":"Step by step guide for DevOps or operations role in 2024","title":"DevOps Roadmap","description":"Step by step guide for DevOps, SRE or any other Operations Role in 2024","hasTopics":true,"isForkable":true,"tnsBannerLink":"https://thenewstack.io?utm_source=roadmap.sh&utm_medium=Referral&utm_campaign=Alert","question":{"title":"What is DevOps?","description":"DevOps is a cultural and collaborative mindset that emphasizes communication, collaboration, integration, and automation between development and operations teams in order to achieve faster and more reliable software delivery.\n\nDevOps is not a specific job title or role, but rather a set of practices and principles that can be applied across a variety of roles in software development and IT operations. Anyone involved in the software development and delivery process can adopt a DevOps mindset and apply DevOps practices in their work, including developers, testers, operations engineers, product managers, and others.\n\n## What is a DevOps Engineer?\nWhile DevOps is not a specific job title or role, organizations often hire for a \"DevOps Engineer\" role. A DevOps Engineer is a software engineer who specializes in the practices and tools that enable the continuous delivery of software. DevOps Engineers are responsible for the design and implementation of applications, software, and services for their organization, and they work closely with developers, testers, and operations staff to oversee the code releases.\n"},"dimensions":{"width":968,"height":2527.46},"schema":{"headline":"DevOps Roadmap","description":"Learn to become a modern DevOps engineer by following the steps, skills, resources and guides listed in our community-driven roadmap.","imageUrl":"https://roadmap.sh/roadmaps/devops.png","datePublished":"2023-01-05","dateModified":"2023-06-10"},"seo":{"title":"DevOps Roadmap: Learn to become a DevOps Engineer or SRE","description":"Learn to become a modern DevOps engineer by following the steps, skills, resources and guides listed in our community-driven roadmap.","keywords":["devops roadmap 2024","sre roadmap 2024","operations roadmap 2024","guide to becoming a devops engineer","devops roadmap","sre roadmap","site reliability engineer roadmap","operations roles","become devops","devops skills","modern devops skills","devops skills test","skills for devops","learn devops","what is devops","what is sre","devops quiz","devops interview questions"]},"relatedRoadmaps":["backend","docker","kubernetes","python","java","golang","javascript","nodejs"],"sitemap":{"priority":1,"changefreq":"monthly"},"tags":["roadmap","main-sitemap","role-roadmap"]};
				const file = "/workspaces/developer-roadmap/src/data/roadmaps/devops/devops.md";
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

const __vite_glob_2_15 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
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

export { __vite_glob_2_15 as _ };
