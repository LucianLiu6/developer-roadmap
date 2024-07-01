import { l as createComponent, m as renderTemplate, n as maybeRenderHead, u as unescapeHTML } from './astro/server_DJHfVkFr.mjs';
import 'kleur/colors';
import 'clsx';
import slugify from 'slugify';
import { b as getAllAuthors } from './author_CpkHpI-S.mjs';

const html$4 = "<p>Getting ready for a software developer interview is never easy, especially if you’re new to the main tech stack of the company. This is why understanding the type of questions you might get asked during a technical interview is one of the keys to success.</p>\n<p>In this article, we’ll go over 50 popular backend interview questions ordered by experience level.</p>\n<p>For each question, we’ll provide some explanations, but feel free to further research each topic in detail, or go to the <a href=\"/backend\">Backend Roadmap</a> if you’re looking for a place to get started in your learning journey.</p>\n<h2 id=\"preparing-for-your-backend-interview\">Preparing for your Backend interview</h2>\n<p>Before we get started, it’s important to remember the following points when getting ready for your backend technical interview:</p>\n<ul>\n<li>Cover the basics of backend development. If you’re going for a web dev role, make sure you understand how client-server communication works. If you’re going for a dev tool development, understand the best practices around CLI development, etc.</li>\n<li>Practice coding, either by developing <a href=\"/backend/developer-tools\">your own mini-projects</a> or by using sites such as <a href=\"https://leetcode.com\" rel=\"noopener noreferrer nofollow\" target=\"_blank\">LeetCode</a>, <a href=\"https://hackerrank.com\" rel=\"noopener noreferrer nofollow\" target=\"_blank\">HackerRank</a>, and others.</li>\n<li>Consider reading up on software architecture; even if your role won’t be that of an architect, you’ll show understanding on a higher level by being able to discuss these topics.</li>\n<li>Make sure you have, at least, a basic understanding of most of the foundational layer of tools and practices for your role, such as version management (i.e. using Git), testing (as in unit testing at least), DevOps (including CI/CD pipeline, etc.), and anything else related to your role and the company.</li>\n<li>On a more general note, remember to read up on the company to be able to show interest and understanding of their business/product and also come prepared with a couple of questions of your own, showing you care about the role and the company.</li>\n</ul>\n<p>With that said, let’s now focus on the list of backend interview questions that you may be asked when applying for a backend development role!</p>";

				const frontmatter$4 = {"order":4,"briefTitle":"Backend","briefDescription":"Test, rate and improve your Backend knowledge with these questions.","title":"50 Popular Backend Developer Interview Questions and Answers","description":"Test, rate and improve your Backend knowledge with these questions.","authorId":"fernando","isNew":false,"date":"2024-05-24T00:00:00.000Z","seo":{"title":"50 Popular Backend Developer Interview Questions and Answers","description":"Nail your backend developer interview with these 50 popularly asked questions and answers. Test your knowledge with our quiz cards!","keywords":["backend quiz","backend questions","backend interview questions","backend interview","backend test"]},"sitemap":{"priority":1,"changefreq":"monthly"},"questions":[{"question":"Explain what an API endpoint is?","answer":"api-endpoint.md","topics":["Beginner"]},{"question":"Can you explain the difference between SQL and NoSQL databases?","answer":"sql-vs-nosql.md","topics":["Beginner"]},{"question":"What is a RESTful API, and what are its core principles?","answer":"rest-core-principles.md","topics":["Beginner"]},{"question":"Can you describe a typical HTTP request/response cycle?","answer":"http-request-response-cycle.md","topics":["Beginner"]},{"question":"How would you handle file uploads in a web application?","answer":"file-uploads.md","topics":["Beginner"]},{"question":"What kind of tests would you write for a new API endpoint?","answer":"api-tests.md","topics":["Beginner"]},{"question":"Describe how session management works in web applications","answer":"session-management.md","topics":["Beginner"]},{"question":"How do you approach API versioning in your projects?","answer":"api-versioning.md","topics":["Beginner"]},{"question":"How do you protect a server from SQL injection attacks?","answer":"protect-sql-injection.md","topics":["Beginner"]},{"question":"Explain the concept of statelessness in HTTP and how it impacts backend services","answer":"statelessness-http.md","topics":["Beginner"]},{"question":"What is containerization, and how does it benefit backend development?","answer":"containerization.md","topics":["Beginner"]},{"question":"What measures would you take to secure a newly developed API?","answer":"secure-api.md","topics":["Beginner"]},{"question":"How would you scale a backend application during a traffic surge?","answer":"scale-backend.md","topics":["Beginner"]},{"question":"What tools and techniques do you use for debugging a backend application?","answer":"debugging-backend.md","topics":["Beginner"]},{"question":"How do you ensure your backend code is maintainable and easy to understand?","answer":"maintainable-code.md","topics":["Beginner"]},{"question":"Describe how you would implement a full-text search in a database","answer":"fulltext-search.md","topics":["Intermediate"]},{"question":"How would you approach batch processing in a data-heavy backend application?","answer":"batch-processing.md","topics":["Intermediate"]},{"question":"Can you explain the use and benefits of a message queue in a distributed system?","answer":"message-queue.md","topics":["Intermediate"]},{"question":"What strategies would you use to manage database connections in a high-load scenario?","answer":"db-connections.md","topics":["Intermediate"]},{"question":"How would you set up a continuous integration/continuous deployment (CI/CD) pipeline for backend services?","answer":"ci-cd.md","topics":["Intermediate"]},{"question":"Can you describe a distributed caching strategy for a high-availability application?","answer":"distributed-caching.md","topics":["Intermediate"]},{"question":"What methods can you use for managing background tasks in your applications?","answer":"bg-tasks.md","topics":["Intermediate"]},{"question":"How do you handle data encryption and decryption in a privacy-focused application?","answer":"data-encryption.md","topics":["Intermediate"]},{"question":"What are webhooks and how have you implemented them in past projects?","answer":"webhooks.md","topics":["Intermediate"]},{"question":"What considerations must be taken into account for GDPR compliance in a backend system?","answer":"gdpr-compliance.md","topics":["Intermediate"]},{"question":"Explain how you would deal with long-running processes in web requests","answer":"long-running.md","topics":["Intermediate"]},{"question":"Discuss the implementation of rate limiting to protect APIs from abuse","answer":"rate-limiting.md","topics":["Intermediate"]},{"question":"How do you instrument and monitor the performance of backend applications?","answer":"instrument-monitor.md","topics":["Intermediate"]},{"question":"What are microservices, and how would you decompose a monolith into microservices?","answer":"decompose-microservices.md","topics":["Intermediate"]},{"question":"How have you managed API dependencies in backend systems?","answer":"api-dependencies.md","topics":["Intermediate"]},{"question":"Describe the concept of eventual consistency and its implications in backend systems","answer":"eventual-consistency.md","topics":["Intermediate"]},{"question":"What is a reverse proxy, and how is it useful in backend development?","answer":"reverse-proxy.md","topics":["Intermediate"]},{"question":"How would you handle session state in a load-balanced application environment?","answer":"load-balanced-session.md","topics":["Intermediate"]},{"question":"What is database replication, and how can it be used for fault tolerance?","answer":"fault-tolerance.md","topics":["Advanced"]},{"question":"Describe the use of blue-green deployment strategy in backend services","answer":"blue-green-deployment.md","topics":["Advanced"]},{"question":"Can you explain the consistency models in distributed databases (e.g., CAP theorem)?","answer":"cap-theorem.md","topics":["Advanced"]},{"question":"How do you manage schema migrations in a continuous delivery environment?","answer":"schema-migrations.md","topics":["Advanced"]},{"question":"What strategies exist for handling idempotency in REST API design?","answer":"idempotency.md","topics":["Advanced"]},{"question":"Describe the implementation of a single sign-on (SSO) solution","answer":"sso.md","topics":["Advanced"]},{"question":"Explain how you would develop a backend system for handling IOT device data streams","answer":"iot-streams.md","topics":["Advanced"]},{"question":"How would you architect a backend to support real-time data synchronization across devices?","answer":"realtime-data-sync.md","topics":["Advanced"]},{"question":"Discuss the benefits and drawbacks of microservice architectures in backend systems","answer":"benefits-drawbacks-microservices.md","topics":["Advanced"]},{"question":"How would you approach load testing a backend API?","answer":"load-testing-api.md","topics":["Advanced"]},{"question":"Describe how you would implement a server-side cache eviction strategy","answer":"cache-eviction.md","topics":["Advanced"]},{"question":"What are correlation IDs, and how can they be used for tracing requests across services?","answer":"correlation-ids.md","topics":["Advanced"]},{"question":"Explain the difference between optimistic and pessimistic locking and when to use each","answer":"optimistic-vs-pessimistic.md","topics":["Advanced"]},{"question":"What methods would you use to prevent deadlocks in database transactions?","answer":"deadlock-db-transaction.md","topics":["Advanced"]},{"question":"How would you secure inter-service communication in a microservices architecture?","answer":"secure-interservice.md","topics":["Advanced"]},{"question":"Discuss techniques for preventing and detecting data anomalies in large-scale systems","answer":"anomaly-detection.md","topics":["Advanced"]},{"question":"Describe the process of creating a global, high-availability data storage solution for a multinational application","answer":"high-available-storage.md","topics":["Advanced"]}]};
				const file$4 = "/workspaces/developer-roadmap/src/data/question-groups/backend/backend.md";
				const url$4 = undefined;
				function rawContent$4() {
					return "\nGetting ready for a software developer interview is never easy, especially if you’re new to the main tech stack of the company. This is why understanding the type of questions you might get asked during a technical interview is one of the keys to success.\n\nIn this article, we’ll go over 50 popular backend interview questions ordered by experience level.\n\nFor each question, we’ll provide some explanations, but feel free to further research each topic in detail, or go to the [Backend Roadmap](/backend) if you’re looking for a place to get started in your learning journey.\n\n## Preparing for your Backend interview\n\nBefore we get started, it’s important to remember the following points when getting ready for your backend technical interview:\n\n- Cover the basics of backend development. If you’re going for a web dev role, make sure you understand how client-server communication works. If you’re going for a dev tool development, understand the best practices around CLI development, etc.\n- Practice coding, either by developing [your own mini-projects](/backend/developer-tools) or by using sites such as [LeetCode](https://leetcode.com), [HackerRank](https://hackerrank.com), and others.\n- Consider reading up on software architecture; even if your role won’t be that of an architect, you’ll show understanding on a higher level by being able to discuss these topics.\n- Make sure you have, at least, a basic understanding of most of the foundational layer of tools and practices for your role, such as version management (i.e. using Git), testing (as in unit testing at least), DevOps (including CI/CD pipeline, etc.), and anything else related to your role and the company.\n- On a more general note, remember to read up on the company to be able to show interest and understanding of their business/product and also come prepared with a couple of questions of your own, showing you care about the role and the company.\n\nWith that said, let’s now focus on the list of backend interview questions that you may be asked when applying for a backend development role!\n\n";
				}
				function compiledContent$4() {
					return html$4;
				}
				function getHeadings$4() {
					return [{"depth":2,"slug":"preparing-for-your-backend-interview","text":"Preparing for your Backend interview"}];
				}

				const Content$4 = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter$4;
					content.file = file$4;
					content.url = url$4;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html$4)}`;
				});

const __vite_glob_2_0 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	Content: Content$4,
	compiledContent: compiledContent$4,
	default: Content$4,
	file: file$4,
	frontmatter: frontmatter$4,
	getHeadings: getHeadings$4,
	rawContent: rawContent$4,
	url: url$4
}, Symbol.toStringTag, { value: 'Module' }));

const html$3 = "<p>Preparing for your front end web development interview is key to achieving a successful outcome, but understanding what kind of questions or topics are going to be asked is not easy.</p>\n<p>So to help you get ready for your upcoming front end developer interview, here are 30 technical interview questions about web development with a focus on the front end, in other words, about JavaScript, HTML, and CSS.</p>\n<p>Keep in mind that they’re grouped by difficulty into three categories: beginners, intermediate and advanced. Ideally, you should aim to understand all of them, and if you find yourself not able to continue, consider checking out the <a href=\"https://roadmap.sh/frontend\" target=\"_blank\">Frontend roadmap</a> to figure out what to focus your studies on.</p>\n<h2 id=\"preparing-for-your-front-end-interview\">Preparing for your Front End interview</h2>\n<p>Before jumping straight into front end interview prep, here are some key points to keep in mind:</p>\n<ol>\n<li><strong>Master the Fundamentals</strong>: Before you start to solve complex problems, you need to make sure you have a solid understanding of front end development basics. This includes HTML, CSS, and JavaScript, as well as how they work together to create responsive, interactive web pages. Remember that you have the <a href=\"https://roadmap.sh/frontend\" target=\"_blank\">Front End roadmap</a> available if you feel you still need to learn more about any of these topics.</li>\n<li><strong>Practice Coding</strong>: You can improve your coding skills through mini-projects or by solving problems on platforms like <a href=\"https://leetcode.com/\" rel=\"noopener noreferrer nofollow\" target=\"_blank\">LeetCode</a> and <a href=\"https://www.hackerrank.com/\" rel=\"noopener noreferrer nofollow\" target=\"_blank\">HackerRank</a>. Focus on challenges related to front end development.</li>\n<li><strong>Learn Modern Frameworks and Libraries</strong>: Get to know popular frameworks and libraries such as React, Angular, or Vue.js. Understanding these tools is often crucial for modern front end roles.</li>\n<li><strong>Tackle the foundational tools of your dev workflow</strong>: Make sure you’re comfortable with essential tools and practices such as version control (e.g., Git), testing (unit and integration testing), and build tools (e.g., Vite). These are crucial for any front end role.</li>\n<li><strong>Understand UI/UX Principles</strong>: Understanding basic concepts of design and user experience can set you apart as a front end developer. Try to learn about accessibility, responsive design, and how to create intuitive interfaces.</li>\n<li><strong>Research the Company</strong>: Show some interest in the company you’re interviewing with by learning about their business and products. Prepare some questions to ask during the interview to show you care about the role.</li>\n<li><strong>Improve your communication skills</strong>. This one is not front end-specific, however, it’s always a good idea to invest in your future.</li>\n</ol>\n<p>With these tips out of the way, let’s now get into some of the most common Front End interview questions that you’ll encounter!</p>";

				const frontmatter$3 = {"order":5,"briefTitle":"Frontend","briefDescription":"Test, rate and improve your Frontend knowledge with these questions.","title":"Top 30 Popular Front End Developer Interview Questions","description":"Test, rate and improve your Frontend knowledge with these questions.","authorId":"fernando","isNew":false,"date":"2024-05-24T00:00:00.000Z","seo":{"title":"Top 30 Popular Front End Developer Interview Questions","description":"Nail your frontend developer interview with these 30 popularly asked questions and answers. Test your knowledge with our quiz cards!","keywords":["frontend quiz","frontend questions","frontend interview questions","frontend interview","frontend test"]},"sitemap":{"priority":1,"changefreq":"monthly"},"questions":[{"question":"What is the difference between an id and a class in HTML/CSS?","answer":"id-vs-class.md","topics":["Beginner"]},{"question":"Can you explain the box model in CSS?","answer":"box-model.md","topics":["Beginner"]},{"question":"What is the difference between inline, inline-block, and block elements?","answer":"block-inline-elems.md","topics":["Beginner"]},{"question":"What are some SEO best practices when structuring an HTML document?","answer":"seo-best-practices.md","topics":["Beginner"]},{"question":"What is the Document Object Model (DOM)?","answer":"dom.md","topics":["Beginner"]},{"question":"How do you add an event listener to an element?","answer":"event-listeners.md","topics":["Beginner"]},{"question":"What is the difference between null and undefined?","answer":"null-vs-undefined.md","topics":["Beginner"]},{"question":"What is the difference between cookies, sessionStorage, and localStorage?","answer":"client-storage.md","topics":["Beginner"]},{"question":"How does the browser render a website?","answer":"browser-render.md","topics":["Beginner"]},{"question":"What are media queries?","answer":"media-queries.md","topics":["Beginner"]},{"question":"What is the difference between the em and rem units?","answer":"em-vs-rem.md","topics":["Intermediate"]},{"question":"How do you create a flexbox layout?","answer":"flexbox-layout.md","topics":["Intermediate"]},{"question":"Can you explain CSS specificity and how it works?","answer":"css-specificity.md","topics":["Intermediate"]},{"question":"How can you create a CSS grid layout?","answer":"css-grid.md","topics":["Intermediate"]},{"question":"What are closures, and how/why would you use them?","answer":"closures.md","topics":["Intermediate"]},{"question":"Can you explain what event delegation is in JavaScript?","answer":"event-delegation.md","topics":["Intermediate"]},{"question":"What are promises, and how do they work?","answer":"js-promises.md","topics":["Intermediate"]},{"question":"How do you optimize website assets for better loading times?","answer":"optimize-assets.md","topics":["Intermediate"]},{"question":"What are service workers, and what are they used for?","answer":"service-workers.md","topics":["Intermediate"]},{"question":"What is the Same-Origin Policy in web development?","answer":"same-origin-policy.md","topics":["Intermediate"]},{"question":"What are CSS variables, and when would you use them?","answer":"css-variables.md","topics":["Advanced"]},{"question":"How would you implement critical CSS to improve the perceived load time of your web pages?","answer":"critical-css.md","topics":["Advanced"]},{"question":"How does the event loop work in JavaScript?","answer":"event-loop-js.md","topics":["Advanced"]},{"question":"What are the different ways to handle asynchronous operations in JavaScript?","answer":"async-ops-js.md","topics":["Advanced"]},{"question":"How do you handle state management in single-page applications?","answer":"state-mgmt-spa.md","topics":["Advanced"]},{"question":"How does virtual DOM work, and what are its advantages?","answer":"vdom.md","topics":["Advanced"]},{"question":"What is server-side rendering, and when might you use it?","answer":"ssr-when.md","topics":["Advanced"]},{"question":"How do you analyze and improve the performance of a web application?","answer":"improve-web-perf.md","topics":["Advanced"]},{"question":"What is Content Security Policy (CSP), and how does it improve the security of web applications?","answer":"csp.md","topics":["Advanced"]},{"question":"What is tree shaking, and how does it help with the performance of a web application?","answer":"tree-shaking.md","topics":["Advanced"]}]};
				const file$3 = "/workspaces/developer-roadmap/src/data/question-groups/frontend/frontend.md";
				const url$3 = undefined;
				function rawContent$3() {
					return "\nPreparing for your front end web development interview is key to achieving a successful outcome, but understanding what kind of questions or topics are going to be asked is not easy.\n\nSo to help you get ready for your upcoming front end developer interview, here are 30 technical interview questions about web development with a focus on the front end, in other words, about JavaScript, HTML, and CSS.\n\nKeep in mind that they’re grouped by difficulty into three categories: beginners, intermediate and advanced. Ideally, you should aim to understand all of them, and if you find yourself not able to continue, consider checking out the [Frontend roadmap](https://roadmap.sh/frontend) to figure out what to focus your studies on.\n\n## Preparing for your Front End interview\n\nBefore jumping straight into front end interview prep, here are some key points to keep in mind:\n\n1. **Master the Fundamentals**: Before you start to solve complex problems, you need to make sure you have a solid understanding of front end development basics. This includes HTML, CSS, and JavaScript, as well as how they work together to create responsive, interactive web pages. Remember that you have the [Front End roadmap](https://roadmap.sh/frontend) available if you feel you still need to learn more about any of these topics.\n2. **Practice Coding**: You can improve your coding skills through mini-projects or by solving problems on platforms like [LeetCode](https://leetcode.com/) and [HackerRank](https://www.hackerrank.com/). Focus on challenges related to front end development.\n3. **Learn Modern Frameworks and Libraries**: Get to know popular frameworks and libraries such as React, Angular, or Vue.js. Understanding these tools is often crucial for modern front end roles.\n4. **Tackle the foundational tools of your dev workflow**: Make sure you’re comfortable with essential tools and practices such as version control (e.g., Git), testing (unit and integration testing), and build tools (e.g., Vite). These are crucial for any front end role.\n5. **Understand UI/UX Principles**: Understanding basic concepts of design and user experience can set you apart as a front end developer. Try to learn about accessibility, responsive design, and how to create intuitive interfaces.\n6. **Research the Company**: Show some interest in the company you’re interviewing with by learning about their business and products. Prepare some questions to ask during the interview to show you care about the role.\n7. **Improve your communication skills**. This one is not front end-specific, however, it’s always a good idea to invest in your future.\n\nWith these tips out of the way, let's now get into some of the most common Front End interview questions that you’ll encounter!\n\n";
				}
				function compiledContent$3() {
					return html$3;
				}
				function getHeadings$3() {
					return [{"depth":2,"slug":"preparing-for-your-front-end-interview","text":"Preparing for your Front End interview"}];
				}

				const Content$3 = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter$3;
					content.file = file$3;
					content.url = url$3;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html$3)}`;
				});

const __vite_glob_2_1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	Content: Content$3,
	compiledContent: compiledContent$3,
	default: Content$3,
	file: file$3,
	frontmatter: frontmatter$3,
	getHeadings: getHeadings$3,
	rawContent: rawContent$3,
	url: url$3
}, Symbol.toStringTag, { value: 'Module' }));

const html$2 = "";

				const frontmatter$2 = {"order":1,"briefTitle":"JavaScript","briefDescription":"Test, rate and improve your JavaScript knowledge with these questions.","title":"JavaScript Questions","description":"Test, rate and improve your JavaScript knowledge with these questions.","isNew":false,"seo":{"title":"JavaScript Questions","description":"Curated list of JavaScript questions to test, rate and improve your knowledge. Questions are based on real world experience and knowledge.","keywords":["javascript quiz","javascript questions","javascript interview questions","javascript interview","javascript test"]},"sitemap":{"priority":1,"changefreq":"monthly"},"questions":[{"question":"What is JavaScript?","answer":"JavaScript (often abbreviated as JS) is a high-level, versatile, and widely-used programming language primarily known for its role in web development. It enables interactive and dynamic behavior on websites.","topics":["Core","Beginner"]},{"question":"What is the difference between `var`, `let`, and `const` in JavaScript?","answer":"In JavaScript, `var` is function-scoped and was traditionally used to declare variables. `let` and `const` are block-scoped. The key difference between `let` and `const` is that `let` allows for reassignment while `const` creates a read-only reference.","topics":["Core","Beginner"]},{"question":"What is the difference between `null` and `undefined`?","answer":"The `null` is an assignment value. It can be assigned to a variable as a representation of no value. But the `undefined` is a primitive value that represents the absence of a value, or a variable that has not been assigned a value.","topics":["Core","Beginner"]},{"question":"What is the difference between `==` and `===`?","answer":"equality-operator.md","topics":["Core","Beginner"]},{"question":"What are the different ways to declare a variable in JavaScript?","answer":"There are three ways to declare a variable in JavaScript `var`, `let`, and `const`.","topics":["Core","Intermediate"]},{"question":"What are Scopes in JavaScript?","answer":"A scope is a set of variables, objects, and functions that you have access to. There are three types of scopes in JavaScript. Which are Global Scope, Function Scope (Local Scope), and Block Scope.","topics":["Core","Intermediate"]},{"question":"What is ternary operator in JavaScript?","answer":"ternary-operator.md","topics":["Core","Intermediate"]},{"question":"How to implement your own Custom Event in JavaScript?","answer":"custom-event.md","topics":["Event","Advanced"]},{"question":"What is a closure in JavaScript?","answer":"closure.md","topics":["Core","Advanced"]},{"question":"Does Arrow functions have their own `this`?","answer":"No, arrow functions do not have their own `this`. Instead, they inherit the `this` of the enclosing lexical scope.","topics":["Function","Intermediate"]},{"question":"Does `map()` method mutate the original array?","answer":"map-method.md","topics":["Core","Intermediate"]},{"question":"Does `forEach()` method return a new array?","answer":"for-each-method.md","topics":["Core","Intermediate"]},{"question":"How to use `filter()` method?","answer":"filter-method.md","topics":["Core","Intermediate"]},{"question":"What is the difference between `map()` and `forEach()` methods?","answer":"The `map()` method creates a new array with the results of calling a provided function on every element in the calling array. Whereas, the `forEach()` method executes a provided function once for each array element.","topics":["Core","Intermediate"]},{"question":"How to use `reduce()` method?","answer":"reduce-method.md","topics":["Core","Intermediate"]},{"question":"What is the difference between `map()` and `reduce()` methods?","answer":"The `map()` method creates a new array with the results of calling a provided function on every element in the calling array. Whereas, the `reduce()` method executes a reducer function (that you provide) on each element of the array, resulting in a single output value.","topics":["Core","Intermediate"]},{"question":"What is Prototype Chain in JavaScript?","answer":"prototype-chain.md","topics":["OOP","Advanced"]},{"question":"What is IIFE in JavaScript?","answer":"iife.md","topics":["Function","Advanced"]},{"question":"What is Inheritance in JavaScript?","answer":"inheritance.md","topics":["OOP","Advanced"]},{"question":"What is Map in JavaScript?","answer":"map.md","topics":["Date Type","Beginner"]},{"question":"What is Set in JavaScript?","answer":"set.md","topics":["Data Type","Beginner"]},{"question":"How you can find unique values in an array?","answer":"find-unique-array-values.md","topics":["Core","Intermediate"]},{"question":"What is a JavaScript promise?","answer":"A Promise in JavaScript represents a value that may not be available yet but will be at some point. Promises provide a way to handle asynchronous operations, offering methods like `.then()` and `.catch()` to register callbacks for success and failure.","topics":["Promise","Advanced"]},{"question":"What is the purpose of the `async/await` in JavaScript?","answer":"The `async/await`, introduced in ES2017, provides a more readable and cleaner way to handle asynchronous operations compared to callbacks and promises. An `async` function always returns a promise, and within such a function, you can use `await` to pause execution until a promise settles.","topics":["Promise","Advanced"]},{"question":"What is callback hell in JavaScript?","answer":"callback-hell.md","topics":["Core","Advanced"]},{"question":"How to enable strict mode in JavaScript?","answer":"To enable strict mode in JavaScript, you need to add the following line at the top of the file or function `'use strict';`.","topics":["Core","Beginner"]},{"question":"Explain `alert()`, `prompt()`, and `confirm()` methods in JavaScript?","answer":"alert-prompt-confirm.md","topics":["Event","Intermediate"]},{"question":"How to handle event bubbling in JavaScript?","answer":"event-bubbling.md","topics":["Event","Beginner"]},{"question":"What is Event Capturing in JavaScript?","answer":"Event capturing is the first phase of event propagation. In this phase, the event is captured by the outermost element and propagated to the inner elements. It is also known as trickling. It is the opposite of event bubbling.","topics":["Event","Beginner"]},{"question":"What is the spread operator in JavaScript?","answer":"spread-operator.md","topics":["Core","Intermediate"]},{"question":"Is Java and JavaScript the same?","answer":"No, Java and JavaScript are distinct languages. Their similarity in name is coincidental, much like `car` and `carpet`. Java is often used for backend and mobile apps, while JavaScript powers web interactivity and backend.","topics":["Core","Beginner"]},{"question":"What is `preventDefault()` method in JavaScript?","answer":"prevent-default.md","topics":["Event","Intermediate"]},{"question":"What is Hoisting in JavaScript?","answer":"hoisting.md","topics":["Core","Intermediate"]},{"question":"What is DOM?","answer":"The Document Object Model (DOM) is a programming interface for HTML and XML documents. It represents the page so that programs can change the document structure, style, and content. The DOM represents the document as nodes and objects.","topics":["DOM","Beginner"]},{"question":"Difference between `Promise.all()` and `Promise.allSettled()`?","answer":"promise-all-vs-all-settled.md","topics":["Promise","Advanced"]},{"question":"What is the difference between `Map` and `WeakMap` in JavaScript?","answer":"The `Map` object holds key-value pairs and remembers the original insertion order of the keys. Whereas, the `WeakMap` object is a collection of key/value pairs in which the keys are weakly referenced. You can use any data type as a key or value in a `Map` whereas in `WeakMap` you can only use objects as keys. The `WeakMap` is not iterable whereas `Map` is. In `WeakMap` it holds the weak reference to the original object which means if there are no other references to an object stored in the `WeakMap`, those objects can be garbage collected.","topics":["Data Type","Advanced"]},{"question":"Garbage collection in JavaScript?","answer":"The JavaScript engine uses automatic garbage collection. JavaScript automatically manages memory by freeing up space used by objects no longer needed. This algorithm is called Mark and Sweep, which is performed periodically by the JavaScript engine.","topics":["Core","Advanced"]},{"question":"How to make an Object immutable in JavaScript?","answer":"immutable-object.md","topics":["Core","Advanced"]},{"question":"What is Type Casting?","answer":"Type conversion (or typecasting) means transfer of data from one data type to another. Implicit conversion happens when the compiler (for compiled languages) or runtime (for script languages like `JavaScript`) automatically converts data types.","topics":["Data Type","Intermediate"]},{"question":"What are Explicit binding in JavaScript?","answer":"explicit-binding.md","topics":["Function","Advanced"]},{"question":"How to run a piece of code after a specific time interval?","answer":"set-interval.md","topics":["Core","Beginner"]},{"question":"How to run a piece of code only once after a specific time?","answer":"set-timeout.md","topics":["Core","Beginner"]},{"question":"What are Labelled Statements in JavaScript?","answer":"labelled-statements.md","topics":["Core","Intermediate"]},{"question":"Difference between `defer` and `async` attributes in JavaScript?","answer":"defer-vs-async.md","topics":["Core","Beginner"]},{"question":"What is Increment operator in JavaScript?","answer":"increment-operator.md","topics":["Core","Beginner"]},{"question":"How to accept variable number of arguments in a JavaScript function?","answer":"variable-number-of-arguments.md","topics":["Function","Intermediate"]},{"question":"How to define multiline strings in JavaScript?","answer":"In order to define multiline strings in JavaScript, you need to use template literals. Template literals are enclosed by the backtick (```` ` ` ````) character instead of double or single quotes. Template literals can contain placeholders. These are indicated by the dollar sign and curly braces (``` `${expression}` ```).","topics":["Core","Beginner"]},{"question":"Uses of `break` and `continue` statements in JavaScript?","answer":"break-and-continue.md","topics":["Loop","Beginner"]},{"question":"How to parse JSON in JavaScript?","answer":"parse-json.md","topics":["Core","Beginner"]},{"question":"How to debug JavaScript code?","answer":"debug-javascript.md","topics":["Debug","Beginner"]},{"question":"How to handle error in Promise?","answer":"error-in-promise.md","topics":["Promise","Advanced"]},{"question":"How to handle error in async/await?","answer":"error-in-async-await.md","topics":["Promise","Advanced"]},{"question":"How to use `finally` block in Promise?","answer":"finally-block-in-promise.md","topics":["Promise","Advanced"]},{"question":"Asynchronous vs Synchronous code?","answer":"async-vs-sync.md","topics":["Core","Beginner"]},{"question":"What is Event Loop in JavaScript?","answer":"The Event loop is one the most important aspect to understand in JavaScript. It is the mechanism that allows JavaScript to perform non-blocking operations. It is the reason why we can use asynchronous code in JavaScript. The Event loop is a loop that constantly checks if there are any tasks that need to be executed. If there are, it will execute them. If there are no tasks to execute, it will wait for new tasks to arrive.","topics":["Core","Advanced"]},{"question":"How does Event Loop work in JavaScript?","answer":"event-loop.md","topics":["Core","Advanced"]},{"question":"Is it possible to run JavaScript outside the browser?","answer":"Yes, it is possible to run JavaScript outside the browser. There are several ways to run JavaScript outside the browser. You can use **Node.js**, **Deno**, **Bun**, or any other JavaScript runtime environment.","topics":["Core","Beginner"]},{"question":"Is it possible to run 2 lines of code at the same time in JavaScript?","answer":"No, it is not possible to run 2 lines of code at the same time in JavaScript. JavaScript is a single-threaded language, which means that it can only execute one line of code at a time. However, it is possible to run 2 lines of code at the same time using asynchronous code.","topics":["Core","Beginner"]},{"question":"Is JavaScript a compiled or interpreted language?","answer":"JavaScript is an interpreted language. This means that the JavaScript code is not compiled before it is executed. Instead, the JavaScript engine interprets the code at runtime.","topics":["Core","Beginner"]},{"question":"Are references copied in JavaScript?","answer":"No, references are not copied in JavaScript. When you assign an object to a variable, the variable will contain a reference to the object. If you assign the variable to another variable, the second variable will also contain a reference to the object. If you change the object using one of the variables, the change will be visible using the other variable.","topics":["Core","Intermediate"]},{"question":"What are Heap and Stack in JavaScript?","answer":"heap-and-stack.md","topics":["Core","Advanced"]},{"question":"What is Comma Operator in JavaScript?","answer":"comma-operator.md","topics":["Operator","Intermediate"]},{"question":"What is Nullish Coalescing Operator?","answer":"nullish-coalescing-operator.md","topics":["Operator","Beginner"]},{"question":"What are the Logical Operators in JavaScript?","answer":"logical-operators.md","topics":["Operator","Beginner"]},{"question":"How to create Infinite Loop in JavaScript?","answer":"infinite-loop.md","topics":["Core","Beginner"]},{"question":"How to use `do...while` loop in JavaScript?","answer":"do-while-loop.md","topics":["Core","Beginner"]},{"question":"Switch case statement in JavaScript?","answer":"switch-case.md","topics":["Core","Beginner"]},{"question":"How to select DOM elements using `querySelector()` and `querySelectorAll()`?","answer":"query-selector.md","topics":["DOM","Beginner"]},{"question":"How to create a new Element in DOM?","answer":"create-element.md","topics":["DOM","Beginner"]},{"question":"Difference between `appendChild()` and `insertBefore()`?","answer":"append-child-vs-insert-before.md","topics":["DOM","Beginner"]},{"question":"How to remove an Element from DOM?","answer":"remove-element.md","topics":["DOM","Beginner"]},{"question":"How to scroll to the top of the page using JavaScript?","answer":"scroll-to-top.md","topics":["DOM","Beginner"]},{"question":"How to measure dimensions of an Element?","answer":"measure-dimensions.md","topics":["DOM","Beginner"]},{"question":"Can you merge multiple arrays in JavaScript?","answer":"merge-arrays.md","topics":["Core","Intermediate"]},{"question":"How to get viewport dimensions in JavaScript?","answer":"You can use `window.innerWidth` and `window.innerHeight` to get the viewport dimensions.","topics":["DOM","Beginner"]}]};
				const file$2 = "/workspaces/developer-roadmap/src/data/question-groups/javascript/javascript.md";
				const url$2 = undefined;
				function rawContent$2() {
					return "";
				}
				function compiledContent$2() {
					return html$2;
				}
				function getHeadings$2() {
					return [];
				}

				const Content$2 = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter$2;
					content.file = file$2;
					content.url = url$2;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html$2)}`;
				});

const __vite_glob_2_2 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	Content: Content$2,
	compiledContent: compiledContent$2,
	default: Content$2,
	file: file$2,
	frontmatter: frontmatter$2,
	getHeadings: getHeadings$2,
	rawContent: rawContent$2,
	url: url$2
}, Symbol.toStringTag, { value: 'Module' }));

const html$1 = "";

				const frontmatter$1 = {"order":1,"briefTitle":"Node.js","briefDescription":"Test, rate and improve your Node.js knowledge with these questions.","title":"Node.js Questions","description":"Test, rate and improve your Node.js knowledge with these questions.","isNew":false,"seo":{"title":"Node.js Questions","description":"Curated list of Node.js questions to test, rate and improve your knowledge. Questions are based on real world experience and knowledge.","keywords":["node.js quiz","node.js questions","node.js interview questions","node.js interview","node.js test"]},"sitemap":{"priority":1,"changefreq":"monthly"},"questions":[{"question":"What is Node.js?","answer":"Node.js is an open-source and cross-platform JavaScript runtime built on Chrome's V8 JavaScript engine. Node.js uses an event-driven, non-blocking I/O model that makes it lightweight and efficient.","topics":["Core","Beginner"]},{"question":"What is REPL in Node.js?","answer":"REPL stands for Read-Eval-Print-Loop. It is an interactive shell that allows you to execute JavaScript code and view the output immediately. It is useful for testing small snippets of code and experimenting with the Node.js API.\n","topics":["Core","Beginner"]},{"question":"What is the difference between Node.js and JavaScript?","answer":"Node.js is a runtime environment for JavaScript. JavaScript is a programming language used to create web applications. Node.js is a runtime environment that can execute JavaScript code outside of a web browser.","topics":["Core","Beginner"]},{"question":"What is Event Loop in Node.js?","answer":"The event loop is a single-threaded loop responsible for handling all asynchronous tasks in Node.js. It continuously checks for events and executes associated callback functions, allowing Node.js to handle asynchronous tasks efficiently. Its non-blocking I/O model ensures that it can process multiple operations simultaneously without waiting for one to complete before moving on to the next, contributing to its scalability and performance. [Watch this video](https://www.youtube.com/watch?v=8aGhZQkoFbQ) to learn more about the topic.\n","topics":["Core","Intermediate"]},{"question":"What is the difference between Node.js and AJAX?","answer":"Node.js is a server-side runtime for JavaScript, while AJAX is a client-side technique for asynchronous communication with the server.\n","topics":["Core","Beginner"]},{"question":"What are modules in Node.js?","answer":"Modules are reusable blocks of code that can be imported into other files. They are used to encapsulate related code into a single unit of code that can be used in other parts of the program. It allow us to split our code into multiple files and reuse it across multiple files. Some built-in modules include `fs`, `http`, `path`, `url`, `util`, etc.\n","topics":["Core","Beginner"]},{"question":"Difference between CommonJS and ESM?","answer":"commonjs-vs-esm.md","topics":["Core","Intermediate"]},{"question":"What is the `global` object in Node.js?","answer":"The `global` object is a global namespace object that contains all global variables, functions, and objects. It is similar to the `window` object in the browser. It can be accessed from anywhere in the program without importing it.\n","topics":["Core","Intermediate"]},{"question":"What is the difference between `process.nextTick()` and `setImmediate()`?","answer":"`process.nextTick()` and `setImmediate()` are both used to schedule a callback function to be executed in the next iteration of the event loop. The difference is that `process.nextTick()` executes the callback at the end of the current iteration of the event loop, while `setImmediate()` executes the callback at the beginning of the next iteration of the event loop.\n","topics":["Core","Intermediate"]},{"question":"What is `setInterval()`?","answer":"`setInterval()` is a global function that helps you execute a function repeatedly at a fixed delay. It returns an interval ID that uniquely identifies the interval, which can be used to cancel the interval using the `clearInterval()` function.\n","topics":["Core","Beginner"]},{"question":"What is `setTimeout()`?","answer":"`setTimeout()` is a global function that helps you execute a function after a specified delay. It returns a timeout ID that uniquely identifies the timeout, which can be used to cancel the timeout using the `clearTimeout()` function.\n","topics":["Core","Beginner"]},{"question":"What are Event Emitters in Node.js?","answer":"Event Emitters is a class that can be used to emit named events and register listeners for those events. It is used to handle asynchronous events in Node.js.\n","topics":["Core","Intermediate"]},{"question":"What is `npm`?","answer":"`npm` is a package manager for Node.js. It is used to install, update, and remove packages from the Node.js ecosystem. It is also used to manage dependencies for Node.js projects.\n","topics":["Core","Beginner"]},{"question":"What is the full form of `npm`?","answer":"`npm` stands for Node Package Manager.\n","topics":["Core","Beginner"]},{"question":"What is `npx`?","answer":"`npx` is a tool that allows you to run Node.js packages without installing them. It is used to execute Node.js packages that are not installed globally.\n","topics":["Core","Beginner"]},{"question":"What is `process.cwd()`?","answer":"`process.cwd()` returns the current working directory of the Node.js process. It is similar to `pwd` in Unix.\n","topics":["Core","Intermediate"]},{"question":"What is the difference between `process.cwd()` and `__dirname`?","answer":"process-cwd-vs-dirname.md","topics":["Core","Intermediate"]},{"question":"What is `__filename`?","answer":"`__filename` is a global variable that contains the absolute path of the current file.\n","topics":["Core","Intermediate"]},{"question":"What is `process.argv`?","answer":"process-argv.md","topics":["Core","Intermediate"]},{"question":"What is the purpose of `fs` module?","answer":"The File System (fs) module is used to perform file operations such as reading, writing, and deleting files. All file system operations have synchronous and asynchronous forms.\n","topics":["Core","Beginner"]},{"question":"What is the purpose of `path` module?","answer":"The Path module is used to perform operations on file and directory paths. It provides methods for resolving and normalizing paths, joining paths, and extracting file and directory names.\n","topics":["Core","Beginner"]},{"question":"How to read a file in Node.js?","answer":"The `fs.readFile()` method is used to read the contents of a file asynchronously. It takes the path of the file to be read and a callback function as arguments. The callback function is called with two arguments, `err` and `data`. If an error occurs while reading the file, the `err` argument will contain the error object. Otherwise, the `data` argument will contain the contents of the file.\n","topics":["Core","Beginner"]},{"question":"How to load environment variables from a `.env` file in Node.js?","answer":"The `dotenv` package is used to load environment variables from a `.env` file into `process.env`. It is used to store sensitive information such as API keys, database credentials, etc. in a `.env` file instead of hardcoding them in the source code.\n","topics":["Core","Beginner"]},{"question":"How to access environment variables in Node.js?","answer":"Environment variables can be accessed using the `process.env` object. It is an object that contains all the environment variables defined in the current process.\n","topics":["Core","Beginner"]},{"question":"How to take user input from the command line in Node.js?","answer":"input-from-command-line.md","topics":["CLI","Beginner"]},{"question":"How to create a web server in Node.js?","answer":"web-server.md","topics":["Core","Beginner"]},{"question":"What are streams in Node.js?","answer":"Streams are objects that allow you to read data from a source or write data to a destination in a continuous manner. They are used to handle large amounts of data efficiently.\n","topics":["Core","Advanced"]},{"question":"What is difference between `fork` and `spawn` methods of `child_process` module?","answer":"The `fork` method is used when you want to run another JavaScript file in a separate worker. It's like having a friend with a specific task. You can communicate with them via messages and they can send messages back to you. The `spawn` method is used when you want to run a command in a separate process. It's like asking someone to do a specific. You can communicate with them via stdin/stdout/stderr, but it's more like giving orders and getting results.\n","topics":["Core","Advanced"]},{"question":"What is the `os` module?","answer":"The `os` module provides methods for interacting with the operating system. It can be used to get information about the operating system, such as the hostname, platform, architecture, etc.\n","topics":["Core","Intermediate"]},{"question":"Can you access the DOM in Node.js?","answer":"No, you cannot access the DOM in Node.js because it does not have a DOM. It is a server-side runtime for JavaScript, so it does not have access to the browser's DOM.\n","topics":["Core","Intermediate"]},{"question":"What is Clustering in Node.js?","answer":"Clustering is a technique used to distribute the load across multiple processes. It is used to improve the performance and scalability of Node.js applications.\n","topics":["Core","Advanced"]},{"question":"How can memory leaks happen in Node.js?","answer":"Memory leaks happen when a program allocates memory but does not release it when it is no longer needed. This can happen due to bugs in the program or due to the way the program is designed. In Node.js, memory leaks can happen due to the use of closures, circular references, and global variables.\n","topics":["Core","Intermediate"]},{"question":"What is the order priority of `process.nextTick`, `Promise`, `setTimeout`, and `setImmediate`?","answer":"order-priority.md","topics":["Core","Intermediate"]},{"question":"What is `process.exit()`?","answer":"`process.exit()` is a method that can be used to exit the current process. It takes an optional exit code as an argument. If no exit code is specified, it defaults to 0.\n","topics":["Core","Intermediate"]},{"question":"Different exit codes in Node.js?","answer":"exit-codes.md","topics":["Core","Intermediate"]},{"question":"How Node.js handle errors?","answer":"error-handling.md","topics":["Core","Intermediate"]}]};
				const file$1 = "/workspaces/developer-roadmap/src/data/question-groups/nodejs/nodejs.md";
				const url$1 = undefined;
				function rawContent$1() {
					return "";
				}
				function compiledContent$1() {
					return html$1;
				}
				function getHeadings$1() {
					return [];
				}

				const Content$1 = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter$1;
					content.file = file$1;
					content.url = url$1;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html$1)}`;
				});

const __vite_glob_2_3 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	Content: Content$1,
	compiledContent: compiledContent$1,
	default: Content$1,
	file: file$1,
	frontmatter: frontmatter$1,
	getHeadings: getHeadings$1,
	rawContent: rawContent$1,
	url: url$1
}, Symbol.toStringTag, { value: 'Module' }));

const html = "";

				const frontmatter = {"order":1,"briefTitle":"React","briefDescription":"Test, rate and improve your React knowledge with these questions.","title":"React Questions","description":"Test, rate and improve your React knowledge with these questions.","isNew":false,"seo":{"title":"React Questions","description":"Curated list of React questions to test, rate and improve your knowledge. Questions are based on real world experience and knowledge.","keywords":["react quiz","react questions","react interview questions","react interview","react test"]},"sitemap":{"priority":1,"changefreq":"monthly"},"questions":[{"question":"What is a React?","answer":"React, is an open-source JavaScript library for building user interfaces (UIs). It was developed and is maintained by Meta, and is widely used by developers to create interactive and dynamic web applications.","topics":["Core","Beginner"]},{"question":"What are the features of React?","answer":"Use of Virtual DOM instead of Real DOM, JSX, Server-side rendering, Unidirectional data flow or data binding, Reusable components, etc.","topics":["Core","Beginner"]},{"question":"What is JSX?","answer":"JSX is a syntax extension to JavaScript and comes with the full power of JavaScript. JSX produces React “elements”. You can embed any JavaScript expression in JSX by wrapping it in curly braces. After compilation, JSX expressions become regular JavaScript objects.","topics":["Core","Beginner"]},{"question":"What is the difference between Real DOM and Virtual DOM?","answer":"Virtual DOM is the representation of a UI in the form of a plain javascript object. It is a node tree that lists the elements, their attributes and content as Objects and their properties. Real DOM is the real representation of a UI which can be seen and inspected in the browser.\nManipulating the virtual DOM is much faster than real DOM, because nothing gets drawn on the screen. React uses this virtual DOM to figure out the most efficient way to update the browser DOM.\n","topics":["Core","Beginner"]},{"question":"What is the difference between state and props?","answer":"Props are used to pass data from parent to child. They are like function arguments. They are immutable.\nState is managed within the component and is mutable.\n","topics":["State","Beginner"]},{"question":"Can we change the state of the component directly?","answer":"No, we can't change the state of the component directly. State can only be changed by using `setState()` method. Changing the state variable directly won't re-render the component.","topics":["State","Beginner"]},{"question":"What is the difference between controlled and uncontrolled components?","answer":"controlled-vs-uncontrolled.md","topics":["State","Beginner"]},{"question":"What are different options to style a React component?","answer":"CSS Stylesheets, Inline styles, CSS Modules, Styled Components, CSS in JS libraries, etc.","topics":["Styling","Beginner"]},{"question":"What are Pure Components?","answer":"pure-components.md","topics":["Performance","Intermediate"]},{"question":"What are Synthetic Events in React?","answer":"synthetic-events.md","topics":["Events","Intermediate"]},{"question":"What is the purpose of `key` attribute in React?","answer":"The string attribute `key` is a special attribute you need to include when rendering an array of elements. Keys help React identify which items have changed, are added, or are removed. Keys should be given to the elements inside the array to give the elements a stable identity.","topics":["Performance","Beginner"]},{"question":"What are refs in React?","answer":"Refs are used to get reference to a DOM node or an instance of a component. They help to access the DOM nodes or React elements created in the render method.\nYou can also use refs When you want a component to “remember” some information, but you don’t want that information to trigger new renders, you can use a ref.\n","topics":["Core","Intermediate"]},{"question":"What is ref forwarding in React?","answer":"ref-forwarding.md","topics":["Core","Intermediate"]},{"question":"What is React Fiber?","answer":"React fiber is the reconciliation engine that replaced the core algorithm in React v16. It is a rewrite of the core algorithm, responsible for scheduling what gets rendered on screen. It is a set of algorithms for efficiently updating the UI.\nHere is a [bit-outdated but quite good article about React Fiber](https://github.com/acdlite/react-fiber-architecture).\n","topics":["Core","Advanced"]},{"question":"What is the difference between react and react-dom packages?","answer":"React is a library for building user interfaces. The package `react` contains only the renderer-agnostic code i.e. the core React library, algorithm for computing changes in the UI and other helpers. . The package `react-dom` contains the code specific to the DOM rendering of React components.\n","topics":["Core","Beginner"]},{"question":"What is the difference between class components and function components?","answer":"Class components let you define your components with the help of classes. You can extend from `React.Component` class to create a component. Class components also allow you to define component level lifecycle methods.\nFunction components are defined by writing a function which returns a React element. Functional components are the preferred way to write React components. There are no lifecycle methods similar to class components available in functional components; you can use React hooks instead to manage the component lifecycle.\n","topics":["Core","Beginner"]},{"question":"What are Higher-Order Components (HOCs)?","answer":"A higher-order component (HOC) is a function that takes a component and returns a new component. Basically, it's a pattern that is derived from React's compositional nature.\nHigher-Order Components are not part of the React API. They are the pattern that emerges from React's compositional nature.\n","topics":["Core","Intermediate"]},{"question":"What are React Hooks?","answer":"Hooks are functions that let you “hook into” React state and lifecycle features from function components. Hooks don't work inside classes — they let you use React without classes. Some common hooks include `useState`, `useEffect`, `useMemo`, `useRef`, `useCallback`, etc.\n","topics":["Core","Beginner"]},{"question":"How to render HTML in React?","answer":"You can use `dangerouslySetInnerHTML` prop to render HTML in React. It is used to set HTML directly from React. You should be careful while using this property as it can cause XSS attacks.\n","topics":["Core","Beginner"]},{"question":"What is Context in React?","answer":"Context provides a way to pass data through the component tree without having to pass props down manually at every level. Context is primarily used when some data needs to be accessible by many components at different nesting levels.\n","topics":["State","Intermediate"]},{"question":"What is Reconciliation in React?","answer":"Reconciliation is the process through which React updates the DOM by comparing the newly returned elements with the previously rendered ones. React updates the DOM when a component's state changes.\n","topics":["Core","Intermediate"]},{"question":"What could be the reasons for un-necessary re-renders in React?","answer":"re-renders.md","topics":["Performance","Intermediate"]},{"question":"How does React handle prop drilling, and what are the downsides of excessive prop drilling?","answer":"Prop drilling is the process of passing data from a parent component to deeply nested child components through props. While React doesn't prohibit this, it can lead to code that is hard to maintain and understand. Excessive prop drilling can make it challenging to track data flow and can result in unnecessary re-renders. To mitigate these issues, you can use Context API or state management libraries like Redux.","topics":["Core","Intermediate"]},{"question":"What is the purpose of the `useEffect` hook in React?","answer":"The useEffect hook in React is used for performing side effects in functional components. Side effects can include data fetching, DOM manipulation, and subscribing to external data sources.\n","topics":["Core","Intermediate"]},{"question":"What is the purpose of the `useContext` hook in React?","answer":"The useContext hook is used to access and consume context values in functional components. It provides a way to access context data without the need for a context consumer. useContext is particularly useful when you want to access context values in nested components without having to pass props through intermediate components.\n","topics":["State","Intermediate"]},{"question":"What is the purpose of the `useMemo` hook in React?","answer":"The `useMemo` hook is used to memoize the result of a computationally expensive operation in a functional component. It helps optimize performance by caching the result of the operation and returning the cached result on subsequent renders if the dependencies have not changed. This can prevent unnecessary calculations.\n","topics":["Performance","Intermediate"]},{"question":"Explain the concept of error boundaries in React.","answer":"error-boundaries.md","topics":["Core","Advanced"]},{"question":"What are fragments in React?","answer":"React doesn't allow returning multiple elements from a component. You can use fragments to return multiple elements.\n\nFragments in React allow for a group of elements to be returned from a component's render method without adding an extra node to the DOM. They are useful when you want to return multiple elements without wrapping them in a parent container.\n","topics":["Core","Beginner"]},{"question":"What are portals in React?","answer":"create-portal.md","topics":["Core","Intermediate"]},{"question":"What is Concurrent React (Concurrent Mode)?","answer":"Concurrent React, previously referred to as Concurrent Mode, is a set of new features in React that allows React to interrupt the rendering process to consider more urgent tasks, making it possible for React to be more responsive to user input and produce smoother user experiences. It lets React keep the UI responsive while rendering large component trees by splitting the rendering work into smaller chunks and spreading it over multiple frames.\n","topics":["Performance","Intermediate"]},{"question":"What is the `useTransition` hook?","answer":"use-transition.md","topics":["Performance","Advanced"]},{"question":"What is the purpose of `flushSync` in React?","answer":"flush-sync.md","topics":["Core","Advanced"]},{"question":"How to render React components as static HTML string?","answer":"The `renderToString` function in React is part of the `react-dom/server` package and is used to render React components on the server-side to a static HTML string. It is commonly used for server-side rendering (SSR) in React.\n","topics":["SSR","Intermediate"]},{"question":"What are Server Components in React?","answer":"Server Components allow developers to write components that render on the server instead of the client. Unlike traditional components, Server Components do not have a client-side runtime, meaning they result in a smaller bundle size and faster loads. They can seamlessly integrate with client components and can fetch data directly from the backend without the need for an API layer. This enables developers to build rich, interactive apps with less client-side code, improving performance and developer experience.\n","topics":["SSR","Intermediate"]},{"question":"How to lazy load components in React?","answer":"lazy-loading.md","topics":["Performance","Intermediate"]},{"question":"What is `Suspense` in React?","answer":"suspense.md","topics":["UX","Intermediate"]},{"question":"How React Virtual DOM works?","answer":"virtual-dom.md","topics":["Core","Intermediate"]},{"question":"How do Server Components differ from Client Components?","answer":"Server Components are rendered on the server and do not require client-side JavaScript for rendering. While Server Components and Client components can coexist in the same app, Server Components can import and render Client components.","topics":["SSR","Beginner"]},{"question":"How do React Server Components handle data fetching?","answer":"Server Components can directly access backend resources, databases, or filesystems to fetch data during rendering, eliminating the need for a separate API layer for data fetching.","topics":["SSR","Beginner"]},{"question":"What's the component's lifecycle in React?","answer":"component-lifecycle.md","topics":["Core","Beginner"]},{"question":"How to write a comment in React?","answer":"You can write a comment in JSX by wrapping it in curly braces and using JavaScript's multi-line comment syntax.\n```js\n{/* This is a comment */}\n```\n","topics":["Core","Beginner"]},{"question":"What is the difference between stateful and stateless components?","answer":"The main difference between stateful and stateless components is one has state and the other doesn't. Stateful components keep track of changes to their state and re-render themselves when the state changes. Stateless components, on the other hand, render whatever is passed to them via `props` or always render the same thing.\n","topics":["Core","Beginner"]},{"question":"Why you shouldn't use `index` as a key in React lists and iterators?","answer":"Using `index` as a key can negatively impact performance and may cause issues with the component state. When the list items change due to additions, deletions, or reordering, using indexes can lead to unnecessary re-renders or even incorrect UI updates. React uses keys to identify elements in the list, and if the key is just an index, it might reuse component instances and state inappropriately. Especially in cases where the list is dynamic or items can be reordered, it's recommended to use unique and stable identifiers as keys to ensure consistent behavior.","topics":["Performance","Beginner"]},{"question":"What is the naming convention for React components?","answer":"In React, the naming convention for components is to use PascalCase, meaning the first letter of each word in the component's name should be capitalized. For example, `UserProfile`, `SidebarItem`, or `NavigationMenu`. This convention differentiates custom React components from regular HTML tags in JSX, as React treats elements starting with a lowercase letter as DOM tags and those starting with a capital letter as custom components.","topics":["Core","Beginner"]},{"question":"How to render a list in React?","answer":"render-list.md","topics":["Core","Beginner"]},{"question":"What are `use client` and `use server` directives?","answer":"The `use client` directive marks source files whose components are intended to execute only on the client. Conversely, `use server` marks server-side functions that can be invoked from client-side code.","topics":["SSR","Intermediate"]},{"question":"Can you use hooks in Server Components?","answer":"No, hooks are not supported in Server Components. Hooks are a client-side feature and are not supported in Server Components. However, you can use hooks in client components and import them into Server Components.","topics":["SSR","Intermediate"]},{"question":"How to create a Custom hook in React?","answer":"custom-hook.md","topics":["Core","Intermediate"]},{"question":"What is Hydration in React?","answer":"Hydration is the process of using client-side JavaScript to add interactivity to the markup generated by the server. When you use server-side rendering, the server returns a static HTML representation of the component tree. Once this reaches the browser, in order to make it interactive, React \"hydrates\" the static content, turning it into a fully interactive application.\n","topics":["SSR","Intermediate"]},{"question":"What is Strict Mode in React and why is it useful?","answer":"strict-mode.md","topics":["Debugging","Intermediate"]},{"question":"How do you investigate a slow React app and identify performance bottlenecks?","answer":"investigate-slow-app.md","topics":["Performance","Intermediate"]}]};
				const file = "/workspaces/developer-roadmap/src/data/question-groups/react/react.md";
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

const anomalyDetection = "Some common techniques include:\n\n- Adding and implementing validation rules to prevent invalid data entry. Through the definition of schemas and schema constraints to enforce certain minimum standards, you can prevent data anomalies from happening.\n- Implement data versioning to easily revert back if there are any anomalies detected.\n- Implement a strong data quality practice to ensure that whatever information enters your system is properly validated and flagged if required.\n";

const __vite_glob_1_0 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: anomalyDetection
}, Symbol.toStringTag, { value: 'Module' }));

const apiDependencies = "A great way to handle API dependencies in backend systems is to take advantage of API versioning. Through this simple practice, you can ensure that your systems are actually using the right API, even if there are multiple versions of it.\n\nThis also allows you to have multiple backend systems using different versions of the same API without any risk of inconsistency or of updates breaking your systems.";

const __vite_glob_1_1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: apiDependencies
}, Symbol.toStringTag, { value: 'Module' }));

const apiEndpoint = "An API endpoint is a specific URL that acts as an entry point into a specific service or a functionality within a service.\n\nThrough an API endpoint, client applications can interact with the server sending requests (sometimes even with data in the form of payload) and receive a response from it.\n\nUsually, each endpoint can be mapped to a single feature inside the server.";

const __vite_glob_1_2 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: apiEndpoint
}, Symbol.toStringTag, { value: 'Module' }));

const apiTests = "As backend developers, we have to think about the types of tests that there are out there.\n\n- **Unit tests:** Always remember to only test the relevant logic through the public interface of your code (avoid testing private methods or inaccessible functions inside your modules). Focus on the business logic and don’t try to test the code that uses external services (like a database, the disk or anything outside of the piece of code you’re testing).\n- **Integration tests:** Test the full endpoint through its public interface (the actual HTTP endpoint) and see how it integrates with the external services it’s using (i.e the database, another API, etc).\n- **Load testing / performance testing:** You might want to also check how the new endpoint behaves under heavy stress. This might not be required depending on the API you’re using, but as a rule of thumb, it’s a good one to perform at the end of the development phase before releasing the new endpoint into prod.";

const __vite_glob_1_3 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: apiTests
}, Symbol.toStringTag, { value: 'Module' }));

const apiVersioning = "There are several ways in which you can handle API versioning, but the most common ones are:\n\n- **Keeping the version in the URL:** Either as a URL attribute (i.e /your-api/users?v=1) or as part of the URL (i.e /v1/your-api/users). In both situations the version is clearly visible to the developer using the API.\n- **Using a custom header:** Another option is to have a custom header (such as api-version) where the developer must specify the version of your API they intend to use.";

const __vite_glob_1_4 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: apiVersioning
}, Symbol.toStringTag, { value: 'Module' }));

const batchProcessing = "The best option here would be to use a batch-processing framework such as Hadoop or Spark. They are already prepared to process massive amounts of data in parallel.";

const __vite_glob_1_5 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: batchProcessing
}, Symbol.toStringTag, { value: 'Module' }));

const benefitsDrawbacksMicroservices = "Benefits:\n\n- **Scalability:** microservices can scale independently from each other.\n- **Tech flexibility:** you can use different tech stacks depending on the particular needs of each microservice.\n- **Faster deployments:** microservices can be deployed individually, improving the speed at which you deliver changes to production.\n\nDrawbacks:\n\n- **Over complex architecture.** In some situations, a microservice-based architecture can grow to be too complex to manage and orchestrate.\n- **Debugging:** Debugging problems in a microservices-based architecture can be difficult as data flows through multiple services during a single request.\n- **Communication overhead:** Compared to a monolithic approach, communication between microservices can be overly complex.";

const __vite_glob_1_6 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: benefitsDrawbacksMicroservices
}, Symbol.toStringTag, { value: 'Module' }));

const bgTasks = "It highly depends on your tech stack and what those background tasks are doing. And because of that, there are many options:\n\n- Using task queues such as RabbitMQ or Amazon SQS. These will let you have workers in the background as secondary processes while your application continues working.\n- There are background job frameworks such as [Celery for Python](https://github.com/celery/celery) or [Sidekiq for Ruby](https://github.com/sidekiq/sidekiq).\n- You can also just rely on cron jobs if you want.\n- If your programming language permits it, you can also use threads or workers to run these tasks in the background but within the same application.\n";

const __vite_glob_1_7 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: bgTasks
}, Symbol.toStringTag, { value: 'Module' }));

const blueGreenDeployment = "The blue-green strategy involves having two identical production environments, having one of them serving real traffic while the other is getting ready to be updated with the next release or just idle, waiting to be used as a backup.";

const __vite_glob_1_8 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: blueGreenDeployment
}, Symbol.toStringTag, { value: 'Module' }));

const cacheEviction = "To define this strategy, you’ll need to define the following elements:\n\n- The size limit that will trigger the cache eviction when exceeded.\n- A monitoring strategy to determine if the eviction strategy is working properly or if it needs adjustment.\n- A cache invalidation mechanism.\n- And an eviction policy, which could be one of the following:\n  - **LRU (Least Recently Used):** Evict the least recently accessed items.\n  - **LFU (Least Frequently Used):** Remove items accessed least frequently.\n  - **FIFO (First-In, First-Out):** Evict items in the order they were added.\n  - **Random:** Randomly select items to evict.\n  - **TTL (Time-To-Live):** Expire items after a certain time.";

const __vite_glob_1_9 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: cacheEviction
}, Symbol.toStringTag, { value: 'Module' }));

const capTheorem = "![CAP Theorem](https://assets.roadmap.sh/guest/cap-theorem.png)\n\nThe CAP theorem says that distributed databases can’t simultaneously provide more than two of the following guarantees:\n\n- Data Consistency: Meaning that every read is always returning the most recent result of the write operation. This is very relevant in this model because we’re dealing with multiple servers and data needs to be replicated almost immediately to guarantee consistency.\n- Availability: Meaning that every request will always receive a valid response.\n- Partition tolerance: The distributed system continues to operate and work without data loss even during partial network outages.\n\nFor example, if the system is consistent and highly available, it won’t be able to withstand partial network outages. If on the other hand, the system is highly available and partition tolerant, it won’t be able to ensure immediate data consistency.";

const __vite_glob_1_10 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: capTheorem
}, Symbol.toStringTag, { value: 'Module' }));

const ciCd = "There are multiple considerations to have while setting up Continuous Integration and Continuous Delivery pipelines:\n\n- **Using source control** as the trigger for the entire process (git for example). The build pipelines for your backend services should get executed when you push your code into a specific branch.\n- **Pick the right CI/CD** platform for your needs, there are many out there such as GitHub Actions, GitLab CI/CD, CircleCI and more.\n- Make sure you have **automated unit tests** that can be executed inside these pipelines.\n- **Automatic deployment** should happen only if all tests are executed successfully, otherwise, the pipeline should fail, preventing broken code from reaching any environment.\n- **Use an artifact repository** such as JFrog Artifactory or Nexus Repository to store successfully built services.\n- Finally, consider setting up a **rollback strategy** in case something goes wrong and the final deployed version of your service is corrupted somehow.\n";

const __vite_glob_1_11 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: ciCd
}, Symbol.toStringTag, { value: 'Module' }));

const containerization = "It’s a lightweight virtualization method to package applications and their dependencies, ensuring consistent environments across different systems.\n\nIt’s actually a benefit for backend development because it provides isolation and portability by simplifying deployment processes and reducing conflicts between software versions and configurations.";

const __vite_glob_1_12 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: containerization
}, Symbol.toStringTag, { value: 'Module' }));

const correlationIds = "Correlation IDs are unique identifiers added on requests done to distributed architectures to facilitate tracking of requests throughout the architecture. Remember that usually, when a request hits a distributed backend system, the data from the request passes through multiple web services before generating a response.\n\nThis makes it easy to understand the journey each request goes through to debug any potential problems or performance issues.";

const __vite_glob_1_13 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: correlationIds
}, Symbol.toStringTag, { value: 'Module' }));

const dataEncryption = "For this type of application, you have to distinguish between “data at rest” and “data in transit”. The first one describes your data while it’s stored in your database (or any data storage you have). And the latter (data in transit) describes your data while it’s traveling between backend services or even between the server and the client.\n\nFor “data in transit”, you should be ensuring that connection happens inside a secure and encrypted channel such as HTTPS.\n\nAnd for “data at rest” use strong encryption algorithms such as [AES](https://en.wikipedia.org/wiki/Advanced_Encryption_Standard), [RSA](https://en.wikipedia.org/wiki/RSA_%28cryptosystem%29) or [ECC](https://en.wikipedia.org/wiki/Elliptic-curve_cryptography) and make sure to keep their associated keys somewhere safe, such as inside a dedicated secrets management tool or key management services (KMS).";

const __vite_glob_1_14 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: dataEncryption
}, Symbol.toStringTag, { value: 'Module' }));

const dbConnections = "During a high-load scenario, there are several things a developer can do to improve the performance of the database connection:\n\n- Using connection pools to reuse connections reduces the time required to establish a new one.\n- Load balancing the database traffic (the queries) between a group of databases would help distribute the load.\n- Even optimizing your queries can reduce the time you’re using each connection, helping you optimize the use of resources and minimizing the time you’re spending with each active connection.";

const __vite_glob_1_15 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: dbConnections
}, Symbol.toStringTag, { value: 'Module' }));

const deadlockDbTransaction = "There are many ways to prevent deadlocks in DB transactions; some of the most common are:\n\n- Using lock ordering to acquire locks in a consistent global order, avoiding circular wait conditions.\n- Using timeouts for DB transactions to automatically kill long-running operations that could lead to deadlocks.\n- Use of optimistic concurrency control where possible, to avoid holding locks for too long.";

const __vite_glob_1_16 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: deadlockDbTransaction
}, Symbol.toStringTag, { value: 'Module' }));

const debuggingBackend = "If the backend application being debugged is in the local dev machine, a simple solution would be to use the IDE itself. Most modern IDEs, such as IntelliJ, Eclipse and others have integrated debugging capabilities.\n\nIf the backend application is on the server though, you’ll have to use other techniques, such as logging, which you can do with logging libraries. Or, you can use more complex tools such as JProfiler or NewRelic.";

const __vite_glob_1_17 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: debuggingBackend
}, Symbol.toStringTag, { value: 'Module' }));

const decomposeMicroservices = "Microservices are a software architecture style that allows you to structure your backend applications as a collection of independent services, each one working around a specific business need.\n\nIf you’re looking to decompose a monolith into a set of microservices, you have to keep the following points in mind:\n\n- Start by identifying the logical boundaries of your monolith. Its inner logic will tackle multiple responsibilities and types of resources. Find the boundaries between them to understand where one service starts and another one ends.\n- Define your services based on the boundaries from the previous point and start decoupling the data needs as well. Either into multiple tables or even individual databases whenever it makes sense.\n- Start incrementally refactoring the monolith and extracting the logic required for each individual microservice into its own project.\n\nBy the time you’re done, your original monolith should not be needed anymore, and all your microservices will have their own independent deployment pipeline and code repository.";

const __vite_glob_1_18 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: decomposeMicroservices
}, Symbol.toStringTag, { value: 'Module' }));

const distributedCaching = "In this scenario, you have to consider the following points:\n\n- Implement a **cluster of servers** that will all act as the distributed cache.\n  Implement a **data sharding** process to evenly distribute the data amongst all cache servers and make sure it uses a consistent hashing algorithm to minimize cache reorganization when a server joins or leaves the cluster.\n- Add **cache replication** to have redundancy of your data in case of a failure, that way, your distributed cache is fault-tolerant as well.\n- **Cache invalidation** is a must on any caching solution, as your data will become stale if you don’t update it often.\n\n\n";

const __vite_glob_1_19 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: distributedCaching
}, Symbol.toStringTag, { value: 'Module' }));

const eventualConsistency = "![Eventual Consistency](https://assets.roadmap.sh/guest/eventual-consistency-zoh2b.png)\n\nEventual consistency is a consistency model used in distributed computing. This model guarantees that any piece of information written into a distributed system will become consistent (meaning that all servers will have the same version of this data) eventually as opposed to others where immediate consistency is assured.\n\nFor backend systems this implies that there is a need for data synchronization between all parts of the distributed system and on top of that, a potential need to resolve data conflicts, if different parts of your system are dealing with different versions of the same data record.";

const __vite_glob_1_20 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: eventualConsistency
}, Symbol.toStringTag, { value: 'Module' }));

const faultTolerance = "Database replication implies the replication of data across multiple instances of the same database. In this scenario, there is usually one database that’s acting as a master to all clients that are connecting it, and the rest act as “slaves” where they simply receive updates on the data being changed/added.\n\nThe two main implications of this in fault tolerance are:\n\n- A database cluster can withstand problems on the master server by promoting one of the slaves without losing any data in the process.\n- Slaves can be used as read-only servers, increasing the amount of read requests that can be performed on the data without affecting the performance of the database.";

const __vite_glob_1_21 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: faultTolerance
}, Symbol.toStringTag, { value: 'Module' }));

const fileUploads = "From a backend developer perspective, the following considerations should be taken into account when handling file uploads regardless of the programming language you’re using:\n\n- **Perform server-side validations.** Validate that the size of your file is within range, and that the file is of the required type. You can check [this OWASP guide](https://cheatsheetseries.owasp.org/cheatsheets/File_Upload_Cheat_Sheet.html) for more details.\n- **Use secure channels.** Make sure the file upload is done through an HTTPS connection.\n- **Avoid name collision.** Rename the file ensuring the new filename is unique within your system. Otherwise this can lead to application errors by not being able to save the uploaded files.\n- **Keep metadata about your files.** Store it in your database or somewhere else, but make sure to keep track of it, so you can provide extra information to your users. Also, if you’re renaming the files for security and to avoid name collisions, keep track of the original filename in case the file needs to be downloaded back by the user.\n";

const __vite_glob_1_22 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: fileUploads
}, Symbol.toStringTag, { value: 'Module' }));

const fulltextSearch = "You can use the native full-text search functionality of a database, such as MySQL, Postgre or even ElasticSearch.\n\nHowever, if you want to implement it yourself, the steps would be:\n\n- Preprocessing the text data to be searched and normalizing it by applying tokenization, stemming and removing stop words.\n- Then, implement an inverted index, somehow relating each unique word to the records that contain that word.\n- Create a search UI and normalize the input from the user in the same way the text data was normalized.\n- Then, search for each word in the database.\n- Sort the results by implementing a scoring logic based on different aspects, such as word frequency.";

const __vite_glob_1_23 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: fulltextSearch
}, Symbol.toStringTag, { value: 'Module' }));

const gdprCompliance = "The following are key considerations to be taken into account:\n\n- Capture only what you need and what you told your users you’d capture. Remember that to comply with GDPR, you have to ask for your user’s consent to collect their data, and you have to specify the actual data points you’re collecting. So focus on those and nothing else.\n- Secure your data. As part of the regulations, you have to make sure your data is secured both in transit and at rest. There are regular security audits that have to happen to ensure security is kept high.\n- The user has rights over the data you’ve captured, so make sure you give them the right endpoints or services to read it, edit it or even remove it if they want.";

const __vite_glob_1_24 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: gdprCompliance
}, Symbol.toStringTag, { value: 'Module' }));

const highAvailableStorage = "Building a highly available data storage involves multiple areas, including:\n\n- **Multi-zone environments.** If you’re going with cloud-based solutions (such as Azure, AWS, GCP or others) then you’re likely to have this requirement met instantly (except for some specific regions in the world). This is to ensure availability even during partial network outages.\n- **Data replication.** Ensure your data is being replicated between servers of all zones. This is to ensure that if there is a failure taking some servers down (or even entire zones) there is no data loss.\n- **Load balancing.** Ensure the traffic is properly load-balanced between all your availability zones to ensure the lowest latency for all your clients.\n- And then there are other requirements like setting up a proper data governance policy to ensure data access is regulated, as well as fully complying with your local data regulations (like GDPR).";

const __vite_glob_1_25 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: highAvailableStorage
}, Symbol.toStringTag, { value: 'Module' }));

const httpRequestResponseCycle = "The HTTP protocol is very structured and consists of a very well-defined set of steps:\n\n- **Open the connection.** The client opens a TCP connection to the server. The port will be port 80 for HTTP connections and 443 for HTTPS (secured) connections.\n- **Send the request.** The client will now send the HTTP request to the server. The request contains the following information:\n  - An [HTTP method](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods). It can be any of them (i.e. GET, POST, PUT, DELETE, etc).\n  - A URI (or Uniform Resource Identifier). This specifies the location of the resources on the server.\n  - The HTTP version (usually HTTP/1.1 or HTTP/2).\n  - A set of headers. They include extra data related to the request; there is a [full list of HTTP headers](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers) that can be used here.\n  - The optional body. Depending on the type of request, you’ll want to also send data, and the data is encoded inside the body of the request.\n- **Request processed by the server.** At this stage, the server will process the request and prepare a response.\n- **Send the HTTP response back to the client.** Through the open channel, the server sends back an HTTP response. The response will contain the following elements:\n  - The HTTP Version.\n  - The status code. There is a list of [potential status codes](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status) that describe the result of the request.\n  - A set of headers with extra data.\n  - The optional body, just like with the request, the body of the response is optional.\n- **The connection is closed.** This is usually the last step, although with newer versions of the protocol, there are options to leave the channel open and continue sending requests and responses back and forth.";

const __vite_glob_1_26 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: httpRequestResponseCycle
}, Symbol.toStringTag, { value: 'Module' }));

const idempotency = "For REST APIs you can take advantage of HTTP verbs and define your idempotent operations using inherently idempotent verbs, such as GET, PUT, and DELETE.\n\nOr you can always manually implement a key-based logic to avoid repeating the same operation multiple times if the key provided by the client is always the same.";

const __vite_glob_1_27 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: idempotency
}, Symbol.toStringTag, { value: 'Module' }));

const instrumentMonitor = "A great way to monitor the performance of backend applications is to use an Application Performance Management system (APM) such as New Relic, AppDynamics or even Dynatrace.\n\nThose will track your application’s performance and provide insight into the bottlenecks you might have with minimum effort on your part.";

const __vite_glob_1_28 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: instrumentMonitor
}, Symbol.toStringTag, { value: 'Module' }));

const iotStreams = "![IOT Data Streams](https://assets.roadmap.sh/guest/iot-data-streams-ks8vn.png)\n\nA real-time data capture and processing architecture would require the following components:\n\n- Use a scalable data ingestion service such as [Kafka](https://kafka.apache.org/) or [AWS Kinesis](https://aws.amazon.com/es/pm/kinesis/) that is compatible with one of the many IoT standard protocols (like MQTT or CoAP).\n- Process the data through real-time processing engines such as Apache Flink or Spark Streaming.\n- Store the data inside a scalable data lake, ideally a time-series compatible system such as [InfluxDB](https://www.influxdata.com/).\n";

const __vite_glob_1_29 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: iotStreams
}, Symbol.toStringTag, { value: 'Module' }));

const loadBalancedSession = "In a load-balanced application scenario, the main issue with session state is that if the backend system is handling session data in memory, then subsequent requests from the same client need to land on the same server, otherwise session data is fragmented and useless.\n\nThere are two main ways to solve this problem:\n\n- Sticky sessions: This allows you to configure the load balancer to redirect requests from the same client into the same server every time. The downside with this one, is that the traffic is not always equally distributed among all copies of your backend services.\n- Centralized session store: This solution involves taking the session data outside of your backend services into a centralized data store that all copies of your service can access. This makes it easier on the load balancer, but requires extra logic and more “moving parts”.\n\nIt’s up to you and your specific technical requirements to determine which strategy works best for you.";

const __vite_glob_1_30 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: loadBalancedSession
}, Symbol.toStringTag, { value: 'Module' }));

const loadTestingApi = "- First you have to understand the goals and set up a testing environment. Ideally, your environment would closely resemble production.\n- Design and implement your tests with the tools you’ve selected (such as [JMeter](https://jmeter.apache.org/), [LoadRunner](https://www.opentext.com/products/loadrunner-enterprise) or any other).\n- Start to gradually increase the load on your tests while monitoring the performance and stability of your system.\n- Optimize your backend API and go back to the first step to redesign your tests and try again until you’re happy with the results.\n";

const __vite_glob_1_31 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: loadTestingApi
}, Symbol.toStringTag, { value: 'Module' }));

const longRunning = "![Long-running processes](https://assets.roadmap.sh/guest/long-running-sn5fc.png)\n\nFor web requests that trigger long-running processes, the best option is to implement a reactive architecture. This means that when a service receives a request, it will transform it into a message inside a message queue, and the long-running process will pick it up whenever it’s ready to do so.\n\nIn the meantime, the client sending this request receives an immediate response acknowledging that the request is being processed. The client itself can also be connected to the message queue (or through a proxy) and waiting for a “ready” event with its payload inside.";

const __vite_glob_1_32 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: longRunning
}, Symbol.toStringTag, { value: 'Module' }));

const maintainableCode = "The trick here is to follow best practices and coding standards such as:\n\n- Modularity.\n- Following naming conventions.\n- Adding code comments.\n- Doing regular refactors to keep technical debt under check.\n- Keeping error handling messages consistent throughout the platform.\n- Performing unit tests on all written code.";

const __vite_glob_1_33 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: maintainableCode
}, Symbol.toStringTag, { value: 'Module' }));

const messageQueue = "![Message Queue](https://assets.roadmap.sh/guest/message-queue-yw7on.png)\n\nA message queue in a distributed system can act as the core component of a reactive architecture. Each service can trigger and listen for events coming from the queue. That way, when the events arrive, those services can react to them without having to actively poll other services for a response.";

const __vite_glob_1_34 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: messageQueue
}, Symbol.toStringTag, { value: 'Module' }));

const optimisticVsPessimistic = "**Optimistic locking** is a strategy that:\n\n- Assumes conflicts are rare and don’t happen that often.\n- Allows for concurrent data access.\n- Checks if there are conflicts before committing.\n- It’s best used in high-read, low-write scenarios.\n\n**Pessimistic locking**, on the other hand, is a strategy that:\n\n- Assumes conflicts to be very common.\n- Locks data and prevents concurrent access.\n- Holds these locks for the duration of a transaction.\n- It’s best suited for high-write scenarios or when data integrity is critical.\n";

const __vite_glob_1_35 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: optimisticVsPessimistic
}, Symbol.toStringTag, { value: 'Module' }));

const protectSqlInjection = "There are many ways to protect your relational database from SQL injection attacks, but here are three very common ones.\n\n- **Prepared statements with parameterized queries.** This is probably the most effective way since it’s done by a library or framework, and all you have to do is write your queries leaving placeholders for where the data is meant to go, and then, in a separate place, provide the actual data.\n- **Use an ORM (Object-Relational Mapping).** These frameworks allow you to abstract the interaction with your database and create the SQL queries for you, taking into account all matters of security around that interaction.\n- **Escaping data.** If you want to do this manually, you can take care of escaping special characters that might break how you construct your SQL queries. Keeping a list of blacklisted characters to escape in this situation is a good idea, so you can programmatically go through them.";

const __vite_glob_1_36 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: protectSqlInjection
}, Symbol.toStringTag, { value: 'Module' }));

const rateLimiting = "To implement rate limiting, you have to keep the following points in mind:\n\n- **Define your limits.** Define exactly the amount of requests a client can make. This can be measured in requests per minute, per day, or per second.\n- **Choose a limiting strategy.** Pick a rate-limiting algorithm, like the fixed window counter, sliding log window, token bucket, or leaky bucket. You can read more about [these algorithms here](https://www.designgurus.io/answers/detail/rate-limiting-algorithms).\n- **Store your counters somewhere.** Use a fast data store (like Redis) to keep track of the number of requests or timestamps for each client.\n- Once the limit is reached, try to respond with a **standard status code**, such as 429 which indicates there have been “Too Many Requests”.\n\nIf you want to take this further, you can look into using an existing API Gateway that already provides this functionality or look into adding support for sudden bursts of traffic to avoid penalizing clients that are slightly above the limits every once in a while.";

const __vite_glob_1_37 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: rateLimiting
}, Symbol.toStringTag, { value: 'Module' }));

const realtimeDataSync = "If you want to support real-time data synchronization, you’ll have to find a way to create stable and efficient communication channels between devices and find a way to solve potential data sync conflicts when several devices are trying to change the same record.\n\nSo, for communication channels, you can use one of the following:\n\n- Socket-based bidirectional channels that allow for real-time data exchange.\n- Using a pub/sub model to efficiently distribute data between multiple devices. You can use something like Redis or Kafka for this one.\n\nFor data conflict resolutions, you can use algorithms like Operational Transformation (OT) or [Conflict-Free Replicated Data Types](https://en.wikipedia.org/wiki/Conflict-free_replicated_data_type) (CRDTs).";

const __vite_glob_1_38 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: realtimeDataSync
}, Symbol.toStringTag, { value: 'Module' }));

const restCorePrinciples = "For an API to be RESTful (which means it complies with the REST guidelines), it needs to:\n\n- It needs to follow a client-server architecture (which all HTTP-based services do).\n- It has to provide a uniform interface which means:\n  - There should be a way to identify resources from each other through URIs (Unique Resource Identification).\n  - There should be a way to modify resources through their representation.\n  - Messages should be self descriptive, meaning that each message should provide enough information to understand how to process it.\n  - Clients using the API should be able to discover actions available for the current resource using the provided response from the server (this is known as HATEOAS or Hypermedia as the Engine of Application State).\n- It needs to be stateless, which means each request to the server must contain all information to process the request.\n- It should be a layered system, meaning that client and server don’t have to be connected directly to each other, there might be intermediaries, but that should not affect the communication between client and server.\n- Resources should be cacheable either by client or by server.\n- Optionally, the server could send code to the client for it to execute (known as “Code on Demand”).";

const __vite_glob_1_39 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: restCorePrinciples
}, Symbol.toStringTag, { value: 'Module' }));

const reverseProxy = "A reverse proxy is a server that sits in front of multiple other servers and redirects traffic to those web servers based on different logic rules. For example, you could have two web servers, one for customers of your business and another one for your employees.\n\nYou could configure a reverse proxy to redirect traffic to one or the other depending on the value of a header sent in the request or the actual URL being requested.\n\nIt is very useful in backend development because it allows you to do many different things, for example:\n\n- Load balancing traffic between multiple instances of the same backend service.\n- Provide an extra layer of security by hiding the location of the backend services and handling attacks, such as DDoS.\n- It can cache content, reducing server load on your web servers.\n- It allows you to switch backend services without affecting the public-facing URLs.";

const __vite_glob_1_40 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: reverseProxy
}, Symbol.toStringTag, { value: 'Module' }));

const scaleBackend = "The most common way to scale up a backend application during traffic surges is to have multiple instances of the application behind a load balancer, and when the traffic surge happens, simply add more instances of the application.\n\nThis is known as horizontal scaling and works best when the backend application is stateless.\n\n![Scaling](https://assets.roadmap.sh/guest/scale-backend-amf0h.png)";

const __vite_glob_1_41 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: scaleBackend
}, Symbol.toStringTag, { value: 'Module' }));

const schemaMigrations = "The two main aspects to consider when managing schema migrations, especially in CD environments are:\n\n- Track your schema migrations inside version control. Keep these files versions with your code, as there is a direct relation between those versions.\n- Use automated migration tools such as [Flyway](https://flywaydb.org/) or [Liquibase](https://www.liquibase.com/) to simplify the process and keep it standard.";

const __vite_glob_1_42 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: schemaMigrations
}, Symbol.toStringTag, { value: 'Module' }));

const secureApi = "There are many ways to secure an API, here are some of the most common ones:\n\n- Add an authentication method, such as OAuth, JWT, Bearer tokens, Session-based auth, and others.\n- Use HTTPS to encrypt data transfer between client and server.\n- Configure strong CORS policies to avoid unwanted requests.\n- Setup a strong authorization logic, to ensure clients only access resources they have access to.";

const __vite_glob_1_43 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: secureApi
}, Symbol.toStringTag, { value: 'Module' }));

const secureInterservice = "Starting from the basis of understanding that your inter-service communication is meant to only happen inside private networks (ideally, no public traffic should reach these services), here are some recommendations:\n\n- Use encrypted channels, such as TLS to prevent common attacks such as [man-in-the-middle](https://en.wikipedia.org/wiki/Man-in-the-middle_attack).\n- Use an API gateway to manage and authenticate traffic that reaches this private network.\n- Enforce authentication and authorization for inter-service messages, making sure that only valid microservices can reach each other, and when they do, they only have access to what it makes sense for them to have.\n";

const __vite_glob_1_44 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: secureInterservice
}, Symbol.toStringTag, { value: 'Module' }));

const sessionManagement = "The following is a high-level overview of how session management works for web applications:\n\n- **The session is created.** This happens with the first interaction with the system by the user (during log-in). The backend of your app will create a unique session ID that will be stored and returned to the user to use in future requests.\n- **Session information storage.** The session data needs to be stored somewhere. Whether it’s in-memory, or inside a database, it needs to be indexed by the session ID from the previous point. Here the best option is to use a database (ideally something like Redis with high I/O performance) so that the services can be scaled independently from the session data.\n- **The session ID is sent to the client.** The most common way of doing this is through cookies. The backend can set up a cookie with the session ID and the frontend can read it securely and use that ID however it needs to.\n- **Client sends the session ID.** After the ID is created, the client application will identify itself with the backend using this ID on every request.\n- **Accessing the session data in the backend.** The backend will access the stored session data using the session ID received from the client.\n- **Session is closed.** After a while, or perhaps through a user action, the session ID will be deleted, which will cause the session data to be lost (or removed from the DB). This effectively ends the interactions between the client and the server as part of the existing session.";

const __vite_glob_1_45 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: sessionManagement
}, Symbol.toStringTag, { value: 'Module' }));

const sqlVsNosql = "[SQL databases](/sql) (or relational databases as they’re also known) rely on a predefined schema (or structure) for their data. Whenever you describe a record, or table inside the database, you do so through its format (name and fields).\n\nIn the case of a NoSQL database, there is no schema, so there is no predefined structure to the data. You usually have collections of records that are not obligated to have the same structure, even if they represent conceptually the same thing.";

const __vite_glob_1_46 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: sqlVsNosql
}, Symbol.toStringTag, { value: 'Module' }));

const sso = "At a very high level, the steps required to implement an SSO solution are:\n\n- Picking an identity provider, such as [Okta](https://www.okta.com/) or [Keycloack](https://www.keycloak.org/).\n- Each application will then integrate with the Identity provider from the previous step using a standard SSO protocol, such as SAML, OpenID or any other.\n- For the first user access, the application will connect with the IdP and authenticate the user, getting an access token in return.\n- Then during subsequent requests, the application will validate the provided token through the IdP.";

const __vite_glob_1_47 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: sso
}, Symbol.toStringTag, { value: 'Module' }));

const statelessnessHttp = "HTTP is, by design, a stateless protocol, which means that every request is unique and unrelated to any previous request, even from the same client.\n\nThis affects backend web services by forcing them to implement their own state management solutions if such a feature is required.";

const __vite_glob_1_48 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: statelessnessHttp
}, Symbol.toStringTag, { value: 'Module' }));

const webhooks = "Webhooks are user-defined HTTP callbacks, they are triggered by a specific event inside a system. They’re mainly used to notify about results of multi-step, asynchronous tasks to avoid keeping an open HTTP connection.\n\nAs for the implementation of a webhook, consider the following:\n\n- **Event definition.** Make sure to define exactly what events will trigger the message to the webhook and the type of payload associated with those events.\n- **Endpoint creation.** Based on the previous step, define an HTTP endpoint that can deal with the expected request (especially with the payload part). In other words, if you’re receiving data in the webhook request, make sure to create the endpoint as a POST endpoint, otherwise you can use a GET one.\n- **Security.** Remember to implement some form of security measures around your webhook endpoint so it can’t be exploited.";

const __vite_glob_1_49 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: webhooks
}, Symbol.toStringTag, { value: 'Module' }));

const asyncOpsJs = "There are 4 main ways in which JavaScript allows developers to handle asynchronous calls. In the end, the result is always the same, but the final structure of the code and the way to reason about it is considerably different.\n\n- **Callbacks**. They allow you to set up a function to be called directly once the asynchronous operation is done.\n- **Promises**. Promises represent the eventual completion of an asynchronous operation, and they provide a simpler and more intuitive syntax to specify callbacks to be called on success and failure of the operation.\n- **Async/Await**. The final evolution of the promises syntax. It’s mainly syntactic sugar, but it makes asynchronous code look synchronous, which in turn makes it a lot easier to read and reason about.\n- **Event listeners**. Event listeners are callbacks that get triggered when specific events are fired (usually due to user interactions).\n";

const __vite_glob_1_50 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: asyncOpsJs
}, Symbol.toStringTag, { value: 'Module' }));

const blockInlineElems = "In CSS, the difference between **inline**, **inline-block**, and **block** elements is on the way they’re rendered in the web page:\n\n- **Inline**: Inline elements don’t have a width or height. Instead, they don’t start on a new line and take up only the width that’s required (based on their content). Examples: &lt;span&gt;, &lt;a&gt;.\n- **Inline-block**: Just like inline elements, here the DOM elements do not start on a new line, however, they do allow you to set a height and width on them. Example: &lt;img&gt;.\n- **Block**: Elements start on a new line, taking up the full width available by default. Their width and height can be set by you. Examples: &lt;div&gt;, &lt;p&gt;.\n";

const __vite_glob_1_51 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: blockInlineElems
}, Symbol.toStringTag, { value: 'Module' }));

const boxModel = "The CSS box model describes the rectangular boxes generated for elements in the DOM. The box model is composed of the following layers:\n\n1. **Content**: The innermost part, where text and images appear.\n2. **Padding**: The space between the content and the border.\n3. **Border**: The outer edge of the padding, surrounding the element.\n4. **Margin:** The space outside the border, separating the element from others.\n\nBy controlling each layer individually, you can define the look of each element in the user interface.\n";

const __vite_glob_1_52 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: boxModel
}, Symbol.toStringTag, { value: 'Module' }));

const browserRender = "The process of rendering a web page in the browser involves several steps:\n\n1. Parsing the HTML.\n2. Parsing the CSS and applying styles.\n3. Calculating the position of each element in the layout of the page.\n4. Painting the actual pixels in the screen, while at the same time sorting them into layers.\n5. Composing all layers together, to render the website on screen. This step is taking into account z-index values, opacity values and more.\n6. Running JavaScript code.\n7. Loading the asynchronous resources.\n";

const __vite_glob_1_53 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: browserRender
}, Symbol.toStringTag, { value: 'Module' }));

const clientStorage = "**Cookies** are small pieces of data stored in web browsers. They are mainly used for keeping information between HTTP requests, such as user authentication, session management, and tracking user behavior\n\nOn the other hand, **sessionStorage** is designed for temporary storage and is accessible only within the same session (i.e.., while the browser window or tab is open). Data stored in sessionStorage is lost when the browser window is closed.\n\nFinally, **localStorage** is similar to **sessionStorage** but persists even when the browser window or tab is closed and reopened. It provides long-term storage for web applications. They are very similar to cookies, however, the size limitations on localStorage are quite big compared to cookies, making it a much better alternative when storing large datasets.\n";

const __vite_glob_1_54 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: clientStorage
}, Symbol.toStringTag, { value: 'Module' }));

const closures = "When a function is defined within another function, it retains access to the variables and parameters of the outer function, even after the outer function has finished executing. That link, between the inner function and its scope inside the outer function is known as “closure”\n\nYou can use them to create private variables that can only be accessed by the inner function, you can even use them to create complex objects with access to a rich context that is only available globally to them.";

const __vite_glob_1_55 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: closures
}, Symbol.toStringTag, { value: 'Module' }));

const criticalCss = "Remove the CSS rules from the CSS files and inline them into the main “&lt;head&gt;” element of your website.\n\nBy doing it like this, you remove the loading time of that code, as it loads immediately once the main file loads. The rest, the non-critical rules, can be loaded once the main resource loads (the main CSS file).\n";

const __vite_glob_1_56 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: criticalCss
}, Symbol.toStringTag, { value: 'Module' }));

const csp = "Content Security Policy (CSP) is a security standard that helps to avoid cross-site scripting (XSS) attacks and other code injection attacks by defining and enforcing a whitelist of approved sources, such as scripts, stylesheets, images, and other resources.\n\nThe main benefits are:\n\n- **Better Security**: CSP helps protect websites and web apps against various types of attacks, including XSS and data injection.\n- **More Contro**l: Developers can define fine-grained policies to control the sources from which content can be loaded.\n- **Improved Compliance**: Helps meet security compliance requirements, such as those outlined in OWASP Top 10.";

const __vite_glob_1_57 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: csp
}, Symbol.toStringTag, { value: 'Module' }));

const cssGrid = "To create a grid layout, you have to first specify the “display:grid” property on the containing element, and then define the structure of the grid, by using the “grid-template-rows” and “grid-template-columns” properties.\n\nNow simply place the elements inside the grid container and specify the “grid-column” or “grid-row” properties.\n";

const __vite_glob_1_58 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: cssGrid
}, Symbol.toStringTag, { value: 'Module' }));

const cssSpecificity = "CSS specificity is used to determine which set of styles to apply on any given element when there are overlapping styles (like several rules setting the font-size of the same element).\n\nThe way it works is by applying the following order of precedence:\n\n1. First, any inline style will override any other style.\n2. Second, any ID-based style will override anything but inline styles.\n3. Third, class-based selectors will override anything but inline and ID-based styles.\n4. Finally, type selectors can be overridden by any other type of selectors.\n";

const __vite_glob_1_59 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: cssSpecificity
}, Symbol.toStringTag, { value: 'Module' }));

const cssVariables = "Just like variables in programming languages, CSS variables can be set by developers and reused across the entire CSS stylesheets. They’re great for centralizing global values that are used throughout the web site’s code.\n\nThey’re also heavily used by CSS frameworks to set constants such as the value of colors (i.e. “black” being “#222” instead of “000”.-\n";

const __vite_glob_1_60 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: cssVariables
}, Symbol.toStringTag, { value: 'Module' }));

const dom = "The Document Object Model (DOM) is an API for web documents. It represents the structure of an HTML web page as a tree of nodes, where each node corresponds to a part of the document (i.e. an element, an attribute, or text).\n";

const __vite_glob_1_61 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: dom
}, Symbol.toStringTag, { value: 'Module' }));

const emVsRem = "![EM vs REM in CSS](https://assets.roadmap.sh/guest/em-vs-rem-css-jwgx8.png)\n\nThey’re both relative units of measurement, however, they’re relative to different things:\n\n1. **“em”** units are relative to the font size of their parent element. So if the parent element has a font size of 20px, then setting a “2em” font size, would equal to 40px.\n2. **“rem”** units are “root em”, which means they’re relative to the web page’s root element (the “&lt;html&gt;” element).\n";

const __vite_glob_1_62 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: emVsRem
}, Symbol.toStringTag, { value: 'Module' }));

const eventDelegation = "Event delegation is a technique where you define an event handler for a particular event as part of the parent element that contains the elements that will actually trigger the event.\n\n![Event Delegation in JavaScript](https://assets.roadmap.sh/guest/event-delegation-explained-5e2vt.png)\n\nWhen the event is triggered, it’ll bubble up in the DOM hierarchy until it reaches the parent’s event handler.\n";

const __vite_glob_1_63 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: eventDelegation
}, Symbol.toStringTag, { value: 'Module' }));

const eventListeners = "To add an event listener on an element, you have to first “get” that element through one of the many methods of the document object (i.e. getElementById, etc) and then use the addEventListener method of the obtained object.\n\nThe method will receive the event name (i.e. ‘click’, ‘keyup’, ‘mouseup’, etc), the event handler function and, optionally, a boolean indicating whether the event should be captured during the capturing phase.";

const __vite_glob_1_64 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: eventListeners
}, Symbol.toStringTag, { value: 'Module' }));

const eventLoopJs = "The event loop is a core concept in JavaScript, and it allows for the execution of asynchronous code.\n\n![Event loop in JavaScript](https://assets.roadmap.sh/guest/javascript-event-loop-explained-d92hx.png)\n\nThe way it works, is as follows:\n\n1. **Call Stack**: JavaScript executes your code on a single thread using a call stack, where function calls are added and executed one by one. When a function ends, it's removed from the stack.\n2. **Async calls**: For asynchronous operations, JavaScript uses Web APIs provided by the browser. These operations are offloaded from the call stack and handled separately.\n3. **Tasks Queue**: Once an asynchronous call is done, its callback is placed in the task queue.\n4. **Event Loop**: The event loop constantly checks the call stack and the task queue. If the call stack is empty, it takes the first task from the queue and pushes it onto the call stack for execution. This cycle repeats indefinitely.\n";

const __vite_glob_1_65 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: eventLoopJs
}, Symbol.toStringTag, { value: 'Module' }));

const flexboxLayout = "To create a flexbox layout, you have to take care of 2 main steps:\n\n1. Set up the container element by applying the “display:flexbox” CSS property to it.\n2. Set up the flexbox properties for each element inside the container (something like “flex:1” would suffice).\n";

const __vite_glob_1_66 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: flexboxLayout
}, Symbol.toStringTag, { value: 'Module' }));

const idVsClass = "An **id** is a unique identifier for a single HTML element. A **class** is a reusable identifier that can be applied to multiple elements.\n\n![ID vs Class in HTML](https://assets.roadmap.sh/guest/css-classes-vs-id-example-9ufsl.png)\n\nYou’d want to use an **id** when you need to address a single element either through CSS or JavaScript. And you’ll want to use a **class** when you need to address a group of DOM elements.\n\nIn CSS:\n\n- **#id** selects a specific element with that id.\n- **.class** selects all elements with that class.\n";

const __vite_glob_1_67 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: idVsClass
}, Symbol.toStringTag, { value: 'Module' }));

const improveWebPerf = "The main set of metrics to monitor for web apps are:\n\n1. First Contentful Paint (FCP): Time until the first piece of content is rendered.\n2. Largest Contentful Paint (LCP): Time until the largest content element is rendered.\n3. Time to Interactive (TTI): Time until the page is fully interactive.\n4. Total Blocking Time (TBT): Total time during which the main thread is blocked.\n5. Cumulative Layout Shift (CLS): Measures visual stability.\n";

const __vite_glob_1_68 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: improveWebPerf
}, Symbol.toStringTag, { value: 'Module' }));

const jsPromises = "Promises are JavaScript objects that represent the eventual completion of an asynchronous call. Through promises you’re able to handle the successful or failed execution of the asynchronous call.";

const __vite_glob_1_69 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: jsPromises
}, Symbol.toStringTag, { value: 'Module' }));

const mediaQueries = "Media queries are a feature in CSS that allow Front End developers to apply different styles to a document based on various characteristics of the device or viewport. For example, you can set different styles based on the device’s width, height, orientation, or type.\n\nThrough media queries we can achieve responsive design allowing styles to adapt to different screen sizes and device capabilities.\n";

const __vite_glob_1_70 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: mediaQueries
}, Symbol.toStringTag, { value: 'Module' }));

const nullVsUndefined = "In JavaScript, “undefined” is the default value new variables take, and it means the variable has been defined but it hasn’t been assigned any value just yet.\n\nAnd “null” is actually a value that signals “no value” or “no object”, it is specifically assigned to the variable by the developer.";

const __vite_glob_1_71 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: nullVsUndefined
}, Symbol.toStringTag, { value: 'Module' }));

const optimizeAssets = "There are different techniques to improve loading times, depending on the asset type, for example:\n\n- CSS & JavaScript files should be minimized and compressed.\n- Images can be compressed when you’re saving them or through the use of specialized software, like [JPEGOptim](https://github.com/tjko/jpegoptim) or [ImageOptim](https://imageoptim.com/mac). Just make sure you don’t lose any quality during the process.";

const __vite_glob_1_72 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: optimizeAssets
}, Symbol.toStringTag, { value: 'Module' }));

const sameOriginPolicy = "The same-origin policy is a security feature in browsers designed to prevent a web site from accessing data (like importing a script, or sending a request to an API) from another site.\n\nThis policy helps protect users from malicious scripts that try to steal sensitive data from other websites, such as cookies, local storage, or content\n\nA way to overcome this limitation is through CORS (Cross-Origin Resource Sharing). As long as the server specifies which domain it can receive requests from, and the client app sends the right headers, they will be able to interact with each other, even if they’re not in the same domain.";

const __vite_glob_1_73 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: sameOriginPolicy
}, Symbol.toStringTag, { value: 'Module' }));

const seoBestPractices = "Purely from the HTML side:\n\n- **Use Semantic HTML**: Use tags like &lt;header&gt;, &lt;nav&gt;, &lt;main&gt;, &lt;article&gt;, &lt;section&gt;, and &lt;footer&gt; to provide meaningful structure.\n- **Proper Heading Hierarchy**: Use headings (&lt;h1&gt; to &lt;h6&gt;) correctly, making sure &lt;h1&gt; is used once per page for the main title, followed by &lt;h2&gt;, &lt;h3&gt;, etc.\n- **Meta Tags**: Include relevant &lt;meta&gt; tags, such as description, keywords, and viewport, to provide metadata about the website.\n- **Alt Attributes on images**: Use alt attributes for images to describe the content, improving accessibility and search engine understanding.\n\nOn top of that:\n\n- **Internal Linking**: Make sure to use internal links to connect content within your web site, helping search engines crawl and understand the site structure.\n- **Mobile-Friendly Design**: Code your site and CSS with a mobile-first mindset. Ensuring the site is responsive and mobile-friendly to improve user experience and ranking on search engines.\n- **Fast Loading Times**: Try to optimize images, use efficient code, and leverage caching to improve page load speeds. The faster the page loads, the bigger the advantage it’ll have against other similar results on the SERP.\n";

const __vite_glob_1_74 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: seoBestPractices
}, Symbol.toStringTag, { value: 'Module' }));

const serviceWorkers = "Service workers are scripts that run in the background of a web application, separate from the web page’s main thread, and provide features like offline caching, push notifications, and background synchronization.";

const __vite_glob_1_75 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: serviceWorkers
}, Symbol.toStringTag, { value: 'Module' }));

const ssrWhen = "Server-side rendering (SSR) is a technique in which a web server generates the HTML content of a web page and sends it to the client (usually a web browser) as a fully rendered document. This is the opposite of what naturally happens with client-side rendering (CSR), where the browser downloads a minimal HTML page and then uses JavaScript to render the content dynamically.\n\nThere are several ideal use cases for SSR:\n\n- **Content-rich websites**. For example, news sites, blogs, etc.\n- **SEO-heavy applications**. When the success of the web app relies on SEO, this approach can greatly improve the performance of the site (and because of that, the SEO performance).\n- **Progressive web applications**. When the application needs to render fast to provide a fast and performance user experience, the application can initially be rendered on the server, and then hydrated on the client for subsequent integrations.\n";

const __vite_glob_1_76 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: ssrWhen
}, Symbol.toStringTag, { value: 'Module' }));

const stateMgmtSpa = "Without a full framework or library like React or Vue.js, properly handling state management is not a trivial task.\n\nSome options available through the language itself are:\n\n- **Global Variables**: You can use global variables, or perhaps a global object to centralize state. The problem with this approach is that it can become quite unmanageable for large applications. It’s also a lot harder to maintain local state inside single components.\n- **Module Pattern**: You can use this pattern to encapsulate state and provide a clear API to manage it. You would have to instantiate local instances of these modules for individual components.\n- **Pub/Sub Pattern**: This option is more sophisticated, and it decouples state changes using event-driven architecture. It’s a more complex solution, but it provides a bigger flexibility.\n- **State Management Libraries**: You can always use something like [Redux](https://redux.js.org/) or similar libraries without frameworks.\n";

const __vite_glob_1_77 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: stateMgmtSpa
}, Symbol.toStringTag, { value: 'Module' }));

const treeShaking = "Tree shaking is a technique used in JavaScript module bundlers, like Webpack or Vite, to remove unused code from the final bundled output.\n\nMain benefits include:\n\n1. **Reduced Bundle Size:** Removing unused code reduces the size of the JavaScript bundle sent to the client, improving load times and reducing bandwidth usage.\n2. **Improved Performance:** Smaller bundle sizes can lead to faster parsing and execution times, resulting in improved performance and responsiveness of the web application.\n3. **Better Resource Utilization:** Developers can write modular code without worrying about unused dependencies bloating the final bundle size.\n";

const __vite_glob_1_78 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: treeShaking
}, Symbol.toStringTag, { value: 'Module' }));

const vdom = "![Virtual DOM](https://assets.roadmap.sh/guest/virtual-dom-example-7ynkg.png)\n\nThe way the virtual DOM works is the following:\n\n1. The entire user interface is copied into an in-memory structure called “virtual DOM”, which is a lightweight version of the actual DOM.\n2. When state changes and the UI needs to be updated, a new virtual DOM is created with the updated state.\n3. Then a diff is made between the new virtual DOM and the previous version.\n4. The system will then calculate the least amount of changes required to achieve the new state, and it’ll apply those changes. Only the nodes that need to be updated are touched, which minimizes direct manipulation of the real DOM.\n\nAs for advantages:\n\n- **Performance optimization**: By only updating specific nodes within the real DOM, this technique reduces the number of updates, reflows and repaints on the UI. Directly affecting the performance of the app.\n- **Cross-platform**. The virtual DOM provides a layer of abstraction between the application and the actual API that renders the UI. This means the app can be ported into other platforms as long as there is a virtual DOM implementation for that platform.\n- **Consistency**. This technique keeps the UI in sync with the internal state, reducing bugs and inconsistencies.\n";

const __vite_glob_1_79 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: vdom
}, Symbol.toStringTag, { value: 'Module' }));

const alertPromptConfirm = "Let's see how we can use the `alert`, `prompt` and `confirm` functions to interact with the user.\n\n## alert()\n\nThe `alert()` method displays an alert box with a specified message and an OK button.\n\n```js\nalert('Hello World!');\n```\n\n## prompt()\n\nThe `prompt()` method displays a dialog box that prompts the visitor for input. A prompt box is often used if you want the user to input a value before entering a page. The `prompt()` method returns the input value if the user clicks OK. If the user clicks Cancel, the method returns `null`.\n\n```js\nconst name = prompt('What is your name?');\nconsole.log(name);\n```\n\n## confirm()\n\nThe `confirm()` method displays a dialog box with a specified message, along with an OK and a Cancel button. This is often used to confirm or verify something from the user.\n\n```js\nconst result = confirm('Are you sure?');\nconsole.log(result); // true/false\n```\n";

const __vite_glob_1_80 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: alertPromptConfirm
}, Symbol.toStringTag, { value: 'Module' }));

const appendChildVsInsertBefore = "You can add a new element to the DOM using the `appendChild` or `insertBefore` method.\n\n## appendChild\n\nThe `appendChild` method adds a new element as the last child of the specified parent element.\n\n```js\nconst roadmapWrapper = document.querySelector('.roadmap-wrapper');\n\nconst roadmap = document.createElement('div');\nroadmap.id = 'javascript-roadmap';\n\nroadmapWrapper.appendChild(roadmap);\n```\n\nIn the example above, the `roadmap` element is added as the last child of the `roadmapWrapper` element.\n\n## insertBefore\n\nThe `insertBefore` method adds a new element before the specified child element.\n\n```js\nconst roadmapWrapper = document.querySelector('.roadmap-wrapper');\n\nconst roadmap = document.createElement('div');\nroadmap.id = 'javascript-roadmap';\n\nconst roadmapTitle = document.querySelector('#roadmap-title');\nroadmapWrapper.insertBefore(roadmap, roadmapTitle);\n```\n\nIn the example above, the `roadmap` element is added before the `roadmapTitle` element.\n";

const __vite_glob_1_81 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: appendChildVsInsertBefore
}, Symbol.toStringTag, { value: 'Module' }));

const asyncVsSync = "The difference between Asynchronous and Synchronous code is that Asynchronous code does not block the execution of the program while Synchronous code does.\n\n## Asynchronous code\n\nAsynchronous code is executed in the background and it does not block the execution of the program. It is usually used to perform tasks that take a long time to complete, such as network requests.\n\n```js\nconsole.log('Before');\n\nsetTimeout(() => {\n  console.log('Hello');\n}, 1000);\n\nconsole.log('After');\n```\n\n## Synchronous code\n\nSynchronous code is executed in sequence and it blocks the execution of the program until it is completed. If a task takes a long time to complete, everything else waits.\n\n```js\nconsole.log('Before');\n\nfor (let i = 0; i < 1000000000; i++) {}\n\nconsole.log('After');\n```\n";

const __vite_glob_1_82 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: asyncVsSync
}, Symbol.toStringTag, { value: 'Module' }));

const breakAndContinue = "You can use `break` and `continue` in loops to alter the flow of the loop. `break` will stop the loop from continuing, and `continue` will skip the current iteration and continue the loop.\n\n```js\nfor (let i = 0; i < 5; i++) {\n  if (i === 1) {\n    continue; // skips the rest of the code in the loop\n  }\n  console.log(`i: ${i}`);\n}\n\n// Output:\n// i: 0\n// i: 2\n// i: 3\n// i: 4\n```\n\n```js\nfor (let i = 0; i < 5; i++) {\n  if (i === 1) {\n    break; // stops the loop\n  }\n  console.log(`i: ${i}`);\n}\n\n// Output:\n// i: 0\n```\n";

const __vite_glob_1_83 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: breakAndContinue
}, Symbol.toStringTag, { value: 'Module' }));

const callbackHell = "**Callback hell**, often referred to as **Pyramid of Doom**, describes a situation in JavaScript where multiple nested callbacks become difficult to manage, leading to unreadable and unmaintainable code. It often arises when performing multiple asynchronous operations that depend on the completion of previous operations. The code starts to take on a pyramidal shape due to the nesting.\n\n## Example of callback hell\n\n```js\ncallAsync1(function () {\n  callAsync2(function () {\n    callAsync3(function () {\n      callAsync4(function () {\n        callAsync5(function () {\n          // ...\n        });\n      });\n    });\n  });\n});\n```\n\n## Strategies to avoid callback hell\n\nDevelopers can address or avoid callback hell by using strategies like modularizing the code into named functions, using asynchronous control flow libraries, or leveraging modern JavaScript features like Promises and `async/await` to write more linear, readable asynchronous code.\n\n### Promise chaining\n\n```js\ncallAsync1()\n  .then(() => callAsync2())\n  .then(() => callAsync3())\n  .then(() => callAsync4())\n  .then(() => callAsync5())\n  .catch((err) => console.error(err));\n```\n\n### Async/await\n\n```js\nasync function asyncCall() {\n  try {\n    await callAsync1();\n    await callAsync2();\n    await callAsync3();\n    await callAsync4();\n    await callAsync5();\n  } catch (err) {\n    console.error(err);\n  }\n}\n```\n";

const __vite_glob_1_84 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: callbackHell
}, Symbol.toStringTag, { value: 'Module' }));

const closure = "A closure is a function that has access to its outer function scope even after the outer function has returned. This means a closure can remember and access variables and arguments of its outer function even after the function has finished.\n\n```js\nfunction outer() {\n  const name = 'Roadmap';\n\n  function inner() {\n    console.log(name);\n  }\n\n  return inner;\n}\n\nconst closure = outer();\nclosure(); // Roadmap\n```\n\nIn the above example, the `inner` function has access to the `name` variable of the `outer` function even after the `outer` function has returned. Therefore, the `inner` function forms a closure.\n";

const __vite_glob_1_85 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: closure
}, Symbol.toStringTag, { value: 'Module' }));

const commaOperator = "The Comma Operator `,` evaluates each of its operands (from left to right) and returns the value of the last operand.\n\n```js\nlet x = 1;\nx = (x++, x);\n\nconsole.log(x); // 2\n```\n";

const __vite_glob_1_86 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: commaOperator
}, Symbol.toStringTag, { value: 'Module' }));

const createElement = "To create a new DOM element, you can use the `document.createElement` method. It accepts a tag name as an argument and returns a new element with the specified tag name. You can set attributes to the element.\n\n```js\nconst div = document.createElement('div');\n\ndiv.id = 'roadmap-wrapper';\ndiv.setAttribute('data-id', 'javascript');\nconsole.log(div); // <div id=\"roadmap-wrapper\" data-id=\"javascript\"></div>\n```\n";

const __vite_glob_1_87 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: createElement
}, Symbol.toStringTag, { value: 'Module' }));

const customEvent = "You can use the `CustomEvent` constructor to create a custom event. The `CustomEvent` constructor accepts two arguments: the event name and an optional object that specifies the event options. And you can use the `dispatchEvent` method to dispatch the custom event on the target element/document.\n\n## Creating Custom Events\n\n```js\nconst event = new CustomEvent('roadmap-updated', {\n  detail: { name: 'JavaScript' },\n});\nelement.dispatchEvent(event);\n```\n\n## Listening for Custom Events\n\nYou can listen for custom events using the `addEventListener` method. The `addEventListener` method accepts the event name and a callback function that is called when the event is dispatched.\n\n```js\nelement.addEventListener('roadmap-updated', (event) => {\n  console.log(event.detail); // { name: 'JavaScript' }\n});\n```\n\n## Removing Event Listeners\n\nYou can remove event listeners using the `removeEventListener` method. The `removeEventListener` method accepts the event name and the callback function that was used to add the event listener.\n\n```js\nfunction handleEvent(event) {\n  console.log(event.detail); // { name: 'JavaScript' }\n}\n\nelement.addEventListener('roadmap-updated', handleEvent);\nelement.removeEventListener('roadmap-updated', handleEvent);\n```\n";

const __vite_glob_1_88 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: customEvent
}, Symbol.toStringTag, { value: 'Module' }));

const debugJavascript = "Debugging JavaScript code can be achieved through various methods and tools. Here's a basic guide:\n\n## Console Logging:\n\nYou can use `console.log()`, `console.warn()`, `console.error()`, etc., to print values, variables, or messages to the browser's developer console.\n\n```js\nconsole.log('Value of x:', x);\n```\n\n## Browser Developer Tools:\n\nMost modern browsers come equipped with developer tools. You can access these tools by pressing `F12` or right-clicking on the web page and selecting `Inspect` or `Inspect Element`.\n\n- **Sources Tab**: Allows you to see the loaded scripts, set breakpoints, and step through the code.\n- **Console Tab**: Displays console outputs and allows for interactive JavaScript execution.\n- **Network Tab**: Helps in checking network requests and responses.\n\n## Setting Breakpoints:\n\nIn the `Sources` tab of the browser's developer tools, you can click on a line number to set a breakpoint. The code execution will pause at this line, allowing you to inspect variables, the call stack, and continue step-by-step.\n\n## Debugger Statement:\n\nInserting the `debugger;` statement in your code will act as a breakpoint when the browser developer tools are open. Execution will pause at the `debugger;` line.\n\n```js\nfunction myFunction() {\n  debugger; // Execution will pause here when dev tools are open\n  // ... rest of the code\n}\n```\n\n## Call Stack and Scope:\n\nIn the developer tools, when paused on a breakpoint or `debugger;` statement, you can inspect the `call stack` to see the sequence of function calls. The `Scope` panel will show you the values of local and global variables.\n\nRemember, debugging is an iterative process. It often involves setting breakpoints, checking variables, adjusting code, and re-running to ensure correctness.\n";

const __vite_glob_1_89 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: debugJavascript
}, Symbol.toStringTag, { value: 'Module' }));

const deferVsAsync = "The main difference between `defer` and `async` is the order of execution.\n\n## Defer attribute\n\nA `<script>` element with a `defer` attribute, it will continue to load the HTML page and render it while the script is being downloaded. The script is executed after the HTML page has been completely parsed. `defer` scripts maintain their order in the document.\n\n```html\n<script defer src=\"script1.js\"></script>\n<script defer src=\"script2.js\"></script>\n```\n\nIn the example above, `script1.js` will be executed before `script2.js`. The browser will download both scripts in parallel, but `script1.js` will be executed after the HTML page has been parsed and `script2.js` will be executed after `script1.js` has been executed.\n\n## Async attribute\n\nOn the other hand, A `<script>` element with an `async` attribute, it will pause the HTML parser and execute the script immediately after it has been downloaded. The HTML parsing will resume after the script has been executed.\n\n```html\n<script async src=\"script1.js\"></script>\n<script async src=\"script2.js\"></script>\n```\n\nIn the example above, the browser will download both scripts in parallel, and execute them as soon as they are downloaded. The order of execution is not guaranteed.\n\nTo know more you can check [this diagram](https://roadmap.sh/guides/avoid-render-blocking-javascript-with-async-defer) from us that explains the difference between `defer` and `async` in a visual way.\n";

const __vite_glob_1_90 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: deferVsAsync
}, Symbol.toStringTag, { value: 'Module' }));

const doWhileLoop = "The `do...while` statement creates a loop that executes a block of code once, before checking if the condition is `true`, then it will repeat the loop as long as the condition is `true`.\n\n```js\nlet i = 0;\n\ndo {\n  console.log(i);\n  i++;\n} while (i < 3);\n\n// 0\n// 1\n// 2\n```\n";

const __vite_glob_1_91 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: doWhileLoop
}, Symbol.toStringTag, { value: 'Module' }));

const equalityOperator = "The `==` equality operator converts the operands if they are not of the same type, then applies strict comparison. The `===` strict equality operator only considers values equal that have the same type.\n\n```js\nconsole.log(1 == '1'); // true\nconsole.log(1 === '1'); // false\nconsole.log(1 === 1); // true\n```\n";

const __vite_glob_1_92 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: equalityOperator
}, Symbol.toStringTag, { value: 'Module' }));

const errorInAsyncAwait = "In order to handle errors in async/await, we can use the `try/catch` statement.\n\n## Rejecting a promise\n\n```js\nconst promise = new Promise((resolve, reject) => {\n  reject(new Error('Something went wrong'));\n});\n```\n\n## Try/catch statement\n\n```js\nasync function main() {\n  try {\n    const result = await promise;\n    console.log(result);\n  } catch (error) {\n    console.log(error.message);\n  }\n}\n```\n\nThe `catch` block will be executed when the promise is `rejected` or when an error is thrown inside the `try` block.\n";

const __vite_glob_1_93 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: errorInAsyncAwait
}, Symbol.toStringTag, { value: 'Module' }));

const errorInPromise = "In order to handle errors in promises, we can use the `catch` method or the second argument of the `then` method.\n\n## Rejecting a promise\n\n```js\nconst promise = new Promise((resolve, reject) => {\n  reject(new Error('Something went wrong'));\n});\n```\n\n## Catch method\n\nIn this method, we can pass a `callback` function that will be called when the promise is `rejected`.\n\n```js\npromise\n  .then((result) => {\n    console.log(result);\n  })\n  .catch((error) => {\n    console.log(error.message);\n  });\n```\n\n## Second argument of the then method\n\nIn this method, we can pass two `callback` functions as arguments. The first one will be called when the promise is `resolved` and the second one will be called when the promise is `rejected`.\n\n```js\npromise.then(\n  (result) => {\n    console.log(result);\n  },\n  (error) => {\n    console.log(error.message);\n  }\n);\n```\n";

const __vite_glob_1_94 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: errorInPromise
}, Symbol.toStringTag, { value: 'Module' }));

const eventBubbling = "Event bubbling is a concept in the Document Object Model (DOM) that describes the way in which events propagate or \"bubble up\" through the hierarchy of nested elements in the DOM.\n\nWhen an event, such as a mouse click, occurs on a DOM element, the event will be handled by the element first, then its parent element, and so on, until the event reaches the root element. This behavior is called event bubbling.\n\n```js\nconst parent = document.querySelector('.parent');\nconst child = document.querySelector('.child');\n\n// Scenario of clicking on the child element\nparent.addEventListener('click', () => {\n  console.log('Handled Last');\n});\n\nchild.addEventListener('click', () => {\n  console.log('Handled First');\n});\n```\n\nIn the above example, when you click on the `child` element, the event will be handled by the `child` element first, then its parent element, and so on, to the root element unless you stop the propagation (`event.stopPropagation()`) of the event.\n";

const __vite_glob_1_95 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: eventBubbling
}, Symbol.toStringTag, { value: 'Module' }));

const eventLoop = "The Event loop has two main components: the Call stack and the Callback queue.\n\n## Call Stack\n\nThe Call stack is a data structure that stores the tasks that need to be executed. It is a LIFO (Last In, First Out) data structure, which means that the last task that was added to the Call stack will be the first one to be executed.\n\n## Callback Queue\n\nThe Callback queue is a data structure that stores the tasks that have been completed and are ready to be executed. It is a FIFO (First In, First Out) data structure, which means that the first task that was added to the Callback queue will be the first one to be executed.\n\n## Event Loop's Workflow:\n\n1. Executes tasks from the Call Stack.\n2. For an asynchronous task, such as a timer, it runs in the background. JavaScript proceeds to the next task without waiting.\n3. When the asynchronous task concludes, its callback function is added to the Callback Queue.\n4. If the Call Stack is empty and there are tasks in the Callback Queue, the Event Loop transfers the first task from the Queue to the Call Stack for execution.\n\n```js\nsetTimeout(() => console.log('Hello from the timer'), 0);\nconsole.log('Hello from the main code');\n```\n\n1. `setTimeout` is processed, and because it's asynchronous, its callback is placed in the Callback Queue.\n2. The next line, `console.log(\"Hello from the main code\")`, is logged immediately.\n3. Although the timer duration is 0 milliseconds, its callback has to wait until the Call Stack is empty. After the main code logs, the callback is moved from the Callback Queue to the Call Stack and executed.\n4. The result is \"Hello from the main code\" being logged before \"Hello from the timer\".\n";

const __vite_glob_1_96 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: eventLoop
}, Symbol.toStringTag, { value: 'Module' }));

const explicitBinding = "Explicit binding is a way to explicitly state what the `this` keyword is going to be bound to using `call`, `apply` or `bind` methods of a function.\n\n```js\nconst roadmap = {\n  name: 'JavaScript',\n};\n\nfunction printName() {\n  console.log(this.name);\n}\n\nprintName.call(roadmap); // JavaScript\nprintName.apply(roadmap); // JavaScript\n\nconst printRoadmapName = printName.bind(roadmap);\nprintRoadmapName(); // JavaScript\n```\n\nIn the above example, the `this` keyword inside the `printName()` function is explicitly bound to the `roadmap` object using `call`, `apply` or `bind` methods.\n";

const __vite_glob_1_97 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: explicitBinding
}, Symbol.toStringTag, { value: 'Module' }));

const filterMethod = "You can use the `filter()` method to filter an array based on a condition. The `filter()` method creates a new array with all elements that pass the test implemented by the provided function.\n\n```js\nconst numbers = [1, 2, 3, 4, 5, 6];\n\nconst evenNumbers = numbers.filter((number) => {\n  return number % 2 === 0;\n});\n\nconsole.log(numbers); // [1, 2, 3, 4, 5, 6]\nconsole.log(evenNumbers); // [2, 4, 6]\n```\n";

const __vite_glob_1_98 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: filterMethod
}, Symbol.toStringTag, { value: 'Module' }));

const finallyBlockInPromise = "The `finally` block will be executed when the promise is `resolved` or `rejected`.\n\n```js\npromise\n  .then((result) => {\n    console.log(result);\n  })\n  .catch((error) => {\n    console.log(error.message);\n  })\n  .finally(() => {\n    console.log('Finally Promise has settled');\n  });\n```\n";

const __vite_glob_1_99 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: finallyBlockInPromise
}, Symbol.toStringTag, { value: 'Module' }));

const findUniqueArrayValues = "There are serveral ways to find unique values in an array. Here are some of them:\n\n## Using `Set`\n\n```js\nconst roadmaps = ['JavaScript', 'React', 'Node.js', 'Node.js', 'JavaScript'];\nconst uniqueRoadmaps = [...new Set(roadmaps)];\nconsole.log(uniqueRoadmaps); // ['JavaScript', 'React', 'Node.js']\n```\n\n## Using `filter()`\n\n```js\nconst roadmaps = ['JavaScript', 'React', 'Node.js', 'Node.js', 'JavaScript'];\nconst uniqueRoadmaps = roadmaps.filter(\n  (roadmap, index) => roadmaps.indexOf(roadmap) === index\n);\nconsole.log(uniqueRoadmaps); // ['JavaScript', 'React', 'Node.js']\n```\n\n## Using `reduce()`\n\n```js\nconst roadmaps = ['JavaScript', 'React', 'Node.js', 'Node.js', 'JavaScript'];\nconst uniqueRoadmaps = roadmaps.reduce((unique, roadmap) => {\n  return unique.includes(roadmap) ? unique : [...unique, roadmap];\n}, []);\nconsole.log(uniqueRoadmaps); // ['JavaScript', 'React', 'Node.js']\n```\n\n## Using `forEach()`\n\n```js\nconst roadmaps = ['JavaScript', 'React', 'Node.js', 'Node.js', 'JavaScript'];\nconst uniqueRoadmaps = [];\nroadmaps.forEach((roadmap) => {\n  if (!uniqueRoadmaps.includes(roadmap)) {\n    uniqueRoadmaps.push(roadmap);\n  }\n});\nconsole.log(uniqueRoadmaps); // ['JavaScript', 'React', 'Node.js']\n```\n\n## Using `for...of`\n\n```js\nconst roadmaps = ['JavaScript', 'React', 'Node.js', 'Node.js', 'JavaScript'];\nconst uniqueRoadmaps = [];\nfor (const roadmap of roadmaps) {\n  if (!uniqueRoadmaps.includes(roadmap)) {\n    uniqueRoadmaps.push(roadmap);\n  }\n}\nconsole.log(uniqueRoadmaps); // ['JavaScript', 'React', 'Node.js']\n```\n";

const __vite_glob_1_100 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: findUniqueArrayValues
}, Symbol.toStringTag, { value: 'Module' }));

const forEachMethod = "No, the `forEach()` method does not return a new array. It simply calls a provided function on each element in the array.\n\n```js\nconst roadmaps = ['JavaScript', 'React', 'Node.js'];\n\nroadmaps.forEach((roadmap) => {\n  console.log(roadmap);\n});\n```\n";

const __vite_glob_1_101 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: forEachMethod
}, Symbol.toStringTag, { value: 'Module' }));

const heapAndStack = "The Heap and Stack in JavaScript Engine are two different data structures that store data in different ways.\n\n## Stack\n\nThe Stack is a small, organized region of memory. It is where primitive values, function calls, and local variables are stored. It follows a \"Last In, First Out\" (LIFO) order, meaning that the last item added to the stack is the first one to be removed. Each function invocation creates a new stack frame, which contains the function's local variables, return address, and other contextual data.\n\n## Heap\n\nThe Heap is a large, mostly unstructured region of memory. It is where `objects`, `arrays`, and `functions` are stored. Variables from the Stack (e.g., in functions) point to locations in the Heap for these dynamically allocated structures.\n\nWhen you declare a primitive type (like a number or boolean), it's usually managed in the stack. But when you create an object, array, or function, it's stored in the heap, and the stack will hold a reference to that location in the heap.\n\nFor example:\n\n```js\nconst name = 'JavaScript'; // Stored on the stack\nconst roadmap = { name: 'JS' }; // `roadmap` reference on the stack, actual object { name: 'JS' } in the heap\n```\n\nIn the code above, the primitive value `JavaScript` for variable `name` is directly stored on the stack. For the object assigned to `roadmap`, its actual data resides in the heap, and the reference to this data (a memory address pointer) is held on the stack.\n";

const __vite_glob_1_102 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: heapAndStack
}, Symbol.toStringTag, { value: 'Module' }));

const hoisting = "Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their scope before code execution. This means that no matter where the functions and variables are declared, they are moved to the top of their scope regardless of whether their scope is global or local. Note that hoisting only moves the declaration, not the initialization.\n\n```js\nconsole.log(x === undefined); // true\nvar x = 3;\nconsole.log(x); // 3\n```\n\nThe above code snippet can be visualized in the following way:\n\n```js\nvar x;\nconsole.log(x === undefined); // true\nx = 3;\nconsole.log(x); // 3\n```\n";

const __vite_glob_1_103 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: hoisting
}, Symbol.toStringTag, { value: 'Module' }));

const iife = "The IIFE (Immediately Invoked Function Expression) is a JavaScript function that runs as soon as it is defined.\n\n```js\n(function () {\n  console.log('Hello Roadmap!');\n})();\n```\n\nThe IIFE is frequently used to create a new scope to avoid variable hoisting from within blocks.\n\n```js\n(function () {\n  var roadmap = 'JavaScript';\n  console.log(roadmap);\n})();\n\nconsole.log(roadmap); // ReferenceError: name is not defined\n```\n";

const __vite_glob_1_104 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: iife
}, Symbol.toStringTag, { value: 'Module' }));

const immutableObject = "To make an object immutable, you can use `Object.freeze()` method. It prevents the modification of existing property values and prevents the addition of new properties.\n\n```js\nconst roadmap = {\n  name: 'JavaScript',\n};\n\nObject.freeze(roadmap);\n\nroadmap.name = 'JavaScript Roadmap'; // throws an error in strict mode\nconsole.log(roadmap.name); // JavaScript\n```\n";

const __vite_glob_1_105 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: immutableObject
}, Symbol.toStringTag, { value: 'Module' }));

const incrementOperator = "As the name says, the increment operator increases the value of a variable by **1**. There are two types of increment operators: `pre-increment` and `post-increment`.\n\n## Pre-increment\n\nThe pre-increment operator increases the value of a variable by 1 and then returns the value. For example:\n\n```js\nlet x = 1;\nconsole.log(++x); // 2\nconsole.log(x); // 2\n```\n\n## Post-increment\n\nThe post-increment operator returns the value of a variable and then increases the value by 1. For example:\n\n```js\nlet x = 1;\nconsole.log(x++); // 1\nconsole.log(x); // 2\n```\n";

const __vite_glob_1_106 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: incrementOperator
}, Symbol.toStringTag, { value: 'Module' }));

const infiniteLoop = "You can use the `while` or `for` loop to create an infinite loop.\n\n## While loop\n\nTo create an infinite loop with the `while` loop, we can use the `true` keyword as the condition.\n\n```js\nwhile (true) {\n  // do something\n}\n```\n\n## For loop\n\nTo create an infinite loop with the `for` loop, we can use the `true` keyword as the condition.\n\n```js\nfor (let i = 0; true; i++) {\n  // do something\n}\n```\n";

const __vite_glob_1_107 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: infiniteLoop
}, Symbol.toStringTag, { value: 'Module' }));

const inheritance = "Inheritance is a way to create a new `Class` from an existing `Class`. The new `Class` inherits all the properties and methods from the existing `Class`. The new `Class` is called the child `Class`, and the existing `Class` is called the parent `Class`.\n\n## Example\n\n```js\nclass Roadmap {\n  constructor(name, description, slug) {\n    this.name = name;\n    this.description = description;\n    this.slug = slug;\n  }\n\n  getRoadmapUrl() {\n    console.log(`https://roadmap.sh/${this.slug}`);\n  }\n}\n\nclass JavaScript extends Roadmap {\n  constructor(name, description, slug) {\n    super(name, description, slug);\n  }\n\n  greet() {\n    console.log(`${this.name} - ${this.description}`);\n  }\n}\n\nconst js = new JavaScript(\n  'JavaScript Roadmap',\n  'Learn JavaScript',\n  'javascript'\n);\n\njs.getRoadmapUrl(); // https://roadmap.sh/javascript\njs.greet(); // JavaScript Roadmap - Learn JavaScript\n```\n\nIn the above example, the `JavaScript` class inherits the `getRoadmapUrl()` method from the `Roadmap` class. This is because the `JavaScript` class extends the `Roadmap` class using the `extends` keyword. In the `JavaScript` class, the `getRoadmapUrl()` method is not found, so JavaScript looks up the prototype chain and finds the `getRoadmapUrl()` method in the `Roadmap` class.\n";

const __vite_glob_1_108 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: inheritance
}, Symbol.toStringTag, { value: 'Module' }));

const labelledStatements = "JavaScript label statements are used to prefix a label to an identifier. It can be used with `break` and `continue` statement to control the flow more precisely.\n\n```js\nloop1: for (let i = 0; i < 5; i++) {\n  if (i === 1) {\n    continue loop1; // skips the rest of the code in the loop1\n  }\n  console.log(`i: ${i}`);\n}\n// Output:\n// i: 0\n// i: 2\n// i: 3\n// i: 4\n```\n";

const __vite_glob_1_109 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: labelledStatements
}, Symbol.toStringTag, { value: 'Module' }));

const logicalOperators = "There are four logical operators in JavaScript: `||` (OR), `&&` (AND), `!` (NOT), and `??` (Nullish Coalescing). They can be used with boolean values, or with non-boolean values.\n\n## OR (||)\n\nThe OR operator (`||`) returns the first truthy value, or the last value if none are truthy.\n\n```js\nconsole.log('hello' || 0); // hello\nconsole.log(false || 'hello'); // hello\nconsole.log('hello' || 'world'); // hello\n```\n\n## AND (&&)\n\nThe AND operator (`&&`) aka logical conjunction returns the first falsy value, or the last value if none are falsy.\n\n```js\nconsole.log('hello' && 0); // 0\nconsole.log(false && 'hello'); // false\nconsole.log('hello' && 'world'); // world\n```\n\n## NOT (!)\n\nIt simply inverts the boolean value of its operand.\n\n```js\nconsole.log(!true); // false\nconsole.log(!false); // true\nconsole.log(!'hello'); // false\nconsole.log(!0); // true\n```\n\n## Nullish Coalescing (??)\n\nThe Nullish Coalescing Operator (`??`) returns the right operand if the left one is `null` or `undefined`, otherwise, it returns the left operand. It's useful for setting default values without considering falsy values like `0` or `''` as absent.\n\n```js\nconsole.log(null ?? 'hello'); // hello\nconsole.log(undefined ?? 'hello'); // hello\nconsole.log('' ?? 'hello'); // ''\nconsole.log(0 ?? 'hello'); // 0\n```\n";

const __vite_glob_1_110 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: logicalOperators
}, Symbol.toStringTag, { value: 'Module' }));

const mapMethod = "No, the `map()` method does not mutate the original array. It returns a new array with the results of calling a provided function on every element in the calling array.\n\n```js\nconst roadmaps = ['JavaScript', 'React', 'Node.js'];\n\nconst renamedRoadmaps = roadmaps.map((roadmap) => {\n  return `${roadmap} Roadmap`;\n});\n\nconsole.log(roadmaps); // ['JavaScript', 'React', 'Node.js']\nconsole.log(renamedRoadmaps); // ['JavaScript Roadmap', 'React Roadmap', 'Node.js Roadmap']\n```\n";

const __vite_glob_1_111 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: mapMethod
}, Symbol.toStringTag, { value: 'Module' }));

const map = "Map is another data structure in JavaScript which is similar to `Object` but the key can be of any type. It is a collection of elements where each element is stored as a Key, value pair. It is also known as a Hash table or a dictionary.\n\nThe `key` can be of any type but the `value` can be of any type. The `key` is unique and immutable, whereas the `value` can be mutable or immutable.\n\n```js\nconst roadmap = new Map();\nroadmap.set('name', 'JavaScript');\nroadmap.set('type', 'dynamic');\nroadmap.set('year', 1995);\n\nconsole.log(roadmap.get('name')); // JavaScript\n\nroadmap.delete('year');\nconsole.log(roadmap.has('year')); // false\nconsole.log(roadmap.size); // 2\n\nroadmap.clear();\nconsole.log(roadmap.size); // 0\n```\n";

const __vite_glob_1_112 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: map
}, Symbol.toStringTag, { value: 'Module' }));

const measureDimensions = "You can use `getBoundingClientRect` method to get the dimensions of an element.\n\n```js\nconst roadmapWrapper = document.querySelector('.roadmap-wrapper');\nconst dimensions = roadmapWrapper.getBoundingClientRect();\n\nconsole.log(dimensions); // DOMRect { x: 8, y: 8, width: 784, height: 784, top: 8, right: 792, bottom: 792, left: 8 }\n```\n";

const __vite_glob_1_113 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: measureDimensions
}, Symbol.toStringTag, { value: 'Module' }));

const mergeArrays = "Yes, you can merge multiple arrays into one array using the `concat()` method, or the spread operator `...`.\n\n## concat()\n\nThe `concat()` method is used to merge two or more arrays. This method does not change the existing arrays, but instead returns a new array.\n\n```js\nconst arr1 = [1, 2, 3];\nconst arr2 = [4, 5, 6];\n\nconst arr3 = arr1.concat(arr2);\nconsole.log(arr3); // [1, 2, 3, 4, 5, 6]\n```\n\n## Spread operator\n\nThe spread operator `...` is used to expand an iterable object into the list of arguments.\n\n```js\nconst arr1 = [1, 2, 3];\nconst arr2 = [4, 5, 6];\n\nconst arr3 = [...arr1, ...arr2];\nconsole.log(arr3); // [1, 2, 3, 4, 5, 6]\n```\n";

const __vite_glob_1_114 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: mergeArrays
}, Symbol.toStringTag, { value: 'Module' }));

const nullishCoalescingOperator = "The Nullish Coalescing Operator (`??`) returns the right operand if the left one is `null` or `undefined`, otherwise, it returns the left operand. It's useful for setting default values without considering falsy values like `0` or `''` as absent.\n\n```js\nconsole.log(null ?? 'hello'); // hello\nconsole.log(undefined ?? 'hello'); // hello\nconsole.log('' ?? 'hello'); // ''\nconsole.log(0 ?? 'hello'); // 0\n```\n";

const __vite_glob_1_115 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: nullishCoalescingOperator
}, Symbol.toStringTag, { value: 'Module' }));

const parseJson = "In order to parse JSON, you can use the `JSON.parse()` method. It parses a JSON string and returns the JavaScript equivalent.\n\n```js\nconst json = '{\"name\":\"JavaScript\",\"year\":1995}';\nconst roadmap = JSON.parse(json);\n\nconsole.log(roadmap.name); // JavaScript\nconsole.log(roadmap.year); // 1995\n```\n";

const __vite_glob_1_116 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: parseJson
}, Symbol.toStringTag, { value: 'Module' }));

const preventDefault = "The `event.preventDefault()` method is used to prevent the default action of an event. For example, when you click on a link, the default action is to navigate to the link's URL. But, if you want to prevent the navigation, you can use `event.preventDefault()` method.\n\n```js\nconst link = document.querySelector('a');\n\nlink.addEventListener('click', (event) => {\n  event.preventDefault();\n  console.log('Clicked on link!');\n});\n```\n";

const __vite_glob_1_117 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: preventDefault
}, Symbol.toStringTag, { value: 'Module' }));

const promiseAllVsAllSettled = "The core difference between `Promise.all()` and `Promise.allSettled()` is that `Promise.all()` rejects immediately if any of the promises reject whereas `Promise.allSettled()` waits for all of the promises to settle (either resolve or reject) and then returns the result.\n\n## Initialize\n\n```js\nconst promise1 = Promise.resolve('Promise 1 resolved');\nconst promise2 = Promise.reject('Promise 2 rejected');\n```\n\n## Using `Promise.all()`\n\n```js\nPromise.all([promise1, promise2])\n  .then((values) => {\n    console.log(values);\n  })\n  .catch((error) => {\n    console.log('An error occurred in Promise.all():', error);\n  });\n\n// Output:\n// An error occurred in Promise.all(): Promise 2 rejected\n```\n\nIn the above code, the `Promise.all()` rejects immediately when any of the `promise2` rejects.\n\n## Using `Promise.allSettled()`\n\n```js\nPromise.allSettled([promise1, promise2]).then((results) => {\n  results.forEach((result, index) => {\n    if (result.status === 'fulfilled') {\n      console.log(\n        `Promise ${index + 1} was fulfilled with value:`,\n        result.value\n      );\n    } else {\n      console.log(\n        `Promise ${index + 1} was rejected with reason:`,\n        result.reason\n      );\n    }\n  });\n});\n\n// Output:\n// Promise 1 was fulfilled with value: Promise 1 resolved\n// Promise 2 was rejected with reason: Promise 2 rejected\n```\n\nIn the above code, the `Promise.allSettled()` waits for all of the promises to settle (either resolve or reject) and then returns the result.\n";

const __vite_glob_1_118 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: promiseAllVsAllSettled
}, Symbol.toStringTag, { value: 'Module' }));

const prototypeChain = "The prototype chain in JavaScript refers to the chain of objects linked by their prototypes. When a property or method is accessed on an object, JavaScript first checks the object itself. If it doesn't find it there, it looks up the property or method in the object's prototype. This process continues, moving up the chain from one prototype to the next, until the property or method is found or the end of the chain is reached (typically the prototype of the base object, which is `null`). The prototype chain is fundamental to JavaScript's prototypal inheritance model, allowing objects to inherit properties and methods from other objects.\n\n## Example\n\n```js\nconst roadmap = {\n  getRoadmapUrl() {\n    console.log(`https://roadmap.sh/${this.slug}`);\n  },\n};\n\nconst javascript = {\n  name: 'JavaScript Roadmap',\n  description: 'Learn JavaScript',\n  slug: 'javascript',\n  greet() {\n    console.log(`${this.name} - ${this.description}`);\n  },\n};\n\nObject.setPrototypeOf(javascript, roadmap); // or javascript.__proto__ = roadmap;\n\njavascript.getRoadmapUrl(); // https://roadmap.sh/javascript\njavascript.greet(); // JavaScript Roadmap - Learn JavaScript\n```\n\nIn the above example, the `javascript` object inherits the `getRoadmapUrl()` method from the `roadmap` object. This is because the `javascript` object's prototype is set to the `roadmap` object using the `Object.setPrototypeOf()` method. In the `javascript` object, the `getRoadmapUrl()` method is not found, so JavaScript looks up the prototype chain and finds the `getRoadmapUrl()` method in the `roadmap` object.\n";

const __vite_glob_1_119 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: prototypeChain
}, Symbol.toStringTag, { value: 'Module' }));

const querySelector = "For selecting elements in the DOM, the `querySelector` and `querySelectorAll` methods are the most commonly used. They are both methods of the `document` object, and they both accept a CSS selector as an argument.\n\n## querySelector\n\nThe `querySelector` method returns the first element that matches the specified selector. If no matches are found, it returns `null`.\n\n```js\nconst roadmapWrapper = document.querySelector('.roadmap-wrapper');\nconst roadmapTitle = document.querySelector('#roadmap-title');\n```\n\n## querySelectorAll\n\nThe `querySelectorAll` method returns a `NodeList` of all elements that match the specified selector. If no matches are found, it returns an empty `NodeList`.\n\n```js\nconst roadmapItems = document.querySelectorAll('.roadmap-item');\n```\n";

const __vite_glob_1_120 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: querySelector
}, Symbol.toStringTag, { value: 'Module' }));

const reduceMethod = "You can use the `reduce()` method to reduce an array to a single value. The `reduce()` method executes a reducer function (that you provide) on each element of the array, resulting in a single output value.\n\n## Syntax\n\n```js\narray.reduce((accumulator, currentValue) => {\n  // ...\n}, initialValue);\n```\n\n## Example\n\nYou can use the `reduce()` method to sum all the numbers in an array.\n\n```js\nconst numbers = [1, 2, 3, 4, 5, 6];\n\nconst sum = numbers.reduce((accumulator, currentValue) => {\n  return accumulator + currentValue;\n}, 0);\n\nconsole.log(numbers); // [1, 2, 3, 4, 5, 6]\nconsole.log(sum); // 21\n```\n";

const __vite_glob_1_121 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: reduceMethod
}, Symbol.toStringTag, { value: 'Module' }));

const removeElement = "To remove a DOM element, you can use the `remove` or `removeChild` method of the `Node` interface.\n\n```js\nconst roadmapWrapper = document.querySelector('.roadmap-wrapper');\nconst roadmapTitle = document.querySelector('#roadmap-title');\n\nroadmapWrapper.removeChild(roadmapTitle);\nroadmapWrapper.remove();\n```\n";

const __vite_glob_1_122 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: removeElement
}, Symbol.toStringTag, { value: 'Module' }));

const scrollToTop = "In order to scroll to the top of the page, we can use the `scrollTo` method.\n\n```js\nwindow.scrollTo(0, 0);\n```\n";

const __vite_glob_1_123 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: scrollToTop
}, Symbol.toStringTag, { value: 'Module' }));

const setInterval = "You can run some codes on interval using `setInterval` function in JavaScript. It accepts a function and a time interval in milliseconds. It returns a unique id which you can use to clear the interval using `clearInterval` function.\n\n```js\nconst intervalId = setInterval(() => {\n  console.log('Hello World');\n}, 1000);\n\n// Output:\n// Hello World\n// Hello World\n```\n\nIn the above code, the `setInterval` function runs the callback function every 1000 milliseconds (1 second) and prints `Hello World` to the console. It returns a unique id which you can use to clear the interval using `clearInterval` function.\n\n```js\nclearInterval(intervalId);\n```\n";

const __vite_glob_1_124 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: setInterval
}, Symbol.toStringTag, { value: 'Module' }));

const setTimeout = "To run a piece of code after a certain time, you can use `setTimeout` function in JavaScript. It accepts a function and a time interval in milliseconds. It returns a unique id which you can use to clear the timeout using `clearTimeout` function.\n\n```js\nconst timeoutId = setTimeout(() => {\n  console.log('Hello World');\n}, 1000);\n\n// Output:\n// Hello World\n```\n\nIn the above code, the `setTimeout` function runs the callback function after 1000 milliseconds (1 second) and prints `Hello World` to the console. It returns a unique id which you can use to clear the timeout using `clearTimeout` function.\n\n```js\nclearTimeout(timeoutId);\n```\n";

const __vite_glob_1_125 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: setTimeout
}, Symbol.toStringTag, { value: 'Module' }));

const set = "Set is another data structure in JavaScript which is similar to `Array` but the values are unique. It is a collection of elements where each element is stored as a value without any keys.\n\n```js\nconst roadmap = new Set();\nroadmap.add('JavaScript');\nroadmap.add('JavaScript');\n\nroadmap.add('dynamic');\nroadmap.add(1995);\n\nconsole.log(roadmap.size); // 3, because the value 'JavaScript' is already present in the set\nconsole.log(roadmap.has('JavaScript')); // true\n\nroadmap.delete('JavaScript');\nconsole.log(roadmap.has('JavaScript')); // false\nconsole.log(roadmap.size); // 2\n```\n";

const __vite_glob_1_126 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: set
}, Symbol.toStringTag, { value: 'Module' }));

const spreadOperator = "The spread operator in JavaScript is represented by three dots (`...`). It allows the elements of an array or properties of an object to be expanded or \"spread\" into individual elements or properties. This can be useful in various contexts, such as when passing elements as function arguments, cloning arrays and objects, or merging arrays and objects.\n\n```js\nconst roadmaps = ['JavaScript', 'React', 'Node.js'];\nconst bestPractices = ['AWS', 'API Security'];\n\nconst resources = [...roadmaps, ...bestPractices];\nconsole.log(resources); // ['JavaScript', 'React', 'Node.js', 'AWS', 'API Security']\n```\n\n```js\nconst roadmap = {\n  name: 'JavaScript',\n  type: 'dynamic',\n};\n\nconst roadmapClone = { ...roadmap }; // shallow copy\nconsole.log(roadmapClone); // { name: 'JavaScript', type: 'dynamic' }\n```\n";

const __vite_glob_1_127 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: spreadOperator
}, Symbol.toStringTag, { value: 'Module' }));

const switchCase = "The `switch` statement evaluates an expression, matching the expression's value to a `case` clause, and executes statements associated with that `case`, as well as statements in `case`s that follow the matching `case`.\n\n```js\nconst fruit = 'Papayas';\n\nswitch (fruit) {\n  case 'Oranges':\n    console.log('Oranges are $0.59 a pound.');\n    break;\n  case 'Mangoes':\n  case 'Papayas':\n    console.log('Mangoes and papayas are $2.79 a pound.');\n    break;\n  default:\n    console.log(`Sorry, we are out of ${fruit}.`);\n}\n\n// Mangoes and papayas are $2.79 a pound.\n```\n";

const __vite_glob_1_128 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: switchCase
}, Symbol.toStringTag, { value: 'Module' }));

const ternaryOperator = "The ternary operator is a conditional operator that takes three operands. It is frequently used as a shortcut for the `if` statement.\n\n```js\nconsole.log(condition ? true : false);\n```\n";

const __vite_glob_1_129 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: ternaryOperator
}, Symbol.toStringTag, { value: 'Module' }));

const variableNumberOfArguments = "In JavaScript, you can accept a variable number of arguments in a function using the `arguments` object or the rest parameter (`...`).\n\n## Using the `arguments` object:\n\nThe `arguments` is an array-like object that holds all of the passed arguments. They are only available inside the function body.\n\n```js\nfunction displayArgs() {\n  for (let i = 0; i < arguments.length; i++) {\n    console.log(arguments[i]);\n  }\n}\ndisplayArgs(1, 2, 3, 4); // Outputs: 1, 2, 3, 4\n```\n\n## Using the rest parameter:\n\nThe rest parameter allows you to represent an indefinite number of arguments as an array.\n\n```js\nfunction displayArgs(...args) {\n  args.forEach((arg) => console.log(arg));\n}\ndisplayArgs(1, 2, 3, 4); // Outputs: 1, 2, 3, 4\n```\n\nThe rest parameter (`...args` in the example) is generally more modern and flexible, and it provides an actual array, unlike the array-like `arguments` object.\n";

const __vite_glob_1_130 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: variableNumberOfArguments
}, Symbol.toStringTag, { value: 'Module' }));

const commonjsVsEsm = "CommonJS and ES Modules are two different module systems in JavaScript. CommonJS is the module system used in Node.js, while ES Modules are the module system used in browsers and TypeScript.\n\n## CommonJS\n\n```js\nconst fs = require('fs');\n```\n\nCommonJS modules are loaded synchronously. This means that the module is loaded and evaluated before the code using the module is executed. It uses `require()` to load modules and `module.exports` to export modules.\n\n## ES Modules\n\n```js\nimport fs from 'fs';\n```\n\nES Modules are loaded asynchronously. This means that the module is loaded and evaluated when the module is used. It uses `import` to load modules and `export` to export modules.\n";

const __vite_glob_1_131 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: commonjsVsEsm
}, Symbol.toStringTag, { value: 'Module' }));

const errorHandling = "There are four fundamental strategies to report errors in Node.js:\n\n## `try...catch` blocks\n\n`try...catch` blocks are the most basic way to handle errors in JavaScript. They are synchronous and can only be used to handle errors in synchronous code. They are not suitable for asynchronous code, such as callbacks and promises.\n\n```js\nimport fs from 'node:fs';\n\ntry {\n  const data = fs.readFileSync('file.md', 'utf-8');\n  console.log(data);\n} catch (err) {\n  console.error(err);\n}\n```\n\n## Callbacks\n\nCallbacks are the most common way to handle errors in asynchronous code. They are passed as the last argument to a function and are called when the function completes or fails.\n\n```js\nimport fs from 'node:fs';\n\nfs.readFile('file.md', 'utf-8', (err, data) => {\n  if (err) {\n    console.error(err);\n    return;\n  }\n\n  console.log(data);\n});\n```\n\n## Promises\n\nPromises are a more modern way to handle errors in asynchronous code. They are returned by functions and can be chained together. They are resolved when the function completes and rejected when it fails.\n\n```js\nimport fs from 'node:fs/promises';\n\nfs.readFile('file.md', 'utf-8')\n  .then((data) => {\n    console.log(data);\n  })\n  .catch((err) => {\n    console.error(err);\n  });\n```\n\n## Event emitters\n\nEvent emitters are a more advanced way to handle errors in asynchronous code. They are returned by functions and emit an `error` event when they fail. They are resolved when the function completes and rejected when it fails.\n\n```js\nimport fs from 'node:fs';\n\nconst reader = fs.createReadStream('file.md', 'utf-8');\nreader.on('data', (data) => {\n  console.log(data);\n});\n\nreader.on('error', (err) => {\n  console.error(err);\n});\n```\n";

const __vite_glob_1_132 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: errorHandling
}, Symbol.toStringTag, { value: 'Module' }));

const exitCodes = "The following exit codes are used in Node.js:\n\n- `0`: Success\n- `1`: Uncaught Fatal Exception\n- `2`: Unused\n- `3`: Internal JavaScript Parse Error\n- `4`: Internal JavaScript Evaluation Failure\n- `5`: Fatal Error\n- `6`: Non-function Internal Exception Handler\n- `7`: Internal Exception Handler Run-Time Failure\n- `8`: Unused\n- `9`: Invalid Argument\n- `10`: Internal JavaScript Run-Time Failure\n- `12`: Invalid Debug Argument\n- `13`: Uncaught Exception\n- `14`: Unhandled Promise Rejection\n- `15`: Fatal Exception\n- `16`: Signal Exits\n";

const __vite_glob_1_133 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: exitCodes
}, Symbol.toStringTag, { value: 'Module' }));

const inputFromCommandLine = "In order to take user input from the command line, you can use the `readline` module. It provides an interface for reading data from a Readable stream (such as `process.stdin`) one line at a time.\n\n```js\nimport readline from 'node:readline';\nimport { stdin as input, stdout as output } from 'node:process';\n\nconst rl = readline.createInterface({ input, output });\n\nrl.question('What do you think of Node.js? ', (answer) => {\n  console.log(`Thank you for your valuable feedback: ${answer}`);\n  rl.close();\n});\n\nrl.on('close', () => {\n  console.log('\\nBYE BYE !!!');\n  process.exit(0);\n});\n```\n";

const __vite_glob_1_134 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: inputFromCommandLine
}, Symbol.toStringTag, { value: 'Module' }));

const orderPriority = "Order priorities of `process.nextTick`, `Promise`, `setTimeout` and `setImmediate` are as follows:\n\n1. `process.nextTick`: Highest priority, executed immediately after the current event loop cycle, before any other I/O events or timers.\n2. `Promise`: Executed in the microtask queue, after the current event loop cycle, but before the next one.\n3. `setTimeout`: Executed in the timer queue, after the current event loop cycle, with a minimum delay specified in milliseconds.\n4. `setImmediate`: Executed in the check queue, but its order may vary based on the system and load. It generally runs in the next iteration of the event loop after I/O events.\n\n```js\nconsole.log('start');\nPromise.resolve().then(() => console.log('Promise'));\nsetTimeout(() => console.log('setTimeout'), 0);\nprocess.nextTick(() => console.log('process.nextTick'));\nsetImmediate(() => console.log('setImmediate'));\nconsole.log('end');\n\n// Output:\n// start\n// end\n// process.nextTick\n// Promise\n// setTimeout\n// setImmediate\n```\n\nIn summary, the order of execution is generally `process.nextTick` > `Promise` > `setTimeout` > `setImmediate`. However, keep in mind that the behavior may vary in specific situations, and the order might be influenced by factors such as system load and other concurrent operations.\n";

const __vite_glob_1_135 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: orderPriority
}, Symbol.toStringTag, { value: 'Module' }));

const processArgv = "`process.argv` is an array containing the command-line arguments passed when the Node.js process was launched. The first element is the path to the Node.js executable, the second element is the path to the JavaScript file being executed, and the remaining elements are the command-line arguments.\n\n```js\nnode index.js hello world\n```\n\n```js\nconsole.log(process.argv);\n// [\n//   '/usr/local/bin/node', -> path to the Node.js executable\n//   '/Users/username/projects/nodejs/index.js', -> path to the JavaScript file being executed\n//   'hello', -> command-line argument\n//   'world' -> command-line argument\n// ]\n```\n";

const __vite_glob_1_136 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: processArgv
}, Symbol.toStringTag, { value: 'Module' }));

const processCwdVsDirname = "`process.cwd()` returns the current working directory of the Node.js process, while `__dirname` returns the directory name of the current module.\n\n```js\nconsole.log(process.cwd());\n// /Users/username/projects/nodejs\n\nconsole.log(__dirname);\n// /Users/username/projects/nodejs/src\n```\n";

const __vite_glob_1_137 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: processCwdVsDirname
}, Symbol.toStringTag, { value: 'Module' }));

const webServer = "To create a minimal `Hello, World!` HTTP server in Node.js, you can use the `http` module. It provides an HTTP server, and the createServer() method sets up a server instance with a callback function to handle incoming requests\n\n```js\nimport http from 'node:http';\n\nconst server = http.createServer((req, res) => {\n  res.writeHead(200, { 'Content-Type': 'text/plain' });\n  res.end('Hello World\\n');\n});\n\nserver.listen(3000, () => {\n  console.log('Server running at http://localhost:3000/');\n});\n```\n";

const __vite_glob_1_138 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: webServer
}, Symbol.toStringTag, { value: 'Module' }));

const componentLifecycle = "In React functional components, lifecycle-like behaviors are achieved using hooks:\n\n## Mounting and Unmounting\n\nUtilizing the useEffect hook with an empty dependency array ([]) ensures the hook runs after the component mounts to the DOM.\n\n```js\nuseEffect(() => {\n  // do something after component mounts\n  return () => {\n    // do something before component unmounts\n  };\n}, []);\n```\n\nThe cleanup function returned within the useEffect callback offers a mechanism for handling tasks when the component is about to **unmount**.\n\n## Updates\n\nThe useEffect hook, when invoked without a dependency array or with specific dependencies, executes after every render or when specified prop/state changes are detected.\n\n```js\nuseEffect(() => {\n  // do something after every render\n});\n```\n\n```js\nuseEffect(() => {\n  // do something after specific prop/state changes\n}, [state1, state2]);\n```\n";

const __vite_glob_1_139 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: componentLifecycle
}, Symbol.toStringTag, { value: 'Module' }));

const controlledVsUncontrolled = "A Controlled Component is one that takes its current value through props and notifies changes through callbacks like `onChange`. A parent component \"controls\" it by handling the callback and managing its own state and passing the new values as props to the controlled component. You could also call this a \"dumb component\".\n\nA Uncontrolled Component is one that stores its own state internally, and you query the DOM using a `ref` to find its current value when you need it. This is a bit more like traditional HTML.\n\nMost native React form components support both controlled and uncontrolled usage:\n\n```jsx\n// Controlled:\n<input type=\"text\" value={value} onChange={handleChange} />\n\n// Uncontrolled:\n<input type=\"text\" defaultValue=\"foo\" ref={inputRef} />\n// Use `inputRef.current.value` to read the current value of <input>\n```";

const __vite_glob_1_140 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: controlledVsUncontrolled
}, Symbol.toStringTag, { value: 'Module' }));

const createPortal = "`createPortal` is a method on the `ReactDOM` object. It is used to render a React element into another DOM element outside of the parent component. This is useful for cases like modals, popups, or tooltips where you want the component to break out of its container.\n\n```js\nReactDOM.createPortal(child, container);\n```\n\nThe first argument (`child`) is any renderable React child, such as an element, string, or fragment. The second argument (`container`) is a DOM element.\n\nThe `Modal` component below is a simple example of a modal component that uses `createPortal` to render its children into a DOM element with the id `root`. The `Modal` component is rendered as a child of the `App` component, but the modal itself is rendered outside of the `App` component.\n\n```js\nimport { createPortal } from 'react-dom';\n\nexport function Modal({ isOpen, onClose, children }) {\n  if (!isOpen) return null;\n\n  return createPortal(\n    <div\n      role=\"dialog\"\n      aria-modal=\"true\"\n      style={{\n        position: 'fixed',\n        top: '50%',\n        left: '50%',\n        transform: 'translate(-50%, -50%)',\n        backgroundColor: 'white',\n        padding: '20px',\n        zIndex: 1000,\n      }}\n    >\n      <button onClick={onClose} aria-label=\"Close Modal\">\n        Close\n      </button>\n      {children}\n    </div>,\n    document.getElementById('root')\n  );\n}\n```\n\nThe `Modal` component can be used like this:\n\n```js\nimport { useState } from 'react';\nimport { Modal } from './modal';\n\nexport function App() {\n  const [isOpen, setIsOpen] = useState(false);\n\n  return (\n    <div>\n      <button onClick={() => setIsOpen(true)}>Open Modal</button>\n      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>\n        <h1>Modal Title</h1>\n        <p>Modal Content</p>\n      </Modal>\n    </div>\n  );\n}\n```\n";

const __vite_glob_1_141 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: createPortal
}, Symbol.toStringTag, { value: 'Module' }));

const customHook = "**Custom hooks** are a mechanism for code reuse in React and allow you to extract component logic into reusable functions. Custom hooks can be used to share logic between components or to abstract away complex logic to make components more readable.\n\nLet's look at an example of a custom hook that return network status information:\n\n## Creating a Custom hook\n\nCustom hooks are named with the prefix `use` and can call other hooks if needed. They can also accept arguments and return values.\n\n```js\nimport { useState, useEffect } from 'react';\n\nfunction useNetworkStatus() {\n  const [isOnline, setIsOnline] = useState(true);\n\n  useEffect(() => {\n    function handleOnline() {\n      setIsOnline(true);\n    }\n\n    function handleOffline() {\n      setIsOnline(false);\n    }\n\n    window.addEventListener('online', handleOnline);\n    window.addEventListener('offline', handleOffline);\n\n    return () => {\n      window.removeEventListener('online', handleOnline);\n      window.removeEventListener('offline', handleOffline);\n    };\n  }, []);\n\n  return isOnline;\n}\n```\n\nThe custom hook above uses the `useState` and `useEffect` hooks to track the network status of the browser. It returns a boolean value that indicates whether the browser is online or offline.\n\n## Using a Custom hook\n\n```js\nfunction NetworkStatus() {\n  const isOnline = useNetworkStatus();\n\n  return (\n    <div>\n      <p>You are {isOnline ? 'online' : 'offline'}.</p>\n    </div>\n  );\n}\n```\n";

const __vite_glob_1_142 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: customHook
}, Symbol.toStringTag, { value: 'Module' }));

const errorBoundaries = "Error boundaries are special React components that catch JavaScript errors during rendering, in lifecycle methods, and during the constructor of whole tree below them. They are used to handle errors gracefully by displaying a fallback UI and preventing the entire application from crashing due to unhandled errors.\n\nYou can use [react-error-boundary](https://npm.im/react-error-boundary) package to create error boundaries in your application. It provides a `ErrorBoundary` component that you can wrap around any component that might throw an error. The `ErrorBoundary` component takes a `FallbackComponent` prop that is used to render a fallback UI when an error occurs.\n\n## Capturing Errors\n\n```js\nimport { ErrorBoundary } from 'react-error-boundary';\nimport { FetchData } from './FetchData';\n\nfunction ErrorFallback({ error, resetErrorBoundary }) {\n  return (\n    <div role=\"alert\">\n      <p>Something went wrong:</p>\n      <pre>{error.message}</pre>\n      <button onClick={resetErrorBoundary}>Try again</button>\n    </div>\n  );\n}\n\nexport function App() {\n  return (\n    <ErrorBoundary FallbackComponent={ErrorFallback}>\n      <FetchData />\n    </ErrorBoundary>\n  );\n}\n```\n\nThis `FetchData` component will throw an error when it is rendered, and the `ErrorBoundary` component will catch the error and display the `ErrorFallback` component.\n\n```js\nexport function FetchData() {\n  throw new Error('Error fetching data');\n  return <p>This will never render</p>;\n}\n```\n";

const __vite_glob_1_143 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: errorBoundaries
}, Symbol.toStringTag, { value: 'Module' }));

const flushSync = "The `flushSync` function in React is used to flush updates synchronously. It schedules updates to be performed inside a high-priority task, ensuring that the updates are executed immediately and synchronously before returning control to the caller.\n\n```js\nimport { flushSync } from 'react-dom';\n\nflushSync(callback);\n```\n\nThis is useful in situations where you need the DOM to be updated immediately, such as for measurements or to ensure synchronous rendering. However, excessive use of `flushSync` can lead to degraded performance, so it should be used judiciously.\n";

const __vite_glob_1_144 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: flushSync
}, Symbol.toStringTag, { value: 'Module' }));

const investigateSlowApp = "There are many reasons why an app might be slow. It could be due to a slow network, a slow backend, or a slow client. It could also be due to a memory leak, unnecessary re-renders, or large bundle sizes.\n\nHere are some tips to help you investigate and fix performance issues:\n\n## Use the React DevTools Profiler\n\nThe React DevTools Profiler helps you visualize how components render and identify costly renderings. It can also help you identify unnecessary re-renders.\n\n## Check for Unnecessary Renders\n\nEnsure that components don't render more often than needed. Be clear about the `useEffect` dependencies and avoid creating new objects or arrays every render, as these can trigger unnecessary child component renders. Tools like [why-did-you-render](https://npm.im/@welldone-software/why-did-you-render) can help spot unnecessary re-renders.\n\n## Analyze Bundle Size\n\nUse your production build to analyze your bundle size. Tools like [webpack-bundle-analyzer](https://npm.im/webpack-bundle-analyzer) or [source-map-explorer](https://npm.im/source-map-explorer) can help you see if large libraries or unused code is slowing down the initial load.\n\n## Optimize Images & Assets\n\nEnsure images are appropriately sized and use modern formats. Also, consider using CDNs for assets that don't change often.\n\n## Lazy Load Components\n\nUse `lazy()` and dynamic imports to split your bundle and load components only when they're needed. This can help reduce the initial load time.\n\n## Check Network Requests\n\nSlow API calls or fetching large amounts of data can affect performance. Optimize your backend, paginate data, or cache results. You can also use tools like [@tanstack/react-query](https://npm.im/@tanstack/react-query) or [swr](https://npm.im/swr) to help manage data fetching and caching.\n\n## Use Production Build for Testing\n\nEnsure you're testing the performance on a production build, as development builds are often slower due to extra checks and logs.\n\nRegularly profiling and monitoring your app can help you spot and fix performance issues before they become significant problems. You can use tools like [Lighthouse](https://developers.google.com/web/tools/lighthouse) or [Calibre](https://calibreapp.com) to monitor your app's performance over time.\n";

const __vite_glob_1_145 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: investigateSlowApp
}, Symbol.toStringTag, { value: 'Module' }));

const lazyLoading = "You can use React's `lazy()` function in conjunction with dynamic `import()` to lazily load a component. This is often combined with `Suspense` to display fallback content while the component is being loaded.\n\n```js\n// The component has to be exported as a default export\nexport default function RoadmapRender() {\n  return <h1>This is a lazily-loaded component!</h1>;\n}\n```\n\n```js\nimport { lazy, Suspense } from 'react';\n\nconst LazyRoadmapRender = lazy(() => delay(import('./RoadmapRender')));\n\nexport function App() {\n  const [showRoadmapRender, setShowRoadmapRender] = useState(false);\n  return (\n    <>\n      <button onClick={() => setShowRoadmapRender(true)}>\n        Show RoadmapRender\n      </button>\n      {showRoadmapRender && (\n        <Suspense fallback={<div>Loading...</div>}>\n          <LazyRoadmapRender />\n        </Suspense>\n      )}\n    </>\n  );\n}\n\n// Helper function to simulate a 2 seconds delay\nfunction delay(promise) {\n  return new Promise((resolve) => setTimeout(resolve, 2000)).then(\n    () => promise\n  );\n}\n```\n\nThe `RoadmapRender` component is lazily loaded and rendered inside the `Suspense` component. While the component is being loaded, the `Suspense` component will display the fallback content.\n";

const __vite_glob_1_146 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: lazyLoading
}, Symbol.toStringTag, { value: 'Module' }));

const pureComponents = "Pure components re-render only when the props passed to the component changes. For example, if you have a pure child component inside a parent component state changes in the parent component will not re-render the child component unless the props passed to the child component change.\n\nTo create a pure component, you can use the `memo` function from React. It is a higher order component which takes a component as an argument and returns a new component. The new component renders only if the props change.\n\n```javascript\nimport React, { memo } from 'react';\n\nconst ChildComponent = ({ name }) => {\n  console.log('Rendering child component');\n  return <div>{name}</div>;\n};\n\nconst PureChildComponent = memo(ChildComponent);\n\nconst ParentComponent = () => {\n  const [count, setCount] = useState(0);\n  const [name, setName] = useState('John');\n\n  return (\n    <div>\n      <button onClick={() => setCount(count + 1)}>Count - {count}</button>\n      <button onClick={() => setName('Jane')}>Change name</button>\n      <PureChildComponent name={name} />\n    </div>\n  );\n};\n```";

const __vite_glob_1_147 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: pureComponents
}, Symbol.toStringTag, { value: 'Module' }));

const reRenders = "Unnecessary re-renders in components can occur due to several reasons, and it's important to optimize your code to minimize them for better performance.\n\nHere are some common reasons for unnecessary re-renders in functional components:\n\n- **Using inline functions in JSX props**: If you pass an inline function as a prop to child components, those components will get re-rendered every time the parent component re-renders. This is because a new function is created on every render. You can optimize this by using `useCallback` hook to memoize the function.\n- **Using `useState` hook with objects**: If you use `useState` hook with objects, you need to make sure that you are not mutating the object. If you mutate the object, React will not be able to detect the change and will not re-render the component. You can optimize this by using `useReducer` hook instead of `useState` hook.\n- **Using `useEffect` hook without dependencies**: If you use `useEffect` hook without dependencies, it will run on every render. You can optimize this by passing an empty array as the second argument to `useEffect` hook.\n- **Parent Component Re-renders**: If a parent component re-renders, all its child components will also re-render. You can optimize this by using `React.memo` to memoize the child component where possible.\n- **Global State Changes**: If you use global state management libraries like Redux, MobX, etc., and the global state changes, all the components that use that state will re-render. You can optimize this by using `useSelector` hook to select only the state that you need in a component.\n- **Misusing Context**: If you use Context API to pass data to child components, and the data changes, all the child components will re-render. You can optimize this by using `useContext` hook to select only the data that you need in a component.\n\nYou can also use `React.StrictMode` to detect potential problems in your code that could cause unnecessary re-renders.\n\n";

const __vite_glob_1_148 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: reRenders
}, Symbol.toStringTag, { value: 'Module' }));

const refForwarding = "By default, each component’s DOM nodes are private. However, sometimes it’s useful to expose a DOM node to the parent—for example, to allow focusing it. To opt in, wrap your component definition into `forwardRef()`:\n\n```javascript\nimport { forwardRef } from 'react';\n\nconst MyInput = forwardRef(function MyInput(props, ref) {\n  const { label, ...otherProps } = props;\n  return (\n    <label>\n      {label}\n      <input {...otherProps} />\n    </label>\n  );\n});\n```\n\nYou will receive a `ref` as the second argument after props. Pass it to the DOM node that you want to expose:\n\n```javascript\nimport { forwardRef } from 'react';\n\nconst MyInput = forwardRef(function MyInput(props, ref) {\n  const { label, ...otherProps } = props;\n  return (\n    <label>\n      {label}\n      <input {...otherProps} ref={ref} />\n    </label>\n  );\n});\n```\n\nThis lets the parent Form component access their `<input>` DOM node exposed by `MyInput`:\n\n```javascript\nfunction Form() {\n  const ref = useRef(null);\n\n  function handleClick() {\n    ref.current.focus();\n  }\n\n  return (\n    <form>\n      <MyInput label=\"Enter your name:\" ref={ref} />\n      <button type=\"button\" onClick={handleClick}>\n        Edit\n      </button>\n    </form>\n  );\n}\n```\n\nThis Form component passes a ref to `MyInput`. The `MyInput` component forwards that ref to the `<input>` browser tag. As a result, the `Form` component can access that `<input>` DOM node and call `focus()` on it.\n\n";

const __vite_glob_1_149 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: refForwarding
}, Symbol.toStringTag, { value: 'Module' }));

const renderList = "In React, you can render a list by using the JavaScript `map` function to iterate over an array of items and return a JSX element for each item. It's important to provide a unique `key` prop to each element in the list for React's diffing algorithm to function efficiently during re-renders. Here's a basic example:\n\n```javascript\nconst items = ['Apple', 'Banana', 'Cherry'];\n\nfunction FruitList() {\n  return (\n    <ul>\n      {items.map((fruit, index) => (\n        <li key={index}>{fruit}</li>\n      ))}\n    </ul>\n  );\n}\n```\n\n> Note: While using the index as a key can work in some cases, it's generally not recommended for dynamic lists where items can be added, removed, or reordered.\n";

const __vite_glob_1_150 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: renderList
}, Symbol.toStringTag, { value: 'Module' }));

const strictMode = "Strict Mode is a tool in React for highlighting potential problems in an application. By wrapping a component tree with `StrictMode`, React will activate additional checks and warnings for its descendants. This doesn't affect the production build but provides insights during development.\n\n```js\nimport { StrictMode } from 'react';\nimport { createRoot } from 'react-dom/client';\n\nconst root = createRoot(document.getElementById('root'));\nroot.render(\n  <StrictMode>\n    <App />\n  </StrictMode>\n);\n```\n\nIn Strict Mode, React does a few extra things during development:\n\n1. It renders components twice to catch bugs caused by impure rendering.\n2. It runs side-effects (like data fetching) twice to find mistakes in them caused by missing effect cleanup.\n3. It checks if deprecated APIs are used, and logs a warning message to the console if so.\n";

const __vite_glob_1_151 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: strictMode
}, Symbol.toStringTag, { value: 'Module' }));

const suspense = "Suspense is a component in React that lets you specify the fallback content to display while waiting for a component to load. It is used in conjunction with `lazy()` to lazily load components.\n\n```js\nimport { lazy, Suspense } from 'react';\n\nconst LazyRoadmapRender = lazy(() => import('./RoadmapRender'));\n\nexport function App() {\n  const [show, setShow] = useState(false);\n  return (\n    <>\n      <button onClick={() => setShow(true)}>Show</button>\n      {show && (\n        <Suspense fallback={<div>Loading...</div>}>\n          <LazyRoadmapRender />\n        </Suspense>\n      )}\n    </>\n  );\n}\n```\n\nUntil the `RoadmapRender` component is loaded, the `Suspense` component will display the `Loading...` fallback content.\n";

const __vite_glob_1_152 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: suspense
}, Symbol.toStringTag, { value: 'Module' }));

const syntheticEvents = "React differs from HTML in that it uses a synthetic event system instead of directly binding to the browser’s native events. This system brings consistency and performance benefits, and it allows React to be agnostic of environments like browser, server, or React Native.\n\nThe events such as `onClick`, `onSubmit`, `onFocus`, etc. are all camel-cased to be consistent with the naming convention in JavaScript. React event handlers are written inside curly braces:\n\n```javascript\nfunction activateLasers(e) {\n    e.preventDefault();\n    console.log('The button was clicked.');\n}\n\n<button onClick={activateLasers}>Activate Lasers</button>\n```\n\nIn this case `activateLasers` is the event handler which will receive a React event object which, also known as a \"synthetic event\". It conforms to the same standard as the underlying DOM events, but fixes some browser inconsistencies.\n\nSome React events do not map directly to the browser’s native events. For example in `onMouseLeave`, `e.nativeEvent` will point to a `mouseout` event. If you need the underlying browser event for some reason, read it from `e.nativeEvent`.\n\nVisit the [React documentation](https://react.dev/reference/react-dom/components/common#react-event-object) for further details.";

const __vite_glob_1_153 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: syntheticEvents
}, Symbol.toStringTag, { value: 'Module' }));

const useTransition = "`useTransition` hook allows you to mark certain updates as **transitions** so they can be deprioritized, allowing other, more urgent updates to be processed first. This ensures that the UI remains responsive during updates that might take some time.\n\n```js\nimport { useTransition, useState } from 'react';\nimport { Posts } from './Posts';\nimport { Home } from './Home';\nimport { Contact } from './Contact';\n\nexport function App() {\n  const [isPending, startTransition] = useTransition();\n  const [page, setPage] = useState('home');\n\n  function changePage(newPage: string) {\n    startTransition(() => {\n      setPage(newPage);\n    });\n  }\n\n  return (\n    <>\n      <button onClick={() => changePage('home')}>Home</button>\n      <button onClick={() => changePage('posts')}>Posts</button>\n      <button onClick={() => changePage('contact')}>Contact</button>\n      <hr />\n      {isPending && <div>Loading...</div>}\n      {page === 'home' && <Home />}\n      {page === 'posts' && <Posts />}\n      {page === 'contact' && <Contact />}\n    </>\n  );\n}\n```\n\n```js\nexport function Home() {\n  return <div>Home</div>;\n}\n```\n\n```js\nexport function Contact() {\n  return <div>Contact</div>;\n}\n```\n\nPosts component is artificially delayed by 500ms to emulate extremely slow code.\n\n```js\nexport function Posts() {\n  const items = [];\n  for (let i = 0; i < 500; i++) {\n    items.push(<SlowPost key={i} />);\n  }\n  return <ul>{items}</ul>;\n}\n\nfunction SlowPost() {\n  const startTime = performance.now();\n  while (performance.now() - startTime < 1) {\n    // Do nothing for 1 ms per item to emulate extremely slow code\n  }\n\n  return <li>Post</li>;\n}\n```\n\nNow when you click on the `Posts` button, you'll notice that the UI remains responsive and you can still switch to other pages while the posts are loading. Try removing the `startTransition` wrapper around `setPage` in `changePage` to see the difference.\n";

const __vite_glob_1_154 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: useTransition
}, Symbol.toStringTag, { value: 'Module' }));

const virtualDom = "Virtual DOM works in this steps:\n\n1. Whenever any underlying data changes, new virtual DOM representation will be created.\n2. Then the difference between the previous DOM representation and the new one is calculated.\n3. Once the calculations are done, the real DOM will be updated with only the things that have actually changed.\n";

const __vite_glob_1_155 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: virtualDom
}, Symbol.toStringTag, { value: 'Module' }));

async function getAllQuestionGroups() {
  const questionGroupFilesMap = /* #__PURE__ */ Object.assign({"/src/data/question-groups/backend/backend.md": __vite_glob_2_0,"/src/data/question-groups/frontend/frontend.md": __vite_glob_2_1,"/src/data/question-groups/javascript/javascript.md": __vite_glob_2_2,"/src/data/question-groups/nodejs/nodejs.md": __vite_glob_2_3,"/src/data/question-groups/react/react.md": __vite_glob_2_4




});
  const answerFilesMap = /* #__PURE__ */ Object.assign({"/src/data/question-groups/backend/content/anomaly-detection.md": __vite_glob_1_0,"/src/data/question-groups/backend/content/api-dependencies.md": __vite_glob_1_1,"/src/data/question-groups/backend/content/api-endpoint.md": __vite_glob_1_2,"/src/data/question-groups/backend/content/api-tests.md": __vite_glob_1_3,"/src/data/question-groups/backend/content/api-versioning.md": __vite_glob_1_4,"/src/data/question-groups/backend/content/batch-processing.md": __vite_glob_1_5,"/src/data/question-groups/backend/content/benefits-drawbacks-microservices.md": __vite_glob_1_6,"/src/data/question-groups/backend/content/bg-tasks.md": __vite_glob_1_7,"/src/data/question-groups/backend/content/blue-green-deployment.md": __vite_glob_1_8,"/src/data/question-groups/backend/content/cache-eviction.md": __vite_glob_1_9,"/src/data/question-groups/backend/content/cap-theorem.md": __vite_glob_1_10,"/src/data/question-groups/backend/content/ci-cd.md": __vite_glob_1_11,"/src/data/question-groups/backend/content/containerization.md": __vite_glob_1_12,"/src/data/question-groups/backend/content/correlation-ids.md": __vite_glob_1_13,"/src/data/question-groups/backend/content/data-encryption.md": __vite_glob_1_14,"/src/data/question-groups/backend/content/db-connections.md": __vite_glob_1_15,"/src/data/question-groups/backend/content/deadlock-db-transaction.md": __vite_glob_1_16,"/src/data/question-groups/backend/content/debugging-backend.md": __vite_glob_1_17,"/src/data/question-groups/backend/content/decompose-microservices.md": __vite_glob_1_18,"/src/data/question-groups/backend/content/distributed-caching.md": __vite_glob_1_19,"/src/data/question-groups/backend/content/eventual-consistency.md": __vite_glob_1_20,"/src/data/question-groups/backend/content/fault-tolerance.md": __vite_glob_1_21,"/src/data/question-groups/backend/content/file-uploads.md": __vite_glob_1_22,"/src/data/question-groups/backend/content/fulltext-search.md": __vite_glob_1_23,"/src/data/question-groups/backend/content/gdpr-compliance.md": __vite_glob_1_24,"/src/data/question-groups/backend/content/high-available-storage.md": __vite_glob_1_25,"/src/data/question-groups/backend/content/http-request-response-cycle.md": __vite_glob_1_26,"/src/data/question-groups/backend/content/idempotency.md": __vite_glob_1_27,"/src/data/question-groups/backend/content/instrument-monitor.md": __vite_glob_1_28,"/src/data/question-groups/backend/content/iot-streams.md": __vite_glob_1_29,"/src/data/question-groups/backend/content/load-balanced-session.md": __vite_glob_1_30,"/src/data/question-groups/backend/content/load-testing-api.md": __vite_glob_1_31,"/src/data/question-groups/backend/content/long-running.md": __vite_glob_1_32,"/src/data/question-groups/backend/content/maintainable-code.md": __vite_glob_1_33,"/src/data/question-groups/backend/content/message-queue.md": __vite_glob_1_34,"/src/data/question-groups/backend/content/optimistic-vs-pessimistic.md": __vite_glob_1_35,"/src/data/question-groups/backend/content/protect-sql-injection.md": __vite_glob_1_36,"/src/data/question-groups/backend/content/rate-limiting.md": __vite_glob_1_37,"/src/data/question-groups/backend/content/realtime-data-sync.md": __vite_glob_1_38,"/src/data/question-groups/backend/content/rest-core-principles.md": __vite_glob_1_39,"/src/data/question-groups/backend/content/reverse-proxy.md": __vite_glob_1_40,"/src/data/question-groups/backend/content/scale-backend.md": __vite_glob_1_41,"/src/data/question-groups/backend/content/schema-migrations.md": __vite_glob_1_42,"/src/data/question-groups/backend/content/secure-api.md": __vite_glob_1_43,"/src/data/question-groups/backend/content/secure-interservice.md": __vite_glob_1_44,"/src/data/question-groups/backend/content/session-management.md": __vite_glob_1_45,"/src/data/question-groups/backend/content/sql-vs-nosql.md": __vite_glob_1_46,"/src/data/question-groups/backend/content/sso.md": __vite_glob_1_47,"/src/data/question-groups/backend/content/statelessness-http.md": __vite_glob_1_48,"/src/data/question-groups/backend/content/webhooks.md": __vite_glob_1_49,"/src/data/question-groups/frontend/content/async-ops-js.md": __vite_glob_1_50,"/src/data/question-groups/frontend/content/block-inline-elems.md": __vite_glob_1_51,"/src/data/question-groups/frontend/content/box-model.md": __vite_glob_1_52,"/src/data/question-groups/frontend/content/browser-render.md": __vite_glob_1_53,"/src/data/question-groups/frontend/content/client-storage.md": __vite_glob_1_54,"/src/data/question-groups/frontend/content/closures.md": __vite_glob_1_55,"/src/data/question-groups/frontend/content/critical-css.md": __vite_glob_1_56,"/src/data/question-groups/frontend/content/csp.md": __vite_glob_1_57,"/src/data/question-groups/frontend/content/css-grid.md": __vite_glob_1_58,"/src/data/question-groups/frontend/content/css-specificity.md": __vite_glob_1_59,"/src/data/question-groups/frontend/content/css-variables.md": __vite_glob_1_60,"/src/data/question-groups/frontend/content/dom.md": __vite_glob_1_61,"/src/data/question-groups/frontend/content/em-vs-rem.md": __vite_glob_1_62,"/src/data/question-groups/frontend/content/event-delegation.md": __vite_glob_1_63,"/src/data/question-groups/frontend/content/event-listeners.md": __vite_glob_1_64,"/src/data/question-groups/frontend/content/event-loop-js.md": __vite_glob_1_65,"/src/data/question-groups/frontend/content/flexbox-layout.md": __vite_glob_1_66,"/src/data/question-groups/frontend/content/id-vs-class.md": __vite_glob_1_67,"/src/data/question-groups/frontend/content/improve-web-perf.md": __vite_glob_1_68,"/src/data/question-groups/frontend/content/js-promises.md": __vite_glob_1_69,"/src/data/question-groups/frontend/content/media-queries.md": __vite_glob_1_70,"/src/data/question-groups/frontend/content/null-vs-undefined.md": __vite_glob_1_71,"/src/data/question-groups/frontend/content/optimize-assets.md": __vite_glob_1_72,"/src/data/question-groups/frontend/content/same-origin-policy.md": __vite_glob_1_73,"/src/data/question-groups/frontend/content/seo-best-practices.md": __vite_glob_1_74,"/src/data/question-groups/frontend/content/service-workers.md": __vite_glob_1_75,"/src/data/question-groups/frontend/content/ssr-when.md": __vite_glob_1_76,"/src/data/question-groups/frontend/content/state-mgmt-spa.md": __vite_glob_1_77,"/src/data/question-groups/frontend/content/tree-shaking.md": __vite_glob_1_78,"/src/data/question-groups/frontend/content/vdom.md": __vite_glob_1_79,"/src/data/question-groups/javascript/content/alert-prompt-confirm.md": __vite_glob_1_80,"/src/data/question-groups/javascript/content/append-child-vs-insert-before.md": __vite_glob_1_81,"/src/data/question-groups/javascript/content/async-vs-sync.md": __vite_glob_1_82,"/src/data/question-groups/javascript/content/break-and-continue.md": __vite_glob_1_83,"/src/data/question-groups/javascript/content/callback-hell.md": __vite_glob_1_84,"/src/data/question-groups/javascript/content/closure.md": __vite_glob_1_85,"/src/data/question-groups/javascript/content/comma-operator.md": __vite_glob_1_86,"/src/data/question-groups/javascript/content/create-element.md": __vite_glob_1_87,"/src/data/question-groups/javascript/content/custom-event.md": __vite_glob_1_88,"/src/data/question-groups/javascript/content/debug-javascript.md": __vite_glob_1_89,"/src/data/question-groups/javascript/content/defer-vs-async.md": __vite_glob_1_90,"/src/data/question-groups/javascript/content/do-while-loop.md": __vite_glob_1_91,"/src/data/question-groups/javascript/content/equality-operator.md": __vite_glob_1_92,"/src/data/question-groups/javascript/content/error-in-async-await.md": __vite_glob_1_93,"/src/data/question-groups/javascript/content/error-in-promise.md": __vite_glob_1_94,"/src/data/question-groups/javascript/content/event-bubbling.md": __vite_glob_1_95,"/src/data/question-groups/javascript/content/event-loop.md": __vite_glob_1_96,"/src/data/question-groups/javascript/content/explicit-binding.md": __vite_glob_1_97,"/src/data/question-groups/javascript/content/filter-method.md": __vite_glob_1_98,"/src/data/question-groups/javascript/content/finally-block-in-promise.md": __vite_glob_1_99,"/src/data/question-groups/javascript/content/find-unique-array-values.md": __vite_glob_1_100,"/src/data/question-groups/javascript/content/for-each-method.md": __vite_glob_1_101,"/src/data/question-groups/javascript/content/heap-and-stack.md": __vite_glob_1_102,"/src/data/question-groups/javascript/content/hoisting.md": __vite_glob_1_103,"/src/data/question-groups/javascript/content/iife.md": __vite_glob_1_104,"/src/data/question-groups/javascript/content/immutable-object.md": __vite_glob_1_105,"/src/data/question-groups/javascript/content/increment-operator.md": __vite_glob_1_106,"/src/data/question-groups/javascript/content/infinite-loop.md": __vite_glob_1_107,"/src/data/question-groups/javascript/content/inheritance.md": __vite_glob_1_108,"/src/data/question-groups/javascript/content/labelled-statements.md": __vite_glob_1_109,"/src/data/question-groups/javascript/content/logical-operators.md": __vite_glob_1_110,"/src/data/question-groups/javascript/content/map-method.md": __vite_glob_1_111,"/src/data/question-groups/javascript/content/map.md": __vite_glob_1_112,"/src/data/question-groups/javascript/content/measure-dimensions.md": __vite_glob_1_113,"/src/data/question-groups/javascript/content/merge-arrays.md": __vite_glob_1_114,"/src/data/question-groups/javascript/content/nullish-coalescing-operator.md": __vite_glob_1_115,"/src/data/question-groups/javascript/content/parse-json.md": __vite_glob_1_116,"/src/data/question-groups/javascript/content/prevent-default.md": __vite_glob_1_117,"/src/data/question-groups/javascript/content/promise-all-vs-all-settled.md": __vite_glob_1_118,"/src/data/question-groups/javascript/content/prototype-chain.md": __vite_glob_1_119,"/src/data/question-groups/javascript/content/query-selector.md": __vite_glob_1_120,"/src/data/question-groups/javascript/content/reduce-method.md": __vite_glob_1_121,"/src/data/question-groups/javascript/content/remove-element.md": __vite_glob_1_122,"/src/data/question-groups/javascript/content/scroll-to-top.md": __vite_glob_1_123,"/src/data/question-groups/javascript/content/set-interval.md": __vite_glob_1_124,"/src/data/question-groups/javascript/content/set-timeout.md": __vite_glob_1_125,"/src/data/question-groups/javascript/content/set.md": __vite_glob_1_126,"/src/data/question-groups/javascript/content/spread-operator.md": __vite_glob_1_127,"/src/data/question-groups/javascript/content/switch-case.md": __vite_glob_1_128,"/src/data/question-groups/javascript/content/ternary-operator.md": __vite_glob_1_129,"/src/data/question-groups/javascript/content/variable-number-of-arguments.md": __vite_glob_1_130,"/src/data/question-groups/nodejs/content/commonjs-vs-esm.md": __vite_glob_1_131,"/src/data/question-groups/nodejs/content/error-handling.md": __vite_glob_1_132,"/src/data/question-groups/nodejs/content/exit-codes.md": __vite_glob_1_133,"/src/data/question-groups/nodejs/content/input-from-command-line.md": __vite_glob_1_134,"/src/data/question-groups/nodejs/content/order-priority.md": __vite_glob_1_135,"/src/data/question-groups/nodejs/content/process-argv.md": __vite_glob_1_136,"/src/data/question-groups/nodejs/content/process-cwd-vs-dirname.md": __vite_glob_1_137,"/src/data/question-groups/nodejs/content/web-server.md": __vite_glob_1_138,"/src/data/question-groups/react/content/component-lifecycle.md": __vite_glob_1_139,"/src/data/question-groups/react/content/controlled-vs-uncontrolled.md": __vite_glob_1_140,"/src/data/question-groups/react/content/create-portal.md": __vite_glob_1_141,"/src/data/question-groups/react/content/custom-hook.md": __vite_glob_1_142,"/src/data/question-groups/react/content/error-boundaries.md": __vite_glob_1_143,"/src/data/question-groups/react/content/flush-sync.md": __vite_glob_1_144,"/src/data/question-groups/react/content/investigate-slow-app.md": __vite_glob_1_145,"/src/data/question-groups/react/content/lazy-loading.md": __vite_glob_1_146,"/src/data/question-groups/react/content/pure-components.md": __vite_glob_1_147,"/src/data/question-groups/react/content/re-renders.md": __vite_glob_1_148,"/src/data/question-groups/react/content/ref-forwarding.md": __vite_glob_1_149,"/src/data/question-groups/react/content/render-list.md": __vite_glob_1_150,"/src/data/question-groups/react/content/strict-mode.md": __vite_glob_1_151,"/src/data/question-groups/react/content/suspense.md": __vite_glob_1_152,"/src/data/question-groups/react/content/synthetic-events.md": __vite_glob_1_153,"/src/data/question-groups/react/content/use-transition.md": __vite_glob_1_154,"/src/data/question-groups/react/content/virtual-dom.md": __vite_glob_1_155






});
  const allAuthors = await getAllAuthors();
  return Object.values(questionGroupFilesMap).map((questionGroupFile) => {
    const fileParts = questionGroupFile?.file?.split("/");
    const [questionGroupDir, questionGroupFileName] = fileParts?.slice(-2);
    const questionGroupFileId = questionGroupFileName?.replace(".md", "");
    const formattedAnswers = questionGroupFile.frontmatter.questions.map((qa) => {
      const questionText = qa.question;
      let answerText = qa.answer;
      let isLongAnswer = false;
      if (answerText.endsWith(".md")) {
        const answerFilePath = `/src/data/question-groups/${questionGroupDir}/content/${answerText}`;
        answerText = answerFilesMap[answerFilePath]?.default || answerFilesMap[answerFilePath] || `File missing: ${answerFilePath}`;
        isLongAnswer = true;
      }
      return {
        id: slugify(questionText, { lower: true }),
        question: questionText,
        answer: answerText,
        topics: qa.topics,
        isLongAnswer
      };
    });
    const uniqueTopics = formattedAnswers.flatMap((answer) => answer.topics || []).filter((topic) => topic).reduce((acc, topic) => {
      if (!acc.includes(topic)) {
        acc.push(topic);
      }
      return acc;
    }, []);
    return {
      ...questionGroupFile,
      id: questionGroupFileId,
      questions: formattedAnswers,
      allTopics: uniqueTopics,
      author: allAuthors.find(
        (author) => author.id === questionGroupFile.frontmatter.authorId
      )
    };
  }).sort((a, b) => a.frontmatter.order - b.frontmatter.order);
}
async function getQuestionGroupsByIds(ids) {
  if (!ids?.length) {
    return [];
  }
  const questionGroupFilesMap = /* #__PURE__ */ Object.assign({"/src/data/question-groups/backend/backend.md": __vite_glob_2_0,"/src/data/question-groups/frontend/frontend.md": __vite_glob_2_1,"/src/data/question-groups/javascript/javascript.md": __vite_glob_2_2,"/src/data/question-groups/nodejs/nodejs.md": __vite_glob_2_3,"/src/data/question-groups/react/react.md": __vite_glob_2_4

});
  return Object.values(questionGroupFilesMap).map((group) => {
    const fileId = group?.file?.split("/")?.pop()?.replace(".md", "");
    const frontmatter = group.frontmatter;
    return {
      id: fileId,
      title: frontmatter.briefTitle,
      description: `${frontmatter.questions.length} Questions`
    };
  }).filter((group) => {
    return ids.includes(group.id);
  });
}

export { getQuestionGroupsByIds as a, getAllQuestionGroups as g };
