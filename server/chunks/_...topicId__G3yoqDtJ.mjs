/* empty css                             */
import { l as createComponent, m as renderTemplate, n as maybeRenderHead, u as unescapeHTML, k as createAstro, o as addAttribute, p as renderComponent } from './astro/server_DJHfVkFr.mjs';
import 'kleur/colors';
import 'clsx';
import { _ as __variableDynamicImportRuntimeHelper } from './dynamic-import-helper_uMTE3ehW.mjs';

const html$4c = "<h1 id=\"api-gateway\">API Gateway</h1>\n<blockquote>\n<p>Use an API Gateway for caching, Rate Limit policies, and other security features.</p>\n</blockquote>\n<p>An API gateway can make your APIs more secure by providing a centralized point of control for managing and securing API traffic. Here are a few ways an API gateway can improve API security:</p>\n<ul>\n<li>\n<p>Authentication and authorization: API gateways can handle user authentication and authorization, reducing the burden on individual APIs and improving consistency across the organization. This can include techniques such as JWT verification, OAuth, and other authentication mechanisms.</p>\n</li>\n<li>\n<p>Traffic filtering and rate limiting: An API gateway can enforce traffic filtering and rate limiting to protect APIs against DDoS attacks, brute force attacks, and other types of abuse.</p>\n</li>\n<li>\n<p>Encryption and decryption: An API gateway can handle encryption and decryption of sensitive data to protect against data breaches and theft.</p>\n</li>\n<li>\n<p>Logging and monitoring: An API gateway can provide centralized logging and monitoring of API traffic, helping to identify and respond to security threats and other issues.</p>\n</li>\n<li>\n<p>Integration with security tools: An API gateway can be integrated with security tools such as WAFs, SIEMs, and other security tools to provide additional layers of protection.</p>\n</li>\n</ul>";

				const frontmatter$4c = {};
				const file$4c = "/workspaces/developer-roadmap/src/data/best-practices/api-security/content/api-gateway.md";
				const url$4c = undefined;
				function rawContent$4c() {
					return "# API Gateway\n\n> Use an API Gateway for caching, Rate Limit policies, and other security features.\n\nAn API gateway can make your APIs more secure by providing a centralized point of control for managing and securing API traffic. Here are a few ways an API gateway can improve API security:\n\n- Authentication and authorization: API gateways can handle user authentication and authorization, reducing the burden on individual APIs and improving consistency across the organization. This can include techniques such as JWT verification, OAuth, and other authentication mechanisms.\n\n- Traffic filtering and rate limiting: An API gateway can enforce traffic filtering and rate limiting to protect APIs against DDoS attacks, brute force attacks, and other types of abuse.\n\n- Encryption and decryption: An API gateway can handle encryption and decryption of sensitive data to protect against data breaches and theft.\n\n- Logging and monitoring: An API gateway can provide centralized logging and monitoring of API traffic, helping to identify and respond to security threats and other issues.\n\n- Integration with security tools: An API gateway can be integrated with security tools such as WAFs, SIEMs, and other security tools to provide additional layers of protection.\n";
				}
				function compiledContent$4c() {
					return html$4c;
				}
				function getHeadings$4c() {
					return [{"depth":1,"slug":"api-gateway","text":"API Gateway"}];
				}

				const Content$4c = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter$4c;
					content.file = file$4c;
					content.url = url$4c;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html$4c)}`;
				});

const __vite_glob_0_0 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	Content: Content$4c,
	compiledContent: compiledContent$4c,
	default: Content$4c,
	file: file$4c,
	frontmatter: frontmatter$4c,
	getHeadings: getHeadings$4c,
	rawContent: rawContent$4c,
	url: url$4c
}, Symbol.toStringTag, { value: 'Module' }));

const html$4b = "<h1 id=\"authentication-mechanisms\">Authentication Mechanisms</h1>\n<blockquote>\n<p>Use standard authentication mechanisms for generating tokens, storing credentials, and authenticating users.</p>\n</blockquote>\n<p>Here are some examples of established authentication mechanisms that you can use instead of reinventing the wheel:</p>\n<ul>\n<li>\n<p>OAuth: OAuth is a widely used open standard for authorization that enables users to grant third-party applications access to their resources without sharing their credentials. It is commonly used by web services and APIs to enable users to sign in with their social media accounts or other third-party accounts.</p>\n</li>\n<li>\n<p>OpenID Connect: OpenID Connect is an authentication protocol built on top of OAuth 2.0 that enables users to authenticate with multiple websites and applications using a single set of credentials. It is commonly used for single sign-on (SSO) across multiple websites and applications.</p>\n</li>\n<li>\n<p>SAML: Security Assertion Markup Language (SAML) is an XML-based standard for exchanging authentication and authorization data between parties. It is commonly used for SSO across multiple domains or organizations.</p>\n</li>\n<li>\n<p>Password hashing algorithms: Password hashing algorithms like bcrypt and scrypt are widely used to securely store and protect user passwords. These algorithms ensure that even if an attacker gains access to the password database, they will not be able to easily recover the passwords.</p>\n</li>\n<li>\n<p>Two-factor authentication (2FA): 2FA is an authentication mechanism that requires users to provide two forms of identification to access their accounts. This typically involves something the user knows (like a password) and something the user has (like a mobile device or security key). Many services and applications now offer 2FA as an additional security measure.</p>\n</li>\n</ul>";

				const frontmatter$4b = {};
				const file$4b = "/workspaces/developer-roadmap/src/data/best-practices/api-security/content/authentication-mechanisms.md";
				const url$4b = undefined;
				function rawContent$4b() {
					return "# Authentication Mechanisms\n\n> Use standard authentication mechanisms for generating tokens, storing credentials, and authenticating users.\n\nHere are some examples of established authentication mechanisms that you can use instead of reinventing the wheel:\n\n- OAuth: OAuth is a widely used open standard for authorization that enables users to grant third-party applications access to their resources without sharing their credentials. It is commonly used by web services and APIs to enable users to sign in with their social media accounts or other third-party accounts.\n\n- OpenID Connect: OpenID Connect is an authentication protocol built on top of OAuth 2.0 that enables users to authenticate with multiple websites and applications using a single set of credentials. It is commonly used for single sign-on (SSO) across multiple websites and applications.\n\n- SAML: Security Assertion Markup Language (SAML) is an XML-based standard for exchanging authentication and authorization data between parties. It is commonly used for SSO across multiple domains or organizations.\n\n- Password hashing algorithms: Password hashing algorithms like bcrypt and scrypt are widely used to securely store and protect user passwords. These algorithms ensure that even if an attacker gains access to the password database, they will not be able to easily recover the passwords.\n\n- Two-factor authentication (2FA): 2FA is an authentication mechanism that requires users to provide two forms of identification to access their accounts. This typically involves something the user knows (like a password) and something the user has (like a mobile device or security key). Many services and applications now offer 2FA as an additional security measure.\n";
				}
				function compiledContent$4b() {
					return html$4b;
				}
				function getHeadings$4b() {
					return [{"depth":1,"slug":"authentication-mechanisms","text":"Authentication Mechanisms"}];
				}

				const Content$4b = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter$4b;
					content.file = file$4b;
					content.url = url$4b;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html$4b)}`;
				});

const __vite_glob_0_1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	Content: Content$4b,
	compiledContent: compiledContent$4b,
	default: Content$4b,
	file: file$4b,
	frontmatter: frontmatter$4b,
	getHeadings: getHeadings$4b,
	rawContent: rawContent$4b,
	url: url$4b
}, Symbol.toStringTag, { value: 'Module' }));

const html$4a = "<h1 id=\"authorization-header\">Authorization Header</h1>\n<blockquote>\n<p>Use standard <code>Authorization</code> header for sending tokens instead of custom headers or query/body parameters</p>\n</blockquote>\n<p>Sending tokens in the query or body parameters is generally not recommended because these parameters may be logged or cached by various systems, including web servers, proxies, and gateways. This can potentially lead to the exposure of sensitive data, including authentication tokens.</p>\n<p>Additionally, sending tokens in query or body parameters can make them more vulnerable to cross-site request forgery (CSRF) attacks. In a CSRF attack, an attacker can trick a user into submitting a request that includes their authentication token, which the attacker can then use to impersonate the user and gain access to their account.</p>\n<p>By contrast, using the <code>Authorization</code> header to send tokens helps to ensure that the tokens are not logged or cached by intermediary systems, and it can also help to protect against CSRF attacks by allowing the server to validate the token before processing the request.</p>";

				const frontmatter$4a = {};
				const file$4a = "/workspaces/developer-roadmap/src/data/best-practices/api-security/content/authorization-header.md";
				const url$4a = undefined;
				function rawContent$4a() {
					return "# Authorization Header\n\n> Use standard `Authorization` header for sending tokens instead of custom headers or query/body parameters\n\nSending tokens in the query or body parameters is generally not recommended because these parameters may be logged or cached by various systems, including web servers, proxies, and gateways. This can potentially lead to the exposure of sensitive data, including authentication tokens.\n\nAdditionally, sending tokens in query or body parameters can make them more vulnerable to cross-site request forgery (CSRF) attacks. In a CSRF attack, an attacker can trick a user into submitting a request that includes their authentication token, which the attacker can then use to impersonate the user and gain access to their account.\n\nBy contrast, using the `Authorization` header to send tokens helps to ensure that the tokens are not logged or cached by intermediary systems, and it can also help to protect against CSRF attacks by allowing the server to validate the token before processing the request.\n";
				}
				function compiledContent$4a() {
					return html$4a;
				}
				function getHeadings$4a() {
					return [{"depth":1,"slug":"authorization-header","text":"Authorization Header"}];
				}

				const Content$4a = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter$4a;
					content.file = file$4a;
					content.url = url$4a;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html$4a)}`;
				});

const __vite_glob_0_2 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	Content: Content$4a,
	compiledContent: compiledContent$4a,
	default: Content$4a,
	file: file$4a,
	frontmatter: frontmatter$4a,
	getHeadings: getHeadings$4a,
	rawContent: rawContent$4a,
	url: url$4a
}, Symbol.toStringTag, { value: 'Module' }));

const html$49 = "<h1 id=\"avoid-http-blocking\">Avoid HTTP Blocking</h1>\n<blockquote>\n<p>Avoid HTTP blocking if you are using huge amount of data by moving the HTTP heavy operations to background jobs or asynchronous tasks.</p>\n</blockquote>\n<p>HTTP blocking is a common issue in web applications. It occurs when the application is unable to process incoming HTTP requests due to a large number of requests or a large amount of data. This can lead to the application becoming unresponsive and the server crashing. This can be prevented by moving HTTP heavy operations to background jobs or asynchronous tasks. You can use a message queue to queue the requests and process them in the background. This will allow the application to continue processing other requests while the heavy operations are being processed in the background.</p>";

				const frontmatter$49 = {};
				const file$49 = "/workspaces/developer-roadmap/src/data/best-practices/api-security/content/avoid-http-blocking.md";
				const url$49 = undefined;
				function rawContent$49() {
					return "# Avoid HTTP Blocking\n\n> Avoid HTTP blocking if you are using huge amount of data by moving the HTTP heavy operations to background jobs or asynchronous tasks.\n\nHTTP blocking is a common issue in web applications. It occurs when the application is unable to process incoming HTTP requests due to a large number of requests or a large amount of data. This can lead to the application becoming unresponsive and the server crashing. This can be prevented by moving HTTP heavy operations to background jobs or asynchronous tasks. You can use a message queue to queue the requests and process them in the background. This will allow the application to continue processing other requests while the heavy operations are being processed in the background.\n";
				}
				function compiledContent$49() {
					return html$49;
				}
				function getHeadings$49() {
					return [{"depth":1,"slug":"avoid-http-blocking","text":"Avoid HTTP Blocking"}];
				}

				const Content$49 = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter$49;
					content.file = file$49;
					content.url = url$49;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html$49)}`;
				});

const __vite_glob_0_3 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	Content: Content$49,
	compiledContent: compiledContent$49,
	default: Content$49,
	file: file$49,
	frontmatter: frontmatter$49,
	getHeadings: getHeadings$49,
	rawContent: rawContent$49,
	url: url$49
}, Symbol.toStringTag, { value: 'Module' }));

const html$48 = "<h1 id=\"avoid-logging-sensitive-data\">Avoid Logging Sensitive Data</h1>\n<blockquote>\n<p>Ensure that you aren’t logging any sensitive data.</p>\n</blockquote>\n<p>Make sure that you are not logging any sensitive data such as passwords, credit card numbers, or personal information. This is because logging sensitive data can expose it to attackers, allowing them to gain unauthorized access to your system or data. Additionally, logging sensitive data can violate data privacy laws and regulations, exposing you to legal liability.</p>";

				const frontmatter$48 = {};
				const file$48 = "/workspaces/developer-roadmap/src/data/best-practices/api-security/content/avoid-logging-sensitive-data.md";
				const url$48 = undefined;
				function rawContent$48() {
					return "# Avoid Logging Sensitive Data\n\n> Ensure that you aren't logging any sensitive data.\n\nMake sure that you are not logging any sensitive data such as passwords, credit card numbers, or personal information. This is because logging sensitive data can expose it to attackers, allowing them to gain unauthorized access to your system or data. Additionally, logging sensitive data can violate data privacy laws and regulations, exposing you to legal liability.\n";
				}
				function compiledContent$48() {
					return html$48;
				}
				function getHeadings$48() {
					return [{"depth":1,"slug":"avoid-logging-sensitive-data","text":"Avoid Logging Sensitive Data"}];
				}

				const Content$48 = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter$48;
					content.file = file$48;
					content.url = url$48;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html$48)}`;
				});

const __vite_glob_0_4 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	Content: Content$48,
	compiledContent: compiledContent$48,
	default: Content$48,
	file: file$48,
	frontmatter: frontmatter$48,
	getHeadings: getHeadings$48,
	rawContent: rawContent$48,
	url: url$48
}, Symbol.toStringTag, { value: 'Module' }));

const html$47 = "<h1 id=\"avoid-personal-id-in-urls\">Avoid Personal ID in URLs</h1>\n<blockquote>\n<p>Avoid user’s personal ID in the resource URLs e.g. users/242/orders</p>\n</blockquote>\n<p>User’s own resource ID should be avoided. Use <code>/me/orders</code> instead of <code>/user/654321/orders</code>. This will help avoid the risk of exposing the user’s personal ID that can be used for further attacks.</p>";

				const frontmatter$47 = {};
				const file$47 = "/workspaces/developer-roadmap/src/data/best-practices/api-security/content/avoid-personal-id-urls.md";
				const url$47 = undefined;
				function rawContent$47() {
					return "# Avoid Personal ID in URLs\n\n> Avoid user’s personal ID in the resource URLs e.g. users/242/orders\n\nUser's own resource ID should be avoided. Use `/me/orders` instead of `/user/654321/orders`. This will help avoid the risk of exposing the user’s personal ID that can be used for further attacks.\n";
				}
				function compiledContent$47() {
					return html$47;
				}
				function getHeadings$47() {
					return [{"depth":1,"slug":"avoid-personal-id-in-urls","text":"Avoid Personal ID in URLs"}];
				}

				const Content$47 = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter$47;
					content.file = file$47;
					content.url = url$47;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html$47)}`;
				});

const __vite_glob_0_5 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	Content: Content$47,
	compiledContent: compiledContent$47,
	default: Content$47,
	file: file$47,
	frontmatter: frontmatter$47,
	getHeadings: getHeadings$47,
	rawContent: rawContent$47,
	url: url$47
}, Symbol.toStringTag, { value: 'Module' }));

const html$46 = "<h1 id=\"avoid-returning-sensitive-data\">Avoid Returning Sensitive Data</h1>\n<blockquote>\n<p>Only return the data that is needed for the client to function.</p>\n</blockquote>\n<p>Returning only the data that is needed for the client to function is an important best practice for API security. This is because limiting the amount of data that is returned reduces the amount of sensitive information that is exposed. By only returning the necessary data, you can help prevent security vulnerabilities such as data leakage, injection attacks, and other types of attacks that rely on exposing too much information. Additionally, reducing the amount of data returned can improve the performance of your API by reducing the amount of data that needs to be processed and transmitted.</p>";

				const frontmatter$46 = {};
				const file$46 = "/workspaces/developer-roadmap/src/data/best-practices/api-security/content/avoid-sensitive-data.md";
				const url$46 = undefined;
				function rawContent$46() {
					return "# Avoid Returning Sensitive Data\n\n> Only return the data that is needed for the client to function.\n\nReturning only the data that is needed for the client to function is an important best practice for API security. This is because limiting the amount of data that is returned reduces the amount of sensitive information that is exposed. By only returning the necessary data, you can help prevent security vulnerabilities such as data leakage, injection attacks, and other types of attacks that rely on exposing too much information. Additionally, reducing the amount of data returned can improve the performance of your API by reducing the amount of data that needs to be processed and transmitted.\n";
				}
				function compiledContent$46() {
					return html$46;
				}
				function getHeadings$46() {
					return [{"depth":1,"slug":"avoid-returning-sensitive-data","text":"Avoid Returning Sensitive Data"}];
				}

				const Content$46 = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter$46;
					content.file = file$46;
					content.url = url$46;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html$46)}`;
				});

const __vite_glob_0_6 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	Content: Content$46,
	compiledContent: compiledContent$46,
	default: Content$46,
	file: file$46,
	frontmatter: frontmatter$46,
	getHeadings: getHeadings$46,
	rawContent: rawContent$46,
	url: url$46
}, Symbol.toStringTag, { value: 'Module' }));

const html$45 = "<h1 id=\"use-cdn-for-uploads\">Use CDN for Uploads</h1>\n<blockquote>\n<p>Use CDN for file uploads</p>\n</blockquote>\n<p>Using a Content Delivery Network (CDN) for file uploads can make an API more secure by offloading the file upload traffic from the API server and reducing the risk of DDoS attacks.</p>";

				const frontmatter$45 = {};
				const file$45 = "/workspaces/developer-roadmap/src/data/best-practices/api-security/content/cdn-for-file-uploads.md";
				const url$45 = undefined;
				function rawContent$45() {
					return "# Use CDN for Uploads\n\n> Use CDN for file uploads\n\nUsing a Content Delivery Network (CDN) for file uploads can make an API more secure by offloading the file upload traffic from the API server and reducing the risk of DDoS attacks.\n";
				}
				function compiledContent$45() {
					return html$45;
				}
				function getHeadings$45() {
					return [{"depth":1,"slug":"use-cdn-for-uploads","text":"Use CDN for Uploads"}];
				}

				const Content$45 = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter$45;
					content.file = file$45;
					content.url = url$45;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html$45)}`;
				});

const __vite_glob_0_7 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	Content: Content$45,
	compiledContent: compiledContent$45,
	default: Content$45,
	file: file$45,
	frontmatter: frontmatter$45,
	getHeadings: getHeadings$45,
	rawContent: rawContent$45,
	url: url$45
}, Symbol.toStringTag, { value: 'Module' }));

const html$44 = "<h1 id=\"centralized-logins\">Centralized Logins</h1>\n<blockquote>\n<p>Use centralized logins for all services and components.</p>\n</blockquote>\n<p>Using centralized logins for all services and components is important for several reasons:</p>\n<ul>\n<li>\n<p>Centralized logins enable you to manage authentication and authorization in one place, reducing the risk of security gaps or inconsistencies across different services.</p>\n</li>\n<li>\n<p>Centralized logins provide a single point of entry, allowing you to control access and monitor activity more easily.</p>\n</li>\n<li>\n<p>Centralized logins make it easier to enforce security policies across different services and components, ensuring that only authorized users can access sensitive data or perform certain actions.</p>\n</li>\n</ul>\n<p>To use centralized logins, you need to set up a single sign-on (SSO) system that enables users to authenticate once and then access multiple services without having to provide credentials again. This can be done using protocols like OAuth or SAML, which enable secure authentication and authorization across different applications and services. Once set up, you can use centralized logging tools like ELK stack, Splunk, or Graylog to collect logs from different services and components and analyze them in one place. This enables you to quickly identify and respond to security threats or anomalies.</p>";

				const frontmatter$44 = {};
				const file$44 = "/workspaces/developer-roadmap/src/data/best-practices/api-security/content/centralized-logins.md";
				const url$44 = undefined;
				function rawContent$44() {
					return "# Centralized Logins\n\n> Use centralized logins for all services and components.\n\nUsing centralized logins for all services and components is important for several reasons:\n\n- Centralized logins enable you to manage authentication and authorization in one place, reducing the risk of security gaps or inconsistencies across different services.\n\n- Centralized logins provide a single point of entry, allowing you to control access and monitor activity more easily.\n\n- Centralized logins make it easier to enforce security policies across different services and components, ensuring that only authorized users can access sensitive data or perform certain actions.\n\nTo use centralized logins, you need to set up a single sign-on (SSO) system that enables users to authenticate once and then access multiple services without having to provide credentials again. This can be done using protocols like OAuth or SAML, which enable secure authentication and authorization across different applications and services. Once set up, you can use centralized logging tools like ELK stack, Splunk, or Graylog to collect logs from different services and components and analyze them in one place. This enables you to quickly identify and respond to security threats or anomalies.\n";
				}
				function compiledContent$44() {
					return html$44;
				}
				function getHeadings$44() {
					return [{"depth":1,"slug":"centralized-logins","text":"Centralized Logins"}];
				}

				const Content$44 = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter$44;
					content.file = file$44;
					content.url = url$44;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html$44)}`;
				});

const __vite_glob_0_8 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	Content: Content$44,
	compiledContent: compiledContent$44,
	default: Content$44,
	file: file$44,
	frontmatter: frontmatter$44,
	getHeadings: getHeadings$44,
	rawContent: rawContent$44,
	url: url$44
}, Symbol.toStringTag, { value: 'Module' }));

const html$43 = "<h1 id=\"dependencies\">Dependencies</h1>\n<blockquote>\n<p>Check your dependencies for known vulnerabilities and keep them up to date.</p>\n</blockquote>\n<p>Vulnerabilities in third-party libraries and components can be exploited by attackers to gain access to your system or data. These vulnerabilities can be introduced through outdated or insecure dependencies that have not been updated with the latest security patches.</p>\n<p>By regularly checking for vulnerabilities and keeping your dependencies up to date, you can ensure that your API is not susceptible to known security risks. This can be done by using automated tools or services that scan your codebase and provide reports on any vulnerabilities found in your dependencies. By addressing these vulnerabilities promptly, you can reduce the risk of your API being compromised by attackers.</p>";

				const frontmatter$43 = {};
				const file$43 = "/workspaces/developer-roadmap/src/data/best-practices/api-security/content/check-dependencies.md";
				const url$43 = undefined;
				function rawContent$43() {
					return "# Dependencies\n\n> Check your dependencies for known vulnerabilities and keep them up to date.\n\nVulnerabilities in third-party libraries and components can be exploited by attackers to gain access to your system or data. These vulnerabilities can be introduced through outdated or insecure dependencies that have not been updated with the latest security patches.\n\nBy regularly checking for vulnerabilities and keeping your dependencies up to date, you can ensure that your API is not susceptible to known security risks. This can be done by using automated tools or services that scan your codebase and provide reports on any vulnerabilities found in your dependencies. By addressing these vulnerabilities promptly, you can reduce the risk of your API being compromised by attackers.\n";
				}
				function compiledContent$43() {
					return html$43;
				}
				function getHeadings$43() {
					return [{"depth":1,"slug":"dependencies","text":"Dependencies"}];
				}

				const Content$43 = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter$43;
					content.file = file$43;
					content.url = url$43;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html$43)}`;
				});

const __vite_glob_0_9 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	Content: Content$43,
	compiledContent: compiledContent$43,
	default: Content$43,
	file: file$43,
	frontmatter: frontmatter$43,
	getHeadings: getHeadings$43,
	rawContent: rawContent$43,
	url: url$43
}, Symbol.toStringTag, { value: 'Module' }));

const html$42 = "<h1 id=\"code-review-process\">Code Review Process</h1>\n<blockquote>\n<p>Use a code review process and disregard self-approval.</p>\n</blockquote>\n<p>Having a good code review process allows for additional sets of eyes to review the code and identify potential security issues or vulnerabilities. A code review process involves other team members reviewing the code to ensure it follows best practices and is secure. Disregarding self-approval means that the developer who wrote the code should not be the only one responsible for approving it for release. This helps to catch potential mistakes or oversights before the code is deployed, reducing the risk of security breaches or other issues.</p>";

				const frontmatter$42 = {};
				const file$42 = "/workspaces/developer-roadmap/src/data/best-practices/api-security/content/code-review-process.md";
				const url$42 = undefined;
				function rawContent$42() {
					return "# Code Review Process\n\n> Use a code review process and disregard self-approval.\n\nHaving a good code review process allows for additional sets of eyes to review the code and identify potential security issues or vulnerabilities. A code review process involves other team members reviewing the code to ensure it follows best practices and is secure. Disregarding self-approval means that the developer who wrote the code should not be the only one responsible for approving it for release. This helps to catch potential mistakes or oversights before the code is deployed, reducing the risk of security breaches or other issues.\n";
				}
				function compiledContent$42() {
					return html$42;
				}
				function getHeadings$42() {
					return [{"depth":1,"slug":"code-review-process","text":"Code Review Process"}];
				}

				const Content$42 = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter$42;
					content.file = file$42;
					content.url = url$42;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html$42)}`;
				});

const __vite_glob_0_10 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	Content: Content$42,
	compiledContent: compiledContent$42,
	default: Content$42,
	file: file$42,
	frontmatter: frontmatter$42,
	getHeadings: getHeadings$42,
	rawContent: rawContent$42,
	url: url$42
}, Symbol.toStringTag, { value: 'Module' }));

const html$41 = "<h1 id=\"content-security-policy\">Content Security Policy</h1>\n<blockquote>\n<p>Send <code>Content-Security-Policy: default-src 'none'</code> header.</p>\n</blockquote>\n<p>Sending the <code>Content-Security-Policy: default-src 'none'</code> header is a security best practice that helps prevent cross-site scripting (XSS) attacks. This header tells the browser to not allow any resources to be loaded from external sources, such as scripts, stylesheets, or images. It only allows resources that are explicitly whitelisted in the CSP header, such as scripts or stylesheets hosted on your own domain. This can help prevent malicious actors from injecting code into your web pages via XSS attacks, as the browser will not execute any scripts or load any resources that are not explicitly allowed by the CSP policy.</p>";

				const frontmatter$41 = {};
				const file$41 = "/workspaces/developer-roadmap/src/data/best-practices/api-security/content/csp-header.md";
				const url$41 = undefined;
				function rawContent$41() {
					return "# Content Security Policy\n\n> Send `Content-Security-Policy: default-src 'none'` header.\n\nSending the `Content-Security-Policy: default-src 'none'` header is a security best practice that helps prevent cross-site scripting (XSS) attacks. This header tells the browser to not allow any resources to be loaded from external sources, such as scripts, stylesheets, or images. It only allows resources that are explicitly whitelisted in the CSP header, such as scripts or stylesheets hosted on your own domain. This can help prevent malicious actors from injecting code into your web pages via XSS attacks, as the browser will not execute any scripts or load any resources that are not explicitly allowed by the CSP policy.\n";
				}
				function compiledContent$41() {
					return html$41;
				}
				function getHeadings$41() {
					return [{"depth":1,"slug":"content-security-policy","text":"Content Security Policy"}];
				}

				const Content$41 = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter$41;
					content.file = file$41;
					content.url = url$41;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html$41)}`;
				});

const __vite_glob_0_11 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	Content: Content$41,
	compiledContent: compiledContent$41,
	default: Content$41,
	file: file$41,
	frontmatter: frontmatter$41,
	getHeadings: getHeadings$41,
	rawContent: rawContent$41,
	url: url$41
}, Symbol.toStringTag, { value: 'Module' }));

const html$40 = "<h1 id=\"turn-debug-mode-off\">Turn Debug Mode Off</h1>\n<blockquote>\n<p>Make sure to turn the debug mode off in production</p>\n</blockquote>\n<p>Debug mode is a feature that is used to help developers debug their code. It is not meant to be used in production. It can expose sensitive information about the application and the server it is running on. Make sure to turn debug mode off in production.</p>";

				const frontmatter$40 = {};
				const file$40 = "/workspaces/developer-roadmap/src/data/best-practices/api-security/content/debug-mode-off.md";
				const url$40 = undefined;
				function rawContent$40() {
					return "# Turn Debug Mode Off\n\n> Make sure to turn the debug mode off in production\n\nDebug mode is a feature that is used to help developers debug their code. It is not meant to be used in production. It can expose sensitive information about the application and the server it is running on. Make sure to turn debug mode off in production.\n";
				}
				function compiledContent$40() {
					return html$40;
				}
				function getHeadings$40() {
					return [{"depth":1,"slug":"turn-debug-mode-off","text":"Turn Debug Mode Off"}];
				}

				const Content$40 = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter$40;
					content.file = file$40;
					content.url = url$40;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html$40)}`;
				});

const __vite_glob_0_12 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	Content: Content$40,
	compiledContent: compiledContent$40,
	default: Content$40,
	file: file$40,
	frontmatter: frontmatter$40,
	getHeadings: getHeadings$40,
	rawContent: rawContent$40,
	url: url$40
}, Symbol.toStringTag, { value: 'Module' }));

const html$3$ = "<h1 id=\"directory-listings\">Directory Listings</h1>\n<blockquote>\n<p>Turn off directory listings</p>\n</blockquote>\n<p>Directory listings are a feature of web servers that allow users to view the contents of a directory on a server. By default, web servers often have directory listings enabled, which means that anyone who has access to the server can see all the files and directories in a given folder.</p>\n<p>Turning off directory listings is important for API security because it prevents attackers from gaining access to sensitive files and directories on the server. If directory listings are enabled and an attacker gains access to the server, they can easily view and download any files that are not properly protected. By disabling directory listings, you can ensure that only authorized users can access the files and directories on the server.</p>";

				const frontmatter$3$ = {};
				const file$3$ = "/workspaces/developer-roadmap/src/data/best-practices/api-security/content/directory-listings.md";
				const url$3$ = undefined;
				function rawContent$3$() {
					return "# Directory Listings\n\n> Turn off directory listings\n\nDirectory listings are a feature of web servers that allow users to view the contents of a directory on a server. By default, web servers often have directory listings enabled, which means that anyone who has access to the server can see all the files and directories in a given folder.\n\nTurning off directory listings is important for API security because it prevents attackers from gaining access to sensitive files and directories on the server. If directory listings are enabled and an attacker gains access to the server, they can easily view and download any files that are not properly protected. By disabling directory listings, you can ensure that only authorized users can access the files and directories on the server.\n";
				}
				function compiledContent$3$() {
					return html$3$;
				}
				function getHeadings$3$() {
					return [{"depth":1,"slug":"directory-listings","text":"Directory Listings"}];
				}

				const Content$3$ = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter$3$;
					content.file = file$3$;
					content.url = url$3$;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html$3$)}`;
				});

const __vite_glob_0_13 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	Content: Content$3$,
	compiledContent: compiledContent$3$,
	default: Content$3$,
	file: file$3$,
	frontmatter: frontmatter$3$,
	getHeadings: getHeadings$3$,
	rawContent: rawContent$3$,
	url: url$3$
}, Symbol.toStringTag, { value: 'Module' }));

const html$3_ = "<h1 id=\"disable-entity-expansion\">Disable Entity Expansion</h1>\n<blockquote>\n<p>Disable entity expansion if using XML, YML or any other language</p>\n</blockquote>\n<p>Disabling entity expansion is important when using XML, YAML, or any other language that allows entities because it helps prevent XXE (XML External Entity) or YAML tag injection attacks. In these attacks, attacker normally injects some sort of custom code in the input to perform attacks against the application.. By disabling entity expansion, the input cannot be manipulated in this way, reducing the risk of such attacks.</p>";

				const frontmatter$3_ = {};
				const file$3_ = "/workspaces/developer-roadmap/src/data/best-practices/api-security/content/disable-entity-expansion.md";
				const url$3_ = undefined;
				function rawContent$3_() {
					return "# Disable Entity Expansion\n\n> Disable entity expansion if using XML, YML or any other language\n\nDisabling entity expansion is important when using XML, YAML, or any other language that allows entities because it helps prevent XXE (XML External Entity) or YAML tag injection attacks. In these attacks, attacker normally injects some sort of custom code in the input to perform attacks against the application.. By disabling entity expansion, the input cannot be manipulated in this way, reducing the risk of such attacks.\n";
				}
				function compiledContent$3_() {
					return html$3_;
				}
				function getHeadings$3_() {
					return [{"depth":1,"slug":"disable-entity-expansion","text":"Disable Entity Expansion"}];
				}

				const Content$3_ = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter$3_;
					content.file = file$3_;
					content.url = url$3_;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html$3_)}`;
				});

const __vite_glob_0_14 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	Content: Content$3_,
	compiledContent: compiledContent$3_,
	default: Content$3_,
	file: file$3_,
	frontmatter: frontmatter$3_,
	getHeadings: getHeadings$3_,
	rawContent: rawContent$3_,
	url: url$3_
}, Symbol.toStringTag, { value: 'Module' }));

const html$3Z = "<h1 id=\"disable-entity-parsing-in-xml\">Disable Entity Parsing in XML</h1>\n<blockquote>\n<p>Disable entity parsing if you are parsing XML to avoid XXE attacks</p>\n</blockquote>\n<p>If the XML parser is vulnerable to XXE attacks, the attacker can use this vulnerability to read files on the server, perform SSRF attacks, and more. This can lead to the disclosure of sensitive information, denial of service, and other attacks.</p>\n<p>XXE (XML External Entity) attack is a type of attack that targets applications that parse XML input from untrusted sources. In this attack, an attacker injects a malicious XML payload. This payload can contain external entities that the attacker can use to retrieve sensitive data, execute remote code, or launch denial of service attacks. XXE attacks can be prevented by disabling external entity processing or by validating and sanitizing the XML input before parsing it.</p>";

				const frontmatter$3Z = {};
				const file$3Z = "/workspaces/developer-roadmap/src/data/best-practices/api-security/content/disable-entity-parsing-xml.md";
				const url$3Z = undefined;
				function rawContent$3Z() {
					return "# Disable Entity Parsing in XML\n\n> Disable entity parsing if you are parsing XML to avoid XXE attacks\n\nIf the XML parser is vulnerable to XXE attacks, the attacker can use this vulnerability to read files on the server, perform SSRF attacks, and more. This can lead to the disclosure of sensitive information, denial of service, and other attacks.\n\nXXE (XML External Entity) attack is a type of attack that targets applications that parse XML input from untrusted sources. In this attack, an attacker injects a malicious XML payload. This payload can contain external entities that the attacker can use to retrieve sensitive data, execute remote code, or launch denial of service attacks. XXE attacks can be prevented by disabling external entity processing or by validating and sanitizing the XML input before parsing it.\n";
				}
				function compiledContent$3Z() {
					return html$3Z;
				}
				function getHeadings$3Z() {
					return [{"depth":1,"slug":"disable-entity-parsing-in-xml","text":"Disable Entity Parsing in XML"}];
				}

				const Content$3Z = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter$3Z;
					content.file = file$3Z;
					content.url = url$3Z;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html$3Z)}`;
				});

const __vite_glob_0_15 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	Content: Content$3Z,
	compiledContent: compiledContent$3Z,
	default: Content$3Z,
	file: file$3Z,
	frontmatter: frontmatter$3Z,
	getHeadings: getHeadings$3Z,
	rawContent: rawContent$3Z,
	url: url$3Z
}, Symbol.toStringTag, { value: 'Module' }));

const html$3Y = "<h1 id=\"endpoint-authentication\">Endpoint Authentication</h1>\n<blockquote>\n<p>Check if all the protected endpoints are behind authentication\nto avoid broken authentication process</p>\n</blockquote>\n<p>By identifying and fixing broken authentication workflows, the API can prevent attacks such as brute force attacks, credential stuffing, session hijacking, and other authentication-related attacks. This can help ensure that the system is secure and that sensitive data is protected.</p>";

				const frontmatter$3Y = {};
				const file$3Y = "/workspaces/developer-roadmap/src/data/best-practices/api-security/content/endpoint-authentication.md";
				const url$3Y = undefined;
				function rawContent$3Y() {
					return "# Endpoint Authentication\n\n> Check if all the protected endpoints are behind authentication\n> to avoid broken authentication process\n\nBy identifying and fixing broken authentication workflows, the API can prevent attacks such as brute force attacks, credential stuffing, session hijacking, and other authentication-related attacks. This can help ensure that the system is secure and that sensitive data is protected.\n";
				}
				function compiledContent$3Y() {
					return html$3Y;
				}
				function getHeadings$3Y() {
					return [{"depth":1,"slug":"endpoint-authentication","text":"Endpoint Authentication"}];
				}

				const Content$3Y = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter$3Y;
					content.file = file$3Y;
					content.url = url$3Y;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html$3Y)}`;
				});

const __vite_glob_0_16 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	Content: Content$3Y,
	compiledContent: compiledContent$3Y,
	default: Content$3Y,
	file: file$3Y,
	frontmatter: frontmatter$3Y,
	getHeadings: getHeadings$3Y,
	rawContent: rawContent$3Y,
	url: url$3Y
}, Symbol.toStringTag, { value: 'Module' }));

const html$3X = "<h1 id=\"force-content-type\">Force Content-Type</h1>\n<blockquote>\n<p>Always force the <code>Content-Type</code> header to be set to relevant MIME type.</p>\n</blockquote>\n<p>Forcing the content-type for API security is important because it ensures that the client and server are communicating in a mutually agreed-upon format for the data being transmitted. This can prevent attacks such as content spoofing or injection, where an attacker tries to trick the server into processing malicious content by pretending that it is of a different content type. By forcing the content-type to a specific format, the server can validate that the data it is receiving is legitimate and safe to process. Additionally, forcing the content-type can help prevent certain types of parsing errors that could be exploited by attackers.</p>";

				const frontmatter$3X = {};
				const file$3X = "/workspaces/developer-roadmap/src/data/best-practices/api-security/content/force-content-type.md";
				const url$3X = undefined;
				function rawContent$3X() {
					return "# Force Content-Type\n\n> Always force the `Content-Type` header to be set to relevant MIME type.\n\nForcing the content-type for API security is important because it ensures that the client and server are communicating in a mutually agreed-upon format for the data being transmitted. This can prevent attacks such as content spoofing or injection, where an attacker tries to trick the server into processing malicious content by pretending that it is of a different content type. By forcing the content-type to a specific format, the server can validate that the data it is receiving is legitimate and safe to process. Additionally, forcing the content-type can help prevent certain types of parsing errors that could be exploited by attackers.\n";
				}
				function compiledContent$3X() {
					return html$3X;
				}
				function getHeadings$3X() {
					return [{"depth":1,"slug":"force-content-type","text":"Force Content-Type"}];
				}

				const Content$3X = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter$3X;
					content.file = file$3X;
					content.url = url$3X;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html$3X)}`;
				});

const __vite_glob_0_17 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	Content: Content$3X,
	compiledContent: compiledContent$3X,
	default: Content$3X,
	file: file$3X,
	frontmatter: frontmatter$3X,
	getHeadings: getHeadings$3X,
	rawContent: rawContent$3X,
	url: url$3X
}, Symbol.toStringTag, { value: 'Module' }));

const html$3W = "<h1 id=\"jwt-secret\">JWT Secret</h1>\n<blockquote>\n<p>You should have a good JWT secret to protect against token tempering as well as avoiding brute force attacks.</p>\n</blockquote>\n<p>A strong secret key should be randomly generated, long, and complex, and should be stored securely and rotated periodically.</p>";

				const frontmatter$3W = {};
				const file$3W = "/workspaces/developer-roadmap/src/data/best-practices/api-security/content/good-jwt-secret.md";
				const url$3W = undefined;
				function rawContent$3W() {
					return "# JWT Secret\n\n> You should have a good JWT secret to protect against token tempering as well as avoiding brute force attacks.\n\nA strong secret key should be randomly generated, long, and complex, and should be stored securely and rotated periodically.\n";
				}
				function compiledContent$3W() {
					return html$3W;
				}
				function getHeadings$3W() {
					return [{"depth":1,"slug":"jwt-secret","text":"JWT Secret"}];
				}

				const Content$3W = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter$3W;
					content.file = file$3W;
					content.url = url$3W;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html$3W)}`;
				});

const __vite_glob_0_18 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	Content: Content$3W,
	compiledContent: compiledContent$3W,
	default: Content$3W,
	file: file$3W,
	frontmatter: frontmatter$3W,
	getHeadings: getHeadings$3W,
	rawContent: rawContent$3W,
	url: url$3W
}, Symbol.toStringTag, { value: 'Module' }));

const html$3V = "<h1 id=\"hsts-header\">HSTS Header</h1>\n<blockquote>\n<p>Use HSTS header with SSL to avoid SSL Strip attacks.</p>\n</blockquote>\n<p>SSL strip is a type of attack where an attacker intercepts traffic between a client and a server that is meant to be secured by SSL/TLS encryption, and downgrades the connection to a plain text (non-encrypted) HTTP connection. This type of attack can go unnoticed by the user because the attacker is able to redirect the user to a look-alike website that also uses HTTP instead of HTTPS.</p>\n<p>In an SSL strip attack, the attacker sets up a man-in-the-middle (MITM) position between the client and the server. When the client initiates a connection with the server, the attacker intercepts the SSL/TLS traffic and removes or replaces the HTTPS links with HTTP links. This can trick the user into thinking they are using a secure connection when in fact, they are not. The attacker can then monitor and manipulate the data transmitted between the client and server.</p>\n<p>HSTS header is a security header that instructs browsers to only access the site over HTTPS. This header is used to prevent SSL Strip attacks. It is a good practice to use HSTS header with SSL.</p>";

				const frontmatter$3V = {};
				const file$3V = "/workspaces/developer-roadmap/src/data/best-practices/api-security/content/hsts-header.md";
				const url$3V = undefined;
				function rawContent$3V() {
					return "# HSTS Header\n\n> Use HSTS header with SSL to avoid SSL Strip attacks.\n\nSSL strip is a type of attack where an attacker intercepts traffic between a client and a server that is meant to be secured by SSL/TLS encryption, and downgrades the connection to a plain text (non-encrypted) HTTP connection. This type of attack can go unnoticed by the user because the attacker is able to redirect the user to a look-alike website that also uses HTTP instead of HTTPS.\n\nIn an SSL strip attack, the attacker sets up a man-in-the-middle (MITM) position between the client and the server. When the client initiates a connection with the server, the attacker intercepts the SSL/TLS traffic and removes or replaces the HTTPS links with HTTP links. This can trick the user into thinking they are using a secure connection when in fact, they are not. The attacker can then monitor and manipulate the data transmitted between the client and server.\n\nHSTS header is a security header that instructs browsers to only access the site over HTTPS. This header is used to prevent SSL Strip attacks. It is a good practice to use HSTS header with SSL.\n";
				}
				function compiledContent$3V() {
					return html$3V;
				}
				function getHeadings$3V() {
					return [{"depth":1,"slug":"hsts-header","text":"HSTS Header"}];
				}

				const Content$3V = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter$3V;
					content.file = file$3V;
					content.url = url$3V;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html$3V)}`;
				});

const __vite_glob_0_19 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	Content: Content$3V,
	compiledContent: compiledContent$3V,
	default: Content$3V,
	file: file$3V,
	frontmatter: frontmatter$3V,
	getHeadings: getHeadings$3V,
	rawContent: rawContent$3V,
	url: url$3V
}, Symbol.toStringTag, { value: 'Module' }));

const html$3U = "<h1 id=\"\"></h1>";

				const frontmatter$3U = {};
				const file$3U = "/workspaces/developer-roadmap/src/data/best-practices/api-security/content/index.md";
				const url$3U = undefined;
				function rawContent$3U() {
					return "#\n";
				}
				function compiledContent$3U() {
					return html$3U;
				}
				function getHeadings$3U() {
					return [{"depth":1,"slug":"","text":""}];
				}

				const Content$3U = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter$3U;
					content.file = file$3U;
					content.url = url$3U;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html$3U)}`;
				});

const __vite_glob_0_20 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	Content: Content$3U,
	compiledContent: compiledContent$3U,
	default: Content$3U,
	file: file$3U,
	frontmatter: frontmatter$3U,
	getHeadings: getHeadings$3U,
	rawContent: rawContent$3U,
	url: url$3U
}, Symbol.toStringTag, { value: 'Module' }));

const html$3T = "<h1 id=\"jwt-algorithm\">JWT Algorithm</h1>\n<blockquote>\n<p>Do not extract the algorithm from the header, use backend.</p>\n</blockquote>\n<p>Extracting the algorithm from the header of a JWT token can pose a security risk, as an attacker could modify the algorithm and potentially gain unauthorized access. It is therefore recommended to verify the algorithm on the backend rather than extracting it from the header. This can help ensure that the algorithm used to sign and verify the token is secure and has not been tampered with.</p>";

				const frontmatter$3T = {};
				const file$3T = "/workspaces/developer-roadmap/src/data/best-practices/api-security/content/jwt-algorithm.md";
				const url$3T = undefined;
				function rawContent$3T() {
					return "# JWT Algorithm\n\n> Do not extract the algorithm from the header, use backend.\n\nExtracting the algorithm from the header of a JWT token can pose a security risk, as an attacker could modify the algorithm and potentially gain unauthorized access. It is therefore recommended to verify the algorithm on the backend rather than extracting it from the header. This can help ensure that the algorithm used to sign and verify the token is secure and has not been tampered with.\n";
				}
				function compiledContent$3T() {
					return html$3T;
				}
				function getHeadings$3T() {
					return [{"depth":1,"slug":"jwt-algorithm","text":"JWT Algorithm"}];
				}

				const Content$3T = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter$3T;
					content.file = file$3T;
					content.url = url$3T;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html$3T)}`;
				});

const __vite_glob_0_21 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	Content: Content$3T,
	compiledContent: compiledContent$3T,
	default: Content$3T,
	file: file$3T,
	frontmatter: frontmatter$3T,
	getHeadings: getHeadings$3T,
	rawContent: rawContent$3T,
	url: url$3T
}, Symbol.toStringTag, { value: 'Module' }));

const html$3S = "<h1 id=\"jwt-payload\">Jwt Payload</h1>\n<blockquote>\n<p>Avoid storing sensitive data in JWT payload</p>\n</blockquote>\n<p>Storing sensitive data in a JWT token payload can increase the risk of data breaches and other security incidents. If an attacker is able to obtain or tamper with the token, they could potentially access the sensitive data stored in the payload.</p>";

				const frontmatter$3S = {};
				const file$3S = "/workspaces/developer-roadmap/src/data/best-practices/api-security/content/jwt-payload.md";
				const url$3S = undefined;
				function rawContent$3S() {
					return "# Jwt Payload\n\n> Avoid storing sensitive data in JWT payload\n\nStoring sensitive data in a JWT token payload can increase the risk of data breaches and other security incidents. If an attacker is able to obtain or tamper with the token, they could potentially access the sensitive data stored in the payload.\n";
				}
				function compiledContent$3S() {
					return html$3S;
				}
				function getHeadings$3S() {
					return [{"depth":1,"slug":"jwt-payload","text":"Jwt Payload"}];
				}

				const Content$3S = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter$3S;
					content.file = file$3S;
					content.url = url$3S;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html$3S)}`;
				});

const __vite_glob_0_22 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	Content: Content$3S,
	compiledContent: compiledContent$3S,
	default: Content$3S,
	file: file$3S,
	frontmatter: frontmatter$3S,
	getHeadings: getHeadings$3S,
	rawContent: rawContent$3S,
	url: url$3S
}, Symbol.toStringTag, { value: 'Module' }));

const html$3R = "<h1 id=\"max-retryjail-in-login\">Max Retry/Jail in Login</h1>\n<blockquote>\n<p>”Max Retry” and “jail” features are commonly used in login mechanisms to enhance security and prevent brute-force attacks.</p>\n</blockquote>\n<p><strong>Max Retry:</strong> The “Max Retry” feature limits the number of login attempts that a user can make within a specified time period. After a certain number of failed login attempts, the user is locked out of their account for a specified period of time, typically several minutes or hours. This helps to prevent brute-force attacks, where an attacker attempts to guess a user’s password by making repeated login attempts. By limiting the number of attempts, the system can slow down or prevent such attacks.</p>\n<p><strong>Jail:</strong> The “jail” feature involves blocking IP addresses or user accounts that have exceeded the maximum number of failed login attempts within a certain time period. The blocked IP addresses or user accounts are prevented from attempting further logins for a specified period of time, typically several minutes or hours. This helps to prevent brute-force attacks, and also provides a mechanism to prevent malicious users from repeatedly attempting to access an account or system.</p>";

				const frontmatter$3R = {};
				const file$3R = "/workspaces/developer-roadmap/src/data/best-practices/api-security/content/max-retry-jail.md";
				const url$3R = undefined;
				function rawContent$3R() {
					return "# Max Retry/Jail in Login\n\n> \"Max Retry\" and \"jail\" features are commonly used in login mechanisms to enhance security and prevent brute-force attacks.\n\n**Max Retry:** The \"Max Retry\" feature limits the number of login attempts that a user can make within a specified time period. After a certain number of failed login attempts, the user is locked out of their account for a specified period of time, typically several minutes or hours. This helps to prevent brute-force attacks, where an attacker attempts to guess a user's password by making repeated login attempts. By limiting the number of attempts, the system can slow down or prevent such attacks.\n\n**Jail:** The \"jail\" feature involves blocking IP addresses or user accounts that have exceeded the maximum number of failed login attempts within a certain time period. The blocked IP addresses or user accounts are prevented from attempting further logins for a specified period of time, typically several minutes or hours. This helps to prevent brute-force attacks, and also provides a mechanism to prevent malicious users from repeatedly attempting to access an account or system.\n";
				}
				function compiledContent$3R() {
					return html$3R;
				}
				function getHeadings$3R() {
					return [{"depth":1,"slug":"max-retryjail-in-login","text":"Max Retry/Jail in Login"}];
				}

				const Content$3R = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter$3R;
					content.file = file$3R;
					content.url = url$3R;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html$3R)}`;
				});

const __vite_glob_0_23 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	Content: Content$3R,
	compiledContent: compiledContent$3R,
	default: Content$3R,
	file: file$3R,
	frontmatter: frontmatter$3R,
	getHeadings: getHeadings$3R,
	rawContent: rawContent$3R,
	url: url$3R
}, Symbol.toStringTag, { value: 'Module' }));

const html$3Q = "<h1 id=\"monitor-everything\">Monitor Everything</h1>\n<blockquote>\n<p>Use agents to monitor all requests, responses and errors.</p>\n</blockquote>\n<p>Using agents to monitor all requests, responses, and errors allows for real-time monitoring and detection of any abnormal activity or potential attacks. These agents can be configured to track metrics such as response times, error rates, and usage patterns, which can help identify any anomalies that could be indicative of an attack. By monitoring all requests and responses, the agents can provide visibility into the behavior of the API, which can help identify any potential security vulnerabilities or weaknesses. Additionally, agents can be used to log and analyze all data flowing through the API, which can be useful for debugging and auditing purposes.</p>\n<p>To use agents for monitoring, a dedicated monitoring solution can be deployed alongside the API. This solution can be configured to capture data from all requests and responses, and analyze the data for any anomalies or issues. Agents can be implemented using various monitoring tools and technologies such as agents for application performance monitoring (APM), log monitoring, and network monitoring. The agents should be configured to provide real-time alerts to security teams if any suspicious activity is detected, allowing for immediate action to be taken.</p>";

				const frontmatter$3Q = {};
				const file$3Q = "/workspaces/developer-roadmap/src/data/best-practices/api-security/content/monitor-everything.md";
				const url$3Q = undefined;
				function rawContent$3Q() {
					return "# Monitor Everything\n\n> Use agents to monitor all requests, responses and errors.\n\nUsing agents to monitor all requests, responses, and errors allows for real-time monitoring and detection of any abnormal activity or potential attacks. These agents can be configured to track metrics such as response times, error rates, and usage patterns, which can help identify any anomalies that could be indicative of an attack. By monitoring all requests and responses, the agents can provide visibility into the behavior of the API, which can help identify any potential security vulnerabilities or weaknesses. Additionally, agents can be used to log and analyze all data flowing through the API, which can be useful for debugging and auditing purposes.\n\nTo use agents for monitoring, a dedicated monitoring solution can be deployed alongside the API. This solution can be configured to capture data from all requests and responses, and analyze the data for any anomalies or issues. Agents can be implemented using various monitoring tools and technologies such as agents for application performance monitoring (APM), log monitoring, and network monitoring. The agents should be configured to provide real-time alerts to security teams if any suspicious activity is detected, allowing for immediate action to be taken.\n";
				}
				function compiledContent$3Q() {
					return html$3Q;
				}
				function getHeadings$3Q() {
					return [{"depth":1,"slug":"monitor-everything","text":"Monitor Everything"}];
				}

				const Content$3Q = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter$3Q;
					content.file = file$3Q;
					content.url = url$3Q;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html$3Q)}`;
				});

const __vite_glob_0_24 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	Content: Content$3Q,
	compiledContent: compiledContent$3Q,
	default: Content$3Q,
	file: file$3Q,
	frontmatter: frontmatter$3Q,
	getHeadings: getHeadings$3Q,
	rawContent: rawContent$3Q,
	url: url$3Q
}, Symbol.toStringTag, { value: 'Module' }));

const html$3P = "<h1 id=\"x-content-type-options-nosniff\">X-Content-Type-Options: nosniff</h1>\n<blockquote>\n<p>Send <code>X-Content-Type-Options: nosniff</code> header.</p>\n</blockquote>\n<p>You should send the <code>X-Content-Type-Options: nosniff</code> header to prevent <a href=\"https://www.keycdn.com/support/what-is-mime-sniffing\" rel=\"noopener noreferrer nofollow\" target=\"_blank\">MIME type sniffing attacks</a> on your web application. This header tells the browser not to override the response content type even if it’s not the expected type. For example, if an attacker manages to upload an HTML file with a disguised extension like .jpg, the server may still send the correct content type header for the HTML file. However, some browsers may ignore this header and try to “sniff” the content type based on the actual contents of the file, leading to a potential cross-site scripting (XSS) attack.</p>\n<p>By sending the <code>X-Content-Type-Options: nosniff</code> header, you tell the browser to always trust the provided content type and not try to sniff the content type. This helps to mitigate the risk of attackers exploiting content type mismatches to deliver malicious content to unsuspecting users.</p>";

				const frontmatter$3P = {};
				const file$3P = "/workspaces/developer-roadmap/src/data/best-practices/api-security/content/no-sniff-header.md";
				const url$3P = undefined;
				function rawContent$3P() {
					return "# X-Content-Type-Options: nosniff\n\n> Send `X-Content-Type-Options: nosniff` header.\n\nYou should send the `X-Content-Type-Options: nosniff` header to prevent [MIME type sniffing attacks](https://www.keycdn.com/support/what-is-mime-sniffing) on your web application. This header tells the browser not to override the response content type even if it's not the expected type. For example, if an attacker manages to upload an HTML file with a disguised extension like .jpg, the server may still send the correct content type header for the HTML file. However, some browsers may ignore this header and try to \"sniff\" the content type based on the actual contents of the file, leading to a potential cross-site scripting (XSS) attack.\n\nBy sending the `X-Content-Type-Options: nosniff` header, you tell the browser to always trust the provided content type and not try to sniff the content type. This helps to mitigate the risk of attackers exploiting content type mismatches to deliver malicious content to unsuspecting users.\n";
				}
				function compiledContent$3P() {
					return html$3P;
				}
				function getHeadings$3P() {
					return [{"depth":1,"slug":"x-content-type-options-nosniff","text":"X-Content-Type-Options: nosniff"}];
				}

				const Content$3P = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter$3P;
					content.file = file$3P;
					content.url = url$3P;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html$3P)}`;
				});

const __vite_glob_0_25 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	Content: Content$3P,
	compiledContent: compiledContent$3P,
	default: Content$3P,
	file: file$3P,
	frontmatter: frontmatter$3P,
	getHeadings: getHeadings$3P,
	rawContent: rawContent$3P,
	url: url$3P
}, Symbol.toStringTag, { value: 'Module' }));

const html$3O = "<h1 id=\"non-executable-stacks\">Non-Executable Stacks</h1>\n<blockquote>\n<p>Use non-executable stacks to prevent attackers from executing code on your server.</p>\n</blockquote>\n<p>A stack usually refers to the call stack or execution stack. It is a data structure used by the computer program to manage and keep track of the sequence of function calls, local variables, and other related data during the execution of the program.</p>\n<p>A non-executable stack is a security mechanism that prevents malicious code from being executed by preventing the stack memory from being executed as code. This helps to prevent attacks such as buffer overflow attacks, where an attacker tries to overwrite the return address on the stack to redirect the program to execute malicious code. By using non-executable stacks, the program can keep the stack separate from executable code and help prevent these types of attacks.</p>";

				const frontmatter$3O = {};
				const file$3O = "/workspaces/developer-roadmap/src/data/best-practices/api-security/content/non-executable-stacks.md";
				const url$3O = undefined;
				function rawContent$3O() {
					return "# Non-Executable Stacks\n\n> Use non-executable stacks to prevent attackers from executing code on your server.\n\nA stack usually refers to the call stack or execution stack. It is a data structure used by the computer program to manage and keep track of the sequence of function calls, local variables, and other related data during the execution of the program.\n\nA non-executable stack is a security mechanism that prevents malicious code from being executed by preventing the stack memory from being executed as code. This helps to prevent attacks such as buffer overflow attacks, where an attacker tries to overwrite the return address on the stack to redirect the program to execute malicious code. By using non-executable stacks, the program can keep the stack separate from executable code and help prevent these types of attacks.\n";
				}
				function compiledContent$3O() {
					return html$3O;
				}
				function getHeadings$3O() {
					return [{"depth":1,"slug":"non-executable-stacks","text":"Non-Executable Stacks"}];
				}

				const Content$3O = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter$3O;
					content.file = file$3O;
					content.url = url$3O;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html$3O)}`;
				});

const __vite_glob_0_26 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	Content: Content$3O,
	compiledContent: compiledContent$3O,
	default: Content$3O,
	file: file$3O,
	frontmatter: frontmatter$3O,
	getHeadings: getHeadings$3O,
	rawContent: rawContent$3O,
	url: url$3O
}, Symbol.toStringTag, { value: 'Module' }));

const html$3N = "<h1 id=\"redirect_uri\">redirect_uri</h1>\n<blockquote>\n<p>Validate `redirect_uri’ on server-side to prevent open redirect attacks.</p>\n</blockquote>\n<p>In OAuth, <code>redirect_uri</code> is a parameter that specifies the URI (Uniform Resource Identifier) that the authorization server should redirect the user to after authentication is complete. The <code>redirect_uri</code> is often used in the OAuth flow to return an authorization code or access token to the client application.</p>\n<p>It is important to validate the <code>redirect_uri</code> on the server-side to prevent attacks such as open redirection attacks. In an open redirection attack, an attacker can modify the <code>redirect_uri</code> parameter to redirect the user to a malicious website. By validating the <code>redirect_uri</code> on the server-side, you can ensure that the redirect URI is a valid and authorized URI for the client application.</p>\n<p>Validating the <code>redirect_uri</code> on the server-side can also prevent other types of attacks such as phishing attacks or cross-site request forgery (CSRF) attacks. By verifying that the <code>redirect_uri</code> matches a predefined list of authorized URIs, you can ensure that the user is redirected to a trusted site after authentication is complete.</p>";

				const frontmatter$3N = {};
				const file$3N = "/workspaces/developer-roadmap/src/data/best-practices/api-security/content/oauth-redirect-ui.md";
				const url$3N = undefined;
				function rawContent$3N() {
					return "# redirect_uri\n\n> Validate `redirect_uri’ on server-side to prevent open redirect attacks.\n\nIn OAuth, `redirect_uri` is a parameter that specifies the URI (Uniform Resource Identifier) that the authorization server should redirect the user to after authentication is complete. The `redirect_uri` is often used in the OAuth flow to return an authorization code or access token to the client application.\n\nIt is important to validate the `redirect_uri` on the server-side to prevent attacks such as open redirection attacks. In an open redirection attack, an attacker can modify the `redirect_uri` parameter to redirect the user to a malicious website. By validating the `redirect_uri` on the server-side, you can ensure that the redirect URI is a valid and authorized URI for the client application.\n\nValidating the `redirect_uri` on the server-side can also prevent other types of attacks such as phishing attacks or cross-site request forgery (CSRF) attacks. By verifying that the `redirect_uri` matches a predefined list of authorized URIs, you can ensure that the user is redirected to a trusted site after authentication is complete.\n";
				}
				function compiledContent$3N() {
					return html$3N;
				}
				function getHeadings$3N() {
					return [{"depth":1,"slug":"redirect_uri","text":"redirect_uri"}];
				}

				const Content$3N = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter$3N;
					content.file = file$3N;
					content.url = url$3N;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html$3N)}`;
				});

const __vite_glob_0_27 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	Content: Content$3N,
	compiledContent: compiledContent$3N,
	default: Content$3N,
	file: file$3N,
	frontmatter: frontmatter$3N,
	getHeadings: getHeadings$3N,
	rawContent: rawContent$3N,
	url: url$3N
}, Symbol.toStringTag, { value: 'Module' }));

const html$3M = "<h1 id=\"use-state-param\">Use State Param</h1>\n<blockquote>\n<p>Use state parameter to avoid CSRF attacks</p>\n</blockquote>\n<p>In OAuth, the <code>state</code> parameter is used as a security measure to prevent CSRF (Cross-Site Request Forgery) attacks. CSRF attacks occur when a malicious website or script sends a request to a legitimate website on behalf of a user who is currently authenticated.</p>\n<p>To prevent CSRF attacks, the <code>state</code> parameter is used to store a unique value that is generated by the client application before initiating the authorization request. This value is included in the authorization request and then verified by the authorization server when the user is redirected back to the client application. If the <code>state</code> value in the authorization response matches the <code>state</code> value that was sent by the client application, the authorization is considered valid and the access token is returned to the client.</p>\n<p>By using the <code>state</code> parameter, you can help to prevent malicious actors from intercepting or modifying the authorization request in transit, as the unique <code>state</code> value is only known to the client application and the authorization server. This can help to ensure the integrity and security of the OAuth flow and protect against CSRF attacks.</p>";

				const frontmatter$3M = {};
				const file$3M = "/workspaces/developer-roadmap/src/data/best-practices/api-security/content/oauth-state.md";
				const url$3M = undefined;
				function rawContent$3M() {
					return "# Use State Param\n\n> Use state parameter to avoid CSRF attacks\n\nIn OAuth, the `state` parameter is used as a security measure to prevent CSRF (Cross-Site Request Forgery) attacks. CSRF attacks occur when a malicious website or script sends a request to a legitimate website on behalf of a user who is currently authenticated.\n\nTo prevent CSRF attacks, the `state` parameter is used to store a unique value that is generated by the client application before initiating the authorization request. This value is included in the authorization request and then verified by the authorization server when the user is redirected back to the client application. If the `state` value in the authorization response matches the `state` value that was sent by the client application, the authorization is considered valid and the access token is returned to the client.\n\nBy using the `state` parameter, you can help to prevent malicious actors from intercepting or modifying the authorization request in transit, as the unique `state` value is only known to the client application and the authorization server. This can help to ensure the integrity and security of the OAuth flow and protect against CSRF attacks.\n";
				}
				function compiledContent$3M() {
					return html$3M;
				}
				function getHeadings$3M() {
					return [{"depth":1,"slug":"use-state-param","text":"Use State Param"}];
				}

				const Content$3M = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter$3M;
					content.file = file$3M;
					content.url = url$3M;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html$3M)}`;
				});

const __vite_glob_0_28 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	Content: Content$3M,
	compiledContent: compiledContent$3M,
	default: Content$3M,
	file: file$3M,
	frontmatter: frontmatter$3M,
	getHeadings: getHeadings$3M,
	rawContent: rawContent$3M,
	url: url$3M
}, Symbol.toStringTag, { value: 'Module' }));

const html$3L = "<h1 id=\"validate-scope\">Validate Scope</h1>\n<blockquote>\n<p>Have default scope, and validate scope for each application</p>\n</blockquote>\n<p>In OAuth, scopes are used to specify the permissions and access levels that are granted to client applications when accessing protected resources on behalf of a user.</p>\n<p>The best practice of having a default scope and validating the scope for each application is important because it helps to ensure that client applications only have access to the resources that they require, and that users are only granting the necessary permissions to each application.</p>\n<p>The default scope is a set of permissions that are granted to all client applications by default, unless otherwise specified by the user. By having a default scope, you can ensure that all applications are subject to the same baseline security and access controls.</p>\n<p>In addition to having a default scope, it is also recommended to validate the scope for each application. This means that when a user grants access to an application, the server should check to ensure that the requested scope is valid and appropriate for that application. This can help to prevent malicious applications from requesting excessive permissions or unauthorized access to user data.</p>\n<p>By having a default scope and validating the scope for each application, you can help to ensure that the OAuth flow is secure and that client applications are only accessing the resources and permissions that they require.</p>";

				const frontmatter$3L = {};
				const file$3L = "/workspaces/developer-roadmap/src/data/best-practices/api-security/content/oauth-validate-scope.md";
				const url$3L = undefined;
				function rawContent$3L() {
					return "# Validate Scope\n\n> Have default scope, and validate scope for each application\n\nIn OAuth, scopes are used to specify the permissions and access levels that are granted to client applications when accessing protected resources on behalf of a user.\n\nThe best practice of having a default scope and validating the scope for each application is important because it helps to ensure that client applications only have access to the resources that they require, and that users are only granting the necessary permissions to each application.\n\nThe default scope is a set of permissions that are granted to all client applications by default, unless otherwise specified by the user. By having a default scope, you can ensure that all applications are subject to the same baseline security and access controls.\n\nIn addition to having a default scope, it is also recommended to validate the scope for each application. This means that when a user grants access to an application, the server should check to ensure that the requested scope is valid and appropriate for that application. This can help to prevent malicious applications from requesting excessive permissions or unauthorized access to user data.\n\nBy having a default scope and validating the scope for each application, you can help to ensure that the OAuth flow is secure and that client applications are only accessing the resources and permissions that they require.\n";
				}
				function compiledContent$3L() {
					return html$3L;
				}
				function getHeadings$3L() {
					return [{"depth":1,"slug":"validate-scope","text":"Validate Scope"}];
				}

				const Content$3L = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter$3L;
					content.file = file$3L;
					content.url = url$3L;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html$3L)}`;
				});

const __vite_glob_0_29 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	Content: Content$3L,
	compiledContent: compiledContent$3L,
	default: Content$3L,
	file: file$3L,
	frontmatter: frontmatter$3L,
	getHeadings: getHeadings$3L,
	rawContent: rawContent$3L,
	url: url$3L
}, Symbol.toStringTag, { value: 'Module' }));

const html$3K = "<h1 id=\"avoid-client-side-encryption\">Avoid Client-Side Encryption</h1>\n<blockquote>\n<p>Use server-side encryption instead of client-side encryption</p>\n</blockquote>\n<p>Client-side encryption is not recommended because client side codebase can be easily reverse engineered which can lead to the exposure of encryption algorithms.</p>";

				const frontmatter$3K = {};
				const file$3K = "/workspaces/developer-roadmap/src/data/best-practices/api-security/content/only-server-side-encryption.md";
				const url$3K = undefined;
				function rawContent$3K() {
					return "# Avoid Client-Side Encryption\n\n> Use server-side encryption instead of client-side encryption\n\nClient-side encryption is not recommended because client side codebase can be easily reverse engineered which can lead to the exposure of encryption algorithms.\n";
				}
				function compiledContent$3K() {
					return html$3K;
				}
				function getHeadings$3K() {
					return [{"depth":1,"slug":"avoid-client-side-encryption","text":"Avoid Client-Side Encryption"}];
				}

				const Content$3K = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter$3K;
					content.file = file$3K;
					content.url = url$3K;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html$3K)}`;
				});

const __vite_glob_0_30 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	Content: Content$3K,
	compiledContent: compiledContent$3K,
	default: Content$3K,
	file: file$3K,
	frontmatter: frontmatter$3K,
	getHeadings: getHeadings$3K,
	rawContent: rawContent$3K,
	url: url$3K
}, Symbol.toStringTag, { value: 'Module' }));

const html$3J = "<h1 id=\"jwt-payload-size\">JWT Payload Size</h1>\n<blockquote>\n<p>Avoid storing large payloads in JWT tokens</p>\n</blockquote>\n<p>A smaller payload can reduce network overhead, improve processing speed, and decrease the risk of attacks aimed at overloading the system.</p>";

				const frontmatter$3J = {};
				const file$3J = "/workspaces/developer-roadmap/src/data/best-practices/api-security/content/payload-size.md";
				const url$3J = undefined;
				function rawContent$3J() {
					return "# JWT Payload Size\n\n> Avoid storing large payloads in JWT tokens\n\nA smaller payload can reduce network overhead, improve processing speed, and decrease the risk of attacks aimed at overloading the system.\n";
				}
				function compiledContent$3J() {
					return html$3J;
				}
				function getHeadings$3J() {
					return [{"depth":1,"slug":"jwt-payload-size","text":"JWT Payload Size"}];
				}

				const Content$3J = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter$3J;
					content.file = file$3J;
					content.url = url$3J;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html$3J)}`;
				});

const __vite_glob_0_31 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	Content: Content$3J,
	compiledContent: compiledContent$3J,
	default: Content$3J,
	file: file$3J,
	frontmatter: frontmatter$3J,
	getHeadings: getHeadings$3J,
	rawContent: rawContent$3J,
	url: url$3J
}, Symbol.toStringTag, { value: 'Module' }));

const html$3I = "<h1 id=\"prefer-uuids\">Prefer UUIDs</h1>\n<blockquote>\n<p>Use UUIDs instead of auto-incrementing integers. UUIDs are globally unique, and are not sequential. They are also more difficult to guess than sequential integers.</p>\n</blockquote>\n<p>Use of UUIDs over auto-incrementing IDs prevents attackers from guessing or iterating through resource IDs. UUIDs are randomly generated and contain 128 bits of entropy, making it practically impossible for attackers to guess them. In contrast, autoincrementing IDs can be easily predicted or iterated through, allowing attackers to access or manipulate resources they shouldn’t have access to. Additionally, using UUIDs can help prevent information disclosure by hiding the order of resource creation or access.</p>";

				const frontmatter$3I = {};
				const file$3I = "/workspaces/developer-roadmap/src/data/best-practices/api-security/content/prefer-uuid.md";
				const url$3I = undefined;
				function rawContent$3I() {
					return "# Prefer UUIDs\n\n> Use UUIDs instead of auto-incrementing integers. UUIDs are globally unique, and are not sequential. They are also more difficult to guess than sequential integers.\n\nUse of UUIDs over auto-incrementing IDs prevents attackers from guessing or iterating through resource IDs. UUIDs are randomly generated and contain 128 bits of entropy, making it practically impossible for attackers to guess them. In contrast, autoincrementing IDs can be easily predicted or iterated through, allowing attackers to access or manipulate resources they shouldn't have access to. Additionally, using UUIDs can help prevent information disclosure by hiding the order of resource creation or access.\n";
				}
				function compiledContent$3I() {
					return html$3I;
				}
				function getHeadings$3I() {
					return [{"depth":1,"slug":"prefer-uuids","text":"Prefer UUIDs"}];
				}

				const Content$3I = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter$3I;
					content.file = file$3I;
					content.url = url$3I;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html$3I)}`;
				});

const __vite_glob_0_32 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	Content: Content$3I,
	compiledContent: compiledContent$3I,
	default: Content$3I,
	file: file$3I,
	frontmatter: frontmatter$3I,
	getHeadings: getHeadings$3I,
	rawContent: rawContent$3I,
	url: url$3I
}, Symbol.toStringTag, { value: 'Module' }));

const html$3H = "<h1 id=\"proper-http-methods\">Proper HTTP Methods</h1>\n<p>Use the proper HTTP method according to the operation: <code>GET (read)</code>, <code>POST (create)</code>, <code>PUT/PATCH (replace/update)</code>, and <code>DELETE (to delete a record)</code>, and respond with <code>405 Method Not Allowed</code> if the requested method isn’t appropriate for the requested resource.</p>";

				const frontmatter$3H = {};
				const file$3H = "/workspaces/developer-roadmap/src/data/best-practices/api-security/content/proper-http-methods.md";
				const url$3H = undefined;
				function rawContent$3H() {
					return "# Proper HTTP Methods\n\nUse the proper HTTP method according to the operation: `GET (read)`, `POST (create)`, `PUT/PATCH (replace/update)`, and `DELETE (to delete a record)`, and respond with `405 Method Not Allowed` if the requested method isn't appropriate for the requested resource.\n";
				}
				function compiledContent$3H() {
					return html$3H;
				}
				function getHeadings$3H() {
					return [{"depth":1,"slug":"proper-http-methods","text":"Proper HTTP Methods"}];
				}

				const Content$3H = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter$3H;
					content.file = file$3H;
					content.url = url$3H;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html$3H)}`;
				});

const __vite_glob_0_33 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	Content: Content$3H,
	compiledContent: compiledContent$3H,
	default: Content$3H,
	file: file$3H,
	frontmatter: frontmatter$3H,
	getHeadings: getHeadings$3H,
	rawContent: rawContent$3H,
	url: url$3H
}, Symbol.toStringTag, { value: 'Module' }));

const html$3G = "<h1 id=\"proper-response-code\">Proper Response Code</h1>\n<blockquote>\n<p>Return the proper status code according to the operation completed. e.g.</p>\n<ul>\n<li><code>200 OK</code></li>\n<li><code>400 Bad Request</code></li>\n<li><code>401 Unauthorized</code></li>\n<li><code>405 Method Not Allowed</code></li>\n<li>…etc.</li>\n</ul>\n</blockquote>\n<p>Returning the proper status code according to the operation completed is important for API security because it allows the client to understand the outcome of their request and take appropriate actions. For example, if the server returns a 401 Unauthorized status code, the client knows that their authentication credentials are incorrect and can prompt the user to re-enter their login details. On the other hand, if the server returns a 200 OK status code even though the request failed, the client may not realize there was an issue and could potentially execute malicious actions or display incorrect data. Providing accurate status codes can help prevent security vulnerabilities and improve the overall reliability and usability of the API.</p>";

				const frontmatter$3G = {};
				const file$3G = "/workspaces/developer-roadmap/src/data/best-practices/api-security/content/proper-response-code.md";
				const url$3G = undefined;
				function rawContent$3G() {
					return "# Proper Response Code\n\n> Return the proper status code according to the operation completed. e.g.\n>\n> - `200 OK`\n> - `400 Bad Request`\n> - `401 Unauthorized`\n> - `405 Method Not Allowed`\n> - ...etc.\n\nReturning the proper status code according to the operation completed is important for API security because it allows the client to understand the outcome of their request and take appropriate actions. For example, if the server returns a 401 Unauthorized status code, the client knows that their authentication credentials are incorrect and can prompt the user to re-enter their login details. On the other hand, if the server returns a 200 OK status code even though the request failed, the client may not realize there was an issue and could potentially execute malicious actions or display incorrect data. Providing accurate status codes can help prevent security vulnerabilities and improve the overall reliability and usability of the API.\n";
				}
				function compiledContent$3G() {
					return html$3G;
				}
				function getHeadings$3G() {
					return [{"depth":1,"slug":"proper-response-code","text":"Proper Response Code"}];
				}

				const Content$3G = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter$3G;
					content.file = file$3G;
					content.url = url$3G;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html$3G)}`;
				});

const __vite_glob_0_34 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	Content: Content$3G,
	compiledContent: compiledContent$3G,
	default: Content$3G,
	file: file$3G,
	frontmatter: frontmatter$3G,
	getHeadings: getHeadings$3G,
	rawContent: rawContent$3G,
	url: url$3G
}, Symbol.toStringTag, { value: 'Module' }));

const html$3F = "<h1 id=\"recommended-resources\">Recommended Resources</h1>\n<p>Have a look at the following resources for more information on API security:</p>\n<ul>\n<li><a href=\"https://github.com/yosriady/awesome-api-devtools\" rel=\"noopener noreferrer nofollow\" target=\"_blank\">Collection of Resources for Building APIs</a></li>\n<li><a href=\"https://www.youtube.com/watch?v=5JJrJGZ_LjM&#x26;list=PL1y1iaEtjSYiiSGVlL1cHsXN_kvJOOhu-\" rel=\"noopener noreferrer nofollow\" target=\"_blank\">CS253: Web Security</a></li>\n<li><a href=\"https://www.youtube.com/watch?v=WlmKwIe9z1Q\" rel=\"noopener noreferrer nofollow\" target=\"_blank\">Securing Web Applications</a></li>\n<li><a href=\"https://www.youtube.com/watch?v=GqmQg-cszw4&#x26;list=PLUl4u3cNGP62K2DjQLRxDNRi0z2IRWnNh\" rel=\"noopener noreferrer nofollow\" target=\"_blank\">MIT 6.858: Computer Systems Security</a></li>\n</ul>";

				const frontmatter$3F = {};
				const file$3F = "/workspaces/developer-roadmap/src/data/best-practices/api-security/content/recommended-resources.md";
				const url$3F = undefined;
				function rawContent$3F() {
					return "# Recommended Resources\n\nHave a look at the following resources for more information on API security:\n\n- [Collection of Resources for Building APIs](https://github.com/yosriady/awesome-api-devtools)\n- [CS253: Web Security](https://www.youtube.com/watch?v=5JJrJGZ_LjM&list=PL1y1iaEtjSYiiSGVlL1cHsXN_kvJOOhu-)\n- [Securing Web Applications](https://www.youtube.com/watch?v=WlmKwIe9z1Q)\n- [MIT 6.858: Computer Systems Security](https://www.youtube.com/watch?v=GqmQg-cszw4&list=PLUl4u3cNGP62K2DjQLRxDNRi0z2IRWnNh)\n";
				}
				function compiledContent$3F() {
					return html$3F;
				}
				function getHeadings$3F() {
					return [{"depth":1,"slug":"recommended-resources","text":"Recommended Resources"}];
				}

				const Content$3F = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter$3F;
					content.file = file$3F;
					content.url = url$3F;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html$3F)}`;
				});

const __vite_glob_0_35 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	Content: Content$3F,
	compiledContent: compiledContent$3F,
	default: Content$3F,
	file: file$3F,
	frontmatter: frontmatter$3F,
	getHeadings: getHeadings$3F,
	rawContent: rawContent$3F,
	url: url$3F
}, Symbol.toStringTag, { value: 'Module' }));

const html$3E = "<h1 id=\"remove-fingerprints\">Remove Fingerprints</h1>\n<blockquote>\n<p>Remove fingerprinting headers (i.e. x-powered-by etc) from the HTTP request.</p>\n</blockquote>\n<p>Fingerprinting headers can be used to identify the web server and its version. This information can be used by attackers to identify vulnerabilities in the web server and exploit them.</p>";

				const frontmatter$3E = {};
				const file$3E = "/workspaces/developer-roadmap/src/data/best-practices/api-security/content/remove-fingerprint-header.md";
				const url$3E = undefined;
				function rawContent$3E() {
					return "# Remove Fingerprints\n\n> Remove fingerprinting headers (i.e. x-powered-by etc) from the HTTP request.\n\nFingerprinting headers can be used to identify the web server and its version. This information can be used by attackers to identify vulnerabilities in the web server and exploit them.\n";
				}
				function compiledContent$3E() {
					return html$3E;
				}
				function getHeadings$3E() {
					return [{"depth":1,"slug":"remove-fingerprints","text":"Remove Fingerprints"}];
				}

				const Content$3E = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter$3E;
					content.file = file$3E;
					content.url = url$3E;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html$3E)}`;
				});

const __vite_glob_0_36 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	Content: Content$3E,
	compiledContent: compiledContent$3E,
	default: Content$3E,
	file: file$3E,
	frontmatter: frontmatter$3E,
	getHeadings: getHeadings$3E,
	rawContent: rawContent$3E,
	url: url$3E
}, Symbol.toStringTag, { value: 'Module' }));

const html$3D = "<h1 id=\"avoid-implicit-grant-flow\">Avoid Implicit Grant Flow</h1>\n<blockquote>\n<p>Avoid `response_type=token’ and try to exchange for code instead.</p>\n</blockquote>\n<p>In OAuth, <code>response_type=token</code> is a method for obtaining an access token directly from the authorization endpoint, without using an authorization code. This method is known as the implicit grant flow.</p>\n<p>However, it is recommended to avoid using <code>response_type=token</code> and instead use the authorization code grant flow, where the client exchanges an authorization code for an access token. This is because the implicit grant flow can be less secure than the authorization code grant flow.</p>\n<p>The reason for this is that the access token is returned directly to the client in the URL fragment of the redirect URI. This means that the access token could be intercepted or exposed in the browser history or server logs. In contrast, with the authorization code grant flow, the access token is returned to the client only after the client has exchanged the authorization code for the token using a secure server-to-server communication.</p>\n<p>Therefore, by using the authorization code grant flow instead of the implicit grant flow, you can help to protect the access token from being exposed or intercepted by malicious actors.</p>";

				const frontmatter$3D = {};
				const file$3D = "/workspaces/developer-roadmap/src/data/best-practices/api-security/content/response-type-token.md";
				const url$3D = undefined;
				function rawContent$3D() {
					return "# Avoid Implicit Grant Flow\n\n> Avoid `response_type=token’ and try to exchange for code instead.\n\nIn OAuth, `response_type=token` is a method for obtaining an access token directly from the authorization endpoint, without using an authorization code. This method is known as the implicit grant flow.\n\nHowever, it is recommended to avoid using `response_type=token` and instead use the authorization code grant flow, where the client exchanges an authorization code for an access token. This is because the implicit grant flow can be less secure than the authorization code grant flow.\n\nThe reason for this is that the access token is returned directly to the client in the URL fragment of the redirect URI. This means that the access token could be intercepted or exposed in the browser history or server logs. In contrast, with the authorization code grant flow, the access token is returned to the client only after the client has exchanged the authorization code for the token using a secure server-to-server communication.\n\nTherefore, by using the authorization code grant flow instead of the implicit grant flow, you can help to protect the access token from being exposed or intercepted by malicious actors.\n";
				}
				function compiledContent$3D() {
					return html$3D;
				}
				function getHeadings$3D() {
					return [{"depth":1,"slug":"avoid-implicit-grant-flow","text":"Avoid Implicit Grant Flow"}];
				}

				const Content$3D = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter$3D;
					content.file = file$3D;
					content.url = url$3D;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html$3D)}`;
				});

const __vite_glob_0_37 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	Content: Content$3D,
	compiledContent: compiledContent$3D,
	default: Content$3D,
	file: file$3D,
	frontmatter: frontmatter$3D,
	getHeadings: getHeadings$3D,
	rawContent: rawContent$3D,
	url: url$3D
}, Symbol.toStringTag, { value: 'Module' }));

const html$3C = "<h1 id=\"restrict-private-apis\">Restrict Private APIs</h1>\n<blockquote>\n<p>Private APIs should only be accessible from safe listed IPs</p>\n</blockquote>\n<p>Private APIs should only be accessible from safe-listed IPs to ensure that only authorized users or systems can access the API. By restricting access to specific IP addresses, you can prevent unauthorized access from external networks or malicious actors. This can help to protect sensitive data and prevent attacks such as DDoS or brute-force attacks. Additionally, restricting access to safe-listed IPs can help to ensure the reliability and performance of the API by preventing excessive traffic from unauthorized sources.</p>";

				const frontmatter$3C = {};
				const file$3C = "/workspaces/developer-roadmap/src/data/best-practices/api-security/content/restrict-private-apis.md";
				const url$3C = undefined;
				function rawContent$3C() {
					return "# Restrict Private APIs\n\n> Private APIs should only be accessible from safe listed IPs\n\nPrivate APIs should only be accessible from safe-listed IPs to ensure that only authorized users or systems can access the API. By restricting access to specific IP addresses, you can prevent unauthorized access from external networks or malicious actors. This can help to protect sensitive data and prevent attacks such as DDoS or brute-force attacks. Additionally, restricting access to safe-listed IPs can help to ensure the reliability and performance of the API by preventing excessive traffic from unauthorized sources.\n";
				}
				function compiledContent$3C() {
					return html$3C;
				}
				function getHeadings$3C() {
					return [{"depth":1,"slug":"restrict-private-apis","text":"Restrict Private APIs"}];
				}

				const Content$3C = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter$3C;
					content.file = file$3C;
					content.url = url$3C;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html$3C)}`;
				});

const __vite_glob_0_38 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	Content: Content$3C,
	compiledContent: compiledContent$3C,
	default: Content$3C,
	file: file$3C,
	frontmatter: frontmatter$3C,
	getHeadings: getHeadings$3C,
	rawContent: rawContent$3C,
	url: url$3C
}, Symbol.toStringTag, { value: 'Module' }));

const html$3B = "<h1 id=\"rollback-solution\">Rollback Solution</h1>\n<blockquote>\n<p>Design a rollback solution for deployments.</p>\n</blockquote>\n<p>Sometimes deploying a new version of the API can introduce unexpected bugs or issues that were not caught during testing. In such cases, rolling back to the previous version of the API can help to mitigate the impact of the issue and restore the service to a functional state. A well-designed rollback solution can help reduce downtime and minimize the impact on users.</p>";

				const frontmatter$3B = {};
				const file$3B = "/workspaces/developer-roadmap/src/data/best-practices/api-security/content/rollback-deployments.md";
				const url$3B = undefined;
				function rawContent$3B() {
					return "# Rollback Solution\n\n> Design a rollback solution for deployments.\n\nSometimes deploying a new version of the API can introduce unexpected bugs or issues that were not caught during testing. In such cases, rolling back to the previous version of the API can help to mitigate the impact of the issue and restore the service to a functional state. A well-designed rollback solution can help reduce downtime and minimize the impact on users.\n";
				}
				function compiledContent$3B() {
					return html$3B;
				}
				function getHeadings$3B() {
					return [{"depth":1,"slug":"rollback-solution","text":"Rollback Solution"}];
				}

				const Content$3B = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter$3B;
					content.file = file$3B;
					content.url = url$3B;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html$3B)}`;
				});

const __vite_glob_0_39 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	Content: Content$3B,
	compiledContent: compiledContent$3B,
	default: Content$3B,
	file: file$3B,
	frontmatter: frontmatter$3B,
	getHeadings: getHeadings$3B,
	rawContent: rawContent$3B,
	url: url$3B
}, Symbol.toStringTag, { value: 'Module' }));

const html$3A = "<h1 id=\"run-security-analysis\">Run Security Analysis</h1>\n<blockquote>\n<p>Continuously run security analysis on your code.</p>\n</blockquote>\n<p>Continuous security analysis helps identify and address security vulnerabilities in the codebase before they can be exploited by attackers. It involves using automated tools and manual techniques to scan code for potential weaknesses, such as insecure coding practices, configuration errors, and outdated dependencies. By identifying and fixing vulnerabilities early in the development cycle, the risk of a security breach or data loss can be significantly reduced, improving the overall security posture of the system.</p>";

				const frontmatter$3A = {};
				const file$3A = "/workspaces/developer-roadmap/src/data/best-practices/api-security/content/run-security-analysis.md";
				const url$3A = undefined;
				function rawContent$3A() {
					return "# Run Security Analysis\n\n> Continuously run security analysis on your code.\n\nContinuous security analysis helps identify and address security vulnerabilities in the codebase before they can be exploited by attackers. It involves using automated tools and manual techniques to scan code for potential weaknesses, such as insecure coding practices, configuration errors, and outdated dependencies. By identifying and fixing vulnerabilities early in the development cycle, the risk of a security breach or data loss can be significantly reduced, improving the overall security posture of the system.\n";
				}
				function compiledContent$3A() {
					return html$3A;
				}
				function getHeadings$3A() {
					return [{"depth":1,"slug":"run-security-analysis","text":"Run Security Analysis"}];
				}

				const Content$3A = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter$3A;
					content.file = file$3A;
					content.url = url$3A;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html$3A)}`;
				});

const __vite_glob_0_40 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	Content: Content$3A,
	compiledContent: compiledContent$3A,
	default: Content$3A,
	file: file$3A,
	frontmatter: frontmatter$3A,
	getHeadings: getHeadings$3A,
	rawContent: rawContent$3A,
	url: url$3A
}, Symbol.toStringTag, { value: 'Module' }));

const html$3z = "<h1 id=\"sensitive-data-encryption\">Sensitive Data Encryption</h1>\n<blockquote>\n<p>Encrypting sensitive data is important for protecting it from unauthorized access, theft, and exploitation.</p>\n</blockquote>\n<p>Encryption is a process of converting plain text data into a cipher text that can only be deciphered by someone who has the decryption key. This makes it difficult for attackers to access sensitive data, even if they are able to intercept it or gain unauthorized access to it.</p>\n<p>To encrypt sensitive data, you can use encryption algorithms such as <code>AES</code> or <code>RSA</code>, along with a strong key management system to ensure that keys are securely stored and managed. Additionally, you can implement other security measures such as access controls, firewalls, and intrusion detection systems to further protect sensitive data.</p>";

				const frontmatter$3z = {};
				const file$3z = "/workspaces/developer-roadmap/src/data/best-practices/api-security/content/sensitive-data-encryption.md";
				const url$3z = undefined;
				function rawContent$3z() {
					return "# Sensitive Data Encryption\n\n> Encrypting sensitive data is important for protecting it from unauthorized access, theft, and exploitation.\n\nEncryption is a process of converting plain text data into a cipher text that can only be deciphered by someone who has the decryption key. This makes it difficult for attackers to access sensitive data, even if they are able to intercept it or gain unauthorized access to it.\n\nTo encrypt sensitive data, you can use encryption algorithms such as `AES` or `RSA`, along with a strong key management system to ensure that keys are securely stored and managed. Additionally, you can implement other security measures such as access controls, firewalls, and intrusion detection systems to further protect sensitive data.\n";
				}
				function compiledContent$3z() {
					return html$3z;
				}
				function getHeadings$3z() {
					return [{"depth":1,"slug":"sensitive-data-encryption","text":"Sensitive Data Encryption"}];
				}

				const Content$3z = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter$3z;
					content.file = file$3z;
					content.url = url$3z;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html$3z)}`;
				});

const __vite_glob_0_41 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	Content: Content$3z,
	compiledContent: compiledContent$3z,
	default: Content$3z,
	file: file$3z,
	frontmatter: frontmatter$3z,
	getHeadings: getHeadings$3z,
	rawContent: rawContent$3z,
	url: url$3z
}, Symbol.toStringTag, { value: 'Module' }));

const html$3y = "<h1 id=\"setup-alerts\">Setup Alerts</h1>\n<blockquote>\n<p>Use alerts for SMS, Slack, Email, Kibana, Cloudwatch, etc.</p>\n</blockquote>\n<p>Using alerts for various communication channels such as SMS, Slack, Email, Kibana, Cloudwatch, etc. can help you quickly respond to any issues or anomalies in your system. These alerts can be set up to notify you in real-time if a particular event or condition occurs, allowing you to take proactive measures to prevent downtime, data loss, or security breaches. Additionally, alerts can provide valuable insights into system performance and user behavior, allowing you to make informed decisions about your API’s design and implementation.</p>";

				const frontmatter$3y = {};
				const file$3y = "/workspaces/developer-roadmap/src/data/best-practices/api-security/content/set-alerts.md";
				const url$3y = undefined;
				function rawContent$3y() {
					return "# Setup Alerts\n\n> Use alerts for SMS, Slack, Email, Kibana, Cloudwatch, etc.\n\nUsing alerts for various communication channels such as SMS, Slack, Email, Kibana, Cloudwatch, etc. can help you quickly respond to any issues or anomalies in your system. These alerts can be set up to notify you in real-time if a particular event or condition occurs, allowing you to take proactive measures to prevent downtime, data loss, or security breaches. Additionally, alerts can provide valuable insights into system performance and user behavior, allowing you to make informed decisions about your API's design and implementation.\n";
				}
				function compiledContent$3y() {
					return html$3y;
				}
				function getHeadings$3y() {
					return [{"depth":1,"slug":"setup-alerts","text":"Setup Alerts"}];
				}

				const Content$3y = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter$3y;
					content.file = file$3y;
					content.url = url$3y;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html$3y)}`;
				});

const __vite_glob_0_42 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	Content: Content$3y,
	compiledContent: compiledContent$3y,
	default: Content$3y,
	file: file$3y,
	frontmatter: frontmatter$3y,
	getHeadings: getHeadings$3y,
	rawContent: rawContent$3y,
	url: url$3y
}, Symbol.toStringTag, { value: 'Module' }));

const html$3x = "<h1 id=\"throttle-requests\">Throttle Requests</h1>\n<blockquote>\n<p>Limit requests (throttling) to avoid DDoS / Brute Force attacks.</p>\n</blockquote>\n<p>Limiting requests through throttling is important to prevent DDoS attacks and brute force attacks. DDoS attacks overwhelm the server with too many requests, while brute force attacks try to guess user credentials through multiple login attempts.</p>\n<p>Throttling limits the number of requests that can be sent within a certain time period, making it harder for attackers to carry out these types of attacks. This can protect the system from being overwhelmed and can prevent attackers from gaining unauthorized access.</p>";

				const frontmatter$3x = {};
				const file$3x = "/workspaces/developer-roadmap/src/data/best-practices/api-security/content/throttle-requests.md";
				const url$3x = undefined;
				function rawContent$3x() {
					return "# Throttle Requests\n\n> Limit requests (throttling) to avoid DDoS / Brute Force attacks.\n\nLimiting requests through throttling is important to prevent DDoS attacks and brute force attacks. DDoS attacks overwhelm the server with too many requests, while brute force attacks try to guess user credentials through multiple login attempts.\n\nThrottling limits the number of requests that can be sent within a certain time period, making it harder for attackers to carry out these types of attacks. This can protect the system from being overwhelmed and can prevent attackers from gaining unauthorized access.\n";
				}
				function compiledContent$3x() {
					return html$3x;
				}
				function getHeadings$3x() {
					return [{"depth":1,"slug":"throttle-requests","text":"Throttle Requests"}];
				}

				const Content$3x = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter$3x;
					content.file = file$3x;
					content.url = url$3x;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html$3x)}`;
				});

const __vite_glob_0_43 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	Content: Content$3x,
	compiledContent: compiledContent$3x,
	default: Content$3x,
	file: file$3x,
	frontmatter: frontmatter$3x,
	getHeadings: getHeadings$3x,
	rawContent: rawContent$3x,
	url: url$3x
}, Symbol.toStringTag, { value: 'Module' }));

const html$3w = "<h1 id=\"token-expiry\">Token Expiry</h1>\n<blockquote>\n<p>Token expiry should be set to a reasonable time to reduce the window of vulnerability, limit the impact of token theft, and improve overall security.</p>\n</blockquote>\n<p>Setting a short token expiration time (TTL, RTTL) is important for security purposes, as it reduces the window of vulnerability, limits the impact of token theft, and improves overall security. However, the expiration time should be balanced with usability, as setting it too short may inconvenience users and reduce productivity.</p>";

				const frontmatter$3w = {};
				const file$3w = "/workspaces/developer-roadmap/src/data/best-practices/api-security/content/token-expiry.md";
				const url$3w = undefined;
				function rawContent$3w() {
					return "# Token Expiry\n\n> Token expiry should be set to a reasonable time to reduce the window of vulnerability, limit the impact of token theft, and improve overall security.\n\nSetting a short token expiration time (TTL, RTTL) is important for security purposes, as it reduces the window of vulnerability, limits the impact of token theft, and improves overall security. However, the expiration time should be balanced with usability, as setting it too short may inconvenience users and reduce productivity.\n";
				}
				function compiledContent$3w() {
					return html$3w;
				}
				function getHeadings$3w() {
					return [{"depth":1,"slug":"token-expiry","text":"Token Expiry"}];
				}

				const Content$3w = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter$3w;
					content.file = file$3w;
					content.url = url$3w;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html$3w)}`;
				});

const __vite_glob_0_44 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	Content: Content$3w,
	compiledContent: compiledContent$3w,
	default: Content$3w,
	file: file$3w,
	frontmatter: frontmatter$3w,
	getHeadings: getHeadings$3w,
	rawContent: rawContent$3w,
	url: url$3w
}, Symbol.toStringTag, { value: 'Module' }));

const html$3v = "<h1 id=\"unitintegration-tests\">Unit/Integration Tests</h1>\n<blockquote>\n<p>Audit your design and implementation with unit/integration tests coverage.</p>\n</blockquote>\n<p>Unit and integration testing can help identify vulnerabilities in the API code and design, such as input validation errors, authentication and authorization flaws, and other security-related issues. By performing comprehensive testing, developers can ensure that the API works as intended and that it is secure against common attacks such as injection attacks, cross-site scripting, and other exploits. Adequate testing can also help identify and resolve performance bottlenecks, improve scalability and reliability, and ensure the overall quality of the API.</p>";

				const frontmatter$3v = {};
				const file$3v = "/workspaces/developer-roadmap/src/data/best-practices/api-security/content/unit-integration-tests.md";
				const url$3v = undefined;
				function rawContent$3v() {
					return "# Unit/Integration Tests\n\n> Audit your design and implementation with unit/integration tests coverage.\n\nUnit and integration testing can help identify vulnerabilities in the API code and design, such as input validation errors, authentication and authorization flaws, and other security-related issues. By performing comprehensive testing, developers can ensure that the API works as intended and that it is secure against common attacks such as injection attacks, cross-site scripting, and other exploits. Adequate testing can also help identify and resolve performance bottlenecks, improve scalability and reliability, and ensure the overall quality of the API.\n";
				}
				function compiledContent$3v() {
					return html$3v;
				}
				function getHeadings$3v() {
					return [{"depth":1,"slug":"unitintegration-tests","text":"Unit/Integration Tests"}];
				}

				const Content$3v = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter$3v;
					content.file = file$3v;
					content.url = url$3v;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html$3v)}`;
				});

const __vite_glob_0_45 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	Content: Content$3v,
	compiledContent: compiledContent$3v,
	default: Content$3v,
	file: file$3v,
	frontmatter: frontmatter$3v,
	getHeadings: getHeadings$3v,
	rawContent: rawContent$3v,
	url: url$3v
}, Symbol.toStringTag, { value: 'Module' }));

const html$3u = "<h1 id=\"use-https\">Use HTTPs</h1>\n<blockquote>\n<p>Use HTTPS on server side and secure ciphers</p>\n</blockquote>\n<p>Ensure that your API server uses HTTPS instead of HTTP. HTTPS is a secure protocol that encrypts data in transit, making it difficult for attackers to intercept and read sensitive information. To implement HTTPS, you need to obtain an SSL/TLS certificate and configure your server to use HTTPS.</p>\n<p>HTTPS uses ciphers to encrypt data in transit. It is important to choose secure ciphers that are resistant to attacks and offer strong encryption. Some common secure ciphers include AES, ChaCha20, and ECDHE for key exchange. Make sure to disable weak and outdated ciphers, such as RC4 and TLS 1.0/1.1, which are vulnerable to attacks.</p>";

				const frontmatter$3u = {};
				const file$3u = "/workspaces/developer-roadmap/src/data/best-practices/api-security/content/use-https.md";
				const url$3u = undefined;
				function rawContent$3u() {
					return "# Use HTTPs\n\n> Use HTTPS on server side and secure ciphers\n\nEnsure that your API server uses HTTPS instead of HTTP. HTTPS is a secure protocol that encrypts data in transit, making it difficult for attackers to intercept and read sensitive information. To implement HTTPS, you need to obtain an SSL/TLS certificate and configure your server to use HTTPS.\n\nHTTPS uses ciphers to encrypt data in transit. It is important to choose secure ciphers that are resistant to attacks and offer strong encryption. Some common secure ciphers include AES, ChaCha20, and ECDHE for key exchange. Make sure to disable weak and outdated ciphers, such as RC4 and TLS 1.0/1.1, which are vulnerable to attacks.\n";
				}
				function compiledContent$3u() {
					return html$3u;
				}
				function getHeadings$3u() {
					return [{"depth":1,"slug":"use-https","text":"Use HTTPs"}];
				}

				const Content$3u = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter$3u;
					content.file = file$3u;
					content.url = url$3u;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html$3u)}`;
				});

const __vite_glob_0_46 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	Content: Content$3u,
	compiledContent: compiledContent$3u,
	default: Content$3u,
	file: file$3u,
	frontmatter: frontmatter$3u,
	getHeadings: getHeadings$3u,
	rawContent: rawContent$3u,
	url: url$3u
}, Symbol.toStringTag, { value: 'Module' }));

const html$3t = "<h1 id=\"use-idsips-systems\">Use IDS/IPS Systems</h1>\n<blockquote>\n<p>Use IDS and/or IPS systems to detect and block attacks.</p>\n</blockquote>\n<p>Intrusion detection systems (IDS) and intrusion prevention systems (IPS) can be used to detect and block attacks. These systems can be configured to monitor all incoming and outgoing traffic, and detect any suspicious activity. If any suspicious activity is detected, the systems can be configured to block the traffic, preventing the attack from succeeding. IDS and IPS systems can be implemented using various tools and technologies such as network intrusion detection systems (NIDS), host-based intrusion detection systems (HIDS), and network intrusion prevention systems (NIPS). These systems can be deployed alongside the API, and configured to monitor all incoming and outgoing traffic. The systems can be configured to provide real-time alerts to security teams if any suspicious activity is detected, allowing for immediate action to be taken.</p>";

				const frontmatter$3t = {};
				const file$3t = "/workspaces/developer-roadmap/src/data/best-practices/api-security/content/use-ids-ips-system.md";
				const url$3t = undefined;
				function rawContent$3t() {
					return "# Use IDS/IPS Systems\n\n> Use IDS and/or IPS systems to detect and block attacks.\n\nIntrusion detection systems (IDS) and intrusion prevention systems (IPS) can be used to detect and block attacks. These systems can be configured to monitor all incoming and outgoing traffic, and detect any suspicious activity. If any suspicious activity is detected, the systems can be configured to block the traffic, preventing the attack from succeeding. IDS and IPS systems can be implemented using various tools and technologies such as network intrusion detection systems (NIDS), host-based intrusion detection systems (HIDS), and network intrusion prevention systems (NIPS). These systems can be deployed alongside the API, and configured to monitor all incoming and outgoing traffic. The systems can be configured to provide real-time alerts to security teams if any suspicious activity is detected, allowing for immediate action to be taken.\n";
				}
				function compiledContent$3t() {
					return html$3t;
				}
				function getHeadings$3t() {
					return [{"depth":1,"slug":"use-idsips-systems","text":"Use IDS/IPS Systems"}];
				}

				const Content$3t = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter$3t;
					content.file = file$3t;
					content.url = url$3t;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html$3t)}`;
				});

const __vite_glob_0_47 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	Content: Content$3t,
	compiledContent: compiledContent$3t,
	default: Content$3t,
	file: file$3t,
	frontmatter: frontmatter$3t,
	getHeadings: getHeadings$3t,
	rawContent: rawContent$3t,
	url: url$3t
}, Symbol.toStringTag, { value: 'Module' }));

const html$3s = "<h1 id=\"avoid-basic-authentication\">Avoid Basic Authentication</h1>\n<blockquote>\n<p>You should avoid using basic authentication and use any other standard authentication methodologies i.e. OAuth, JWT, etc.</p>\n</blockquote>\n<p>Basic authentication is a simple method for authenticating a user by transmitting the user’s credentials in plain text over the network. This method is inherently insecure and should be avoided whenever possible.</p>\n<p>There are several reasons why basic authentication should be avoided and replaced with more secure authentication techniques:</p>\n<ul>\n<li>\n<p>Lack of confidentiality: Basic authentication transmits the user’s credentials (username and password) in plain text over the network. This means that anyone who intercepts the traffic can easily read the credentials and gain access to the user’s account.</p>\n</li>\n<li>\n<p>Lack of integrity: Basic authentication does not provide any mechanism to ensure that the data being transmitted has not been tampered with or modified in transit. This means that an attacker can modify the traffic to gain access to the user’s account or perform other malicious activities.</p>\n</li>\n<li>\n<p>Lack of authentication strength: Basic authentication relies solely on the user’s credentials to authenticate them. This means that if an attacker is able to obtain the user’s credentials (for example, through phishing or social engineering), they can easily gain access to the user’s account.</p>\n</li>\n<li>\n<p>No support for multi-factor authentication: Basic authentication does not support multi-factor authentication (MFA), which is a critical security feature that provides an additional layer of protection against unauthorized access.</p>\n</li>\n</ul>\n<p>In contrast, other authentication techniques such as OAuth, OpenID Connect, and SAML provide more secure and robust methods for authentication. These methods typically use encrypted protocols to protect the user’s credentials, provide mechanisms for verifying the integrity of the data, and support MFA. As a result, they are much more secure and reliable than basic authentication and should be used whenever possible.</p>";

				const frontmatter$3s = {};
				const file$3s = "/workspaces/developer-roadmap/src/data/best-practices/api-security/content/use-standard-authentication.md";
				const url$3s = undefined;
				function rawContent$3s() {
					return "# Avoid Basic Authentication\n\n> You should avoid using basic authentication and use any other standard authentication methodologies i.e. OAuth, JWT, etc.\n\nBasic authentication is a simple method for authenticating a user by transmitting the user's credentials in plain text over the network. This method is inherently insecure and should be avoided whenever possible.\n\nThere are several reasons why basic authentication should be avoided and replaced with more secure authentication techniques:\n\n- Lack of confidentiality: Basic authentication transmits the user's credentials (username and password) in plain text over the network. This means that anyone who intercepts the traffic can easily read the credentials and gain access to the user's account.\n\n- Lack of integrity: Basic authentication does not provide any mechanism to ensure that the data being transmitted has not been tampered with or modified in transit. This means that an attacker can modify the traffic to gain access to the user's account or perform other malicious activities.\n\n- Lack of authentication strength: Basic authentication relies solely on the user's credentials to authenticate them. This means that if an attacker is able to obtain the user's credentials (for example, through phishing or social engineering), they can easily gain access to the user's account.\n\n- No support for multi-factor authentication: Basic authentication does not support multi-factor authentication (MFA), which is a critical security feature that provides an additional layer of protection against unauthorized access.\n\nIn contrast, other authentication techniques such as OAuth, OpenID Connect, and SAML provide more secure and robust methods for authentication. These methods typically use encrypted protocols to protect the user's credentials, provide mechanisms for verifying the integrity of the data, and support MFA. As a result, they are much more secure and reliable than basic authentication and should be used whenever possible.\n";
				}
				function compiledContent$3s() {
					return html$3s;
				}
				function getHeadings$3s() {
					return [{"depth":1,"slug":"avoid-basic-authentication","text":"Avoid Basic Authentication"}];
				}

				const Content$3s = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter$3s;
					content.file = file$3s;
					content.url = url$3s;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html$3s)}`;
				});

const __vite_glob_0_48 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	Content: Content$3s,
	compiledContent: compiledContent$3s,
	default: Content$3s,
	file: file$3s,
	frontmatter: frontmatter$3s,
	getHeadings: getHeadings$3s,
	rawContent: rawContent$3s,
	url: url$3s
}, Symbol.toStringTag, { value: 'Module' }));

const html$3r = "<h1 id=\"content-type-validation\">Content Type Validation</h1>\n<blockquote>\n<p>Validate <code>content-type</code> on request headers to prevent XSS attacks</p>\n</blockquote>\n<p>Validating the <code>Content-Type</code> header on the request can help to make APIs more secure by ensuring that the request data is in the expected format and reducing the risk of attacks such as injection attacks or cross-site scripting (XSS).</p>";

				const frontmatter$3r = {};
				const file$3r = "/workspaces/developer-roadmap/src/data/best-practices/api-security/content/validate-content-type.md";
				const url$3r = undefined;
				function rawContent$3r() {
					return "# Content Type Validation\n\n> Validate `content-type` on request headers to prevent XSS attacks\n\nValidating the `Content-Type` header on the request can help to make APIs more secure by ensuring that the request data is in the expected format and reducing the risk of attacks such as injection attacks or cross-site scripting (XSS).\n";
				}
				function compiledContent$3r() {
					return html$3r;
				}
				function getHeadings$3r() {
					return [{"depth":1,"slug":"content-type-validation","text":"Content Type Validation"}];
				}

				const Content$3r = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter$3r;
					content.file = file$3r;
					content.url = url$3r;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html$3r)}`;
				});

const __vite_glob_0_49 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	Content: Content$3r,
	compiledContent: compiledContent$3r,
	default: Content$3r,
	file: file$3r,
	frontmatter: frontmatter$3r,
	getHeadings: getHeadings$3r,
	rawContent: rawContent$3r,
	url: url$3r
}, Symbol.toStringTag, { value: 'Module' }));

const html$3q = "<h1 id=\"validate-user-input\">Validate User Input</h1>\n<blockquote>\n<p>Validate user input to avoid common vulnerabilities</p>\n</blockquote>\n<p>User input is a common source of vulnerabilities in web applications. This is because user input is often not properly validated, sanitized, or escaped before being used in a web application. This can allow an attacker to manipulate the input and execute malicious code or cause the application to behave unexpectedly.</p>";

				const frontmatter$3q = {};
				const file$3q = "/workspaces/developer-roadmap/src/data/best-practices/api-security/content/validate-user-input.md";
				const url$3q = undefined;
				function rawContent$3q() {
					return "# Validate User Input\n\n> Validate user input to avoid common vulnerabilities\n\nUser input is a common source of vulnerabilities in web applications. This is because user input is often not properly validated, sanitized, or escaped before being used in a web application. This can allow an attacker to manipulate the input and execute malicious code or cause the application to behave unexpectedly.\n";
				}
				function compiledContent$3q() {
					return html$3q;
				}
				function getHeadings$3q() {
					return [{"depth":1,"slug":"validate-user-input","text":"Validate User Input"}];
				}

				const Content$3q = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter$3q;
					content.file = file$3q;
					content.url = url$3q;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html$3q)}`;
				});

const __vite_glob_0_50 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	Content: Content$3q,
	compiledContent: compiledContent$3q,
	default: Content$3q,
	file: file$3q,
	frontmatter: frontmatter$3q,
	getHeadings: getHeadings$3q,
	rawContent: rawContent$3q,
	url: url$3q
}, Symbol.toStringTag, { value: 'Module' }));

const html$3p = "<h1 id=\"x-frame-options-deny\">X-Frame-Options: Deny</h1>\n<blockquote>\n<p>Send <code>X-Frame-Options: deny</code> header.</p>\n</blockquote>\n<p>The <code>X-Frame-Options</code> header prevents the page from being displayed in an iframe, which is commonly used in clickjacking attacks. By setting the value of this header to <code>deny</code>, you are telling the browser not to display the page in any iframe. This helps prevent the page from being embedded within an attacker’s website and reduces the risk of clickjacking attacks.</p>";

				const frontmatter$3p = {};
				const file$3p = "/workspaces/developer-roadmap/src/data/best-practices/api-security/content/x-frame-options-deny.md";
				const url$3p = undefined;
				function rawContent$3p() {
					return "# X-Frame-Options: Deny\n\n> Send `X-Frame-Options: deny` header.\n\nThe `X-Frame-Options` header prevents the page from being displayed in an iframe, which is commonly used in clickjacking attacks. By setting the value of this header to `deny`, you are telling the browser not to display the page in any iframe. This helps prevent the page from being embedded within an attacker's website and reduces the risk of clickjacking attacks.\n";
				}
				function compiledContent$3p() {
					return html$3p;
				}
				function getHeadings$3p() {
					return [{"depth":1,"slug":"x-frame-options-deny","text":"X-Frame-Options: Deny"}];
				}

				const Content$3p = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter$3p;
					content.file = file$3p;
					content.url = url$3p;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html$3p)}`;
				});

const __vite_glob_0_51 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	Content: Content$3p,
	compiledContent: compiledContent$3p,
	default: Content$3p,
	file: file$3p,
	frontmatter: frontmatter$3p,
	getHeadings: getHeadings$3p,
	rawContent: rawContent$3p,
	url: url$3p
}, Symbol.toStringTag, { value: 'Module' }));

const html$3o = "<h1 id=\"alerts-as-notifications\">Alerts as Notifications</h1>\n<blockquote>\n<p>Get your alerts to become notifications.</p>\n</blockquote>\n<p>If you’ve set everything up correctly, your health checks should automatically destroy bad instances and spawn new ones. There’s usually no action to take when getting a CloudWatch alert, as everything should be automated. If you’re getting alerts where manual intervention is required, do a post-mortem and figure out if there’s a way you can automate the action in future. The last time I had an actionable alert from CloudWatch was about a year ago, and it’s extremely awesome not to be woken up at 4am for ops alerts any more.</p>";

				const frontmatter$3o = {};
				const file$3o = "/workspaces/developer-roadmap/src/data/best-practices/aws/content/alerts-as-notifications.md";
				const url$3o = undefined;
				function rawContent$3o() {
					return "# Alerts as Notifications\n\n> Get your alerts to become notifications.\n\nIf you've set everything up correctly, your health checks should automatically destroy bad instances and spawn new ones. There's usually no action to take when getting a CloudWatch alert, as everything should be automated. If you're getting alerts where manual intervention is required, do a post-mortem and figure out if there's a way you can automate the action in future. The last time I had an actionable alert from CloudWatch was about a year ago, and it's extremely awesome not to be woken up at 4am for ops alerts any more.\n";
				}
				function compiledContent$3o() {
					return html$3o;
				}
				function getHeadings$3o() {
					return [{"depth":1,"slug":"alerts-as-notifications","text":"Alerts as Notifications"}];
				}

				const Content$3o = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter$3o;
					content.file = file$3o;
					content.url = url$3o;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html$3o)}`;
				});

const __vite_glob_0_52 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	Content: Content$3o,
	compiledContent: compiledContent$3o,
	default: Content$3o,
	file: file$3o,
	frontmatter: frontmatter$3o,
	getHeadings: getHeadings$3o,
	rawContent: rawContent$3o,
	url: url$3o
}, Symbol.toStringTag, { value: 'Module' }));

const html$3n = "<h1 id=\"app-changes-for-aws\">App Changes for AWS</h1>\n<p>While a lot of applications can probably just be deployed to an EC2 instance and work well, if you’re coming from a physical environment, you may need to re-architect your application in order to accommodate changes. Don’t just think you can copy the files over and be done with it.</p>";

				const frontmatter$3n = {};
				const file$3n = "/workspaces/developer-roadmap/src/data/best-practices/aws/content/app-changes-for-aws.md";
				const url$3n = undefined;
				function rawContent$3n() {
					return "# App Changes for AWS\n\nWhile a lot of applications can probably just be deployed to an EC2 instance and work well, if you're coming from a physical environment, you may need to re-architect your application in order to accommodate changes. Don't just think you can copy the files over and be done with it.\n";
				}
				function compiledContent$3n() {
					return html$3n;
				}
				function getHeadings$3n() {
					return [{"depth":1,"slug":"app-changes-for-aws","text":"App Changes for AWS"}];
				}

				const Content$3n = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter$3n;
					content.file = file$3n;
					content.url = url$3n;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html$3n)}`;
				});

const __vite_glob_0_53 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	Content: Content$3n,
	compiledContent: compiledContent$3n,
	default: Content$3n,
	file: file$3n,
	frontmatter: frontmatter$3n,
	getHeadings: getHeadings$3n,
	rawContent: rawContent$3n,
	url: url$3n
}, Symbol.toStringTag, { value: 'Module' }));

const html$3m = "<h1 id=\"application-state\">Application State</h1>\n<blockquote>\n<p>Do not store application state on servers.</p>\n</blockquote>\n<p>The reason for this is so that if you server gets killed, you won’t lose any application state. To that end, sessions should be stored in a database (or some other sort of central storage; memcached, redis, etc.), not on the local filesystem. Examples:</p>\n<ul>\n<li>Logs should be handled via syslog (or similar) and sent to a remote store.</li>\n<li>Uploads should go direct to S3 (don’t store on local filesystem and have another process move to S3 for example). For S3 you can use <a href=\"http://docs.aws.amazon.com/AmazonS3/latest/dev/PresignedUrlUploadObject.html\" rel=\"noopener noreferrer nofollow\" target=\"_blank\">pre-signed URLs</a> to let your users directly upload to S3 by bypassing your server entirely.</li>\n<li>Any post-processing or long running tasks should be done via an asynchronous queue (SQS is great for this).</li>\n</ul>";

				const frontmatter$3m = {};
				const file$3m = "/workspaces/developer-roadmap/src/data/best-practices/aws/content/application-state.md";
				const url$3m = undefined;
				function rawContent$3m() {
					return "# Application State\n\n> Do not store application state on servers.\n\nThe reason for this is so that if you server gets killed, you won't lose any application state. To that end, sessions should be stored in a database (or some other sort of central storage; memcached, redis, etc.), not on the local filesystem. Examples:\n\n- Logs should be handled via syslog (or similar) and sent to a remote store.\n- Uploads should go direct to S3 (don't store on local filesystem and have another process move to S3 for example). For S3 you can use [pre-signed URLs](http://docs.aws.amazon.com/AmazonS3/latest/dev/PresignedUrlUploadObject.html) to let your users directly upload to S3 by bypassing your server entirely.\n- Any post-processing or long running tasks should be done via an asynchronous queue (SQS is great for this).\n";
				}
				function compiledContent$3m() {
					return html$3m;
				}
				function getHeadings$3m() {
					return [{"depth":1,"slug":"application-state","text":"Application State"}];
				}

				const Content$3m = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter$3m;
					content.file = file$3m;
					content.url = url$3m;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html$3m)}`;
				});

const __vite_glob_0_54 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	Content: Content$3m,
	compiledContent: compiledContent$3m,
	default: Content$3m,
	file: file$3m,
	frontmatter: frontmatter$3m,
	getHeadings: getHeadings$3m,
	rawContent: rawContent$3m,
	url: url$3m
}, Symbol.toStringTag, { value: 'Module' }));

const html$3l = "<h1 id=\"automate-everything\">Automate Everything</h1>\n<p>This is more of general operations advice than AWS specific, but everything needs to be automated. Recovery, deployment, failover, etc. Package and OS updates should be managed by something, whether it’s just a bash script, or Chef/Puppet, etc. You shouldn’t have to care about this stuff. As mentioned in a different tip, you should also make sure to disable SSH access, as this will pretty quickly highlight any part of your process that isn’t automated. Remember the key phrase from the earlier tip, if you have to SSH into your servers, then your automation has failed.</p>";

				const frontmatter$3l = {};
				const file$3l = "/workspaces/developer-roadmap/src/data/best-practices/aws/content/automate-everything.md";
				const url$3l = undefined;
				function rawContent$3l() {
					return "# Automate Everything\n\nThis is more of general operations advice than AWS specific, but everything needs to be automated. Recovery, deployment, failover, etc. Package and OS updates should be managed by something, whether it's just a bash script, or Chef/Puppet, etc. You shouldn't have to care about this stuff. As mentioned in a different tip, you should also make sure to disable SSH access, as this will pretty quickly highlight any part of your process that isn't automated. Remember the key phrase from the earlier tip, if you have to SSH into your servers, then your automation has failed.\n";
				}
				function compiledContent$3l() {
					return html$3l;
				}
				function getHeadings$3l() {
					return [{"depth":1,"slug":"automate-everything","text":"Automate Everything"}];
				}

				const Content$3l = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter$3l;
					content.file = file$3l;
					content.url = url$3l;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html$3l)}`;
				});

const __vite_glob_0_55 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	Content: Content$3l,
	compiledContent: compiledContent$3l,
	default: Content$3l,
	file: file$3l,
	frontmatter: frontmatter$3l,
	getHeadings: getHeadings$3l,
	rawContent: rawContent$3l,
	url: url$3l
}, Symbol.toStringTag, { value: 'Module' }));

const html$3k = "<h1 id=\"avoid-fs-mounts\">Avoid FS Mounts</h1>\n<blockquote>\n<p>Avoid filesystem mounts (FUSE, etc).</p>\n</blockquote>\n<p>I’ve found them to be about as reliable as a large government department when used in critical applications. Use the SDK instead.</p>";

				const frontmatter$3k = {};
				const file$3k = "/workspaces/developer-roadmap/src/data/best-practices/aws/content/avoid-fs-mounts.md";
				const url$3k = undefined;
				function rawContent$3k() {
					return "# Avoid FS Mounts\n\n> Avoid filesystem mounts (FUSE, etc).\n\nI've found them to be about as reliable as a large government department when used in critical applications. Use the SDK instead.\n";
				}
				function compiledContent$3k() {
					return html$3k;
				}
				function getHeadings$3k() {
					return [{"depth":1,"slug":"avoid-fs-mounts","text":"Avoid FS Mounts"}];
				}

				const Content$3k = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter$3k;
					content.file = file$3k;
					content.url = url$3k;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html$3k)}`;
				});

const __vite_glob_0_56 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	Content: Content$3k,
	compiledContent: compiledContent$3k,
	default: Content$3k,
	file: file$3k,
	frontmatter: frontmatter$3k,
	getHeadings: getHeadings$3k,
	rawContent: rawContent$3k,
	url: url$3k
}, Symbol.toStringTag, { value: 'Module' }));

const html$3j = "<h1 id=\"multiple-scaling-triggers\">Multiple Scaling Triggers</h1>\n<blockquote>\n<p>Don’t use multiple scaling triggers on the same group.</p>\n</blockquote>\n<p>If you have multiple CloudWatch alarms which trigger scaling actions for the same auto-scaling group, it might not work as you initially expect it to. For example, let’s say you add a trigger to scale up when CPU usage gets too high, or when the inbound network traffic gets high, and your scale down actions are the opposite. You might get an increase in CPU usage, but your inbound network is fine. So the high CPU trigger causes a scale-up action, but the low inbound traffic alarm immediately triggers a scale-down action. Depending on how you’ve set your cooldown period, this can cause quite a problem as they’ll just fight against each other. If you want multiple triggers, you can use multiple auto-scaling groups.</p>";

				const frontmatter$3j = {};
				const file$3j = "/workspaces/developer-roadmap/src/data/best-practices/aws/content/avoid-multiple-scaling-triggers.md";
				const url$3j = undefined;
				function rawContent$3j() {
					return "# Multiple Scaling Triggers\n\n> Don't use multiple scaling triggers on the same group.\n\nIf you have multiple CloudWatch alarms which trigger scaling actions for the same auto-scaling group, it might not work as you initially expect it to. For example, let's say you add a trigger to scale up when CPU usage gets too high, or when the inbound network traffic gets high, and your scale down actions are the opposite. You might get an increase in CPU usage, but your inbound network is fine. So the high CPU trigger causes a scale-up action, but the low inbound traffic alarm immediately triggers a scale-down action. Depending on how you've set your cooldown period, this can cause quite a problem as they'll just fight against each other. If you want multiple triggers, you can use multiple auto-scaling groups.\n";
				}
				function compiledContent$3j() {
					return html$3j;
				}
				function getHeadings$3j() {
					return [{"depth":1,"slug":"multiple-scaling-triggers","text":"Multiple Scaling Triggers"}];
				}

				const Content$3j = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter$3j;
					content.file = file$3j;
					content.url = url$3j;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html$3j)}`;
				});

const __vite_glob_0_57 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	Content: Content$3j,
	compiledContent: compiledContent$3j,
	default: Content$3j,
	file: file$3j,
	frontmatter: frontmatter$3j,
	getHeadings: getHeadings$3j,
	rawContent: rawContent$3j,
	url: url$3j
}, Symbol.toStringTag, { value: 'Module' }));

const html$3i = "<h1 id=\"avoid-server-eips\">Avoid Server EIPs</h1>\n<blockquote>\n<p>Don’t give servers static/elastic IPs.</p>\n</blockquote>\n<p>For a typical web application, you should put things behind a load balancer, and balance them between AZs. There are a few cases where Elastic IPs will probably need to be used, but in order to make best use of auto-scaling you’ll want to use a load balancer instead of giving every instance their own unique IP.</p>";

				const frontmatter$3i = {};
				const file$3i = "/workspaces/developer-roadmap/src/data/best-practices/aws/content/avoid-server-eips.md";
				const url$3i = undefined;
				function rawContent$3i() {
					return "# Avoid Server EIPs\n\n> Don't give servers static/elastic IPs.\n\nFor a typical web application, you should put things behind a load balancer, and balance them between AZs. There are a few cases where Elastic IPs will probably need to be used, but in order to make best use of auto-scaling you'll want to use a load balancer instead of giving every instance their own unique IP.\n";
				}
				function compiledContent$3i() {
					return html$3i;
				}
				function getHeadings$3i() {
					return [{"depth":1,"slug":"avoid-server-eips","text":"Avoid Server EIPs"}];
				}

				const Content$3i = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter$3i;
					content.file = file$3i;
					content.url = url$3i;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html$3i)}`;
				});

const __vite_glob_0_58 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	Content: Content$3i,
	compiledContent: compiledContent$3i,
	default: Content$3i,
	file: file$3i,
	frontmatter: frontmatter$3i,
	getHeadings: getHeadings$3i,
	rawContent: rawContent$3i,
	url: url$3i
}, Symbol.toStringTag, { value: 'Module' }));

const html$3h = "<h1 id=\"naming-convention\">Naming Convention</h1>\n<blockquote>\n<p>Decide on a naming convention early, and stick to it.</p>\n</blockquote>\n<p>There’s a lot of resources on AWS where you can change the name later, but there’s equally a lot where you cannot (security group names, etc). Having a consistent naming convention will help to self-document your infrastructure. Don’t forget to make use of tags too.</p>";

				const frontmatter$3h = {};
				const file$3h = "/workspaces/developer-roadmap/src/data/best-practices/aws/content/aws-naming-convention.md";
				const url$3h = undefined;
				function rawContent$3h() {
					return "# Naming Convention\n\n> Decide on a naming convention early, and stick to it.\n\nThere's a lot of resources on AWS where you can change the name later, but there's equally a lot where you cannot (security group names, etc). Having a consistent naming convention will help to self-document your infrastructure. Don't forget to make use of tags too.\n";
				}
				function compiledContent$3h() {
					return html$3h;
				}
				function getHeadings$3h() {
					return [{"depth":1,"slug":"naming-convention","text":"Naming Convention"}];
				}

				const Content$3h = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter$3h;
					content.file = file$3h;
					content.url = url$3h;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html$3h)}`;
				});

const __vite_glob_0_59 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	Content: Content$3h,
	compiledContent: compiledContent$3h,
	default: Content$3h,
	file: file$3h,
	frontmatter: frontmatter$3h,
	getHeadings: getHeadings$3h,
	rawContent: rawContent$3h,
	url: url$3h
}, Symbol.toStringTag, { value: 'Module' }));

const html$3g = "<h1 id=\"aws-right-choice\">AWS Right Choice</h1>\n<blockquote>\n<p>Make sure AWS is right for your workload.</p>\n</blockquote>\n<p>You should make sure that using AWS is correct for your particular workload. If you have a steady load and 24/7 servers, it’s possible there are cheaper providers you can use, or it might even be cheaper to use dedicated hardware of your own. One of the big benefits of AWS is the ability to scale up and down rapidly in response to load, but not everyone needs that feature. As when purchasing anything, you should shop around a bit first to make sure you’re getting the best deal for what you need</p>";

				const frontmatter$3g = {};
				const file$3g = "/workspaces/developer-roadmap/src/data/best-practices/aws/content/aws-right-choice.md";
				const url$3g = undefined;
				function rawContent$3g() {
					return "# AWS Right Choice\n\n> Make sure AWS is right for your workload.\n\nYou should make sure that using AWS is correct for your particular workload. If you have a steady load and 24/7 servers, it's possible there are cheaper providers you can use, or it might even be cheaper to use dedicated hardware of your own. One of the big benefits of AWS is the ability to scale up and down rapidly in response to load, but not everyone needs that feature. As when purchasing anything, you should shop around a bit first to make sure you're getting the best deal for what you need\n";
				}
				function compiledContent$3g() {
					return html$3g;
				}
				function getHeadings$3g() {
					return [{"depth":1,"slug":"aws-right-choice","text":"AWS Right Choice"}];
				}

				const Content$3g = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter$3g;
					content.file = file$3g;
					content.url = url$3g;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html$3g)}`;
				});

const __vite_glob_0_60 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	Content: Content$3g,
	compiledContent: compiledContent$3g,
	default: Content$3g,
	file: file$3g,
	frontmatter: frontmatter$3g,
	getHeadings: getHeadings$3g,
	rawContent: rawContent$3g,
	url: url$3g
}, Symbol.toStringTag, { value: 'Module' }));

const html$3f = "<h1 id=\"beware-aws-limits\">Beware AWS Limits</h1>\n<blockquote>\n<p>Be aware of AWS service limits before you deploy.</p>\n</blockquote>\n<p>Various service limits are enforced which aren’t highlighted until you’re actually trying to deploy your application and get the error notification. These limits can easily be increased by making a request to AWS support, however that can involve a significant turn around time (as low as a few minutes, up to a few days, based on past experience), during which you won’t be able to finish deploying. A few days before deploying, you should consult the service limits page to see if you think you’re going to exceed any of them, and make your support request ahead of time. You will need to make a separate request to each department where you need a limit increased. It’s also worth pointing out that some limits are global, while others are per-region.</p>";

				const frontmatter$3f = {};
				const file$3f = "/workspaces/developer-roadmap/src/data/best-practices/aws/content/beware-aws-limits.md";
				const url$3f = undefined;
				function rawContent$3f() {
					return "# Beware AWS Limits\n\n> Be aware of AWS service limits before you deploy.\n\nVarious service limits are enforced which aren't highlighted until you're actually trying to deploy your application and get the error notification. These limits can easily be increased by making a request to AWS support, however that can involve a significant turn around time (as low as a few minutes, up to a few days, based on past experience), during which you won't be able to finish deploying. A few days before deploying, you should consult the service limits page to see if you think you're going to exceed any of them, and make your support request ahead of time. You will need to make a separate request to each department where you need a limit increased. It's also worth pointing out that some limits are global, while others are per-region.\n";
				}
				function compiledContent$3f() {
					return html$3f;
				}
				function getHeadings$3f() {
					return [{"depth":1,"slug":"beware-aws-limits","text":"Beware AWS Limits"}];
				}

				const Content$3f = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter$3f;
					content.file = file$3f;
					content.url = url$3f;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html$3f)}`;
				});

const __vite_glob_0_61 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	Content: Content$3f,
	compiledContent: compiledContent$3f,
	default: Content$3f,
	file: file$3f,
	frontmatter: frontmatter$3f,
	getHeadings: getHeadings$3f,
	rawContent: rawContent$3f,
	url: url$3f
}, Symbol.toStringTag, { value: 'Module' }));

const html$3e = "<h1 id=\"billing-alerts\">Billing Alerts</h1>\n<blockquote>\n<p>Set up granular billing alerts.</p>\n</blockquote>\n<p>You should always have at least one billing alert set up, but that will only tell you on a monthly basis once you’ve exceeded your allowance. If you want to catch runaway billing early, you need a more fine grained approach. The way I do it is to set up an alert for my expected usage each week. So the first week’s alert for say $1,000, the second for $2,000, third for $3,000, etc. If the week-2 alarm goes off before the 14th/15th of the month, then I know something is probably going wrong. For even more fine-grained control, you can set this up for each individual service, that way you instantly know which service is causing the problem. This could be useful if your usage on one service is quite steady month-to-month, but another is more erratic. Have the individual weekly alerts for the steady one, but just an overall one for the more erratic one. If everything is steady, then this is probably overkill, as looking at CloudWatch will quickly tell you which service is the one causing the problem.</p>";

				const frontmatter$3e = {};
				const file$3e = "/workspaces/developer-roadmap/src/data/best-practices/aws/content/billing-alerts.md";
				const url$3e = undefined;
				function rawContent$3e() {
					return "# Billing Alerts\n\n> Set up granular billing alerts.\n\nYou should always have at least one billing alert set up, but that will only tell you on a monthly basis once you've exceeded your allowance. If you want to catch runaway billing early, you need a more fine grained approach. The way I do it is to set up an alert for my expected usage each week. So the first week's alert for say $1,000, the second for $2,000, third for $3,000, etc. If the week-2 alarm goes off before the 14th/15th of the month, then I know something is probably going wrong. For even more fine-grained control, you can set this up for each individual service, that way you instantly know which service is causing the problem. This could be useful if your usage on one service is quite steady month-to-month, but another is more erratic. Have the individual weekly alerts for the steady one, but just an overall one for the more erratic one. If everything is steady, then this is probably overkill, as looking at CloudWatch will quickly tell you which service is the one causing the problem.\n";
				}
				function compiledContent$3e() {
					return html$3e;
				}
				function getHeadings$3e() {
					return [{"depth":1,"slug":"billing-alerts","text":"Billing Alerts"}];
				}

				const Content$3e = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter$3e;
					content.file = file$3e;
					content.url = url$3e;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html$3e)}`;
				});

const __vite_glob_0_62 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	Content: Content$3e,
	compiledContent: compiledContent$3e,
	default: Content$3e,
	file: file$3e,
	frontmatter: frontmatter$3e,
	getHeadings: getHeadings$3e,
	rawContent: rawContent$3e,
	url: url$3e
}, Symbol.toStringTag, { value: 'Module' }));

const html$3d = "<h1 id=\"bucket-names\">Bucket Names</h1>\n<blockquote>\n<p>Use ”-” instead of ”.” in bucket names for SSL.</p>\n</blockquote>\n<p>If you ever want to use your bucket over SSL, using a ”.” will cause you to get certificate mismatch errors. You can’t change bucket names once you’ve created them, so you’d have to copy everything to a new bucket.</p>";

				const frontmatter$3d = {};
				const file$3d = "/workspaces/developer-roadmap/src/data/best-practices/aws/content/bucket-names-ssl.md";
				const url$3d = undefined;
				function rawContent$3d() {
					return "# Bucket Names\n\n> Use \"-\" instead of \".\" in bucket names for SSL.\n\nIf you ever want to use your bucket over SSL, using a \".\" will cause you to get certificate mismatch errors. You can't change bucket names once you've created them, so you'd have to copy everything to a new bucket.\n";
				}
				function compiledContent$3d() {
					return html$3d;
				}
				function getHeadings$3d() {
					return [{"depth":1,"slug":"bucket-names","text":"Bucket Names"}];
				}

				const Content$3d = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter$3d;
					content.file = file$3d;
					content.url = url$3d;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html$3d)}`;
				});

const __vite_glob_0_63 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	Content: Content$3d,
	compiledContent: compiledContent$3d,
	default: Content$3d,
	file: file$3d,
	frontmatter: frontmatter$3d,
	getHeadings: getHeadings$3d,
	rawContent: rawContent$3d,
	url: url$3d
}, Symbol.toStringTag, { value: 'Module' }));

const html$3c = "<h1 id=\"cloudfront-and-s3\">Cloudfront and S3</h1>\n<blockquote>\n<p>You don’t have to use CloudFront in front of S3 (but it can help).</p>\n</blockquote>\n<p>If all you care about is scalability, you can link people directly to the S3 URL instead of using CloudFront. S3 can scale to any capacity, so is great if that’s all your care about. Additionally, updates are available quickly in S3, yet you have to wait for the TTL when using a CDN to see the change (although I believe you can set a 0s TTL in CloudFront now, so this point is probably moot).</p>\n<p>If you need speed, or are handling very high bandwidth (10TB+), then you might want to use a CDN like CloudFront in front of S3. CloudFront can dramatically <a href=\"http://www.quora.com/What-are-typical-latencies-for-static-content-in-S3-vs-Cloudfront\" rel=\"noopener noreferrer nofollow\" target=\"_blank\">speed up access</a> for users around the globe, as it copies your content to edge locations. Depending on your use case, this can also work out slightly cheaper if you deal with very high bandwidth (10TB+) with lower request numbers, as it’s about $0.010/GB cheaper for CloudFront bandwidth than S3 bandwidth once you get above 10TB, but the cost per request is slightly higher than if you were to access the files from S3 directly. Depending on your usage pattern, the savings from bandwidth could outweigh the extra cost per request. Since content is only fetched from S3 infrequently (and at a much lower rate than normal), your S3 cost would be much smaller than if you were serving content directly from S3. The <a href=\"http://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/MigrateS3ToCloudFront.html\" rel=\"noopener noreferrer nofollow\" target=\"_blank\">AWS documentation on CloudFront</a> explains how you can use it with S3.</p>";

				const frontmatter$3c = {};
				const file$3c = "/workspaces/developer-roadmap/src/data/best-practices/aws/content/cloudfront-in-front-of-s3.md";
				const url$3c = undefined;
				function rawContent$3c() {
					return "# Cloudfront and S3\n\n> You don't have to use CloudFront in front of S3 (but it can help).\n\nIf all you care about is scalability, you can link people directly to the S3 URL instead of using CloudFront. S3 can scale to any capacity, so is great if that's all your care about. Additionally, updates are available quickly in S3, yet you have to wait for the TTL when using a CDN to see the change (although I believe you can set a 0s TTL in CloudFront now, so this point is probably moot).\n\nIf you need speed, or are handling very high bandwidth (10TB+), then you might want to use a CDN like CloudFront in front of S3. CloudFront can dramatically [speed up access](http://www.quora.com/What-are-typical-latencies-for-static-content-in-S3-vs-Cloudfront) for users around the globe, as it copies your content to edge locations. Depending on your use case, this can also work out slightly cheaper if you deal with very high bandwidth (10TB+) with lower request numbers, as it's about $0.010/GB cheaper for CloudFront bandwidth than S3 bandwidth once you get above 10TB, but the cost per request is slightly higher than if you were to access the files from S3 directly. Depending on your usage pattern, the savings from bandwidth could outweigh the extra cost per request. Since content is only fetched from S3 infrequently (and at a much lower rate than normal), your S3 cost would be much smaller than if you were serving content directly from S3. The [AWS documentation on CloudFront](http://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/MigrateS3ToCloudFront.html) explains how you can use it with S3.\n";
				}
				function compiledContent$3c() {
					return html$3c;
				}
				function getHeadings$3c() {
					return [{"depth":1,"slug":"cloudfront-and-s3","text":"Cloudfront and S3"}];
				}

				const Content$3c = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter$3c;
					content.file = file$3c;
					content.url = url$3c;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html$3c)}`;
				});

const __vite_glob_0_64 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	Content: Content$3c,
	compiledContent: compiledContent$3c,
	default: Content$3c,
	file: file$3c,
	frontmatter: frontmatter$3c,
	getHeadings: getHeadings$3c,
	rawContent: rawContent$3c,
	url: url$3c
}, Symbol.toStringTag, { value: 'Module' }));

const html$3b = "<h1 id=\"cloudtrail\">CloudTrail</h1>\n<blockquote>\n<p>Use CloudTrail to keep an audit log.</p>\n</blockquote>\n<p>CloudTrail will log any action performed via the APIs or web console into an S3 bucket. Set up the bucket with versioning to be sure no one can modify your logs, and you then have a complete audit trail of all changes in your account. You hope that you will never need to use this, but it’s well worth having for when you do.</p>";

				const frontmatter$3b = {};
				const file$3b = "/workspaces/developer-roadmap/src/data/best-practices/aws/content/cloudtrail.md";
				const url$3b = undefined;
				function rawContent$3b() {
					return "# CloudTrail\n\n> Use CloudTrail to keep an audit log.\n\nCloudTrail will log any action performed via the APIs or web console into an S3 bucket. Set up the bucket with versioning to be sure no one can modify your logs, and you then have a complete audit trail of all changes in your account. You hope that you will never need to use this, but it's well worth having for when you do.\n";
				}
				function compiledContent$3b() {
					return html$3b;
				}
				function getHeadings$3b() {
					return [{"depth":1,"slug":"cloudtrail","text":"CloudTrail"}];
				}

				const Content$3b = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter$3b;
					content.file = file$3b;
					content.url = url$3b;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html$3b)}`;
				});

const __vite_glob_0_65 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	Content: Content$3b,
	compiledContent: compiledContent$3b,
	default: Content$3b,
	file: file$3b,
	frontmatter: frontmatter$3b,
	getHeadings: getHeadings$3b,
	rawContent: rawContent$3b,
	url: url$3b
}, Symbol.toStringTag, { value: 'Module' }));

const html$3a = "<h1 id=\"cli-tools\">CLI Tools</h1>\n<blockquote>\n<p>Use the CLI tools.</p>\n</blockquote>\n<p>It can become extremely tedious to create alarms using the web console, especially if you’re setting up a lot of similar alarms, as there’s no ability to “clone” an existing alarm while making a minor change elsewhere. Scripting this using the CLI tools can save you lots of time.</p>";

				const frontmatter$3a = {};
				const file$3a = "/workspaces/developer-roadmap/src/data/best-practices/aws/content/cloudwatch-cli-tools.md";
				const url$3a = undefined;
				function rawContent$3a() {
					return "# CLI Tools\n\n> Use the CLI tools.\n\nIt can become extremely tedious to create alarms using the web console, especially if you're setting up a lot of similar alarms, as there's no ability to \"clone\" an existing alarm while making a minor change elsewhere. Scripting this using the CLI tools can save you lots of time.\n";
				}
				function compiledContent$3a() {
					return html$3a;
				}
				function getHeadings$3a() {
					return [{"depth":1,"slug":"cli-tools","text":"CLI Tools"}];
				}

				const Content$3a = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter$3a;
					content.file = file$3a;
					content.url = url$3a;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html$3a)}`;
				});

const __vite_glob_0_66 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	Content: Content$3a,
	compiledContent: compiledContent$3a,
	default: Content$3a,
	file: file$3a,
	frontmatter: frontmatter$3a,
	getHeadings: getHeadings$3a,
	rawContent: rawContent$3a,
	url: url$3a
}, Symbol.toStringTag, { value: 'Module' }));

const html$39 = "<h1 id=\"custom-metrics\">Custom Metrics</h1>\n<blockquote>\n<p>Use custom metrics.</p>\n</blockquote>\n<p>If you want to monitor things not covered by the free metrics, you can send your own metric information to CloudWatch and make use of the alarms and graphing features. This can not only be used for things like tracking diskspace usage, but also for custom application metrics too. The AWS page on <a href=\"https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/publishingMetrics.html\" rel=\"noopener noreferrer nofollow\" target=\"_blank\">publishing custom metrics</a> has more information.</p>";

				const frontmatter$39 = {};
				const file$39 = "/workspaces/developer-roadmap/src/data/best-practices/aws/content/cloudwatch-custom-metrics.md";
				const url$39 = undefined;
				function rawContent$39() {
					return "# Custom Metrics\n\n> Use custom metrics.\n\nIf you want to monitor things not covered by the free metrics, you can send your own metric information to CloudWatch and make use of the alarms and graphing features. This can not only be used for things like tracking diskspace usage, but also for custom application metrics too. The AWS page on [publishing custom metrics](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/publishingMetrics.html) has more information.\n";
				}
				function compiledContent$39() {
					return html$39;
				}
				function getHeadings$39() {
					return [{"depth":1,"slug":"custom-metrics","text":"Custom Metrics"}];
				}

				const Content$39 = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter$39;
					content.file = file$39;
					content.url = url$39;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html$39)}`;
				});

const __vite_glob_0_67 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	Content: Content$39,
	compiledContent: compiledContent$39,
	default: Content$39,
	file: file$39,
	frontmatter: frontmatter$39,
	getHeadings: getHeadings$39,
	rawContent: rawContent$39,
	url: url$39
}, Symbol.toStringTag, { value: 'Module' }));

const html$38 = "<h1 id=\"detailed-monitoring\">Detailed Monitoring</h1>\n<blockquote>\n<p>Use detailed monitoring.</p>\n</blockquote>\n<p>It’s ~$3.50 per instance/month, and well worth the extra cost for the extra detail. 1 minute granularity is much better than 5 minute. You can have cases where a problem is hidden in the 5 minute breakdown, but shows itself quite clearly in the 1 minute graphs. This may not be useful for everyone, but it’s made investigating some issues much easier for me.</p>";

				const frontmatter$38 = {};
				const file$38 = "/workspaces/developer-roadmap/src/data/best-practices/aws/content/cloudwatch-detailed-monitoring.md";
				const url$38 = undefined;
				function rawContent$38() {
					return "# Detailed Monitoring\n\n> Use detailed monitoring.\n\nIt's ~$3.50 per instance/month, and well worth the extra cost for the extra detail. 1 minute granularity is much better than 5 minute. You can have cases where a problem is hidden in the 5 minute breakdown, but shows itself quite clearly in the 1 minute graphs. This may not be useful for everyone, but it's made investigating some issues much easier for me.\n";
				}
				function compiledContent$38() {
					return html$38;
				}
				function getHeadings$38() {
					return [{"depth":1,"slug":"detailed-monitoring","text":"Detailed Monitoring"}];
				}

				const Content$38 = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter$38;
					content.file = file$38;
					content.url = url$38;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html$38)}`;
				});

const __vite_glob_0_68 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	Content: Content$38,
	compiledContent: compiledContent$38,
	default: Content$38,
	file: file$38,
	frontmatter: frontmatter$38,
	getHeadings: getHeadings$38,
	rawContent: rawContent$38,
	url: url$38
}, Symbol.toStringTag, { value: 'Module' }));

const html$37 = "<h1 id=\"free-metrics\">Free Metrics</h1>\n<blockquote>\n<p>Use the free metrics.</p>\n</blockquote>\n<p>CloudWatch monitors all sorts of things for free (bandwidth, CPU usage, etc.), and you get up to 2 weeks of historical data. This saves you having to use your own tools to monitor you systems. If you need longer than 2 weeks, unfortunately you’ll need to use a third-party or custom built monitoring solution.</p>";

				const frontmatter$37 = {};
				const file$37 = "/workspaces/developer-roadmap/src/data/best-practices/aws/content/cloudwatch-free-metrics.md";
				const url$37 = undefined;
				function rawContent$37() {
					return "# Free Metrics\n\n> Use the free metrics.\n\nCloudWatch monitors all sorts of things for free (bandwidth, CPU usage, etc.), and you get up to 2 weeks of historical data. This saves you having to use your own tools to monitor you systems. If you need longer than 2 weeks, unfortunately you'll need to use a third-party or custom built monitoring solution.\n";
				}
				function compiledContent$37() {
					return html$37;
				}
				function getHeadings$37() {
					return [{"depth":1,"slug":"free-metrics","text":"Free Metrics"}];
				}

				const Content$37 = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter$37;
					content.file = file$37;
					content.url = url$37;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html$37)}`;
				});

const __vite_glob_0_69 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	Content: Content$37,
	compiledContent: compiledContent$37,
	default: Content$37,
	file: file$37,
	frontmatter: frontmatter$37,
	getHeadings: getHeadings$37,
	rawContent: rawContent$37,
	url: url$37
}, Symbol.toStringTag, { value: 'Module' }));

const html$36 = "<h1 id=\"configuration-endpoints\">Configuration Endpoints</h1>\n<blockquote>\n<p>Use the configuration endpoints, instead of individual node endpoints.</p>\n</blockquote>\n<p>Normally you would have to make your application aware of every Memcached node available. If you want to dynamically scale up your capacity, then this becomes an issue as you will need to have some way to make your application aware of the changes. An easier way is to use the configuration endpoint, which means using an AWS version of a Memcached library that abstracts away the auto-discovery of new nodes. The <a href=\"https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/WhatIs.html\" rel=\"noopener noreferrer nofollow\" target=\"_blank\">AWS guide to cache node auto-discovery</a> has more information.</p>";

				const frontmatter$36 = {};
				const file$36 = "/workspaces/developer-roadmap/src/data/best-practices/aws/content/configuration-endpoints.md";
				const url$36 = undefined;
				function rawContent$36() {
					return "# Configuration Endpoints\n\n> Use the configuration endpoints, instead of individual node endpoints.\n\nNormally you would have to make your application aware of every Memcached node available. If you want to dynamically scale up your capacity, then this becomes an issue as you will need to have some way to make your application aware of the changes. An easier way is to use the configuration endpoint, which means using an AWS version of a Memcached library that abstracts away the auto-discovery of new nodes. The [AWS guide to cache node auto-discovery](https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/WhatIs.html) has more information.\n";
				}
				function compiledContent$36() {
					return html$36;
				}
				function getHeadings$36() {
					return [{"depth":1,"slug":"configuration-endpoints","text":"Configuration Endpoints"}];
				}

				const Content$36 = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter$36;
					content.file = file$36;
					content.url = url$36;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html$36)}`;
				});

const __vite_glob_0_70 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	Content: Content$36,
	compiledContent: compiledContent$36,
	default: Content$36,
	file: file$36,
	frontmatter: frontmatter$36,
	getHeadings: getHeadings$36,
	rawContent: rawContent$36,
	url: url$36
}, Symbol.toStringTag, { value: 'Module' }));

const html$35 = "<h1 id=\"configured-azs\">Configured AZs</h1>\n<blockquote>\n<p>Only use the availability zones (AZs) your ELB is configured for.</p>\n</blockquote>\n<p>If you add your scaling group to multiple AZs, make sure your ELB is configured to use all of those AZs, otherwise your capacity will scale up, and the load balancer won’t be able to see them.</p>";

				const frontmatter$35 = {};
				const file$35 = "/workspaces/developer-roadmap/src/data/best-practices/aws/content/configured-azs-only.md";
				const url$35 = undefined;
				function rawContent$35() {
					return "# Configured AZs\n\n> Only use the availability zones (AZs) your ELB is configured for.\n\nIf you add your scaling group to multiple AZs, make sure your ELB is configured to use all of those AZs, otherwise your capacity will scale up, and the load balancer won't be able to see them.\n";
				}
				function compiledContent$35() {
					return html$35;
				}
				function getHeadings$35() {
					return [{"depth":1,"slug":"configured-azs","text":"Configured AZs"}];
				}

				const Content$35 = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter$35;
					content.file = file$35;
					content.url = url$35;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html$35)}`;
				});

const __vite_glob_0_71 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	Content: Content$35,
	compiledContent: compiledContent$35,
	default: Content$35,
	file: file$35,
	frontmatter: frontmatter$35,
	getHeadings: getHeadings$35,
	rawContent: rawContent$35,
	url: url$35
}, Symbol.toStringTag, { value: 'Module' }));

const html$34 = "<h1 id=\"disable-ssh-access\">Disable SSH Access</h1>\n<blockquote>\n<p>Disable SSH access to all servers.</p>\n</blockquote>\n<p>This sounds crazy, I know, but port 22 should be disallowed for everyone in your security group. If there’s one thing you take away from this post, this should be it: <strong>If you have to SSH into your servers, then your automation has failed</strong>. Disabling it at the firewall level (rather than on the servers themselves) will help the transition to this frame of thinking, as it will highlight any areas you need to automate, while still letting you easily re-instate access to solve immediate issues. It’s incredibly freeing to know that you never need to SSH into an instance. This is both the most frightening and yet most useful thing I’ve learned.</p>\n<p>Disabling inbound SSH has just been a way for me to stop myself cheating with automation (Oh, I’ll just SSH in and fix this one thing). I can still re-enable it in the security group if I need to actively debug something on an instance, since sometimes there really is no other way to debug certain issues. It also depends on your application; If your application relies on you being able to push things to a server via SSH, then disabling it might be a bad idea. Blocking inbound SSH worked for me, and forced me to get my automation into a decent state, but it might not be for everyone.</p>";

				const frontmatter$34 = {};
				const file$34 = "/workspaces/developer-roadmap/src/data/best-practices/aws/content/disable-ssh-access.md";
				const url$34 = undefined;
				function rawContent$34() {
					return "# Disable SSH Access\n\n> Disable SSH access to all servers.\n\nThis sounds crazy, I know, but port 22 should be disallowed for everyone in your security group. If there's one thing you take away from this post, this should be it: **If you have to SSH into your servers, then your automation has failed**. Disabling it at the firewall level (rather than on the servers themselves) will help the transition to this frame of thinking, as it will highlight any areas you need to automate, while still letting you easily re-instate access to solve immediate issues. It's incredibly freeing to know that you never need to SSH into an instance. This is both the most frightening and yet most useful thing I've learned.\n\nDisabling inbound SSH has just been a way for me to stop myself cheating with automation (Oh, I'll just SSH in and fix this one thing). I can still re-enable it in the security group if I need to actively debug something on an instance, since sometimes there really is no other way to debug certain issues. It also depends on your application; If your application relies on you being able to push things to a server via SSH, then disabling it might be a bad idea. Blocking inbound SSH worked for me, and forced me to get my automation into a decent state, but it might not be for everyone.\n";
				}
				function compiledContent$34() {
					return html$34;
				}
				function getHeadings$34() {
					return [{"depth":1,"slug":"disable-ssh-access","text":"Disable SSH Access"}];
				}

				const Content$34 = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter$34;
					content.file = file$34;
					content.url = url$34;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html$34)}`;
				});

const __vite_glob_0_72 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	Content: Content$34,
	compiledContent: compiledContent$34,
	default: Content$34,
	file: file$34,
	frontmatter: frontmatter$34,
	getHeadings: getHeadings$34,
	rawContent: rawContent$34,
	url: url$34
}, Symbol.toStringTag, { value: 'Module' }));

const html$33 = "<h1 id=\"ec2-roles\">EC2 Roles</h1>\n<blockquote>\n<p>Use EC2 roles, do not give applications an IAM account.</p>\n</blockquote>\n<p>If your application has AWS credentials baked into it, you’re “doing it wrong”. One of the reasons it’s important to use the AWS SDK for your language is that you can really easily use EC2 IAM roles. The idea of a role is that you specify the permissions a certain role should get, then assign that role to an EC2 instance. Whenever you use the AWS SDK on that instance, you don’t specify any credentials. Instead, the SDK will retrieve temporary credentials which have the permissions of the role you set up. This is all handled transparently as far as you’re concerned. It’s secure, and extremely useful.</p>";

				const frontmatter$33 = {};
				const file$33 = "/workspaces/developer-roadmap/src/data/best-practices/aws/content/ec2-roles.md";
				const url$33 = undefined;
				function rawContent$33() {
					return "# EC2 Roles\n\n> Use EC2 roles, do not give applications an IAM account.\n\nIf your application has AWS credentials baked into it, you're \"doing it wrong\". One of the reasons it's important to use the AWS SDK for your language is that you can really easily use EC2 IAM roles. The idea of a role is that you specify the permissions a certain role should get, then assign that role to an EC2 instance. Whenever you use the AWS SDK on that instance, you don't specify any credentials. Instead, the SDK will retrieve temporary credentials which have the permissions of the role you set up. This is all handled transparently as far as you're concerned. It's secure, and extremely useful.\n";
				}
				function compiledContent$33() {
					return html$33;
				}
				function getHeadings$33() {
					return [{"depth":1,"slug":"ec2-roles","text":"EC2 Roles"}];
				}

				const Content$33 = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter$33;
					content.file = file$33;
					content.url = url$33;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html$33)}`;
				});

const __vite_glob_0_73 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	Content: Content$33,
	compiledContent: compiledContent$33,
	default: Content$33,
	file: file$33,
	frontmatter: frontmatter$33,
	getHeadings: getHeadings$33,
	rawContent: rawContent$33,
	url: url$33
}, Symbol.toStringTag, { value: 'Module' }));

const html$32 = "<h1 id=\"elb-healthchecks\">ELB Healthchecks</h1>\n<blockquote>\n<p>Use ELB health check instead of EC2 health checks.</p>\n</blockquote>\n<p>This is a configuration option when creating your scaling group, you can specify whether to use the standard EC2 checks (is the instance connected to the network), or to use your ELB health check. The ELB health check offers way more flexibility. If your health check fails and the instance gets taken out of the load balancing pool, you’re pretty much always going to want to have that instance killed by auto-scaling and a fresh one take it’s place. If you don’t set up your scaling group to use the ELB checks, then that won’t necessarily happen. The <a href=\"https://docs.aws.amazon.com/autoscaling/ec2/userguide/as-add-elb-healthcheck.html\" rel=\"noopener noreferrer nofollow\" target=\"_blank\">AWS documentation on adding the health check</a> has all the information you need to set this up.</p>";

				const frontmatter$32 = {};
				const file$32 = "/workspaces/developer-roadmap/src/data/best-practices/aws/content/elb-healthchecks.md";
				const url$32 = undefined;
				function rawContent$32() {
					return "# ELB Healthchecks\n\n> Use ELB health check instead of EC2 health checks.\n\nThis is a configuration option when creating your scaling group, you can specify whether to use the standard EC2 checks (is the instance connected to the network), or to use your ELB health check. The ELB health check offers way more flexibility. If your health check fails and the instance gets taken out of the load balancing pool, you're pretty much always going to want to have that instance killed by auto-scaling and a fresh one take it's place. If you don't set up your scaling group to use the ELB checks, then that won't necessarily happen. The [AWS documentation on adding the health check](https://docs.aws.amazon.com/autoscaling/ec2/userguide/as-add-elb-healthcheck.html) has all the information you need to set this up.\n";
				}
				function compiledContent$32() {
					return html$32;
				}
				function getHeadings$32() {
					return [{"depth":1,"slug":"elb-healthchecks","text":"ELB Healthchecks"}];
				}

				const Content$32 = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter$32;
					content.file = file$32;
					content.url = url$32;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html$32)}`;
				});

const __vite_glob_0_74 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	Content: Content$32,
	compiledContent: compiledContent$32,
	default: Content$32,
	file: file$32,
	frontmatter: frontmatter$32,
	getHeadings: getHeadings$32,
	rawContent: rawContent$32,
	url: url$32
}, Symbol.toStringTag, { value: 'Module' }));

const html$31 = "<h1 id=\"failover-event-subscription\">Failover Event Subscription</h1>\n<blockquote>\n<p>Set up event subscriptions for failover.</p>\n</blockquote>\n<p>If you’re using a Multi-AZ setup, this is one of those things you might not think about which ends up being incredibly useful when you do need it.</p>";

				const frontmatter$31 = {};
				const file$31 = "/workspaces/developer-roadmap/src/data/best-practices/aws/content/failover-event-subscription.md";
				const url$31 = undefined;
				function rawContent$31() {
					return "# Failover Event Subscription\n\n> Set up event subscriptions for failover.\n\nIf you're using a Multi-AZ setup, this is one of those things you might not think about which ends up being incredibly useful when you do need it.\n";
				}
				function compiledContent$31() {
					return html$31;
				}
				function getHeadings$31() {
					return [{"depth":1,"slug":"failover-event-subscription","text":"Failover Event Subscription"}];
				}

				const Content$31 = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter$31;
					content.file = file$31;
					content.url = url$31;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html$31)}`;
				});

const __vite_glob_0_75 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	Content: Content$31,
	compiledContent: compiledContent$31,
	default: Content$31,
	file: file$31,
	frontmatter: frontmatter$31,
	getHeadings: getHeadings$31,
	rawContent: rawContent$31,
	url: url$31
}, Symbol.toStringTag, { value: 'Module' }));

const html$30 = "<h1 id=\"group-permissions\">Group Permissions</h1>\n<blockquote>\n<p>Assign permissions to groups, not users.</p>\n</blockquote>\n<p>Managing users can be a pain, if you’re using Active Directory, or some other external authentication mechanism which you’ve integrated with IAM, then this probably won’t matter as much (or maybe it matters more). But I’ve found it much easier to manage permissions by assigning them only to groups, rather than to individual users. It’s much easier to rein in permissions and get an overall view of the system than going through each individual user to see what permissions have been assigned.</p>";

				const frontmatter$30 = {};
				const file$30 = "/workspaces/developer-roadmap/src/data/best-practices/aws/content/group-permissions.md";
				const url$30 = undefined;
				function rawContent$30() {
					return "# Group Permissions\n\n> Assign permissions to groups, not users.\n\nManaging users can be a pain, if you're using Active Directory, or some other external authentication mechanism which you've integrated with IAM, then this probably won't matter as much (or maybe it matters more). But I've found it much easier to manage permissions by assigning them only to groups, rather than to individual users. It's much easier to rein in permissions and get an overall view of the system than going through each individual user to see what permissions have been assigned.\n";
				}
				function compiledContent$30() {
					return html$30;
				}
				function getHeadings$30() {
					return [{"depth":1,"slug":"group-permissions","text":"Group Permissions"}];
				}

				const Content$30 = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter$30;
					content.file = file$30;
					content.url = url$30;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html$30)}`;
				});

const __vite_glob_0_76 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	Content: Content$30,
	compiledContent: compiledContent$30,
	default: Content$30,
	file: file$30,
	frontmatter: frontmatter$30,
	getHeadings: getHeadings$30,
	rawContent: rawContent$30,
	url: url$30
}, Symbol.toStringTag, { value: 'Module' }));

const html$2$ = "<h1 id=\"\"></h1>";

				const frontmatter$2$ = {};
				const file$2$ = "/workspaces/developer-roadmap/src/data/best-practices/aws/content/index.md";
				const url$2$ = undefined;
				function rawContent$2$() {
					return "#\n";
				}
				function compiledContent$2$() {
					return html$2$;
				}
				function getHeadings$2$() {
					return [{"depth":1,"slug":"","text":""}];
				}

				const Content$2$ = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter$2$;
					content.file = file$2$;
					content.url = url$2$;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html$2$)}`;
				});

const __vite_glob_0_77 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	Content: Content$2$,
	compiledContent: compiledContent$2$,
	default: Content$2$,
	file: file$2$,
	frontmatter: frontmatter$2$,
	getHeadings: getHeadings$2$,
	rawContent: rawContent$2$,
	url: url$2$
}, Symbol.toStringTag, { value: 'Module' }));

const html$2_ = "<h1 id=\"key-management-strategy\">Key Management Strategy</h1>\n<blockquote>\n<p>Decide on a key-management strategy from the start.</p>\n</blockquote>\n<p>Are you going to have one key-pair per group of instances, or are you going to have one key-pair you use for your entire account? It’s easy to modify your authorized-keys file with a bootstrap script of course, but you need to decide if you want to manage multiple key-pairs or not, as things will get complicated later on if you try to change your mind.</p>";

				const frontmatter$2_ = {};
				const file$2_ = "/workspaces/developer-roadmap/src/data/best-practices/aws/content/key-management-strategy.md";
				const url$2_ = undefined;
				function rawContent$2_() {
					return "# Key Management Strategy\n\n> Decide on a key-management strategy from the start.\n\nAre you going to have one key-pair per group of instances, or are you going to have one key-pair you use for your entire account? It's easy to modify your authorized-keys file with a bootstrap script of course, but you need to decide if you want to manage multiple key-pairs or not, as things will get complicated later on if you try to change your mind.\n";
				}
				function compiledContent$2_() {
					return html$2_;
				}
				function getHeadings$2_() {
					return [{"depth":1,"slug":"key-management-strategy","text":"Key Management Strategy"}];
				}

				const Content$2_ = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter$2_;
					content.file = file$2_;
					content.url = url$2_;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html$2_)}`;
				});

const __vite_glob_0_78 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	Content: Content$2_,
	compiledContent: compiledContent$2_,
	default: Content$2_,
	file: file$2_,
	frontmatter: frontmatter$2_,
	getHeadings: getHeadings$2_,
	rawContent: rawContent$2_,
	url: url$2_
}, Symbol.toStringTag, { value: 'Module' }));

const html$2Z = "<h1 id=\"lock-security-groups\">Lock Security Groups</h1>\n<blockquote>\n<p>Lock down your security groups.</p>\n</blockquote>\n<p>Don’t use <code>0.0.0.0/0</code> if you can help it, make sure to use specific rules to restrict access to your instances. For example, if your instances are behind an ELB, you should set your security groups to only allow traffic from the ELBs, rather than from <code>0.0.0.0/0</code>. You can do that by entering “amazon-elb/amazon-elb-sg” as the CIDR (it should auto-complete for you). If you need to allow some of your other instances access to certain ports, don’t use their IP, but specify their security group identifier instead (just start typing “sg-” and it should auto-complete for you).</p>";

				const frontmatter$2Z = {};
				const file$2Z = "/workspaces/developer-roadmap/src/data/best-practices/aws/content/lock-security-groups.md";
				const url$2Z = undefined;
				function rawContent$2Z() {
					return "# Lock Security Groups\n\n> Lock down your security groups.\n\nDon't use `0.0.0.0/0` if you can help it, make sure to use specific rules to restrict access to your instances. For example, if your instances are behind an ELB, you should set your security groups to only allow traffic from the ELBs, rather than from `0.0.0.0/0`. You can do that by entering \"amazon-elb/amazon-elb-sg\" as the CIDR (it should auto-complete for you). If you need to allow some of your other instances access to certain ports, don't use their IP, but specify their security group identifier instead (just start typing \"sg-\" and it should auto-complete for you).\n";
				}
				function compiledContent$2Z() {
					return html$2Z;
				}
				function getHeadings$2Z() {
					return [{"depth":1,"slug":"lock-security-groups","text":"Lock Security Groups"}];
				}

				const Content$2Z = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter$2Z;
					content.file = file$2Z;
					content.url = url$2Z;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html$2Z)}`;
				});

const __vite_glob_0_79 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	Content: Content$2Z,
	compiledContent: compiledContent$2Z,
	default: Content$2Z,
	file: file$2Z,
	frontmatter: frontmatter$2Z,
	getHeadings: getHeadings$2Z,
	rawContent: rawContent$2Z,
	url: url$2Z
}, Symbol.toStringTag, { value: 'Module' }));

const html$2Y = "<h1 id=\"logs-information\">Logs Information</h1>\n<blockquote>\n<p>Store extra information in your logs.</p>\n</blockquote>\n<p>Log lines normally have information like timestamp, pid, etc. You’ll also probably want to add instance-id, region, availability-zone and environment (staging, production, etc), as these will help debugging considerably. You can get this information from the <a href=\"http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/AESDG-chapter-instancedata.html\" rel=\"noopener noreferrer nofollow\" target=\"_blank\">instance metadata service</a>. The method I use is to grab this information as part of my bootstrap scripts, and store it in files on the filesystem (/env/az, /env/region, etc). This way I’m not constantly querying the metadata service for the information. You should make sure this information gets updated properly when your instances reboot, as you don’t want to save an AMI and have the same data persist, as it will then be incorrect.</p>";

				const frontmatter$2Y = {};
				const file$2Y = "/workspaces/developer-roadmap/src/data/best-practices/aws/content/logs-information.md";
				const url$2Y = undefined;
				function rawContent$2Y() {
					return "# Logs Information\n\n> Store extra information in your logs.\n\nLog lines normally have information like timestamp, pid, etc. You'll also probably want to add instance-id, region, availability-zone and environment (staging, production, etc), as these will help debugging considerably. You can get this information from the [instance metadata service](http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/AESDG-chapter-instancedata.html). The method I use is to grab this information as part of my bootstrap scripts, and store it in files on the filesystem (/env/az, /env/region, etc). This way I'm not constantly querying the metadata service for the information. You should make sure this information gets updated properly when your instances reboot, as you don't want to save an AMI and have the same data persist, as it will then be incorrect.\n";
				}
				function compiledContent$2Y() {
					return html$2Y;
				}
				function getHeadings$2Y() {
					return [{"depth":1,"slug":"logs-information","text":"Logs Information"}];
				}

				const Content$2Y = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter$2Y;
					content.file = file$2Y;
					content.url = url$2Y;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html$2Y)}`;
				});

const __vite_glob_0_80 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	Content: Content$2Y,
	compiledContent: compiledContent$2Y,
	default: Content$2Y,
	file: file$2Y,
	frontmatter: frontmatter$2Y,
	getHeadings: getHeadings$2Y,
	rawContent: rawContent$2Y,
	url: url$2Y
}, Symbol.toStringTag, { value: 'Module' }));

const html$2X = "<h1 id=\"multi-factor-auth\">Multi-factor Auth</h1>\n<blockquote>\n<p>IAM users can have multi-factor authentication, use it!</p>\n</blockquote>\n<p>Enable MFA for your IAM users to add an extra layer of security. Your master account should most definitely have this, but it’s also worth enabling it for normal IAM users too.</p>";

				const frontmatter$2X = {};
				const file$2X = "/workspaces/developer-roadmap/src/data/best-practices/aws/content/multi-factor-auth-iam.md";
				const url$2X = undefined;
				function rawContent$2X() {
					return "# Multi-factor Auth\n\n> IAM users can have multi-factor authentication, use it!\n\nEnable MFA for your IAM users to add an extra layer of security. Your master account should most definitely have this, but it's also worth enabling it for normal IAM users too.\n";
				}
				function compiledContent$2X() {
					return html$2X;
				}
				function getHeadings$2X() {
					return [{"depth":1,"slug":"multi-factor-auth","text":"Multi-factor Auth"}];
				}

				const Content$2X = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter$2X;
					content.file = file$2X;
					content.url = url$2X;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html$2X)}`;
				});

const __vite_glob_0_81 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	Content: Content$2X,
	compiledContent: compiledContent$2X,
	default: Content$2X,
	file: file$2X,
	frontmatter: frontmatter$2X,
	getHeadings: getHeadings$2X,
	rawContent: rawContent$2X,
	url: url$2X
}, Symbol.toStringTag, { value: 'Module' }));

const html$2W = "<h1 id=\"pre-warm-elb\">Pre-Warm ELB</h1>\n<blockquote>\n<p>Pre-warm your ELBs if you’re expecting heavy traffic.</p>\n</blockquote>\n<p>It takes time for your ELB to scale up capacity. If you know you’re going to have a large traffic spike (selling tickets, big event, etc), you need to “warm up” your ELB in advance. You can inject a load of traffic, and it will cause ELB to scale up and not choke when you actually get the traffic, however AWS suggest you contact them instead to prewarm your load balancer. (Source: <a href=\"https://aws.amazon.com/articles/best-practices-in-evaluating-elastic-load-balancing/#pre-warming\" rel=\"noopener noreferrer nofollow\" target=\"_blank\">Best Practices in Evaluating Elastic Load Balancing</a>). Alternatively you can install your own load balancer software on an EC2 instance and use that instead (HAProxy, etc).</p>";

				const frontmatter$2W = {};
				const file$2W = "/workspaces/developer-roadmap/src/data/best-practices/aws/content/pre-warm-elb.md";
				const url$2W = undefined;
				function rawContent$2W() {
					return "# Pre-Warm ELB\n\n> Pre-warm your ELBs if you're expecting heavy traffic.\n\nIt takes time for your ELB to scale up capacity. If you know you're going to have a large traffic spike (selling tickets, big event, etc), you need to \"warm up\" your ELB in advance. You can inject a load of traffic, and it will cause ELB to scale up and not choke when you actually get the traffic, however AWS suggest you contact them instead to prewarm your load balancer. (Source: [Best Practices in Evaluating Elastic Load Balancing](https://aws.amazon.com/articles/best-practices-in-evaluating-elastic-load-balancing/#pre-warming)). Alternatively you can install your own load balancer software on an EC2 instance and use that instead (HAProxy, etc).\n";
				}
				function compiledContent$2W() {
					return html$2W;
				}
				function getHeadings$2W() {
					return [{"depth":1,"slug":"pre-warm-elb","text":"Pre-Warm ELB"}];
				}

				const Content$2W = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter$2W;
					content.file = file$2W;
					content.url = url$2W;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html$2W)}`;
				});

const __vite_glob_0_82 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	Content: Content$2W,
	compiledContent: compiledContent$2W,
	default: Content$2W,
	file: file$2W,
	frontmatter: frontmatter$2W,
	getHeadings: getHeadings$2W,
	rawContent: rawContent$2W,
	url: url$2W
}, Symbol.toStringTag, { value: 'Module' }));

const html$2V = "<h1 id=\"s3-keys\">S3 Keys</h1>\n<blockquote>\n<p>Use random strings at the start of your keys.</p>\n</blockquote>\n<p>This seems like a strange idea, but one of the implementation details of S3 is that Amazon use the object key to determine where a file is physically placed in S3. So files with the same prefix might end up on the same hard disk for example. By randomising your key prefixes, you end up with a better distribution of your object files. (Source: <a href=\"https://aws.amazon.com/blogs/aws/amazon-s3-performance-tips-tricks-seattle-hiring-event/\" rel=\"noopener noreferrer nofollow\" target=\"_blank\">S3 Performance Tips &#x26; Tricks</a>)</p>";

				const frontmatter$2V = {};
				const file$2V = "/workspaces/developer-roadmap/src/data/best-practices/aws/content/random-strings-keys.md";
				const url$2V = undefined;
				function rawContent$2V() {
					return "# S3 Keys\n\n> Use random strings at the start of your keys.\n\nThis seems like a strange idea, but one of the implementation details of S3 is that Amazon use the object key to determine where a file is physically placed in S3. So files with the same prefix might end up on the same hard disk for example. By randomising your key prefixes, you end up with a better distribution of your object files. (Source: [S3 Performance Tips & Tricks](https://aws.amazon.com/blogs/aws/amazon-s3-performance-tips-tricks-seattle-hiring-event/))\n";
				}
				function compiledContent$2V() {
					return html$2V;
				}
				function getHeadings$2V() {
					return [{"depth":1,"slug":"s3-keys","text":"S3 Keys"}];
				}

				const Content$2V = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter$2V;
					content.file = file$2V;
					content.url = url$2V;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html$2V)}`;
				});

const __vite_glob_0_83 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	Content: Content$2V,
	compiledContent: compiledContent$2V,
	default: Content$2V,
	file: file$2V,
	frontmatter: frontmatter$2V,
	getHeadings: getHeadings$2V,
	rawContent: rawContent$2V,
	url: url$2V
}, Symbol.toStringTag, { value: 'Module' }));

const html$2U = "<h1 id=\"redundant-across-azs\">Redundant Across AZs</h1>\n<blockquote>\n<p>Always be redundant across availability zones (AZs).</p>\n</blockquote>\n<p>AZs can have outages, it’s happened in the past that certain things in an AZ have gone down. Spreading your application into multiple AZs is as simple as adding a new AZ to your load balancer and starting an instance in that AZ. You should spread your load over two AZs at the very least! If you can afford it, being redundant across regions can also be well worth it, but this generally has a more complex set up cost and isn’t always necessary. You can now copy AMIs between regions, and you can set up your Route53 records to balance traffic between regions, but you can’t use a single ELB across regions.</p>";

				const frontmatter$2U = {};
				const file$2U = "/workspaces/developer-roadmap/src/data/best-practices/aws/content/redundant-across-azs.md";
				const url$2U = undefined;
				function rawContent$2U() {
					return "# Redundant Across AZs\n\n> Always be redundant across availability zones (AZs).\n\nAZs can have outages, it's happened in the past that certain things in an AZ have gone down. Spreading your application into multiple AZs is as simple as adding a new AZ to your load balancer and starting an instance in that AZ. You should spread your load over two AZs at the very least! If you can afford it, being redundant across regions can also be well worth it, but this generally has a more complex set up cost and isn't always necessary. You can now copy AMIs between regions, and you can set up your Route53 records to balance traffic between regions, but you can't use a single ELB across regions.\n";
				}
				function compiledContent$2U() {
					return html$2U;
				}
				function getHeadings$2U() {
					return [{"depth":1,"slug":"redundant-across-azs","text":"Redundant Across AZs"}];
				}

				const Content$2U = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter$2U;
					content.file = file$2U;
					content.url = url$2U;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html$2U)}`;
				});

const __vite_glob_0_84 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	Content: Content$2U,
	compiledContent: compiledContent$2U,
	default: Content$2U,
	file: file$2U,
	frontmatter: frontmatter$2U,
	getHeadings: getHeadings$2U,
	rawContent: rawContent$2U,
	url: url$2U
}, Symbol.toStringTag, { value: 'Module' }));

const html$2T = "<h1 id=\"release-eips\">Release EIPs</h1>\n<blockquote>\n<p>Don’t keep unassociated Elastic IPs.</p>\n</blockquote>\n<p>You get charged for any Elastic IPs you have created but not associated with an instance, so make sure you don’t keep them around once you’re done with them.</p>";

				const frontmatter$2T = {};
				const file$2T = "/workspaces/developer-roadmap/src/data/best-practices/aws/content/release-eips.md";
				const url$2T = undefined;
				function rawContent$2T() {
					return "# Release EIPs\n\n> Don't keep unassociated Elastic IPs.\n\nYou get charged for any Elastic IPs you have created but not associated with an instance, so make sure you don't keep them around once you're done with them.\n";
				}
				function compiledContent$2T() {
					return html$2T;
				}
				function getHeadings$2T() {
					return [{"depth":1,"slug":"release-eips","text":"Release EIPs"}];
				}

				const Content$2T = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter$2T;
					content.file = file$2T;
					content.url = url$2T;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html$2T)}`;
				});

const __vite_glob_0_85 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	Content: Content$2T,
	compiledContent: compiledContent$2T,
	default: Content$2T,
	file: file$2T,
	frontmatter: frontmatter$2T,
	getHeadings: getHeadings$2T,
	rawContent: rawContent$2T,
	url: url$2T
}, Symbol.toStringTag, { value: 'Module' }));

const html$2S = "<h1 id=\"reserved-instances\">Reserved Instances</h1>\n<blockquote>\n<p>Use reserved instances to save big $$$.</p>\n</blockquote>\n<p>Reserving an instance is just putting some money upfront in order to get a lower hourly rate. It ends up being a lot cheaper than an on-demand instance would cost. So if you know you’re going to be keeping an instance around for 1 or 3 years, it’s well worth reserving them. Reserved instances are a purely logical concept in AWS, you don’t assign a specific instance to be reserved, but rather just specify the type and size, and any instances that match the criteria will get the lower price.</p>";

				const frontmatter$2S = {};
				const file$2S = "/workspaces/developer-roadmap/src/data/best-practices/aws/content/reserved-instances.md";
				const url$2S = undefined;
				function rawContent$2S() {
					return "# Reserved Instances\n\n> Use reserved instances to save big $$$.\n\nReserving an instance is just putting some money upfront in order to get a lower hourly rate. It ends up being a lot cheaper than an on-demand instance would cost. So if you know you're going to be keeping an instance around for 1 or 3 years, it's well worth reserving them. Reserved instances are a purely logical concept in AWS, you don't assign a specific instance to be reserved, but rather just specify the type and size, and any instances that match the criteria will get the lower price.\n";
				}
				function compiledContent$2S() {
					return html$2S;
				}
				function getHeadings$2S() {
					return [{"depth":1,"slug":"reserved-instances","text":"Reserved Instances"}];
				}

				const Content$2S = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter$2S;
					content.file = file$2S;
					content.url = url$2S;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html$2S)}`;
				});

const __vite_glob_0_86 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	Content: Content$2S,
	compiledContent: compiledContent$2S,
	default: Content$2S,
	file: file$2S,
	frontmatter: frontmatter$2S,
	getHeadings: getHeadings$2S,
	rawContent: rawContent$2S,
	url: url$2S
}, Symbol.toStringTag, { value: 'Module' }));

const html$2R = "<h1 id=\"hive-results\">Hive Results</h1>\n<blockquote>\n<p>Specify a directory on S3 for Hive results.</p>\n</blockquote>\n<p>If you use Hive to output results to S3, you must specify a directory in the bucket, not the root of the bucket, otherwise you’ll get a rather unhelpful NullPointerException with no real explanation as to why.</p>";

				const frontmatter$2R = {};
				const file$2R = "/workspaces/developer-roadmap/src/data/best-practices/aws/content/s3-hive-results.md";
				const url$2R = undefined;
				function rawContent$2R() {
					return "# Hive Results\n\n> Specify a directory on S3 for Hive results.\n\nIf you use Hive to output results to S3, you must specify a directory in the bucket, not the root of the bucket, otherwise you'll get a rather unhelpful NullPointerException with no real explanation as to why.\n";
				}
				function compiledContent$2R() {
					return html$2R;
				}
				function getHeadings$2R() {
					return [{"depth":1,"slug":"hive-results","text":"Hive Results"}];
				}

				const Content$2R = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter$2R;
					content.file = file$2R;
					content.url = url$2R;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html$2R)}`;
				});

const __vite_glob_0_87 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	Content: Content$2R,
	compiledContent: compiledContent$2R,
	default: Content$2R,
	file: file$2R,
	frontmatter: frontmatter$2R,
	getHeadings: getHeadings$2R,
	rawContent: rawContent$2R,
	url: url$2R
}, Symbol.toStringTag, { value: 'Module' }));

const html$2Q = "<h1 id=\"scale-down\">Scale Down</h1>\n<blockquote>\n<p>Scale down on INSUFFICIENT_DATA as well as ALARM.</p>\n</blockquote>\n<p>For your scale-down action, make sure to trigger a scale-down event when there’s no metric data, as well as when your trigger goes off. For example, if you have an app which usually has very low traffic, but experiences occasional spikes, you want to be sure that it scales down once the spike is over and the traffic stops. If there’s no traffic, you’ll get <code>INSUFFICIENT_DATA</code> instead of <code>ALARM</code> for your low traffic threshold and it won’t trigger a scale-down action.</p>";

				const frontmatter$2Q = {};
				const file$2Q = "/workspaces/developer-roadmap/src/data/best-practices/aws/content/scale-down-events.md";
				const url$2Q = undefined;
				function rawContent$2Q() {
					return "# Scale Down\n\n> Scale down on INSUFFICIENT_DATA as well as ALARM.\n\nFor your scale-down action, make sure to trigger a scale-down event when there's no metric data, as well as when your trigger goes off. For example, if you have an app which usually has very low traffic, but experiences occasional spikes, you want to be sure that it scales down once the spike is over and the traffic stops. If there's no traffic, you'll get `INSUFFICIENT_DATA` instead of `ALARM` for your low traffic threshold and it won't trigger a scale-down action.\n";
				}
				function compiledContent$2Q() {
					return html$2Q;
				}
				function getHeadings$2Q() {
					return [{"depth":1,"slug":"scale-down","text":"Scale Down"}];
				}

				const Content$2Q = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter$2Q;
					content.file = file$2Q;
					content.url = url$2Q;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html$2Q)}`;
				});

const __vite_glob_0_88 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	Content: Content$2Q,
	compiledContent: compiledContent$2Q,
	default: Content$2Q,
	file: file$2Q,
	frontmatter: frontmatter$2Q,
	getHeadings: getHeadings$2Q,
	rawContent: rawContent$2Q,
	url: url$2Q
}, Symbol.toStringTag, { value: 'Module' }));

const html$2P = "<h1 id=\"scale-horizontally\">Scale Horizontally</h1>\n<p>I’ve found that using lots of smaller machines is generally more reliable than using a smaller number of larger machines. You need to balance this though, as trying to run your application from 100 t1.micro instances probably isn’t going to work very well. Breaking your application into lots of smaller instances means you’ll be more resiliant to failure in one of the machines. If you’re just running from two massive compute cluster machines, and one goes down, things are going to get bad.</p>";

				const frontmatter$2P = {};
				const file$2P = "/workspaces/developer-roadmap/src/data/best-practices/aws/content/scale-horizontally.md";
				const url$2P = undefined;
				function rawContent$2P() {
					return "# Scale Horizontally\n\nI've found that using lots of smaller machines is generally more reliable than using a smaller number of larger machines. You need to balance this though, as trying to run your application from 100 t1.micro instances probably isn't going to work very well. Breaking your application into lots of smaller instances means you'll be more resiliant to failure in one of the machines. If you're just running from two massive compute cluster machines, and one goes down, things are going to get bad.\n";
				}
				function compiledContent$2P() {
					return html$2P;
				}
				function getHeadings$2P() {
					return [{"depth":1,"slug":"scale-horizontally","text":"Scale Horizontally"}];
				}

				const Content$2P = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter$2P;
					content.file = file$2P;
					content.url = url$2P;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html$2P)}`;
				});

const __vite_glob_0_89 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	Content: Content$2P,
	compiledContent: compiledContent$2P,
	default: Content$2P,
	file: file$2P,
	frontmatter: frontmatter$2P,
	getHeadings: getHeadings$2P,
	rawContent: rawContent$2P,
	url: url$2P
}, Symbol.toStringTag, { value: 'Module' }));

const html$2O = "<h1 id=\"security-audit\">Security Audit</h1>\n<blockquote>\n<p>Set up automated security auditing.</p>\n</blockquote>\n<p>It’s important to keep track of changes in your infrastructure’s security settings. One way to do this is to first set up a security auditer role (<a href=\"https://gist.github.com/bigsnarfdude/d0758b4fd335085623be\" rel=\"noopener noreferrer nofollow\" target=\"_blank\">JSON template</a>), which will give anyone assigned that role read-only access to any security related settings on your account. You can then use this rather <a href=\"https://gist.github.com/jlevy/cce1b44fc24f94599d0a4b3e613cc15d\" rel=\"noopener noreferrer nofollow\" target=\"_blank\">fantastic Python script</a>, which will go over all the items in your account and produce a canonical output showing your configuration. You set up a cronjob somewhere to run this script, and compare its output to the output from the previous run. Any differences will show you exactly what has been changed in your security configuration. It’s useful to set this up and just have it email you the diff of any changes. (Source: Intrusion Detection in the Cloud - <a href=\"https://awsmedia.s3.amazonaws.com/SEC402.pdf\" rel=\"noopener noreferrer nofollow\" target=\"_blank\">Presentation</a>)</p>";

				const frontmatter$2O = {};
				const file$2O = "/workspaces/developer-roadmap/src/data/best-practices/aws/content/security-audit.md";
				const url$2O = undefined;
				function rawContent$2O() {
					return "# Security Audit\n\n> Set up automated security auditing.\n\nIt's important to keep track of changes in your infrastructure's security settings. One way to do this is to first set up a security auditer role ([JSON template](https://gist.github.com/bigsnarfdude/d0758b4fd335085623be)), which will give anyone assigned that role read-only access to any security related settings on your account. You can then use this rather [fantastic Python script](https://gist.github.com/jlevy/cce1b44fc24f94599d0a4b3e613cc15d), which will go over all the items in your account and produce a canonical output showing your configuration. You set up a cronjob somewhere to run this script, and compare its output to the output from the previous run. Any differences will show you exactly what has been changed in your security configuration. It's useful to set this up and just have it email you the diff of any changes. (Source: Intrusion Detection in the Cloud - [Presentation](https://awsmedia.s3.amazonaws.com/SEC402.pdf))\n";
				}
				function compiledContent$2O() {
					return html$2O;
				}
				function getHeadings$2O() {
					return [{"depth":1,"slug":"security-audit","text":"Security Audit"}];
				}

				const Content$2O = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter$2O;
					content.file = file$2O;
					content.url = url$2O;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html$2O)}`;
				});

const __vite_glob_0_90 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	Content: Content$2O,
	compiledContent: compiledContent$2O,
	default: Content$2O,
	file: file$2O,
	frontmatter: frontmatter$2O,
	getHeadings: getHeadings$2O,
	rawContent: rawContent$2O,
	url: url$2O
}, Symbol.toStringTag, { value: 'Module' }));

const html$2N = "<h1 id=\"service-over-servers\">Service Over Servers</h1>\n<blockquote>\n<p>Servers are ephemeral, you don’t care about them. You only care about the service as a whole.</p>\n</blockquote>\n<p>If a single server dies, it should be of no big concern to you. This is where the real benefit of AWS comes in compared to using physical servers yourself. Normally if a physical server dies, there’s panic. With AWS, you don’t care, because auto-scaling will give you a fresh new instance soon anyway. Netflix have taken this several steps further with their <a href=\"http://techblog.netflix.com/2011/07/netflix-simian-army.html\" rel=\"noopener noreferrer nofollow\" target=\"_blank\">simian army</a>, where they have things like <a href=\"https://github.com/netflix/chaosmonkey\" rel=\"noopener noreferrer nofollow\" target=\"_blank\">Chaos Monkey</a>, which will kill random instances in production (they also have Chaos Gorilla to kill AZs and I’ve heard rumour of a Chaos Kong to kill regions…). The point is that servers will fail, but this shouldn’t matter in your application.</p>";

				const frontmatter$2N = {};
				const file$2N = "/workspaces/developer-roadmap/src/data/best-practices/aws/content/service-over-servers.md";
				const url$2N = undefined;
				function rawContent$2N() {
					return "# Service Over Servers\n\n> Servers are ephemeral, you don't care about them. You only care about the service as a whole.\n\nIf a single server dies, it should be of no big concern to you. This is where the real benefit of AWS comes in compared to using physical servers yourself. Normally if a physical server dies, there's panic. With AWS, you don't care, because auto-scaling will give you a fresh new instance soon anyway. Netflix have taken this several steps further with their [simian army](http://techblog.netflix.com/2011/07/netflix-simian-army.html), where they have things like [Chaos Monkey](https://github.com/netflix/chaosmonkey), which will kill random instances in production (they also have Chaos Gorilla to kill AZs and I've heard rumour of a Chaos Kong to kill regions...). The point is that servers will fail, but this shouldn't matter in your application.\n";
				}
				function compiledContent$2N() {
					return html$2N;
				}
				function getHeadings$2N() {
					return [{"depth":1,"slug":"service-over-servers","text":"Service Over Servers"}];
				}

				const Content$2N = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter$2N;
					content.file = file$2N;
					content.url = url$2N;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html$2N)}`;
				});

const __vite_glob_0_91 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	Content: Content$2N,
	compiledContent: compiledContent$2N,
	default: Content$2N,
	file: file$2N,
	frontmatter: frontmatter$2N,
	getHeadings: getHeadings$2N,
	rawContent: rawContent$2N,
	url: url$2N
}, Symbol.toStringTag, { value: 'Module' }));

const html$2M = "<h1 id=\"tag-everything\">Tag Everything</h1>\n<p>Pretty much everything can be given tags, use them! They’re great for organising things, make it easier to search and group things up. You can also use them to trigger certain behaviour on your instances, for example a tag of env=debug could put your application into debug mode when it deploys, etc.</p>";

				const frontmatter$2M = {};
				const file$2M = "/workspaces/developer-roadmap/src/data/best-practices/aws/content/tag-everything.md";
				const url$2M = undefined;
				function rawContent$2M() {
					return "# Tag Everything\n\nPretty much everything can be given tags, use them! They're great for organising things, make it easier to search and group things up. You can also use them to trigger certain behaviour on your instances, for example a tag of env=debug could put your application into debug mode when it deploys, etc.\n";
				}
				function compiledContent$2M() {
					return html$2M;
				}
				function getHeadings$2M() {
					return [{"depth":1,"slug":"tag-everything","text":"Tag Everything"}];
				}

				const Content$2M = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter$2M;
					content.file = file$2M;
					content.url = url$2M;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html$2M)}`;
				});

const __vite_glob_0_92 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	Content: Content$2M,
	compiledContent: compiledContent$2M,
	default: Content$2M,
	file: file$2M,
	frontmatter: frontmatter$2M,
	getHeadings: getHeadings$2M,
	rawContent: rawContent$2M,
	url: url$2M
}, Symbol.toStringTag, { value: 'Module' }));

const html$2L = "<h1 id=\"terminate-ssl\">Terminate SSL</h1>\n<blockquote>\n<p>Terminate SSL on the load balancer.</p>\n</blockquote>\n<p>You’ll need to add your SSL certificate information to the ELB, but this will take the overhead of SSL termination away from your servers which can speed things up. Additionally, if you upload your SSL certificate, you can pass through the HTTPS traffic and the load balancer will add some extra headers to your request (x-forwarded-for, etc), which are useful if you want to know who the end user is. If you just forward TCP, then those headers aren’t added and you lose the information.</p>";

				const frontmatter$2L = {};
				const file$2L = "/workspaces/developer-roadmap/src/data/best-practices/aws/content/terminate-ssl.md";
				const url$2L = undefined;
				function rawContent$2L() {
					return "# Terminate SSL\n\n> Terminate SSL on the load balancer.\n\nYou'll need to add your SSL certificate information to the ELB, but this will take the overhead of SSL termination away from your servers which can speed things up. Additionally, if you upload your SSL certificate, you can pass through the HTTPS traffic and the load balancer will add some extra headers to your request (x-forwarded-for, etc), which are useful if you want to know who the end user is. If you just forward TCP, then those headers aren't added and you lose the information.\n";
				}
				function compiledContent$2L() {
					return html$2L;
				}
				function getHeadings$2L() {
					return [{"depth":1,"slug":"terminate-ssl","text":"Terminate SSL"}];
				}

				const Content$2L = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter$2L;
					content.file = file$2L;
					content.url = url$2L;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html$2L)}`;
				});

const __vite_glob_0_93 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	Content: Content$2L,
	compiledContent: compiledContent$2L,
	default: Content$2L,
	file: file$2L,
	frontmatter: frontmatter$2L,
	getHeadings: getHeadings$2L,
	rawContent: rawContent$2L,
	url: url$2L
}, Symbol.toStringTag, { value: 'Module' }));

const html$2K = "<h1 id=\"termination-protection\">Termination Protection</h1>\n<blockquote>\n<p>Use termination protection for non-auto-scaling instances.</p>\n</blockquote>\n<p>If you have any instances which are one-off things that aren’t under auto-scaling, then you should probably enable termination protection, to stop anyone from accidentally deleting the instance. I’ve had it happen, it sucks, learn from my mistake!</p>";

				const frontmatter$2K = {};
				const file$2K = "/workspaces/developer-roadmap/src/data/best-practices/aws/content/termination-protection.md";
				const url$2K = undefined;
				function rawContent$2K() {
					return "# Termination Protection\n\n> Use termination protection for non-auto-scaling instances.\n\nIf you have any instances which are one-off things that aren't under auto-scaling, then you should probably enable termination protection, to stop anyone from accidentally deleting the instance. I've had it happen, it sucks, learn from my mistake!\n";
				}
				function compiledContent$2K() {
					return html$2K;
				}
				function getHeadings$2K() {
					return [{"depth":1,"slug":"termination-protection","text":"Termination Protection"}];
				}

				const Content$2K = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter$2K;
					content.file = file$2K;
					content.url = url$2K;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html$2K)}`;
				});

const __vite_glob_0_94 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	Content: Content$2K,
	compiledContent: compiledContent$2K,
	default: Content$2K,
	file: file$2K,
	frontmatter: frontmatter$2K,
	getHeadings: getHeadings$2K,
	rawContent: rawContent$2K,
	url: url$2K
}, Symbol.toStringTag, { value: 'Module' }));

const html$2J = "<h1 id=\"tools-for-logs\">Tools for Logs</h1>\n<blockquote>\n<p>Have tools to view application logs.</p>\n</blockquote>\n<p>You should have an admin tool, syslog viewer, or something that allows you to view current real-time log info without needing to SSH into a running instance. If you have centralised logging (which you really should), then you just want to be sure you can read the logs there without needing to use SSH. Needing to SSH into a running application instance to view logs is going to become problematic.</p>";

				const frontmatter$2J = {};
				const file$2J = "/workspaces/developer-roadmap/src/data/best-practices/aws/content/tools-for-logs.md";
				const url$2J = undefined;
				function rawContent$2J() {
					return "# Tools for Logs\n\n> Have tools to view application logs.\n\nYou should have an admin tool, syslog viewer, or something that allows you to view current real-time log info without needing to SSH into a running instance. If you have centralised logging (which you really should), then you just want to be sure you can read the logs there without needing to use SSH. Needing to SSH into a running application instance to view logs is going to become problematic.\n";
				}
				function compiledContent$2J() {
					return html$2J;
				}
				function getHeadings$2J() {
					return [{"depth":1,"slug":"tools-for-logs","text":"Tools for Logs"}];
				}

				const Content$2J = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter$2J;
					content.file = file$2J;
					content.url = url$2J;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html$2J)}`;
				});

const __vite_glob_0_95 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	Content: Content$2J,
	compiledContent: compiledContent$2J,
	default: Content$2J,
	file: file$2J,
	frontmatter: frontmatter$2J,
	getHeadings: getHeadings$2J,
	rawContent: rawContent$2J,
	url: url$2J
}, Symbol.toStringTag, { value: 'Module' }));

const html$2I = "<h1 id=\"alias-records\">ALIAS Records</h1>\n<blockquote>\n<p>Use ALIAS records.</p>\n</blockquote>\n<p>An ALIAS record will link your record set to a particular AWS resource directly (i.e. you can map a domain to an S3 bucket), but the key is that you don’t get charged for any ALIAS lookups. So whereas a CNAME entry would cost you money, an ALIAS record won’t. Also, unlike a CNAME, you can use an ALIAS on your zone apex. You can read more about this on <a href=\"http://docs.aws.amazon.com/Route53/latest/DeveloperGuide/CreatingAliasRRSets.html\" rel=\"noopener noreferrer nofollow\" target=\"_blank\">the AWS page for creating alias resource record sets</a>.</p>";

				const frontmatter$2I = {};
				const file$2I = "/workspaces/developer-roadmap/src/data/best-practices/aws/content/use-alias-records.md";
				const url$2I = undefined;
				function rawContent$2I() {
					return "# ALIAS Records\n\n> Use ALIAS records.\n\nAn ALIAS record will link your record set to a particular AWS resource directly (i.e. you can map a domain to an S3 bucket), but the key is that you don't get charged for any ALIAS lookups. So whereas a CNAME entry would cost you money, an ALIAS record won't. Also, unlike a CNAME, you can use an ALIAS on your zone apex. You can read more about this on [the AWS page for creating alias resource record sets](http://docs.aws.amazon.com/Route53/latest/DeveloperGuide/CreatingAliasRRSets.html).\n";
				}
				function compiledContent$2I() {
					return html$2I;
				}
				function getHeadings$2I() {
					return [{"depth":1,"slug":"alias-records","text":"ALIAS Records"}];
				}

				const Content$2I = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter$2I;
					content.file = file$2I;
					content.url = url$2I;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html$2I)}`;
				});

const __vite_glob_0_96 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	Content: Content$2I,
	compiledContent: compiledContent$2I,
	default: Content$2I,
	file: file$2I,
	frontmatter: frontmatter$2I,
	getHeadings: getHeadings$2I,
	rawContent: rawContent$2I,
	url: url$2I
}, Symbol.toStringTag, { value: 'Module' }));

const html$2H = "<h1 id=\"use-iam-acounts\">Use IAM Acounts</h1>\n<blockquote>\n<p>Everyone gets an IAM account. Never login to the master.</p>\n</blockquote>\n<p>Usually you’ll have an “operations account” for a service, and your entire ops team will have the password. With AWS, you definitely don’t want to do that. Everyone gets an IAM user with just the permissions they need (least privilege). An IAM user can control everything in the infrastructure. At the time of writing, the only thing an IAM user can’t access are some parts of the billing pages.</p>\n<p>If you want to protect your account even more, make sure to <a href=\"http://aws.amazon.com/iam/details/mfa/\" rel=\"noopener noreferrer nofollow\" target=\"_blank\">enable multi-factor authentication</a> for everyone (you can use Google Authenticator). I’ve heard of some users who give the MFA token to two people, and the password to two others, so to perform any action on the master account, two of the users need to agree. This is overkill for my case, but worth mentioning in case someone else wants to do it.</p>";

				const frontmatter$2H = {};
				const file$2H = "/workspaces/developer-roadmap/src/data/best-practices/aws/content/use-iam-acount.md";
				const url$2H = undefined;
				function rawContent$2H() {
					return "# Use IAM Acounts\n\n> Everyone gets an IAM account. Never login to the master.\n\nUsually you'll have an \"operations account\" for a service, and your entire ops team will have the password. With AWS, you definitely don't want to do that. Everyone gets an IAM user with just the permissions they need (least privilege). An IAM user can control everything in the infrastructure. At the time of writing, the only thing an IAM user can't access are some parts of the billing pages.\n\nIf you want to protect your account even more, make sure to [enable multi-factor authentication](http://aws.amazon.com/iam/details/mfa/) for everyone (you can use Google Authenticator). I've heard of some users who give the MFA token to two people, and the password to two others, so to perform any action on the master account, two of the users need to agree. This is overkill for my case, but worth mentioning in case someone else wants to do it.\n";
				}
				function compiledContent$2H() {
					return html$2H;
				}
				function getHeadings$2H() {
					return [{"depth":1,"slug":"use-iam-acounts","text":"Use IAM Acounts"}];
				}

				const Content$2H = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter$2H;
					content.file = file$2H;
					content.url = url$2H;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html$2H)}`;
				});

const __vite_glob_0_97 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	Content: Content$2H,
	compiledContent: compiledContent$2H,
	default: Content$2H,
	file: file$2H,
	frontmatter: frontmatter$2H,
	getHeadings: getHeadings$2H,
	rawContent: rawContent$2H,
	url: url$2H
}, Symbol.toStringTag, { value: 'Module' }));

const html$2G = "<h1 id=\"use-iam-roles\">Use IAM Roles</h1>\n<p>Don’t create users for application, always use IAM roles if you can. They simplify everything, and keeps things secure. Having application users just creates a point of failure (what if someone accidentally deletes the API key?) and it becomes a pain to manage.</p>";

				const frontmatter$2G = {};
				const file$2G = "/workspaces/developer-roadmap/src/data/best-practices/aws/content/use-iam-roles.md";
				const url$2G = undefined;
				function rawContent$2G() {
					return "# Use IAM Roles\n\nDon't create users for application, always use IAM roles if you can. They simplify everything, and keeps things secure. Having application users just creates a point of failure (what if someone accidentally deletes the API key?) and it becomes a pain to manage.\n";
				}
				function compiledContent$2G() {
					return html$2G;
				}
				function getHeadings$2G() {
					return [{"depth":1,"slug":"use-iam-roles","text":"Use IAM Roles"}];
				}

				const Content$2G = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter$2G;
					content.file = file$2G;
					content.url = url$2G;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html$2G)}`;
				});

const __vite_glob_0_98 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	Content: Content$2G,
	compiledContent: compiledContent$2G,
	default: Content$2G,
	file: file$2G,
	frontmatter: frontmatter$2G,
	getHeadings: getHeadings$2G,
	rawContent: rawContent$2G,
	url: url$2G
}, Symbol.toStringTag, { value: 'Module' }));

const html$2F = "<h1 id=\"use-official-sdks\">Use Official SDKs</h1>\n<blockquote>\n<p>If you need to interact with AWS, use the SDK for your language.</p>\n</blockquote>\n<p>Don’t try to roll your own, I did this at first as I only needed a simple upload to S3, but then you add more services and it’s just an all around bad idea. <a href=\"http://aws.amazon.com/tools/\" rel=\"noopener noreferrer nofollow\" target=\"_blank\">The AWS SDKs</a> are well written, handle authentication automatically, handle retry logic, and they’re maintained and iterated on by Amazon. Also, if you use EC2 IAM roles (which you absolutely should, more on this later) then the SDK will automatically grab the correct credentials for you.</p>";

				const frontmatter$2F = {};
				const file$2F = "/workspaces/developer-roadmap/src/data/best-practices/aws/content/use-official-sdks.md";
				const url$2F = undefined;
				function rawContent$2F() {
					return "# Use Official SDKs\n\n> If you need to interact with AWS, use the SDK for your language.\n\nDon't try to roll your own, I did this at first as I only needed a simple upload to S3, but then you add more services and it's just an all around bad idea. [The AWS SDKs](http://aws.amazon.com/tools/) are well written, handle authentication automatically, handle retry logic, and they're maintained and iterated on by Amazon. Also, if you use EC2 IAM roles (which you absolutely should, more on this later) then the SDK will automatically grab the correct credentials for you.\n";
				}
				function compiledContent$2F() {
					return html$2F;
				}
				function getHeadings$2F() {
					return [{"depth":1,"slug":"use-official-sdks","text":"Use Official SDKs"}];
				}

				const Content$2F = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter$2F;
					content.file = file$2F;
					content.url = url$2F;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html$2F)}`;
				});

const __vite_glob_0_99 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	Content: Content$2F,
	compiledContent: compiledContent$2F,
	default: Content$2F,
	file: file$2F,
	frontmatter: frontmatter$2F,
	getHeadings: getHeadings$2F,
	rawContent: rawContent$2F,
	url: url$2F
}, Symbol.toStringTag, { value: 'Module' }));

const html$2E = "<h1 id=\"use-vpc\">Use VPC</h1>\n<p>Setting up a VPC seems like a pain at first, but once you get stuck in and play with it, it’s surprising easy to set up and get going. It provides all sorts of extra features over EC2 that are well worth the extra time it takes to set up a VPC. First, you can control traffic at the network level using ACLs, you can modify instance size, security groups, etc. without needing to terminate an instance. You can specify egress firewall rules (you cannot control outbound traffic from normal EC2). But the biggest thing is that you have your own private subnet where your instances are completely cut off from everyone else, so it adds an extra layer of protection.</p>\n<p>If you’re interested in the internals of VPC, I highly recommend watching <a href=\"http://www.youtube.com/watch?v=Zd5hsL-JNY4\" rel=\"noopener noreferrer nofollow\" target=\"_blank\">A Day in the Life of Billion Packets</a> (<a href=\"https://www.slideshare.net/AmazonWebServices/a-day-in-the-life-of-a-billion-packets-cpn401-aws-reinvent-2013\" rel=\"noopener noreferrer nofollow\" target=\"_blank\">Slides</a>).</p>";

				const frontmatter$2E = {};
				const file$2E = "/workspaces/developer-roadmap/src/data/best-practices/aws/content/use-vpc.md";
				const url$2E = undefined;
				function rawContent$2E() {
					return "# Use VPC\n\nSetting up a VPC seems like a pain at first, but once you get stuck in and play with it, it's surprising easy to set up and get going. It provides all sorts of extra features over EC2 that are well worth the extra time it takes to set up a VPC. First, you can control traffic at the network level using ACLs, you can modify instance size, security groups, etc. without needing to terminate an instance. You can specify egress firewall rules (you cannot control outbound traffic from normal EC2). But the biggest thing is that you have your own private subnet where your instances are completely cut off from everyone else, so it adds an extra layer of protection.\n\nIf you're interested in the internals of VPC, I highly recommend watching [A Day in the Life of Billion Packets](http://www.youtube.com/watch?v=Zd5hsL-JNY4) ([Slides](https://www.slideshare.net/AmazonWebServices/a-day-in-the-life-of-a-billion-packets-cpn401-aws-reinvent-2013)).\n";
				}
				function compiledContent$2E() {
					return html$2E;
				}
				function getHeadings$2E() {
					return [{"depth":1,"slug":"use-vpc","text":"Use VPC"}];
				}

				const Content$2E = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter$2E;
					content.file = file$2E;
					content.url = url$2E;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html$2E)}`;
				});

const __vite_glob_0_100 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	Content: Content$2E,
	compiledContent: compiledContent$2E,
	default: Content$2E,
	file: file$2E,
	frontmatter: frontmatter$2E,
	getHeadings: getHeadings$2E,
	rawContent: rawContent$2E,
	url: url$2E
}, Symbol.toStringTag, { value: 'Module' }));

const html$2D = "<h1 id=\"multiple-api-keys\">Multiple API Keys</h1>\n<blockquote>\n<p>Users can have multiple API keys.</p>\n</blockquote>\n<p>This can be useful if someone is working on multiple projects, or if you want a one-time key just to test something out, without wanting to worry about accidentally revealing your normal key.</p>";

				const frontmatter$2D = {};
				const file$2D = "/workspaces/developer-roadmap/src/data/best-practices/aws/content/user-multiple-api-keys.md";
				const url$2D = undefined;
				function rawContent$2D() {
					return "# Multiple API Keys\n\n> Users can have multiple API keys.\n\nThis can be useful if someone is working on multiple projects, or if you want a one-time key just to test something out, without wanting to worry about accidentally revealing your normal key.\n";
				}
				function compiledContent$2D() {
					return html$2D;
				}
				function getHeadings$2D() {
					return [{"depth":1,"slug":"multiple-api-keys","text":"Multiple API Keys"}];
				}

				const Content$2D = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter$2D;
					content.file = file$2D;
					content.url = url$2D;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html$2D)}`;
				});

const __vite_glob_0_101 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	Content: Content$2D,
	compiledContent: compiledContent$2D,
	default: Content$2D,
	file: file$2D,
	frontmatter: frontmatter$2D,
	getHeadings: getHeadings$2D,
	rawContent: rawContent$2D,
	url: url$2D
}, Symbol.toStringTag, { value: 'Module' }));

const html$2C = "<h1 id=\"architectural-styles-and-service-decomposition\">Architectural Styles and Service Decomposition</h1>\n<p>Backend performance in web applications greatly depends on the selection of architectural styles like Service-Oriented Architecture (SOA) or Microservices and the ability to decompose services when necessary. For instance, using Microservices, an application is broken into smaller, loosely coupled services, making it easy to maintain and scale, improving the overall backend performance. Service decomposition, on the other hand, allows for the distribution of responsibilities, meaning if one service fails, it won’t likely impact the entire system. Thus, understanding and efficiently managing architectural styles and service decomposition are critical for the optimized backend performance in web applications.</p>";

				const frontmatter$2C = {};
				const file$2C = "/workspaces/developer-roadmap/src/data/best-practices/backend-performance/content/architectural-styles.md";
				const url$2C = undefined;
				function rawContent$2C() {
					return "# Architectural Styles and Service Decomposition\n\nBackend performance in web applications greatly depends on the selection of architectural styles like Service-Oriented Architecture (SOA) or Microservices and the ability to decompose services when necessary. For instance, using Microservices, an application is broken into smaller, loosely coupled services, making it easy to maintain and scale, improving the overall backend performance. Service decomposition, on the other hand, allows for the distribution of responsibilities, meaning if one service fails, it won't likely impact the entire system. Thus, understanding and efficiently managing architectural styles and service decomposition are critical for the optimized backend performance in web applications.";
				}
				function compiledContent$2C() {
					return html$2C;
				}
				function getHeadings$2C() {
					return [{"depth":1,"slug":"architectural-styles-and-service-decomposition","text":"Architectural Styles and Service Decomposition"}];
				}

				const Content$2C = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter$2C;
					content.file = file$2C;
					content.url = url$2C;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html$2C)}`;
				});

const __vite_glob_0_102 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	Content: Content$2C,
	compiledContent: compiledContent$2C,
	default: Content$2C,
	file: file$2C,
	frontmatter: frontmatter$2C,
	getHeadings: getHeadings$2C,
	rawContent: rawContent$2C,
	url: url$2C
}, Symbol.toStringTag, { value: 'Module' }));

const html$2B = "<h1 id=\"asynchronous-logging-mechanisms\">Asynchronous Logging Mechanisms</h1>\n<p>To optimise backend performance in web applications, implementing asynchronous logging mechanisms becomes crucial. It diminishes the logging overhead, thereby speeding up the execution flow of an application. For instance, the application does not need to wait for the logging data to be written on the disk, as the writing task is executed in the background, enabling the next instructions to execute without interruption. This also prevents unnecessary queuing of tasks, thereby bolstering the overall throughput of the backend operations. Netflix’s open-source tool called ‘Zuul’ exhibits this concept where they use async logging to achieve scalability in high traffic.</p>";

				const frontmatter$2B = {};
				const file$2B = "/workspaces/developer-roadmap/src/data/best-practices/backend-performance/content/async-logging.md";
				const url$2B = undefined;
				function rawContent$2B() {
					return "# Asynchronous Logging Mechanisms\n\nTo optimise backend performance in web applications, implementing asynchronous logging mechanisms becomes crucial. It diminishes the logging overhead, thereby speeding up the execution flow of an application. For instance, the application does not need to wait for the logging data to be written on the disk, as the writing task is executed in the background, enabling the next instructions to execute without interruption. This also prevents unnecessary queuing of tasks, thereby bolstering the overall throughput of the backend operations. Netflix's open-source tool called 'Zuul' exhibits this concept where they use async logging to achieve scalability in high traffic.";
				}
				function compiledContent$2B() {
					return html$2B;
				}
				function getHeadings$2B() {
					return [{"depth":1,"slug":"asynchronous-logging-mechanisms","text":"Asynchronous Logging Mechanisms"}];
				}

				const Content$2B = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter$2B;
					content.file = file$2B;
					content.url = url$2B;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html$2B)}`;
				});

const __vite_glob_0_103 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	Content: Content$2B,
	compiledContent: compiledContent$2B,
	default: Content$2B,
	file: file$2B,
	frontmatter: frontmatter$2B,
	getHeadings: getHeadings$2B,
	rawContent: rawContent$2B,
	url: url$2B
}, Symbol.toStringTag, { value: 'Module' }));

const html$2A = "<h1 id=\"implementing-proper-authentication-and-authorization\">Implementing Proper Authentication and Authorization</h1>\n<p>In the backend performance of web applications, robust authentication and authorization play an integral role. Having tight security measures ensures the application’s optimal functioning by preventing unauthorized access. These precautionary measures protect the system from external threats such as data breaches or malicious attacks. For example, imagine a banking application without stringent authentication procedures. It could be easily exploited by hackers, leading to serious loss of finances and damage to the bank’s reputation. Therefore, secure authentication and authorization is essential for maintaining the application’s integrity and stability, ultimately contributing to efficient backend performance.</p>";

				const frontmatter$2A = {};
				const file$2A = "/workspaces/developer-roadmap/src/data/best-practices/backend-performance/content/authentication-authorization.md";
				const url$2A = undefined;
				function rawContent$2A() {
					return "# Implementing Proper Authentication and Authorization\n\nIn the backend performance of web applications, robust authentication and authorization play an integral role. Having tight security measures ensures the application's optimal functioning by preventing unauthorized access. These precautionary measures protect the system from external threats such as data breaches or malicious attacks. For example, imagine a banking application without stringent authentication procedures. It could be easily exploited by hackers, leading to serious loss of finances and damage to the bank's reputation. Therefore, secure authentication and authorization is essential for maintaining the application's integrity and stability, ultimately contributing to efficient backend performance.";
				}
				function compiledContent$2A() {
					return html$2A;
				}
				function getHeadings$2A() {
					return [{"depth":1,"slug":"implementing-proper-authentication-and-authorization","text":"Implementing Proper Authentication and Authorization"}];
				}

				const Content$2A = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter$2A;
					content.file = file$2A;
					content.url = url$2A;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html$2A)}`;
				});

const __vite_glob_0_104 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	Content: Content$2A,
	compiledContent: compiledContent$2A,
	default: Content$2A,
	file: file$2A,
	frontmatter: frontmatter$2A,
	getHeadings: getHeadings$2A,
	rawContent: rawContent$2A,
	url: url$2A
}, Symbol.toStringTag, { value: 'Module' }));

const html$2z = "<h1 id=\"efficient-cache-invalidation-strategies\">Efficient Cache-Invalidation Strategies</h1>\n<p>In the realm of backend performance, adopting proper cache-invalidation strategies is highly relevant. Effective cache management takes the pressure off web servers by saving and displaying previously retrieved or computed data. However, the challenge arises when such cached data becomes outdated, or ‘stale’. If not addressed, users may be presented incorrect or obsolete information. Good cache-invalidation strategies ensure that the system constantly refreshes or dumps outdated cache, keeping the data consistent and accurate. For example, using time-based strategies, a system could invalidate cache after a set period, essentially creating a self-maintenance regimen. Similarly, with a write-through approach, an application updates the cache immediately as changes are made, guaranteeing the users always receive the most recent data.</p>";

				const frontmatter$2z = {};
				const file$2z = "/workspaces/developer-roadmap/src/data/best-practices/backend-performance/content/cache-invalidation.md";
				const url$2z = undefined;
				function rawContent$2z() {
					return "# Efficient Cache-Invalidation Strategies\n\nIn the realm of backend performance, adopting proper cache-invalidation strategies is highly relevant. Effective cache management takes the pressure off web servers by saving and displaying previously retrieved or computed data. However, the challenge arises when such cached data becomes outdated, or 'stale'. If not addressed, users may be presented incorrect or obsolete information. Good cache-invalidation strategies ensure that the system constantly refreshes or dumps outdated cache, keeping the data consistent and accurate. For example, using time-based strategies, a system could invalidate cache after a set period, essentially creating a self-maintenance regimen. Similarly, with a write-through approach, an application updates the cache immediately as changes are made, guaranteeing the users always receive the most recent data.";
				}
				function compiledContent$2z() {
					return html$2z;
				}
				function getHeadings$2z() {
					return [{"depth":1,"slug":"efficient-cache-invalidation-strategies","text":"Efficient Cache-Invalidation Strategies"}];
				}

				const Content$2z = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter$2z;
					content.file = file$2z;
					content.url = url$2z;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html$2z)}`;
				});

const __vite_glob_0_105 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	Content: Content$2z,
	compiledContent: compiledContent$2z,
	default: Content$2z,
	file: file$2z,
	frontmatter: frontmatter$2z,
	getHeadings: getHeadings$2z,
	rawContent: rawContent$2z,
	url: url$2z
}, Symbol.toStringTag, { value: 'Module' }));

const html$2y = "<h1 id=\"implementing-caching-at-various-levels\">Implementing Caching at Various Levels</h1>\n<p>In web development, backend performance significantly depends on the speed at which data is fetched and delivered. Implementing caching at various levels like database query results, HTML fragments, or even full-page, boosts the efficiency of data retrieval processes. Through caching, redundant data fetching is avoided leading to faster response times and reduced server load. For instance, when a database query result is cached, the system doesn’t have to run the same operation repetitively thus enhancing speed. Moreover, in HTML fragments caching, reusable parts of a web page get stored, so they don’t have to be reprocessed for every request, improving load times. Full-page caching, on the other hand, saves a rendered copy of the whole page, offering immediate response upon user’s request. Each of these cache implementations enhances performance, increases scalability and improves user experience in web applications.</p>";

				const frontmatter$2y = {};
				const file$2y = "/workspaces/developer-roadmap/src/data/best-practices/backend-performance/content/caching-locations.md";
				const url$2y = undefined;
				function rawContent$2y() {
					return "# Implementing Caching at Various Levels\n\nIn web development, backend performance significantly depends on the speed at which data is fetched and delivered. Implementing caching at various levels like database query results, HTML fragments, or even full-page, boosts the efficiency of data retrieval processes. Through caching, redundant data fetching is avoided leading to faster response times and reduced server load. For instance, when a database query result is cached, the system doesn't have to run the same operation repetitively thus enhancing speed. Moreover, in HTML fragments caching, reusable parts of a web page get stored, so they don't have to be reprocessed for every request, improving load times. Full-page caching, on the other hand, saves a rendered copy of the whole page, offering immediate response upon user's request. Each of these cache implementations enhances performance, increases scalability and improves user experience in web applications.";
				}
				function compiledContent$2y() {
					return html$2y;
				}
				function getHeadings$2y() {
					return [{"depth":1,"slug":"implementing-caching-at-various-levels","text":"Implementing Caching at Various Levels"}];
				}

				const Content$2y = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter$2y;
					content.file = file$2y;
					content.url = url$2y;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html$2y)}`;
				});

const __vite_glob_0_106 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	Content: Content$2y,
	compiledContent: compiledContent$2y,
	default: Content$2y,
	file: file$2y,
	frontmatter: frontmatter$2y,
	getHeadings: getHeadings$2y,
	rawContent: rawContent$2y,
	url: url$2y
}, Symbol.toStringTag, { value: 'Module' }));

const html$2x = "<h1 id=\"application-of-suitable-caching-patterns\">Application of Suitable Caching Patterns</h1>\n<p>For optimal backend performance in web applications, implementing the correct caching approach, such as cache aside, write-through, or read-through caching, matters greatly. This is significant fundamentally because it reduces the load on your database, fetching data quicker and decreasing the latency time, leading to faster response times. For instance, consider a high-traffic e-commerce site where hundreds of thousands of product details need to be fetched simultaneously. If a suitable caching pattern like the read-through cache is applied here, it would handle retrieving data from the database when the cache is empty, ensuring that the application always receives data, improving the overall performance and user experience.</p>";

				const frontmatter$2x = {};
				const file$2x = "/workspaces/developer-roadmap/src/data/best-practices/backend-performance/content/caching-strategies.md";
				const url$2x = undefined;
				function rawContent$2x() {
					return "# Application of Suitable Caching Patterns\n\nFor optimal backend performance in web applications, implementing the correct caching approach, such as cache aside, write-through, or read-through caching, matters greatly. This is significant fundamentally because it reduces the load on your database, fetching data quicker and decreasing the latency time, leading to faster response times. For instance, consider a high-traffic e-commerce site where hundreds of thousands of product details need to be fetched simultaneously. If a suitable caching pattern like the read-through cache is applied here, it would handle retrieving data from the database when the cache is empty, ensuring that the application always receives data, improving the overall performance and user experience.";
				}
				function compiledContent$2x() {
					return html$2x;
				}
				function getHeadings$2x() {
					return [{"depth":1,"slug":"application-of-suitable-caching-patterns","text":"Application of Suitable Caching Patterns"}];
				}

				const Content$2x = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter$2x;
					content.file = file$2x;
					content.url = url$2x;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html$2x)}`;
				});

const __vite_glob_0_107 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	Content: Content$2x,
	compiledContent: compiledContent$2x,
	default: Content$2x,
	file: file$2x,
	frontmatter: frontmatter$2x,
	getHeadings: getHeadings$2x,
	rawContent: rawContent$2x,
	url: url$2x
}, Symbol.toStringTag, { value: 'Module' }));

const html$2w = "<h1 id=\"utilization-of-cdns-for-static-and-frequently-accessed-assets\">Utilization of CDNs for Static and Frequently Accessed Assets</h1>\n<p>For optimal backend performance in web applications, the use of Content Delivery Networks (CDNs) for serving static and frequently accessed assets is paramount. CDNs enhance website loading speed by storing a cached version of its content in multiple geographical locations. As such, when a user requests a website, the content is delivered from the nearest server, dramatically reducing latency and packet loss. This is especially beneficial for static and frequently accessed assets that remain unchanged over time like CSS, JavaScript files or Image files. For instance, a user in London trying to access a US-based web application can retrieve static content from a closer server in the UK rather than crossing the Atlantic every time, ensuring efficient and speedy content delivery.</p>";

				const frontmatter$2w = {};
				const file$2w = "/workspaces/developer-roadmap/src/data/best-practices/backend-performance/content/cdns.md";
				const url$2w = undefined;
				function rawContent$2w() {
					return "# Utilization of CDNs for Static and Frequently Accessed Assets\n\nFor optimal backend performance in web applications, the use of Content Delivery Networks (CDNs) for serving static and frequently accessed assets is paramount. CDNs enhance website loading speed by storing a cached version of its content in multiple geographical locations. As such, when a user requests a website, the content is delivered from the nearest server, dramatically reducing latency and packet loss. This is especially beneficial for static and frequently accessed assets that remain unchanged over time like CSS, JavaScript files or Image files. For instance, a user in London trying to access a US-based web application can retrieve static content from a closer server in the UK rather than crossing the Atlantic every time, ensuring efficient and speedy content delivery.";
				}
				function compiledContent$2w() {
					return html$2w;
				}
				function getHeadings$2w() {
					return [{"depth":1,"slug":"utilization-of-cdns-for-static-and-frequently-accessed-assets","text":"Utilization of CDNs for Static and Frequently Accessed Assets"}];
				}

				const Content$2w = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter$2w;
					content.file = file$2w;
					content.url = url$2w;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html$2w)}`;
				});

const __vite_glob_0_108 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	Content: Content$2w,
	compiledContent: compiledContent$2w,
	default: Content$2w,
	file: file$2w,
	frontmatter: frontmatter$2w,
	getHeadings: getHeadings$2w,
	rawContent: rawContent$2w,
	url: url$2w
}, Symbol.toStringTag, { value: 'Module' }));

const html$2v = "<h1 id=\"regular-maintenance-and-cleanup-of-data\">Regular Maintenance and Cleanup of Data</h1>\n<p>Optimizing the backend performance in web applications depends greatly on how data is managed. Unnecessary or unused data could cause the system to slow down, impacting the efficiency of the backend processes. Regular cleanup of such data ensures that the server is not overburdened, allowing faster retrieval and storage of information. Similarly, routine database maintenance tasks like vacuuming and indexing help boost performance. Vacuuming helps remove stale or obsolete data, freeing up space and preventing system delays. Indexing, on the other hand, organizes data in a way that makes it easily retrievable, speeding up query response times. It’s like using a well-organized filing system rather than a jumbled heap of papers. Additionally, optimizing queries aids in reducing the time taken for database interactions. An example of this would be replacing a nested query with a join, thereby reducing the processing time. Altogether, these practices lead to improved backend performance, ensuring smooth and efficient functioning of web applications.</p>";

				const frontmatter$2v = {};
				const file$2v = "/workspaces/developer-roadmap/src/data/best-practices/backend-performance/content/cleanup-data.md";
				const url$2v = undefined;
				function rawContent$2v() {
					return "# Regular Maintenance and Cleanup of Data\n\nOptimizing the backend performance in web applications depends greatly on how data is managed. Unnecessary or unused data could cause the system to slow down, impacting the efficiency of the backend processes. Regular cleanup of such data ensures that the server is not overburdened, allowing faster retrieval and storage of information. Similarly, routine database maintenance tasks like vacuuming and indexing help boost performance. Vacuuming helps remove stale or obsolete data, freeing up space and preventing system delays. Indexing, on the other hand, organizes data in a way that makes it easily retrievable, speeding up query response times. It's like using a well-organized filing system rather than a jumbled heap of papers. Additionally, optimizing queries aids in reducing the time taken for database interactions. An example of this would be replacing a nested query with a join, thereby reducing the processing time. Altogether, these practices lead to improved backend performance, ensuring smooth and efficient functioning of web applications.\n";
				}
				function compiledContent$2v() {
					return html$2v;
				}
				function getHeadings$2v() {
					return [{"depth":1,"slug":"regular-maintenance-and-cleanup-of-data","text":"Regular Maintenance and Cleanup of Data"}];
				}

				const Content$2v = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter$2v;
					content.file = file$2v;
					content.url = url$2v;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html$2v)}`;
				});

const __vite_glob_0_109 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	Content: Content$2v,
	compiledContent: compiledContent$2v,
	default: Content$2v,
	file: file$2v,
	frontmatter: frontmatter$2v,
	getHeadings: getHeadings$2v,
	rawContent: rawContent$2v,
	url: url$2v
}, Symbol.toStringTag, { value: 'Module' }));

const html$2u = "<h1 id=\"utilizing-compiled-languages-like-go-or-rust\">Utilizing Compiled Languages like Go or Rust</h1>\n<p>The backend performance of web applications can be substantially augmented by incorporating compiled languages such as Go or Rust. The essence of this lies in the manner these languages handle the conversion of code into machine language. Unlike interpreted languages, which convert the code into machine language during runtime, compiled languages do this step beforehand. This increased efficiency in translation results in faster performance of the code, especially valuable for performance-critical segments of your backend. For instance, Google uses Go language in several of their production systems for the very reason of increased performance and scalability. Similarly, Rust has gained acclaim in building highly concurrent and fast systems. Thus, using such compiled languages can greatly boost the overall backend performance.</p>";

				const frontmatter$2u = {};
				const file$2u = "/workspaces/developer-roadmap/src/data/best-practices/backend-performance/content/compiled-languages.md";
				const url$2u = undefined;
				function rawContent$2u() {
					return "# Utilizing Compiled Languages like Go or Rust\n\nThe backend performance of web applications can be substantially augmented by incorporating compiled languages such as Go or Rust. The essence of this lies in the manner these languages handle the conversion of code into machine language. Unlike interpreted languages, which convert the code into machine language during runtime, compiled languages do this step beforehand. This increased efficiency in translation results in faster performance of the code, especially valuable for performance-critical segments of your backend. For instance, Google uses Go language in several of their production systems for the very reason of increased performance and scalability. Similarly, Rust has gained acclaim in building highly concurrent and fast systems. Thus, using such compiled languages can greatly boost the overall backend performance.";
				}
				function compiledContent$2u() {
					return html$2u;
				}
				function getHeadings$2u() {
					return [{"depth":1,"slug":"utilizing-compiled-languages-like-go-or-rust","text":"Utilizing Compiled Languages like Go or Rust"}];
				}

				const Content$2u = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter$2u;
					content.file = file$2u;
					content.url = url$2u;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html$2u)}`;
				});

const __vite_glob_0_110 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	Content: Content$2u,
	compiledContent: compiledContent$2u,
	default: Content$2u,
	file: file$2u,
	frontmatter: frontmatter$2u,
	getHeadings: getHeadings$2u,
	rawContent: rawContent$2u,
	url: url$2u
}, Symbol.toStringTag, { value: 'Module' }));

const html$2t = "<h1 id=\"optimizing-connection-pool-settings\">Optimizing Connection Pool Settings</h1>\n<p>Backend performance of web applications can be significantly improved by fine-tuning connection pool settings. One of the main causes of performance degradation is the unnecessary utilization of resources. If a web application can reuse existing connections (via connection reuse parameters), instead of creating new ones each time a user sends a request, it saves a lot of processing time and power thereby improving performance. Moreover, by limiting the maximum number of idle connections, and setting suitable idle timeouts, enormous amounts of resources can be conserved. This not only improves performance but also makes the application more scalable. For instance, consider an e-commerce website during a huge sale where thousands of users are constantly connecting and disconnecting. By leveraging optimized connection pool settings, the application can process user requests more efficiently and faster, thus enhancing the site’s overall backend performance.</p>";

				const frontmatter$2t = {};
				const file$2t = "/workspaces/developer-roadmap/src/data/best-practices/backend-performance/content/connection-pool-settings.md";
				const url$2t = undefined;
				function rawContent$2t() {
					return "# Optimizing Connection Pool Settings\n\nBackend performance of web applications can be significantly improved by fine-tuning connection pool settings. One of the main causes of performance degradation is the unnecessary utilization of resources. If a web application can reuse existing connections (via connection reuse parameters), instead of creating new ones each time a user sends a request, it saves a lot of processing time and power thereby improving performance. Moreover, by limiting the maximum number of idle connections, and setting suitable idle timeouts, enormous amounts of resources can be conserved. This not only improves performance but also makes the application more scalable. For instance, consider an e-commerce website during a huge sale where thousands of users are constantly connecting and disconnecting. By leveraging optimized connection pool settings, the application can process user requests more efficiently and faster, thus enhancing the site's overall backend performance.";
				}
				function compiledContent$2t() {
					return html$2t;
				}
				function getHeadings$2t() {
					return [{"depth":1,"slug":"optimizing-connection-pool-settings","text":"Optimizing Connection Pool Settings"}];
				}

				const Content$2t = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter$2t;
					content.file = file$2t;
					content.url = url$2t;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html$2t)}`;
				});

const __vite_glob_0_111 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	Content: Content$2t,
	compiledContent: compiledContent$2t,
	default: Content$2t,
	file: file$2t,
	frontmatter: frontmatter$2t,
	getHeadings: getHeadings$2t,
	rawContent: rawContent$2t,
	url: url$2t
}, Symbol.toStringTag, { value: 'Module' }));

const html$2s = "<h1 id=\"connection-pooling-reducing-connection-overhead\">Connection Pooling: Reducing Connection Overhead</h1>\n<p>Effective backend performance in web applications heavily relies on proficiently managing database connections, for which connection pooling plays a crucial role. When a web application needs to establish multiple connections or reconnect frequently, high overhead can become burdensome and slow down performance. Utilizing connection pools addresses this issue by enabling applications to reuse existing connections, rather than needing to establish a new one for each user or session that needs database access. For instance, in a high traffic eCommerce website, leveraging connection pooling can significantly reduce lag in loading product details or processing transactions, resulting in a smoother user experience and increased operational efficiency. By reducing connection overhead through connection pooling, backend performance is greatly enhanced, leading to an optimized and expedited data exchange process.</p>";

				const frontmatter$2s = {};
				const file$2s = "/workspaces/developer-roadmap/src/data/best-practices/backend-performance/content/connection-pooling.md";
				const url$2s = undefined;
				function rawContent$2s() {
					return "# Connection Pooling: Reducing Connection Overhead\n\nEffective backend performance in web applications heavily relies on proficiently managing database connections, for which connection pooling plays a crucial role. When a web application needs to establish multiple connections or reconnect frequently, high overhead can become burdensome and slow down performance. Utilizing connection pools addresses this issue by enabling applications to reuse existing connections, rather than needing to establish a new one for each user or session that needs database access. For instance, in a high traffic eCommerce website, leveraging connection pooling can significantly reduce lag in loading product details or processing transactions, resulting in a smoother user experience and increased operational efficiency. By reducing connection overhead through connection pooling, backend performance is greatly enhanced, leading to an optimized and expedited data exchange process.";
				}
				function compiledContent$2s() {
					return html$2s;
				}
				function getHeadings$2s() {
					return [{"depth":1,"slug":"connection-pooling-reducing-connection-overhead","text":"Connection Pooling: Reducing Connection Overhead"}];
				}

				const Content$2s = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter$2s;
					content.file = file$2s;
					content.url = url$2s;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html$2s)}`;
				});

const __vite_glob_0_112 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	Content: Content$2s,
	compiledContent: compiledContent$2s,
	default: Content$2s,
	file: file$2s,
	frontmatter: frontmatter$2s,
	getHeadings: getHeadings$2s,
	rawContent: rawContent$2s,
	url: url$2s
}, Symbol.toStringTag, { value: 'Module' }));

const html$2r = "<h1 id=\"managing-network-issues-setting-appropriate-connection-timeouts-and-implementing-efficient-retry-mechanisms\">Managing Network Issues: Setting Appropriate Connection Timeouts and Implementing Efficient Retry Mechanisms</h1>\n<p>Efficient management of network issues directly contributes to enhanced backend performance in web applications. When an application attempts to establish a network connection, a reasonable connection timeout ensures the process doesn’t hang indefinitely while waiting for a response. This allows for optimal system resource utilization, reducing unnecessary load on the server, thereby enhancing backend performance. For example, a server dealing with heavy traffic might cause delays. If the connection timeout is set too low, the application might terminate the process prematurely, reducing efficiency. Meanwhile, an effective retry mechanism is crucial to handle network failures. Without an efficient retry mechanism, network failures could trigger serious system errors or downtime. For example, if a network call fails due to temporary network issues, a well-implemented retry mechanism can attempt at re-establishing the connection, ensuring uninterrupted backend operations and enhanced application performance.</p>";

				const frontmatter$2r = {};
				const file$2r = "/workspaces/developer-roadmap/src/data/best-practices/backend-performance/content/connection-timeouts.md";
				const url$2r = undefined;
				function rawContent$2r() {
					return "# Managing Network Issues: Setting Appropriate Connection Timeouts and Implementing Efficient Retry Mechanisms \n\nEfficient management of network issues directly contributes to enhanced backend performance in web applications. When an application attempts to establish a network connection, a reasonable connection timeout ensures the process doesn't hang indefinitely while waiting for a response. This allows for optimal system resource utilization, reducing unnecessary load on the server, thereby enhancing backend performance. For example, a server dealing with heavy traffic might cause delays. If the connection timeout is set too low, the application might terminate the process prematurely, reducing efficiency. Meanwhile, an effective retry mechanism is crucial to handle network failures. Without an efficient retry mechanism, network failures could trigger serious system errors or downtime. For example, if a network call fails due to temporary network issues, a well-implemented retry mechanism can attempt at re-establishing the connection, ensuring uninterrupted backend operations and enhanced application performance.";
				}
				function compiledContent$2r() {
					return html$2r;
				}
				function getHeadings$2r() {
					return [{"depth":1,"slug":"managing-network-issues-setting-appropriate-connection-timeouts-and-implementing-efficient-retry-mechanisms","text":"Managing Network Issues: Setting Appropriate Connection Timeouts and Implementing Efficient Retry Mechanisms"}];
				}

				const Content$2r = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter$2r;
					content.file = file$2r;
					content.url = url$2r;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html$2r)}`;
				});

const __vite_glob_0_113 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	Content: Content$2r,
	compiledContent: compiledContent$2r,
	default: Content$2r,
	file: file$2r,
	frontmatter: frontmatter$2r,
	getHeadings: getHeadings$2r,
	rawContent: rawContent$2r,
	url: url$2r
}, Symbol.toStringTag, { value: 'Module' }));

const html$2q = "<h1 id=\"optimizing-critical-paths-and-frequently-accessed-endpoints\">Optimizing Critical Paths and Frequently Accessed Endpoints</h1>\n<p>In web applications, maintaining the overall system health is crucial, and an important aspect of this is the optimization of critical paths and frequently accessed endpoints. These paths and endpoints act as the vital junctions where most user requests are processed, converted, and delivered as output. Proper identification and optimization of these routes ensure seamless user experience and high-speed data delivery. For instance, when a user logs on to an e-commerce website, the critical paths may include user authentication, product search, and payment gateway. Prioritizing the performance of these backend endpoints helps in reducing latency and enhances page load speed, preserving optimum overall system health.</p>";

				const frontmatter$2q = {};
				const file$2q = "/workspaces/developer-roadmap/src/data/best-practices/backend-performance/content/critical-paths.md";
				const url$2q = undefined;
				function rawContent$2q() {
					return "# Optimizing Critical Paths and Frequently Accessed Endpoints\n\nIn web applications, maintaining the overall system health is crucial, and an important aspect of this is the optimization of critical paths and frequently accessed endpoints. These paths and endpoints act as the vital junctions where most user requests are processed, converted, and delivered as output. Proper identification and optimization of these routes ensure seamless user experience and high-speed data delivery. For instance, when a user logs on to an e-commerce website, the critical paths may include user authentication, product search, and payment gateway. Prioritizing the performance of these backend endpoints helps in reducing latency and enhances page load speed, preserving optimum overall system health.";
				}
				function compiledContent$2q() {
					return html$2q;
				}
				function getHeadings$2q() {
					return [{"depth":1,"slug":"optimizing-critical-paths-and-frequently-accessed-endpoints","text":"Optimizing Critical Paths and Frequently Accessed Endpoints"}];
				}

				const Content$2q = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter$2q;
					content.file = file$2q;
					content.url = url$2q;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html$2q)}`;
				});

const __vite_glob_0_114 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	Content: Content$2q,
	compiledContent: compiledContent$2q,
	default: Content$2q,
	file: file$2q,
	frontmatter: frontmatter$2q,
	getHeadings: getHeadings$2q,
	rawContent: rawContent$2q,
	url: url$2q
}, Symbol.toStringTag, { value: 'Module' }));

const html$2p = "<h1 id=\"efficient-database-indexing\">Efficient Database Indexing</h1>\n<p>In web application development, efficient database indexing is instrumental in boosting backend performance. Indexes significantly cut short the time it takes for databases to retrieve and write data by providing swift navigational access to the rows in a table. For instance, a database without indexes may need to scan every row in a table to retrieve the required data, resulting in slow query response time. However, if the table is indexed, the same database can locate the data quickly and efficiently. It’s akin to finding a book in a library - without a cataloguing system (index), you’d have to go through each book manually. With a cataloguing system (index), you can swiftly locate the exact book you need. Therefore, proper indexing strategy is key for high backend performance.</p>";

				const frontmatter$2p = {};
				const file$2p = "/workspaces/developer-roadmap/src/data/best-practices/backend-performance/content/db-indexes.md";
				const url$2p = undefined;
				function rawContent$2p() {
					return "# Efficient Database Indexing\n\nIn web application development, efficient database indexing is instrumental in boosting backend performance. Indexes significantly cut short the time it takes for databases to retrieve and write data by providing swift navigational access to the rows in a table. For instance, a database without indexes may need to scan every row in a table to retrieve the required data, resulting in slow query response time. However, if the table is indexed, the same database can locate the data quickly and efficiently. It's akin to finding a book in a library - without a cataloguing system (index), you'd have to go through each book manually. With a cataloguing system (index), you can swiftly locate the exact book you need. Therefore, proper indexing strategy is key for high backend performance.";
				}
				function compiledContent$2p() {
					return html$2p;
				}
				function getHeadings$2p() {
					return [{"depth":1,"slug":"efficient-database-indexing","text":"Efficient Database Indexing"}];
				}

				const Content$2p = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter$2p;
					content.file = file$2p;
					content.url = url$2p;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html$2p)}`;
				});

const __vite_glob_0_115 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	Content: Content$2p,
	compiledContent: compiledContent$2p,
	default: Content$2p,
	file: file$2p,
	frontmatter: frontmatter$2p,
	getHeadings: getHeadings$2p,
	rawContent: rawContent$2p,
	url: url$2p
}, Symbol.toStringTag, { value: 'Module' }));

const html$2o = "<h1 id=\"denormalizing-database-schema-for-read-heavy-workloads-and-reducing-join-operations\">Denormalizing Database Schema for Read-Heavy Workloads and Reducing Join Operations</h1>\n<p>Web applications with high read demand benefit from a denormalized database schema, as it significantly improves backend performance. Primarily, denormalization reduces the need for costly join operations, making data retrieval quicker and more efficient. For example, an e-commerce application with millions of views per day would benefit from denormalized schema because each product page view might need to fetch data from multiple tables such as product, reviews, price, and vendor details. If these tables are denormalized into a single table, it eradicates the need for join operations, making the page load faster for end users. The subsequent boost in efficiency benefits the backend system by alleviating processing strain and enables it to deal with higher volume loads, thus enhancing overall backend performance.</p>";

				const frontmatter$2o = {};
				const file$2o = "/workspaces/developer-roadmap/src/data/best-practices/backend-performance/content/denormalize.md";
				const url$2o = undefined;
				function rawContent$2o() {
					return "# Denormalizing Database Schema for Read-Heavy Workloads and Reducing Join Operations\n\nWeb applications with high read demand benefit from a denormalized database schema, as it significantly improves backend performance. Primarily, denormalization reduces the need for costly join operations, making data retrieval quicker and more efficient. For example, an e-commerce application with millions of views per day would benefit from denormalized schema because each product page view might need to fetch data from multiple tables such as product, reviews, price, and vendor details. If these tables are denormalized into a single table, it eradicates the need for join operations, making the page load faster for end users. The subsequent boost in efficiency benefits the backend system by alleviating processing strain and enables it to deal with higher volume loads, thus enhancing overall backend performance.";
				}
				function compiledContent$2o() {
					return html$2o;
				}
				function getHeadings$2o() {
					return [{"depth":1,"slug":"denormalizing-database-schema-for-read-heavy-workloads-and-reducing-join-operations","text":"Denormalizing Database Schema for Read-Heavy Workloads and Reducing Join Operations"}];
				}

				const Content$2o = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter$2o;
					content.file = file$2o;
					content.url = url$2o;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html$2o)}`;
				});

const __vite_glob_0_116 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	Content: Content$2o,
	compiledContent: compiledContent$2o,
	default: Content$2o,
	file: file$2o,
	frontmatter: frontmatter$2o,
	getHeadings: getHeadings$2o,
	rawContent: rawContent$2o,
	url: url$2o
}, Symbol.toStringTag, { value: 'Module' }));

const html$2n = "<h1 id=\"enabling-compression-for-responses\">Enabling Compression for Responses</h1>\n<p>Optimizing the backend performance of web applications often necessitates the enablement of compression for responses. Compression methods, such as Gzip or Brotli, reduce the size of the data transmitted between the server and the client. This result in faster data transfer, minimizing the load time of the web page and improving the user experience. For instance, if a web page has a size of 100 KB, applying compression can reduce it to 30 KB. This means less data to download, hence quicker loading times. Therefore, enabling compression for responses is critical in making web applications more efficient and responsive.</p>";

				const frontmatter$2n = {};
				const file$2n = "/workspaces/developer-roadmap/src/data/best-practices/backend-performance/content/enable-compression.md";
				const url$2n = undefined;
				function rawContent$2n() {
					return "# Enabling Compression for Responses\n\nOptimizing the backend performance of web applications often necessitates the enablement of compression for responses. Compression methods, such as Gzip or Brotli, reduce the size of the data transmitted between the server and the client. This result in faster data transfer, minimizing the load time of the web page and improving the user experience. For instance, if a web page has a size of 100 KB, applying compression can reduce it to 30 KB. This means less data to download, hence quicker loading times. Therefore, enabling compression for responses is critical in making web applications more efficient and responsive.";
				}
				function compiledContent$2n() {
					return html$2n;
				}
				function getHeadings$2n() {
					return [{"depth":1,"slug":"enabling-compression-for-responses","text":"Enabling Compression for Responses"}];
				}

				const Content$2n = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter$2n;
					content.file = file$2n;
					content.url = url$2n;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html$2n)}`;
				});

const __vite_glob_0_117 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	Content: Content$2n,
	compiledContent: compiledContent$2n,
	default: Content$2n,
	file: file$2n,
	frontmatter: frontmatter$2n,
	getHeadings: getHeadings$2n,
	rawContent: rawContent$2n,
	url: url$2n
}, Symbol.toStringTag, { value: 'Module' }));

const html$2m = "<h1 id=\"efficient-pagination-for-large-datasets\">Efficient Pagination for Large Datasets</h1>\n<p>Handling large datasets effectively is key to improving backend performance in web applications. When a database query returns too much data, it can lead to slow load times and a poor user experience. Implementing efficient pagination significantly reduces the amount of data to be processed at once, thus reducing server load and latency times. For example, instead of loading thousands, or even millions, of records in one go, pagination allows it to load only a specific number of records per page, boosting speed and efficiency. It helps ensure seamless data retrieval, an impressive server response time, and ultimately better overall performance.</p>";

				const frontmatter$2m = {};
				const file$2m = "/workspaces/developer-roadmap/src/data/best-practices/backend-performance/content/implement-pagination.md";
				const url$2m = undefined;
				function rawContent$2m() {
					return "# Efficient Pagination for Large Datasets\n\nHandling large datasets effectively is key to improving backend performance in web applications. When a database query returns too much data, it can lead to slow load times and a poor user experience. Implementing efficient pagination significantly reduces the amount of data to be processed at once, thus reducing server load and latency times. For example, instead of loading thousands, or even millions, of records in one go, pagination allows it to load only a specific number of records per page, boosting speed and efficiency. It helps ensure seamless data retrieval, an impressive server response time, and ultimately better overall performance.";
				}
				function compiledContent$2m() {
					return html$2m;
				}
				function getHeadings$2m() {
					return [{"depth":1,"slug":"efficient-pagination-for-large-datasets","text":"Efficient Pagination for Large Datasets"}];
				}

				const Content$2m = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter$2m;
					content.file = file$2m;
					content.url = url$2m;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html$2m)}`;
				});

const __vite_glob_0_118 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	Content: Content$2m,
	compiledContent: compiledContent$2m,
	default: Content$2m,
	file: file$2m,
	frontmatter: frontmatter$2m,
	getHeadings: getHeadings$2m,
	rawContent: rawContent$2m,
	url: url$2m
}, Symbol.toStringTag, { value: 'Module' }));

const html$2l = "<h1 id=\"\"></h1>";

				const frontmatter$2l = {};
				const file$2l = "/workspaces/developer-roadmap/src/data/best-practices/backend-performance/content/index.md";
				const url$2l = undefined;
				function rawContent$2l() {
					return "# ";
				}
				function compiledContent$2l() {
					return html$2l;
				}
				function getHeadings$2l() {
					return [{"depth":1,"slug":"","text":""}];
				}

				const Content$2l = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter$2l;
					content.file = file$2l;
					content.url = url$2l;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html$2l)}`;
				});

const __vite_glob_0_119 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	Content: Content$2l,
	compiledContent: compiledContent$2l,
	default: Content$2l,
	file: file$2l,
	frontmatter: frontmatter$2l,
	getHeadings: getHeadings$2l,
	rawContent: rawContent$2l,
	url: url$2l
}, Symbol.toStringTag, { value: 'Module' }));

const html$2k = "<h1 id=\"optimizing-join-operations-and-avoiding-unnecessary-joins\">Optimizing Join Operations and Avoiding Unnecessary Joins</h1>\n<p>In the realm of backend performance, the efficiency of join operations weighs heavily. Join operations combine rows from two or more tables, an action that can be processor-intensive and can drastically slow down system response times. As the size and complexity of databases increase, so does the time taken for these operations. Hence, optimizing join operations is paramount. This could involve appropriately indexing your tables or using specific types of joins such as INNER JOIN or LEFT JOIN depending on your needs. Similarly, unnecessary joins can clutter system processes and slow down performance. For example, if two tables have no real association but are joined, data retrieval can become sluggish and inefficient. Hence, preventing unnecessary joins enhances the overall backend performance.</p>";

				const frontmatter$2k = {};
				const file$2k = "/workspaces/developer-roadmap/src/data/best-practices/backend-performance/content/join-operations.md";
				const url$2k = undefined;
				function rawContent$2k() {
					return "# Optimizing Join Operations and Avoiding Unnecessary Joins \n\nIn the realm of backend performance, the efficiency of join operations weighs heavily. Join operations combine rows from two or more tables, an action that can be processor-intensive and can drastically slow down system response times. As the size and complexity of databases increase, so does the time taken for these operations. Hence, optimizing join operations is paramount. This could involve appropriately indexing your tables or using specific types of joins such as INNER JOIN or LEFT JOIN depending on your needs. Similarly, unnecessary joins can clutter system processes and slow down performance. For example, if two tables have no real association but are joined, data retrieval can become sluggish and inefficient. Hence, preventing unnecessary joins enhances the overall backend performance.";
				}
				function compiledContent$2k() {
					return html$2k;
				}
				function getHeadings$2k() {
					return [{"depth":1,"slug":"optimizing-join-operations-and-avoiding-unnecessary-joins","text":"Optimizing Join Operations and Avoiding Unnecessary Joins"}];
				}

				const Content$2k = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter$2k;
					content.file = file$2k;
					content.url = url$2k;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html$2k)}`;
				});

const __vite_glob_0_120 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	Content: Content$2k,
	compiledContent: compiledContent$2k,
	default: Content$2k,
	file: file$2k,
	frontmatter: frontmatter$2k,
	getHeadings: getHeadings$2k,
	rawContent: rawContent$2k,
	url: url$2k
}, Symbol.toStringTag, { value: 'Module' }));

const html$2j = "<h1 id=\"utilization-of-http-keep-alive-for-reducing-connection-overhead\">Utilization of HTTP Keep-Alive for Reducing Connection Overhead</h1>\n<p>Significant enhancement in backend performance for web applications can be achieved through the utilization of HTTP keep-alive. This protocol allows for multiple HTTP requests to be sent over the same TCP connection. Typically, each new request from a client to a server would require a new TCP connection, and this process can be resource-intensive and slow as it involves a three-way handshake. With HTTP keep-alive, these overheads are greatly reduced as one connection can be reused for multiple requests. For example, in a web application where users constantly interact and request data, using this method can greatly speed up the load time and response, creating a smoother user experience.</p>";

				const frontmatter$2j = {};
				const file$2j = "/workspaces/developer-roadmap/src/data/best-practices/backend-performance/content/keep-alive.md";
				const url$2j = undefined;
				function rawContent$2j() {
					return "# Utilization of HTTP Keep-Alive for Reducing Connection Overhead \n\nSignificant enhancement in backend performance for web applications can be achieved through the utilization of HTTP keep-alive. This protocol allows for multiple HTTP requests to be sent over the same TCP connection. Typically, each new request from a client to a server would require a new TCP connection, and this process can be resource-intensive and slow as it involves a three-way handshake. With HTTP keep-alive, these overheads are greatly reduced as one connection can be reused for multiple requests. For example, in a web application where users constantly interact and request data, using this method can greatly speed up the load time and response, creating a smoother user experience.";
				}
				function compiledContent$2j() {
					return html$2j;
				}
				function getHeadings$2j() {
					return [{"depth":1,"slug":"utilization-of-http-keep-alive-for-reducing-connection-overhead","text":"Utilization of HTTP Keep-Alive for Reducing Connection Overhead"}];
				}

				const Content$2j = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter$2j;
					content.file = file$2j;
					content.url = url$2j;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html$2j)}`;
				});

const __vite_glob_0_121 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	Content: Content$2j,
	compiledContent: compiledContent$2j,
	default: Content$2j,
	file: file$2j,
	frontmatter: frontmatter$2j,
	getHeadings: getHeadings$2j,
	rawContent: rawContent$2j,
	url: url$2j
}, Symbol.toStringTag, { value: 'Module' }));

const html$2i = "<h1 id=\"optimizing-data-retrieval-with-lazy-loading-eager-loading-and-batch-processing\">Optimizing Data Retrieval with Lazy Loading, Eager Loading, and Batch Processing</h1>\n<p>Optimizing data retrieval has a direct impact on backend performance in web applications. Specifically, features such as lazy loading, eager loading, and batch processing can greatly improve system responsiveness. Lazy loading, which entails loading data only when it’s genuinely needed, can facilitate quicker initial page loading, thus improving user experience. On the contrary, eager loading minimizes the number of database queries by loading all necessary data upfront. While it may delay the initial loading process, it significantly speeds up subsequent data retrievals. In a similar vein, batch processing groups and executes similar tasks together, reducing the overhead associated with starting and ending tasks. These techniques are therefore crucial, as they help avoid performance bottlenecks and maintain efficient, seamless operation on the backend.</p>";

				const frontmatter$2i = {};
				const file$2i = "/workspaces/developer-roadmap/src/data/best-practices/backend-performance/content/lazy-eager.md";
				const url$2i = undefined;
				function rawContent$2i() {
					return "# Optimizing Data Retrieval with Lazy Loading, Eager Loading, and Batch Processing\n\nOptimizing data retrieval has a direct impact on backend performance in web applications. Specifically, features such as lazy loading, eager loading, and batch processing can greatly improve system responsiveness. Lazy loading, which entails loading data only when it's genuinely needed, can facilitate quicker initial page loading, thus improving user experience. On the contrary, eager loading minimizes the number of database queries by loading all necessary data upfront. While it may delay the initial loading process, it significantly speeds up subsequent data retrievals. In a similar vein, batch processing groups and executes similar tasks together, reducing the overhead associated with starting and ending tasks. These techniques are therefore crucial, as they help avoid performance bottlenecks and maintain efficient, seamless operation on the backend.";
				}
				function compiledContent$2i() {
					return html$2i;
				}
				function getHeadings$2i() {
					return [{"depth":1,"slug":"optimizing-data-retrieval-with-lazy-loading-eager-loading-and-batch-processing","text":"Optimizing Data Retrieval with Lazy Loading, Eager Loading, and Batch Processing"}];
				}

				const Content$2i = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter$2i;
					content.file = file$2i;
					content.url = url$2i;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html$2i)}`;
				});

const __vite_glob_0_122 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	Content: Content$2i,
	compiledContent: compiledContent$2i,
	default: Content$2i,
	file: file$2i,
	frontmatter: frontmatter$2i,
	getHeadings: getHeadings$2i,
	rawContent: rawContent$2i,
	url: url$2i
}, Symbol.toStringTag, { value: 'Module' }));

const html$2h = "<h1 id=\"load-balancing-for-traffic-distribution\">Load Balancing for Traffic Distribution</h1>\n<p>The performance of a backend system in web applications hugely relies on the way it handles incoming traffic. If a server is overwhelmed with too much traffic, it may slow down significantly or, in the worst-case scenario, crash completely. Opting to use load balancing mitigates these risks. Load balancing involves distributing network traffic across multiple servers, thereby ensuring none is overwhelmed. This undoubtedly optimizes backend performance, maintaining system stability, and increasing the capacity to handle more traffic. For instance, high traffic websites like Amazon and Facebook use load balancers to evenly distribute millions of requests per day among countless servers, ensuring smooth and efficient service delivery.</p>";

				const frontmatter$2h = {};
				const file$2h = "/workspaces/developer-roadmap/src/data/best-practices/backend-performance/content/load-balancing.md";
				const url$2h = undefined;
				function rawContent$2h() {
					return "# Load Balancing for Traffic Distribution\n\nThe performance of a backend system in web applications hugely relies on the way it handles incoming traffic. If a server is overwhelmed with too much traffic, it may slow down significantly or, in the worst-case scenario, crash completely. Opting to use load balancing mitigates these risks. Load balancing involves distributing network traffic across multiple servers, thereby ensuring none is overwhelmed. This undoubtedly optimizes backend performance, maintaining system stability, and increasing the capacity to handle more traffic. For instance, high traffic websites like Amazon and Facebook use load balancers to evenly distribute millions of requests per day among countless servers, ensuring smooth and efficient service delivery.";
				}
				function compiledContent$2h() {
					return html$2h;
				}
				function getHeadings$2h() {
					return [{"depth":1,"slug":"load-balancing-for-traffic-distribution","text":"Load Balancing for Traffic Distribution"}];
				}

				const Content$2h = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter$2h;
					content.file = file$2h;
					content.url = url$2h;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html$2h)}`;
				});

const __vite_glob_0_123 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	Content: Content$2h,
	compiledContent: compiledContent$2h,
	default: Content$2h,
	file: file$2h,
	frontmatter: frontmatter$2h,
	getHeadings: getHeadings$2h,
	rawContent: rawContent$2h,
	url: url$2h
}, Symbol.toStringTag, { value: 'Module' }));

const html$2g = "<h1 id=\"utilizing-message-brokers-for-async-communication-between-services\">Utilizing Message Brokers for Async Communication Between Services</h1>\n<p>Backend performance enhancement heavily relies on effective communication between diverse services. Message brokers, in this context, prove to be an essential instrument as they facilitate asynchronous communication, a method which boosts the system’s overall performance by allowing multiple operations to occur simultaneously. For instance, in a web application that processes online payments, a message broker can permit the receipt of payments (one service) to occur concurrently with updating the user’s payment history (another service). This prevents delays and halts, which means end users receive faster and smoother experiences. An improved backend performance, characterized by efficiency and time-effectiveness, makes this possible.</p>";

				const frontmatter$2g = {};
				const file$2g = "/workspaces/developer-roadmap/src/data/best-practices/backend-performance/content/message-brokers.md";
				const url$2g = undefined;
				function rawContent$2g() {
					return "# Utilizing Message Brokers for Async Communication Between Services\n\nBackend performance enhancement heavily relies on effective communication between diverse services. Message brokers, in this context, prove to be an essential instrument as they facilitate asynchronous communication, a method which boosts the system’s overall performance by allowing multiple operations to occur simultaneously. For instance, in a web application that processes online payments, a message broker can permit the receipt of payments (one service) to occur concurrently with updating the user’s payment history (another service). This prevents delays and halts, which means end users receive faster and smoother experiences. An improved backend performance, characterized by efficiency and time-effectiveness, makes this possible.";
				}
				function compiledContent$2g() {
					return html$2g;
				}
				function getHeadings$2g() {
					return [{"depth":1,"slug":"utilizing-message-brokers-for-async-communication-between-services","text":"Utilizing Message Brokers for Async Communication Between Services"}];
				}

				const Content$2g = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter$2g;
					content.file = file$2g;
					content.url = url$2g;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html$2g)}`;
				});

const __vite_glob_0_124 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	Content: Content$2g,
	compiledContent: compiledContent$2g,
	default: Content$2g,
	file: file$2g,
	frontmatter: frontmatter$2g,
	getHeadings: getHeadings$2g,
	rawContent: rawContent$2g,
	url: url$2g
}, Symbol.toStringTag, { value: 'Module' }));

const html$2f = "<h1 id=\"comprehensive-monitoring-and-logging\">Comprehensive Monitoring and Logging</h1>\n<p>Backend performance can significantly affect the functionality and user experience of a web application. This necessitates the implementation of comprehensive monitoring and logging to track performance metrics and troubleshoot issues. These tactics give us eyes and ears within the performance of our application’s infrastructure, helping identify potential bottlenecks or breakdowns. For example, monitoring could reveal that a particular database operation is taking longer than expected, which could be the cue to optimize the associated query. Similarly, logging will give us detailed records of application events, allowing us to trace and resolve any errors or issues captured in these logs. Unresolved issues can often slow down backend operations, or hamper their working altogether, hence impacting performance. Therefore, effective application of monitoring and validating logging data can enhance backend efficiency and bring valuable insights for further improvement.</p>";

				const frontmatter$2f = {};
				const file$2f = "/workspaces/developer-roadmap/src/data/best-practices/backend-performance/content/monitoring-logging.md";
				const url$2f = undefined;
				function rawContent$2f() {
					return "# Comprehensive Monitoring and Logging\n\nBackend performance can significantly affect the functionality and user experience of a web application. This necessitates the implementation of comprehensive monitoring and logging to track performance metrics and troubleshoot issues. These tactics give us eyes and ears within the performance of our application's infrastructure, helping identify potential bottlenecks or breakdowns. For example, monitoring could reveal that a particular database operation is taking longer than expected, which could be the cue to optimize the associated query. Similarly, logging will give us detailed records of application events, allowing us to trace and resolve any errors or issues captured in these logs. Unresolved issues can often slow down backend operations, or hamper their working altogether, hence impacting performance. Therefore, effective application of monitoring and validating logging data can enhance backend efficiency and bring valuable insights for further improvement.";
				}
				function compiledContent$2f() {
					return html$2f;
				}
				function getHeadings$2f() {
					return [{"depth":1,"slug":"comprehensive-monitoring-and-logging","text":"Comprehensive Monitoring and Logging"}];
				}

				const Content$2f = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter$2f;
					content.file = file$2f;
					content.url = url$2f;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html$2f)}`;
				});

const __vite_glob_0_125 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	Content: Content$2f,
	compiledContent: compiledContent$2f,
	default: Content$2f,
	file: file$2f,
	frontmatter: frontmatter$2f,
	getHeadings: getHeadings$2f,
	rawContent: rawContent$2f,
	url: url$2f
}, Symbol.toStringTag, { value: 'Module' }));

const html$2e = "<h1 id=\"hosting-backend-close-to-users-to-minimize-network-latency\">Hosting Backend Close to Users to Minimize Network Latency</h1>\n<p>In web applications, reducing network latency can substantially enhance the backend performance. This means data has less distance to travel between users and servers, resulting in faster response times and smoother user experiences. For instance, if a company’s primary user base resides in Asia but its server is in North America, the geographical gap can cause noticeable delays. However, by situating the backend near this Asia-based user base, data doesn’t have to cross oceans and continents, making interactive web services more responsive and reliable. Hence, hosting the backend location close to the users is a crucial strategy in minimizing network latency.</p>";

				const frontmatter$2e = {};
				const file$2e = "/workspaces/developer-roadmap/src/data/best-practices/backend-performance/content/network-latency.md";
				const url$2e = undefined;
				function rawContent$2e() {
					return "# Hosting Backend Close to Users to Minimize Network Latency\n\nIn web applications, reducing network latency can substantially enhance the backend performance. This means data has less distance to travel between users and servers, resulting in faster response times and smoother user experiences. For instance, if a company's primary user base resides in Asia but its server is in North America, the geographical gap can cause noticeable delays. However, by situating the backend near this Asia-based user base, data doesn't have to cross oceans and continents, making interactive web services more responsive and reliable. Hence, hosting the backend location close to the users is a crucial strategy in minimizing network latency.";
				}
				function compiledContent$2e() {
					return html$2e;
				}
				function getHeadings$2e() {
					return [{"depth":1,"slug":"hosting-backend-close-to-users-to-minimize-network-latency","text":"Hosting Backend Close to Users to Minimize Network Latency"}];
				}

				const Content$2e = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter$2e;
					content.file = file$2e;
					content.url = url$2e;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html$2e)}`;
				});

const __vite_glob_0_126 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	Content: Content$2e,
	compiledContent: compiledContent$2e,
	default: Content$2e,
	file: file$2e,
	frontmatter: frontmatter$2e,
	getHeadings: getHeadings$2e,
	rawContent: rawContent$2e,
	url: url$2e
}, Symbol.toStringTag, { value: 'Module' }));

const html$2d = "<h1 id=\"offloading-heavy-tasks-to-background-jobs-or-queues\">Offloading Heavy Tasks to Background Jobs or Queues</h1>\n<p>In web applications, backend performance can be significantly optimized through the offloading of heavy tasks to background jobs or queues. If significant computational tasks or resource-intensive operations are processed in real-time, there can be a considerable slowdown in the system’s response time. This can lead to an undesirable user experience as requests take longer to process. In contrast, moving these heavy tasks to background processes allows for a more streamlined and efficient operation. For instance, creating a thumbnail for an uploaded image or sending a confirmation email could be moved to a background job, leaving the main thread free to handle user requests. This way, the user wouldn’t have to wait unnecessarily and could continue navigating the website seamlessly, hence, improving overall system performance and responsiveness.</p>";

				const frontmatter$2d = {};
				const file$2d = "/workspaces/developer-roadmap/src/data/best-practices/backend-performance/content/offload-heavy.md";
				const url$2d = undefined;
				function rawContent$2d() {
					return "# Offloading Heavy Tasks to Background Jobs or Queues\n\nIn web applications, backend performance can be significantly optimized through the offloading of heavy tasks to background jobs or queues. If significant computational tasks or resource-intensive operations are processed in real-time, there can be a considerable slowdown in the system’s response time. This can lead to an undesirable user experience as requests take longer to process. In contrast, moving these heavy tasks to background processes allows for a more streamlined and efficient operation. For instance, creating a thumbnail for an uploaded image or sending a confirmation email could be moved to a background job, leaving the main thread free to handle user requests. This way, the user wouldn't have to wait unnecessarily and could continue navigating the website seamlessly, hence, improving overall system performance and responsiveness.";
				}
				function compiledContent$2d() {
					return html$2d;
				}
				function getHeadings$2d() {
					return [{"depth":1,"slug":"offloading-heavy-tasks-to-background-jobs-or-queues","text":"Offloading Heavy Tasks to Background Jobs or Queues"}];
				}

				const Content$2d = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter$2d;
					content.file = file$2d;
					content.url = url$2d;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html$2d)}`;
				});

const __vite_glob_0_127 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	Content: Content$2d,
	compiledContent: compiledContent$2d,
	default: Content$2d,
	file: file$2d,
	frontmatter: frontmatter$2d,
	getHeadings: getHeadings$2d,
	rawContent: rawContent$2d,
	url: url$2d
}, Symbol.toStringTag, { value: 'Module' }));

const html$2c = "<h1 id=\"optimization-of-algorithms-and-data-structures-used\">Optimization of Algorithms and Data Structures Used</h1>\n<p>Efficient use and optimization of algorithms and data structures significantly contribute to improving backend performance in web applications. For instance, a well-optimized sorting algorithm can enhance data processing speed while providing quick access to information. In contrast, an inefficient algorithm can increase server load leading to slowdowns and higher response times. Similarly, using appropriate data structures reduces memory usage and enhances data management. A classic example is using hash tables for efficient search operations instead of an array, reducing the time complexity from O(n) to O(1). Therefore, optimizing algorithms and data structures is essential for competent backend performance.</p>";

				const frontmatter$2c = {};
				const file$2c = "/workspaces/developer-roadmap/src/data/best-practices/backend-performance/content/optimize-algorithms.md";
				const url$2c = undefined;
				function rawContent$2c() {
					return "# Optimization of Algorithms and Data Structures Used \n\nEfficient use and optimization of algorithms and data structures significantly contribute to improving backend performance in web applications. For instance, a well-optimized sorting algorithm can enhance data processing speed while providing quick access to information. In contrast, an inefficient algorithm can increase server load leading to slowdowns and higher response times. Similarly, using appropriate data structures reduces memory usage and enhances data management. A classic example is using hash tables for efficient search operations instead of an array, reducing the time complexity from O(n) to O(1). Therefore, optimizing algorithms and data structures is essential for competent backend performance.";
				}
				function compiledContent$2c() {
					return html$2c;
				}
				function getHeadings$2c() {
					return [{"depth":1,"slug":"optimization-of-algorithms-and-data-structures-used","text":"Optimization of Algorithms and Data Structures Used"}];
				}

				const Content$2c = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter$2c;
					content.file = file$2c;
					content.url = url$2c;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html$2c)}`;
				});

const __vite_glob_0_128 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	Content: Content$2c,
	compiledContent: compiledContent$2c,
	default: Content$2c,
	file: file$2c,
	frontmatter: frontmatter$2c,
	getHeadings: getHeadings$2c,
	rawContent: rawContent$2c,
	url: url$2c
}, Symbol.toStringTag, { value: 'Module' }));

const html$2b = "<h1 id=\"fine-tuning-orm-queries\">Fine-Tuning ORM Queries</h1>\n<p>For backend performance in web applications, one must diligently monitor and fine-tune Object-Relational Mapping (ORM) queries. Why? ORMs help to convert data between incompatible types, enabling database manipulations using an object-oriented paradigm. However, they can also generate heavy, inefficient SQL queries without proper management, creating lag in web performance. By keenly watching and fine-tuning these queries, you can ensure a smoother and faster data retrieval process, resulting in an overall boost to backend performance. For instance, ORM functions like eager loading and batch loading can be used to fetch related data in fewer queries, reducing load times and enhancing performance.</p>";

				const frontmatter$2b = {};
				const file$2b = "/workspaces/developer-roadmap/src/data/best-practices/backend-performance/content/orm-queries.md";
				const url$2b = undefined;
				function rawContent$2b() {
					return "# Fine-Tuning ORM Queries\n\nFor backend performance in web applications, one must diligently monitor and fine-tune Object-Relational Mapping (ORM) queries. Why? ORMs help to convert data between incompatible types, enabling database manipulations using an object-oriented paradigm. However, they can also generate heavy, inefficient SQL queries without proper management, creating lag in web performance. By keenly watching and fine-tuning these queries, you can ensure a smoother and faster data retrieval process, resulting in an overall boost to backend performance. For instance, ORM functions like eager loading and batch loading can be used to fetch related data in fewer queries, reducing load times and enhancing performance.";
				}
				function compiledContent$2b() {
					return html$2b;
				}
				function getHeadings$2b() {
					return [{"depth":1,"slug":"fine-tuning-orm-queries","text":"Fine-Tuning ORM Queries"}];
				}

				const Content$2b = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter$2b;
					content.file = file$2b;
					content.url = url$2b;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html$2b)}`;
				});

const __vite_glob_0_129 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	Content: Content$2b,
	compiledContent: compiledContent$2b,
	default: Content$2b,
	file: file$2b,
	frontmatter: frontmatter$2b,
	getHeadings: getHeadings$2b,
	rawContent: rawContent$2b,
	url: url$2b
}, Symbol.toStringTag, { value: 'Module' }));

const html$2a = "<h1 id=\"efficient-pagination-for-large-datasets\">Efficient Pagination for Large Datasets</h1>\n<p>Backend performance in web applications can significantly be improved with efficient pagination for large datasets. When data-loaded in an application is quite extensive, executing simple queries without pagination can slow down response times, producing an adverse user experience. Through pagination, applications can deliver data in smaller, manageable chunks, reducing the amount of data transferred on each request and thereby increasing the speed and performance of the backend. For instance, instead of retrieving a million records at once, the application retrieves chunks of 50 or 100 at a time, dramatically enhancing the performance.</p>";

				const frontmatter$2a = {};
				const file$2a = "/workspaces/developer-roadmap/src/data/best-practices/backend-performance/content/pagination-large-data.md";
				const url$2a = undefined;
				function rawContent$2a() {
					return "# Efficient Pagination for Large Datasets\n\nBackend performance in web applications can significantly be improved with efficient pagination for large datasets. When data-loaded in an application is quite extensive, executing simple queries without pagination can slow down response times, producing an adverse user experience. Through pagination, applications can deliver data in smaller, manageable chunks, reducing the amount of data transferred on each request and thereby increasing the speed and performance of the backend. For instance, instead of retrieving a million records at once, the application retrieves chunks of 50 or 100 at a time, dramatically enhancing the performance.";
				}
				function compiledContent$2a() {
					return html$2a;
				}
				function getHeadings$2a() {
					return [{"depth":1,"slug":"efficient-pagination-for-large-datasets","text":"Efficient Pagination for Large Datasets"}];
				}

				const Content$2a = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter$2a;
					content.file = file$2a;
					content.url = url$2a;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html$2a)}`;
				});

const __vite_glob_0_130 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	Content: Content$2a,
	compiledContent: compiledContent$2a,
	default: Content$2a,
	file: file$2a,
	frontmatter: frontmatter$2a,
	getHeadings: getHeadings$2a,
	rawContent: rawContent$2a,
	url: url$2a
}, Symbol.toStringTag, { value: 'Module' }));

const html$29 = "<h1 id=\"regular-performance-testing-and-benchmarking\">Regular Performance Testing and Benchmarking</h1>\n<p>Maintaining optimal backend performance in web applications involves consistent and regular performance testing and benchmarking. This practice helps in pinpointing any performance regressions which could otherwise significantly slow down the applications, leading to a subpar user experience. For example, if a new feature introduces memory leaks, regular testing can catch it before the feature is deployed. It also highlights improvements and illustrates the actual impact of optimization efforts over time. Through regular testing, ineffective optimizations can be scrapped before too many resources are invested into them, while beneficial strategies can be identified and further fine-tuned. Consequently, these actions contribute to a more efficient and productive application performance management strategy.</p>";

				const frontmatter$29 = {};
				const file$29 = "/workspaces/developer-roadmap/src/data/best-practices/backend-performance/content/perf-testing.md";
				const url$29 = undefined;
				function rawContent$29() {
					return "# Regular Performance Testing and Benchmarking\n\nMaintaining optimal backend performance in web applications involves consistent and regular performance testing and benchmarking. This practice helps in pinpointing any performance regressions which could otherwise significantly slow down the applications, leading to a subpar user experience. For example, if a new feature introduces memory leaks, regular testing can catch it before the feature is deployed. It also highlights improvements and illustrates the actual impact of optimization efforts over time. Through regular testing, ineffective optimizations can be scrapped before too many resources are invested into them, while beneficial strategies can be identified and further fine-tuned. Consequently, these actions contribute to a more efficient and productive application performance management strategy.";
				}
				function compiledContent$29() {
					return html$29;
				}
				function getHeadings$29() {
					return [{"depth":1,"slug":"regular-performance-testing-and-benchmarking","text":"Regular Performance Testing and Benchmarking"}];
				}

				const Content$29 = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter$29;
					content.file = file$29;
					content.url = url$29;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html$29)}`;
				});

const __vite_glob_0_131 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	Content: Content$29,
	compiledContent: compiledContent$29,
	default: Content$29,
	file: file$29,
	frontmatter: frontmatter$29,
	getHeadings: getHeadings$29,
	rawContent: rawContent$29,
	url: url$29
}, Symbol.toStringTag, { value: 'Module' }));

const html$28 = "<h1 id=\"optimising-backend-performance-through-prefetching-or-preloading-resources\">Optimising Backend Performance through Prefetching or Preloading Resources</h1>\n<p>The optimisation of backend performance in web applications involves proactively fetching or loading resources, data, or dependencies needed for future requests. By performing these operations in advance, costly delays (latency) are reduced significantly. This process ensures that resources are available as soon as they are required, resulting in a seamless and faster interaction for users. For instance, when a user opens a site, if images or other data that are likely to be used next are already preloaded, the user will not experience any delay as these elements load. As such, prefetching or preloading is critical to improve the overall speed of a web application, directly enhancing user experience.</p>";

				const frontmatter$28 = {};
				const file$28 = "/workspaces/developer-roadmap/src/data/best-practices/backend-performance/content/prefetch-preload.md";
				const url$28 = undefined;
				function rawContent$28() {
					return "# Optimising Backend Performance through Prefetching or Preloading Resources\n\nThe optimisation of backend performance in web applications involves proactively fetching or loading resources, data, or dependencies needed for future requests. By performing these operations in advance, costly delays (latency) are reduced significantly. This process ensures that resources are available as soon as they are required, resulting in a seamless and faster interaction for users. For instance, when a user opens a site, if images or other data that are likely to be used next are already preloaded, the user will not experience any delay as these elements load. As such, prefetching or preloading is critical to improve the overall speed of a web application, directly enhancing user experience.";
				}
				function compiledContent$28() {
					return html$28;
				}
				function getHeadings$28() {
					return [{"depth":1,"slug":"optimising-backend-performance-through-prefetching-or-preloading-resources","text":"Optimising Backend Performance through Prefetching or Preloading Resources"}];
				}

				const Content$28 = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter$28;
					content.file = file$28;
					content.url = url$28;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html$28)}`;
				});

const __vite_glob_0_132 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	Content: Content$28,
	compiledContent: compiledContent$28,
	default: Content$28,
	file: file$28,
	frontmatter: frontmatter$28,
	getHeadings: getHeadings$28,
	rawContent: rawContent$28,
	url: url$28
}, Symbol.toStringTag, { value: 'Module' }));

const html$27 = "<h1 id=\"identifying-performance-bottlenecks-through-code-profiling\">Identifying Performance Bottlenecks through Code Profiling</h1>\n<p>The effective performance of a web application’s backend heavily relies on the smooth operation of its code. Profiling is the process of monitoring the behaviour of your code, including the frequency and duration of function calls. This allows for the identification of performance bottlenecks—specific parts of the code that impede optimal performance. For example, a function that requires significant processing power and slows down the application can be revealed through code profiling. By identifying and resolving these bottlenecks, the backend performance can be dramatically improved, leading to faster response times and enhanced user experience.</p>";

				const frontmatter$27 = {};
				const file$27 = "/workspaces/developer-roadmap/src/data/best-practices/backend-performance/content/profile-code.md";
				const url$27 = undefined;
				function rawContent$27() {
					return "# Identifying Performance Bottlenecks through Code Profiling\n\nThe effective performance of a web application's backend heavily relies on the smooth operation of its code. Profiling is the process of monitoring the behaviour of your code, including the frequency and duration of function calls. This allows for the identification of performance bottlenecks—specific parts of the code that impede optimal performance. For example, a function that requires significant processing power and slows down the application can be revealed through code profiling. By identifying and resolving these bottlenecks, the backend performance can be dramatically improved, leading to faster response times and enhanced user experience.";
				}
				function compiledContent$27() {
					return html$27;
				}
				function getHeadings$27() {
					return [{"depth":1,"slug":"identifying-performance-bottlenecks-through-code-profiling","text":"Identifying Performance Bottlenecks through Code Profiling"}];
				}

				const Content$27 = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter$27;
					content.file = file$27;
					content.url = url$27;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html$27)}`;
				});

const __vite_glob_0_133 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	Content: Content$27,
	compiledContent: compiledContent$27,
	default: Content$27,
	file: file$27,
	frontmatter: frontmatter$27,
	getHeadings: getHeadings$27,
	rawContent: rawContent$27,
	url: url$27
}, Symbol.toStringTag, { value: 'Module' }));

const html$26 = "<h1 id=\"use-of-profiling-tools-in-database-management\">Use of Profiling Tools in Database Management</h1>\n<p>The backend performance of web applications can greatly benefit from the utilization of profiling tools provided by the database. These tools allow for the identification and isolation of performance bottlenecks within an application. By identifying slow queries or areas of inefficient data retrieval, detection of these issues early-on can prevent the propagation of defects through the application, ultimately enhancing user experience. For instance, MySQL features a database profiling tool that can identify query performance through examination of query execution times. Profiling not only contributes to maintaining the speed and efficiency of a website, but also enables developers to optimize their code more effectively, saving valuable development time and resources.</p>";

				const frontmatter$26 = {};
				const file$26 = "/workspaces/developer-roadmap/src/data/best-practices/backend-performance/content/profiling-tools.md";
				const url$26 = undefined;
				function rawContent$26() {
					return "# Use of Profiling Tools in Database Management\n\nThe backend performance of web applications can greatly benefit from the utilization of profiling tools provided by the database. These tools allow for the identification and isolation of performance bottlenecks within an application. By identifying slow queries or areas of inefficient data retrieval, detection of these issues early-on can prevent the propagation of defects through the application, ultimately enhancing user experience. For instance, MySQL features a database profiling tool that can identify query performance through examination of query execution times. Profiling not only contributes to maintaining the speed and efficiency of a website, but also enables developers to optimize their code more effectively, saving valuable development time and resources.";
				}
				function compiledContent$26() {
					return html$26;
				}
				function getHeadings$26() {
					return [{"depth":1,"slug":"use-of-profiling-tools-in-database-management","text":"Use of Profiling Tools in Database Management"}];
				}

				const Content$26 = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter$26;
					content.file = file$26;
					content.url = url$26;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html$26)}`;
				});

const __vite_glob_0_134 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	Content: Content$26,
	compiledContent: compiledContent$26,
	default: Content$26,
	file: file$26,
	frontmatter: frontmatter$26,
	getHeadings: getHeadings$26,
	rawContent: rawContent$26,
	url: url$26
}, Symbol.toStringTag, { value: 'Module' }));

const html$25 = "<h1 id=\"backend-monitoring-with-prometheus-grafana-elk-stack\">Backend Monitoring with Prometheus, Grafana, ELK Stack</h1>\n<p>Efficiency and rate of performance are paramount for the backend processes in web applications. Utilizing performance monitoring tools such as Prometheus, Grafana, and the ELK Stack ensures that any issues impacting performance can be promptly identified and rectified. For example, Prometheus offers robust monitoring capabilities by collecting numeric time series data, presenting a detailed insight into the application’s performance metrics. Grafana can visualize this data in an accessible, user-friendly way, helping developers to interpret complex statistics and notice trends or anomalies. Meanwhile, the ELK Stack (Elasticsearch, Logstash, Kibana) provides log management solutions, making it possible to search and analyze logs for indications of backend issues. By using these tools, developers can effectively keep backend performance at optimal levels, ensuring smoother user experiences.</p>";

				const frontmatter$25 = {};
				const file$25 = "/workspaces/developer-roadmap/src/data/best-practices/backend-performance/content/prometheus-graphana.md";
				const url$25 = undefined;
				function rawContent$25() {
					return "# Backend Monitoring with Prometheus, Grafana, ELK Stack\n\nEfficiency and rate of performance are paramount for the backend processes in web applications. Utilizing performance monitoring tools such as Prometheus, Grafana, and the ELK Stack ensures that any issues impacting performance can be promptly identified and rectified. For example, Prometheus offers robust monitoring capabilities by collecting numeric time series data, presenting a detailed insight into the application's performance metrics. Grafana can visualize this data in an accessible, user-friendly way, helping developers to interpret complex statistics and notice trends or anomalies. Meanwhile, the ELK Stack (Elasticsearch, Logstash, Kibana) provides log management solutions, making it possible to search and analyze logs for indications of backend issues. By using these tools, developers can effectively keep backend performance at optimal levels, ensuring smoother user experiences.";
				}
				function compiledContent$25() {
					return html$25;
				}
				function getHeadings$25() {
					return [{"depth":1,"slug":"backend-monitoring-with-prometheus-grafana-elk-stack","text":"Backend Monitoring with Prometheus, Grafana, ELK Stack"}];
				}

				const Content$25 = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter$25;
					content.file = file$25;
					content.url = url$25;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html$25)}`;
				});

const __vite_glob_0_135 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	Content: Content$25,
	compiledContent: compiledContent$25,
	default: Content$25,
	file: file$25,
	frontmatter: frontmatter$25,
	getHeadings: getHeadings$25,
	rawContent: rawContent$25,
	url: url$25
}, Symbol.toStringTag, { value: 'Module' }));

const html$24 = "<h1 id=\"enforcing-reasonable-payload-size-limits\">Enforcing Reasonable Payload Size Limits</h1>\n<p>Backend performance in web applications largely depends on how quickly servers are able to process, store, and retrieve data. When large data payloads are transferred, it places a heavy strain on network resources and the server itself; potentially resulting in sluggish response times and poor application performance. Hence, enforcing reasonable payload size limits is vital to maintain optimum performance. For example, a web application dealing with large image files can implement limits to ensure that users don’t upload images beyond a certain size. This not only helps to keep server and bandwidth costs manageable, but also ensures that the application runs smoothly for all users.</p>";

				const frontmatter$24 = {};
				const file$24 = "/workspaces/developer-roadmap/src/data/best-practices/backend-performance/content/reasonable-payload.md";
				const url$24 = undefined;
				function rawContent$24() {
					return "# Enforcing Reasonable Payload Size Limits\n\nBackend performance in web applications largely depends on how quickly servers are able to process, store, and retrieve data. When large data payloads are transferred, it places a heavy strain on network resources and the server itself; potentially resulting in sluggish response times and poor application performance. Hence, enforcing reasonable payload size limits is vital to maintain optimum performance. For example, a web application dealing with large image files can implement limits to ensure that users don't upload images beyond a certain size. This not only helps to keep server and bandwidth costs manageable, but also ensures that the application runs smoothly for all users.";
				}
				function compiledContent$24() {
					return html$24;
				}
				function getHeadings$24() {
					return [{"depth":1,"slug":"enforcing-reasonable-payload-size-limits","text":"Enforcing Reasonable Payload Size Limits"}];
				}

				const Content$24 = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter$24;
					content.file = file$24;
					content.url = url$24;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html$24)}`;
				});

const __vite_glob_0_136 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	Content: Content$24,
	compiledContent: compiledContent$24,
	default: Content$24,
	file: file$24,
	frontmatter: frontmatter$24,
	getHeadings: getHeadings$24,
	rawContent: rawContent$24,
	url: url$24
}, Symbol.toStringTag, { value: 'Module' }));

const html$23 = "<h1 id=\"regular-auditing-and-updating-security-measures\">Regular Auditing and Updating Security Measures</h1>\n<p>Securing the backend of your web application is paramount to maintaining peak performance. If a system is compromised due to outdated security measures, hackers could leverage this access to disrupt the performance of the site. For instance, an attacker may deploy a DDoS attack, rendering the service slow or completely unavailable. By conducting regular audits and updates of security measures, possible vulnerabilities can be identified and solved before they turn into larger performance affecting issues. This proactive approach supports stable operation, ensures smooth access for users, and promotes overall backend performance.</p>";

				const frontmatter$23 = {};
				const file$23 = "/workspaces/developer-roadmap/src/data/best-practices/backend-performance/content/regular-audits.md";
				const url$23 = undefined;
				function rawContent$23() {
					return "# Regular Auditing and Updating Security Measures\n\nSecuring the backend of your web application is paramount to maintaining peak performance. If a system is compromised due to outdated security measures, hackers could leverage this access to disrupt the performance of the site. For instance, an attacker may deploy a DDoS attack, rendering the service slow or completely unavailable. By conducting regular audits and updates of security measures, possible vulnerabilities can be identified and solved before they turn into larger performance affecting issues. This proactive approach supports stable operation, ensures smooth access for users, and promotes overall backend performance.";
				}
				function compiledContent$23() {
					return html$23;
				}
				function getHeadings$23() {
					return [{"depth":1,"slug":"regular-auditing-and-updating-security-measures","text":"Regular Auditing and Updating Security Measures"}];
				}

				const Content$23 = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter$23;
					content.file = file$23;
					content.url = url$23;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html$23)}`;
				});

const __vite_glob_0_137 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	Content: Content$23,
	compiledContent: compiledContent$23,
	default: Content$23,
	file: file$23,
	frontmatter: frontmatter$23,
	getHeadings: getHeadings$23,
	rawContent: rawContent$23,
	url: url$23
}, Symbol.toStringTag, { value: 'Module' }));

const html$22 = "<h1 id=\"database-replication-for-redundancy-and-enhanced-read-performance\">Database Replication for Redundancy and Enhanced Read Performance</h1>\n<p>Safeguarding backend performance necessitates database replication, as it increases redundancy thus enhancing data consistency across different systems. It facilitates simultaneous access to the same data from various servers, which significantly optimizes read performance. This is particularly beneficial for web applications that experience substantial read loads. For example, consider a busy e-commerce site during a sales event. If all read and write operations occur on the same database, it could lead to performance lags. However, with database replication, such high-volume read operations can be redirected to replicated servers, assuring smooth and efficient customer experiences.</p>";

				const frontmatter$22 = {};
				const file$22 = "/workspaces/developer-roadmap/src/data/best-practices/backend-performance/content/replication.md";
				const url$22 = undefined;
				function rawContent$22() {
					return "# Database Replication for Redundancy and Enhanced Read Performance\n\nSafeguarding backend performance necessitates database replication, as it increases redundancy thus enhancing data consistency across different systems. It facilitates simultaneous access to the same data from various servers, which significantly optimizes read performance. This is particularly beneficial for web applications that experience substantial read loads. For example, consider a busy e-commerce site during a sales event. If all read and write operations occur on the same database, it could lead to performance lags. However, with database replication, such high-volume read operations can be redirected to replicated servers, assuring smooth and efficient customer experiences.";
				}
				function compiledContent$22() {
					return html$22;
				}
				function getHeadings$22() {
					return [{"depth":1,"slug":"database-replication-for-redundancy-and-enhanced-read-performance","text":"Database Replication for Redundancy and Enhanced Read Performance"}];
				}

				const Content$22 = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter$22;
					content.file = file$22;
					content.url = url$22;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html$22)}`;
				});

const __vite_glob_0_138 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	Content: Content$22,
	compiledContent: compiledContent$22,
	default: Content$22,
	file: file$22,
	frontmatter: frontmatter$22,
	getHeadings: getHeadings$22,
	rawContent: rawContent$22,
	url: url$22
}, Symbol.toStringTag, { value: 'Module' }));

const html$21 = "<h1 id=\"implementing-request-throttling-and-rate-limiting\">Implementing Request Throttling and Rate Limiting</h1>\n<p>In the context of backend performance, implementing request throttling and rate limiting acts as a defensive mechanism against system overload. These practices help in managing the flow of incoming requests to a level that the system can handle comfortably, thereby improving responsiveness and reliability. For instance, during a high traffic spike, uncontrolled, simultaneous requests might exhaust system resources leading to service disruption. However, with request throttling and rate limiting, you can control this traffic ensuring a steady performance. Furthermore, it also provides a layer of security by thwarting potential DDoS attacks which aim to flood the system with requests leading to a system crash.</p>";

				const frontmatter$21 = {};
				const file$21 = "/workspaces/developer-roadmap/src/data/best-practices/backend-performance/content/request-throttling.md";
				const url$21 = undefined;
				function rawContent$21() {
					return "# Implementing Request Throttling and Rate Limiting \n\nIn the context of backend performance, implementing request throttling and rate limiting acts as a defensive mechanism against system overload. These practices help in managing the flow of incoming requests to a level that the system can handle comfortably, thereby improving responsiveness and reliability. For instance, during a high traffic spike, uncontrolled, simultaneous requests might exhaust system resources leading to service disruption. However, with request throttling and rate limiting, you can control this traffic ensuring a steady performance. Furthermore, it also provides a layer of security by thwarting potential DDoS attacks which aim to flood the system with requests leading to a system crash.";
				}
				function compiledContent$21() {
					return html$21;
				}
				function getHeadings$21() {
					return [{"depth":1,"slug":"implementing-request-throttling-and-rate-limiting","text":"Implementing Request Throttling and Rate Limiting"}];
				}

				const Content$21 = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter$21;
					content.file = file$21;
					content.url = url$21;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html$21)}`;
				});

const __vite_glob_0_139 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	Content: Content$21,
	compiledContent: compiledContent$21,
	default: Content$21,
	file: file$21,
	frontmatter: frontmatter$21,
	getHeadings: getHeadings$21,
	rawContent: rawContent$21,
	url: url$21
}, Symbol.toStringTag, { value: 'Module' }));

const html$20 = "<h1 id=\"proper-implementation-of-horizontal-or-vertical-scaling\">Proper Implementation of Horizontal or Vertical Scaling</h1>\n<p>An optimal backend performance in web applications relies heavily on implementing the right type of scaling, whether horizontal or vertical. In vertical scaling, additional resources are added to increase the capacity of an existing machine. It helps in the short run by quickly accommodating an increased load, but may be limited by the maximum capacity of individual servers. In contrast, horizontal scaling provides longer-term scalability by adding more machines to the existing pool. This improves the redundancy and reliability of the application and can handle significantly larger loads without relying on high-spec servers. A careful balance or judicious use of both can drastically improve backend performance. For example, a sudden surge in website traffic can be swiftly managed with vertical scaling while consistent long-term growth can be accommodated with horizontal scaling. Therefore, the decision of using horizontal or vertical scaling is pivotal in determining backend performance.</p>";

				const frontmatter$20 = {};
				const file$20 = "/workspaces/developer-roadmap/src/data/best-practices/backend-performance/content/scaling-strategies.md";
				const url$20 = undefined;
				function rawContent$20() {
					return "# Proper Implementation of Horizontal or Vertical Scaling \n\nAn optimal backend performance in web applications relies heavily on implementing the right type of scaling, whether horizontal or vertical. In vertical scaling, additional resources are added to increase the capacity of an existing machine. It helps in the short run by quickly accommodating an increased load, but may be limited by the maximum capacity of individual servers. In contrast, horizontal scaling provides longer-term scalability by adding more machines to the existing pool. This improves the redundancy and reliability of the application and can handle significantly larger loads without relying on high-spec servers. A careful balance or judicious use of both can drastically improve backend performance. For example, a sudden surge in website traffic can be swiftly managed with vertical scaling while consistent long-term growth can be accommodated with horizontal scaling. Therefore, the decision of using horizontal or vertical scaling is pivotal in determining backend performance.";
				}
				function compiledContent$20() {
					return html$20;
				}
				function getHeadings$20() {
					return [{"depth":1,"slug":"proper-implementation-of-horizontal-or-vertical-scaling","text":"Proper Implementation of Horizontal or Vertical Scaling"}];
				}

				const Content$20 = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter$20;
					content.file = file$20;
					content.url = url$20;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html$20)}`;
				});

const __vite_glob_0_140 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	Content: Content$20,
	compiledContent: compiledContent$20,
	default: Content$20,
	file: file$20,
	frontmatter: frontmatter$20,
	getHeadings: getHeadings$20,
	rawContent: rawContent$20,
	url: url$20
}, Symbol.toStringTag, { value: 'Module' }));

const html$1$ = "<h1 id=\"data-optimization-avoid-select--queries-and-fetch-only-required-columns\">Data Optimization: Avoid Select * Queries and Fetch Only Required Columns</h1>\n<p>Efficiency in the backend of web applications can be significantly improved by careful data queries. By avoiding the use of “Select *” queries, and instead only fetching the necessary columns, you reduce the load and strain on the database. This can not only accelerate the response time, but also reduces the storage usage, thereby improving the overall performance. To illustrate, consider a large database with hundreds of columns; using “Select *” would fetch all that data unnecessarily when you might only need data from three or four columns. This smart selection contributes immensely to a more optimal backend performance.</p>";

				const frontmatter$1$ = {};
				const file$1$ = "/workspaces/developer-roadmap/src/data/best-practices/backend-performance/content/select-star.md";
				const url$1$ = undefined;
				function rawContent$1$() {
					return "# Data Optimization: Avoid Select * Queries and Fetch Only Required Columns\n\nEfficiency in the backend of web applications can be significantly improved by careful data queries. By avoiding the use of \"Select *\" queries, and instead only fetching the necessary columns, you reduce the load and strain on the database. This can not only accelerate the response time, but also reduces the storage usage, thereby improving the overall performance. To illustrate, consider a large database with hundreds of columns; using \"Select *\" would fetch all that data unnecessarily when you might only need data from three or four columns. This smart selection contributes immensely to a more optimal backend performance.";
				}
				function compiledContent$1$() {
					return html$1$;
				}
				function getHeadings$1$() {
					return [{"depth":1,"slug":"data-optimization-avoid-select--queries-and-fetch-only-required-columns","text":"Data Optimization: Avoid Select * Queries and Fetch Only Required Columns"}];
				}

				const Content$1$ = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter$1$;
					content.file = file$1$;
					content.url = url$1$;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html$1$)}`;
				});

const __vite_glob_0_141 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	Content: Content$1$,
	compiledContent: compiledContent$1$,
	default: Content$1$,
	file: file$1$,
	frontmatter: frontmatter$1$,
	getHeadings: getHeadings$1$,
	rawContent: rawContent$1$,
	url: url$1$
}, Symbol.toStringTag, { value: 'Module' }));

const html$1_ = "<h1 id=\"minimizing-overhead-through-batch-processing\">Minimizing Overhead Through Batch Processing</h1>\n<p>The capacity of a web application’s backend to process large volumes of data promptly and efficiently plays a crucial role in its performance. Grouping similar requests together in a batch, rather than processing them individually, considerably reduces data transfer overhead. This is because it minimizes the number of round trips, or interactions between the client and server to obtain a response. For instance, in an e-commerce application, instead of retrieving each product detail individually, batching gathers all product details in a single request, which enhances response times and overall performance.</p>";

				const frontmatter$1_ = {};
				const file$1_ = "/workspaces/developer-roadmap/src/data/best-practices/backend-performance/content/similar-requests.md";
				const url$1_ = undefined;
				function rawContent$1_() {
					return "# Minimizing Overhead Through Batch Processing\n\nThe capacity of a web application's backend to process large volumes of data promptly and efficiently plays a crucial role in its performance. Grouping similar requests together in a batch, rather than processing them individually, considerably reduces data transfer overhead. This is because it minimizes the number of round trips, or interactions between the client and server to obtain a response. For instance, in an e-commerce application, instead of retrieving each product detail individually, batching gathers all product details in a single request, which enhances response times and overall performance.";
				}
				function compiledContent$1_() {
					return html$1_;
				}
				function getHeadings$1_() {
					return [{"depth":1,"slug":"minimizing-overhead-through-batch-processing","text":"Minimizing Overhead Through Batch Processing"}];
				}

				const Content$1_ = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter$1_;
					content.file = file$1_;
					content.url = url$1_;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html$1_)}`;
				});

const __vite_glob_0_142 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	Content: Content$1_,
	compiledContent: compiledContent$1_,
	default: Content$1_,
	file: file$1_,
	frontmatter: frontmatter$1_,
	getHeadings: getHeadings$1_,
	rawContent: rawContent$1_,
	url: url$1_
}, Symbol.toStringTag, { value: 'Module' }));

const html$1Z = "<h1 id=\"slow-query-logging-and-regular-monitoring\">Slow-Query Logging and Regular Monitoring</h1>\n<p>Keeping tabs on slow-query logging is vital for backend performance since it can help in identifying inefficient queries that may drag down the server’s productivity. For instance, a slow query might be taking an exceptionally long time to navigate through a large database, causing delays in information retrieval. By enabling slow-query logging, such ineffective queries can be spotted and optimized or reworked to minimize their run-time. Thus, it aids in maintaining smooth and efficient server operation while enhancing the application’s overall performance. Continuous monitoring of these logs can also point out recurring issues that need addressing, making it an indispensable tool for optimizing backend performance.</p>";

				const frontmatter$1Z = {};
				const file$1Z = "/workspaces/developer-roadmap/src/data/best-practices/backend-performance/content/slow-logging.md";
				const url$1Z = undefined;
				function rawContent$1Z() {
					return "# Slow-Query Logging and Regular Monitoring\n\nKeeping tabs on slow-query logging is vital for backend performance since it can help in identifying inefficient queries that may drag down the server's productivity. For instance, a slow query might be taking an exceptionally long time to navigate through a large database, causing delays in information retrieval. By enabling slow-query logging, such ineffective queries can be spotted and optimized or reworked to minimize their run-time. Thus, it aids in maintaining smooth and efficient server operation while enhancing the application's overall performance. Continuous monitoring of these logs can also point out recurring issues that need addressing, making it an indispensable tool for optimizing backend performance.";
				}
				function compiledContent$1Z() {
					return html$1Z;
				}
				function getHeadings$1Z() {
					return [{"depth":1,"slug":"slow-query-logging-and-regular-monitoring","text":"Slow-Query Logging and Regular Monitoring"}];
				}

				const Content$1Z = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter$1Z;
					content.file = file$1Z;
					content.url = url$1Z;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html$1Z)}`;
				});

const __vite_glob_0_143 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	Content: Content$1Z,
	compiledContent: compiledContent$1Z,
	default: Content$1Z,
	file: file$1Z,
	frontmatter: frontmatter$1Z,
	getHeadings: getHeadings$1Z,
	rawContent: rawContent$1Z,
	url: url$1Z
}, Symbol.toStringTag, { value: 'Module' }));

const html$1Y = "<h1 id=\"streaming-of-large-requestsresponses\">Streaming of Large Requests/Responses</h1>\n<p>In web application backend performance, the implementation of streaming large requests and responses is essential to maximize efficiency and speed. This is because streaming, unlike traditional methods, doesn’t require the entire file to load before it can be accessed. This means that large data pieces are broken down into more manageable, smaller chunks which are then processed separately. Streaming minimizes memory usage, prevents potential timeouts, and reduces the latency between the client and server. For instance, when streaming a video, the user doesn’t have to wait for the full video to buffer, hence enhancing user experience by delivering content faster and more seamlessly.</p>";

				const frontmatter$1Y = {};
				const file$1Y = "/workspaces/developer-roadmap/src/data/best-practices/backend-performance/content/streaming-large.md";
				const url$1Y = undefined;
				function rawContent$1Y() {
					return "# Streaming of Large Requests/Responses\n\nIn web application backend performance, the implementation of streaming large requests and responses is essential to maximize efficiency and speed. This is because streaming, unlike traditional methods, doesn't require the entire file to load before it can be accessed. This means that large data pieces are broken down into more manageable, smaller chunks which are then processed separately. Streaming minimizes memory usage, prevents potential timeouts, and reduces the latency between the client and server. For instance, when streaming a video, the user doesn't have to wait for the full video to buffer, hence enhancing user experience by delivering content faster and more seamlessly.";
				}
				function compiledContent$1Y() {
					return html$1Y;
				}
				function getHeadings$1Y() {
					return [{"depth":1,"slug":"streaming-of-large-requestsresponses","text":"Streaming of Large Requests/Responses"}];
				}

				const Content$1Y = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter$1Y;
					content.file = file$1Y;
					content.url = url$1Y;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html$1Y)}`;
				});

const __vite_glob_0_144 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	Content: Content$1Y,
	compiledContent: compiledContent$1Y,
	default: Content$1Y,
	file: file$1Y,
	frontmatter: frontmatter$1Y,
	getHeadings: getHeadings$1Y,
	rawContent: rawContent$1Y,
	url: url$1Y
}, Symbol.toStringTag, { value: 'Module' }));

const html$1X = "<h1 id=\"minimising-unnecessary-processing-or-expensive-computation-on-the-server\">Minimising Unnecessary Processing or Expensive Computation on the Server</h1>\n<p>Efficient backend performance in web applications is often determined by how well unnecessary processing or expensive computations are minimised on the server. When an application is free of excess processing or complex computations, it expends less energy, executes tasks swiftly, and reduces any potential downtime. This remarkably improves the application’s response time to user requests. For example, instead of calculating the same data repeatedly for different users, the application can calculate once, store the result, and then provide this stored result upon user request. This essentially minimises unnecessary processes, thereby enhancing the web application’s backend performance.</p>";

				const frontmatter$1X = {};
				const file$1X = "/workspaces/developer-roadmap/src/data/best-practices/backend-performance/content/unnecessary-computation.md";
				const url$1X = undefined;
				function rawContent$1X() {
					return "# Minimising Unnecessary Processing or Expensive Computation on the Server\n\nEfficient backend performance in web applications is often determined by how well unnecessary processing or expensive computations are minimised on the server. When an application is free of excess processing or complex computations, it expends less energy, executes tasks swiftly, and reduces any potential downtime. This remarkably improves the application's response time to user requests. For example, instead of calculating the same data repeatedly for different users, the application can calculate once, store the result, and then provide this stored result upon user request. This essentially minimises unnecessary processes, thereby enhancing the web application's backend performance.";
				}
				function compiledContent$1X() {
					return html$1X;
				}
				function getHeadings$1X() {
					return [{"depth":1,"slug":"minimising-unnecessary-processing-or-expensive-computation-on-the-server","text":"Minimising Unnecessary Processing or Expensive Computation on the Server"}];
				}

				const Content$1X = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter$1X;
					content.file = file$1X;
					content.url = url$1X;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html$1X)}`;
				});

const __vite_glob_0_145 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	Content: Content$1X,
	compiledContent: compiledContent$1X,
	default: Content$1X,
	file: file$1X,
	frontmatter: frontmatter$1X,
	getHeadings: getHeadings$1X,
	rawContent: rawContent$1X,
	url: url$1X
}, Symbol.toStringTag, { value: 'Module' }));

const html$1W = "<h1 id=\"maintaining-updated-dependencies\">Maintaining Updated Dependencies</h1>\n<p>Keeping your dependencies up to date is crucial for optimizing backend performance in web applications. Regular updates bring new features, improvements, and important patches for security vulnerabilities that could harm the performance and security of your application. An outdated package, for example, may run inefficiently or even prevent other components from functioning at peak performance. This creates a ripple effect that could slow down or disrupt entire processes. Therefore, staying current with all updates enhances the robustness and operational efficiency, contributing to faster load times, better stability, and ultimately, an improved user experience.</p>";

				const frontmatter$1W = {};
				const file$1W = "/workspaces/developer-roadmap/src/data/best-practices/backend-performance/content/up-to-date.md";
				const url$1W = undefined;
				function rawContent$1W() {
					return "# Maintaining Updated Dependencies\n\nKeeping your dependencies up to date is crucial for optimizing backend performance in web applications. Regular updates bring new features, improvements, and important patches for security vulnerabilities that could harm the performance and security of your application. An outdated package, for example, may run inefficiently or even prevent other components from functioning at peak performance. This creates a ripple effect that could slow down or disrupt entire processes. Therefore, staying current with all updates enhances the robustness and operational efficiency, contributing to faster load times, better stability, and ultimately, an improved user experience.";
				}
				function compiledContent$1W() {
					return html$1W;
				}
				function getHeadings$1W() {
					return [{"depth":1,"slug":"maintaining-updated-dependencies","text":"Maintaining Updated Dependencies"}];
				}

				const Content$1W = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter$1W;
					content.file = file$1W;
					content.url = url$1W;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html$1W)}`;
				});

const __vite_glob_0_146 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	Content: Content$1W,
	compiledContent: compiledContent$1W,
	default: Content$1W,
	file: file$1W,
	frontmatter: frontmatter$1W,
	getHeadings: getHeadings$1W,
	rawContent: rawContent$1W,
	url: url$1W
}, Symbol.toStringTag, { value: 'Module' }));

const html$1V = "<h1 id=\"database-sharding-for-data-distribution\">Database Sharding for Data Distribution</h1>\n<p>When it comes to backend performance, the effectiveness of data management is critical. Here lies the value of database sharding, a type of database partitioning that separates very large databases into smaller, faster, more easily managed parts called data shards. Sharding can enhance the speed of data retrieval by spreading the load across multiple servers, thereby reducing bottlenecks and improving overall application responsiveness. For instance, in an e-commerce application with a worldwide customer base, data can be sharded on a geographical basis to ensure faster loading times for consumers, no matter where they are located. This improves user experience and ensures smooth operation on the backend side.</p>";

				const frontmatter$1V = {};
				const file$1V = "/workspaces/developer-roadmap/src/data/best-practices/backend-performance/content/use-db-sharding.md";
				const url$1V = undefined;
				function rawContent$1V() {
					return "# Database Sharding for Data Distribution \n\nWhen it comes to backend performance, the effectiveness of data management is critical. Here lies the value of database sharding, a type of database partitioning that separates very large databases into smaller, faster, more easily managed parts called data shards. Sharding can enhance the speed of data retrieval by spreading the load across multiple servers, thereby reducing bottlenecks and improving overall application responsiveness. For instance, in an e-commerce application with a worldwide customer base, data can be sharded on a geographical basis to ensure faster loading times for consumers, no matter where they are located. This improves user experience and ensures smooth operation on the backend side.";
				}
				function compiledContent$1V() {
					return html$1V;
				}
				function getHeadings$1V() {
					return [{"depth":1,"slug":"database-sharding-for-data-distribution","text":"Database Sharding for Data Distribution"}];
				}

				const Content$1V = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter$1V;
					content.file = file$1V;
					content.url = url$1V;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html$1V)}`;
				});

const __vite_glob_0_147 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	Content: Content$1V,
	compiledContent: compiledContent$1V,
	default: Content$1V,
	file: file$1V,
	frontmatter: frontmatter$1V,
	getHeadings: getHeadings$1V,
	rawContent: rawContent$1V,
	url: url$1V
}, Symbol.toStringTag, { value: 'Module' }));

const html$1U = "<h1 id=\"utilizing-caching-mechanisms\">Utilizing Caching Mechanisms</h1>\n<p>Backend performance of web applications can see substantial improvements when effective caching mechanisms, like HTTP, server/client, and CDN are properly implemented. Caching can significantly decrease the load on the server, minimising the effort necessary to generate a response to a user’s request. For example, when a user revisits a previously accessed web page, caching mechanisms retrieve stored information more swiftly than the server could generate it. This process effectively cuts down on latency, bandwidth usage and processing power, speeding up the loading times and contributing to smoother user experience. CDN-based caches also help in serving static resources to users from the nearest possible location, reducing network latency.</p>";

				const frontmatter$1U = {};
				const file$1U = "/workspaces/developer-roadmap/src/data/best-practices/backend-performance/content/utilize-caching.md";
				const url$1U = undefined;
				function rawContent$1U() {
					return "# Utilizing Caching Mechanisms \n\nBackend performance of web applications can see substantial improvements when effective caching mechanisms, like HTTP, server/client, and CDN are properly implemented. Caching can significantly decrease the load on the server, minimising the effort necessary to generate a response to a user's request. For example, when a user revisits a previously accessed web page, caching mechanisms retrieve stored information more swiftly than the server could generate it. This process effectively cuts down on latency, bandwidth usage and processing power, speeding up the loading times and contributing to smoother user experience. CDN-based caches also help in serving static resources to users from the nearest possible location, reducing network latency.";
				}
				function compiledContent$1U() {
					return html$1U;
				}
				function getHeadings$1U() {
					return [{"depth":1,"slug":"utilizing-caching-mechanisms","text":"Utilizing Caching Mechanisms"}];
				}

				const Content$1U = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter$1U;
					content.file = file$1U;
					content.url = url$1U;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html$1U)}`;
				});

const __vite_glob_0_148 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	Content: Content$1U,
	compiledContent: compiledContent$1U,
	default: Content$1U,
	file: file$1U,
	frontmatter: frontmatter$1U,
	getHeadings: getHeadings$1U,
	rawContent: rawContent$1U,
	url: url$1U
}, Symbol.toStringTag, { value: 'Module' }));

const html$1T = "<h1 id=\"address-author-concerns\">Address Author Concerns</h1>\n<p>In the code review process, it is essential for the reviewers not only to provide constructive feedback but also to address any questions or concerns that the author of the code may have. This enables a collaborative learning environment and ensures that both the author and the reviewer have a shared understanding of the code changes, resulting in a better final product. To make sure any questions or concerns are addressed, consider the following tips:</p>\n<ul>\n<li>\n<p>Encourage open communication: Foster a culture where the author feels comfortable asking questions or seeking clarifications without fear of being judged. A positive, supportive atmosphere will lead to more productive discussions and better outcomes.</p>\n</li>\n<li>\n<p>Be accessible: Make sure you as a reviewer are available to answer questions and provide assistance when needed. This may involve setting aside specific times for code review discussions or being responsive on communication channels.</p>\n</li>\n<li>\n<p>Ask questions: During the code review, actively ask the author if they have any questions or concerns about the feedback provided. This can help identify potential areas of confusion and create opportunities for clarification and learning.</p>\n</li>\n<li>\n<p>Provide clear explanations: When giving feedback, ensure your comments are clear and concise, so the author can understand the reasoning behind your suggestions. This can help prevent misunderstandings and encourage meaningful discussions.</p>\n</li>\n<li>\n<p>Follow up: After the code review is completed, follow up with the author to ensure they’ve understood the feedback and have no lingering questions or concerns. This will help reinforce the learning process and ensure a positive code review experience for both parties.</p>\n</li>\n</ul>";

				const frontmatter$1T = {};
				const file$1T = "/workspaces/developer-roadmap/src/data/best-practices/code-review/content/address-author-concerns.md";
				const url$1T = undefined;
				function rawContent$1T() {
					return "# Address Author Concerns\n\nIn the code review process, it is essential for the reviewers not only to provide constructive feedback but also to address any questions or concerns that the author of the code may have. This enables a collaborative learning environment and ensures that both the author and the reviewer have a shared understanding of the code changes, resulting in a better final product. To make sure any questions or concerns are addressed, consider the following tips:\n\n- Encourage open communication: Foster a culture where the author feels comfortable asking questions or seeking clarifications without fear of being judged. A positive, supportive atmosphere will lead to more productive discussions and better outcomes.\n  \n- Be accessible: Make sure you as a reviewer are available to answer questions and provide assistance when needed. This may involve setting aside specific times for code review discussions or being responsive on communication channels.\n\n- Ask questions: During the code review, actively ask the author if they have any questions or concerns about the feedback provided. This can help identify potential areas of confusion and create opportunities for clarification and learning.\n\n- Provide clear explanations: When giving feedback, ensure your comments are clear and concise, so the author can understand the reasoning behind your suggestions. This can help prevent misunderstandings and encourage meaningful discussions.\n\n- Follow up: After the code review is completed, follow up with the author to ensure they've understood the feedback and have no lingering questions or concerns. This will help reinforce the learning process and ensure a positive code review experience for both parties.";
				}
				function compiledContent$1T() {
					return html$1T;
				}
				function getHeadings$1T() {
					return [{"depth":1,"slug":"address-author-concerns","text":"Address Author Concerns"}];
				}

				const Content$1T = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter$1T;
					content.file = file$1T;
					content.url = url$1T;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html$1T)}`;
				});

const __vite_glob_0_149 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	Content: Content$1T,
	compiledContent: compiledContent$1T,
	default: Content$1T,
	file: file$1T,
	frontmatter: frontmatter$1T,
	getHeadings: getHeadings$1T,
	rawContent: rawContent$1T,
	url: url$1T
}, Symbol.toStringTag, { value: 'Module' }));

const html$1S = "<h1 id=\"address-feedback-received\">Address Feedback Received</h1>\n<p>As you work through the code review process, it’s important to address all the feedback you’ve received from your team members, be it concerns, questions, or suggestions for improvements. Doing so not only ensures that your code meets the quality and performance standards, but also builds trust and credibility with your peers. In this section, we’ll discuss how to effectively address each piece of feedback, keep track of the review process, and create an open, collaborative environment for learning and growth.</p>\n<p>To make sure that you’ve addressed all the feedback, consider the following tips:</p>\n<ul>\n<li>Clearly acknowledge every comment or suggestion made by your reviewer, either by implementing the change or providing a convincing counter-argument.</li>\n<li>Keep a checklist of all the concerns raised and mark them off as you address them, ensuring that nothing is overlooked.</li>\n<li>If a reviewer’s comment or concern is unclear, ask for clarification instead of making assumptions, as this will prevent misunderstandings.</li>\n<li>Encourage open and transparent communication, inviting all relevant stakeholders to participate in the discussion and offer their insights.</li>\n<li>Once you’ve addressed all feedback, update your reviewer and kindly ask them to re-review your changes, making sure they’re satisfied with your responses.</li>\n<li>Continuously learn from the feedback you receive and apply it to future projects, improving your skills and expertise as a developer.</li>\n</ul>";

				const frontmatter$1S = {};
				const file$1S = "/workspaces/developer-roadmap/src/data/best-practices/code-review/content/address-feedback-received.md";
				const url$1S = undefined;
				function rawContent$1S() {
					return "# Address Feedback Received\n\nAs you work through the code review process, it's important to address all the feedback you've received from your team members, be it concerns, questions, or suggestions for improvements. Doing so not only ensures that your code meets the quality and performance standards, but also builds trust and credibility with your peers. In this section, we'll discuss how to effectively address each piece of feedback, keep track of the review process, and create an open, collaborative environment for learning and growth. \n\nTo make sure that you've addressed all the feedback, consider the following tips:\n- Clearly acknowledge every comment or suggestion made by your reviewer, either by implementing the change or providing a convincing counter-argument.\n- Keep a checklist of all the concerns raised and mark them off as you address them, ensuring that nothing is overlooked.\n- If a reviewer's comment or concern is unclear, ask for clarification instead of making assumptions, as this will prevent misunderstandings.\n- Encourage open and transparent communication, inviting all relevant stakeholders to participate in the discussion and offer their insights.\n- Once you've addressed all feedback, update your reviewer and kindly ask them to re-review your changes, making sure they're satisfied with your responses.\n- Continuously learn from the feedback you receive and apply it to future projects, improving your skills and expertise as a developer.";
				}
				function compiledContent$1S() {
					return html$1S;
				}
				function getHeadings$1S() {
					return [{"depth":1,"slug":"address-feedback-received","text":"Address Feedback Received"}];
				}

				const Content$1S = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter$1S;
					content.file = file$1S;
					content.url = url$1S;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html$1S)}`;
				});

const __vite_glob_0_150 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	Content: Content$1S,
	compiledContent: compiledContent$1S,
	default: Content$1S,
	file: file$1S,
	frontmatter: frontmatter$1S,
	getHeadings: getHeadings$1S,
	rawContent: rawContent$1S,
	url: url$1S
}, Symbol.toStringTag, { value: 'Module' }));

const html$1R = "<h1 id=\"make-reviews-a-priority\">Make Reviews a Priority</h1>\n<p>As the author of this guide on the best practices for code reviews, I would like to emphasize the importance of providing adequate time for code reviews and ensuring that it is a priority. Code reviews are essential to maintaining high-quality code, fostering collaboration, and sharing knowledge among team members. Therefore, it is crucial to allocate sufficient time and prioritize code reviews in your team’s workflow. Here are a few tips to make sure that you’re giving code reviews the attention they deserve:</p>\n<ul>\n<li>\n<p>Schedule regular time slots for code reviews, either daily or on specific days of the week. This will keep code reviews on top of everyone’s to-do list and encourage consistency.</p>\n</li>\n<li>\n<p>Break down large code reviews into smaller, more manageable tasks. This will help team members stay focused and motivated, resulting in more thorough reviews.</p>\n</li>\n<li>\n<p>Encourage team members to avoid multitasking while performing code reviews. This ensures that reviewers give their full attention to the code in question, reducing the likelihood of oversight.</p>\n</li>\n<li>\n<p>Set clear expectations about the timeframe for completing code reviews. Knowing that there is a deadline will motivate team members to prioritize code reviews.</p>\n</li>\n<li>\n<p>Finally, foster a culture that values code reviews, and highlight their importance at team meetings and discussions. This will ensure that everyone in the team is aligned with the priority given to code reviews.</p>\n</li>\n</ul>";

				const frontmatter$1R = {};
				const file$1R = "/workspaces/developer-roadmap/src/data/best-practices/code-review/content/adequate-review-time.md";
				const url$1R = undefined;
				function rawContent$1R() {
					return "# Make Reviews a Priority\n\nAs the author of this guide on the best practices for code reviews, I would like to emphasize the importance of providing adequate time for code reviews and ensuring that it is a priority. Code reviews are essential to maintaining high-quality code, fostering collaboration, and sharing knowledge among team members. Therefore, it is crucial to allocate sufficient time and prioritize code reviews in your team's workflow. Here are a few tips to make sure that you're giving code reviews the attention they deserve:\n\n- Schedule regular time slots for code reviews, either daily or on specific days of the week. This will keep code reviews on top of everyone's to-do list and encourage consistency.\n\n- Break down large code reviews into smaller, more manageable tasks. This will help team members stay focused and motivated, resulting in more thorough reviews.\n\n- Encourage team members to avoid multitasking while performing code reviews. This ensures that reviewers give their full attention to the code in question, reducing the likelihood of oversight.\n\n- Set clear expectations about the timeframe for completing code reviews. Knowing that there is a deadline will motivate team members to prioritize code reviews.\n\n- Finally, foster a culture that values code reviews, and highlight their importance at team meetings and discussions. This will ensure that everyone in the team is aligned with the priority given to code reviews.";
				}
				function compiledContent$1R() {
					return html$1R;
				}
				function getHeadings$1R() {
					return [{"depth":1,"slug":"make-reviews-a-priority","text":"Make Reviews a Priority"}];
				}

				const Content$1R = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter$1R;
					content.file = file$1R;
					content.url = url$1R;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html$1R)}`;
				});

const __vite_glob_0_151 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	Content: Content$1R,
	compiledContent: compiledContent$1R,
	default: Content$1R,
	file: file$1R,
	frontmatter: frontmatter$1R,
	getHeadings: getHeadings$1R,
	rawContent: rawContent$1R,
	url: url$1R
}, Symbol.toStringTag, { value: 'Module' }));

const html$1Q = "<h1 id=\"coding-standards-and-best-practices\">Coding Standards and Best Practices</h1>\n<p>Double-checking that the code adheres to the project’s coding standards and best practices is essential to maintain consistency, readability, and maintainability of the codebase. It ensures that individual developer preferences do not negatively impact the overall quality of the project. As you conduct a code review, it’s crucial to verify that the submitted code follows the agreed-upon guidelines in terms of style, architecture, and design patterns. Here are some tips to help you ensure adherence to coding standards and best practices during a code review:</p>\n<ul>\n<li>Familiarize yourself with the project’s coding guidelines and best practices before starting the review.</li>\n<li>Use a linter or code analysis tool that automatically checks the code for style, syntax, and other standards-related issues.</li>\n<li>Assess the code’s modularity, adherence to the Single Responsibility Principle, and the separation of concerns.</li>\n<li>Verify that the code follows the project’s naming conventions for variables, functions, classes, and other elements.</li>\n<li>Ensure that the code has appropriate and consistent comments and documentation, so it’s easy to understand and maintain.</li>\n<li>Look out for code redundancy and possible performance bottlenecks.</li>\n<li>Compare the code to similar implementations in the project to determine if it aligns with established conventions and patterns.</li>\n<li>Confirm that unit tests and integration tests are in place and cover the critical functionality of the code.</li>\n<li>In case of any doubts or uncertainties, consult with other team members or the project’s lead developer for clarification.</li>\n</ul>\n<p>Remember, adhering to coding standards and best practices promotes code quality and makes it easier for the entire team to collaborate effectively on the project.</p>";

				const frontmatter$1Q = {};
				const file$1Q = "/workspaces/developer-roadmap/src/data/best-practices/code-review/content/adhere-guidelines.md";
				const url$1Q = undefined;
				function rawContent$1Q() {
					return "# Coding Standards and Best Practices\n\nDouble-checking that the code adheres to the project's coding standards and best practices is essential to maintain consistency, readability, and maintainability of the codebase. It ensures that individual developer preferences do not negatively impact the overall quality of the project. As you conduct a code review, it's crucial to verify that the submitted code follows the agreed-upon guidelines in terms of style, architecture, and design patterns. Here are some tips to help you ensure adherence to coding standards and best practices during a code review:\n\n- Familiarize yourself with the project's coding guidelines and best practices before starting the review.\n- Use a linter or code analysis tool that automatically checks the code for style, syntax, and other standards-related issues.\n- Assess the code's modularity, adherence to the Single Responsibility Principle, and the separation of concerns.\n- Verify that the code follows the project's naming conventions for variables, functions, classes, and other elements.\n- Ensure that the code has appropriate and consistent comments and documentation, so it's easy to understand and maintain.\n- Look out for code redundancy and possible performance bottlenecks.\n- Compare the code to similar implementations in the project to determine if it aligns with established conventions and patterns.\n- Confirm that unit tests and integration tests are in place and cover the critical functionality of the code.\n- In case of any doubts or uncertainties, consult with other team members or the project's lead developer for clarification.\n\nRemember, adhering to coding standards and best practices promotes code quality and makes it easier for the entire team to collaborate effectively on the project.";
				}
				function compiledContent$1Q() {
					return html$1Q;
				}
				function getHeadings$1Q() {
					return [{"depth":1,"slug":"coding-standards-and-best-practices","text":"Coding Standards and Best Practices"}];
				}

				const Content$1Q = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter$1Q;
					content.file = file$1Q;
					content.url = url$1Q;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html$1Q)}`;
				});

const __vite_glob_0_152 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	Content: Content$1Q,
	compiledContent: compiledContent$1Q,
	default: Content$1Q,
	file: file$1Q,
	frontmatter: frontmatter$1Q,
	getHeadings: getHeadings$1Q,
	rawContent: rawContent$1Q,
	url: url$1Q
}, Symbol.toStringTag, { value: 'Module' }));

const html$1P = "<h1 id=\"understand-the-codebase-architecture\">Understand the Codebase Architecture</h1>\n<p>In the process of code review, it is crucial to have a solid understanding of the codebase and its architecture. Familiarizing yourself with the overall structure, design patterns, and key components ensures that you can identify potential issues and provide meaningful feedback to improve the quality of the code. To make sure you have a good grasp of the codebase and its architecture, consider the following tips:</p>\n<ul>\n<li>\n<p>Review project documentation: Start by going through any available documentation, including architectural diagrams, API documentation, and README files, to gain an understanding of the project’s purpose and design decisions.</p>\n</li>\n<li>\n<p>Speak with the author or team members: Engage in conversations with the code author and other team members who have experience working with the code to clarify any questions you may have or gain further insights.</p>\n</li>\n<li>\n<p>Trace code execution: Follow the flow of the code by tracing the execution path, starting from the entry point and going through the key components. This will help you comprehend how the different pieces of the codebase interact with each other.</p>\n</li>\n<li>\n<p>Verify adherence to coding standards: Ensure that the codebase follows established coding standards, such as naming conventions, commenting, and formatting. Consistent code standards make it easier to read and understand the code.</p>\n</li>\n<li>\n<p>Identify dependencies: Take note of external libraries, frameworks, and APIs used within the project, and familiarize yourself with any critical functionality they may provide.</p>\n</li>\n</ul>\n<p>By taking these steps, you can build a comprehensive understanding of the codebase and its architecture, allowing you to provide valuable feedback during the code review process.</p>";

				const frontmatter$1P = {};
				const file$1P = "/workspaces/developer-roadmap/src/data/best-practices/code-review/content/architecture-understanding.md";
				const url$1P = undefined;
				function rawContent$1P() {
					return "# Understand the Codebase Architecture\n\nIn the process of code review, it is crucial to have a solid understanding of the codebase and its architecture. Familiarizing yourself with the overall structure, design patterns, and key components ensures that you can identify potential issues and provide meaningful feedback to improve the quality of the code. To make sure you have a good grasp of the codebase and its architecture, consider the following tips:\n\n- Review project documentation: Start by going through any available documentation, including architectural diagrams, API documentation, and README files, to gain an understanding of the project's purpose and design decisions.\n\n- Speak with the author or team members: Engage in conversations with the code author and other team members who have experience working with the code to clarify any questions you may have or gain further insights.\n\n- Trace code execution: Follow the flow of the code by tracing the execution path, starting from the entry point and going through the key components. This will help you comprehend how the different pieces of the codebase interact with each other.\n\n- Verify adherence to coding standards: Ensure that the codebase follows established coding standards, such as naming conventions, commenting, and formatting. Consistent code standards make it easier to read and understand the code.\n\n- Identify dependencies: Take note of external libraries, frameworks, and APIs used within the project, and familiarize yourself with any critical functionality they may provide.\n\nBy taking these steps, you can build a comprehensive understanding of the codebase and its architecture, allowing you to provide valuable feedback during the code review process.";
				}
				function compiledContent$1P() {
					return html$1P;
				}
				function getHeadings$1P() {
					return [{"depth":1,"slug":"understand-the-codebase-architecture","text":"Understand the Codebase Architecture"}];
				}

				const Content$1P = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter$1P;
					content.file = file$1P;
					content.url = url$1P;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html$1P)}`;
				});

const __vite_glob_0_153 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	Content: Content$1P,
	compiledContent: compiledContent$1P,
	default: Content$1P,
	file: file$1P,
	frontmatter: frontmatter$1P,
	getHeadings: getHeadings$1P,
	rawContent: rawContent$1P,
	url: url$1P
}, Symbol.toStringTag, { value: 'Module' }));

const html$1O = "<h1 id=\"be-open-to-feedback\">Be Open to Feedback</h1>\n<p>Being open to feedback from the author and willing to make adjustments to your feedback if necessary, plays an important role in facilitating a productive and collaborative code review process. This approach enables constructive dialogue, improves understanding between team members, and contributes to the overall growth of both the reviewers and the author. Here are some tips to ensure you’re open to feedback and flexible in making adjustments:</p>\n<ul>\n<li>Encourage two-way communication: Make it clear to the author that you’re open to discussing your suggestions and hearing their thoughts on your feedback.</li>\n<li>Keep an open mind: Remember that there could be aspects of the code or the problem it addresses that you may have missed, or that the author might possess a unique insight into.</li>\n<li>Be humble: Recognize that you could be wrong in some of your observations and be ready to accept suggestions from the author for alternative solutions.</li>\n<li>Ask clarifying questions: If you don’t understand something in the code or your feedback is questioned, ask the author to explain their reasoning. This promotes open dialogue and better understanding between parties.</li>\n<li>Learn and grow together: View the process as a collective learning experience where both you, the reviewer, and the author, can gain new insights and improve different aspects of your work.</li>\n</ul>";

				const frontmatter$1O = {};
				const file$1O = "/workspaces/developer-roadmap/src/data/best-practices/code-review/content/author-feedback-welcomed.md";
				const url$1O = undefined;
				function rawContent$1O() {
					return "# Be Open to Feedback\n\nBeing open to feedback from the author and willing to make adjustments to your feedback if necessary, plays an important role in facilitating a productive and collaborative code review process. This approach enables constructive dialogue, improves understanding between team members, and contributes to the overall growth of both the reviewers and the author. Here are some tips to ensure you're open to feedback and flexible in making adjustments:\n\n- Encourage two-way communication: Make it clear to the author that you're open to discussing your suggestions and hearing their thoughts on your feedback.\n- Keep an open mind: Remember that there could be aspects of the code or the problem it addresses that you may have missed, or that the author might possess a unique insight into.\n- Be humble: Recognize that you could be wrong in some of your observations and be ready to accept suggestions from the author for alternative solutions.\n- Ask clarifying questions: If you don’t understand something in the code or your feedback is questioned, ask the author to explain their reasoning. This promotes open dialogue and better understanding between parties.\n- Learn and grow together: View the process as a collective learning experience where both you, the reviewer, and the author, can gain new insights and improve different aspects of your work.";
				}
				function compiledContent$1O() {
					return html$1O;
				}
				function getHeadings$1O() {
					return [{"depth":1,"slug":"be-open-to-feedback","text":"Be Open to Feedback"}];
				}

				const Content$1O = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter$1O;
					content.file = file$1O;
					content.url = url$1O;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html$1O)}`;
				});

const __vite_glob_0_154 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	Content: Content$1O,
	compiledContent: compiledContent$1O,
	default: Content$1O,
	file: file$1O,
	frontmatter: frontmatter$1O,
	getHeadings: getHeadings$1O,
	rawContent: rawContent$1O,
	url: url$1O
}, Symbol.toStringTag, { value: 'Module' }));

const html$1N = "<h1 id=\"celebrate-the-successful-completion-of-the-code-change\">Celebrate the Successful Completion of the Code Change</h1>\n<p>A crucial yet often overlooked aspect of code review is to acknowledge and celebrate a successful code change. Behind every code change lies the hard work and dedication of the developer, and recognizing their effort goes a long way in fostering a positive and collaborative environment within the team. Here are a few tips to ensure you don’t miss out on celebrating successful code changes:</p>\n<ul>\n<li>\n<p>Share the achievement: Acknowledge the developer’s work by sharing it with the team, either during a team meeting or by simply sending a message to the group chat. This boosts the team’s morale and encourages healthy competition.</p>\n</li>\n<li>\n<p>Provide constructive feedback: Take time to appreciate the strengths of the code and point out areas where it stands out.</p>\n</li>\n<li>\n<p>Showcase the impact: Demonstrate the benefits of the code change for the project, the client, or the team. This helps the developer understand the significance of their contribution.</p>\n</li>\n<li>\n<p>Encourage continuous improvement: A successful code change is an opportunity to learn and grow. Encourage developers to continue refining their skills and seeking new challenges.</p>\n</li>\n</ul>\n<p>Remember, a little praise can go a long way to motivate your team and ensure a thriving and healthy work environment. So, celebrate those successful code changes, and watch your team excel!</p>";

				const frontmatter$1N = {};
				const file$1N = "/workspaces/developer-roadmap/src/data/best-practices/code-review/content/celebrate-success.md";
				const url$1N = undefined;
				function rawContent$1N() {
					return "# Celebrate the Successful Completion of the Code Change\n\nA crucial yet often overlooked aspect of code review is to acknowledge and celebrate a successful code change. Behind every code change lies the hard work and dedication of the developer, and recognizing their effort goes a long way in fostering a positive and collaborative environment within the team. Here are a few tips to ensure you don't miss out on celebrating successful code changes:\n\n- Share the achievement: Acknowledge the developer's work by sharing it with the team, either during a team meeting or by simply sending a message to the group chat. This boosts the team's morale and encourages healthy competition.\n\n- Provide constructive feedback: Take time to appreciate the strengths of the code and point out areas where it stands out.\n\n- Showcase the impact: Demonstrate the benefits of the code change for the project, the client, or the team. This helps the developer understand the significance of their contribution.\n\n- Encourage continuous improvement: A successful code change is an opportunity to learn and grow. Encourage developers to continue refining their skills and seeking new challenges.\n\nRemember, a little praise can go a long way to motivate your team and ensure a thriving and healthy work environment. So, celebrate those successful code changes, and watch your team excel!";
				}
				function compiledContent$1N() {
					return html$1N;
				}
				function getHeadings$1N() {
					return [{"depth":1,"slug":"celebrate-the-successful-completion-of-the-code-change","text":"Celebrate the Successful Completion of the Code Change"}];
				}

				const Content$1N = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter$1N;
					content.file = file$1N;
					content.url = url$1N;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html$1N)}`;
				});

const __vite_glob_0_155 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	Content: Content$1N,
	compiledContent: compiledContent$1N,
	default: Content$1N,
	file: file$1N,
	frontmatter: frontmatter$1N,
	getHeadings: getHeadings$1N,
	rawContent: rawContent$1N,
	url: url$1N
}, Symbol.toStringTag, { value: 'Module' }));

const html$1M = "<h1 id=\"verify-the-change-in-production\">Verify the Change in Production.</h1>\n<p>Veryfing the change is a crucial step in the code review process that ensures the recently merged changes work correctly and do not cause any unexpected disruptions when deployed to the live production environment. Rigorous testing before deployment helps minimize the risks, but having an additional layer of validation post-deployment provides you with the confidence that your code changes are working as intended while interacting with real users and production data. To make sure of this, consider the following tips:</p>\n<ul>\n<li>\n<p>Implement automated monitoring and alerting systems to keep track of your application’s key performance indicators (KPIs) and notify you in case of a significant change in the metrics.</p>\n</li>\n<li>\n<p>Incorporate feature flags or toggles, allowing you to easily enable or disable specific changes in your code, making the process of identifying and resolving issues in production faster.</p>\n</li>\n<li>\n<p>Perform smoke tests, which are quick and basic functional checks that help confirm the operational stability of your application after deploying new changes.</p>\n</li>\n<li>\n<p>Observe user interaction through user analytics, bug reports, or direct feedback to assess whether the code change has had the intended impact and is positively affecting the user experience.</p>\n</li>\n<li>\n<p>Establish strategies for gradual deployment, such as canary or blue-green deployments, to minimize the potential impact of a problematic change on your entire user base and ensure smoother rollback if needed.</p>\n</li>\n</ul>";

				const frontmatter$1M = {};
				const file$1M = "/workspaces/developer-roadmap/src/data/best-practices/code-review/content/change-functioning.md";
				const url$1M = undefined;
				function rawContent$1M() {
					return "# Verify the Change in Production.\n\nVeryfing the change is a crucial step in the code review process that ensures the recently merged changes work correctly and do not cause any unexpected disruptions when deployed to the live production environment. Rigorous testing before deployment helps minimize the risks, but having an additional layer of validation post-deployment provides you with the confidence that your code changes are working as intended while interacting with real users and production data. To make sure of this, consider the following tips:\n\n- Implement automated monitoring and alerting systems to keep track of your application's key performance indicators (KPIs) and notify you in case of a significant change in the metrics.\n\n- Incorporate feature flags or toggles, allowing you to easily enable or disable specific changes in your code, making the process of identifying and resolving issues in production faster.\n\n- Perform smoke tests, which are quick and basic functional checks that help confirm the operational stability of your application after deploying new changes.\n\n- Observe user interaction through user analytics, bug reports, or direct feedback to assess whether the code change has had the intended impact and is positively affecting the user experience.\n\n- Establish strategies for gradual deployment, such as canary or blue-green deployments, to minimize the potential impact of a problematic change on your entire user base and ensure smoother rollback if needed.";
				}
				function compiledContent$1M() {
					return html$1M;
				}
				function getHeadings$1M() {
					return [{"depth":1,"slug":"verify-the-change-in-production","text":"Verify the Change in Production."}];
				}

				const Content$1M = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter$1M;
					content.file = file$1M;
					content.url = url$1M;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html$1M)}`;
				});

const __vite_glob_0_156 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	Content: Content$1M,
	compiledContent: compiledContent$1M,
	default: Content$1M,
	file: file$1M,
	frontmatter: frontmatter$1M,
	getHeadings: getHeadings$1M,
	rawContent: rawContent$1M,
	url: url$1M
}, Symbol.toStringTag, { value: 'Module' }));

const html$1L = "<h1 id=\"ensuring-completeness-of-change\">Ensuring Completeness of Change</h1>\n<p>I cannot emphasize enough the significance of submitting a well-prepared code change for review. This not only saves time for the reviewer and the author but also helps maintain high-quality code in the repository. Here are some essential tips to make sure that your code changes are complete and review-ready:</p>\n<ul>\n<li>\n<p>Verify that you have thoroughly tested your changes in different scenarios to confirm that they work as expected and do not introduce any new issues.</p>\n</li>\n<li>\n<p>Ensure that you have written appropriate unit tests for your changes. These tests should be concise, well-structured, and cover all the possible scenarios.</p>\n</li>\n<li>\n<p>Make sure your code follows the project’s coding standards and style guides. Consistency in style makes the code easier to read and maintain.</p>\n</li>\n<li>\n<p>Include clear and concise commit messages that provide context and background information about the changes made. This will help the reviewer understand the purpose and reasoning behind the changes.</p>\n</li>\n<li>\n<p>Update or add documentation related to your changes, if necessary. This can include in-code comments, user-facing documentation, or developer-focused guides.</p>\n</li>\n<li>\n<p>Before submitting your changes, perform a self-review. Reexamine your code closely to catch any potential issues or suggest improvements yourself.</p>\n</li>\n</ul>\n<p>By following these tips, you will increase the likelihood of your code changes being accepted promptly and contribute to a smoother, more efficient code review process.</p>";

				const frontmatter$1L = {};
				const file$1L = "/workspaces/developer-roadmap/src/data/best-practices/code-review/content/changes-ready.md";
				const url$1L = undefined;
				function rawContent$1L() {
					return "# Ensuring Completeness of Change\n\nI cannot emphasize enough the significance of submitting a well-prepared code change for review. This not only saves time for the reviewer and the author but also helps maintain high-quality code in the repository. Here are some essential tips to make sure that your code changes are complete and review-ready:\n\n- Verify that you have thoroughly tested your changes in different scenarios to confirm that they work as expected and do not introduce any new issues.\n\n- Ensure that you have written appropriate unit tests for your changes. These tests should be concise, well-structured, and cover all the possible scenarios.\n\n- Make sure your code follows the project's coding standards and style guides. Consistency in style makes the code easier to read and maintain.\n\n- Include clear and concise commit messages that provide context and background information about the changes made. This will help the reviewer understand the purpose and reasoning behind the changes.\n\n- Update or add documentation related to your changes, if necessary. This can include in-code comments, user-facing documentation, or developer-focused guides.\n\n- Before submitting your changes, perform a self-review. Reexamine your code closely to catch any potential issues or suggest improvements yourself.\n\nBy following these tips, you will increase the likelihood of your code changes being accepted promptly and contribute to a smoother, more efficient code review process.";
				}
				function compiledContent$1L() {
					return html$1L;
				}
				function getHeadings$1L() {
					return [{"depth":1,"slug":"ensuring-completeness-of-change","text":"Ensuring Completeness of Change"}];
				}

				const Content$1L = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter$1L;
					content.file = file$1L;
					content.url = url$1L;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html$1L)}`;
				});

const __vite_glob_0_157 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	Content: Content$1L,
	compiledContent: compiledContent$1L,
	default: Content$1L,
	file: file$1L,
	frontmatter: frontmatter$1L,
	getHeadings: getHeadings$1L,
	rawContent: rawContent$1L,
	url: url$1L
}, Symbol.toStringTag, { value: 'Module' }));

const html$1K = "<h1 id=\"provide-clear-feedback\">Provide Clear Feedback</h1>\n<p>In a code review, providing clear and actionable feedback is essential to ensure that the developer can easily understand the suggestions and make improvements accordingly. This involves offering specific recommendations for enhancement, addressing potential issues, and articulating the reasoning behind your concerns. By doing so, you not only help the developer to learn and grow, but you also contribute to the overall quality of the codebase. In this section, we will delve into some practical tips on how to make sure you provide clear and actionable feedback during the code review process.</p>\n<ul>\n<li>\n<p>Be Specific: When pointing out a concern or suggesting an improvement, be precise about the code change you are referring to. Include line numbers or code statements to make it easier for the developer to locate and address the issue.</p>\n</li>\n<li>\n<p>Offer Concrete Solutions: Instead of just pointing out what’s wrong, propose a solution or an alternative approach for the developer to consider. This not only showcases your understanding of the code but also makes the feedback more constructive.</p>\n</li>\n<li>\n<p>Explain Your Concerns: If you have a concern, do not just state what is wrong; explain why it is a problem and how it can impact the codebase. This will help the developer grasp the rationale behind your feedback, making it easier for them to accept and implement your suggestions.</p>\n</li>\n<li>\n<p>Use Clear Language: Avoid jargon or shorthand that the developer may not understand. Use plain language and be concise in your explanations.</p>\n</li>\n<li>\n<p>Stay Positive: While critiquing the code, maintain a supportive and positive tone. Start with acknowledging the good aspects of the code and appreciate the developer’s efforts before diving into areas of improvement.</p>\n</li>\n</ul>\n<p>By following these tips, you will be well-equipped to provide clear and actionable feedback in your code reviews, fostering a collaborative and productive environment for all team members involved.</p>";

				const frontmatter$1K = {};
				const file$1K = "/workspaces/developer-roadmap/src/data/best-practices/code-review/content/clear-feedback.md";
				const url$1K = undefined;
				function rawContent$1K() {
					return "# Provide Clear Feedback\n\nIn a code review, providing clear and actionable feedback is essential to ensure that the developer can easily understand the suggestions and make improvements accordingly. This involves offering specific recommendations for enhancement, addressing potential issues, and articulating the reasoning behind your concerns. By doing so, you not only help the developer to learn and grow, but you also contribute to the overall quality of the codebase. In this section, we will delve into some practical tips on how to make sure you provide clear and actionable feedback during the code review process.\n\n- Be Specific: When pointing out a concern or suggesting an improvement, be precise about the code change you are referring to. Include line numbers or code statements to make it easier for the developer to locate and address the issue.\n\n- Offer Concrete Solutions: Instead of just pointing out what's wrong, propose a solution or an alternative approach for the developer to consider. This not only showcases your understanding of the code but also makes the feedback more constructive.\n\n- Explain Your Concerns: If you have a concern, do not just state what is wrong; explain why it is a problem and how it can impact the codebase. This will help the developer grasp the rationale behind your feedback, making it easier for them to accept and implement your suggestions.\n\n- Use Clear Language: Avoid jargon or shorthand that the developer may not understand. Use plain language and be concise in your explanations.\n\n- Stay Positive: While critiquing the code, maintain a supportive and positive tone. Start with acknowledging the good aspects of the code and appreciate the developer's efforts before diving into areas of improvement.\n\nBy following these tips, you will be well-equipped to provide clear and actionable feedback in your code reviews, fostering a collaborative and productive environment for all team members involved.";
				}
				function compiledContent$1K() {
					return html$1K;
				}
				function getHeadings$1K() {
					return [{"depth":1,"slug":"provide-clear-feedback","text":"Provide Clear Feedback"}];
				}

				const Content$1K = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter$1K;
					content.file = file$1K;
					content.url = url$1K;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html$1K)}`;
				});

const __vite_glob_0_158 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	Content: Content$1K,
	compiledContent: compiledContent$1K,
	default: Content$1K,
	file: file$1K,
	frontmatter: frontmatter$1K,
	getHeadings: getHeadings$1K,
	rawContent: rawContent$1K,
	url: url$1K
}, Symbol.toStringTag, { value: 'Module' }));

const html$1J = "<h1 id=\"project-guidelines-and-best-practices\">Project Guidelines and Best Practices</h1>\n<p>Ensuring that code changes adhere to the project’s coding standards and best practices is a critical aspect of a successful code review. This involves evaluating the quality and consistency of the code, as well as making sure that the changes are efficient, secure, and maintainable. In this section, we will provide you with some tips on how to assess adherence to coding standards and best practices during the code review process.</p>\n<ul>\n<li>\n<p>Familiarize yourself with the project’s coding guidelines and best practices: Before diving into the review, read and understand the project’s established coding standards, such as naming conventions, indentation, and commenting styles.</p>\n</li>\n<li>\n<p>Utilize linters and code analyzers: These tools can automatically identify inconsistencies in the code and detect potential issues related to best practices, thereby reducing manual effort to detect such issues.</p>\n</li>\n<li>\n<p>Look for code smells: Code smells are indicators of potential issues in the code’s maintainability or performance. Keep an eye out for code duplication, large functions or classes, and unclear variable or function names.</p>\n</li>\n<li>\n<p>Evaluate design patterns and principles: Ensure that the implementation follows established design patterns and principles like SOLID, DRY, and KISS.</p>\n</li>\n<li>\n<p>Consider security: Evaluate the code for possible security risks, such as input validation, proper error handling, and unsafe API usage.</p>\n</li>\n<li>\n<p>Assess test coverage: Ensure that the submitted code includes adequate test coverage to validate the correctness of the changes and avoid regressions.</p>\n</li>\n<li>\n<p>Provide constructive feedback: When pointing out adherence issues or suggesting improvements, make sure to provide specific examples and clear explanations. Encourage the contributor to discuss and clarify any concerns.</p>\n</li>\n</ul>";

				const frontmatter$1J = {};
				const file$1J = "/workspaces/developer-roadmap/src/data/best-practices/code-review/content/code-guide-best-practices-adherence.md";
				const url$1J = undefined;
				function rawContent$1J() {
					return "# Project Guidelines and Best Practices\n\nEnsuring that code changes adhere to the project's coding standards and best practices is a critical aspect of a successful code review. This involves evaluating the quality and consistency of the code, as well as making sure that the changes are efficient, secure, and maintainable. In this section, we will provide you with some tips on how to assess adherence to coding standards and best practices during the code review process.\n\n- Familiarize yourself with the project's coding guidelines and best practices: Before diving into the review, read and understand the project's established coding standards, such as naming conventions, indentation, and commenting styles.\n\n- Utilize linters and code analyzers: These tools can automatically identify inconsistencies in the code and detect potential issues related to best practices, thereby reducing manual effort to detect such issues.\n\n- Look for code smells: Code smells are indicators of potential issues in the code's maintainability or performance. Keep an eye out for code duplication, large functions or classes, and unclear variable or function names.\n\n- Evaluate design patterns and principles: Ensure that the implementation follows established design patterns and principles like SOLID, DRY, and KISS.\n\n- Consider security: Evaluate the code for possible security risks, such as input validation, proper error handling, and unsafe API usage.\n\n- Assess test coverage: Ensure that the submitted code includes adequate test coverage to validate the correctness of the changes and avoid regressions.\n\n- Provide constructive feedback: When pointing out adherence issues or suggesting improvements, make sure to provide specific examples and clear explanations. Encourage the contributor to discuss and clarify any concerns.";
				}
				function compiledContent$1J() {
					return html$1J;
				}
				function getHeadings$1J() {
					return [{"depth":1,"slug":"project-guidelines-and-best-practices","text":"Project Guidelines and Best Practices"}];
				}

				const Content$1J = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter$1J;
					content.file = file$1J;
					content.url = url$1J;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html$1J)}`;
				});

const __vite_glob_0_159 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	Content: Content$1J,
	compiledContent: compiledContent$1J,
	default: Content$1J,
	file: file$1J,
	frontmatter: frontmatter$1J,
	getHeadings: getHeadings$1J,
	rawContent: rawContent$1J,
	url: url$1J
}, Symbol.toStringTag, { value: 'Module' }));

const html$1I = "<h1 id=\"common-understanding\">Common Understanding</h1>\n<p>Code review is not merely a task to meet deadlines, but a crucial practice for maintaining code quality, sharing knowledge, and preventing errors. Ensuring that all team members understand the goals and benefits of code reviews is vital to fostering a collaborative and supportive environment. To achieve this, consider the following tips:</p>\n<ul>\n<li>Communicate the objectives: Clearly outline the primary objectives of code reviews during team meetings, emphasizing the focus on quality, knowledge sharing, and continuous improvement.</li>\n<li>Establish a code review policy: Create a well-documented policy outlining the code review process, desired outcomes, and expectations. Make sure that everyone on the team has access to and understands it.</li>\n<li>Set a positive tone: Build a culture of constructive feedback and learning, where team members feel comfortable discussing and offering suggestions for code improvements. Encourage open dialogue and active participation.</li>\n<li>Encourage questions: Offer support for team members who may be new to the code review process or need clarifications. Encourage them to ask questions, no matter how simple or complex, and involve senior developers who can provide guidance and context.</li>\n<li>Reinforce the value: Regularly share the successes and benefits derived from the code review process, highlighting improved code quality, quicker error detection, and team collaboration. This helps everyone understand the value and purpose of code reviews, which leads to a more engaged and productive team.</li>\n</ul>";

				const frontmatter$1I = {};
				const file$1I = "/workspaces/developer-roadmap/src/data/best-practices/code-review/content/code-review-purpose.md";
				const url$1I = undefined;
				function rawContent$1I() {
					return "# Common Understanding\n\nCode review is not merely a task to meet deadlines, but a crucial practice for maintaining code quality, sharing knowledge, and preventing errors. Ensuring that all team members understand the goals and benefits of code reviews is vital to fostering a collaborative and supportive environment. To achieve this, consider the following tips:\n\n- Communicate the objectives: Clearly outline the primary objectives of code reviews during team meetings, emphasizing the focus on quality, knowledge sharing, and continuous improvement.\n- Establish a code review policy: Create a well-documented policy outlining the code review process, desired outcomes, and expectations. Make sure that everyone on the team has access to and understands it.\n- Set a positive tone: Build a culture of constructive feedback and learning, where team members feel comfortable discussing and offering suggestions for code improvements. Encourage open dialogue and active participation.\n- Encourage questions: Offer support for team members who may be new to the code review process or need clarifications. Encourage them to ask questions, no matter how simple or complex, and involve senior developers who can provide guidance and context.\n- Reinforce the value: Regularly share the successes and benefits derived from the code review process, highlighting improved code quality, quicker error detection, and team collaboration. This helps everyone understand the value and purpose of code reviews, which leads to a more engaged and productive team.";
				}
				function compiledContent$1I() {
					return html$1I;
				}
				function getHeadings$1I() {
					return [{"depth":1,"slug":"common-understanding","text":"Common Understanding"}];
				}

				const Content$1I = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter$1I;
					content.file = file$1I;
					content.url = url$1I;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html$1I)}`;
				});

const __vite_glob_0_160 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	Content: Content$1I,
	compiledContent: compiledContent$1I,
	default: Content$1I,
	file: file$1I,
	frontmatter: frontmatter$1I,
	getHeadings: getHeadings$1I,
	rawContent: rawContent$1I,
	url: url$1I
}, Symbol.toStringTag, { value: 'Module' }));

const html$1H = "<h1 id=\"collaborate-with-author\">Collaborate with Author</h1>\n<p>In the code review process, it is essential to foster a collaborative environment where both the reviewer and the author work together to resolve any issues or concerns that arise. A successful review is not about pointing out mistakes or asserting authority, but rather about working together towards the common goal of improving the quality of the code. To ensure a smooth and effective collaboration, consider the following tips:</p>\n<ul>\n<li>\n<p>Maintain open communication: Keep the lines of communication open and encourage a healthy discussion. Be open to receiving feedback and clarifications from the author.</p>\n</li>\n<li>\n<p>Show empathy and respect: Be considerate and respectful when providing feedback. Avoid making personal comments or using harsh language that may discourage or demotivate the author.</p>\n</li>\n<li>\n<p>Be objective and specific: When suggesting improvements, be specific and provide clear details that explain the reason for your suggestion. This will help the author understand the issue and make appropriate corrections.</p>\n</li>\n<li>\n<p>Offer possible solutions: Where possible, provide alternative solutions or recommendations that the author can consider, making it easier for them to address the issue.</p>\n</li>\n<li>\n<p>Be patient and persistent: Complex issues may require multiple iterations and extensive discussion to resolve. Stay patient and persistent, and continue to collaborate with the author until a satisfactory solution is reached.</p>\n</li>\n</ul>";

				const frontmatter$1H = {};
				const file$1H = "/workspaces/developer-roadmap/src/data/best-practices/code-review/content/collaborate-reviewer-author.md";
				const url$1H = undefined;
				function rawContent$1H() {
					return "# Collaborate with Author\n\nIn the code review process, it is essential to foster a collaborative environment where both the reviewer and the author work together to resolve any issues or concerns that arise. A successful review is not about pointing out mistakes or asserting authority, but rather about working together towards the common goal of improving the quality of the code. To ensure a smooth and effective collaboration, consider the following tips:\n\n- Maintain open communication: Keep the lines of communication open and encourage a healthy discussion. Be open to receiving feedback and clarifications from the author.\n\n- Show empathy and respect: Be considerate and respectful when providing feedback. Avoid making personal comments or using harsh language that may discourage or demotivate the author.\n\n- Be objective and specific: When suggesting improvements, be specific and provide clear details that explain the reason for your suggestion. This will help the author understand the issue and make appropriate corrections.\n\n- Offer possible solutions: Where possible, provide alternative solutions or recommendations that the author can consider, making it easier for them to address the issue.\n\n- Be patient and persistent: Complex issues may require multiple iterations and extensive discussion to resolve. Stay patient and persistent, and continue to collaborate with the author until a satisfactory solution is reached.";
				}
				function compiledContent$1H() {
					return html$1H;
				}
				function getHeadings$1H() {
					return [{"depth":1,"slug":"collaborate-with-author","text":"Collaborate with Author"}];
				}

				const Content$1H = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter$1H;
					content.file = file$1H;
					content.url = url$1H;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html$1H)}`;
				});

const __vite_glob_0_161 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	Content: Content$1H,
	compiledContent: compiledContent$1H,
	default: Content$1H,
	file: file$1H,
	frontmatter: frontmatter$1H,
	getHeadings: getHeadings$1H,
	rawContent: rawContent$1H,
	url: url$1H
}, Symbol.toStringTag, { value: 'Module' }));

const html$1G = "<h1 id=\"break-it-down\">Break it Down</h1>\n<p>Tackling large and complex tasks in software development can be overwhelming and time-consuming, not to mention the challenges it brings during the code review process. By breaking down these tasks into smaller, more manageable PRs (Pull Requests), we can ensure a smoother, faster, and more accurate code review. Smaller PRs are easier to understand, test, and merge which speeds up the development cycle and results in better code quality. Here are some tips to making sure your tasks are broken down into smaller PRs:</p>\n<ul>\n<li>\n<p>Modularize your code - Make sure your code is divided into logical modules and functions, with each module serving a single responsibility.</p>\n</li>\n<li>\n<p>Focus on one feature or bug fix per PR - Resist the temptation to fix multiple issues or implement several features within the same PR. This keeps the scope of the PR narrow and easier to review.</p>\n</li>\n<li>\n<p>Keep the changes incremental - If a task requires a significant amount of code changes, break it down into multiple PRs that can be built and tested independently.</p>\n</li>\n<li>\n<p>Communicate with your team - Make sure your team members know which tasks have been broken down and the order in which they should be reviewed and merged.</p>\n</li>\n<li>\n<p>Draft clear and concise PR descriptions - Outline the scope, purpose, and technical details of the PR, making it easier for reviewers to understand the changes and provide relevant feedback.</p>\n</li>\n</ul>";

				const frontmatter$1G = {};
				const file$1G = "/workspaces/developer-roadmap/src/data/best-practices/code-review/content/complex-tasks-breakage.md";
				const url$1G = undefined;
				function rawContent$1G() {
					return "# Break it Down\n\nTackling large and complex tasks in software development can be overwhelming and time-consuming, not to mention the challenges it brings during the code review process. By breaking down these tasks into smaller, more manageable PRs (Pull Requests), we can ensure a smoother, faster, and more accurate code review. Smaller PRs are easier to understand, test, and merge which speeds up the development cycle and results in better code quality. Here are some tips to making sure your tasks are broken down into smaller PRs:\n\n- Modularize your code - Make sure your code is divided into logical modules and functions, with each module serving a single responsibility.\n\n- Focus on one feature or bug fix per PR - Resist the temptation to fix multiple issues or implement several features within the same PR. This keeps the scope of the PR narrow and easier to review.\n\n- Keep the changes incremental - If a task requires a significant amount of code changes, break it down into multiple PRs that can be built and tested independently.\n\n- Communicate with your team - Make sure your team members know which tasks have been broken down and the order in which they should be reviewed and merged.\n\n- Draft clear and concise PR descriptions - Outline the scope, purpose, and technical details of the PR, making it easier for reviewers to understand the changes and provide relevant feedback.";
				}
				function compiledContent$1G() {
					return html$1G;
				}
				function getHeadings$1G() {
					return [{"depth":1,"slug":"break-it-down","text":"Break it Down"}];
				}

				const Content$1G = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter$1G;
					content.file = file$1G;
					content.url = url$1G;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html$1G)}`;
				});

const __vite_glob_0_162 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	Content: Content$1G,
	compiledContent: compiledContent$1G,
	default: Content$1G,
	file: file$1G,
	frontmatter: frontmatter$1G,
	getHeadings: getHeadings$1G,
	rawContent: rawContent$1G,
	url: url$1G
}, Symbol.toStringTag, { value: 'Module' }));

const html$1F = "<h1 id=\"conflict-resolution\">Conflict Resolution</h1>\n<p>In the world of software development, code reviews are crucial for maintaining code quality and ensuring that everyone on the team is on the same page. However, it is natural for developers to have different opinions and perspectives on the best way to solve a particular problem. To maintain a healthy collaborative environment, it is essential to have a well-defined process for conflict resolution during code reviews. With a predefined process in place, the entire team is well-equipped to navigate through any disagreements amicably and prevent them from stalling the project’s progress. Below, we have outlined several tips to consider as you establish a conflict resolution process in your code review practice:</p>\n<ul>\n<li>\n<p>Establish clear coding conventions and guidelines for your team to follow, as this can help prevent conflicts arising from differing personal preferences.</p>\n</li>\n<li>\n<p>Encourage open communication and transparent feedback. It is essential for reviewers to express their concerns and opinions, while the code author should listen and respond with an open mind.</p>\n</li>\n<li>\n<p>Disagreements should be evidence-based, and discussions should focus on the code, not personal differences. Encourage team members to provide supportive data and references, such as documentation or relevant articles, to back up their arguments.</p>\n</li>\n<li>\n<p>Assign a neutral third party or mediator when conflicts cannot be resolved between the original participants. This person should consider the arguments presented by both parties and make a final decision based on the best interests of the project.</p>\n</li>\n<li>\n<p>Promote a culture of continuous learning, where team members are encouraged to stay updated on the latest coding techniques and best practices. This can help foster a growth mindset and reduce conflicts over outdated or suboptimal approaches.</p>\n</li>\n</ul>\n<p>By implementing these strategies, your team will be better equipped to resolve conflicts during the code review process, ultimately leading to smoother teamwork, higher code quality, and more successful project outcomes.</p>";

				const frontmatter$1F = {};
				const file$1F = "/workspaces/developer-roadmap/src/data/best-practices/code-review/content/conflict-resolution.md";
				const url$1F = undefined;
				function rawContent$1F() {
					return "# Conflict Resolution\n\nIn the world of software development, code reviews are crucial for maintaining code quality and ensuring that everyone on the team is on the same page. However, it is natural for developers to have different opinions and perspectives on the best way to solve a particular problem. To maintain a healthy collaborative environment, it is essential to have a well-defined process for conflict resolution during code reviews. With a predefined process in place, the entire team is well-equipped to navigate through any disagreements amicably and prevent them from stalling the project's progress. Below, we have outlined several tips to consider as you establish a conflict resolution process in your code review practice:\n\n- Establish clear coding conventions and guidelines for your team to follow, as this can help prevent conflicts arising from differing personal preferences.\n\n- Encourage open communication and transparent feedback. It is essential for reviewers to express their concerns and opinions, while the code author should listen and respond with an open mind.\n\n- Disagreements should be evidence-based, and discussions should focus on the code, not personal differences. Encourage team members to provide supportive data and references, such as documentation or relevant articles, to back up their arguments.\n\n- Assign a neutral third party or mediator when conflicts cannot be resolved between the original participants. This person should consider the arguments presented by both parties and make a final decision based on the best interests of the project.\n\n- Promote a culture of continuous learning, where team members are encouraged to stay updated on the latest coding techniques and best practices. This can help foster a growth mindset and reduce conflicts over outdated or suboptimal approaches.\n\nBy implementing these strategies, your team will be better equipped to resolve conflicts during the code review process, ultimately leading to smoother teamwork, higher code quality, and more successful project outcomes.";
				}
				function compiledContent$1F() {
					return html$1F;
				}
				function getHeadings$1F() {
					return [{"depth":1,"slug":"conflict-resolution","text":"Conflict Resolution"}];
				}

				const Content$1F = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter$1F;
					content.file = file$1F;
					content.url = url$1F;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html$1F)}`;
				});

const __vite_glob_0_163 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	Content: Content$1F,
	compiledContent: compiledContent$1F,
	default: Content$1F,
	file: file$1F,
	frontmatter: frontmatter$1F,
	getHeadings: getHeadings$1F,
	rawContent: rawContent$1F,
	url: url$1F
}, Symbol.toStringTag, { value: 'Module' }));

const html$1E = "<h1 id=\"stay-consistent\">Stay Consistent</h1>\n<p>Consistency is vital because it ensures that your code integrates seamlessly with the rest of the project and maintains a coherent structure that is easy to understand and maintain. It also ensures that the system remains stable and reliable over time as it evolves. To achieve consistency, we recommend the following tips: familiarize yourself with the project’s design patterns and conventions, consider the impact of changes on the entire system, work closely with other team members to ensure alignment, and always prioritize consistency and maintainability over temporary optimizations or shortcuts. Now, let’s delve deeper into these tips to help you become a better code reviewer.</p>";

				const frontmatter$1E = {};
				const file$1E = "/workspaces/developer-roadmap/src/data/best-practices/code-review/content/consistency-everywhere.md";
				const url$1E = undefined;
				function rawContent$1E() {
					return "# Stay Consistent\n\nConsistency is vital because it ensures that your code integrates seamlessly with the rest of the project and maintains a coherent structure that is easy to understand and maintain. It also ensures that the system remains stable and reliable over time as it evolves. To achieve consistency, we recommend the following tips: familiarize yourself with the project's design patterns and conventions, consider the impact of changes on the entire system, work closely with other team members to ensure alignment, and always prioritize consistency and maintainability over temporary optimizations or shortcuts. Now, let's delve deeper into these tips to help you become a better code reviewer.";
				}
				function compiledContent$1E() {
					return html$1E;
				}
				function getHeadings$1E() {
					return [{"depth":1,"slug":"stay-consistent","text":"Stay Consistent"}];
				}

				const Content$1E = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter$1E;
					content.file = file$1E;
					content.url = url$1E;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html$1E)}`;
				});

const __vite_glob_0_164 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	Content: Content$1E,
	compiledContent: compiledContent$1E,
	default: Content$1E,
	file: file$1E,
	frontmatter: frontmatter$1E,
	getHeadings: getHeadings$1E,
	rawContent: rawContent$1E,
	url: url$1E
}, Symbol.toStringTag, { value: 'Module' }));

const html$1D = "<h1 id=\"seek-continuous-improvement-over-perfection\">Seek Continuous Improvement Over Perfection</h1>\n<p>It is important to always strive for better results without getting bogged down in the pursuit of an impractical ideal. In code review, this means recognizing that not every submission will be flawless, and that even seasoned developers can have room for enhancements. The goal should be to continuously learn and improve, rather than aiming for an unattainable level of perfection. Here are some tips to help foster a mindset of continuous improvement during code review:</p>\n<ul>\n<li>\n<p>Embrace a growth mindset: Understand that everyone, including yourself, can learn and grow from constructive feedback. Encourage a culture where team members feel comfortable sharing their knowledge and expertise.</p>\n</li>\n<li>\n<p>Set realistic expectations: Acknowledge that not every code submission will be perfect and that it is natural for errors and improvements to be identified during the review process.</p>\n</li>\n<li>\n<p>Encourage collaboration: Promote a culture where team members give and receive feedback willingly, supporting each other’s learning and development as developers.</p>\n</li>\n<li>\n<p>Focus on incremental progress: Instead of trying to fix every single issue at once, prioritize the most impactful changes and aim for steady progress over time.</p>\n</li>\n<li>\n<p>Celebrate improvements: Recognize and celebrate the efforts made by team members in addressing feedback and making positive changes to their code.</p>\n</li>\n</ul>\n<p>By embracing the continuous improvement mindset, your team will be more open to feedback and motivated to learn, ultimately resulting in more efficient and higher-quality code.</p>";

				const frontmatter$1D = {};
				const file$1D = "/workspaces/developer-roadmap/src/data/best-practices/code-review/content/continuous-improvement-over-perfection.md";
				const url$1D = undefined;
				function rawContent$1D() {
					return "# Seek Continuous Improvement Over Perfection\n\nIt is important to always strive for better results without getting bogged down in the pursuit of an impractical ideal. In code review, this means recognizing that not every submission will be flawless, and that even seasoned developers can have room for enhancements. The goal should be to continuously learn and improve, rather than aiming for an unattainable level of perfection. Here are some tips to help foster a mindset of continuous improvement during code review:\n\n- Embrace a growth mindset: Understand that everyone, including yourself, can learn and grow from constructive feedback. Encourage a culture where team members feel comfortable sharing their knowledge and expertise.\n\n- Set realistic expectations: Acknowledge that not every code submission will be perfect and that it is natural for errors and improvements to be identified during the review process.\n\n- Encourage collaboration: Promote a culture where team members give and receive feedback willingly, supporting each other's learning and development as developers.\n\n- Focus on incremental progress: Instead of trying to fix every single issue at once, prioritize the most impactful changes and aim for steady progress over time.\n\n- Celebrate improvements: Recognize and celebrate the efforts made by team members in addressing feedback and making positive changes to their code.\n\nBy embracing the continuous improvement mindset, your team will be more open to feedback and motivated to learn, ultimately resulting in more efficient and higher-quality code.";
				}
				function compiledContent$1D() {
					return html$1D;
				}
				function getHeadings$1D() {
					return [{"depth":1,"slug":"seek-continuous-improvement-over-perfection","text":"Seek Continuous Improvement Over Perfection"}];
				}

				const Content$1D = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter$1D;
					content.file = file$1D;
					content.url = url$1D;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html$1D)}`;
				});

const __vite_glob_0_165 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	Content: Content$1D,
	compiledContent: compiledContent$1D,
	default: Content$1D,
	file: file$1D,
	frontmatter: frontmatter$1D,
	getHeadings: getHeadings$1D,
	rawContent: rawContent$1D,
	url: url$1D
}, Symbol.toStringTag, { value: 'Module' }));

const html$1C = "<h1 id=\"encourage-cross-functional-knowledge\">Encourage Cross-Functional Knowledge</h1>\n<p>Encouraging reviewing code in unknown-areas for cross-functional knowledge not only helps the reviewer gain insights into different sections of the project but also enables the team to have a broader understanding of the system as a whole. This practice can be highly beneficial in improving code quality, knowledge sharing, and collaboration among team members.</p>\n<p>To ensure this practice is followed, we provide you with the following tips:</p>\n<ul>\n<li>Establish a culture where team members are encouraged to learn and are not hesitant to review code beyond their immediate circle of expertise.</li>\n<li>Define a clear process for code review assignments, considering reviews from diverse areas of the project.</li>\n<li>Schedule regular knowledge sharing sessions or training workshops to increase familiarity with different sections of the codebase.</li>\n<li>Use tools and automation to recommend code reviews based on individual skill levels and previous review experiences, promoting diversity in assigned projects.</li>\n<li>Provide constructive feedback during reviews and maintain open communication channels to facilitate knowledge sharing and discussion.</li>\n</ul>";

				const frontmatter$1C = {};
				const file$1C = "/workspaces/developer-roadmap/src/data/best-practices/code-review/content/cross-functional-knowledge.md";
				const url$1C = undefined;
				function rawContent$1C() {
					return "# Encourage Cross-Functional Knowledge\n\nEncouraging reviewing code in unknown-areas for cross-functional knowledge not only helps the reviewer gain insights into different sections of the project but also enables the team to have a broader understanding of the system as a whole. This practice can be highly beneficial in improving code quality, knowledge sharing, and collaboration among team members.\n\nTo ensure this practice is followed, we provide you with the following tips: \n- Establish a culture where team members are encouraged to learn and are not hesitant to review code beyond their immediate circle of expertise.\n- Define a clear process for code review assignments, considering reviews from diverse areas of the project.\n- Schedule regular knowledge sharing sessions or training workshops to increase familiarity with different sections of the codebase.\n- Use tools and automation to recommend code reviews based on individual skill levels and previous review experiences, promoting diversity in assigned projects.\n- Provide constructive feedback during reviews and maintain open communication channels to facilitate knowledge sharing and discussion.";
				}
				function compiledContent$1C() {
					return html$1C;
				}
				function getHeadings$1C() {
					return [{"depth":1,"slug":"encourage-cross-functional-knowledge","text":"Encourage Cross-Functional Knowledge"}];
				}

				const Content$1C = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter$1C;
					content.file = file$1C;
					content.url = url$1C;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html$1C)}`;
				});

const __vite_glob_0_166 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	Content: Content$1C,
	compiledContent: compiledContent$1C,
	default: Content$1C,
	file: file$1C,
	frontmatter: frontmatter$1C,
	getHeadings: getHeadings$1C,
	rawContent: rawContent$1C,
	url: url$1C
}, Symbol.toStringTag, { value: 'Module' }));

const html$1B = "<h1 id=\"definition-of-done\">Definition of Done</h1>\n<p>”Definition of Done” (DoD) is a crucial element that helps streamline the development process and effectively communicate the criteria for completing a task, feature or project. Ensuring that the DoD is documented and clear for everyone involved is an essential part of conducting a successful code review. By providing a detailed and precise description of the intended outcome, team members can evaluate the code based on the agreed-upon objectives, eliminating any ambiguity or confusion.</p>\n<p>To make sure the Definition of Done is clear to everyone, consider the following tips:</p>\n<ul>\n<li>\n<p>Collaborate on the creation of the DoD: Involve all team members, including developers, testers, and product owners, when defining the DoD to ensure it captures the necessary requirements and expectations.</p>\n</li>\n<li>\n<p>Keep it concise and specific: Articulate the DoD in such a manner that it is easy to understand and follow. Avoid using jargon or ambiguous terms that might lead to confusion or misinterpretation.</p>\n</li>\n<li>\n<p>Review and update regularly: As the project evolves, so may the requirements and best practices. Continuously review and update the DoD to align it with any changes that occur during the development lifecycle.</p>\n</li>\n<li>\n<p>Communicate the DoD to all stakeholders: Share the Definition of Done with every member of the team, ensuring that everyone is aware of the expectations and can work towards a common goal.</p>\n</li>\n<li>\n<p>Integrate the DoD into your work process: Establish the DoD as an essential part of the development process, such as during planning and task assignments, and most importantly, during code reviews. This helps to enforce consistency and ensures everyone is referencing a shared understanding of what it means for code to be considered “Done”.</p>\n</li>\n</ul>\n<p>By following these tips, you can create a clear and concise Definition of Done that will aid in conducting effective code reviews and ultimately result in a high-quality, successful project.</p>";

				const frontmatter$1B = {};
				const file$1B = "/workspaces/developer-roadmap/src/data/best-practices/code-review/content/definition-of-done.md";
				const url$1B = undefined;
				function rawContent$1B() {
					return "# Definition of Done\n\n\"Definition of Done\" (DoD) is a crucial element that helps streamline the development process and effectively communicate the criteria for completing a task, feature or project. Ensuring that the DoD is documented and clear for everyone involved is an essential part of conducting a successful code review. By providing a detailed and precise description of the intended outcome, team members can evaluate the code based on the agreed-upon objectives, eliminating any ambiguity or confusion.\n\nTo make sure the Definition of Done is clear to everyone, consider the following tips:\n\n- Collaborate on the creation of the DoD: Involve all team members, including developers, testers, and product owners, when defining the DoD to ensure it captures the necessary requirements and expectations.\n\n- Keep it concise and specific: Articulate the DoD in such a manner that it is easy to understand and follow. Avoid using jargon or ambiguous terms that might lead to confusion or misinterpretation.\n\n- Review and update regularly: As the project evolves, so may the requirements and best practices. Continuously review and update the DoD to align it with any changes that occur during the development lifecycle.\n\n- Communicate the DoD to all stakeholders: Share the Definition of Done with every member of the team, ensuring that everyone is aware of the expectations and can work towards a common goal.\n\n- Integrate the DoD into your work process: Establish the DoD as an essential part of the development process, such as during planning and task assignments, and most importantly, during code reviews. This helps to enforce consistency and ensures everyone is referencing a shared understanding of what it means for code to be considered \"Done\".\n\nBy following these tips, you can create a clear and concise Definition of Done that will aid in conducting effective code reviews and ultimately result in a high-quality, successful project.";
				}
				function compiledContent$1B() {
					return html$1B;
				}
				function getHeadings$1B() {
					return [{"depth":1,"slug":"definition-of-done","text":"Definition of Done"}];
				}

				const Content$1B = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter$1B;
					content.file = file$1B;
					content.url = url$1B;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html$1B)}`;
				});

const __vite_glob_0_167 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	Content: Content$1B,
	compiledContent: compiledContent$1B,
	default: Content$1B,
	file: file$1B,
	frontmatter: frontmatter$1B,
	getHeadings: getHeadings$1B,
	rawContent: rawContent$1B,
	url: url$1B
}, Symbol.toStringTag, { value: 'Module' }));

const html$1A = "<h1 id=\"determine-the-level-of-review-needed\">Determine the Level of Review Needed</h1>\n<p>Determining the appropriate level of review needed based on the scope and impact of the code change is crucial to ensure a smooth and efficient code review process. This aspect is particularly important as it helps allocate resources and time effectively while still maintaining the quality and stability of the developed software.</p>\n<p>To make sure you determine the accurate level of review needed, consider the following tips:</p>\n<ul>\n<li>\n<p>Analyze the scope of the change: Large-scale modifications, especially those that touch multiple parts of the system, require a more thorough review compared to small, localized changes.</p>\n</li>\n<li>\n<p>Identify potential risks: Assess the code’s impact on the overall system’s stability and security. Critical changes affecting security or the application’s core components necessitate a detailed review.</p>\n</li>\n<li>\n<p>Reflect on the developer’s experience: If the code has been submitted by a less experienced developer, a deeper review is generally recommended. Conversely, trust the expertise of seasoned developers and focus primarily on their adherence to best practices.</p>\n</li>\n<li>\n<p>Evaluate test coverage: A well-tested code provides you with greater confidence in its reliability. This can lead to a lighter review since the test suite has already verified its correctness.</p>\n</li>\n<li>\n<p>Check the urgency of the change: Urgent fixes such as fixing a severe bug might warrant a quicker review, while lower priority changes can be handled with a more comprehensive analysis.</p>\n</li>\n</ul>\n<p>Remember, finding the right balance in the review process ensures that time and resources are used effectively while maintaining the quality of your codebase.</p>";

				const frontmatter$1A = {};
				const file$1A = "/workspaces/developer-roadmap/src/data/best-practices/code-review/content/determine-review-level.md";
				const url$1A = undefined;
				function rawContent$1A() {
					return "# Determine the Level of Review Needed\n\nDetermining the appropriate level of review needed based on the scope and impact of the code change is crucial to ensure a smooth and efficient code review process. This aspect is particularly important as it helps allocate resources and time effectively while still maintaining the quality and stability of the developed software. \n\nTo make sure you determine the accurate level of review needed, consider the following tips: \n\n- Analyze the scope of the change: Large-scale modifications, especially those that touch multiple parts of the system, require a more thorough review compared to small, localized changes.\n\n- Identify potential risks: Assess the code's impact on the overall system's stability and security. Critical changes affecting security or the application's core components necessitate a detailed review.\n\n- Reflect on the developer's experience: If the code has been submitted by a less experienced developer, a deeper review is generally recommended. Conversely, trust the expertise of seasoned developers and focus primarily on their adherence to best practices.\n\n- Evaluate test coverage: A well-tested code provides you with greater confidence in its reliability. This can lead to a lighter review since the test suite has already verified its correctness.\n\n- Check the urgency of the change: Urgent fixes such as fixing a severe bug might warrant a quicker review, while lower priority changes can be handled with a more comprehensive analysis.\n\nRemember, finding the right balance in the review process ensures that time and resources are used effectively while maintaining the quality of your codebase.";
				}
				function compiledContent$1A() {
					return html$1A;
				}
				function getHeadings$1A() {
					return [{"depth":1,"slug":"determine-the-level-of-review-needed","text":"Determine the Level of Review Needed"}];
				}

				const Content$1A = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter$1A;
					content.file = file$1A;
					content.url = url$1A;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html$1A)}`;
				});

const __vite_glob_0_168 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	Content: Content$1A,
	compiledContent: compiledContent$1A,
	default: Content$1A,
	file: file$1A,
	frontmatter: frontmatter$1A,
	getHeadings: getHeadings$1A,
	rawContent: rawContent$1A,
	url: url$1A
}, Symbol.toStringTag, { value: 'Module' }));

const html$1z = "<h1 id=\"documentation\">Documentation</h1>\n<p>It is important to keep your project’s documentation up-to-date with every new feature or modifications made in your codebase. Comprehensive and well-maintained documentation plays a crucial role in the overall code review process, as it provides a clear understanding of the changes, their purpose, and their potential impact. This helps reviewers to efficiently assess the quality and relevance of your work. As the author of this guide, let me share some tips on how to ensure proper documentation during code review:</p>\n<ul>\n<li>\n<p>Identify the need for documentation updates: Whenever you make changes or add new features to your codebase, assess their significance and the need for documentation updates.</p>\n</li>\n<li>\n<p>Be concise and descriptive: When writing documentation, provide essential information about the feature or changes while highlighting the benefits, use cases, and any potential caveats.</p>\n</li>\n<li>\n<p>Focus on clarity and simplicity: Use clear and straightforward language to communicate the ideas effectively, and avoid jargon or complex phrases that may confuse readers.</p>\n</li>\n<li>\n<p>Update relevant sections: Ensure you update all pertinent sections of the documentation, such as user guides, API references, and developer notes.</p>\n</li>\n<li>\n<p>Include in-code comments: Add meaningful comments and explanations within your code to give context about the purpose and functionality of specific blocks or sections.</p>\n</li>\n<li>\n<p>Encourage review and feedback: During the code review process, ask your peers to provide feedback specifically on the documentation updates, ensuring they’re accurately reflecting the changes and additions.</p>\n</li>\n<li>\n<p>Maintain proper versioning: If your project utilizes versioning, make sure to document and update the corresponding versions affected by the changes.</p>\n</li>\n</ul>\n<p>Following these tips will aid in crafting thorough and accurate documentation, making the code review process more efficient and ensuring your team is well-informed about your project’s latest advancements.</p>";

				const frontmatter$1z = {};
				const file$1z = "/workspaces/developer-roadmap/src/data/best-practices/code-review/content/document-new-feature.md";
				const url$1z = undefined;
				function rawContent$1z() {
					return "# Documentation\n\nIt is important to keep your project's documentation up-to-date with every new feature or modifications made in your codebase. Comprehensive and well-maintained documentation plays a crucial role in the overall code review process, as it provides a clear understanding of the changes, their purpose, and their potential impact. This helps reviewers to efficiently assess the quality and relevance of your work. As the author of this guide, let me share some tips on how to ensure proper documentation during code review:\n\n- Identify the need for documentation updates: Whenever you make changes or add new features to your codebase, assess their significance and the need for documentation updates.\n\n- Be concise and descriptive: When writing documentation, provide essential information about the feature or changes while highlighting the benefits, use cases, and any potential caveats.\n\n- Focus on clarity and simplicity: Use clear and straightforward language to communicate the ideas effectively, and avoid jargon or complex phrases that may confuse readers.\n\n- Update relevant sections: Ensure you update all pertinent sections of the documentation, such as user guides, API references, and developer notes.\n\n- Include in-code comments: Add meaningful comments and explanations within your code to give context about the purpose and functionality of specific blocks or sections.\n\n- Encourage review and feedback: During the code review process, ask your peers to provide feedback specifically on the documentation updates, ensuring they're accurately reflecting the changes and additions.\n\n- Maintain proper versioning: If your project utilizes versioning, make sure to document and update the corresponding versions affected by the changes.\n\nFollowing these tips will aid in crafting thorough and accurate documentation, making the code review process more efficient and ensuring your team is well-informed about your project's latest advancements.";
				}
				function compiledContent$1z() {
					return html$1z;
				}
				function getHeadings$1z() {
					return [{"depth":1,"slug":"documentation","text":"Documentation"}];
				}

				const Content$1z = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter$1z;
					content.file = file$1z;
					content.url = url$1z;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html$1z)}`;
				});

const __vite_glob_0_169 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	Content: Content$1z,
	compiledContent: compiledContent$1z,
	default: Content$1z,
	file: file$1z,
	frontmatter: frontmatter$1z,
	getHeadings: getHeadings$1z,
	rawContent: rawContent$1z,
	url: url$1z
}, Symbol.toStringTag, { value: 'Module' }));

const html$1y = "<h1 id=\"document-code-review-process\">Document Code Review Process</h1>\n<p>Documenting and standardizing the code review process is a vital aspect of software development, as it ensures consistency, maintainability, and readability throughout your codebase. By establishing a well-documented and standardized process, your team will have clear expectations and guidelines to follow during code reviews, leading to better collaboration and faster development cycles. To ensure that your code review process is properly documented and standardized, consider the following tips:</p>\n<ul>\n<li>Create a central document outlining the code review process, its objectives, and its benefits. Make this easily accessible to all team members.</li>\n<li>Define and communicate the roles and responsibilities of code reviewers and authors.</li>\n<li>Establish a clear set of criteria for successful code reviews. These criteria can include code style guideline adherence, maintainability, performance, and security considerations.</li>\n<li>Encourage the use of checklists and templates to streamline the review process and maintain consistency.</li>\n<li>Schedule regular training sessions and workshops to reinforce best practices, discuss the latest industry trends, and share personal experiences related to code reviews.</li>\n<li>Continuously review and update the code review process to adapt to your team’s evolving needs and to keep it aligned with current industry standards.</li>\n</ul>";

				const frontmatter$1y = {};
				const file$1y = "/workspaces/developer-roadmap/src/data/best-practices/code-review/content/document-process.md";
				const url$1y = undefined;
				function rawContent$1y() {
					return "# Document Code Review Process\n\nDocumenting and standardizing the code review process is a vital aspect of software development, as it ensures consistency, maintainability, and readability throughout your codebase. By establishing a well-documented and standardized process, your team will have clear expectations and guidelines to follow during code reviews, leading to better collaboration and faster development cycles. To ensure that your code review process is properly documented and standardized, consider the following tips:\n\n- Create a central document outlining the code review process, its objectives, and its benefits. Make this easily accessible to all team members.\n- Define and communicate the roles and responsibilities of code reviewers and authors.\n- Establish a clear set of criteria for successful code reviews. These criteria can include code style guideline adherence, maintainability, performance, and security considerations.\n- Encourage the use of checklists and templates to streamline the review process and maintain consistency.\n- Schedule regular training sessions and workshops to reinforce best practices, discuss the latest industry trends, and share personal experiences related to code reviews.\n- Continuously review and update the code review process to adapt to your team's evolving needs and to keep it aligned with current industry standards.";
				}
				function compiledContent$1y() {
					return html$1y;
				}
				function getHeadings$1y() {
					return [{"depth":1,"slug":"document-code-review-process","text":"Document Code Review Process"}];
				}

				const Content$1y = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter$1y;
					content.file = file$1y;
					content.url = url$1y;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html$1y)}`;
				});

const __vite_glob_0_170 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	Content: Content$1y,
	compiledContent: compiledContent$1y,
	default: Content$1y,
	file: file$1y,
	frontmatter: frontmatter$1y,
	getHeadings: getHeadings$1y,
	rawContent: rawContent$1y,
	url: url$1y
}, Symbol.toStringTag, { value: 'Module' }));

const html$1x = "<h1 id=\"encourage-participation\">Encourage Participation</h1>\n<p>Encouraging team members to participate in code reviews is an essential best practice to ensure the delivery of high-quality software. Code reviews provide a platform for developers to learn from each other, share knowledge, and collaboratively improve their codebase. By fostering a culture of active involvement in code reviews, you can enhance the team’s overall skill set, catch potential issues before they escalate, and ultimately, build a stronger and more cohesive development team. Here are some valuable tips on how you can make sure your team actively participates in code reviews:</p>\n<ul>\n<li>\n<p>Create a welcoming environment: Make it clear that every member’s opinion and contribution is valued. Encourage input from everyone, even if they may not have extensive experience.</p>\n</li>\n<li>\n<p>Allocate time for code reviews: Ensure that participating in code reviews is not viewed as a burden, but rather a crucial part of the development process. Set aside designated time for these activities.</p>\n</li>\n<li>\n<p>Provide training and guidance: Offer resources to help team members develop their code review skills. This could include sharing articles and materials or conducting workshops on effective code review techniques.</p>\n</li>\n<li>\n<p>Encourage cross-functional reviews: Allow team members from different domains and expertise to participate in reviews. This helps in providing diverse perspectives and can uncover issues that were not initially apparent.</p>\n</li>\n<li>\n<p>Establish clear objectives and focus: Clearly communicate the goals and expectations for each code review. This ensures team members understand their role and are focused on delivering constructive feedback.</p>\n</li>\n<li>\n<p>Use tools and automation: Leverage code review tools that facilitate the process, such as GitHub’s “pull request” feature or online collaborative code editors.</p>\n</li>\n</ul>\n<p>By following these guidelines and nurturing an open and inclusive culture around code reviews, you can maximize the benefits that these practices bring to your development team and the quality of your software.</p>";

				const frontmatter$1x = {};
				const file$1x = "/workspaces/developer-roadmap/src/data/best-practices/code-review/content/encourage-participation.md";
				const url$1x = undefined;
				function rawContent$1x() {
					return "# Encourage Participation\n\nEncouraging team members to participate in code reviews is an essential best practice to ensure the delivery of high-quality software. Code reviews provide a platform for developers to learn from each other, share knowledge, and collaboratively improve their codebase. By fostering a culture of active involvement in code reviews, you can enhance the team's overall skill set, catch potential issues before they escalate, and ultimately, build a stronger and more cohesive development team. Here are some valuable tips on how you can make sure your team actively participates in code reviews:\n\n- Create a welcoming environment: Make it clear that every member's opinion and contribution is valued. Encourage input from everyone, even if they may not have extensive experience.\n\n- Allocate time for code reviews: Ensure that participating in code reviews is not viewed as a burden, but rather a crucial part of the development process. Set aside designated time for these activities.\n\n- Provide training and guidance: Offer resources to help team members develop their code review skills. This could include sharing articles and materials or conducting workshops on effective code review techniques.\n\n- Encourage cross-functional reviews: Allow team members from different domains and expertise to participate in reviews. This helps in providing diverse perspectives and can uncover issues that were not initially apparent.\n\n- Establish clear objectives and focus: Clearly communicate the goals and expectations for each code review. This ensures team members understand their role and are focused on delivering constructive feedback.\n\n- Use tools and automation: Leverage code review tools that facilitate the process, such as GitHub's \"pull request\" feature or online collaborative code editors.\n\nBy following these guidelines and nurturing an open and inclusive culture around code reviews, you can maximize the benefits that these practices bring to your development team and the quality of your software.";
				}
				function compiledContent$1x() {
					return html$1x;
				}
				function getHeadings$1x() {
					return [{"depth":1,"slug":"encourage-participation","text":"Encourage Participation"}];
				}

				const Content$1x = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter$1x;
					content.file = file$1x;
					content.url = url$1x;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html$1x)}`;
				});

const __vite_glob_0_171 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	Content: Content$1x,
	compiledContent: compiledContent$1x,
	default: Content$1x,
	file: file$1x,
	frontmatter: frontmatter$1x,
	getHeadings: getHeadings$1x,
	rawContent: rawContent$1x,
	url: url$1x
}, Symbol.toStringTag, { value: 'Module' }));

const html$1w = "<h1 id=\"failing-test-for-a-bug-fix\">Failing Test for a Bug Fix</h1>\n<p>A failing test is a valuable addition to the development process, as it ensures that developers can identify the root cause of the issue and verify that their changes effectively resolve the problem. This practice not only helps in improving code quality but also aids in avoiding regression in the future. To ensure you follow this best practice, below are some tips on how you can write a failing test for a bug fix:</p>\n<ul>\n<li>\n<p>Understand the bug: Analyze the issue report and, if possible, reproduce the bug locally to gain a clear understanding of the problem at hand.</p>\n</li>\n<li>\n<p>Write a test case: Create a test case that simulates the conditions under which the bug occurs, and make sure the test fails initially due to the presence of the bug.</p>\n</li>\n<li>\n<p>Implement the bug fix: Write the necessary code changes to resolve the bug while keeping the test case in mind.</p>\n</li>\n<li>\n<p>Verify the fix: Once the fix is implemented, run the test case again to ensure that the test case now passes, validating that the bug has been effectively resolved.</p>\n</li>\n<li>\n<p>Run other tests: Execute any additional test cases and perform a thorough code review to ensure that the bug fix does not create new issues or regressions in other parts of the codebase.</p>\n</li>\n</ul>\n<p>By adhering to this practice, you can confidently make changes to your codebase with the assurance that your bug fixes are effective, and your code remains reliable and robust.</p>";

				const frontmatter$1w = {};
				const file$1w = "/workspaces/developer-roadmap/src/data/best-practices/code-review/content/failing-text-bug.md";
				const url$1w = undefined;
				function rawContent$1w() {
					return "# Failing Test for a Bug Fix\n\nA failing test is a valuable addition to the development process, as it ensures that developers can identify the root cause of the issue and verify that their changes effectively resolve the problem. This practice not only helps in improving code quality but also aids in avoiding regression in the future. To ensure you follow this best practice, below are some tips on how you can write a failing test for a bug fix:\n\n- Understand the bug: Analyze the issue report and, if possible, reproduce the bug locally to gain a clear understanding of the problem at hand.\n\n- Write a test case: Create a test case that simulates the conditions under which the bug occurs, and make sure the test fails initially due to the presence of the bug.\n\n- Implement the bug fix: Write the necessary code changes to resolve the bug while keeping the test case in mind.\n\n- Verify the fix: Once the fix is implemented, run the test case again to ensure that the test case now passes, validating that the bug has been effectively resolved.\n\n- Run other tests: Execute any additional test cases and perform a thorough code review to ensure that the bug fix does not create new issues or regressions in other parts of the codebase.\n\nBy adhering to this practice, you can confidently make changes to your codebase with the assurance that your bug fixes are effective, and your code remains reliable and robust.";
				}
				function compiledContent$1w() {
					return html$1w;
				}
				function getHeadings$1w() {
					return [{"depth":1,"slug":"failing-test-for-a-bug-fix","text":"Failing Test for a Bug Fix"}];
				}

				const Content$1w = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter$1w;
					content.file = file$1w;
					content.url = url$1w;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html$1w)}`;
				});

const __vite_glob_0_172 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	Content: Content$1w,
	compiledContent: compiledContent$1w,
	default: Content$1w,
	file: file$1w,
	frontmatter: frontmatter$1w,
	getHeadings: getHeadings$1w,
	rawContent: rawContent$1w,
	url: url$1w
}, Symbol.toStringTag, { value: 'Module' }));

const html$1v = "<h1 id=\"follow-guidelines\">Follow Guidelines</h1>\n<p>In software development, following the coding standards and any other team guidelines is a crucial aspect of maintaining a consistent and highly readable codebase. Establishing a level of uniformity in your code allows your teammates to easily understand your work and minimize miscommunications during the code review process. To ensure you adhere to this best practice, consider the following tips:</p>\n<ul>\n<li>\n<p>Familiarize yourself with your team’s coding standards and guidelines: These standards may include rules for naming conventions, file structures, indentation, and comment styles. Make sure you understand the rationale behind these rules and adhere to them consistently.</p>\n</li>\n<li>\n<p>Use a linter or a code formatter: Tools like linters and formatters analyze your code and automatically flag or fix violations of the coding standards. They help to catch issues early and maintain consistency in your code.</p>\n</li>\n<li>\n<p>Peer review: Encourage your colleagues to review your code, even outside of the official code review process. This can help identify areas where you may not be following the standards, and it promotes a strong team culture of mutual learning and improvement.</p>\n</li>\n<li>\n<p>Continuous learning: Update your knowledge on current best practices in programming and actively work on improving your skills. This will enable you to make better decisions about which coding standards to follow, and contribute to the evolution of your team’s guidelines.</p>\n</li>\n</ul>\n<p>By embracing these practices, you help create a robust, maintainable, and efficient codebase and foster a positive and productive team environment.</p>";

				const frontmatter$1v = {};
				const file$1v = "/workspaces/developer-roadmap/src/data/best-practices/code-review/content/follow-guidelines.md";
				const url$1v = undefined;
				function rawContent$1v() {
					return "# Follow Guidelines\n\nIn software development, following the coding standards and any other team guidelines is a crucial aspect of maintaining a consistent and highly readable codebase. Establishing a level of uniformity in your code allows your teammates to easily understand your work and minimize miscommunications during the code review process. To ensure you adhere to this best practice, consider the following tips:\n\n- Familiarize yourself with your team's coding standards and guidelines: These standards may include rules for naming conventions, file structures, indentation, and comment styles. Make sure you understand the rationale behind these rules and adhere to them consistently.\n\n- Use a linter or a code formatter: Tools like linters and formatters analyze your code and automatically flag or fix violations of the coding standards. They help to catch issues early and maintain consistency in your code.\n\n- Peer review: Encourage your colleagues to review your code, even outside of the official code review process. This can help identify areas where you may not be following the standards, and it promotes a strong team culture of mutual learning and improvement.\n\n- Continuous learning: Update your knowledge on current best practices in programming and actively work on improving your skills. This will enable you to make better decisions about which coding standards to follow, and contribute to the evolution of your team's guidelines.\n\nBy embracing these practices, you help create a robust, maintainable, and efficient codebase and foster a positive and productive team environment.";
				}
				function compiledContent$1v() {
					return html$1v;
				}
				function getHeadings$1v() {
					return [{"depth":1,"slug":"follow-guidelines","text":"Follow Guidelines"}];
				}

				const Content$1v = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter$1v;
					content.file = file$1v;
					content.url = url$1v;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html$1v)}`;
				});

const __vite_glob_0_173 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	Content: Content$1v,
	compiledContent: compiledContent$1v,
	default: Content$1v,
	file: file$1v,
	frontmatter: frontmatter$1v,
	getHeadings: getHeadings$1v,
	rawContent: rawContent$1v,
	url: url$1v
}, Symbol.toStringTag, { value: 'Module' }));

const html$1u = "<h1 id=\"impact-of-change\">Impact of Change</h1>\n<p>In software development, it’s crucial to consider the impact that any proposed changes to the code might have on other parts of the system. Modifications in one area might inadvertently affect the behavior of seemingly unrelated components, leading to unexpected issues and bugs. As the code reviewer, it is your responsibility to be mindful of potential side effects and to ensure that the proposed changes promote stability and maintainability. In this section, we will discuss strategies you can employ to evaluate the impact of changes on the overall system and offer tips to help you confirm that any modifications will not introduce new problems or conflicts. Remember, the goal is to improve the codebase and maintain the integrity of the system as a whole.</p>";

				const frontmatter$1u = {};
				const file$1u = "/workspaces/developer-roadmap/src/data/best-practices/code-review/content/impact-of-change.md";
				const url$1u = undefined;
				function rawContent$1u() {
					return "# Impact of Change\n\nIn software development, it's crucial to consider the impact that any proposed changes to the code might have on other parts of the system. Modifications in one area might inadvertently affect the behavior of seemingly unrelated components, leading to unexpected issues and bugs. As the code reviewer, it is your responsibility to be mindful of potential side effects and to ensure that the proposed changes promote stability and maintainability. In this section, we will discuss strategies you can employ to evaluate the impact of changes on the overall system and offer tips to help you confirm that any modifications will not introduce new problems or conflicts. Remember, the goal is to improve the codebase and maintain the integrity of the system as a whole.";
				}
				function compiledContent$1u() {
					return html$1u;
				}
				function getHeadings$1u() {
					return [{"depth":1,"slug":"impact-of-change","text":"Impact of Change"}];
				}

				const Content$1u = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter$1u;
					content.file = file$1u;
					content.url = url$1u;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html$1u)}`;
				});

const __vite_glob_0_174 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	Content: Content$1u,
	compiledContent: compiledContent$1u,
	default: Content$1u,
	file: file$1u,
	frontmatter: frontmatter$1u,
	getHeadings: getHeadings$1u,
	rawContent: rawContent$1u,
	url: url$1u
}, Symbol.toStringTag, { value: 'Module' }));

const html$1t = "<h1 id=\"implement-or-explain\">Implement or Explain</h1>\n<p>In the code review process, it is crucial to not only accept feedback but also to implement the suggested changes and provide clear explanations when needed. It demonstrates your willingness to collaborate and your commitment to enhance the quality of your code. In this section, we will discuss the importance of implementing these suggestions and provide tips on how to effectively communicate any additional context or reasons behind your approach.</p>\n<p>Tips to ensure this:</p>\n<ul>\n<li>\n<p>Be open to feedback and be willing to accept constructive criticism that will improve your code.</p>\n</li>\n<li>\n<p>Take the time to thoroughly understand the suggested changes, and do not hesitate to ask for clarifications if necessary.</p>\n</li>\n<li>\n<p>When incorporating the changes, ensure your code remains consistent in structure and style, and adhere to the set guidelines.</p>\n</li>\n<li>\n<p>If you believe that certain suggestions are not appropriate, provide a clear and concise explanation, supported by technical or logical reasoning, to justify your decision.</p>\n</li>\n<li>\n<p>If you have made any updates that require further clarification, add comments to your code or respond to reviewers’ comments to make your intention clear.</p>\n</li>\n</ul>\n<p>By emphasizing continuous improvement and effective communication, you will be able to create a positive code review process that benefits both you and your team members.</p>";

				const frontmatter$1t = {};
				const file$1t = "/workspaces/developer-roadmap/src/data/best-practices/code-review/content/implement-changes-explanations.md";
				const url$1t = undefined;
				function rawContent$1t() {
					return "# Implement or Explain\n\nIn the code review process, it is crucial to not only accept feedback but also to implement the suggested changes and provide clear explanations when needed. It demonstrates your willingness to collaborate and your commitment to enhance the quality of your code. In this section, we will discuss the importance of implementing these suggestions and provide tips on how to effectively communicate any additional context or reasons behind your approach.\n\nTips to ensure this:\n\n- Be open to feedback and be willing to accept constructive criticism that will improve your code.\n\n- Take the time to thoroughly understand the suggested changes, and do not hesitate to ask for clarifications if necessary.\n\n- When incorporating the changes, ensure your code remains consistent in structure and style, and adhere to the set guidelines.\n\n- If you believe that certain suggestions are not appropriate, provide a clear and concise explanation, supported by technical or logical reasoning, to justify your decision.\n\n- If you have made any updates that require further clarification, add comments to your code or respond to reviewers' comments to make your intention clear.\n\nBy emphasizing continuous improvement and effective communication, you will be able to create a positive code review process that benefits both you and your team members.";
				}
				function compiledContent$1t() {
					return html$1t;
				}
				function getHeadings$1t() {
					return [{"depth":1,"slug":"implement-or-explain","text":"Implement or Explain"}];
				}

				const Content$1t = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter$1t;
					content.file = file$1t;
					content.url = url$1t;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html$1t)}`;
				});

const __vite_glob_0_175 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	Content: Content$1t,
	compiledContent: compiledContent$1t,
	default: Content$1t,
	file: file$1t,
	frontmatter: frontmatter$1t,
	getHeadings: getHeadings$1t,
	rawContent: rawContent$1t,
	url: url$1t
}, Symbol.toStringTag, { value: 'Module' }));

const html$1s = "<h1 id=\"\"></h1>";

				const frontmatter$1s = {};
				const file$1s = "/workspaces/developer-roadmap/src/data/best-practices/code-review/content/index.md";
				const url$1s = undefined;
				function rawContent$1s() {
					return "# ";
				}
				function compiledContent$1s() {
					return html$1s;
				}
				function getHeadings$1s() {
					return [{"depth":1,"slug":"","text":""}];
				}

				const Content$1s = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter$1s;
					content.file = file$1s;
					content.url = url$1s;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html$1s)}`;
				});

const __vite_glob_0_176 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	Content: Content$1s,
	compiledContent: compiledContent$1s,
	default: Content$1s,
	file: file$1s,
	frontmatter: frontmatter$1s,
	getHeadings: getHeadings$1s,
	rawContent: rawContent$1s,
	url: url$1s
}, Symbol.toStringTag, { value: 'Module' }));

const html$1r = "<h1 id=\"knowledge-sharing\">Knowledge Sharing</h1>\n<p>Code reviews are not just about ensuring high-quality code, they are also a platform for knowledge sharing, learning, and personal development within your development team. An effective code review process encourages the collective growth of team members by providing them with constructive feedback, alternative solutions, and best practices. In this section, we will discuss some key tips on how to use code reviews as an opportunity for knowledge sharing and learning.</p>\n<ul>\n<li>\n<p>Encourage open discussion and questions: Create a safe environment where team members feel comfortable asking questions and engaging in discussions about the code, design patterns, or best practices.</p>\n</li>\n<li>\n<p>Share best practices, techniques, and tools: Team members may have undiscovered methods, techniques, or tools that can help others; code review can be an opportunity to share and discuss these.</p>\n</li>\n<li>\n<p>Provide clear, actionable feedback: Offer specific suggestions for improvement and consider using examples to demonstrate a point. A well-defined concern or proposal can help grow the author’s knowledge and challenge their assumptions.</p>\n</li>\n<li>\n<p>Promote mentorship and cross-training: Encourage experienced team members to provide guidance and support to those with less experience. This not only helps transfer knowledge but also enhances understanding across the team.</p>\n</li>\n<li>\n<p>Encourage empathy and collaboration: Consider each team member’s perspective and unique strengths when discussing improvements. Foster an environment where everyone can contribute to and learn from the review process, which ultimately leads to shared growth and mutual success.</p>\n</li>\n</ul>";

				const frontmatter$1r = {};
				const file$1r = "/workspaces/developer-roadmap/src/data/best-practices/code-review/content/knowledge-sharing.md";
				const url$1r = undefined;
				function rawContent$1r() {
					return "# Knowledge Sharing\n\nCode reviews are not just about ensuring high-quality code, they are also a platform for knowledge sharing, learning, and personal development within your development team. An effective code review process encourages the collective growth of team members by providing them with constructive feedback, alternative solutions, and best practices. In this section, we will discuss some key tips on how to use code reviews as an opportunity for knowledge sharing and learning.\n\n- Encourage open discussion and questions: Create a safe environment where team members feel comfortable asking questions and engaging in discussions about the code, design patterns, or best practices.\n\n- Share best practices, techniques, and tools: Team members may have undiscovered methods, techniques, or tools that can help others; code review can be an opportunity to share and discuss these.\n\n- Provide clear, actionable feedback: Offer specific suggestions for improvement and consider using examples to demonstrate a point. A well-defined concern or proposal can help grow the author's knowledge and challenge their assumptions.\n\n- Promote mentorship and cross-training: Encourage experienced team members to provide guidance and support to those with less experience. This not only helps transfer knowledge but also enhances understanding across the team.\n\n- Encourage empathy and collaboration: Consider each team member's perspective and unique strengths when discussing improvements. Foster an environment where everyone can contribute to and learn from the review process, which ultimately leads to shared growth and mutual success.";
				}
				function compiledContent$1r() {
					return html$1r;
				}
				function getHeadings$1r() {
					return [{"depth":1,"slug":"knowledge-sharing","text":"Knowledge Sharing"}];
				}

				const Content$1r = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter$1r;
					content.file = file$1r;
					content.url = url$1r;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html$1r)}`;
				});

const __vite_glob_0_177 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	Content: Content$1r,
	compiledContent: compiledContent$1r,
	default: Content$1r,
	file: file$1r,
	frontmatter: frontmatter$1r,
	getHeadings: getHeadings$1r,
	rawContent: rawContent$1r,
	url: url$1r
}, Symbol.toStringTag, { value: 'Module' }));

const html$1q = "<h1 id=\"understand-the-requirements-and-context\">Understand the Requirements and Context</h1>\n<p>In the software development process, understanding the requirements and the context of the changes being made is crucial for successful code reviews. Being aware of these aspects ensures that the reviewer can effectively evaluate how well the proposed changes meet the requirements and align with the software’s overall design and purpose. It also helps in identifying potential issues and improvements that may have been overlooked. To make sure you understand the requirements and the context, consider the following tips:</p>\n<ul>\n<li>\n<p>Analyze the related documentation: Review any relevant documents, such as requirement specifications or design documents, to understand the motivation behind the changes and the desired outcome.</p>\n</li>\n<li>\n<p>Communicate with the author: Don’t hesitate to ask the code contributor questions or clarifications about the requirements and context, as it can help in building a mutual understanding of the changes.</p>\n</li>\n<li>\n<p>Study the issue tracker: Explore the issue tracker, if available, to get further context on the problem being addressed or the feature being implemented. This can help you understand how the proposed changes relate to the overall development goals and priorities.</p>\n</li>\n<li>\n<p>Familiarize yourself with the surrounding code: Take time to study the existing code around the changes being made, as this can provide valuable insights into the program’s architecture and design philosophy.</p>\n</li>\n<li>\n<p>Consider system-wide implications: Keep in mind the broader context of how the changes might affect the system as a whole, including potential interactions with other components, performance impacts, and maintainability considerations.</p>\n</li>\n</ul>";

				const frontmatter$1q = {};
				const file$1q = "/workspaces/developer-roadmap/src/data/best-practices/code-review/content/learn-context-reqs.md";
				const url$1q = undefined;
				function rawContent$1q() {
					return "# Understand the Requirements and Context\n\nIn the software development process, understanding the requirements and the context of the changes being made is crucial for successful code reviews. Being aware of these aspects ensures that the reviewer can effectively evaluate how well the proposed changes meet the requirements and align with the software's overall design and purpose. It also helps in identifying potential issues and improvements that may have been overlooked. To make sure you understand the requirements and the context, consider the following tips:\n\n- Analyze the related documentation: Review any relevant documents, such as requirement specifications or design documents, to understand the motivation behind the changes and the desired outcome.\n\n- Communicate with the author: Don't hesitate to ask the code contributor questions or clarifications about the requirements and context, as it can help in building a mutual understanding of the changes.\n\n- Study the issue tracker: Explore the issue tracker, if available, to get further context on the problem being addressed or the feature being implemented. This can help you understand how the proposed changes relate to the overall development goals and priorities.\n\n- Familiarize yourself with the surrounding code: Take time to study the existing code around the changes being made, as this can provide valuable insights into the program's architecture and design philosophy.\n\n- Consider system-wide implications: Keep in mind the broader context of how the changes might affect the system as a whole, including potential interactions with other components, performance impacts, and maintainability considerations.";
				}
				function compiledContent$1q() {
					return html$1q;
				}
				function getHeadings$1q() {
					return [{"depth":1,"slug":"understand-the-requirements-and-context","text":"Understand the Requirements and Context"}];
				}

				const Content$1q = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter$1q;
					content.file = file$1q;
					content.url = url$1q;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html$1q)}`;
				});

const __vite_glob_0_178 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	Content: Content$1q,
	compiledContent: compiledContent$1q,
	default: Content$1q,
	file: file$1q,
	frontmatter: frontmatter$1q,
	getHeadings: getHeadings$1q,
	rawContent: rawContent$1q,
	url: url$1q
}, Symbol.toStringTag, { value: 'Module' }));

const html$1p = "<h1 id=\"identify-potential-risks-or-issues\">Identify Potential Risks or Issues</h1>\n<p>In the code review process, it is essential to identify potential risks or issues that could emerge due to the changes in the code. Being proactive in detecting these possibilities can save time and effort, and prevent future problems. As the author of this guide, I would like to emphasize the importance of making a list of all possible risks or issues during a code review.</p>\n<p>To effectively analyze potential risks, consider these tips:</p>\n<ul>\n<li>Thoroughly review the code to understand the purpose of the change.</li>\n<li>Compare the proposed changes with the existing codebase to identify potential conflicts or inconsistencies.</li>\n<li>Evaluate the impact of the proposed changes on other parts of the codebase or the overall system.</li>\n<li>Keep an eye out for any security risks that could arise due to the changes, such as unauthorized access or data leaks.</li>\n<li>Assess the code quality and the adherence to the project’s coding standards to ensure maintainability and readability.</li>\n<li>Test the changes to identify unknown risks that might only surface during execution.</li>\n<li>Communicate and collaborate with the developer to discuss any concerns and work together to find solutions.</li>\n</ul>\n<p>By following these steps, you will be well-prepared to identify and mitigate potential risks or issues that may emerge due to the code changes, ensuring a more robust and reliable solution.</p>";

				const frontmatter$1p = {};
				const file$1p = "/workspaces/developer-roadmap/src/data/best-practices/code-review/content/list-review-risks-issues.md";
				const url$1p = undefined;
				function rawContent$1p() {
					return "# Identify Potential Risks or Issues\n\nIn the code review process, it is essential to identify potential risks or issues that could emerge due to the changes in the code. Being proactive in detecting these possibilities can save time and effort, and prevent future problems. As the author of this guide, I would like to emphasize the importance of making a list of all possible risks or issues during a code review.\n\nTo effectively analyze potential risks, consider these tips:\n\n- Thoroughly review the code to understand the purpose of the change.\n- Compare the proposed changes with the existing codebase to identify potential conflicts or inconsistencies.\n- Evaluate the impact of the proposed changes on other parts of the codebase or the overall system.\n- Keep an eye out for any security risks that could arise due to the changes, such as unauthorized access or data leaks.\n- Assess the code quality and the adherence to the project's coding standards to ensure maintainability and readability.\n- Test the changes to identify unknown risks that might only surface during execution.\n- Communicate and collaborate with the developer to discuss any concerns and work together to find solutions.\n\nBy following these steps, you will be well-prepared to identify and mitigate potential risks or issues that may emerge due to the code changes, ensuring a more robust and reliable solution.";
				}
				function compiledContent$1p() {
					return html$1p;
				}
				function getHeadings$1p() {
					return [{"depth":1,"slug":"identify-potential-risks-or-issues","text":"Identify Potential Risks or Issues"}];
				}

				const Content$1p = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter$1p;
					content.file = file$1p;
					content.url = url$1p;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html$1p)}`;
				});

const __vite_glob_0_179 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	Content: Content$1p,
	compiledContent: compiledContent$1p,
	default: Content$1p,
	file: file$1p,
	frontmatter: frontmatter$1p,
	getHeadings: getHeadings$1p,
	rawContent: rawContent$1p,
	url: url$1p
}, Symbol.toStringTag, { value: 'Module' }));

const html$1o = "<h1 id=\"merge-approved-changes\">Merge Approved Changes</h1>\n<p>In the code review process, one essential step is merging the approved code change into the main or feature branch. This involves integrating the changes made on a separate branch or fork, which were reviewed and approved by your peers, into a single unified branch. This step not only helps maintain the stability of the codebase but also ensures a seamless collaboration amongst team members. To guarantee the success of this phase, follow the tips below:</p>\n<ul>\n<li>Always perform a test run: Before you merge, ensure that the tests pass locally and in the CI system to prevent broken builds or unexpected failures.</li>\n<li>Keep the main branch stable: Update your branch with the latest changes from the main branch before merging, to avoid conflicts or inconsistencies.</li>\n<li>Utilize Pull Requests/Merge Requests: Use collaborative features like Pull Requests in GitHub, GitLab or Bitbucket to track peer reviews, comments and approvals.</li>\n<li>Embrace rebasing: With rebasing, you can keep your Git history cleaner and linear, avoiding unnecessary merge commits.</li>\n<li>Opt for a code review tool: Make use of code review tools like Gerrit or Phabricator to manage and track the review process in a structured way.</li>\n<li>Merge fast, merge often: Encourage smaller changes and frequent merges to avoid stagnation and complex conflict resolution.</li>\n</ul>\n<p>By following these tips, you’ll be able to streamline your codebase, enhance collaboration, and uphold the overall quality of your software project.</p>";

				const frontmatter$1o = {};
				const file$1o = "/workspaces/developer-roadmap/src/data/best-practices/code-review/content/merge-approved-code.md";
				const url$1o = undefined;
				function rawContent$1o() {
					return "# Merge Approved Changes\n\nIn the code review process, one essential step is merging the approved code change into the main or feature branch. This involves integrating the changes made on a separate branch or fork, which were reviewed and approved by your peers, into a single unified branch. This step not only helps maintain the stability of the codebase but also ensures a seamless collaboration amongst team members. To guarantee the success of this phase, follow the tips below:\n\n- Always perform a test run: Before you merge, ensure that the tests pass locally and in the CI system to prevent broken builds or unexpected failures.\n- Keep the main branch stable: Update your branch with the latest changes from the main branch before merging, to avoid conflicts or inconsistencies.\n- Utilize Pull Requests/Merge Requests: Use collaborative features like Pull Requests in GitHub, GitLab or Bitbucket to track peer reviews, comments and approvals.\n- Embrace rebasing: With rebasing, you can keep your Git history cleaner and linear, avoiding unnecessary merge commits.\n- Opt for a code review tool: Make use of code review tools like Gerrit or Phabricator to manage and track the review process in a structured way.\n- Merge fast, merge often: Encourage smaller changes and frequent merges to avoid stagnation and complex conflict resolution.\n\nBy following these tips, you'll be able to streamline your codebase, enhance collaboration, and uphold the overall quality of your software project.";
				}
				function compiledContent$1o() {
					return html$1o;
				}
				function getHeadings$1o() {
					return [{"depth":1,"slug":"merge-approved-changes","text":"Merge Approved Changes"}];
				}

				const Content$1o = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter$1o;
					content.file = file$1o;
					content.url = url$1o;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html$1o)}`;
				});

const __vite_glob_0_180 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	Content: Content$1o,
	compiledContent: compiledContent$1o,
	default: Content$1o,
	file: file$1o,
	frontmatter: frontmatter$1o,
	getHeadings: getHeadings$1o,
	rawContent: rawContent$1o,
	url: url$1o
}, Symbol.toStringTag, { value: 'Module' }));

const html$1n = "<h1 id=\"monitor-performance\">Monitor Performance</h1>\n<p>Monitoring the performance and functionality of code changes is a crucial aspect of the code review process that ensures the seamless integration of new modifications without compromising on the overall system’s efficiency. As an integral part of quality assurance, this practice helps to identify and address potential issues early on, minimizing the risk of disruptive performance problems down the line.</p>\n<p>Here are some tips to help you monitor the performance of code changes:</p>\n<ul>\n<li>Conduct thorough testing: Perform rigorous testing, including unit tests, integration tests, and performance tests, to ensure the functionality and examine how the new code impacts the system’s performance, covering different scenarios and use cases.</li>\n<li>Use profiling tools: Utilize monitoring and profiling tools to gauge the performance of the code changes and identify any slowdowns, bottlenecks, or resource usage problems.</li>\n<li>Monitor logs and analytics: Keep an eye on logs and analytics for any unusual activity or errors, which could indicate issues introduced by the new code changes.</li>\n<li>Set performance benchmarks/targets: Establish predetermined benchmarks for performance measures, such as response time or resource usage, to simplify the process of identifying code changes that have negatively impacted the system.</li>\n<li>Follow up during and after deployment: Periodically review the code changes and their impact, especially during and after the deployment phase. This will help to optimize performance, as well as maintain the quality and stability of the overall system.</li>\n<li>Foster open communication: Encourage open communication among team members to quickly address concerns, share insights, and collaborate on solutions to performance-related issues.</li>\n</ul>";

				const frontmatter$1n = {};
				const file$1n = "/workspaces/developer-roadmap/src/data/best-practices/code-review/content/monitor-performance.md";
				const url$1n = undefined;
				function rawContent$1n() {
					return "# Monitor Performance\n\nMonitoring the performance and functionality of code changes is a crucial aspect of the code review process that ensures the seamless integration of new modifications without compromising on the overall system's efficiency. As an integral part of quality assurance, this practice helps to identify and address potential issues early on, minimizing the risk of disruptive performance problems down the line.\n\nHere are some tips to help you monitor the performance of code changes:\n\n- Conduct thorough testing: Perform rigorous testing, including unit tests, integration tests, and performance tests, to ensure the functionality and examine how the new code impacts the system's performance, covering different scenarios and use cases.\n- Use profiling tools: Utilize monitoring and profiling tools to gauge the performance of the code changes and identify any slowdowns, bottlenecks, or resource usage problems.\n- Monitor logs and analytics: Keep an eye on logs and analytics for any unusual activity or errors, which could indicate issues introduced by the new code changes.\n- Set performance benchmarks/targets: Establish predetermined benchmarks for performance measures, such as response time or resource usage, to simplify the process of identifying code changes that have negatively impacted the system.\n- Follow up during and after deployment: Periodically review the code changes and their impact, especially during and after the deployment phase. This will help to optimize performance, as well as maintain the quality and stability of the overall system.\n- Foster open communication: Encourage open communication among team members to quickly address concerns, share insights, and collaborate on solutions to performance-related issues.";
				}
				function compiledContent$1n() {
					return html$1n;
				}
				function getHeadings$1n() {
					return [{"depth":1,"slug":"monitor-performance","text":"Monitor Performance"}];
				}

				const Content$1n = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter$1n;
					content.file = file$1n;
					content.url = url$1n;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html$1n)}`;
				});

const __vite_glob_0_181 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	Content: Content$1n,
	compiledContent: compiledContent$1n,
	default: Content$1n,
	file: file$1n,
	frontmatter: frontmatter$1n,
	getHeadings: getHeadings$1n,
	rawContent: rawContent$1n,
	url: url$1n
}, Symbol.toStringTag, { value: 'Module' }));

const html$1m = "<h1 id=\"monitor-and-improve-code-reviews\">Monitor and Improve Code Reviews</h1>\n<p>By continually evaluating and refining the process, you ensure that all team members are on board with the best practices and are benefiting from each other’s expertise. This leads to more efficient collaboration, faster development cycles, and better code quality. To ensure you are constantly monitoring and improving your code review process, consider the following tips:</p>\n<ul>\n<li>\n<p>Set clear expectations and guidelines for conducting code reviews, taking into account your project requirements and team members’ expertise.</p>\n</li>\n<li>\n<p>Regularly gather feedback from team members about what is working well and where improvements can be made. Create an open and trusting environment where constructive criticism and suggestions are welcomed.</p>\n</li>\n<li>\n<p>Track the effectiveness of the code review process through metrics, such as the number of issues raised, resolved, and reopened during the review process. Use these data points to identify patterns and areas for improvement.</p>\n</li>\n<li>\n<p>Provide training and resources to help team members develop their code review skills, share best practices, and stay informed on industry standards and trends.</p>\n</li>\n<li>\n<p>Review and update the guidelines and best practices regularly to adapt to changes in technologies, team dynamics, and project requirements. Periodically evaluate whether the current code review process still matches your project’s growing needs and make necessary adjustments.</p>\n</li>\n</ul>";

				const frontmatter$1m = {};
				const file$1m = "/workspaces/developer-roadmap/src/data/best-practices/code-review/content/monitor-reviews.md";
				const url$1m = undefined;
				function rawContent$1m() {
					return "# Monitor and Improve Code Reviews\n\nBy continually evaluating and refining the process, you ensure that all team members are on board with the best practices and are benefiting from each other's expertise. This leads to more efficient collaboration, faster development cycles, and better code quality. To ensure you are constantly monitoring and improving your code review process, consider the following tips:\n\n- Set clear expectations and guidelines for conducting code reviews, taking into account your project requirements and team members' expertise.\n\n- Regularly gather feedback from team members about what is working well and where improvements can be made. Create an open and trusting environment where constructive criticism and suggestions are welcomed.\n\n- Track the effectiveness of the code review process through metrics, such as the number of issues raised, resolved, and reopened during the review process. Use these data points to identify patterns and areas for improvement.\n\n- Provide training and resources to help team members develop their code review skills, share best practices, and stay informed on industry standards and trends.\n\n- Review and update the guidelines and best practices regularly to adapt to changes in technologies, team dynamics, and project requirements. Periodically evaluate whether the current code review process still matches your project's growing needs and make necessary adjustments.";
				}
				function compiledContent$1m() {
					return html$1m;
				}
				function getHeadings$1m() {
					return [{"depth":1,"slug":"monitor-and-improve-code-reviews","text":"Monitor and Improve Code Reviews"}];
				}

				const Content$1m = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter$1m;
					content.file = file$1m;
					content.url = url$1m;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html$1m)}`;
				});

const __vite_glob_0_182 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	Content: Content$1m,
	compiledContent: compiledContent$1m,
	default: Content$1m,
	file: file$1m,
	frontmatter: frontmatter$1m,
	getHeadings: getHeadings$1m,
	rawContent: rawContent$1m,
	url: url$1m
}, Symbol.toStringTag, { value: 'Module' }));

const html$1l = "<h1 id=\"nitpick-comments\">Nitpick Comments</h1>\n<p>I highly recommend leaving comments to suggest improvements, as this helps ensure high quality and maintainable code. However, it is important to differentiate between critical revisions and those elements that have room for improvement but can be considered as “nice to have.” To indicate these less critical suggestions, we use the prefix “Nit.” They convey that your suggestion is a minor point and helps the developer understand the reviewer’s perspective on the importance of the suggestion. This allows them to prioritize their revisions effectively. Here are some tips to keep in mind:</p>\n<ul>\n<li>\n<p>When leaving a comment or suggestion, consider whether it is critical to meeting the coding standards or offering a significant improvement to the code. If not, prefix your comment with “Nit.”</p>\n</li>\n<li>\n<p>Encourage a balanced approach to comments, where you highlight both critical and non-critical suggestions. This allows the developer to address important aspects, while being aware of opportunities for improvement.</p>\n</li>\n<li>\n<p>When reviewing code, always ensure you give positive feedback as well. This points out what the developer is doing right, and offers motivation to continue doing great work.</p>\n</li>\n<li>\n<p>In your comments, be specific and clear about what needs improvement, keeping in mind that the developer may not have the same context as you. This will facilitate productive discussions and faster decision-making.</p>\n</li>\n</ul>\n<p>By following this practice, you create a healthy environment for code review that fosters open communication, learning, and improvement while making sure that critical standards are met.</p>";

				const frontmatter$1l = {};
				const file$1l = "/workspaces/developer-roadmap/src/data/best-practices/code-review/content/nitpick-comments.md";
				const url$1l = undefined;
				function rawContent$1l() {
					return "# Nitpick Comments\n\nI highly recommend leaving comments to suggest improvements, as this helps ensure high quality and maintainable code. However, it is important to differentiate between critical revisions and those elements that have room for improvement but can be considered as \"nice to have.\" To indicate these less critical suggestions, we use the prefix \"Nit.\" They convey that your suggestion is a minor point and helps the developer understand the reviewer's perspective on the importance of the suggestion. This allows them to prioritize their revisions effectively. Here are some tips to keep in mind:\n\n- When leaving a comment or suggestion, consider whether it is critical to meeting the coding standards or offering a significant improvement to the code. If not, prefix your comment with \"Nit.\"\n\n- Encourage a balanced approach to comments, where you highlight both critical and non-critical suggestions. This allows the developer to address important aspects, while being aware of opportunities for improvement.\n\n- When reviewing code, always ensure you give positive feedback as well. This points out what the developer is doing right, and offers motivation to continue doing great work.\n\n- In your comments, be specific and clear about what needs improvement, keeping in mind that the developer may not have the same context as you. This will facilitate productive discussions and faster decision-making.\n\nBy following this practice, you create a healthy environment for code review that fosters open communication, learning, and improvement while making sure that critical standards are met.";
				}
				function compiledContent$1l() {
					return html$1l;
				}
				function getHeadings$1l() {
					return [{"depth":1,"slug":"nitpick-comments","text":"Nitpick Comments"}];
				}

				const Content$1l = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter$1l;
					content.file = file$1l;
					content.url = url$1l;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html$1l)}`;
				});

const __vite_glob_0_183 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	Content: Content$1l,
	compiledContent: compiledContent$1l,
	default: Content$1l,
	file: file$1l,
	frontmatter: frontmatter$1l,
	getHeadings: getHeadings$1l,
	rawContent: rawContent$1l,
	url: url$1l
}, Symbol.toStringTag, { value: 'Module' }));

const html$1k = "<h1 id=\"communication-and-collaboration\">Communication and Collaboration</h1>\n<p>Code reviews should not be treated as a one-way process where a reviewer simply lists out the issues to be fixed. Instead, they should serve as an opportunity to engage in meaningful discussions, share knowledge, and work collectively towards improving code quality. This approach helps establish a positive environment for code review and fosters stronger relationships within the development team. Here are some tips to ensure effective communication and collaboration during code review:</p>\n<ul>\n<li>Maintain a respectful and constructive tone while providing feedback.</li>\n<li>Frame suggestions as questions or recommendations rather than demands.</li>\n<li>Encourage reviewers to explain their reasoning behind their suggestions and authors to clarify their intentions.</li>\n<li>Emphasize learning and knowledge sharing, rather than just identifying errors.</li>\n<li>Create an environment where authors feel comfortable initiating discussions around their code decisions.</li>\n<li>Make sure that each participant is open and receptive to the perspectives of others.</li>\n<li>Schedule synchronous reviews, when possible, to encourage real-time collaboration and communication.</li>\n<li>Utilize tools and platforms that promote seamless collaboration and discussions.</li>\n</ul>\n<p>Following these tips will help ensure a collaborative and productive code review environment, ultimately leading to higher-quality software and a more cohesive development team.</p>";

				const frontmatter$1k = {};
				const file$1k = "/workspaces/developer-roadmap/src/data/best-practices/code-review/content/no-one-way-process.md";
				const url$1k = undefined;
				function rawContent$1k() {
					return "# Communication and Collaboration\n\nCode reviews should not be treated as a one-way process where a reviewer simply lists out the issues to be fixed. Instead, they should serve as an opportunity to engage in meaningful discussions, share knowledge, and work collectively towards improving code quality. This approach helps establish a positive environment for code review and fosters stronger relationships within the development team. Here are some tips to ensure effective communication and collaboration during code review:\n\n- Maintain a respectful and constructive tone while providing feedback.\n- Frame suggestions as questions or recommendations rather than demands.\n- Encourage reviewers to explain their reasoning behind their suggestions and authors to clarify their intentions.\n- Emphasize learning and knowledge sharing, rather than just identifying errors.\n- Create an environment where authors feel comfortable initiating discussions around their code decisions.\n- Make sure that each participant is open and receptive to the perspectives of others.\n- Schedule synchronous reviews, when possible, to encourage real-time collaboration and communication.\n- Utilize tools and platforms that promote seamless collaboration and discussions.\n\nFollowing these tips will help ensure a collaborative and productive code review environment, ultimately leading to higher-quality software and a more cohesive development team.";
				}
				function compiledContent$1k() {
					return html$1k;
				}
				function getHeadings$1k() {
					return [{"depth":1,"slug":"communication-and-collaboration","text":"Communication and Collaboration"}];
				}

				const Content$1k = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter$1k;
					content.file = file$1k;
					content.url = url$1k;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html$1k)}`;
				});

const __vite_glob_0_184 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	Content: Content$1k,
	compiledContent: compiledContent$1k,
	default: Content$1k,
	file: file$1k,
	frontmatter: frontmatter$1k,
	getHeadings: getHeadings$1k,
	rawContent: rawContent$1k,
	url: url$1k
}, Symbol.toStringTag, { value: 'Module' }));

const html$1j = "<h1 id=\"note-questions-for-review\">Note Questions for Review</h1>\n<p>Taking notes on any questions or concerns about the change during a code review is essential for increasing efficiency and enabling better communication among team members. This practice allows you to be prepared with a clear list of points to discuss during the review meeting. In this section of the guide, we will outline various tips to help you make the most of this best practice in your code review process, such as setting aside time for note-taking, organizing your notes in a clear and logical manner, and using specific examples to illustrate your concerns. By following these tips, you will enhance the effectiveness of your code reviews and foster better collaboration within your team.</p>";

				const frontmatter$1j = {};
				const file$1j = "/workspaces/developer-roadmap/src/data/best-practices/code-review/content/note-questions-for-review.md";
				const url$1j = undefined;
				function rawContent$1j() {
					return "# Note Questions for Review\n\nTaking notes on any questions or concerns about the change during a code review is essential for increasing efficiency and enabling better communication among team members. This practice allows you to be prepared with a clear list of points to discuss during the review meeting. In this section of the guide, we will outline various tips to help you make the most of this best practice in your code review process, such as setting aside time for note-taking, organizing your notes in a clear and logical manner, and using specific examples to illustrate your concerns. By following these tips, you will enhance the effectiveness of your code reviews and foster better collaboration within your team.";
				}
				function compiledContent$1j() {
					return html$1j;
				}
				function getHeadings$1j() {
					return [{"depth":1,"slug":"note-questions-for-review","text":"Note Questions for Review"}];
				}

				const Content$1j = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter$1j;
					content.file = file$1j;
					content.url = url$1j;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html$1j)}`;
				});

const __vite_glob_0_185 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	Content: Content$1j,
	compiledContent: compiledContent$1j,
	default: Content$1j,
	file: file$1j,
	frontmatter: frontmatter$1j,
	getHeadings: getHeadings$1j,
	rawContent: rawContent$1j,
	url: url$1j
}, Symbol.toStringTag, { value: 'Module' }));

const html$1i = "<h1 id=\"open-mind-as-an-author\">Open Mind as an Author</h1>\n<p>In the software development world, code reviews are an essential component of a successful and productive team. They provide valuable insights to improve code quality, encourage collaboration, and foster a learning environment. It is vital to approach the review process with an open mind and be willing to learn from and collaborate with other team members. This not only helps you grow as a developer but also contributes to building a positive work atmosphere. In this section, we will discuss some useful tips on maintaining an open-minded attitude during code reviews and ensuring effective collaboration within the team.</p>\n<ul>\n<li>\n<p>Understand that everyone has unique perspectives and strengths: Recognize that your team members may have different areas of expertise and can offer valuable insights.</p>\n</li>\n<li>\n<p>Embrace constructive criticism: Do not take negative feedback personally. Instead, view it as an opportunity to improve and learn.</p>\n</li>\n<li>\n<p>Be patient and polite: Give your colleagues the space and time to express their thoughts, ask questions, and provide feedback.</p>\n</li>\n<li>\n<p>Ask for clarifications: If you’re unsure about a suggestion or comment, ask the reviewer to explain their rationale, instead of making assumptions or getting defensive.</p>\n</li>\n<li>\n<p>Share your knowledge: If you notice room for improvement in someone else’s code, share your knowledge without making the person feel inferior.</p>\n</li>\n<li>\n<p>Be willing to change your approach: If a colleague suggests an alternative solution, consider it seriously and weigh the pros and cons.</p>\n</li>\n<li>\n<p>Learn from the experience: Reflect on each code review, considering the comments and suggestions made. Incorporate the lessons learned in future projects.</p>\n</li>\n</ul>\n<p>By embracing an open-minded and collaborative approach during code reviews, you will not only contribute to a positive work environment but also become a better developer as the team’s collective wisdom helps drive continuous improvement.</p>";

				const frontmatter$1i = {};
				const file$1i = "/workspaces/developer-roadmap/src/data/best-practices/code-review/content/open-mind-author.md";
				const url$1i = undefined;
				function rawContent$1i() {
					return "# Open Mind as an Author\n\nIn the software development world, code reviews are an essential component of a successful and productive team. They provide valuable insights to improve code quality, encourage collaboration, and foster a learning environment. It is vital to approach the review process with an open mind and be willing to learn from and collaborate with other team members. This not only helps you grow as a developer but also contributes to building a positive work atmosphere. In this section, we will discuss some useful tips on maintaining an open-minded attitude during code reviews and ensuring effective collaboration within the team.\n\n- Understand that everyone has unique perspectives and strengths: Recognize that your team members may have different areas of expertise and can offer valuable insights.\n\n- Embrace constructive criticism: Do not take negative feedback personally. Instead, view it as an opportunity to improve and learn.\n\n- Be patient and polite: Give your colleagues the space and time to express their thoughts, ask questions, and provide feedback.\n\n- Ask for clarifications: If you're unsure about a suggestion or comment, ask the reviewer to explain their rationale, instead of making assumptions or getting defensive.\n\n- Share your knowledge: If you notice room for improvement in someone else's code, share your knowledge without making the person feel inferior.\n\n- Be willing to change your approach: If a colleague suggests an alternative solution, consider it seriously and weigh the pros and cons.\n\n- Learn from the experience: Reflect on each code review, considering the comments and suggestions made. Incorporate the lessons learned in future projects.\n\nBy embracing an open-minded and collaborative approach during code reviews, you will not only contribute to a positive work environment but also become a better developer as the team's collective wisdom helps drive continuous improvement.";
				}
				function compiledContent$1i() {
					return html$1i;
				}
				function getHeadings$1i() {
					return [{"depth":1,"slug":"open-mind-as-an-author","text":"Open Mind as an Author"}];
				}

				const Content$1i = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter$1i;
					content.file = file$1i;
					content.url = url$1i;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html$1i)}`;
				});

const __vite_glob_0_186 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	Content: Content$1i,
	compiledContent: compiledContent$1i,
	default: Content$1i,
	file: file$1i,
	frontmatter: frontmatter$1i,
	getHeadings: getHeadings$1i,
	rawContent: rawContent$1i,
	url: url$1i
}, Symbol.toStringTag, { value: 'Module' }));

const html$1h = "<h1 id=\"open-mind-reviewer\">Open Mind Reviewer</h1>\n<p>In the code review process, it’s essential to approach each session with an open mind, with the intention of providing constructive feedback and collaborating with others to improve the overall quality of the code. This mindset helps create a positive environment where team members can learn from each other, share ideas, and develop better coding practices. Remember that everyone’s ultimate goal is to build a robust and efficient product together. To ensure you are effectively contributing to this process, consider the following tips:</p>\n<ul>\n<li>Be respectful: Treat your fellow developers with respect, and always assume they have done their best in the given circumstances.</li>\n<li>Focus on the code, not the person: Concentrate on providing feedback for the code and avoid making personal remarks or assumptions about the author.</li>\n<li>Be patient: Understand that not everyone might have the same level of knowledge or experience as you, and be prepared to explain your suggestions in detail if necessary.</li>\n<li>Be receptive: Be open to suggestions from others and acknowledge when someone proposes a better solution. Incorporate their feedback in future code reviews or your own work to improve your skills.</li>\n<li>Foster a collaborative environment: Encourage open discussions and ask questions if something is unclear. Share your own experiences, challenges, and solutions to promote learning and growth within the team.</li>\n</ul>";

				const frontmatter$1h = {};
				const file$1h = "/workspaces/developer-roadmap/src/data/best-practices/code-review/content/open-mind-reviewer.md";
				const url$1h = undefined;
				function rawContent$1h() {
					return "# Open Mind Reviewer\n\nIn the code review process, it's essential to approach each session with an open mind, with the intention of providing constructive feedback and collaborating with others to improve the overall quality of the code. This mindset helps create a positive environment where team members can learn from each other, share ideas, and develop better coding practices. Remember that everyone's ultimate goal is to build a robust and efficient product together. To ensure you are effectively contributing to this process, consider the following tips: \n\n- Be respectful: Treat your fellow developers with respect, and always assume they have done their best in the given circumstances. \n- Focus on the code, not the person: Concentrate on providing feedback for the code and avoid making personal remarks or assumptions about the author. \n- Be patient: Understand that not everyone might have the same level of knowledge or experience as you, and be prepared to explain your suggestions in detail if necessary. \n- Be receptive: Be open to suggestions from others and acknowledge when someone proposes a better solution. Incorporate their feedback in future code reviews or your own work to improve your skills. \n- Foster a collaborative environment: Encourage open discussions and ask questions if something is unclear. Share your own experiences, challenges, and solutions to promote learning and growth within the team.";
				}
				function compiledContent$1h() {
					return html$1h;
				}
				function getHeadings$1h() {
					return [{"depth":1,"slug":"open-mind-reviewer","text":"Open Mind Reviewer"}];
				}

				const Content$1h = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter$1h;
					content.file = file$1h;
					content.url = url$1h;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html$1h)}`;
				});

const __vite_glob_0_187 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	Content: Content$1h,
	compiledContent: compiledContent$1h,
	default: Content$1h,
	file: file$1h,
	frontmatter: frontmatter$1h,
	getHeadings: getHeadings$1h,
	rawContent: rawContent$1h,
	url: url$1h
}, Symbol.toStringTag, { value: 'Module' }));

const html$1g = "<h1 id=\"pair-programming-reviews\">Pair Programming Reviews</h1>\n<p>When there are a lot of changes to review, it can be difficult to keep track of everything. Pair programming is a great way to ensure that all changes are reviewed and discussed in detail. It also helps to foster collaboration and knowledge sharing between developers. In this section, we will discuss the benefits of pair programming and provide tips on how to make the most of this technique.</p>\n<p>Pair programming is an agile software development technique in which two developers work together at the same computer. One developer writes the code while the other reviews each line of code as it’s written, providing immediate feedback to catch issues early on. This technique can be used as an alternative or supplement to traditional code reviews. Pair programming helps to ensure code quality, reduce defects, and foster knowledge sharing between developers. To make the most of pair programming, consider the following tips:</p>\n<ul>\n<li>Choose partners with complementary skills, so that both participants can learn from each other.</li>\n<li>Set clear expectations about the goals and outcomes of the pair programming session.</li>\n<li>Take regular breaks and swap roles between writing and reviewing code to keep both developers engaged.</li>\n<li>Foster open communication; encourage questions, suggestions, and discussions.</li>\n<li>Regularly reflect on the process and adjust as needed to ensure it remains effective and productive for both developers.</li>\n</ul>";

				const frontmatter$1g = {};
				const file$1g = "/workspaces/developer-roadmap/src/data/best-practices/code-review/content/pair-programming-reviews.md";
				const url$1g = undefined;
				function rawContent$1g() {
					return "# Pair Programming Reviews\n\nWhen there are a lot of changes to review, it can be difficult to keep track of everything. Pair programming is a great way to ensure that all changes are reviewed and discussed in detail. It also helps to foster collaboration and knowledge sharing between developers. In this section, we will discuss the benefits of pair programming and provide tips on how to make the most of this technique.\n\nPair programming is an agile software development technique in which two developers work together at the same computer. One developer writes the code while the other reviews each line of code as it's written, providing immediate feedback to catch issues early on. This technique can be used as an alternative or supplement to traditional code reviews. Pair programming helps to ensure code quality, reduce defects, and foster knowledge sharing between developers. To make the most of pair programming, consider the following tips: \n\n- Choose partners with complementary skills, so that both participants can learn from each other.\n- Set clear expectations about the goals and outcomes of the pair programming session.\n- Take regular breaks and swap roles between writing and reviewing code to keep both developers engaged.\n- Foster open communication; encourage questions, suggestions, and discussions.\n- Regularly reflect on the process and adjust as needed to ensure it remains effective and productive for both developers.";
				}
				function compiledContent$1g() {
					return html$1g;
				}
				function getHeadings$1g() {
					return [{"depth":1,"slug":"pair-programming-reviews","text":"Pair Programming Reviews"}];
				}

				const Content$1g = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter$1g;
					content.file = file$1g;
					content.url = url$1g;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html$1g)}`;
				});

const __vite_glob_0_188 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	Content: Content$1g,
	compiledContent: compiledContent$1g,
	default: Content$1g,
	file: file$1g,
	frontmatter: frontmatter$1g,
	getHeadings: getHeadings$1g,
	rawContent: rawContent$1g,
	url: url$1g
}, Symbol.toStringTag, { value: 'Module' }));

const html$1f = "<h1 id=\"positive-feedback-and-criticism\">Positive Feedback and Criticism</h1>\n<p>In any code review process, providing positive feedback alongside constructive criticism is essential for creating a healthy and collaborative work environment. Recognizing and reinforcing good practices not only boosts team morale, but also encourages the development of robust and maintainable code. As an integral part of the code review process, it is crucial to balance our feedback to avoid discouraging developers and to promote their growth. In this guide, we will discuss some tips to ensure that you provide positive feedback effectively during code reviews.</p>\n<ul>\n<li>Highlight well-written code segments, efficient solutions, or adherence to coding standards, and express appreciation for these efforts.</li>\n<li>Be specific with your positive feedback, and explain clearly what you liked about that particular piece of code.</li>\n<li>Encourage developers to share their thought processes or challenges they overcame during the code implementation, which can foster team learning and make the developers feel valued.</li>\n<li>Regularly acknowledge team members’ hard work and dedication to creating high-quality code. This recognition can foster motivation and dedication.</li>\n<li>When offering constructive criticism, do so in a respectful and supportive manner, framing it as an opportunity for growth and learning.</li>\n</ul>\n<p>By incorporating these tips into your code review process, you can create a more productive and positive experience for the entire team while fostering continuous improvement and collaboration.</p>";

				const frontmatter$1f = {};
				const file$1f = "/workspaces/developer-roadmap/src/data/best-practices/code-review/content/positive-feedback-criticism.md";
				const url$1f = undefined;
				function rawContent$1f() {
					return "# Positive Feedback and Criticism\n\nIn any code review process, providing positive feedback alongside constructive criticism is essential for creating a healthy and collaborative work environment. Recognizing and reinforcing good practices not only boosts team morale, but also encourages the development of robust and maintainable code. As an integral part of the code review process, it is crucial to balance our feedback to avoid discouraging developers and to promote their growth. In this guide, we will discuss some tips to ensure that you provide positive feedback effectively during code reviews.\n\n- Highlight well-written code segments, efficient solutions, or adherence to coding standards, and express appreciation for these efforts.\n- Be specific with your positive feedback, and explain clearly what you liked about that particular piece of code.\n- Encourage developers to share their thought processes or challenges they overcame during the code implementation, which can foster team learning and make the developers feel valued.\n- Regularly acknowledge team members' hard work and dedication to creating high-quality code. This recognition can foster motivation and dedication.\n- When offering constructive criticism, do so in a respectful and supportive manner, framing it as an opportunity for growth and learning.\n\nBy incorporating these tips into your code review process, you can create a more productive and positive experience for the entire team while fostering continuous improvement and collaboration.";
				}
				function compiledContent$1f() {
					return html$1f;
				}
				function getHeadings$1f() {
					return [{"depth":1,"slug":"positive-feedback-and-criticism","text":"Positive Feedback and Criticism"}];
				}

				const Content$1f = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter$1f;
					content.file = file$1f;
					content.url = url$1f;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html$1f)}`;
				});

const __vite_glob_0_189 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	Content: Content$1f,
	compiledContent: compiledContent$1f,
	default: Content$1f,
	file: file$1f,
	frontmatter: frontmatter$1f,
	getHeadings: getHeadings$1f,
	rawContent: rawContent$1f,
	url: url$1f
}, Symbol.toStringTag, { value: 'Module' }));

const html$1e = "<h1 id=\"potential-issues\">Potential Issues</h1>\n<p>Being proactive about potential performance, security and scalability issues can save significant time and effort, as well as ensure that your code is optimized for growth and adaptability. To make sure that you are addressing these concerns during the review, consider the following tips: analyze the complexity of any algorithms used, ensure proper memory management, validate user inputs, and plan for future enhancements. By keeping these factors in mind, you can effectively contribute to building a stable and efficient software solution.</p>";

				const frontmatter$1e = {};
				const file$1e = "/workspaces/developer-roadmap/src/data/best-practices/code-review/content/potential-issues-review.md";
				const url$1e = undefined;
				function rawContent$1e() {
					return "# Potential Issues\n\nBeing proactive about potential performance, security and scalability issues can save significant time and effort, as well as ensure that your code is optimized for growth and adaptability. To make sure that you are addressing these concerns during the review, consider the following tips: analyze the complexity of any algorithms used, ensure proper memory management, validate user inputs, and plan for future enhancements. By keeping these factors in mind, you can effectively contribute to building a stable and efficient software solution.";
				}
				function compiledContent$1e() {
					return html$1e;
				}
				function getHeadings$1e() {
					return [{"depth":1,"slug":"potential-issues","text":"Potential Issues"}];
				}

				const Content$1e = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter$1e;
					content.file = file$1e;
					content.url = url$1e;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html$1e)}`;
				});

const __vite_glob_0_190 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	Content: Content$1e,
	compiledContent: compiledContent$1e,
	default: Content$1e,
	file: file$1e,
	frontmatter: frontmatter$1e,
	getHeadings: getHeadings$1e,
	rawContent: rawContent$1e,
	url: url$1e
}, Symbol.toStringTag, { value: 'Module' }));

const html$1d = "<h1 id=\"potential-issues\">Potential Issues</h1>\n<p>Code reviews are a crucial part of ensuring the quality, maintainability, and efficiency of software. One particularly important aspect of a code review is identifying potential performance, security, and scalability concerns. This involves examining the submitted code for any areas where it may not perform well, exhibit vulnerabilities, or have difficulty handling increased usage. As a code reviewer, it is your responsibility to discuss these concerns with the author and offer suggestions for improvement. This ensures the final product is not only functionally correct but also delivers a robust and stable experience for its users. In this section, we will provide some tips on how to effectively evaluate code for performance, security, and scalability during a review, and how to address any issues that arise.</p>";

				const frontmatter$1d = {};
				const file$1d = "/workspaces/developer-roadmap/src/data/best-practices/code-review/content/potential-issues-reviewer.md";
				const url$1d = undefined;
				function rawContent$1d() {
					return "# Potential Issues\n\nCode reviews are a crucial part of ensuring the quality, maintainability, and efficiency of software. One particularly important aspect of a code review is identifying potential performance, security, and scalability concerns. This involves examining the submitted code for any areas where it may not perform well, exhibit vulnerabilities, or have difficulty handling increased usage. As a code reviewer, it is your responsibility to discuss these concerns with the author and offer suggestions for improvement. This ensures the final product is not only functionally correct but also delivers a robust and stable experience for its users. In this section, we will provide some tips on how to effectively evaluate code for performance, security, and scalability during a review, and how to address any issues that arise.";
				}
				function compiledContent$1d() {
					return html$1d;
				}
				function getHeadings$1d() {
					return [{"depth":1,"slug":"potential-issues","text":"Potential Issues"}];
				}

				const Content$1d = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter$1d;
					content.file = file$1d;
					content.url = url$1d;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html$1d)}`;
				});

const __vite_glob_0_191 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	Content: Content$1d,
	compiledContent: compiledContent$1d,
	default: Content$1d,
	file: file$1d,
	frontmatter: frontmatter$1d,
	getHeadings: getHeadings$1d,
	rawContent: rawContent$1d,
	url: url$1d
}, Symbol.toStringTag, { value: 'Module' }));

const html$1c = "<h1 id=\"prepare-a-list\">Prepare a List</h1>\n<p>In a code review process, it’s essential to ensure that all the requirements or user stories for a specific feature or bug fix have been adequately addressed in the code changes submitted for review. To achieve this, preparing a checklist of items or requirements to be covered in the changes can help streamline the review process and ensure that nothing is missed. This not only improves the overall quality of the code but also saves time and effort in potential rework. In this section, we will go over some tips on how to create a list of items that should have been covered in the changes and ensure that the code complies with them.</p>\n<ul>\n<li>\n<p>Familiarize yourself with the requirements: Thoroughly analyze the project’s requirements documentation or user stories and identify the key components that need to be addressed in the code changes.</p>\n</li>\n<li>\n<p>Create a checklist: Based on the requirements, create a comprehensive checklist of items that must be covered in the code changes. Break complex requirements down into smaller tasks to ensure every aspect is addressed.</p>\n</li>\n<li>\n<p>Evaluate the code changes: As you review the code, cross-check with your checklist to ensure that each item has been taken into account. If anything is missing or not up to the mark, provide specific feedback in the review comments.</p>\n</li>\n<li>\n<p>Assess test coverage: Make sure that the code changes are supported by appropriate unit or integration tests, which cover the main requirements in the checklist. High-quality tests are crucial to prevent future regressions and ensure the code fulfills its intended purpose.</p>\n</li>\n<li>\n<p>Ensure clear communication: Share your requirements checklist with the developer at the start of the code review process. This will help them understand your expectations and provide a solid foundation for a smooth and constructive review.</p>\n</li>\n</ul>\n<p>By creating and utilizing a requirements checklist, code reviewers can more effectively ensure that the submitted code changes adhere to the project’s requirements and ultimately result in higher-quality software.</p>";

				const frontmatter$1c = {};
				const file$1c = "/workspaces/developer-roadmap/src/data/best-practices/code-review/content/prepare-list.md";
				const url$1c = undefined;
				function rawContent$1c() {
					return "# Prepare a List\n\nIn a code review process, it's essential to ensure that all the requirements or user stories for a specific feature or bug fix have been adequately addressed in the code changes submitted for review. To achieve this, preparing a checklist of items or requirements to be covered in the changes can help streamline the review process and ensure that nothing is missed. This not only improves the overall quality of the code but also saves time and effort in potential rework. In this section, we will go over some tips on how to create a list of items that should have been covered in the changes and ensure that the code complies with them.\n\n- Familiarize yourself with the requirements: Thoroughly analyze the project's requirements documentation or user stories and identify the key components that need to be addressed in the code changes.\n\n- Create a checklist: Based on the requirements, create a comprehensive checklist of items that must be covered in the code changes. Break complex requirements down into smaller tasks to ensure every aspect is addressed.\n\n- Evaluate the code changes: As you review the code, cross-check with your checklist to ensure that each item has been taken into account. If anything is missing or not up to the mark, provide specific feedback in the review comments.\n\n- Assess test coverage: Make sure that the code changes are supported by appropriate unit or integration tests, which cover the main requirements in the checklist. High-quality tests are crucial to prevent future regressions and ensure the code fulfills its intended purpose.\n\n- Ensure clear communication: Share your requirements checklist with the developer at the start of the code review process. This will help them understand your expectations and provide a solid foundation for a smooth and constructive review.\n\nBy creating and utilizing a requirements checklist, code reviewers can more effectively ensure that the submitted code changes adhere to the project's requirements and ultimately result in higher-quality software.";
				}
				function compiledContent$1c() {
					return html$1c;
				}
				function getHeadings$1c() {
					return [{"depth":1,"slug":"prepare-a-list","text":"Prepare a List"}];
				}

				const Content$1c = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter$1c;
					content.file = file$1c;
					content.url = url$1c;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html$1c)}`;
				});

const __vite_glob_0_192 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	Content: Content$1c,
	compiledContent: compiledContent$1c,
	default: Content$1c,
	file: file$1c,
	frontmatter: frontmatter$1c,
	getHeadings: getHeadings$1c,
	rawContent: rawContent$1c,
	url: url$1c
}, Symbol.toStringTag, { value: 'Module' }));

const html$1b = "<h1 id=\"prioritize-feedback\">Prioritize Feedback</h1>\n<p>Tackling the most important issues first ensures that the developer’s time is well-spent in addressing high-impact concerns, resulting in a higher quality product with fewer critical issues. As the author of this guide, I would like to share some practical tips to ensure that you prioritize your feedback effectively:</p>\n<ul>\n<li>Clearly define the goals and objectives of the code review process, so you can align your feedback with those priorities.</li>\n<li>Categorize your observations into ‘high’, ‘medium’, and ‘low’ priority, based on the impact they have on the code’s performance, security, and maintainability.</li>\n<li>Understand the context of the code changes and the corresponding requirements, to ensure you’re addressing the most relevant issues first.</li>\n<li>Focus on identifying and resolving design issues, performance bottlenecks, and potential security vulnerabilities before diving into stylistic or formatting concerns.</li>\n<li>Discuss priorities with the team and get a consensus on the order in which issues should be addressed, to ensure that everyone’s input is considered in shaping the priorities.</li>\n</ul>\n<p>By paying close attention to these tips, you can ensure that your code review feedback is consistently aligned with the highest-priority concerns, maximizing the value of the code review process for both yourself and your teammates.</p>";

				const frontmatter$1b = {};
				const file$1b = "/workspaces/developer-roadmap/src/data/best-practices/code-review/content/prioritize-feedback.md";
				const url$1b = undefined;
				function rawContent$1b() {
					return "# Prioritize Feedback\n\nTackling the most important issues first ensures that the developer's time is well-spent in addressing high-impact concerns, resulting in a higher quality product with fewer critical issues. As the author of this guide, I would like to share some practical tips to ensure that you prioritize your feedback effectively:\n\n- Clearly define the goals and objectives of the code review process, so you can align your feedback with those priorities.\n- Categorize your observations into 'high', 'medium', and 'low' priority, based on the impact they have on the code's performance, security, and maintainability.\n- Understand the context of the code changes and the corresponding requirements, to ensure you're addressing the most relevant issues first.\n- Focus on identifying and resolving design issues, performance bottlenecks, and potential security vulnerabilities before diving into stylistic or formatting concerns.\n- Discuss priorities with the team and get a consensus on the order in which issues should be addressed, to ensure that everyone's input is considered in shaping the priorities.\n\nBy paying close attention to these tips, you can ensure that your code review feedback is consistently aligned with the highest-priority concerns, maximizing the value of the code review process for both yourself and your teammates.";
				}
				function compiledContent$1b() {
					return html$1b;
				}
				function getHeadings$1b() {
					return [{"depth":1,"slug":"prioritize-feedback","text":"Prioritize Feedback"}];
				}

				const Content$1b = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter$1b;
					content.file = file$1b;
					content.url = url$1b;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html$1b)}`;
				});

const __vite_glob_0_193 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	Content: Content$1b,
	compiledContent: compiledContent$1b,
	default: Content$1b,
	file: file$1b,
	frontmatter: frontmatter$1b,
	getHeadings: getHeadings$1b,
	rawContent: rawContent$1b,
	url: url$1b
}, Symbol.toStringTag, { value: 'Module' }));

const html$1a = "<h1 id=\"be-professional\">Be Professional</h1>\n<p>When engaged in reviewing your peers’ work, it’s crucial to approach each comment and suggestion with tact and empathy, ensuring that your communication remains constructive and free from personal attacks or derogatory remarks. To make sure you abide by this best practice and foster a positive team dynamic, here are some tips to guide your feedback approach:</p>\n<ul>\n<li>\n<p>Focus on the code, not the person: Address the code changes and avoid directing comments towards the individual who submitted the code.</p>\n</li>\n<li>\n<p>Use neutral language: Keep your language objective and non-inflammatory, steering clear of words or phrases that may be perceived as aggressive, dismissive, or condescending.</p>\n</li>\n<li>\n<p>Be specific and clear: Offer feedback that is direct and actionable, outlining any areas of concern or suggested improvements with clarity and detail.</p>\n</li>\n<li>\n<p>Be open to questions and discussion: Encourage open dialogue by inviting questions or alternative viewpoints, demonstrating a willingness to listen and learn from others.</p>\n</li>\n<li>\n<p>Offer praise alongside critiques: Celebrate the successes of your team members, acknowledging their hard work and achievements as you address any issues or opportunities for growth.</p>\n</li>\n<li>\n<p>Remember the human element: Keep in mind that there’s a person behind every code submission - remain empathetic, respectful, and patient throughout the code review process.</p>\n</li>\n</ul>";

				const frontmatter$1a = {};
				const file$1a = "/workspaces/developer-roadmap/src/data/best-practices/code-review/content/professional-feedback.md";
				const url$1a = undefined;
				function rawContent$1a() {
					return "# Be Professional\n\nWhen engaged in reviewing your peers' work, it's crucial to approach each comment and suggestion with tact and empathy, ensuring that your communication remains constructive and free from personal attacks or derogatory remarks. To make sure you abide by this best practice and foster a positive team dynamic, here are some tips to guide your feedback approach:\n\n- Focus on the code, not the person: Address the code changes and avoid directing comments towards the individual who submitted the code.\n\n- Use neutral language: Keep your language objective and non-inflammatory, steering clear of words or phrases that may be perceived as aggressive, dismissive, or condescending.\n\n- Be specific and clear: Offer feedback that is direct and actionable, outlining any areas of concern or suggested improvements with clarity and detail.\n\n- Be open to questions and discussion: Encourage open dialogue by inviting questions or alternative viewpoints, demonstrating a willingness to listen and learn from others.\n\n- Offer praise alongside critiques: Celebrate the successes of your team members, acknowledging their hard work and achievements as you address any issues or opportunities for growth.\n\n- Remember the human element: Keep in mind that there's a person behind every code submission - remain empathetic, respectful, and patient throughout the code review process.";
				}
				function compiledContent$1a() {
					return html$1a;
				}
				function getHeadings$1a() {
					return [{"depth":1,"slug":"be-professional","text":"Be Professional"}];
				}

				const Content$1a = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter$1a;
					content.file = file$1a;
					content.url = url$1a;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html$1a)}`;
				});

const __vite_glob_0_194 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	Content: Content$1a,
	compiledContent: compiledContent$1a,
	default: Content$1a,
	file: file$1a,
	frontmatter: frontmatter$1a,
	getHeadings: getHeadings$1a,
	rawContent: rawContent$1a,
	url: url$1a
}, Symbol.toStringTag, { value: 'Module' }));

const html$19 = "<h1 id=\"about-pull-requests\">About Pull Requests</h1>\n<p>Providing a proper title, description, screenshots, relevant links, and configuration changes helps reviewers quickly grasp the purpose, functionality, and any other important context associated with the changes introduced by the PR. To ensure the quality and effectiveness of your PR documentation, follow these helpful tips:</p>\n<ul>\n<li>\n<p><strong>Title</strong>: Choose a clear and concise title, summarizing the main purpose or functionality added by the changes.</p>\n</li>\n<li>\n<p><strong>Description</strong>: Write a thorough description of what your changes do, how they work, and any potential side effects or limitations. Make sure to include information about the problem you are solving or the feature you are implementing.</p>\n</li>\n<li>\n<p><strong>Screenshots</strong>: If your changes involve visual elements or affect the user interface, include screenshots to give reviewers a better understanding of the visual impact.</p>\n</li>\n<li>\n<p><strong>Relevant Links</strong>: Provide any relevant links, such as issue trackers, feature requests, or design documents, to aid reviewers in understanding the context of your work.</p>\n</li>\n<li>\n<p><strong>Configuration Changes</strong>: Mention any changes in configuration settings or introduce any new settings that are required to run or test your code. Explain how these settings should be used and what their default values should be.</p>\n</li>\n</ul>\n<p>By following these tips, you can streamline the code review process, making it easier for your peers to understand and evaluate your work while minimizing potential confusion or miscommunication.</p>";

				const frontmatter$19 = {};
				const file$19 = "/workspaces/developer-roadmap/src/data/best-practices/code-review/content/proper-description-pr.md";
				const url$19 = undefined;
				function rawContent$19() {
					return "# About Pull Requests\n\nProviding a proper title, description, screenshots, relevant links, and configuration changes helps reviewers quickly grasp the purpose, functionality, and any other important context associated with the changes introduced by the PR. To ensure the quality and effectiveness of your PR documentation, follow these helpful tips:\n\n- **Title**: Choose a clear and concise title, summarizing the main purpose or functionality added by the changes.\n\n- **Description**: Write a thorough description of what your changes do, how they work, and any potential side effects or limitations. Make sure to include information about the problem you are solving or the feature you are implementing.\n\n- **Screenshots**: If your changes involve visual elements or affect the user interface, include screenshots to give reviewers a better understanding of the visual impact.\n\n- **Relevant Links**: Provide any relevant links, such as issue trackers, feature requests, or design documents, to aid reviewers in understanding the context of your work.\n\n- **Configuration Changes**: Mention any changes in configuration settings or introduce any new settings that are required to run or test your code. Explain how these settings should be used and what their default values should be.\n\nBy following these tips, you can streamline the code review process, making it easier for your peers to understand and evaluate your work while minimizing potential confusion or miscommunication.";
				}
				function compiledContent$19() {
					return html$19;
				}
				function getHeadings$19() {
					return [{"depth":1,"slug":"about-pull-requests","text":"About Pull Requests"}];
				}

				const Content$19 = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter$19;
					content.file = file$19;
					content.url = url$19;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html$19)}`;
				});

const __vite_glob_0_195 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	Content: Content$19,
	compiledContent: compiledContent$19,
	default: Content$19,
	file: file$19,
	frontmatter: frontmatter$19,
	getHeadings: getHeadings$19,
	rawContent: rawContent$19,
	url: url$19
}, Symbol.toStringTag, { value: 'Module' }));

const html$18 = "<h1 id=\"quality-of-code\">Quality of Code</h1>\n<p>As a code reviewer, your role is not limited to just identifying bugs and potential errors. You must also assess whether the code is easy to understand, modify, and adapt to various scenarios. To ensure that you cover all aspects of this crucial evaluation, here are some tips to help you examine code quality:</p>\n<ul>\n<li>\n<p>Readability: Check if the code uses meaningful variable and function names, proper indentation, and clear comments. Make sure it follows the established coding conventions of its programming language.</p>\n</li>\n<li>\n<p>Maintainability: Look for code duplication, overly complex logic, or tightly-coupled modules that make the code difficult to modify or extend. Encourage the use of modular, reusable components and adherence to the DRY (Don’t Repeat Yourself) principle.</p>\n</li>\n<li>\n<p>Scalability: Evaluate if the code can handle increasing workloads, users, or data sizes without significant performance degradation. Identify bottlenecks or resource-heavy operations, and suggest optimizations or alternative solutions when appropriate.</p>\n</li>\n</ul>\n<p>By emphasizing these three aspects during code review, you will promote a culture of high-quality code that is easy to collaborate on and adapt for future requirements.</p>";

				const frontmatter$18 = {};
				const file$18 = "/workspaces/developer-roadmap/src/data/best-practices/code-review/content/quality-code-overall.md";
				const url$18 = undefined;
				function rawContent$18() {
					return "# Quality of Code\n\nAs a code reviewer, your role is not limited to just identifying bugs and potential errors. You must also assess whether the code is easy to understand, modify, and adapt to various scenarios. To ensure that you cover all aspects of this crucial evaluation, here are some tips to help you examine code quality:\n\n- Readability: Check if the code uses meaningful variable and function names, proper indentation, and clear comments. Make sure it follows the established coding conventions of its programming language.\n\n- Maintainability: Look for code duplication, overly complex logic, or tightly-coupled modules that make the code difficult to modify or extend. Encourage the use of modular, reusable components and adherence to the DRY (Don't Repeat Yourself) principle.\n\n- Scalability: Evaluate if the code can handle increasing workloads, users, or data sizes without significant performance degradation. Identify bottlenecks or resource-heavy operations, and suggest optimizations or alternative solutions when appropriate.\n\nBy emphasizing these three aspects during code review, you will promote a culture of high-quality code that is easy to collaborate on and adapt for future requirements.";
				}
				function compiledContent$18() {
					return html$18;
				}
				function getHeadings$18() {
					return [{"depth":1,"slug":"quality-of-code","text":"Quality of Code"}];
				}

				const Content$18 = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter$18;
					content.file = file$18;
					content.url = url$18;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html$18)}`;
				});

const __vite_glob_0_196 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	Content: Content$18,
	compiledContent: compiledContent$18,
	default: Content$18,
	file: file$18,
	frontmatter: frontmatter$18,
	getHeadings: getHeadings$18,
	rawContent: rawContent$18,
	url: url$18
}, Symbol.toStringTag, { value: 'Module' }));

const html$17 = "<h1 id=\"verify-that-all-tests-pass\">Verify that all tests pass</h1>\n<p>In the code review process, it is essential to ensure that all tests pass before merging changes into the main codebase. This practice, often referred to as “run the tests again and ensure they all pass,” is vital for maintaining the stability, reliability, and quality of your software. By running tests after making changes or approving code, you can catch potential issues that may have been introduced during the development process. Below are some tips to help you verify that all tests pass effectively:</p>\n<ul>\n<li>\n<p>Keep your test suite up-to-date: As new features are added or existing ones modified, it’s crucial to update your test suite to cover the changes.</p>\n</li>\n<li>\n<p>Implement Continuous Integration (CI): Integrate tools in your development pipeline that automatically run tests when changes are made to the codebase, thereby reducing manual intervention.</p>\n</li>\n<li>\n<p>Use pre-commit hooks: Ensure you run the test suite before any new commits occur. Pre-commit hooks can be set up to trigger tests automatically before a commit is made.</p>\n</li>\n<li>\n<p>Communicate with the team: In case the tests fail, promptly inform the involved developer to address the issue. Encourage collaboration for quicker resolution.</p>\n</li>\n<li>\n<p>Review the tests themselves: Make sure the tests are well-written, adequately cover your code, and are not overly complex. A good balance of unit, integration, and end-to-end tests can contribute to a more resilient codebase.</p>\n</li>\n</ul>\n<p>By following these best practices, you’ll be better equipped to ensure that all tests pass and maintain a high-quality, robust software product.</p>";

				const frontmatter$17 = {};
				const file$17 = "/workspaces/developer-roadmap/src/data/best-practices/code-review/content/re-run-tests-verify.md";
				const url$17 = undefined;
				function rawContent$17() {
					return "# Verify that all tests pass\n\nIn the code review process, it is essential to ensure that all tests pass before merging changes into the main codebase. This practice, often referred to as \"run the tests again and ensure they all pass,\" is vital for maintaining the stability, reliability, and quality of your software. By running tests after making changes or approving code, you can catch potential issues that may have been introduced during the development process. Below are some tips to help you verify that all tests pass effectively:\n\n- Keep your test suite up-to-date: As new features are added or existing ones modified, it's crucial to update your test suite to cover the changes.\n\n- Implement Continuous Integration (CI): Integrate tools in your development pipeline that automatically run tests when changes are made to the codebase, thereby reducing manual intervention.\n\n- Use pre-commit hooks: Ensure you run the test suite before any new commits occur. Pre-commit hooks can be set up to trigger tests automatically before a commit is made.\n\n- Communicate with the team: In case the tests fail, promptly inform the involved developer to address the issue. Encourage collaboration for quicker resolution.\n\n- Review the tests themselves: Make sure the tests are well-written, adequately cover your code, and are not overly complex. A good balance of unit, integration, and end-to-end tests can contribute to a more resilient codebase.\n\nBy following these best practices, you'll be better equipped to ensure that all tests pass and maintain a high-quality, robust software product.";
				}
				function compiledContent$17() {
					return html$17;
				}
				function getHeadings$17() {
					return [{"depth":1,"slug":"verify-that-all-tests-pass","text":"Verify that all tests pass"}];
				}

				const Content$17 = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter$17;
					content.file = file$17;
					content.url = url$17;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html$17)}`;
				});

const __vite_glob_0_197 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	Content: Content$17,
	compiledContent: compiledContent$17,
	default: Content$17,
	file: file$17,
	frontmatter: frontmatter$17,
	getHeadings: getHeadings$17,
	rawContent: rawContent$17,
	url: url$17
}, Symbol.toStringTag, { value: 'Module' }));

const html$16 = "<h1 id=\"recognition-and-rewards\">Recognition and Rewards</h1>\n<p>Recognizing and rewarding individuals who consistently provide quality feedback during code reviews is a vital aspect of nurturing a healthy and efficient software development environment. When team members feel appreciated for their valuable input, they are more likely to take code reviews seriously and continue contributing to improve the codebase. In this section, we will discuss various techniques and approaches to ensure that those who consistently offer high-quality feedback are duly acknowledged and rewarded for their efforts. This recognition not only fosters a culture of collaboration but also motivates others to raise the bar on the caliber of their input during code reviews.</p>";

				const frontmatter$16 = {};
				const file$16 = "/workspaces/developer-roadmap/src/data/best-practices/code-review/content/recognition-rewards.md";
				const url$16 = undefined;
				function rawContent$16() {
					return "# Recognition and Rewards\n\nRecognizing and rewarding individuals who consistently provide quality feedback during code reviews is a vital aspect of nurturing a healthy and efficient software development environment. When team members feel appreciated for their valuable input, they are more likely to take code reviews seriously and continue contributing to improve the codebase. In this section, we will discuss various techniques and approaches to ensure that those who consistently offer high-quality feedback are duly acknowledged and rewarded for their efforts. This recognition not only fosters a culture of collaboration but also motivates others to raise the bar on the caliber of their input during code reviews.";
				}
				function compiledContent$16() {
					return html$16;
				}
				function getHeadings$16() {
					return [{"depth":1,"slug":"recognition-and-rewards","text":"Recognition and Rewards"}];
				}

				const Content$16 = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter$16;
					content.file = file$16;
					content.url = url$16;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html$16)}`;
				});

const __vite_glob_0_198 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	Content: Content$16,
	compiledContent: compiledContent$16,
	default: Content$16,
	file: file$16,
	frontmatter: frontmatter$16,
	getHeadings: getHeadings$16,
	rawContent: rawContent$16,
	url: url$16
}, Symbol.toStringTag, { value: 'Module' }));

const html$15 = "<h1 id=\"resolve-conflicts-timely\">Resolve Conflicts Timely</h1>\n<p>When working on collaborative projects, conflicting opinions on various aspects of the code are unavoidable. It’s crucial to resolve these differences in a timely manner to keep the development process moving forward smoothly; allowing a pull request (PR) to sit idle due to disagreement can cause unnecessary delays and foster resentment among team members. To ensure conflicting opinions are addressed promptly and constructively, consider the following tips:</p>\n<ul>\n<li>\n<p>Foster Open Communication: Encourage team members to share their thoughts and opinions openly, while maintaining a respectful and supportive environment.</p>\n</li>\n<li>\n<p>Clearly Define the Criteria for Code Review: Having clear guidelines for what is expected in a code review can reduce the number of subjective opinions and help focus the discussion on relevant aspects.</p>\n</li>\n<li>\n<p>Assign a Mediator or Decision-Maker: When conflicting opinions arise, designate a trusted individual to act as a mediator, or authorize them to make a final decision after considering all viewpoints.</p>\n</li>\n<li>\n<p>Strive for Consensus: Encourage team members to actively seek consensus, emphasizing the importance of compromise and collaboration.</p>\n</li>\n<li>\n<p>Set Deadlines: Establish a reasonable timeframe for addressing disagreements and ensuring a timely resolution.</p>\n</li>\n</ul>\n<p>Remember, the goal of code reviews is to improve code quality and foster a positive, collaborative work environment. By addressing conflicting opinions promptly and thoughtfully, you pave the way for more efficient, effective, and harmonious development processes.</p>";

				const frontmatter$15 = {};
				const file$15 = "/workspaces/developer-roadmap/src/data/best-practices/code-review/content/resolve-conflicts-timely.md";
				const url$15 = undefined;
				function rawContent$15() {
					return "# Resolve Conflicts Timely\n\nWhen working on collaborative projects, conflicting opinions on various aspects of the code are unavoidable. It's crucial to resolve these differences in a timely manner to keep the development process moving forward smoothly; allowing a pull request (PR) to sit idle due to disagreement can cause unnecessary delays and foster resentment among team members. To ensure conflicting opinions are addressed promptly and constructively, consider the following tips:\n\n- Foster Open Communication: Encourage team members to share their thoughts and opinions openly, while maintaining a respectful and supportive environment.\n\n- Clearly Define the Criteria for Code Review: Having clear guidelines for what is expected in a code review can reduce the number of subjective opinions and help focus the discussion on relevant aspects.\n\n- Assign a Mediator or Decision-Maker: When conflicting opinions arise, designate a trusted individual to act as a mediator, or authorize them to make a final decision after considering all viewpoints.\n\n- Strive for Consensus: Encourage team members to actively seek consensus, emphasizing the importance of compromise and collaboration.\n\n- Set Deadlines: Establish a reasonable timeframe for addressing disagreements and ensuring a timely resolution.\n\nRemember, the goal of code reviews is to improve code quality and foster a positive, collaborative work environment. By addressing conflicting opinions promptly and thoughtfully, you pave the way for more efficient, effective, and harmonious development processes.";
				}
				function compiledContent$15() {
					return html$15;
				}
				function getHeadings$15() {
					return [{"depth":1,"slug":"resolve-conflicts-timely","text":"Resolve Conflicts Timely"}];
				}

				const Content$15 = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter$15;
					content.file = file$15;
					content.url = url$15;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html$15)}`;
				});

const __vite_glob_0_199 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	Content: Content$15,
	compiledContent: compiledContent$15,
	default: Content$15,
	file: file$15,
	frontmatter: frontmatter$15,
	getHeadings: getHeadings$15,
	rawContent: rawContent$15,
	url: url$15
}, Symbol.toStringTag, { value: 'Module' }));

const html$14 = "<h1 id=\"review-documentation-and-design-specifications\">Review Documentation and Design Specifications</h1>\n<p>In the process of code review, it is of utmost importance to not only focus on the source code but also to review any associated documentation or design specifications related to the change. This ensures that the implementation adheres to the initial plan and provides a comprehensive understanding of the proposed modifications. To make sure you follow this best practice effectively, consider the following tips:</p>\n<ul>\n<li>\n<p>Familiarize yourself with the project’s documentation standards and guidelines to evaluate if the submitted documents comply with these expectations.</p>\n</li>\n<li>\n<p>Compare the design specifications with the actual code changes to ensure that the implementation is consistent with the planned design.</p>\n</li>\n<li>\n<p>Look for any discrepancies or missing information in the documentation and design specifications. This can include gaps in explanation, assumptions, or unclear information that might lead to misunderstandings or inconsistencies in the implementation.</p>\n</li>\n<li>\n<p>Verify if the documentation accurately captures the impact of the change on other parts of the system, e.g., dependencies, performance, or security implications.</p>\n</li>\n<li>\n<p>Check if the documentation is updated to reflect any changes in the code, such as modifications to APIs, user interfaces, or functionality.</p>\n</li>\n</ul>\n<p>Remember that reviewing documentation and design specifications helps ensure clarity and maintainability of the project, making it easier for everyone involved to contribute effectively.</p>";

				const frontmatter$14 = {};
				const file$14 = "/workspaces/developer-roadmap/src/data/best-practices/code-review/content/review-docs-design.md";
				const url$14 = undefined;
				function rawContent$14() {
					return "# Review Documentation and Design Specifications\n\nIn the process of code review, it is of utmost importance to not only focus on the source code but also to review any associated documentation or design specifications related to the change. This ensures that the implementation adheres to the initial plan and provides a comprehensive understanding of the proposed modifications. To make sure you follow this best practice effectively, consider the following tips:\n\n- Familiarize yourself with the project's documentation standards and guidelines to evaluate if the submitted documents comply with these expectations.\n\n- Compare the design specifications with the actual code changes to ensure that the implementation is consistent with the planned design.\n\n- Look for any discrepancies or missing information in the documentation and design specifications. This can include gaps in explanation, assumptions, or unclear information that might lead to misunderstandings or inconsistencies in the implementation.\n\n- Verify if the documentation accurately captures the impact of the change on other parts of the system, e.g., dependencies, performance, or security implications.\n\n- Check if the documentation is updated to reflect any changes in the code, such as modifications to APIs, user interfaces, or functionality.\n\nRemember that reviewing documentation and design specifications helps ensure clarity and maintainability of the project, making it easier for everyone involved to contribute effectively.";
				}
				function compiledContent$14() {
					return html$14;
				}
				function getHeadings$14() {
					return [{"depth":1,"slug":"review-documentation-and-design-specifications","text":"Review Documentation and Design Specifications"}];
				}

				const Content$14 = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter$14;
					content.file = file$14;
					content.url = url$14;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html$14)}`;
				});

const __vite_glob_0_200 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	Content: Content$14,
	compiledContent: compiledContent$14,
	default: Content$14,
	file: file$14,
	frontmatter: frontmatter$14,
	getHeadings: getHeadings$14,
	rawContent: rawContent$14,
	url: url$14
}, Symbol.toStringTag, { value: 'Module' }));

const html$13 = "<h1 id=\"documentation-is-updated\">Documentation is Updated</h1>\n<p>Proper documentation serves as a guide for future developers, allowing them to easily understand, maintain and enhance the existing codebase. In addition, good documentation can also save time, mitigate confusion, and reduce errors among team members. To make sure that the relevant documentation is up-to-date and precise, follow these tips:</p>\n<ul>\n<li>\n<p>Require updated documentation as part of the code review process: Make it a standard practice for developers to submit updates to the relevant documentation along with their code changes.</p>\n</li>\n<li>\n<p>Check for consistency and accuracy: Review the updated documentation to ensure it accurately and clearly reflects the changes made in the code. This includes following naming conventions, correct syntax, and descriptions of the new features or functions.</p>\n</li>\n<li>\n<p>Assess whether there are any missing sections: Look for parts of the code that may have been altered or added but have not been documented. Make sure to remind the developer to provide appropriate documentation for these changes as well.</p>\n</li>\n<li>\n<p>Encourage detailed comments in the code: Ensure that the contributors sufficiently explain their changes within the code itself. While not a strict replacement for external documentation, code comments are invaluable for understanding the intent behind the code.</p>\n</li>\n<li>\n<p>Keep documentation easy to maintain: Suggest using clear, concise language and a consistent format throughout the documentation, making it easier for team members to maintain and update as needed.</p>\n</li>\n</ul>\n<p>By following these tips, you will ensure that your team’s documentation stays up-to-date, providing a valuable resource to support the continued quality and maintainability of your codebase.</p>";

				const frontmatter$13 = {};
				const file$13 = "/workspaces/developer-roadmap/src/data/best-practices/code-review/content/review-docs-updated.md";
				const url$13 = undefined;
				function rawContent$13() {
					return "# Documentation is Updated\n\nProper documentation serves as a guide for future developers, allowing them to easily understand, maintain and enhance the existing codebase. In addition, good documentation can also save time, mitigate confusion, and reduce errors among team members. To make sure that the relevant documentation is up-to-date and precise, follow these tips:\n\n- Require updated documentation as part of the code review process: Make it a standard practice for developers to submit updates to the relevant documentation along with their code changes.\n\n- Check for consistency and accuracy: Review the updated documentation to ensure it accurately and clearly reflects the changes made in the code. This includes following naming conventions, correct syntax, and descriptions of the new features or functions.\n\n- Assess whether there are any missing sections: Look for parts of the code that may have been altered or added but have not been documented. Make sure to remind the developer to provide appropriate documentation for these changes as well.\n\n- Encourage detailed comments in the code: Ensure that the contributors sufficiently explain their changes within the code itself. While not a strict replacement for external documentation, code comments are invaluable for understanding the intent behind the code.\n\n- Keep documentation easy to maintain: Suggest using clear, concise language and a consistent format throughout the documentation, making it easier for team members to maintain and update as needed.\n\nBy following these tips, you will ensure that your team's documentation stays up-to-date, providing a valuable resource to support the continued quality and maintainability of your codebase.";
				}
				function compiledContent$13() {
					return html$13;
				}
				function getHeadings$13() {
					return [{"depth":1,"slug":"documentation-is-updated","text":"Documentation is Updated"}];
				}

				const Content$13 = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter$13;
					content.file = file$13;
					content.url = url$13;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html$13)}`;
				});

const __vite_glob_0_201 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	Content: Content$13,
	compiledContent: compiledContent$13,
	default: Content$13,
	file: file$13,
	frontmatter: frontmatter$13,
	getHeadings: getHeadings$13,
	rawContent: rawContent$13,
	url: url$13
}, Symbol.toStringTag, { value: 'Module' }));

const html$12 = "<h1 id=\"reviewing-tests\">Reviewing Tests</h1>\n<p>One of the essential aspects of code review is evaluating the tests accompanying the code changes. Ensuring these tests adequately cover functionality and edge cases is crucial for maintaining the reliability and stability of the software. This involves examining the structure and design of tests, as well as the effectiveness in confirming the code behaves as expected. It is vital for a code reviewer to focus on whether the tests cover all possible scenarios and comprehensively test the code change, from regular usage to potential edge cases that may cause issues. Here are a few tips to help guide you through this process:</p>\n<ul>\n<li>Assess test coverage: Examine the range of test cases provided to ensure they appropriately test not only the basic functionality but also various edge cases and potential error scenarios.</li>\n<li>Investigate test design: Evaluate the design of the test suite, ensuring each test serves a specific purpose and that they are organized and maintainable.</li>\n<li>Verify the implementation: Check the implementation of each test, making sure it is correctly set up and achieves the desired outcome.</li>\n<li>Prioritize critical areas: Pay special attention to complex or crucial code sections to confirm they have adequate test coverage.</li>\n<li>Look for potential scenarios: Be proactive in identifying any additional scenarios that might not have been covered, and suggest improvements or new test cases to better validate these situations.</li>\n</ul>";

				const frontmatter$12 = {};
				const file$12 = "/workspaces/developer-roadmap/src/data/best-practices/code-review/content/review-tests.md";
				const url$12 = undefined;
				function rawContent$12() {
					return "# Reviewing Tests\n\nOne of the essential aspects of code review is evaluating the tests accompanying the code changes. Ensuring these tests adequately cover functionality and edge cases is crucial for maintaining the reliability and stability of the software. This involves examining the structure and design of tests, as well as the effectiveness in confirming the code behaves as expected. It is vital for a code reviewer to focus on whether the tests cover all possible scenarios and comprehensively test the code change, from regular usage to potential edge cases that may cause issues. Here are a few tips to help guide you through this process:\n\n- Assess test coverage: Examine the range of test cases provided to ensure they appropriately test not only the basic functionality but also various edge cases and potential error scenarios.\n- Investigate test design: Evaluate the design of the test suite, ensuring each test serves a specific purpose and that they are organized and maintainable.\n- Verify the implementation: Check the implementation of each test, making sure it is correctly set up and achieves the desired outcome.\n- Prioritize critical areas: Pay special attention to complex or crucial code sections to confirm they have adequate test coverage.\n- Look for potential scenarios: Be proactive in identifying any additional scenarios that might not have been covered, and suggest improvements or new test cases to better validate these situations.";
				}
				function compiledContent$12() {
					return html$12;
				}
				function getHeadings$12() {
					return [{"depth":1,"slug":"reviewing-tests","text":"Reviewing Tests"}];
				}

				const Content$12 = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter$12;
					content.file = file$12;
					content.url = url$12;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html$12)}`;
				});

const __vite_glob_0_202 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	Content: Content$12,
	compiledContent: compiledContent$12,
	default: Content$12,
	file: file$12,
	frontmatter: frontmatter$12,
	getHeadings: getHeadings$12,
	rawContent: rawContent$12,
	url: url$12
}, Symbol.toStringTag, { value: 'Module' }));

const html$11 = "<h1 id=\"review-updated-code\">Review Updated Code</h1>\n<p>In the process of conducting a code review, it is crucial to verify that the changes suggested during the review have been implemented accurately and effectively. To ensure this, you need to re-examine the updated code and check if it complies with the recommendations provided in the review. This step is not only important for maintaining the code’s quality and functionality, but also for reinforcing the purpose of code review as a means of collaboration and knowledge-sharing between team members. To effectively verify the implementation of suggested changes, here are some tips:</p>\n<ul>\n<li>Keep track of the specific suggestions provided during the review. You may use a dedicated tool or document to list down and categorize each feedback and resolution.</li>\n<li>For each suggestion, re-visit the corresponding lines of code and assess if the changes made align with the recommendation given. Pay attention to any unintentional side effects or new issues that may have emerged due to the changes.</li>\n<li>Run unit tests, integration tests, and end-to-end tests to ensure that the updated code does not break existing functionality or introduce new bugs.</li>\n<li>If necessary, consult with the person who made the suggestions to clarify their intentions and to verify if the implemented solution addresses their concerns.</li>\n<li>Be mindful of the communication between the reviewers and code authors during the review process. Make sure a collaborative environment is fostered, and constructive feedback is emphasized.</li>\n</ul>\n<p>By following these tips, you can validate the successful implementation of recommended changes and help maintain a high standard for your codebase. Remember that the goal of code review is continuous improvement, and ensuring that changes are implemented as expected greatly contributes to this goal.</p>";

				const frontmatter$11 = {};
				const file$11 = "/workspaces/developer-roadmap/src/data/best-practices/code-review/content/review-updated-code.md";
				const url$11 = undefined;
				function rawContent$11() {
					return "# Review Updated Code\n\nIn the process of conducting a code review, it is crucial to verify that the changes suggested during the review have been implemented accurately and effectively. To ensure this, you need to re-examine the updated code and check if it complies with the recommendations provided in the review. This step is not only important for maintaining the code's quality and functionality, but also for reinforcing the purpose of code review as a means of collaboration and knowledge-sharing between team members. To effectively verify the implementation of suggested changes, here are some tips:\n\n- Keep track of the specific suggestions provided during the review. You may use a dedicated tool or document to list down and categorize each feedback and resolution.\n- For each suggestion, re-visit the corresponding lines of code and assess if the changes made align with the recommendation given. Pay attention to any unintentional side effects or new issues that may have emerged due to the changes.\n- Run unit tests, integration tests, and end-to-end tests to ensure that the updated code does not break existing functionality or introduce new bugs.\n- If necessary, consult with the person who made the suggestions to clarify their intentions and to verify if the implemented solution addresses their concerns.\n- Be mindful of the communication between the reviewers and code authors during the review process. Make sure a collaborative environment is fostered, and constructive feedback is emphasized.\n\nBy following these tips, you can validate the successful implementation of recommended changes and help maintain a high standard for your codebase. Remember that the goal of code review is continuous improvement, and ensuring that changes are implemented as expected greatly contributes to this goal.";
				}
				function compiledContent$11() {
					return html$11;
				}
				function getHeadings$11() {
					return [{"depth":1,"slug":"review-updated-code","text":"Review Updated Code"}];
				}

				const Content$11 = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter$11;
					content.file = file$11;
					content.url = url$11;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html$11)}`;
				});

const __vite_glob_0_203 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	Content: Content$11,
	compiledContent: compiledContent$11,
	default: Content$11,
	file: file$11,
	frontmatter: frontmatter$11,
	getHeadings: getHeadings$11,
	rawContent: rawContent$11,
	url: url$11
}, Symbol.toStringTag, { value: 'Module' }));

const html$10 = "<h1 id=\"verify-all-tests-pass\">Verify All Tests Pass</h1>\n<p>Running the tests and ensuring that they all pass after making changes is a crucial aspect of “code review” best practices. This step helps in maintaining the quality of the code by making sure that any code modifications do not lead to unexpected errors or issues. As the codebase grows larger and more complex, it becomes increasingly imperative to verify that all tests are passing after any updates.</p>\n<p>To make sure that all tests pass after making changes, follow these tips:</p>\n<ul>\n<li>Always run the complete test suite for the entire project after making code modifications. This will ensure that your changes did not introduce any unwanted side effects or bugs.</li>\n<li>Keep tests up-to-date and relevant by continuously adding new tests, modifying existing ones, and removing obsolete ones. This ensures that the test suite covers all aspects of the project’s functionality.</li>\n<li>Use a Continuous Integration (CI) tool that automatically runs the tests whenever a new commit is pushed to the repository. This helps in identifying any issues early on in the development process and saves time during code review.</li>\n<li>Pay attention to any test failures and address the root cause before submitting the code for review. It is equally important to understand the reason behind a test failure as it is to fix the issue.</li>\n<li>Encourage the entire development team to follow these practices and hold each other accountable. This promotes a culture of test-driven development and helps maintain high-quality code.</li>\n</ul>";

				const frontmatter$10 = {};
				const file$10 = "/workspaces/developer-roadmap/src/data/best-practices/code-review/content/run-tests-ensure-passing.md";
				const url$10 = undefined;
				function rawContent$10() {
					return "# Verify All Tests Pass\n\nRunning the tests and ensuring that they all pass after making changes is a crucial aspect of \"code review\" best practices. This step helps in maintaining the quality of the code by making sure that any code modifications do not lead to unexpected errors or issues. As the codebase grows larger and more complex, it becomes increasingly imperative to verify that all tests are passing after any updates.\n\nTo make sure that all tests pass after making changes, follow these tips:\n- Always run the complete test suite for the entire project after making code modifications. This will ensure that your changes did not introduce any unwanted side effects or bugs.\n- Keep tests up-to-date and relevant by continuously adding new tests, modifying existing ones, and removing obsolete ones. This ensures that the test suite covers all aspects of the project's functionality.\n- Use a Continuous Integration (CI) tool that automatically runs the tests whenever a new commit is pushed to the repository. This helps in identifying any issues early on in the development process and saves time during code review.\n- Pay attention to any test failures and address the root cause before submitting the code for review. It is equally important to understand the reason behind a test failure as it is to fix the issue.\n- Encourage the entire development team to follow these practices and hold each other accountable. This promotes a culture of test-driven development and helps maintain high-quality code.";
				}
				function compiledContent$10() {
					return html$10;
				}
				function getHeadings$10() {
					return [{"depth":1,"slug":"verify-all-tests-pass","text":"Verify All Tests Pass"}];
				}

				const Content$10 = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter$10;
					content.file = file$10;
					content.url = url$10;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html$10)}`;
				});

const __vite_glob_0_204 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	Content: Content$10,
	compiledContent: compiledContent$10,
	default: Content$10,
	file: file$10,
	frontmatter: frontmatter$10,
	getHeadings: getHeadings$10,
	rawContent: rawContent$10,
	url: url$10
}, Symbol.toStringTag, { value: 'Module' }));

const html$$ = "<h1 id=\"seek-feedback-early-and-often\">Seek feedback Early and Often</h1>\n<p>In the software development process, it is essential for developers to use efficient and effective practices to ensure that their code is of high quality. One such practice is encouraging authors to seek feedback during the development phase, even before submitting a formal code review. This proactiveness fosters a culture of continuous learning, open communication, and shared ownership. It also helps in identifying issues early on, which greatly improves the overall health of the codebase.</p>\n<p>To ensure that early feedback is sought and implemented, here are some tips to follow:</p>\n<ul>\n<li>\n<p>Encourage developers to ask for feedback: Remind the team that everyone’s opinions and expertise matter, and offer an open environment for discussions.</p>\n</li>\n<li>\n<p>Make collaboration tools accessible: Use tools and platforms that facilitate easy communication, sharing, and collaboration on code, such as Git, Slack, or code pairing sessions.</p>\n</li>\n<li>\n<p>Provide guidance and mentoring: Senior developers should take the time to guide and mentor junior developers, review code snippets, and give feedback during the development phase.</p>\n</li>\n<li>\n<p>Promote pair programming: Encourage the practice of pair programming for complex tasks, as it helps in knowledge sharing and real-time feedback.</p>\n</li>\n<li>\n<p>Regularly conduct code walkthroughs: Schedule periodic code walkthroughs or informal review sessions to ensure the team is in sync and everyone is aware of the progress.</p>\n</li>\n</ul>\n<p>By fostering a culture of collaboration and continuous learning, you can maximize the potential of your team and ensure that your codebase remains healthy, maintainable, and efficient.</p>";

				const frontmatter$$ = {};
				const file$$ = "/workspaces/developer-roadmap/src/data/best-practices/code-review/content/seek-feedback.md";
				const url$$ = undefined;
				function rawContent$$() {
					return "# Seek feedback Early and Often\n\nIn the software development process, it is essential for developers to use efficient and effective practices to ensure that their code is of high quality. One such practice is encouraging authors to seek feedback during the development phase, even before submitting a formal code review. This proactiveness fosters a culture of continuous learning, open communication, and shared ownership. It also helps in identifying issues early on, which greatly improves the overall health of the codebase.\n\nTo ensure that early feedback is sought and implemented, here are some tips to follow:\n\n- Encourage developers to ask for feedback: Remind the team that everyone's opinions and expertise matter, and offer an open environment for discussions.\n\n- Make collaboration tools accessible: Use tools and platforms that facilitate easy communication, sharing, and collaboration on code, such as Git, Slack, or code pairing sessions.\n\n- Provide guidance and mentoring: Senior developers should take the time to guide and mentor junior developers, review code snippets, and give feedback during the development phase.\n\n- Promote pair programming: Encourage the practice of pair programming for complex tasks, as it helps in knowledge sharing and real-time feedback.\n\n- Regularly conduct code walkthroughs: Schedule periodic code walkthroughs or informal review sessions to ensure the team is in sync and everyone is aware of the progress.\n\nBy fostering a culture of collaboration and continuous learning, you can maximize the potential of your team and ensure that your codebase remains healthy, maintainable, and efficient.";
				}
				function compiledContent$$() {
					return html$$;
				}
				function getHeadings$$() {
					return [{"depth":1,"slug":"seek-feedback-early-and-often","text":"Seek feedback Early and Often"}];
				}

				const Content$$ = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter$$;
					content.file = file$$;
					content.url = url$$;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html$$)}`;
				});

const __vite_glob_0_205 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	Content: Content$$,
	compiledContent: compiledContent$$,
	default: Content$$,
	file: file$$,
	frontmatter: frontmatter$$,
	getHeadings: getHeadings$$,
	rawContent: rawContent$$,
	url: url$$
}, Symbol.toStringTag, { value: 'Module' }));

const html$_ = "<h1 id=\"seek-team-members-feedback\">Seek Team Members’ Feedback</h1>\n<p>Seeking feedback from other team members is an essential aspect of the code review process when you are unsure about the changes made in the code. This collaborative approach not only helps in improving the quality of the code but also promotes knowledge sharing and learning among team members. To ensure that you effectively seek feedback, follow these tips:</p>\n<ul>\n<li>Don’t hesitate to ask questions and present your doubts or concerns about the code changes openly.</li>\n<li>Reach out to team members with specific expertise in the area of the code in question to gain valuable insights.</li>\n<li>Use the commenting feature in your code review tool to highlight areas of the code that need clarification or further discussion.</li>\n<li>Encourage an open and constructive discussion around the changes, while remaining respectful and receptive to diverse opinions.</li>\n<li>Consider holding brief team meetings or code review sessions to discuss complex changes and ensure everyone is on the same page.</li>\n</ul>\n<p>By incorporating these tips into your code review process, you will not only ensure effective feedback but also contribute to the overall improvement of your team’s coding skills and products.</p>";

				const frontmatter$_ = {};
				const file$_ = "/workspaces/developer-roadmap/src/data/best-practices/code-review/content/seek-team-members-feedback.md";
				const url$_ = undefined;
				function rawContent$_() {
					return "# Seek Team Members' Feedback\n\nSeeking feedback from other team members is an essential aspect of the code review process when you are unsure about the changes made in the code. This collaborative approach not only helps in improving the quality of the code but also promotes knowledge sharing and learning among team members. To ensure that you effectively seek feedback, follow these tips:\n\n- Don't hesitate to ask questions and present your doubts or concerns about the code changes openly.\n- Reach out to team members with specific expertise in the area of the code in question to gain valuable insights.\n- Use the commenting feature in your code review tool to highlight areas of the code that need clarification or further discussion.\n- Encourage an open and constructive discussion around the changes, while remaining respectful and receptive to diverse opinions.\n- Consider holding brief team meetings or code review sessions to discuss complex changes and ensure everyone is on the same page.\n\nBy incorporating these tips into your code review process, you will not only ensure effective feedback but also contribute to the overall improvement of your team's coding skills and products.";
				}
				function compiledContent$_() {
					return html$_;
				}
				function getHeadings$_() {
					return [{"depth":1,"slug":"seek-team-members-feedback","text":"Seek Team Members’ Feedback"}];
				}

				const Content$_ = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter$_;
					content.file = file$_;
					content.url = url$_;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html$_)}`;
				});

const __vite_glob_0_206 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	Content: Content$_,
	compiledContent: compiledContent$_,
	default: Content$_,
	file: file$_,
	frontmatter: frontmatter$_,
	getHeadings: getHeadings$_,
	rawContent: rawContent$_,
	url: url$_
}, Symbol.toStringTag, { value: 'Module' }));

const html$Z = "<h1 id=\"self-review\">Self-review</h1>\n<p>Reviewing your code by yourself not only helps you spot potential issues and make improvements, but it also saves time for your peers and shows respect for the collective effort. By thoroughly examining your work with a critical eye, you contribute to maintaining a high-quality and efficient code review process.</p>\n<p>To ensure that you review your code effectively, follow these tips:</p>\n<ul>\n<li>Take a break: After completing your work, step away from it for a while. This helps you review your code from a fresh perspective.</li>\n<li>Self-review checklist: Create a checklist of elements to inspect, such as syntax, logic, performance optimizations, and readability. This keeps your focus and ensures consistency across your code.</li>\n<li>Test thoroughly: Perform unit tests, integration tests, and run your code in various scenarios to ensure it works as expected.</li>\n<li>Read your code as if you’re the reviewer: Use the perspective of a teammate unfamiliar with your work to assess if your code is understandable and easy to follow.</li>\n<li>Verify documentation: Examine and update any documentation, comments, or inline explanations. This assists reviewers in understanding your code and its purpose.</li>\n</ul>\n<p>By adopting these practices, you are helping to create a smooth code review process, improving the overall quality of your work, and demonstrating professionalism and respect for your team.</p>";

				const frontmatter$Z = {};
				const file$Z = "/workspaces/developer-roadmap/src/data/best-practices/code-review/content/self-review.md";
				const url$Z = undefined;
				function rawContent$Z() {
					return "# Self-review\n\nReviewing your code by yourself not only helps you spot potential issues and make improvements, but it also saves time for your peers and shows respect for the collective effort. By thoroughly examining your work with a critical eye, you contribute to maintaining a high-quality and efficient code review process.\n\nTo ensure that you review your code effectively, follow these tips:\n- Take a break: After completing your work, step away from it for a while. This helps you review your code from a fresh perspective.\n- Self-review checklist: Create a checklist of elements to inspect, such as syntax, logic, performance optimizations, and readability. This keeps your focus and ensures consistency across your code.\n- Test thoroughly: Perform unit tests, integration tests, and run your code in various scenarios to ensure it works as expected.\n- Read your code as if you're the reviewer: Use the perspective of a teammate unfamiliar with your work to assess if your code is understandable and easy to follow.\n- Verify documentation: Examine and update any documentation, comments, or inline explanations. This assists reviewers in understanding your code and its purpose.\n\nBy adopting these practices, you are helping to create a smooth code review process, improving the overall quality of your work, and demonstrating professionalism and respect for your team.";
				}
				function compiledContent$Z() {
					return html$Z;
				}
				function getHeadings$Z() {
					return [{"depth":1,"slug":"self-review","text":"Self-review"}];
				}

				const Content$Z = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter$Z;
					content.file = file$Z;
					content.url = url$Z;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html$Z)}`;
				});

const __vite_glob_0_207 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	Content: Content$Z,
	compiledContent: compiledContent$Z,
	default: Content$Z,
	file: file$Z,
	frontmatter: frontmatter$Z,
	getHeadings: getHeadings$Z,
	rawContent: rawContent$Z,
	url: url$Z
}, Symbol.toStringTag, { value: 'Module' }));

const html$Y = "<h1 id=\"set-clear-expectations-for-code-review-turnaround-times\">Set Clear Expectations for Code Review Turnaround Times</h1>\n<p>In a collaborative development environment, it is essential to establish clear expectations for code review turnaround times to ensure the smooth progression of your project. Defining reasonable timeframes for reviewing and addressing comments made during code reviews helps maintain momentum in the development process, prevents unnecessary delays, and facilitates better communication between team members. In this section, we will provide some useful tips on how to set appropriate expectations and make sure that code reviews are being conducted effectively and efficiently.</p>\n<ul>\n<li>\n<p>Define a specific turnaround time: Establish a standard timeframe for team members to complete their code reviews, such as 24 hours or 48 hours depending on the complexity of the project.</p>\n</li>\n<li>\n<p>Set priorities: Prioritize code reviews based on the importance of the feature being developed or the urgency of the issue being addressed. Communicate these priorities to your team members to help them manage their time effectively.</p>\n</li>\n<li>\n<p>Track and analyze review times: Record the time taken for each code review and observe any patterns, bottlenecks, or areas for improvement. This information can help you refine your expectations and adjust your turnaround times accordingly.</p>\n</li>\n<li>\n<p>Encourage timely feedback: Foster a culture of prompt, valuable feedback in your team by emphasizing the importance of quick, thorough code reviews. Recognize and reward team members who consistently meet or exceed expectations when it comes to turnaround times.</p>\n</li>\n<li>\n<p>Be mindful of team members’ workload: Consider the workload of your team members when assigning code reviews. Assign tasks accordingly to prevent overwhelming any individual or hindering the progress of the entire project.</p>\n</li>\n</ul>\n<p>By incorporating these tips into your development process, you will ensure that your team adheres to the expectations set for code review turnaround times and keep your project on track.</p>";

				const frontmatter$Y = {};
				const file$Y = "/workspaces/developer-roadmap/src/data/best-practices/code-review/content/set-clear-expectations.md";
				const url$Y = undefined;
				function rawContent$Y() {
					return "# Set Clear Expectations for Code Review Turnaround Times\n\nIn a collaborative development environment, it is essential to establish clear expectations for code review turnaround times to ensure the smooth progression of your project. Defining reasonable timeframes for reviewing and addressing comments made during code reviews helps maintain momentum in the development process, prevents unnecessary delays, and facilitates better communication between team members. In this section, we will provide some useful tips on how to set appropriate expectations and make sure that code reviews are being conducted effectively and efficiently.\n\n- Define a specific turnaround time: Establish a standard timeframe for team members to complete their code reviews, such as 24 hours or 48 hours depending on the complexity of the project.\n \n- Set priorities: Prioritize code reviews based on the importance of the feature being developed or the urgency of the issue being addressed. Communicate these priorities to your team members to help them manage their time effectively.\n \n- Track and analyze review times: Record the time taken for each code review and observe any patterns, bottlenecks, or areas for improvement. This information can help you refine your expectations and adjust your turnaround times accordingly.\n \n- Encourage timely feedback: Foster a culture of prompt, valuable feedback in your team by emphasizing the importance of quick, thorough code reviews. Recognize and reward team members who consistently meet or exceed expectations when it comes to turnaround times.\n \n- Be mindful of team members' workload: Consider the workload of your team members when assigning code reviews. Assign tasks accordingly to prevent overwhelming any individual or hindering the progress of the entire project.\n\nBy incorporating these tips into your development process, you will ensure that your team adheres to the expectations set for code review turnaround times and keep your project on track.";
				}
				function compiledContent$Y() {
					return html$Y;
				}
				function getHeadings$Y() {
					return [{"depth":1,"slug":"set-clear-expectations-for-code-review-turnaround-times","text":"Set Clear Expectations for Code Review Turnaround Times"}];
				}

				const Content$Y = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter$Y;
					content.file = file$Y;
					content.url = url$Y;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html$Y)}`;
				});

const __vite_glob_0_208 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	Content: Content$Y,
	compiledContent: compiledContent$Y,
	default: Content$Y,
	file: file$Y,
	frontmatter: frontmatter$Y,
	getHeadings: getHeadings$Y,
	rawContent: rawContent$Y,
	url: url$Y
}, Symbol.toStringTag, { value: 'Module' }));

const html$X = "<h1 id=\"short-term-and-long-term-considerations\">Short-term and long-term Considerations</h1>\n<p>In a well-balanced code review, it is essential to keep both short-term and long-term considerations in mind. Short-term considerations focus on the immediate impact of the changes, such as bug fixes, performance improvements, and adherence to coding standards. On the other hand, long-term considerations are aimed at ensuring the code remains maintainable, scalable, and aligned with the broader architectural vision. As a code reviewer, it is your responsibility to strike a balance between these two aspects, making sure your feedback addresses immediate concerns without compromising the codebase’s future health. Here are some tips to help you achieve this:</p>\n<ul>\n<li>Encourage the use of design patterns and architectural best practices that promote maintainability and adaptability.</li>\n<li>Check for code readability and simplicity, as these contribute to easier future modifications.</li>\n<li>Consider the impact of changes on existing and potential integrations, keeping in mind the system’s overall extensibility.</li>\n<li>Ensure new features or improvements are justified, avoiding the addition of unnecessary complexity that may hinder future development.</li>\n<li>Encourage documentation for any non-trivial code or design decisions, which helps other developers understand the rationale behind the change and avoids potential issues down the line.</li>\n<li>Consider if the proposed solution aligns with the team’s overall coding practices, tech stack, and organizational goals, ensuring a coherent and unified codebase.</li>\n</ul>";

				const frontmatter$X = {};
				const file$X = "/workspaces/developer-roadmap/src/data/best-practices/code-review/content/short-term-long-term-considerations.md";
				const url$X = undefined;
				function rawContent$X() {
					return "# Short-term and long-term Considerations\n\nIn a well-balanced code review, it is essential to keep both short-term and long-term considerations in mind. Short-term considerations focus on the immediate impact of the changes, such as bug fixes, performance improvements, and adherence to coding standards. On the other hand, long-term considerations are aimed at ensuring the code remains maintainable, scalable, and aligned with the broader architectural vision. As a code reviewer, it is your responsibility to strike a balance between these two aspects, making sure your feedback addresses immediate concerns without compromising the codebase's future health. Here are some tips to help you achieve this:\n\n- Encourage the use of design patterns and architectural best practices that promote maintainability and adaptability.\n- Check for code readability and simplicity, as these contribute to easier future modifications.\n- Consider the impact of changes on existing and potential integrations, keeping in mind the system's overall extensibility.\n- Ensure new features or improvements are justified, avoiding the addition of unnecessary complexity that may hinder future development.\n- Encourage documentation for any non-trivial code or design decisions, which helps other developers understand the rationale behind the change and avoids potential issues down the line.\n- Consider if the proposed solution aligns with the team's overall coding practices, tech stack, and organizational goals, ensuring a coherent and unified codebase.";
				}
				function compiledContent$X() {
					return html$X;
				}
				function getHeadings$X() {
					return [{"depth":1,"slug":"short-term-and-long-term-considerations","text":"Short-term and long-term Considerations"}];
				}

				const Content$X = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter$X;
					content.file = file$X;
					content.url = url$X;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html$X)}`;
				});

const __vite_glob_0_209 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	Content: Content$X,
	compiledContent: compiledContent$X,
	default: Content$X,
	file: file$X,
	frontmatter: frontmatter$X,
	getHeadings: getHeadings$X,
	rawContent: rawContent$X,
	url: url$X
}, Symbol.toStringTag, { value: 'Module' }));

const html$W = "<h1 id=\"style-guide-preferences\">Style Guide Preferences</h1>\n<p>Having a definitive style guide for style preferences is an essential part of maintaining a codebase that is easy to read, understand, and maintain. A well-defined style guide ensures that all developers are following a consistent set of standards when writing their code, which ultimately leads to a more unified and robust software and saving time and discussions in code reviews. This not only helps developers catch potential bugs and issues more efficiently but also makes onboarding new team members much easier. To make sure your team adheres to a consistent style guide, here are some tips:</p>\n<ul>\n<li>Choose an established style guide such as Google’s or Airbnb’s style guides, or create your own tailored to your team’s preferences.</li>\n<li>Make the chosen style guide easily accessible to all team members, preferably through your project’s documentation.</li>\n<li>Use linters or formatters to automatically enforce the style guide rules in your code editors and in your continuous integration process.</li>\n<li>Incorporate style guide adherence as a part of your code review checklist to ensure the submitted code follows the established guidelines.</li>\n<li>Encourage open discussions about the style guide itself, and be open to updating it as your team grows and evolves. This allows it to remain flexible and adapt to the team’s changing requirements.</li>\n</ul>";

				const frontmatter$W = {};
				const file$W = "/workspaces/developer-roadmap/src/data/best-practices/code-review/content/style-guide-preferences.md";
				const url$W = undefined;
				function rawContent$W() {
					return "# Style Guide Preferences\n\nHaving a definitive style guide for style preferences is an essential part of maintaining a codebase that is easy to read, understand, and maintain. A well-defined style guide ensures that all developers are following a consistent set of standards when writing their code, which ultimately leads to a more unified and robust software and saving time and discussions in code reviews. This not only helps developers catch potential bugs and issues more efficiently but also makes onboarding new team members much easier. To make sure your team adheres to a consistent style guide, here are some tips:\n\n- Choose an established style guide such as Google's or Airbnb's style guides, or create your own tailored to your team's preferences.\n- Make the chosen style guide easily accessible to all team members, preferably through your project's documentation.\n- Use linters or formatters to automatically enforce the style guide rules in your code editors and in your continuous integration process.\n- Incorporate style guide adherence as a part of your code review checklist to ensure the submitted code follows the established guidelines.\n- Encourage open discussions about the style guide itself, and be open to updating it as your team grows and evolves. This allows it to remain flexible and adapt to the team's changing requirements.";
				}
				function compiledContent$W() {
					return html$W;
				}
				function getHeadings$W() {
					return [{"depth":1,"slug":"style-guide-preferences","text":"Style Guide Preferences"}];
				}

				const Content$W = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter$W;
					content.file = file$W;
					content.url = url$W;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html$W)}`;
				});

const __vite_glob_0_210 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	Content: Content$W,
	compiledContent: compiledContent$W,
	default: Content$W,
	file: file$W,
	frontmatter: frontmatter$W,
	getHeadings: getHeadings$W,
	rawContent: rawContent$W,
	url: url$W
}, Symbol.toStringTag, { value: 'Module' }));

const html$V = "<h1 id=\"submitting-code-for-a-second-review\">Submitting Code for a Second Review</h1>\n<p>When modifications or updates are suggested during a review, it’s not uncommon for developers to submit their revised code for a second review. This is to ensure that the changes made are acceptable, efficient, and adhere to the team’s coding standards. It also provides another opportunity for peer feedback, which is crucial in ironing out any remaining issues and accelerating team learning. To make the most of this process, keep in mind the following tips to help streamline the second review and ensure the updated code is on the right track:</p>\n<ul>\n<li>\n<p>Address all feedback: Ensure you understand and incorporate all the suggested changes from the first review before submitting the updated code.</p>\n</li>\n<li>\n<p>Keep changes focused: Only submit the necessary changes for the second review. Avoid introducing new unrelated features or modifications, as this can prolong the review process.</p>\n</li>\n<li>\n<p>Re-test your code: After making revisions, ensure the code is still functioning as intended, and all tests still pass. This will save time in the second review and instill confidence in the code from the reviewer’s perspective.</p>\n</li>\n<li>\n<p>Provide context: Provide a brief summary or response to the reviewer’s feedback, outlining changes made or reasons behind maintaining specific parts of the code as it is. This condensed overview will make it easier for the reviewer to identify the changes without needing to re-read the entire code.</p>\n</li>\n<li>\n<p>Set up a follow-up meeting: If needed, schedule a follow-up meeting with the reviewer to address any concerns or unclear parts of the feedback. This direct communication can expedite the review process and avoid misunderstandings.</p>\n</li>\n</ul>\n<p>By incorporating these best practices when submitting updated code for a second review, you will effectively streamline the process and create a positive experience for both the developer and the reviewer. Ultimately, this will lead to higher-quality code and a better-functioning end product.</p>";

				const frontmatter$V = {};
				const file$V = "/workspaces/developer-roadmap/src/data/best-practices/code-review/content/submit-re-review.md";
				const url$V = undefined;
				function rawContent$V() {
					return "# Submitting Code for a Second Review\n\nWhen modifications or updates are suggested during a review, it's not uncommon for developers to submit their revised code for a second review. This is to ensure that the changes made are acceptable, efficient, and adhere to the team's coding standards. It also provides another opportunity for peer feedback, which is crucial in ironing out any remaining issues and accelerating team learning. To make the most of this process, keep in mind the following tips to help streamline the second review and ensure the updated code is on the right track:\n\n- Address all feedback: Ensure you understand and incorporate all the suggested changes from the first review before submitting the updated code.\n\n- Keep changes focused: Only submit the necessary changes for the second review. Avoid introducing new unrelated features or modifications, as this can prolong the review process.\n\n- Re-test your code: After making revisions, ensure the code is still functioning as intended, and all tests still pass. This will save time in the second review and instill confidence in the code from the reviewer's perspective.\n\n- Provide context: Provide a brief summary or response to the reviewer's feedback, outlining changes made or reasons behind maintaining specific parts of the code as it is. This condensed overview will make it easier for the reviewer to identify the changes without needing to re-read the entire code.\n\n- Set up a follow-up meeting: If needed, schedule a follow-up meeting with the reviewer to address any concerns or unclear parts of the feedback. This direct communication can expedite the review process and avoid misunderstandings.\n\nBy incorporating these best practices when submitting updated code for a second review, you will effectively streamline the process and create a positive experience for both the developer and the reviewer. Ultimately, this will lead to higher-quality code and a better-functioning end product.";
				}
				function compiledContent$V() {
					return html$V;
				}
				function getHeadings$V() {
					return [{"depth":1,"slug":"submitting-code-for-a-second-review","text":"Submitting Code for a Second Review"}];
				}

				const Content$V = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter$V;
					content.file = file$V;
					content.url = url$V;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html$V)}`;
				});

const __vite_glob_0_211 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	Content: Content$V,
	compiledContent: compiledContent$V,
	default: Content$V,
	file: file$V,
	frontmatter: frontmatter$V,
	getHeadings: getHeadings$V,
	rawContent: rawContent$V,
	url: url$V
}, Symbol.toStringTag, { value: 'Module' }));

const html$U = "<h1 id=\"team-wide-style-is-followed\">Team-wide style is followed</h1>\n<p>To achieve this, I recommend adopting a team-wide style guide, which serves as the authoritative reference for code styling within the project. As a reviewer, your role is to verify the changes against this guide, rather than imposing your personal preferences. This helps to reduce inconsistencies and foster a collaborative environment. To ensure the effective implementation of the style guide, consider the following tips:</p>\n<ul>\n<li>Create a clear and concise style guide that covers all major aspects of code styling, such as naming conventions, indentation, and code organization.</li>\n<li>Share the style guide with all team members and make sure everyone understands its requirements and follows them consistently.</li>\n<li>Integrate automated linting tools and formatters into your development process to check and enforce code style automatically.</li>\n<li>Provide dedicated workshops or training sessions to new team members on the style guide, so that they can quickly get up to speed with the team’s preferred style.</li>\n<li>During the code review process, focus on ensuring that the changes align with the style guide. If you find deviations, point them out and guide the developer towards the proper style.</li>\n<li>Continuously review and update the style guide based on the team’s changing needs and preferences. Encourage team members to suggest improvements and changes to make the guide more effective over time.</li>\n</ul>";

				const frontmatter$U = {};
				const file$U = "/workspaces/developer-roadmap/src/data/best-practices/code-review/content/team-wide-style-followed.md";
				const url$U = undefined;
				function rawContent$U() {
					return "# Team-wide style is followed\n\nTo achieve this, I recommend adopting a team-wide style guide, which serves as the authoritative reference for code styling within the project. As a reviewer, your role is to verify the changes against this guide, rather than imposing your personal preferences. This helps to reduce inconsistencies and foster a collaborative environment. To ensure the effective implementation of the style guide, consider the following tips:\n\n- Create a clear and concise style guide that covers all major aspects of code styling, such as naming conventions, indentation, and code organization.\n- Share the style guide with all team members and make sure everyone understands its requirements and follows them consistently.\n- Integrate automated linting tools and formatters into your development process to check and enforce code style automatically.\n- Provide dedicated workshops or training sessions to new team members on the style guide, so that they can quickly get up to speed with the team's preferred style.\n- During the code review process, focus on ensuring that the changes align with the style guide. If you find deviations, point them out and guide the developer towards the proper style.\n- Continuously review and update the style guide based on the team's changing needs and preferences. Encourage team members to suggest improvements and changes to make the guide more effective over time.";
				}
				function compiledContent$U() {
					return html$U;
				}
				function getHeadings$U() {
					return [{"depth":1,"slug":"team-wide-style-is-followed","text":"Team-wide style is followed"}];
				}

				const Content$U = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter$U;
					content.file = file$U;
					content.url = url$U;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html$U)}`;
				});

const __vite_glob_0_212 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	Content: Content$U,
	compiledContent: compiledContent$U,
	default: Content$U,
	file: file$U,
	frontmatter: frontmatter$U,
	getHeadings: getHeadings$U,
	rawContent: rawContent$U,
	url: url$U
}, Symbol.toStringTag, { value: 'Module' }));

const html$T = "<h1 id=\"tested-in-a-development-environment\">Tested in a Development Environment</h1>\n<p>In a code review, it is essential to verify that the code change has been properly tested in a development environment before it is merged into the main codebase. This not only helps to detect potential issues early in the development process but also ensures that the changes function as intended without causing any unexpected behavior or side effects. To make sure that the code has been adequately tested in a development environment, follow these tips:</p>\n<ul>\n<li>\n<p>Examine the test results: Ensure that the developer has shared the test results alongside the code changes. Look for passed/failed test cases, test case coverage, and performance metrics.</p>\n</li>\n<li>\n<p>Validate the testing strategy: Check if the tests cover all the critical scenarios affected by the change, and confirm that they address potential regression, edge cases, and potential security vulnerabilities.</p>\n</li>\n<li>\n<p>Request a demo: If possible, ask the developer to provide a demo of the changes working in the development environment. This can help you visualize the change and evaluate its impact on the software.</p>\n</li>\n<li>\n<p>Set up the development environment on your machine: By setting up the development environment and running the tests locally, you can get a first-hand experience of the changes made and ensure their effectiveness.</p>\n</li>\n<li>\n<p>Check the automated testing pipeline: Ensure that the Continuous Integration (CI) system is set up to run tests on the submitted code changes automatically. Monitor the pipeline for any test failures or performance degradation relating to the changes.</p>\n</li>\n</ul>\n<p>By following these tips, you can ensure that the changes made to the codebase have gone through proper testing in a development environment, reducing the risk of introducing undetected issues and improving the overall quality of the software.</p>";

				const frontmatter$T = {};
				const file$T = "/workspaces/developer-roadmap/src/data/best-practices/code-review/content/tested-in-dev.md";
				const url$T = undefined;
				function rawContent$T() {
					return "# Tested in a Development Environment\n\nIn a code review, it is essential to verify that the code change has been properly tested in a development environment before it is merged into the main codebase. This not only helps to detect potential issues early in the development process but also ensures that the changes function as intended without causing any unexpected behavior or side effects. To make sure that the code has been adequately tested in a development environment, follow these tips:\n\n- Examine the test results: Ensure that the developer has shared the test results alongside the code changes. Look for passed/failed test cases, test case coverage, and performance metrics.\n\n- Validate the testing strategy: Check if the tests cover all the critical scenarios affected by the change, and confirm that they address potential regression, edge cases, and potential security vulnerabilities.\n\n- Request a demo: If possible, ask the developer to provide a demo of the changes working in the development environment. This can help you visualize the change and evaluate its impact on the software.\n\n- Set up the development environment on your machine: By setting up the development environment and running the tests locally, you can get a first-hand experience of the changes made and ensure their effectiveness.\n\n- Check the automated testing pipeline: Ensure that the Continuous Integration (CI) system is set up to run tests on the submitted code changes automatically. Monitor the pipeline for any test failures or performance degradation relating to the changes.\n\nBy following these tips, you can ensure that the changes made to the codebase have gone through proper testing in a development environment, reducing the risk of introducing undetected issues and improving the overall quality of the software.";
				}
				function compiledContent$T() {
					return html$T;
				}
				function getHeadings$T() {
					return [{"depth":1,"slug":"tested-in-a-development-environment","text":"Tested in a Development Environment"}];
				}

				const Content$T = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter$T;
					content.file = file$T;
					content.url = url$T;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html$T)}`;
				});

const __vite_glob_0_213 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	Content: Content$T,
	compiledContent: compiledContent$T,
	default: Content$T,
	file: file$T,
	frontmatter: frontmatter$T,
	getHeadings: getHeadings$T,
	rawContent: rawContent$T,
	url: url$T
}, Symbol.toStringTag, { value: 'Module' }));

const html$S = "<h1 id=\"finding-trends-and-issues\">Finding Trends and Issues</h1>\n<p>Regular code review sessions play a crucial role in maintaining code quality and ensuring that team members share valuable knowledge. During these sessions, attendees discuss broader trends or issues that arise during the review process, helping them learn from each other’s experience and expertise. This collaborative environment not only fosters better code but also improves overall team dynamics. To get the most out of these sessions, consider some of the following tips:</p>\n<ul>\n<li>\n<p>Schedule recurring code review meetings to ensure that the team consistently comes together to discuss code-related trends and issues.</p>\n</li>\n<li>\n<p>Encourage open and honest communication during the sessions so that everyone feels comfortable sharing their concerns or asking questions.</p>\n</li>\n<li>\n<p>Create a collaborative atmosphere by promoting active listening and appreciating each other’s viewpoints and suggestions.</p>\n</li>\n<li>\n<p>Rotate the role of session facilitator to provide different perspectives and ensure that everyone has the opportunity to take on a leadership position.</p>\n</li>\n<li>\n<p>Set specific goals or select focus areas for each code review session to maintain structure and organization.</p>\n</li>\n<li>\n<p>Encourage the team to provide constructive feedback on the review process to improve the efficiency and effectiveness of future sessions.</p>\n</li>\n<li>\n<p>Use tools that facilitate code review, such as version control systems and collaborative platforms, to enable easy access to code changes and discussions.</p>\n</li>\n</ul>\n<p>By incorporating these strategies, you can help ensure that regular code review sessions are both productive and beneficial to your team’s overall growth and success.</p>";

				const frontmatter$S = {};
				const file$S = "/workspaces/developer-roadmap/src/data/best-practices/code-review/content/trends-issues-finding.md";
				const url$S = undefined;
				function rawContent$S() {
					return "# Finding Trends and Issues\n\nRegular code review sessions play a crucial role in maintaining code quality and ensuring that team members share valuable knowledge. During these sessions, attendees discuss broader trends or issues that arise during the review process, helping them learn from each other's experience and expertise. This collaborative environment not only fosters better code but also improves overall team dynamics. To get the most out of these sessions, consider some of the following tips:\n\n- Schedule recurring code review meetings to ensure that the team consistently comes together to discuss code-related trends and issues.\n\n- Encourage open and honest communication during the sessions so that everyone feels comfortable sharing their concerns or asking questions.\n\n- Create a collaborative atmosphere by promoting active listening and appreciating each other's viewpoints and suggestions.\n\n- Rotate the role of session facilitator to provide different perspectives and ensure that everyone has the opportunity to take on a leadership position.\n\n- Set specific goals or select focus areas for each code review session to maintain structure and organization.\n\n- Encourage the team to provide constructive feedback on the review process to improve the efficiency and effectiveness of future sessions.\n\n- Use tools that facilitate code review, such as version control systems and collaborative platforms, to enable easy access to code changes and discussions.\n\nBy incorporating these strategies, you can help ensure that regular code review sessions are both productive and beneficial to your team's overall growth and success.";
				}
				function compiledContent$S() {
					return html$S;
				}
				function getHeadings$S() {
					return [{"depth":1,"slug":"finding-trends-and-issues","text":"Finding Trends and Issues"}];
				}

				const Content$S = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter$S;
					content.file = file$S;
					content.url = url$S;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html$S)}`;
				});

const __vite_glob_0_214 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	Content: Content$S,
	compiledContent: compiledContent$S,
	default: Content$S,
	file: file$S,
	frontmatter: frontmatter$S,
	getHeadings: getHeadings$S,
	rawContent: rawContent$S,
	url: url$S
}, Symbol.toStringTag, { value: 'Module' }));

const html$R = "<h1 id=\"update-documentation\">Update Documentation</h1>\n<p>In the process of improving and modifying code, it is crucial to keep the documentation up to date to ensure that other developers and users can understand and utilize the software efficiently. “Updating any documentation that may have been made obsolete through the changes” means that whenever there is an alteration in the code, related documentation should also be revised accordingly. This practice helps maintain the coherence between the code and its documentation, and avoids confusion that could arise from contradicting or outdated information. To make sure that you’re consistently updating the documentations, here are a few tips:</p>\n<ul>\n<li>Make a habit of revisiting the documentation right after any code change.</li>\n<li>During the code review process, include documentation checks as a standard step.</li>\n<li>Always double-check the affected areas in the documentation to ensure they align with the code changes.</li>\n<li>Use inline comments and clear commit messages to highlight any modifications made in the code, this will make updating the documentation easier.</li>\n<li>Collaborate with team members to cross-check both the code and documentation to ensure consistency and accuracy.</li>\n</ul>";

				const frontmatter$R = {};
				const file$R = "/workspaces/developer-roadmap/src/data/best-practices/code-review/content/update-docs-changes.md";
				const url$R = undefined;
				function rawContent$R() {
					return "# Update Documentation\n\nIn the process of improving and modifying code, it is crucial to keep the documentation up to date to ensure that other developers and users can understand and utilize the software efficiently. \"Updating any documentation that may have been made obsolete through the changes\" means that whenever there is an alteration in the code, related documentation should also be revised accordingly. This practice helps maintain the coherence between the code and its documentation, and avoids confusion that could arise from contradicting or outdated information. To make sure that you're consistently updating the documentations, here are a few tips:\n\n- Make a habit of revisiting the documentation right after any code change.\n- During the code review process, include documentation checks as a standard step.\n- Always double-check the affected areas in the documentation to ensure they align with the code changes.\n- Use inline comments and clear commit messages to highlight any modifications made in the code, this will make updating the documentation easier.\n- Collaborate with team members to cross-check both the code and documentation to ensure consistency and accuracy.";
				}
				function compiledContent$R() {
					return html$R;
				}
				function getHeadings$R() {
					return [{"depth":1,"slug":"update-documentation","text":"Update Documentation"}];
				}

				const Content$R = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter$R;
					content.file = file$R;
					content.url = url$R;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html$R)}`;
				});

const __vite_glob_0_215 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	Content: Content$R,
	compiledContent: compiledContent$R,
	default: Content$R,
	file: file$R,
	frontmatter: frontmatter$R,
	getHeadings: getHeadings$R,
	rawContent: rawContent$R,
	url: url$R
}, Symbol.toStringTag, { value: 'Module' }));

const html$Q = "<h1 id=\"update-documentation-and-code-comments\">Update Documentation and Code Comments</h1>\n<p>As a vital aspect of the code review process, it is essential to ensure that any changes made to the codebase are accurately reflected in the associated documentation and code comments. Consistently updating these elements helps maintain clear understanding, facilitates collaboration, and boosts a project’s long-term maintainability. Below are some tips on making sure you thoroughly update documentation and code comments during a review:</p>\n<ul>\n<li>\n<p>Cross-reference changes: Whenever a code change is made, always verify if there are any related comments, documentation sections, or code examples that need updating as well.</p>\n</li>\n<li>\n<p>Anticipate future maintenance: Consider how the changes made in the code may affect future developers or users. Update any relevant notes, warnings, or explanations in the documentation to address potential confusion or issues that may arise in the future.</p>\n</li>\n<li>\n<p>Examine external dependencies: Sometimes, changes may impact external tools or libraries used in the project. Be sure to update any corresponding information in the documentation to reflect the new configurations, requirements, or instructions.</p>\n</li>\n<li>\n<p>Review variable and function names: If your code changes involve renaming variables or functions, make sure to update all associated comments and documentation to maintain clarity and consistency.</p>\n</li>\n<li>\n<p>Proofread and test: After updating the documentation and code comments, proofread for clarity, correctness, and proper formatting. Additionally, test any code examples or usage instructions provided to ensure they remain accurate and functional.</p>\n</li>\n</ul>";

				const frontmatter$Q = {};
				const file$Q = "/workspaces/developer-roadmap/src/data/best-practices/code-review/content/update-review-changes-docs.md";
				const url$Q = undefined;
				function rawContent$Q() {
					return "# Update Documentation and Code Comments\n\nAs a vital aspect of the code review process, it is essential to ensure that any changes made to the codebase are accurately reflected in the associated documentation and code comments. Consistently updating these elements helps maintain clear understanding, facilitates collaboration, and boosts a project's long-term maintainability. Below are some tips on making sure you thoroughly update documentation and code comments during a review:\n\n- Cross-reference changes: Whenever a code change is made, always verify if there are any related comments, documentation sections, or code examples that need updating as well.\n \n- Anticipate future maintenance: Consider how the changes made in the code may affect future developers or users. Update any relevant notes, warnings, or explanations in the documentation to address potential confusion or issues that may arise in the future.\n\n- Examine external dependencies: Sometimes, changes may impact external tools or libraries used in the project. Be sure to update any corresponding information in the documentation to reflect the new configurations, requirements, or instructions.\n\n- Review variable and function names: If your code changes involve renaming variables or functions, make sure to update all associated comments and documentation to maintain clarity and consistency.\n\n- Proofread and test: After updating the documentation and code comments, proofread for clarity, correctness, and proper formatting. Additionally, test any code examples or usage instructions provided to ensure they remain accurate and functional.";
				}
				function compiledContent$Q() {
					return html$Q;
				}
				function getHeadings$Q() {
					return [{"depth":1,"slug":"update-documentation-and-code-comments","text":"Update Documentation and Code Comments"}];
				}

				const Content$Q = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter$Q;
					content.file = file$Q;
					content.url = url$Q;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html$Q)}`;
				});

const __vite_glob_0_216 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	Content: Content$Q,
	compiledContent: compiledContent$Q,
	default: Content$Q,
	file: file$Q,
	frontmatter: frontmatter$Q,
	getHeadings: getHeadings$Q,
	rawContent: rawContent$Q,
	url: url$Q
}, Symbol.toStringTag, { value: 'Module' }));

const html$P = "<h1 id=\"use-automation\">Use Automation</h1>\n<p>Automation can make a significant impact in code reviews. By using tools such as linters, sniffers, and other static analysis tools, you can quickly identify and fix issues before they make their way into the main codebase. This not only improves code quality but also speeds up the overall review process. To make the most of this, ensure that your development environment is set up with the right tools and configurations, allowing you to enjoy the best of both worlds: maintaining code quality standards while optimizing your review process.</p>\n<p>Tips for leveraging automation in code reviews:</p>\n<ul>\n<li>Choose appropriate tools for your tech stack (E.g.: ESLint for JavaScript, Pylint for Python, etc.)</li>\n<li>Configure the tools according to your project’s coding style and conventions.</li>\n<li>Integrate these tools into your Continuous Integration (CI) pipeline, ensuring that code is automatically checked with every commit.</li>\n<li>Encourage developers to run linter and static analysis tools locally before pushing changes, to catch issues early on.</li>\n<li>Make use of automated code review platforms like SonarQube or Codacy that can help you monitor and enforce code quality standards.</li>\n<li>Balance automation with human review; don’t solely rely on automated tools, but use them to assist and speed up the process.</li>\n</ul>";

				const frontmatter$P = {};
				const file$P = "/workspaces/developer-roadmap/src/data/best-practices/code-review/content/use-automation.md";
				const url$P = undefined;
				function rawContent$P() {
					return "# Use Automation\n\nAutomation can make a significant impact in code reviews. By using tools such as linters, sniffers, and other static analysis tools, you can quickly identify and fix issues before they make their way into the main codebase. This not only improves code quality but also speeds up the overall review process. To make the most of this, ensure that your development environment is set up with the right tools and configurations, allowing you to enjoy the best of both worlds: maintaining code quality standards while optimizing your review process.\n\nTips for leveraging automation in code reviews:\n\n- Choose appropriate tools for your tech stack (E.g.: ESLint for JavaScript, Pylint for Python, etc.)\n- Configure the tools according to your project's coding style and conventions.\n- Integrate these tools into your Continuous Integration (CI) pipeline, ensuring that code is automatically checked with every commit.\n- Encourage developers to run linter and static analysis tools locally before pushing changes, to catch issues early on.\n- Make use of automated code review platforms like SonarQube or Codacy that can help you monitor and enforce code quality standards.\n- Balance automation with human review; don't solely rely on automated tools, but use them to assist and speed up the process.";
				}
				function compiledContent$P() {
					return html$P;
				}
				function getHeadings$P() {
					return [{"depth":1,"slug":"use-automation","text":"Use Automation"}];
				}

				const Content$P = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter$P;
					content.file = file$P;
					content.url = url$P;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html$P)}`;
				});

const __vite_glob_0_217 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	Content: Content$P,
	compiledContent: compiledContent$P,
	default: Content$P,
	file: file$P,
	frontmatter: frontmatter$P,
	getHeadings: getHeadings$P,
	rawContent: rawContent$P,
	url: url$P
}, Symbol.toStringTag, { value: 'Module' }));

const html$O = "<h1 id=\"verify-that-all-changes-have-been-addressed\">Verify that all changes have been Addressed</h1>\n<p>In the code review process, it is crucial to ensure that all feedback provided by reviewers has been adequately addressed by the author. This step not only helps in enhancing the quality of the code but also fosters collaboration and ensures that issues and improvements are effectively discussed and resolved. To make sure that all feedback has been addressed, follow these tips:</p>\n<ul>\n<li>Maintain a checklist: Create a list of all the feedback items received during the review process, categorizing them based on their severity or relevance.</li>\n<li>Take ownership: As the author, it is your responsibility to adapt to the suggestions made by reviewers, so actively participate in refining the code and making necessary changes.</li>\n<li>Iterative reviews: Have follow-up review sessions after implementing the suggested changes to ensure that outstanding issues have been resolved or have a legitimate reason for being left open.</li>\n<li>Collaborate with reviewers: Communicate with your reviewers and clarify any ambiguities or seek further guidance when working on suggested changes to ensure you fully understand the intent.</li>\n<li>Document decisions: Keep track of the decisions made during the review process, ensuring they are transparent and available for future reference. This will help build trust and provide valuable insights for future code reviews.</li>\n</ul>\n<p>By following these steps, you can ensure that all the feedback from code review has been taken into consideration, ultimately leading to a better and more reliable codebase.</p>";

				const frontmatter$O = {};
				const file$O = "/workspaces/developer-roadmap/src/data/best-practices/code-review/content/verify-changes-addressed.md";
				const url$O = undefined;
				function rawContent$O() {
					return "# Verify that all changes have been Addressed\n\nIn the code review process, it is crucial to ensure that all feedback provided by reviewers has been adequately addressed by the author. This step not only helps in enhancing the quality of the code but also fosters collaboration and ensures that issues and improvements are effectively discussed and resolved. To make sure that all feedback has been addressed, follow these tips:\n\n- Maintain a checklist: Create a list of all the feedback items received during the review process, categorizing them based on their severity or relevance.\n- Take ownership: As the author, it is your responsibility to adapt to the suggestions made by reviewers, so actively participate in refining the code and making necessary changes.\n- Iterative reviews: Have follow-up review sessions after implementing the suggested changes to ensure that outstanding issues have been resolved or have a legitimate reason for being left open.\n- Collaborate with reviewers: Communicate with your reviewers and clarify any ambiguities or seek further guidance when working on suggested changes to ensure you fully understand the intent.\n- Document decisions: Keep track of the decisions made during the review process, ensuring they are transparent and available for future reference. This will help build trust and provide valuable insights for future code reviews.\n\nBy following these steps, you can ensure that all the feedback from code review has been taken into consideration, ultimately leading to a better and more reliable codebase.";
				}
				function compiledContent$O() {
					return html$O;
				}
				function getHeadings$O() {
					return [{"depth":1,"slug":"verify-that-all-changes-have-been-addressed","text":"Verify that all changes have been Addressed"}];
				}

				const Content$O = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter$O;
					content.file = file$O;
					content.url = url$O;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html$O)}`;
				});

const __vite_glob_0_218 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	Content: Content$O,
	compiledContent: compiledContent$O,
	default: Content$O,
	file: file$O,
	frontmatter: frontmatter$O,
	getHeadings: getHeadings$O,
	rawContent: rawContent$O,
	url: url$O
}, Symbol.toStringTag, { value: 'Module' }));

const html$N = "<h1 id=\"write-automated-tests\">Write Automated Tests</h1>\n<p>Writing automated tests is an essential best practice that plays a monumental role in assuring the software’s overall quality and stability. Automated tests not only exercise specific elements of your code, but they also ensure that your code functions correctly by systematically pinpointing issues that may not surface during casual usage. Incorporating automated testing into your code review process is indispensable, as it allows you to confidently approve code changes knowing that they perform as expected.</p>\n<p>To make sure you’re following this practice, here are some tips:</p>\n<ul>\n<li>\n<p>Prioritize test coverage: Remember to write tests that cover the most important functionality of your code. Consider focusing on edge cases, error handling, and integrations with other components of the system.</p>\n</li>\n<li>\n<p>Use a test framework: Leverage a testing framework that simplifies the process of writing and executing tests. This will help you create well-structured, organized, and maintainable test suites.</p>\n</li>\n<li>\n<p>Adopt a test-driven development approach: Writing tests before implementing the code ensures that you have a well-defined outline of what the code should do. This methodology helps you design the code accurately and efficiently.</p>\n</li>\n<li>\n<p>Make testing part of your development process: To ensure that tests are written and maintained, introduce a consensus within your team that code changes should always be accompanied by appropriate tests.</p>\n</li>\n<li>\n<p>Keep tests up to date: As code evolves, ensure that the test suite continues to accurately reflect the software’s functionality. Update and refactor tests if requirements change, and delete any deprecated tests.</p>\n</li>\n</ul>\n<p>Remember, leveraging automated tests during code review not only helps validate the code but also maintains the software’s overall integrity and reliability, ultimately making it better for end-users.</p>";

				const frontmatter$N = {};
				const file$N = "/workspaces/developer-roadmap/src/data/best-practices/code-review/content/write-automated-tests.md";
				const url$N = undefined;
				function rawContent$N() {
					return "# Write Automated Tests\n\nWriting automated tests is an essential best practice that plays a monumental role in assuring the software's overall quality and stability. Automated tests not only exercise specific elements of your code, but they also ensure that your code functions correctly by systematically pinpointing issues that may not surface during casual usage. Incorporating automated testing into your code review process is indispensable, as it allows you to confidently approve code changes knowing that they perform as expected.\n\nTo make sure you're following this practice, here are some tips:\n\n- Prioritize test coverage: Remember to write tests that cover the most important functionality of your code. Consider focusing on edge cases, error handling, and integrations with other components of the system.\n\n- Use a test framework: Leverage a testing framework that simplifies the process of writing and executing tests. This will help you create well-structured, organized, and maintainable test suites.\n\n- Adopt a test-driven development approach: Writing tests before implementing the code ensures that you have a well-defined outline of what the code should do. This methodology helps you design the code accurately and efficiently.\n\n- Make testing part of your development process: To ensure that tests are written and maintained, introduce a consensus within your team that code changes should always be accompanied by appropriate tests.\n\n- Keep tests up to date: As code evolves, ensure that the test suite continues to accurately reflect the software's functionality. Update and refactor tests if requirements change, and delete any deprecated tests.\n\nRemember, leveraging automated tests during code review not only helps validate the code but also maintains the software's overall integrity and reliability, ultimately making it better for end-users.";
				}
				function compiledContent$N() {
					return html$N;
				}
				function getHeadings$N() {
					return [{"depth":1,"slug":"write-automated-tests","text":"Write Automated Tests"}];
				}

				const Content$N = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter$N;
					content.file = file$N;
					content.url = url$N;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html$N)}`;
				});

const __vite_glob_0_219 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	Content: Content$N,
	compiledContent: compiledContent$N,
	default: Content$N,
	file: file$N,
	frontmatter: frontmatter$N,
	getHeadings: getHeadings$N,
	rawContent: rawContent$N,
	url: url$N
}, Symbol.toStringTag, { value: 'Module' }));

const html$M = "<h1 id=\"stylesheet-complexity\">Stylesheet Complexity</h1>\n<blockquote>\n<p>Analyzing your stylesheets can help you to flag issues, redundancies and duplicate CSS selectors.</p>\n</blockquote>\n<p>Sometimes you may have redundancies or validation errors in your CSS, analysing your CSS files and removing these complexities can help you to speed up your CSS files (because your browser will read them faster).</p>\n<p>Your CSS should be organized; using a CSS preprocessor can help you with that. Some online tools listed below can also help you analysing and correct your code.</p>\n<ul>\n<li><a href=\"http://www.testmycss.com/\" rel=\"noopener noreferrer nofollow\" target=\"_blank\">TestMyCSS | Optimize and Check CSS Performance</a></li>\n<li><a href=\"https://cssstats.com/\" rel=\"noopener noreferrer nofollow\" target=\"_blank\">CSS Stats</a></li>\n<li><a href=\"https://github.com/macbre/analyze-css\" rel=\"noopener noreferrer nofollow\" target=\"_blank\">macbre/analyze-css: CSS selectors complexity and performance analyzer</a></li>\n<li><a href=\"https://www.projectwallace.com/\" rel=\"noopener noreferrer nofollow\" target=\"_blank\">Project Wallace</a> is like CSS Stats but stores stats over time so you can track your changes</li>\n</ul>";

				const frontmatter$M = {};
				const file$M = "/workspaces/developer-roadmap/src/data/best-practices/frontend-performance/content/analyse-stylesheets-complexity.md";
				const url$M = undefined;
				function rawContent$M() {
					return "# Stylesheet Complexity\n\n> Analyzing your stylesheets can help you to flag issues, redundancies and duplicate CSS selectors.\n\nSometimes you may have redundancies or validation errors in your CSS, analysing your CSS files and removing these complexities can help you to speed up your CSS files (because your browser will read them faster).\n\nYour CSS should be organized; using a CSS preprocessor can help you with that. Some online tools listed below can also help you analysing and correct your code.\n\n- [TestMyCSS | Optimize and Check CSS Performance](http://www.testmycss.com/)\n- [CSS Stats](https://cssstats.com/)\n- [macbre/analyze-css: CSS selectors complexity and performance analyzer](https://github.com/macbre/analyze-css)\n- [Project Wallace](https://www.projectwallace.com/) is like CSS Stats but stores stats over time so you can track your changes\n";
				}
				function compiledContent$M() {
					return html$M;
				}
				function getHeadings$M() {
					return [{"depth":1,"slug":"stylesheet-complexity","text":"Stylesheet Complexity"}];
				}

				const Content$M = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter$M;
					content.file = file$M;
					content.url = url$M;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html$M)}`;
				});

const __vite_glob_0_220 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	Content: Content$M,
	compiledContent: compiledContent$M,
	default: Content$M,
	file: file$M,
	frontmatter: frontmatter$M,
	getHeadings: getHeadings$M,
	rawContent: rawContent$M,
	url: url$M
}, Symbol.toStringTag, { value: 'Module' }));

const html$L = "<h1 id=\"javascript-performance\">JavaScript Performance</h1>\n<blockquote>\n<p>Check for performance problems in your JavaScript files (and CSS too)</p>\n</blockquote>\n<p>JavaScript complexity can slow down runtime performance. Identifying these possible issues are essential to offer the smoothest user experience.</p>\n<p>Use the Timeline tool in the Chrome Developer Tool to evaluate scripts events and found the one that may take too much time.</p>\n<ul>\n<li><a href=\"https://developers.google.com/web/tools/chrome-devtools/rendering-tools/js-execution\" rel=\"noopener noreferrer nofollow\" target=\"_blank\">Speed Up JavaScript Execution | Tools for Web Developers</a></li>\n<li><a href=\"https://www.smashingmagazine.com/2012/06/javascript-profiling-chrome-developer-tools/\" rel=\"noopener noreferrer nofollow\" target=\"_blank\">JavaScript Profiling With The Chrome Developer Tools</a></li>\n<li><a href=\"https://developers.google.com/web/tools/chrome-devtools/memory-problems/heap-snapshots\" rel=\"noopener noreferrer nofollow\" target=\"_blank\">How to Record Heap Snapshots | Tools for Web Developers</a></li>\n<li><a href=\"https://blackfire.io/docs/book/22-frontend-profiling\" rel=\"noopener noreferrer nofollow\" target=\"_blank\">Chapter 22 - Profiling the Frontend - Blackfire</a></li>\n<li><a href=\"http://www.monitis.com/blog/30-tips-to-improve-javascript-performance/\" rel=\"noopener noreferrer nofollow\" target=\"_blank\">30 Tips To Improve Javascript Performance</a></li>\n</ul>";

				const frontmatter$L = {};
				const file$L = "/workspaces/developer-roadmap/src/data/best-practices/frontend-performance/content/analyze-js-for-perf-issues.md";
				const url$L = undefined;
				function rawContent$L() {
					return "# JavaScript Performance\n\n> Check for performance problems in your JavaScript files (and CSS too)\n\nJavaScript complexity can slow down runtime performance. Identifying these possible issues are essential to offer the smoothest user experience.\n\nUse the Timeline tool in the Chrome Developer Tool to evaluate scripts events and found the one that may take too much time.\n\n- [Speed Up JavaScript Execution | Tools for Web Developers](https://developers.google.com/web/tools/chrome-devtools/rendering-tools/js-execution)\n- [JavaScript Profiling With The Chrome Developer Tools](https://www.smashingmagazine.com/2012/06/javascript-profiling-chrome-developer-tools/)\n- [How to Record Heap Snapshots | Tools for Web Developers](https://developers.google.com/web/tools/chrome-devtools/memory-problems/heap-snapshots)\n- [Chapter 22 - Profiling the Frontend - Blackfire](https://blackfire.io/docs/book/22-frontend-profiling)\n- [30 Tips To Improve Javascript Performance](http://www.monitis.com/blog/30-tips-to-improve-javascript-performance/)\n";
				}
				function compiledContent$L() {
					return html$L;
				}
				function getHeadings$L() {
					return [{"depth":1,"slug":"javascript-performance","text":"JavaScript Performance"}];
				}

				const Content$L = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter$L;
					content.file = file$L;
					content.url = url$L;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html$L)}`;
				});

const __vite_glob_0_221 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	Content: Content$L,
	compiledContent: compiledContent$L,
	default: Content$L,
	file: file$L,
	frontmatter: frontmatter$L,
	getHeadings: getHeadings$L,
	rawContent: rawContent$L,
	url: url$L
}, Symbol.toStringTag, { value: 'Module' }));

const html$K = "<h1 id=\"serve-reachable-files\">Serve Reachable Files</h1>\n<blockquote>\n<p>Avoid requesting unreachable files (404)</p>\n</blockquote>\n<p>404 request can slow down the performance of your website and negatively impact the user experience. Additionally, they can also cause search engines to crawl and index non-existent pages, which can negatively impact your search engine rankings. To avoid 404 requests, ensure that all links on your website are valid and that any broken links are fixed promptly.</p>\n<ul>\n<li><a href=\"https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/404\" rel=\"noopener noreferrer nofollow\" target=\"_blank\">404 Not Found Overview</a></li>\n</ul>";

				const frontmatter$K = {};
				const file$K = "/workspaces/developer-roadmap/src/data/best-practices/frontend-performance/content/avoid-404-files.md";
				const url$K = undefined;
				function rawContent$K() {
					return "# Serve Reachable Files\n\n> Avoid requesting unreachable files (404)\n\n404 request can slow down the performance of your website and negatively impact the user experience. Additionally, they can also cause search engines to crawl and index non-existent pages, which can negatively impact your search engine rankings. To avoid 404 requests, ensure that all links on your website are valid and that any broken links are fixed promptly.\n\n- [404 Not Found Overview](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/404)";
				}
				function compiledContent$K() {
					return html$K;
				}
				function getHeadings$K() {
					return [{"depth":1,"slug":"serve-reachable-files","text":"Serve Reachable Files"}];
				}

				const Content$K = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter$K;
					content.file = file$K;
					content.url = url$K;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html$K)}`;
				});

const __vite_glob_0_222 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	Content: Content$K,
	compiledContent: compiledContent$K,
	default: Content$K,
	file: file$K,
	frontmatter: frontmatter$K,
	getHeadings: getHeadings$K,
	rawContent: rawContent$K,
	url: url$K
}, Symbol.toStringTag, { value: 'Module' }));

const html$J = "<h1 id=\"avoid-base64-images\">Avoid Base64 Images</h1>\n<blockquote>\n<p>You could eventually convert tiny images to base64 but it’s actually not the best practice.</p>\n</blockquote>\n<p>Using Base64 encoded images in your frontend can have several drawbacks.</p>\n<p>First, Base64 encoded images are larger in size than their binary counterparts, which can slow down the loading time of your website.</p>\n<p>Second, because Base64 encoded images are embedded directly in the HTML or CSS, they are included in the initial page load, which can cause delays for users with slower internet connections.</p>\n<p>Third, Base64 encoded images do not benefit from browser caching, as they are part of the HTML or CSS and not a separate resource. So, every time the page is loaded, the images will be re-downloaded, even if the user has visited the page before.</p>\n<p>Fourth, Base64 encoded images are not compatible with some old browser versions.</p>\n<p>Instead of using Base64 encoded images, it is generally recommended to use binary image files and reference them using an img tag in HTML, with a standard src attribute. This allows the browser to cache the image and use it for subsequent page loads, resulting in faster loading times and better user experience.</p>\n<ul>\n<li><a href=\"https://csswizardry.com/2017/02/base64-encoding-and-performance/\" rel=\"noopener noreferrer nofollow\" target=\"_blank\">Base64 Encoding &#x26; Performance, Part 1 and 2 by Harry Roberts</a></li>\n<li><a href=\"http://www.andygup.net/a-closer-look-at-base64-image-performance/\" rel=\"noopener noreferrer nofollow\" target=\"_blank\">A closer look at Base64 image performance – The Page Not Found Blog</a></li>\n<li><a href=\"https://www.davidbcalhoun.com/2011/when-to-base64-encode-images-and-when-not-to/\" rel=\"noopener noreferrer nofollow\" target=\"_blank\">When to base64 encode images (and when not to) | David Calhoun</a></li>\n</ul>";

				const frontmatter$J = {};
				const file$J = "/workspaces/developer-roadmap/src/data/best-practices/frontend-performance/content/avoid-base64-images.md";
				const url$J = undefined;
				function rawContent$J() {
					return "# Avoid Base64 Images\n\n> You could eventually convert tiny images to base64 but it's actually not the best practice.\n\nUsing Base64 encoded images in your frontend can have several drawbacks.\n\nFirst, Base64 encoded images are larger in size than their binary counterparts, which can slow down the loading time of your website.\n\nSecond, because Base64 encoded images are embedded directly in the HTML or CSS, they are included in the initial page load, which can cause delays for users with slower internet connections.\n\nThird, Base64 encoded images do not benefit from browser caching, as they are part of the HTML or CSS and not a separate resource. So, every time the page is loaded, the images will be re-downloaded, even if the user has visited the page before.\n\nFourth, Base64 encoded images are not compatible with some old browser versions.\n\nInstead of using Base64 encoded images, it is generally recommended to use binary image files and reference them using an img tag in HTML, with a standard src attribute. This allows the browser to cache the image and use it for subsequent page loads, resulting in faster loading times and better user experience.\n\n- [Base64 Encoding & Performance, Part 1 and 2 by Harry Roberts](https://csswizardry.com/2017/02/base64-encoding-and-performance/)\n- [A closer look at Base64 image performance – The Page Not Found Blog](http://www.andygup.net/a-closer-look-at-base64-image-performance/)\n- [When to base64 encode images (and when not to) | David Calhoun](https://www.davidbcalhoun.com/2011/when-to-base64-encode-images-and-when-not-to/)\n";
				}
				function compiledContent$J() {
					return html$J;
				}
				function getHeadings$J() {
					return [{"depth":1,"slug":"avoid-base64-images","text":"Avoid Base64 Images"}];
				}

				const Content$J = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter$J;
					content.file = file$J;
					content.url = url$J;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html$J)}`;
				});

const __vite_glob_0_223 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	Content: Content$J,
	compiledContent: compiledContent$J,
	default: Content$J,
	file: file$J,
	frontmatter: frontmatter$J,
	getHeadings: getHeadings$J,
	rawContent: rawContent$J,
	url: url$J
}, Symbol.toStringTag, { value: 'Module' }));

const html$I = "<h1 id=\"avoid-inline-css\">Avoid Inline CSS</h1>\n<blockquote>\n<p>Avoid using embed or inline CSS inside your <code>&#x3C;body></code> (Not valid for HTTP/2)</p>\n</blockquote>\n<p>One of the first reasons is because it’s a good practice to separate content from design. It also helps you have a more maintainable code and keep your site accessible. But regarding performance, it’s simply because it decreases the file size of your HTML pages and the load time.</p>\n<p>Always use external stylesheets or embed CSS in your <code>&#x3C;head></code> (and follow the others CSS performance rules)</p>\n<ul>\n<li><a href=\"https://www.lifewire.com/avoid-inline-styles-for-css-3466846\" rel=\"noopener noreferrer nofollow\" target=\"_blank\">Observe CSS Best Practices: Avoid CSS Inline Styles</a></li>\n</ul>";

				const frontmatter$I = {};
				const file$I = "/workspaces/developer-roadmap/src/data/best-practices/frontend-performance/content/avoid-inline-css.md";
				const url$I = undefined;
				function rawContent$I() {
					return "# Avoid Inline CSS\n\n> Avoid using embed or inline CSS inside your `<body>` (Not valid for HTTP/2)\n\nOne of the first reasons is because it's a good practice to separate content from design. It also helps you have a more maintainable code and keep your site accessible. But regarding performance, it's simply because it decreases the file size of your HTML pages and the load time.\n\nAlways use external stylesheets or embed CSS in your `<head>` (and follow the others CSS performance rules)\n\n- [Observe CSS Best Practices: Avoid CSS Inline Styles](https://www.lifewire.com/avoid-inline-styles-for-css-3466846)\n";
				}
				function compiledContent$I() {
					return html$I;
				}
				function getHeadings$I() {
					return [{"depth":1,"slug":"avoid-inline-css","text":"Avoid Inline CSS"}];
				}

				const Content$I = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter$I;
					content.file = file$I;
					content.url = url$I;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html$I)}`;
				});

const __vite_glob_0_224 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	Content: Content$I,
	compiledContent: compiledContent$I,
	default: Content$I,
	file: file$I,
	frontmatter: frontmatter$I,
	getHeadings: getHeadings$I,
	rawContent: rawContent$I,
	url: url$I
}, Symbol.toStringTag, { value: 'Module' }));

const html$H = "<h1 id=\"avoid-inline-javascript\">Avoid Inline JavaScript</h1>\n<blockquote>\n<p>Avoid having multiple JavaScript codes embedded in the middle of your body. Regroup your JavaScript code inside external files or eventually in the <code>&#x3C;head></code> or at the end of your page (before <code>&#x3C;/body></code>).</p>\n</blockquote>\n<p>Placing JavaScript embedded code directly in your <code>&#x3C;body></code> can slow down your page because it loads while the DOM is being built. The best option is to use external files with async or defer to avoid blocking the DOM. Another option is to place some scripts inside your <code>&#x3C;head></code>. Most of the time analytics code or small script that need to load before the DOM gets to main processing.</p>\n<p>Ensure that all your files are loaded using <code>async</code> or <code>defer</code> and decide wisely the code that you will need to inject in your <code>&#x3C;head></code>.</p>\n<ul>\n<li><a href=\"https://www.upwork.com/hiring/development/11-tips-to-optimize-javascript-and-improve-website-loading-speeds/\" rel=\"noopener noreferrer nofollow\" target=\"_blank\">11 Tips to Optimize JavaScript and Improve Website Loading Speeds</a></li>\n</ul>";

				const frontmatter$H = {};
				const file$H = "/workspaces/developer-roadmap/src/data/best-practices/frontend-performance/content/avoid-multiple-inline-js-snippets.md";
				const url$H = undefined;
				function rawContent$H() {
					return "# Avoid Inline JavaScript\n\n> Avoid having multiple JavaScript codes embedded in the middle of your body. Regroup your JavaScript code inside external files or eventually in the `<head>` or at the end of your page (before `</body>`).\n\nPlacing JavaScript embedded code directly in your `<body>` can slow down your page because it loads while the DOM is being built. The best option is to use external files with async or defer to avoid blocking the DOM. Another option is to place some scripts inside your `<head>`. Most of the time analytics code or small script that need to load before the DOM gets to main processing.\n\nEnsure that all your files are loaded using `async` or `defer` and decide wisely the code that you will need to inject in your `<head>`.\n\n- [11 Tips to Optimize JavaScript and Improve Website Loading Speeds](https://www.upwork.com/hiring/development/11-tips-to-optimize-javascript-and-improve-website-loading-speeds/)\n";
				}
				function compiledContent$H() {
					return html$H;
				}
				function getHeadings$H() {
					return [{"depth":1,"slug":"avoid-inline-javascript","text":"Avoid Inline JavaScript"}];
				}

				const Content$H = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter$H;
					content.file = file$H;
					content.url = url$H;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html$H)}`;
				});

const __vite_glob_0_225 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	Content: Content$H,
	compiledContent: compiledContent$H,
	default: Content$H,
	file: file$H,
	frontmatter: frontmatter$H,
	getHeadings: getHeadings$H,
	rawContent: rawContent$H,
	url: url$H
}, Symbol.toStringTag, { value: 'Module' }));

const html$G = "<h1 id=\"bundlephobia\">Bundlephobia</h1>\n<p>Bundlephobia is a website and npm package that allows developers to search for the size of any JavaScript package before adding it to their project. It provides information on the size of the package, as well as the size of its dependencies, to help developers make informed decisions about which packages to use and how they may impact the overall size of their application. Bundlephobia also offers badges which can be added to your GitHub README.md file to show the size of your package.</p>\n<ul>\n<li><a href=\"https://bundlephobia.com/\" rel=\"noopener noreferrer nofollow\" target=\"_blank\">Official Website - Bundlephobia</a></li>\n</ul>";

				const frontmatter$G = {};
				const file$G = "/workspaces/developer-roadmap/src/data/best-practices/frontend-performance/content/bundlephobia.md";
				const url$G = undefined;
				function rawContent$G() {
					return "# Bundlephobia\n\nBundlephobia is a website and npm package that allows developers to search for the size of any JavaScript package before adding it to their project. It provides information on the size of the package, as well as the size of its dependencies, to help developers make informed decisions about which packages to use and how they may impact the overall size of their application. Bundlephobia also offers badges which can be added to your GitHub README.md file to show the size of your package.\n\n- [Official Website - Bundlephobia](https://bundlephobia.com/)\n";
				}
				function compiledContent$G() {
					return html$G;
				}
				function getHeadings$G() {
					return [{"depth":1,"slug":"bundlephobia","text":"Bundlephobia"}];
				}

				const Content$G = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter$G;
					content.file = file$G;
					content.url = url$G;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html$G)}`;
				});

const __vite_glob_0_226 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	Content: Content$G,
	compiledContent: compiledContent$G,
	default: Content$G,
	file: file$G,
	frontmatter: frontmatter$G,
	getHeadings: getHeadings$G,
	rawContent: rawContent$G,
	url: url$G
}, Symbol.toStringTag, { value: 'Module' }));

const html$F = "<h1 id=\"check-dependency-size\">Check Dependency Size</h1>\n<blockquote>\n<p>Ensure to use wisely external libraries, most of the time, you can use a lighter library for a same functionality.</p>\n</blockquote>\n<p>You may be tempted to use one of the 745 000 packages you can find on npm, but you need to choose the best package for your needs. For example, MomentJS is an awesome library but with a lot of methods you may never use, that’s why Day.js was created. It’s just 2kB vs 16.4kB gz for Moment.</p>\n<p>Always compare and choose the best and lighter library for your needs. You can also use tools like <a href=\"http://www.npmtrends.com/\" rel=\"noopener noreferrer nofollow\" target=\"_blank\">npm trends</a> to compare NPM package downloads counts or <a href=\"https://bundlephobia.com/\" rel=\"noopener noreferrer nofollow\" target=\"_blank\">Bundlephobia</a> to know the size of your dependencies.</p>\n<ul>\n<li><a href=\"https://github.com/ai/size-limit\" rel=\"noopener noreferrer nofollow\" target=\"_blank\">ai/size-limit: Prevent JS libraries bloat</a></li>\n<li><a href=\"https://www.npmjs.com/package/webpack-bundle-analyzer\" rel=\"noopener noreferrer nofollow\" target=\"_blank\">webpack-bundle-analyzer - npm</a></li>\n<li><a href=\"https://www.npmjs.com/package/js-dependency-viewer\" rel=\"noopener noreferrer nofollow\" target=\"_blank\">js-dependency-viewer - npm</a></li>\n<li><a href=\"https://evilmartians.com/chronicles/size-limit-make-the-web-lighter\" rel=\"noopener noreferrer nofollow\" target=\"_blank\">Size Limit: Make the Web lighter</a></li>\n</ul>";

				const frontmatter$F = {};
				const file$F = "/workspaces/developer-roadmap/src/data/best-practices/frontend-performance/content/check-dependency-size.md";
				const url$F = undefined;
				function rawContent$F() {
					return "# Check Dependency Size\n\n> Ensure to use wisely external libraries, most of the time, you can use a lighter library for a same functionality.\n\nYou may be tempted to use one of the 745 000 packages you can find on npm, but you need to choose the best package for your needs. For example, MomentJS is an awesome library but with a lot of methods you may never use, that's why Day.js was created. It's just 2kB vs 16.4kB gz for Moment.\n\nAlways compare and choose the best and lighter library for your needs. You can also use tools like [npm trends](http://www.npmtrends.com/) to compare NPM package downloads counts or [Bundlephobia](https://bundlephobia.com/) to know the size of your dependencies.\n\n- [ai/size-limit: Prevent JS libraries bloat](https://github.com/ai/size-limit)\n- [webpack-bundle-analyzer - npm](https://www.npmjs.com/package/webpack-bundle-analyzer)\n- [js-dependency-viewer - npm](https://www.npmjs.com/package/js-dependency-viewer)\n- [Size Limit: Make the Web lighter](https://evilmartians.com/chronicles/size-limit-make-the-web-lighter)\n";
				}
				function compiledContent$F() {
					return html$F;
				}
				function getHeadings$F() {
					return [{"depth":1,"slug":"check-dependency-size","text":"Check Dependency Size"}];
				}

				const Content$F = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter$F;
					content.file = file$F;
					content.url = url$F;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html$F)}`;
				});

const __vite_glob_0_227 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	Content: Content$F,
	compiledContent: compiledContent$F,
	default: Content$F,
	file: file$F,
	frontmatter: frontmatter$F,
	getHeadings: getHeadings$F,
	rawContent: rawContent$F,
	url: url$F
}, Symbol.toStringTag, { value: 'Module' }));

const html$E = "<h1 id=\"image-format\">Image Format</h1>\n<blockquote>\n<p>Choose your image format appropriately</p>\n</blockquote>\n<p>To ensure that your images don’t slow your website, choose the format that will correspond to your image. If it’s a photo, JPEG is most of the time more appropriate than PNG or GIF. However, don’t forget to look at the more modern formats that can reduce the size of your files. Each image format has pros and cons, so it’s important to know these to make the best choice possible.</p>\n<p>Use <a href=\"https://developers.google.com/web/tools/lighthouse/\" rel=\"noopener noreferrer nofollow\" target=\"_blank\">Lighthouse</a> to identify which images can eventually use modern formats (like JPEG 2000m, JPEG XR or WebP). Compare different formats, sometimes using PNG8 is better than PNG16, sometimes it’s not.</p>\n<ul>\n<li><a href=\"https://developers.google.com/web/tools/lighthouse/audits/webp\" rel=\"noopener noreferrer nofollow\" target=\"_blank\">Serve Images in Modern Formats</a></li>\n<li><a href=\"https://www.sitepoint.com/what-is-the-right-image-format-for-your-website/\" rel=\"noopener noreferrer nofollow\" target=\"_blank\">What Is the Right Image Format for Your Website?</a></li>\n<li><a href=\"https://www.sitepoint.com/png8-the-clear-winner/\" rel=\"noopener noreferrer nofollow\" target=\"_blank\">PNG8 - The Clear Winner</a></li>\n<li><a href=\"https://www.diyphotography.net/8-bit-vs-16-bit-color-depth-use-matters/\" rel=\"noopener noreferrer nofollow\" target=\"_blank\">8-bit vs 16-bit - What Color Depth You Should Use And Why It Matters</a></li>\n</ul>";

				const frontmatter$E = {};
				const file$E = "/workspaces/developer-roadmap/src/data/best-practices/frontend-performance/content/choose-image-format-approprietly.md";
				const url$E = undefined;
				function rawContent$E() {
					return "# Image Format\n\n> Choose your image format appropriately\n\nTo ensure that your images don't slow your website, choose the format that will correspond to your image. If it's a photo, JPEG is most of the time more appropriate than PNG or GIF. However, don't forget to look at the more modern formats that can reduce the size of your files. Each image format has pros and cons, so it's important to know these to make the best choice possible.\n\nUse [Lighthouse](https://developers.google.com/web/tools/lighthouse/) to identify which images can eventually use modern formats (like JPEG 2000m, JPEG XR or WebP). Compare different formats, sometimes using PNG8 is better than PNG16, sometimes it's not.\n\n- [Serve Images in Modern Formats](https://developers.google.com/web/tools/lighthouse/audits/webp)\n- [What Is the Right Image Format for Your Website?](https://www.sitepoint.com/what-is-the-right-image-format-for-your-website/)\n- [PNG8 - The Clear Winner](https://www.sitepoint.com/png8-the-clear-winner/)\n- [8-bit vs 16-bit - What Color Depth You Should Use And Why It Matters](https://www.diyphotography.net/8-bit-vs-16-bit-color-depth-use-matters/)\n";
				}
				function compiledContent$E() {
					return html$E;
				}
				function getHeadings$E() {
					return [{"depth":1,"slug":"image-format","text":"Image Format"}];
				}

				const Content$E = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter$E;
					content.file = file$E;
					content.url = url$E;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html$E)}`;
				});

const __vite_glob_0_228 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	Content: Content$E,
	compiledContent: compiledContent$E,
	default: Content$E,
	file: file$E,
	frontmatter: frontmatter$E,
	getHeadings: getHeadings$E,
	rawContent: rawContent$E,
	url: url$E
}, Symbol.toStringTag, { value: 'Module' }));

const html$D = "<h1 id=\"chrome-devtools\">Chrome DevTools</h1>\n<p>Chrome DevTools is a set of web development tools built into the Google Chrome browser. It allows developers to inspect and debug the front-end of web applications.</p>\n<p>Some of the benefits of using Chrome DevTools include:</p>\n<ul>\n<li>Inspecting and editing HTML and CSS in real-time, which can be useful for identifying and fixing layout issues</li>\n<li>Debugging JavaScript code, including setting breakpoints, stepping through code, and examining the call stack</li>\n<li>Profiling the performance of web pages, including identifying slow-running JavaScript code and analyzing network requests</li>\n<li>Inspecting and debugging browser-side storage, including cookies, local storage, and indexedDB</li>\n<li>Auditing web pages for performance, accessibility, and best practices</li>\n</ul>\n<p>Chrome DevTools are a powerful and essential tool for web developers, as it helps to improve debugging, testing, and optimization of the web application.</p>\n<ul>\n<li><a href=\"https://developer.chrome.com/docs/devtools/\" rel=\"noopener noreferrer nofollow\" target=\"_blank\">Chrome DevTools Docs</a></li>\n</ul>";

				const frontmatter$D = {};
				const file$D = "/workspaces/developer-roadmap/src/data/best-practices/frontend-performance/content/chrome-dev-tools.md";
				const url$D = undefined;
				function rawContent$D() {
					return "# Chrome DevTools\n\nChrome DevTools is a set of web development tools built into the Google Chrome browser. It allows developers to inspect and debug the front-end of web applications.\n\nSome of the benefits of using Chrome DevTools include:\n\n- Inspecting and editing HTML and CSS in real-time, which can be useful for identifying and fixing layout issues\n- Debugging JavaScript code, including setting breakpoints, stepping through code, and examining the call stack\n- Profiling the performance of web pages, including identifying slow-running JavaScript code and analyzing network requests\n- Inspecting and debugging browser-side storage, including cookies, local storage, and indexedDB\n- Auditing web pages for performance, accessibility, and best practices\n\nChrome DevTools are a powerful and essential tool for web developers, as it helps to improve debugging, testing, and optimization of the web application.\n\n- [Chrome DevTools Docs](https://developer.chrome.com/docs/devtools/)\n";
				}
				function compiledContent$D() {
					return html$D;
				}
				function getHeadings$D() {
					return [{"depth":1,"slug":"chrome-devtools","text":"Chrome DevTools"}];
				}

				const Content$D = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter$D;
					content.file = file$D;
					content.url = url$D;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html$D)}`;
				});

const __vite_glob_0_229 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	Content: Content$D,
	compiledContent: compiledContent$D,
	default: Content$D,
	file: file$D,
	frontmatter: frontmatter$D,
	getHeadings: getHeadings$D,
	rawContent: rawContent$D,
	url: url$D
}, Symbol.toStringTag, { value: 'Module' }));

const html$C = "<h1 id=\"images-optimization\">Images Optimization</h1>\n<blockquote>\n<p>Your images are optimized, compressed without direct impact to the end user.</p>\n</blockquote>\n<p>Optimized images load faster in your browser and consume less data.</p>\n<ul>\n<li>\n<p>Try using CSS3 effects when it’s possible (instead of a small image</p>\n</li>\n<li>\n<p>When it’s possible, use fonts instead of text encoded in your images</p>\n</li>\n<li>\n<p>Use SVG</p>\n</li>\n<li>\n<p>Use a tool and specify a level compression under 85.</p>\n</li>\n<li>\n<p><a href=\"https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/image-optimization\" rel=\"noopener noreferrer nofollow\" target=\"_blank\">Image Optimization</a></p>\n</li>\n<li>\n<p><a href=\"https://tinyjpg.com/\" rel=\"noopener noreferrer nofollow\" target=\"_blank\">TinyJPG – Compress JPEG images intelligently</a></p>\n</li>\n<li>\n<p><a href=\"https://kraken.io/web-interface\" rel=\"noopener noreferrer nofollow\" target=\"_blank\">Kraken.io - Online Image Optimizer</a></p>\n</li>\n<li>\n<p><a href=\"https://compressor.io/compress\" rel=\"noopener noreferrer nofollow\" target=\"_blank\">Compressor.io</a></p>\n</li>\n<li>\n<p><a href=\"https://webspeedtest.cloudinary.com\" rel=\"noopener noreferrer nofollow\" target=\"_blank\">Cloudinary - Image Analysis Tool</a></p>\n</li>\n<li>\n<p><a href=\"https://demo.imgeng.in\" rel=\"noopener noreferrer nofollow\" target=\"_blank\">ImageEngine - Image Webpage Loading Test</a></p>\n</li>\n<li>\n<p><a href=\"https://jakearchibald.github.io/svgomg/\" rel=\"noopener noreferrer nofollow\" target=\"_blank\">SVGOMG - Optimize SVG vector graphics files</a></p>\n</li>\n</ul>";

				const frontmatter$C = {};
				const file$C = "/workspaces/developer-roadmap/src/data/best-practices/frontend-performance/content/compress-your-images.md";
				const url$C = undefined;
				function rawContent$C() {
					return "# Images Optimization\n\n> Your images are optimized, compressed without direct impact to the end user.\n\nOptimized images load faster in your browser and consume less data.\n\n- Try using CSS3 effects when it's possible (instead of a small image\n- When it's possible, use fonts instead of text encoded in your images\n- Use SVG\n- Use a tool and specify a level compression under 85.\n\n- [Image Optimization](https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/image-optimization)\n- [TinyJPG – Compress JPEG images intelligently](https://tinyjpg.com/)\n- [Kraken.io - Online Image Optimizer](https://kraken.io/web-interface)\n- [Compressor.io](https://compressor.io/compress)\n- [Cloudinary - Image Analysis Tool](https://webspeedtest.cloudinary.com)\n- [ImageEngine - Image Webpage Loading Test](https://demo.imgeng.in)\n- [SVGOMG - Optimize SVG vector graphics files](https://jakearchibald.github.io/svgomg/)\n";
				}
				function compiledContent$C() {
					return html$C;
				}
				function getHeadings$C() {
					return [{"depth":1,"slug":"images-optimization","text":"Images Optimization"}];
				}

				const Content$C = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter$C;
					content.file = file$C;
					content.url = url$C;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html$C)}`;
				});

const __vite_glob_0_230 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	Content: Content$C,
	compiledContent: compiledContent$C,
	default: Content$C,
	file: file$C,
	frontmatter: frontmatter$C,
	getHeadings: getHeadings$C,
	rawContent: rawContent$C,
	url: url$C
}, Symbol.toStringTag, { value: 'Module' }));

const html$B = "<h1 id=\"css-concatenation\">CSS Concatenation</h1>\n<blockquote>\n<p>CSS files are concatenated in a single file (Not always valid for HTTP/2)</p>\n</blockquote>\n<p>If you are still using HTTP/1, you may need to still concatenate your files, it’s less true if your server use HTTP/2 (tests should be made).</p>\n<ul>\n<li>\n<p>Use online tool or any plugin before or during your build or your deployment to concatenate your files.</p>\n</li>\n<li>\n<p>Ensure, of course, that concatenation does not break your project</p>\n</li>\n<li>\n<p><a href=\"https://hpbn.co/optimizing-application-delivery/#optimizing-for-http2\" rel=\"noopener noreferrer nofollow\" target=\"_blank\">HTTP: Optimizing Application Delivery - High Performance Browser Networking (O’Reilly)</a></p>\n</li>\n<li>\n<p><a href=\"https://deliciousbrains.com/performance-best-practices-http2/\" rel=\"noopener noreferrer nofollow\" target=\"_blank\">Performance Best Practices in the HTTP/2 Era</a></p>\n</li>\n</ul>";

				const frontmatter$B = {};
				const file$B = "/workspaces/developer-roadmap/src/data/best-practices/frontend-performance/content/concatenate-css-single-file.md";
				const url$B = undefined;
				function rawContent$B() {
					return "# CSS Concatenation\n\n> CSS files are concatenated in a single file (Not always valid for HTTP/2)\n\nIf you are still using HTTP/1, you may need to still concatenate your files, it's less true if your server use HTTP/2 (tests should be made).\n\n- Use online tool or any plugin before or during your build or your deployment to concatenate your files.\n- Ensure, of course, that concatenation does not break your project\n\n- [HTTP: Optimizing Application Delivery - High Performance Browser Networking (O'Reilly)](https://hpbn.co/optimizing-application-delivery/#optimizing-for-http2)\n- [Performance Best Practices in the HTTP/2 Era](https://deliciousbrains.com/performance-best-practices-http2/)\n";
				}
				function compiledContent$B() {
					return html$B;
				}
				function getHeadings$B() {
					return [{"depth":1,"slug":"css-concatenation","text":"CSS Concatenation"}];
				}

				const Content$B = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter$B;
					content.file = file$B;
					content.url = url$B;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html$B)}`;
				});

const __vite_glob_0_231 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	Content: Content$B,
	compiledContent: compiledContent$B,
	default: Content$B,
	file: file$B,
	frontmatter: frontmatter$B,
	getHeadings: getHeadings$B,
	rawContent: rawContent$B,
	url: url$B
}, Symbol.toStringTag, { value: 'Module' }));

const html$A = "<h1 id=\"cookie-size\">Cookie Size</h1>\n<blockquote>\n<p>If you are using cookies, be sure each cookie doesn’t exceed 4096 bytes and your domain name doesn’t have more than 20 cookies.</p>\n</blockquote>\n<p>Cookies are exchanged in the HTTP headers between web servers and browsers. It’s important to keep the size of cookies as low as possible to minimize the impact on the user’s response time.</p>\n<ul>\n<li><a href=\"https://tools.ietf.org/html/rfc6265\" rel=\"noopener noreferrer nofollow\" target=\"_blank\">Cookie specification: RFC 6265</a></li>\n<li><a href=\"https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies\" rel=\"noopener noreferrer nofollow\" target=\"_blank\">Cookies</a></li>\n<li><a href=\"http://browsercookielimits.squawky.net/\" rel=\"noopener noreferrer nofollow\" target=\"_blank\">Browser Cookie Limits</a></li>\n<li><a href=\"http://www.monitis.com/blog/website-performance-cookies-dont-taste-so-good/\" rel=\"noopener noreferrer nofollow\" target=\"_blank\">Website Performance: Cookies Don’t Taste So Good - Monitis Blog</a></li>\n<li><a href=\"https://www.globaldots.com/googles-web-performance-best-practices-3-minimize-request-overhead/\" rel=\"noopener noreferrer nofollow\" target=\"_blank\">Google’s Web Performance Best Practices #3: Minimize Request Overhead - GlobalDots Blog</a></li>\n</ul>";

				const frontmatter$A = {};
				const file$A = "/workspaces/developer-roadmap/src/data/best-practices/frontend-performance/content/cookie-size-less-4096-bytes.md";
				const url$A = undefined;
				function rawContent$A() {
					return "# Cookie Size\n\n> If you are using cookies, be sure each cookie doesn't exceed 4096 bytes and your domain name doesn't have more than 20 cookies.\n\nCookies are exchanged in the HTTP headers between web servers and browsers. It's important to keep the size of cookies as low as possible to minimize the impact on the user's response time.\n\n- [Cookie specification: RFC 6265](https://tools.ietf.org/html/rfc6265)\n- [Cookies](https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies)\n- [Browser Cookie Limits](http://browsercookielimits.squawky.net/)\n- [Website Performance: Cookies Don't Taste So Good - Monitis Blog](http://www.monitis.com/blog/website-performance-cookies-dont-taste-so-good/)\n- [Google's Web Performance Best Practices #3: Minimize Request Overhead - GlobalDots Blog](https://www.globaldots.com/googles-web-performance-best-practices-3-minimize-request-overhead/)\n";
				}
				function compiledContent$A() {
					return html$A;
				}
				function getHeadings$A() {
					return [{"depth":1,"slug":"cookie-size","text":"Cookie Size"}];
				}

				const Content$A = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter$A;
					content.file = file$A;
					content.url = url$A;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html$A)}`;
				});

const __vite_glob_0_232 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	Content: Content$A,
	compiledContent: compiledContent$A,
	default: Content$A,
	file: file$A,
	frontmatter: frontmatter$A,
	getHeadings: getHeadings$A,
	rawContent: rawContent$A,
	url: url$A
}, Symbol.toStringTag, { value: 'Module' }));

const html$z = "<h1 id=\"enable-compression\">Enable Compression</h1>\n<p>Use a compression method such as Gzip or Brotli to reduce the size of your JavaScript files. With smaller file sizes, users will be able to download the asset faster, resulting in improved performance.</p>\n<ul>\n<li><a href=\"https://checkgzipcompression.net/\" rel=\"noopener noreferrer nofollow\" target=\"_blank\">Check GZIP compression</a></li>\n<li><a href=\"https://tools.keycdn.com/brotli-test\" rel=\"noopener noreferrer nofollow\" target=\"_blank\">Check Brotli Compression</a></li>\n<li><a href=\"https://caniuse.com/#feat=brotli\" rel=\"noopener noreferrer nofollow\" target=\"_blank\">Can I use… Brotli</a></li>\n</ul>";

				const frontmatter$z = {};
				const file$z = "/workspaces/developer-roadmap/src/data/best-practices/frontend-performance/content/enable-compression.md";
				const url$z = undefined;
				function rawContent$z() {
					return "# Enable Compression\n\nUse a compression method such as Gzip or Brotli to reduce the size of your JavaScript files. With smaller file sizes, users will be able to download the asset faster, resulting in improved performance.\n\n- [Check GZIP compression](https://checkgzipcompression.net/)\n- [Check Brotli Compression](https://tools.keycdn.com/brotli-test)\n- [Can I use... Brotli](https://caniuse.com/#feat=brotli)\n";
				}
				function compiledContent$z() {
					return html$z;
				}
				function getHeadings$z() {
					return [{"depth":1,"slug":"enable-compression","text":"Enable Compression"}];
				}

				const Content$z = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter$z;
					content.file = file$z;
					content.url = url$z;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html$z)}`;
				});

const __vite_glob_0_233 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	Content: Content$z,
	compiledContent: compiledContent$z,
	default: Content$z,
	file: file$z,
	frontmatter: frontmatter$z,
	getHeadings: getHeadings$z,
	rawContent: rawContent$z,
	url: url$z
}, Symbol.toStringTag, { value: 'Module' }));

const html$y = "<h1 id=\"framework-guides\">Framework Guides</h1>\n<p>These guides are intended to help you optimize your application for performance when using a specific framework.</p>\n<h2 id=\"angular\">Angular</h2>\n<ul>\n<li><a href=\"https://github.com/mgechev/angular-performance-checklist\" rel=\"noopener noreferrer nofollow\" target=\"_blank\">Angular Performance Checklist</a></li>\n</ul>\n<h2 id=\"react\">React</h2>\n<ul>\n<li><a href=\"https://reactjs.org/docs/optimizing-performance.html\" rel=\"noopener noreferrer nofollow\" target=\"_blank\">Optimizing Performance - React</a></li>\n<li><a href=\"https://cloudinary.com/documentation/react_image_manipulation\" rel=\"noopener noreferrer nofollow\" target=\"_blank\">React image manipulation | Cloudinary</a></li>\n<li><a href=\"https://building.calibreapp.com/debugging-react-performance-with-react-16-and-chrome-devtools-c90698a522ad\" rel=\"noopener noreferrer nofollow\" target=\"_blank\">Debugging React performance with React 16 and Chrome Devtools.</a></li>\n<li><a href=\"https://web.dev/react/\" rel=\"noopener noreferrer nofollow\" target=\"_blank\">Build Performant - React</a></li>\n</ul>\n<h2 id=\"vue\">Vue</h2>\n<ul>\n<li><a href=\"https://learn-vuejs.github.io/vue-patterns/useful-links/\" rel=\"noopener noreferrer nofollow\" target=\"_blank\">Vue - Useful Links|Style Guide and Performance</a></li>\n</ul>";

				const frontmatter$y = {};
				const file$y = "/workspaces/developer-roadmap/src/data/best-practices/frontend-performance/content/framework-guides.md";
				const url$y = undefined;
				function rawContent$y() {
					return "# Framework Guides\n\nThese guides are intended to help you optimize your application for performance when using a specific framework.\n\n## Angular\n\n- [Angular Performance Checklist](https://github.com/mgechev/angular-performance-checklist)\n\n## React\n\n- [Optimizing Performance - React](https://reactjs.org/docs/optimizing-performance.html)\n- [React image manipulation | Cloudinary](https://cloudinary.com/documentation/react_image_manipulation)\n- [Debugging React performance with React 16 and Chrome Devtools.](https://building.calibreapp.com/debugging-react-performance-with-react-16-and-chrome-devtools-c90698a522ad)\n- [Build Performant - React](https://web.dev/react/)\n\n## Vue\n\n- [Vue - Useful Links|Style Guide and Performance](https://learn-vuejs.github.io/vue-patterns/useful-links/)\n";
				}
				function compiledContent$y() {
					return html$y;
				}
				function getHeadings$y() {
					return [{"depth":1,"slug":"framework-guides","text":"Framework Guides"},{"depth":2,"slug":"angular","text":"Angular"},{"depth":2,"slug":"react","text":"React"},{"depth":2,"slug":"vue","text":"Vue"}];
				}

				const Content$y = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter$y;
					content.file = file$y;
					content.url = url$y;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html$y)}`;
				});

const __vite_glob_0_234 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	Content: Content$y,
	compiledContent: compiledContent$y,
	default: Content$y,
	file: file$y,
	frontmatter: frontmatter$y,
	getHeadings: getHeadings$y,
	rawContent: rawContent$y,
	url: url$y
}, Symbol.toStringTag, { value: 'Module' }));

const html$x = "<h1 id=\"\"></h1>";

				const frontmatter$x = {};
				const file$x = "/workspaces/developer-roadmap/src/data/best-practices/frontend-performance/content/index.md";
				const url$x = undefined;
				function rawContent$x() {
					return "#\n";
				}
				function compiledContent$x() {
					return html$x;
				}
				function getHeadings$x() {
					return [{"depth":1,"slug":"","text":""}];
				}

				const Content$x = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter$x;
					content.file = file$x;
					content.url = url$x;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html$x)}`;
				});

const __vite_glob_0_235 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	Content: Content$x,
	compiledContent: compiledContent$x,
	default: Content$x,
	file: file$x,
	frontmatter: frontmatter$x,
	getHeadings: getHeadings$x,
	rawContent: rawContent$x,
	url: url$x
}, Symbol.toStringTag, { value: 'Module' }));

const html$w = "<h1 id=\"inline-critical-css\">Inline Critical CSS</h1>\n<blockquote>\n<p>The CSS critical (or “above the fold”) collects all the CSS used to render the visible portion of the page. It is embedded before your principal CSS call and between <code>&#x3C;style>&#x3C;/style></code> in a single line (minified if possible).</p>\n</blockquote>\n<p>Inlining critical CSS help to speed up the rendering of the web pages reducing the number of requests to the server.</p>\n<p>Generate the CSS critical with online tools or using a plugin like the one that Addy Osmani developed.</p>\n<ul>\n<li><a href=\"https://www.smashingmagazine.com/2015/08/understanding-critical-css/\" rel=\"noopener noreferrer nofollow\" target=\"_blank\">Understanding Critical CSS</a></li>\n<li><a href=\"https://github.com/addyosmani/critical\" rel=\"noopener noreferrer nofollow\" target=\"_blank\">Critical by Addy Osmani on GitHub</a> automates this.</li>\n<li><a href=\"https://gomakethings.com/inlining-critical-css-for-better-web-performance/\" rel=\"noopener noreferrer nofollow\" target=\"_blank\">Inlining critical CSS for better web performance | Go Make Things</a></li>\n<li><a href=\"https://www.sitelocity.com/critical-path-css-generator\" rel=\"noopener noreferrer nofollow\" target=\"_blank\">Critical Path CSS Generator - Prioritize above the fold content :: SiteLocity</a></li>\n<li><a href=\"https://developers.google.com/speed/docs/insights/PrioritizeVisibleContent\" rel=\"noopener noreferrer nofollow\" target=\"_blank\">Reduce the size of the above-the-fold content</a></li>\n</ul>";

				const frontmatter$w = {};
				const file$w = "/workspaces/developer-roadmap/src/data/best-practices/frontend-performance/content/inline-critical-css.md";
				const url$w = undefined;
				function rawContent$w() {
					return "# Inline Critical CSS\n\n> The CSS critical (or \"above the fold\") collects all the CSS used to render the visible portion of the page. It is embedded before your principal CSS call and between `<style></style>` in a single line (minified if possible).\n\nInlining critical CSS help to speed up the rendering of the web pages reducing the number of requests to the server.\n\nGenerate the CSS critical with online tools or using a plugin like the one that Addy Osmani developed.\n\n- [Understanding Critical CSS](https://www.smashingmagazine.com/2015/08/understanding-critical-css/)\n- [Critical by Addy Osmani on GitHub](https://github.com/addyosmani/critical) automates this.\n- [Inlining critical CSS for better web performance | Go Make Things](https://gomakethings.com/inlining-critical-css-for-better-web-performance/)\n- [Critical Path CSS Generator - Prioritize above the fold content :: SiteLocity](https://www.sitelocity.com/critical-path-css-generator)\n- [Reduce the size of the above-the-fold content](https://developers.google.com/speed/docs/insights/PrioritizeVisibleContent)\n";
				}
				function compiledContent$w() {
					return html$w;
				}
				function getHeadings$w() {
					return [{"depth":1,"slug":"inline-critical-css","text":"Inline Critical CSS"}];
				}

				const Content$w = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter$w;
					content.file = file$w;
					content.url = url$w;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html$w)}`;
				});

const __vite_glob_0_236 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	Content: Content$w,
	compiledContent: compiledContent$w,
	default: Content$w,
	file: file$w,
	frontmatter: frontmatter$w,
	getHeadings: getHeadings$w,
	rawContent: rawContent$w,
	url: url$w
}, Symbol.toStringTag, { value: 'Module' }));

const html$v = "<h1 id=\"cookie-size\">Cookie Size</h1>\n<blockquote>\n<p>If you are using cookies, be sure each cookie doesn’t exceed 4096 bytes and your domain name doesn’t have more than 20 cookies.</p>\n</blockquote>\n<p>Cookies are exchanged in the HTTP headers between web servers and browsers. It’s important to keep the size of cookies as low as possible to minimize the impact on the user’s response time.</p>\n<ul>\n<li><a href=\"https://tools.ietf.org/html/rfc6265\" rel=\"noopener noreferrer nofollow\" target=\"_blank\">Cookie specification: RFC 6265</a></li>\n<li><a href=\"https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies\" rel=\"noopener noreferrer nofollow\" target=\"_blank\">Cookies</a></li>\n<li><a href=\"http://browsercookielimits.squawky.net/\" rel=\"noopener noreferrer nofollow\" target=\"_blank\">Browser Cookie Limits</a></li>\n<li><a href=\"http://www.monitis.com/blog/website-performance-cookies-dont-taste-so-good/\" rel=\"noopener noreferrer nofollow\" target=\"_blank\">Website Performance: Cookies Don’t Taste So Good - Monitis Blog</a></li>\n<li><a href=\"https://www.globaldots.com/googles-web-performance-best-practices-3-minimize-request-overhead/\" rel=\"noopener noreferrer nofollow\" target=\"_blank\">Google’s Web Performance Best Practices #3: Minimize Request Overhead - GlobalDots Blog</a></li>\n</ul>";

				const frontmatter$v = {};
				const file$v = "/workspaces/developer-roadmap/src/data/best-practices/frontend-performance/content/keep-cookie-count-below-20.md";
				const url$v = undefined;
				function rawContent$v() {
					return "# Cookie Size\n\n> If you are using cookies, be sure each cookie doesn't exceed 4096 bytes and your domain name doesn't have more than 20 cookies.\n\nCookies are exchanged in the HTTP headers between web servers and browsers. It's important to keep the size of cookies as low as possible to minimize the impact on the user's response time.\n\n- [Cookie specification: RFC 6265](https://tools.ietf.org/html/rfc6265)\n- [Cookies](https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies)\n- [Browser Cookie Limits](http://browsercookielimits.squawky.net/)\n- [Website Performance: Cookies Don't Taste So Good - Monitis Blog](http://www.monitis.com/blog/website-performance-cookies-dont-taste-so-good/)\n- [Google's Web Performance Best Practices #3: Minimize Request Overhead - GlobalDots Blog](https://www.globaldots.com/googles-web-performance-best-practices-3-minimize-request-overhead/)\n";
				}
				function compiledContent$v() {
					return html$v;
				}
				function getHeadings$v() {
					return [{"depth":1,"slug":"cookie-size","text":"Cookie Size"}];
				}

				const Content$v = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter$v;
					content.file = file$v;
					content.url = url$v;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html$v)}`;
				});

const __vite_glob_0_237 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	Content: Content$v,
	compiledContent: compiledContent$v,
	default: Content$v,
	file: file$v,
	frontmatter: frontmatter$v,
	getHeadings: getHeadings$v,
	rawContent: rawContent$v,
	url: url$v
}, Symbol.toStringTag, { value: 'Module' }));

const html$u = "<h1 id=\"dependency-updates\">Dependency Updates</h1>\n<blockquote>\n<p>All JavaScript libraries used in your project are necessary (prefer Vanilla JavaScript for simple functionalities), updated to their latest version and don’t overwhelm your JavaScript with unnecessary methods.</p>\n</blockquote>\n<p>Most of the time, new versions come with optimization and security fix. You should use the most optimized code to speed up your project and ensure that you’ll not slow down your website or app without outdated plugin.</p>\n<p>If your project use NPM packages, <a href=\"https://www.npmjs.com/package/npm-check\" rel=\"noopener noreferrer nofollow\" target=\"_blank\">npm-check</a> is a pretty interesting library to upgrade / update your libraries. <a href=\"https://greenkeeper.io/\" rel=\"noopener noreferrer nofollow\" target=\"_blank\">Greenkeeper</a> can automatically look for your dependencies and suggest an update every time a new version is out.</p>\n<ul>\n<li><a href=\"https://plainjs.com/\" rel=\"noopener noreferrer nofollow\" target=\"_blank\">Vanilla JavaScript for building powerful web applications</a></li>\n</ul>";

				const frontmatter$u = {};
				const file$u = "/workspaces/developer-roadmap/src/data/best-practices/frontend-performance/content/keep-dependencies-up-to-date.md";
				const url$u = undefined;
				function rawContent$u() {
					return "# Dependency Updates\n\n> All JavaScript libraries used in your project are necessary (prefer Vanilla JavaScript for simple functionalities), updated to their latest version and don't overwhelm your JavaScript with unnecessary methods.\n\nMost of the time, new versions come with optimization and security fix. You should use the most optimized code to speed up your project and ensure that you'll not slow down your website or app without outdated plugin.\n\nIf your project use NPM packages, [npm-check](https://www.npmjs.com/package/npm-check) is a pretty interesting library to upgrade / update your libraries. [Greenkeeper](https://greenkeeper.io/) can automatically look for your dependencies and suggest an update every time a new version is out.\n\n- [Vanilla JavaScript for building powerful web applications](https://plainjs.com/)\n";
				}
				function compiledContent$u() {
					return html$u;
				}
				function getHeadings$u() {
					return [{"depth":1,"slug":"dependency-updates","text":"Dependency Updates"}];
				}

				const Content$u = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter$u;
					content.file = file$u;
					content.url = url$u;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html$u)}`;
				});

const __vite_glob_0_238 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	Content: Content$u,
	compiledContent: compiledContent$u,
	default: Content$u,
	file: file$u,
	frontmatter: frontmatter$u,
	getHeadings: getHeadings$u,
	rawContent: rawContent$u,
	url: url$u
}, Symbol.toStringTag, { value: 'Module' }));

const html$t = "<h1 id=\"keep-ttfb--13s\">Keep TTFB &#x3C; 1.3s</h1>\n<p>Reduce as much as you can the time your browser waits before receiving data.</p>\n<ul>\n<li><a href=\"https://scaleyourcode.com/blog/article/27\" rel=\"noopener noreferrer nofollow\" target=\"_blank\">What is Waiting (TTFB) in DevTools, and what to do about it</a></li>\n<li><a href=\"https://scaleyourcode.com/blog/article/7\" rel=\"noopener noreferrer nofollow\" target=\"_blank\">Monitoring your servers with free tools is easy</a></li>\n<li><a href=\"https://latency.apex.sh\" rel=\"noopener noreferrer nofollow\" target=\"_blank\">Global latency testing tool</a></li>\n</ul>";

				const frontmatter$t = {};
				const file$t = "/workspaces/developer-roadmap/src/data/best-practices/frontend-performance/content/keep-ttfb-less-1-3s.md";
				const url$t = undefined;
				function rawContent$t() {
					return "# Keep TTFB < 1.3s\n\nReduce as much as you can the time your browser waits before receiving data.\n\n- [What is Waiting (TTFB) in DevTools, and what to do about it](https://scaleyourcode.com/blog/article/27)\n- [Monitoring your servers with free tools is easy](https://scaleyourcode.com/blog/article/7)\n- [Global latency testing tool](https://latency.apex.sh)\n";
				}
				function compiledContent$t() {
					return html$t;
				}
				function getHeadings$t() {
					return [{"depth":1,"slug":"keep-ttfb--13s","text":"Keep TTFB < 1.3s"}];
				}

				const Content$t = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter$t;
					content.file = file$t;
					content.url = url$t;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html$t)}`;
				});

const __vite_glob_0_239 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	Content: Content$t,
	compiledContent: compiledContent$t,
	default: Content$t,
	file: file$t,
	frontmatter: frontmatter$t,
	getHeadings: getHeadings$t,
	rawContent: rawContent$t,
	url: url$t
}, Symbol.toStringTag, { value: 'Module' }));

const html$s = "<h1 id=\"keep-web-font-size-under-300kb\">Keep Web Font Size Under 300kb</h1>\n<p>Web fonts are a great way to add style to your website. However, they can also be a major performance bottleneck. The more fonts you use, the more time it takes for the browser to download and render the page. This can lead to a poor user experience and a high bounce rate.</p>\n<p>Webfont sizes shouldn’t exceed 300kb (all variants included) and are optimized for performance.</p>\n<ul>\n<li><a href=\"https://httparchive.org/reports/page-weight#bytesFont\" rel=\"noopener noreferrer nofollow\" target=\"_blank\">Font Bytes - Page Weight</a></li>\n</ul>";

				const frontmatter$s = {};
				const file$s = "/workspaces/developer-roadmap/src/data/best-practices/frontend-performance/content/keep-web-font-under-300k.md";
				const url$s = undefined;
				function rawContent$s() {
					return "# Keep Web Font Size Under 300kb\n\nWeb fonts are a great way to add style to your website. However, they can also be a major performance bottleneck. The more fonts you use, the more time it takes for the browser to download and render the page. This can lead to a poor user experience and a high bounce rate.\n\nWebfont sizes shouldn't exceed 300kb (all variants included) and are optimized for performance.\n\n- [Font Bytes - Page Weight](https://httparchive.org/reports/page-weight#bytesFont)\n";
				}
				function compiledContent$s() {
					return html$s;
				}
				function getHeadings$s() {
					return [{"depth":1,"slug":"keep-web-font-size-under-300kb","text":"Keep Web Font Size Under 300kb"}];
				}

				const Content$s = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter$s;
					content.file = file$s;
					content.url = url$s;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html$s)}`;
				});

const __vite_glob_0_240 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	Content: Content$s,
	compiledContent: compiledContent$s,
	default: Content$s,
	file: file$s,
	frontmatter: frontmatter$s,
	getHeadings: getHeadings$s,
	rawContent: rawContent$s,
	url: url$s
}, Symbol.toStringTag, { value: 'Module' }));

const html$r = "<h1 id=\"lighthouse\">Lighthouse</h1>\n<p>Lighthouse is an open-source tool developed by Google that is used to audit the performance, accessibility, and SEO of web pages. It is available as a browser extension and as a command-line tool, and it can be run on any web page to generate a report with recommendations for improvement.</p>\n<p>Lighthouse works by simulating the load and interaction of a web page and measuring various performance metrics, such as load time, time to first paint, and time to interactive. It also checks for common issues such as incorrect image sizes, missing alt text, and broken links.</p>\n<p>Lighthouse provides a comprehensive and easy-to-use tool for identifying and fixing performance and accessibility issues on web pages. It is widely used by web developers and is integrated into many popular development tools.</p>\n<p>Visit the following resources to learn more:</p>\n<ul>\n<li><a href=\"https://developers.google.com/web/tools/lighthouse\" rel=\"noopener noreferrer nofollow\" target=\"_blank\">Lighthouse - Google Developers</a></li>\n</ul>";

				const frontmatter$r = {};
				const file$r = "/workspaces/developer-roadmap/src/data/best-practices/frontend-performance/content/lighthouse.md";
				const url$r = undefined;
				function rawContent$r() {
					return "# Lighthouse\n\nLighthouse is an open-source tool developed by Google that is used to audit the performance, accessibility, and SEO of web pages. It is available as a browser extension and as a command-line tool, and it can be run on any web page to generate a report with recommendations for improvement.\n\nLighthouse works by simulating the load and interaction of a web page and measuring various performance metrics, such as load time, time to first paint, and time to interactive. It also checks for common issues such as incorrect image sizes, missing alt text, and broken links.\n\nLighthouse provides a comprehensive and easy-to-use tool for identifying and fixing performance and accessibility issues on web pages. It is widely used by web developers and is integrated into many popular development tools.\n\nVisit the following resources to learn more:\n\n- [Lighthouse - Google Developers](https://developers.google.com/web/tools/lighthouse)\n";
				}
				function compiledContent$r() {
					return html$r;
				}
				function getHeadings$r() {
					return [{"depth":1,"slug":"lighthouse","text":"Lighthouse"}];
				}

				const Content$r = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter$r;
					content.file = file$r;
					content.url = url$r;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html$r)}`;
				});

const __vite_glob_0_241 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	Content: Content$r,
	compiledContent: compiledContent$r,
	default: Content$r,
	file: file$r,
	frontmatter: frontmatter$r,
	getHeadings: getHeadings$r,
	rawContent: rawContent$r,
	url: url$r
}, Symbol.toStringTag, { value: 'Module' }));

const html$q = "<h1 id=\"lazy-loading\">Lazy Loading</h1>\n<blockquote>\n<p>Offscreen images are loaded lazily (A noscript fallback is always provided).</p>\n</blockquote>\n<p>It will improve the response time of the current page and then avoid loading unnecessary images that the user may not need.</p>\n<ul>\n<li>\n<p>Use Lighthouse to identify how many images are offscreen.</p>\n</li>\n<li>\n<p>Use a JavaScript plugin like the following to lazyload your images. Make sure you target offscreen images only.</p>\n</li>\n<li>\n<p>Also make sure to lazyload alternative images shown at mouseover or upon other user actions.</p>\n</li>\n<li>\n<p><a href=\"https://github.com/verlok/lazyload\" rel=\"noopener noreferrer nofollow\" target=\"_blank\">verlok/lazyload: GitHub</a></p>\n</li>\n<li>\n<p><a href=\"https://github.com/aFarkas/lazysizes/\" rel=\"noopener noreferrer nofollow\" target=\"_blank\">aFarkas/lazysizes: GitHub</a></p>\n</li>\n<li>\n<p><a href=\"https://github.com/mfranzke/loading-attribute-polyfill/\" rel=\"noopener noreferrer nofollow\" target=\"_blank\">mfranzke/loading-attribute-polyfill: GitHub</a></p>\n</li>\n<li>\n<p><a href=\"https://developers.google.com/web/fundamentals/performance/lazy-loading-guidance/images-and-video/\" rel=\"noopener noreferrer nofollow\" target=\"_blank\">Lazy Loading Images and Video | Web Fundamentals | Google Developers</a></p>\n</li>\n<li>\n<p><a href=\"http://blog.dynamicdrive.com/5-brilliant-ways-to-lazy-load-images-for-faster-page-loads/\" rel=\"noopener noreferrer nofollow\" target=\"_blank\">5 Brilliant Ways to Lazy Load Images For Faster Page Loads - Dynamic Drive Blog</a></p>\n</li>\n</ul>";

				const frontmatter$q = {};
				const file$q = "/workspaces/developer-roadmap/src/data/best-practices/frontend-performance/content/load-offscreen-images-lazily.md";
				const url$q = undefined;
				function rawContent$q() {
					return "# Lazy Loading\n\n> Offscreen images are loaded lazily (A noscript fallback is always provided).\n\nIt will improve the response time of the current page and then avoid loading unnecessary images that the user may not need.\n\n- Use Lighthouse to identify how many images are offscreen.\n- Use a JavaScript plugin like the following to lazyload your images. Make sure you target offscreen images only.\n- Also make sure to lazyload alternative images shown at mouseover or upon other user actions.\n\n- [verlok/lazyload: GitHub](https://github.com/verlok/lazyload)\n- [aFarkas/lazysizes: GitHub](https://github.com/aFarkas/lazysizes/)\n- [mfranzke/loading-attribute-polyfill: GitHub](https://github.com/mfranzke/loading-attribute-polyfill/)\n- [Lazy Loading Images and Video | Web Fundamentals | Google Developers](https://developers.google.com/web/fundamentals/performance/lazy-loading-guidance/images-and-video/)\n- [5 Brilliant Ways to Lazy Load Images For Faster Page Loads - Dynamic Drive Blog](http://blog.dynamicdrive.com/5-brilliant-ways-to-lazy-load-images-for-faster-page-loads/)\n";
				}
				function compiledContent$q() {
					return html$q;
				}
				function getHeadings$q() {
					return [{"depth":1,"slug":"lazy-loading","text":"Lazy Loading"}];
				}

				const Content$q = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter$q;
					content.file = file$q;
					content.url = url$q;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html$q)}`;
				});

const __vite_glob_0_242 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	Content: Content$q,
	compiledContent: compiledContent$q,
	default: Content$q,
	file: file$q,
	frontmatter: frontmatter$q,
	getHeadings: getHeadings$q,
	rawContent: rawContent$q,
	url: url$q
}, Symbol.toStringTag, { value: 'Module' }));

const html$p = "<h1 id=\"non-blocking-css\">Non-Blocking CSS</h1>\n<blockquote>\n<p>CSS files need to be non-blocking to prevent the DOM from taking time to load.</p>\n</blockquote>\n<p>CSS files can block the page load and delay the rendering of your page. Using <code>preload</code> can actually load the CSS files before the browser starts showing the content of the page.</p>\n<p>You need to add the <code>rel</code> attribute with the preload value and add <code>as=\"style\"</code> on the <code>&#x3C;link></code> element.</p>\n<ul>\n<li><a href=\"https://github.com/filamentgroup/loadCSS\" rel=\"noopener noreferrer nofollow\" target=\"_blank\">loadCSS by filament group</a></li>\n<li><a href=\"https://gist.github.com/thedaviddias/c24763b82b9991e53928e66a0bafc9bf\" rel=\"noopener noreferrer nofollow\" target=\"_blank\">Example of preload CSS using loadCSS</a></li>\n<li><a href=\"https://developer.mozilla.org/en-US/docs/Web/HTML/Preloading_content\" rel=\"noopener noreferrer nofollow\" target=\"_blank\">Preloading content with rel=“preload”</a></li>\n<li><a href=\"https://www.smashingmagazine.com/2016/02/preload-what-is-it-good-for/\" rel=\"noopener noreferrer nofollow\" target=\"_blank\">Preload: What Is It Good For? — Smashing Magazine</a></li>\n</ul>";

				const frontmatter$p = {};
				const file$p = "/workspaces/developer-roadmap/src/data/best-practices/frontend-performance/content/make-css-files-non-blocking.md";
				const url$p = undefined;
				function rawContent$p() {
					return "# Non-Blocking CSS\n\n> CSS files need to be non-blocking to prevent the DOM from taking time to load.\n\nCSS files can block the page load and delay the rendering of your page. Using `preload` can actually load the CSS files before the browser starts showing the content of the page.\n\nYou need to add the `rel` attribute with the preload value and add `as=\"style\"` on the `<link>` element.\n\n- [loadCSS by filament group](https://github.com/filamentgroup/loadCSS)\n- [Example of preload CSS using loadCSS](https://gist.github.com/thedaviddias/c24763b82b9991e53928e66a0bafc9bf)\n- [Preloading content with rel=\"preload\"](https://developer.mozilla.org/en-US/docs/Web/HTML/Preloading_content)\n- [Preload: What Is It Good For? — Smashing Magazine](https://www.smashingmagazine.com/2016/02/preload-what-is-it-good-for/)\n";
				}
				function compiledContent$p() {
					return html$p;
				}
				function getHeadings$p() {
					return [{"depth":1,"slug":"non-blocking-css","text":"Non-Blocking CSS"}];
				}

				const Content$p = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter$p;
					content.file = file$p;
					content.url = url$p;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html$p)}`;
				});

const __vite_glob_0_243 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	Content: Content$p,
	compiledContent: compiledContent$p,
	default: Content$p,
	file: file$p,
	frontmatter: frontmatter$p,
	getHeadings: getHeadings$p,
	rawContent: rawContent$p,
	url: url$p
}, Symbol.toStringTag, { value: 'Module' }));

const html$o = "<h1 id=\"minify-css\">Minify CSS</h1>\n<blockquote>\n<p>All CSS files are minified, comments, white spaces and new lines are removed from production files.</p>\n</blockquote>\n<p>When CSS files are minified, the content is loaded faster and less data is sent to the client. It’s important to always minify CSS files in production. It is beneficial for the user as it is for any business who wants to lower bandwidth costs and lower resource usage.</p>\n<p>Use tools to minify your files automatically before or during your build or your deployment.</p>\n<ul>\n<li><a href=\"https://cssnano.github.io/cssnano/\" rel=\"noopener noreferrer nofollow\" target=\"_blank\">cssnano: A modular minifier based on the PostCSS ecosystem. - cssnano</a></li>\n<li><a href=\"https://goonlinetools.com/css-minifier/\" rel=\"noopener noreferrer nofollow\" target=\"_blank\">CSS Minifier</a></li>\n<li><a href=\"https://www.npmjs.com/package/@neutrinojs/style-minify\" rel=\"noopener noreferrer nofollow\" target=\"_blank\">@neutrinojs/style-minify - npm</a></li>\n<li><a href=\"http://refresh-sf.com\" rel=\"noopener noreferrer nofollow\" target=\"_blank\">Online CSS Compressor</a></li>\n</ul>";

				const frontmatter$o = {};
				const file$o = "/workspaces/developer-roadmap/src/data/best-practices/frontend-performance/content/minify-css.md";
				const url$o = undefined;
				function rawContent$o() {
					return "# Minify CSS\n\n> All CSS files are minified, comments, white spaces and new lines are removed from production files.\n\nWhen CSS files are minified, the content is loaded faster and less data is sent to the client. It's important to always minify CSS files in production. It is beneficial for the user as it is for any business who wants to lower bandwidth costs and lower resource usage.\n\nUse tools to minify your files automatically before or during your build or your deployment.\n\n- [cssnano: A modular minifier based on the PostCSS ecosystem. - cssnano](https://cssnano.github.io/cssnano/)\n- [CSS Minifier](https://goonlinetools.com/css-minifier/)\n- [@neutrinojs/style-minify - npm](https://www.npmjs.com/package/@neutrinojs/style-minify)\n- [Online CSS Compressor](http://refresh-sf.com)\n";
				}
				function compiledContent$o() {
					return html$o;
				}
				function getHeadings$o() {
					return [{"depth":1,"slug":"minify-css","text":"Minify CSS"}];
				}

				const Content$o = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter$o;
					content.file = file$o;
					content.url = url$o;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html$o)}`;
				});

const __vite_glob_0_244 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	Content: Content$o,
	compiledContent: compiledContent$o,
	default: Content$o,
	file: file$o,
	frontmatter: frontmatter$o,
	getHeadings: getHeadings$o,
	rawContent: rawContent$o,
	url: url$o
}, Symbol.toStringTag, { value: 'Module' }));

const html$n = "<h1 id=\"minify-html\">Minify HTML</h1>\n<blockquote>\n<p>The HTML code is minified, comments, white spaces and new lines are removed from production files.</p>\n</blockquote>\n<p>Removing all unnecessary spaces, comments and attributes will reduce the size of your HTML and speed up your site’s page load times and obviously lighten the download for your user.</p>\n<p>Most of the frameworks have plugins to facilitate the minification of the webpages. You can use a bunch of NPM modules that can do the job for you automatically.</p>\n<ul>\n<li><a href=\"https://codebeautify.org/minify-html\" rel=\"noopener noreferrer nofollow\" target=\"_blank\">HTML minifier | Code Beautify</a></li>\n<li><a href=\"http://refresh-sf.com\" rel=\"noopener noreferrer nofollow\" target=\"_blank\">Online HTML Compressor</a></li>\n<li><a href=\"http://perfectionkills.com/experimenting-with-html-minifier/#use_short_doctype\" rel=\"noopener noreferrer nofollow\" target=\"_blank\">Experimenting with HTML minifier — Perfection Kills</a></li>\n</ul>";

				const frontmatter$n = {};
				const file$n = "/workspaces/developer-roadmap/src/data/best-practices/frontend-performance/content/minify-html.md";
				const url$n = undefined;
				function rawContent$n() {
					return "# Minify HTML\n\n> The HTML code is minified, comments, white spaces and new lines are removed from production files.\n\nRemoving all unnecessary spaces, comments and attributes will reduce the size of your HTML and speed up your site's page load times and obviously lighten the download for your user.\n\nMost of the frameworks have plugins to facilitate the minification of the webpages. You can use a bunch of NPM modules that can do the job for you automatically.\n\n- [HTML minifier | Code Beautify](https://codebeautify.org/minify-html)\n- [Online HTML Compressor](http://refresh-sf.com)\n- [Experimenting with HTML minifier — Perfection Kills](http://perfectionkills.com/experimenting-with-html-minifier/#use_short_doctype)\n";
				}
				function compiledContent$n() {
					return html$n;
				}
				function getHeadings$n() {
					return [{"depth":1,"slug":"minify-html","text":"Minify HTML"}];
				}

				const Content$n = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter$n;
					content.file = file$n;
					content.url = url$n;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html$n)}`;
				});

const __vite_glob_0_245 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	Content: Content$n,
	compiledContent: compiledContent$n,
	default: Content$n,
	file: file$n,
	frontmatter: frontmatter$n,
	getHeadings: getHeadings$n,
	rawContent: rawContent$n,
	url: url$n
}, Symbol.toStringTag, { value: 'Module' }));

const html$m = "<h1 id=\"minify-javascript\">Minify JavaScript</h1>\n<blockquote>\n<p>All JavaScript files are minified, comments, white spaces and new lines are removed from production files (still valid if using HTTP/2).</p>\n</blockquote>\n<p>Removing all unnecessary spaces, comments and break will reduce the size of your JavaScript files and speed up your site’s page load times and obviously lighten the download for your user.</p>\n<p>Use the tools suggested below to minify your files automatically before or during your build or your deployment.</p>\n<ul>\n<li><a href=\"https://github.com/terser/terser\" rel=\"noopener noreferrer nofollow\" target=\"_blank\">terser - JavaScript parser, mangler and compressor toolkit for ES6+</a></li>\n<li><a href=\"https://www.npmjs.com/package/uglify-js\" rel=\"noopener noreferrer nofollow\" target=\"_blank\">uglify-js - npm</a></li>\n<li><a href=\"http://refresh-sf.com\" rel=\"noopener noreferrer nofollow\" target=\"_blank\">Online JavaScript Compressor</a></li>\n<li><a href=\"https://scaleyourcode.com/blog/article/28\" rel=\"noopener noreferrer nofollow\" target=\"_blank\">Short read: How is HTTP/2 different? Should we still minify and concatenate?</a></li>\n</ul>";

				const frontmatter$m = {};
				const file$m = "/workspaces/developer-roadmap/src/data/best-practices/frontend-performance/content/minify-your-javascript.md";
				const url$m = undefined;
				function rawContent$m() {
					return "# Minify JavaScript\n\n> All JavaScript files are minified, comments, white spaces and new lines are removed from production files (still valid if using HTTP/2).\n\nRemoving all unnecessary spaces, comments and break will reduce the size of your JavaScript files and speed up your site's page load times and obviously lighten the download for your user.\n\nUse the tools suggested below to minify your files automatically before or during your build or your deployment.\n\n- [terser - JavaScript parser, mangler and compressor toolkit for ES6+](https://github.com/terser/terser)\n- [uglify-js - npm](https://www.npmjs.com/package/uglify-js)\n- [Online JavaScript Compressor](http://refresh-sf.com)\n- [Short read: How is HTTP/2 different? Should we still minify and concatenate?](https://scaleyourcode.com/blog/article/28)\n";
				}
				function compiledContent$m() {
					return html$m;
				}
				function getHeadings$m() {
					return [{"depth":1,"slug":"minify-javascript","text":"Minify JavaScript"}];
				}

				const Content$m = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter$m;
					content.file = file$m;
					content.url = url$m;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html$m)}`;
				});

const __vite_glob_0_246 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	Content: Content$m,
	compiledContent: compiledContent$m,
	default: Content$m,
	file: file$m,
	frontmatter: frontmatter$m,
	getHeadings: getHeadings$m,
	rawContent: rawContent$m,
	url: url$m
}, Symbol.toStringTag, { value: 'Module' }));

const html$l = "<h1 id=\"minimize-http-requests\">Minimize HTTP Requests</h1>\n<blockquote>\n<p>Always ensure that every file requested are essential for your website or application.\nCombine files, Enable caching, use a content delivery network and Eliminate unnecessary resources</p>\n</blockquote>\n<ul>\n<li><a href=\"https://www.linkedin.com/advice/3/what-best-strategies-minimizing-http-requests-skills-e-commerce\" rel=\"noopener noreferrer nofollow\" target=\"_blank\">Best Strategies for Minimizing HTTP Requests</a></li>\n</ul>";

				const frontmatter$l = {};
				const file$l = "/workspaces/developer-roadmap/src/data/best-practices/frontend-performance/content/minimize-http-requests.md";
				const url$l = undefined;
				function rawContent$l() {
					return "# Minimize HTTP Requests\n\n> Always ensure that every file requested are essential for your website or application.\n> Combine files, Enable caching, use a content delivery network and Eliminate unnecessary resources \n\n- [Best Strategies for Minimizing HTTP Requests](https://www.linkedin.com/advice/3/what-best-strategies-minimizing-http-requests-skills-e-commerce)\n";
				}
				function compiledContent$l() {
					return html$l;
				}
				function getHeadings$l() {
					return [{"depth":1,"slug":"minimize-http-requests","text":"Minimize HTTP Requests"}];
				}

				const Content$l = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter$l;
					content.file = file$l;
					content.url = url$l;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html$l)}`;
				});

const __vite_glob_0_247 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	Content: Content$l,
	compiledContent: compiledContent$l,
	default: Content$l,
	file: file$l,
	frontmatter: frontmatter$l,
	getHeadings: getHeadings$l,
	rawContent: rawContent$l,
	url: url$l
}, Symbol.toStringTag, { value: 'Module' }));

const html$k = "<h1 id=\"avoid-iframes\">Avoid iframes</h1>\n<p>Use iframes only if you don’t have any other technical possibility. Try to avoid iframes as much as you can. Iframes are not only bad for performance, but also for accessibility and usability. Iframes are also not indexed by search engines.</p>";

				const frontmatter$k = {};
				const file$k = "/workspaces/developer-roadmap/src/data/best-practices/frontend-performance/content/minimize-iframe-count.md";
				const url$k = undefined;
				function rawContent$k() {
					return "# Avoid iframes\n\nUse iframes only if you don't have any other technical possibility. Try to avoid iframes as much as you can. Iframes are not only bad for performance, but also for accessibility and usability. Iframes are also not indexed by search engines.\n";
				}
				function compiledContent$k() {
					return html$k;
				}
				function getHeadings$k() {
					return [{"depth":1,"slug":"avoid-iframes","text":"Avoid iframes"}];
				}

				const Content$k = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter$k;
					content.file = file$k;
					content.url = url$k;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html$k)}`;
				});

const __vite_glob_0_248 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	Content: Content$k,
	compiledContent: compiledContent$k,
	default: Content$k,
	file: file$k,
	frontmatter: frontmatter$k,
	getHeadings: getHeadings$k,
	rawContent: rawContent$k,
	url: url$k
}, Symbol.toStringTag, { value: 'Module' }));

const html$j = "<h1 id=\"page-load-time\">Page Load Time</h1>\n<blockquote>\n<p>Reduce as much as possible your page load times to quickly deliver your content to your users.</p>\n</blockquote>\n<p>Faster your website or app is, less you have probability of bounce increases, in other terms you have less chances to lose your user or future client. Enough researches on the subject prove that point.</p>\n<p>Use online tools like <a href=\"https://developers.google.com/speed/pagespeed/insights/\" rel=\"noopener noreferrer nofollow\" target=\"_blank\">Page Speed Insights</a> or <a href=\"https://www.webpagetest.org/\" rel=\"noopener noreferrer nofollow\" target=\"_blank\">WebPageTest</a> to analyze what could be slowing you down and use the Front-End Performance Checklist to improve your load times.</p>\n<ul>\n<li><a href=\"https://www.thinkwithgoogle.com/feature/mobile/\" rel=\"noopener noreferrer nofollow\" target=\"_blank\">Compare your mobile site speed</a></li>\n<li><a href=\"https://testmysite.thinkwithgoogle.com/intl/en-us\" rel=\"noopener noreferrer nofollow\" target=\"_blank\">Test Your Mobile Website Speed and Performance - Think With Google</a></li>\n<li><a href=\"https://www.machmetrics.com/speed-blog/average-page-load-times-websites-2018/\" rel=\"noopener noreferrer nofollow\" target=\"_blank\">Average Page Load Times for 2018 - How does yours compare? - MachMetrics Speed Blog</a></li>\n</ul>";

				const frontmatter$j = {};
				const file$j = "/workspaces/developer-roadmap/src/data/best-practices/frontend-performance/content/page-load-time-below-3s.md";
				const url$j = undefined;
				function rawContent$j() {
					return "# Page Load Time\n\n> Reduce as much as possible your page load times to quickly deliver your content to your users.\n\nFaster your website or app is, less you have probability of bounce increases, in other terms you have less chances to lose your user or future client. Enough researches on the subject prove that point.\n\nUse online tools like [Page Speed Insights](https://developers.google.com/speed/pagespeed/insights/) or [WebPageTest](https://www.webpagetest.org/) to analyze what could be slowing you down and use the Front-End Performance Checklist to improve your load times.\n\n- [Compare your mobile site speed](https://www.thinkwithgoogle.com/feature/mobile/)\n- [Test Your Mobile Website Speed and Performance - Think With Google](https://testmysite.thinkwithgoogle.com/intl/en-us)\n- [Average Page Load Times for 2018 - How does yours compare? - MachMetrics Speed Blog](https://www.machmetrics.com/speed-blog/average-page-load-times-websites-2018/)\n";
				}
				function compiledContent$j() {
					return html$j;
				}
				function getHeadings$j() {
					return [{"depth":1,"slug":"page-load-time","text":"Page Load Time"}];
				}

				const Content$j = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter$j;
					content.file = file$j;
					content.url = url$j;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html$j)}`;
				});

const __vite_glob_0_249 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	Content: Content$j,
	compiledContent: compiledContent$j,
	default: Content$j,
	file: file$j,
	frontmatter: frontmatter$j,
	getHeadings: getHeadings$j,
	rawContent: rawContent$j,
	url: url$j
}, Symbol.toStringTag, { value: 'Module' }));

const html$i = "<h1 id=\"page-speed-insights\">Page Speed Insights</h1>\n<p>Page Speed Insights is a free tool from Google that analyzes the performance of a web page and provides suggestions for improvements.</p>\n<ul>\n<li><a href=\"https://pagespeed.web.dev/\" rel=\"noopener noreferrer nofollow\" target=\"_blank\">Page Speed Insights</a></li>\n</ul>";

				const frontmatter$i = {};
				const file$i = "/workspaces/developer-roadmap/src/data/best-practices/frontend-performance/content/page-speed-insights.md";
				const url$i = undefined;
				function rawContent$i() {
					return "# Page Speed Insights\n\nPage Speed Insights is a free tool from Google that analyzes the performance of a web page and provides suggestions for improvements.\n\n- [Page Speed Insights](https://pagespeed.web.dev/)\n";
				}
				function compiledContent$i() {
					return html$i;
				}
				function getHeadings$i() {
					return [{"depth":1,"slug":"page-speed-insights","text":"Page Speed Insights"}];
				}

				const Content$i = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter$i;
					content.file = file$i;
					content.url = url$i;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html$i)}`;
				});

const __vite_glob_0_250 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	Content: Content$i,
	compiledContent: compiledContent$i,
	default: Content$i,
	file: file$i,
	frontmatter: frontmatter$i,
	getHeadings: getHeadings$i,
	rawContent: rawContent$i,
	url: url$i
}, Symbol.toStringTag, { value: 'Module' }));

const html$h = "<h1 id=\"page-weight-below-1500\">Page weight below 1500</h1>\n<blockquote>\n<p>Reduce the size of your page + resources as much as you can.</p>\n</blockquote>\n<p>Ideally you should try to target &#x3C; 500 KB but the state of web shows that the median of Kilobytes is around 1500 KB (even on mobile). Depending on your target users, network connection, devices, it’s important to reduce as much as possible your total Kilobytes to have the best user experience possible.</p>\n<p>All the listed best practices in this list will help you to reduce as much as possible your resources and your code.</p>\n<ul>\n<li><a href=\"https://httparchive.org/reports/page-weight#bytesTotal\" rel=\"noopener noreferrer nofollow\" target=\"_blank\">Page Weight</a></li>\n<li><a href=\"https://whatdoesmysitecost.com/\" rel=\"noopener noreferrer nofollow\" target=\"_blank\">What Does My Site Cost?</a></li>\n<li><a href=\"https://stackoverflow.com/questions/38239980/measure-full-page-size-in-chrome-devtools\" rel=\"noopener noreferrer nofollow\" target=\"_blank\">web - Measure full page size in Chrome DevTools - Stack Overflow</a></li>\n</ul>";

				const frontmatter$h = {};
				const file$h = "/workspaces/developer-roadmap/src/data/best-practices/frontend-performance/content/page-weight-below-1500.md";
				const url$h = undefined;
				function rawContent$h() {
					return "# Page weight below 1500\n\n> Reduce the size of your page + resources as much as you can.\n\nIdeally you should try to target < 500 KB but the state of web shows that the median of Kilobytes is around 1500 KB (even on mobile). Depending on your target users, network connection, devices, it's important to reduce as much as possible your total Kilobytes to have the best user experience possible.\n\nAll the listed best practices in this list will help you to reduce as much as possible your resources and your code.\n\n- [Page Weight](https://httparchive.org/reports/page-weight#bytesTotal)\n- [What Does My Site Cost?](https://whatdoesmysitecost.com/)\n- [web - Measure full page size in Chrome DevTools - Stack Overflow](https://stackoverflow.com/questions/38239980/measure-full-page-size-in-chrome-devtools)\n";
				}
				function compiledContent$h() {
					return html$h;
				}
				function getHeadings$h() {
					return [{"depth":1,"slug":"page-weight-below-1500","text":"Page weight below 1500"}];
				}

				const Content$h = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter$h;
					content.file = file$h;
					content.url = url$h;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html$h)}`;
				});

const __vite_glob_0_251 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	Content: Content$h,
	compiledContent: compiledContent$h,
	default: Content$h,
	file: file$h,
	frontmatter: frontmatter$h,
	getHeadings: getHeadings$h,
	rawContent: rawContent$h,
	url: url$h
}, Symbol.toStringTag, { value: 'Module' }));

const html$g = "<h1 id=\"preload-urls\">Preload URLs</h1>\n<blockquote>\n<p>Popular browsers can use directive on <code>&#x3C;link></code> tag and <code>\"rel\"</code> attribute with certain keywords to pre-load specific URLs</p>\n</blockquote>\n<p>Prefetching allows a browser to silently fetch the necessary resources needed to display content that a user might access in the near future. The browser is able to store these resources in its cache and speed up the way web pages load when they are using different domains for page resources. When a web page has finished loading and the idle time has passed, the browser begins downloading other resources. When a user go in a particular link (already prefetched), the content will be instantly served.</p>\n<ul>\n<li><a href=\"https://www.keycdn.com/support/prefetching\" rel=\"noopener noreferrer nofollow\" target=\"_blank\">What Is Prefetching and Why Use It</a></li>\n<li><a href=\"https://css-tricks.com/prefetching-preloading-prebrowsing/\" rel=\"noopener noreferrer nofollow\" target=\"_blank\">Prefetching, preloading, prebrowsing</a></li>\n<li><a href=\"https://www.keycdn.com/blog/resource-hints\" rel=\"noopener noreferrer nofollow\" target=\"_blank\">What is Preload, Prefetch, and Preconnect</a></li>\n</ul>";

				const frontmatter$g = {};
				const file$g = "/workspaces/developer-roadmap/src/data/best-practices/frontend-performance/content/pre-load-urls-where-possible.md";
				const url$g = undefined;
				function rawContent$g() {
					return "# Preload URLs\n\n> Popular browsers can use directive on `<link>` tag and `\"rel\"` attribute with certain keywords to pre-load specific URLs\n\nPrefetching allows a browser to silently fetch the necessary resources needed to display content that a user might access in the near future. The browser is able to store these resources in its cache and speed up the way web pages load when they are using different domains for page resources. When a web page has finished loading and the idle time has passed, the browser begins downloading other resources. When a user go in a particular link (already prefetched), the content will be instantly served.\n\n- [What Is Prefetching and Why Use It](https://www.keycdn.com/support/prefetching)\n- [Prefetching, preloading, prebrowsing](https://css-tricks.com/prefetching-preloading-prebrowsing/)\n- [What is Preload, Prefetch, and Preconnect](https://www.keycdn.com/blog/resource-hints)\n";
				}
				function compiledContent$g() {
					return html$g;
				}
				function getHeadings$g() {
					return [{"depth":1,"slug":"preload-urls","text":"Preload URLs"}];
				}

				const Content$g = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter$g;
					content.file = file$g;
					content.url = url$g;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html$g)}`;
				});

const __vite_glob_0_252 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	Content: Content$g,
	compiledContent: compiledContent$g,
	default: Content$g,
	file: file$g,
	frontmatter: frontmatter$g,
	getHeadings: getHeadings$g,
	rawContent: rawContent$g,
	url: url$g
}, Symbol.toStringTag, { value: 'Module' }));

const html$f = "<h1 id=\"prefer-vector-images\">Prefer Vector Images</h1>\n<blockquote>\n<p>Prefer using vector image rather than bitmap images (when possible).</p>\n</blockquote>\n<p>Vector images (SVG) tend to be smaller than images and SVG’s are responsive and scale perfectly. These images can be animated and modified by CSS.</p>";

				const frontmatter$f = {};
				const file$f = "/workspaces/developer-roadmap/src/data/best-practices/frontend-performance/content/prefer-vector-images.md";
				const url$f = undefined;
				function rawContent$f() {
					return "# Prefer Vector Images\n\n> Prefer using vector image rather than bitmap images (when possible).\n\nVector images (SVG) tend to be smaller than images and SVG's are responsive and scale perfectly. These images can be animated and modified by CSS.\n";
				}
				function compiledContent$f() {
					return html$f;
				}
				function getHeadings$f() {
					return [{"depth":1,"slug":"prefer-vector-images","text":"Prefer Vector Images"}];
				}

				const Content$f = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter$f;
					content.file = file$f;
					content.url = url$f;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html$f)}`;
				});

const __vite_glob_0_253 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	Content: Content$f,
	compiledContent: compiledContent$f,
	default: Content$f,
	file: file$f,
	frontmatter: frontmatter$f,
	getHeadings: getHeadings$f,
	rawContent: rawContent$f,
	url: url$f
}, Symbol.toStringTag, { value: 'Module' }));

const html$e = "<h1 id=\"prevent-flash-text\">Prevent Flash Text</h1>\n<blockquote>\n<p>Avoid transparent text until the Webfont is loaded</p>\n</blockquote>\n<ul>\n<li><a href=\"https://css-tricks.com/font-display-masses/\" rel=\"noopener noreferrer nofollow\" target=\"_blank\"><code>font-display</code> for the Masses</a></li>\n<li><a href=\"https://www.sitepoint.com/css-font-display-future-font-rendering-web/\" rel=\"noopener noreferrer nofollow\" target=\"_blank\">CSS font-display: The Future of Font Rendering on the Web</a></li>\n</ul>";

				const frontmatter$e = {};
				const file$e = "/workspaces/developer-roadmap/src/data/best-practices/frontend-performance/content/prevent-flash-text.md";
				const url$e = undefined;
				function rawContent$e() {
					return "# Prevent Flash Text\n\n> Avoid transparent text until the Webfont is loaded\n\n- [`font-display` for the Masses](https://css-tricks.com/font-display-masses/)\n- [CSS font-display: The Future of Font Rendering on the Web](https://www.sitepoint.com/css-font-display-future-font-rendering-web/)\n";
				}
				function compiledContent$e() {
					return html$e;
				}
				function getHeadings$e() {
					return [{"depth":1,"slug":"prevent-flash-text","text":"Prevent Flash Text"}];
				}

				const Content$e = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter$e;
					content.file = file$e;
					content.url = url$e;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html$e)}`;
				});

const __vite_glob_0_254 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	Content: Content$e,
	compiledContent: compiledContent$e,
	default: Content$e,
	file: file$e,
	frontmatter: frontmatter$e,
	getHeadings: getHeadings$e,
	rawContent: rawContent$e,
	url: url$e
}, Symbol.toStringTag, { value: 'Module' }));

const html$d = "<h1 id=\"recommended-guides\">Recommended Guides</h1>\n<blockquote>\n<p>Optimize the critical rendering path:</p>\n</blockquote>\n<ul>\n<li><a href=\"https://csswizardry.com/2022/09/critical-css-not-so-fast/\" rel=\"noopener noreferrer nofollow\" target=\"_blank\">Critical CSS? Not So Fast!</a></li>\n<li><a href=\"https://www.etsy.com/codeascraft/priority-hints-what-your-browser-doesnt-know-yet\" rel=\"noopener noreferrer nofollow\" target=\"_blank\">Priority Hints - What Your Browser Doesn’t Know (Yet)</a></li>\n<li><a href=\"https://web.dev/priority-hints/\" rel=\"noopener noreferrer nofollow\" target=\"_blank\">Optimizing resource loading with Priority Hints</a></li>\n<li><a href=\"https://docs.google.com/document/d/1bCDuq9H1ih9iNjgzyAL0gpwNFiEP4TZS-YLRp_RuMlc/edit?usp=sharing\" rel=\"noopener noreferrer nofollow\" target=\"_blank\">Chrome Resource Priorities and Scheduling</a></li>\n<li><a href=\"https://kinsta.com/blog/optimize-css/\" rel=\"noopener noreferrer nofollow\" target=\"_blank\">How To Optimize CSS for Peak Site Performance</a></li>\n<li><a href=\"https://www.jeffreyknox.dev/blog/eliminate-render-blocking-css-to-improve-start-render-time/\" rel=\"noopener noreferrer nofollow\" target=\"_blank\">Eliminate render blocking CSS to improve start render time</a></li>\n<li><a href=\"https://calibreapp.com/blog/bundle-size-optimization\" rel=\"noopener noreferrer nofollow\" target=\"_blank\">Small Bundles, Fast Pages: What To Do With Too Much JavaScript</a></li>\n<li><a href=\"https://sia.codes/posts/render-blocking-resources/\" rel=\"noopener noreferrer nofollow\" target=\"_blank\">How to Eliminate Render-Blocking Resources: a Deep Dive</a></li>\n<li><a href=\"https://calibreapp.com/blog/critical-request\" rel=\"noopener noreferrer nofollow\" target=\"_blank\">The Critical Request: How to Prioritise Requests to Improve Speed</a></li>\n<li><a href=\"https://calibreapp.com/blog/css-performance\" rel=\"noopener noreferrer nofollow\" target=\"_blank\">How to Improve CSS Performance</a></li>\n<li><a href=\"https://www.filamentgroup.com/lab/load-css-simpler/\" rel=\"noopener noreferrer nofollow\" target=\"_blank\">The Simplest Way to Load CSS Asynchronously</a></li>\n<li><a href=\"https://css-tricks.com/a-quick-css-audit-and-general-notes-about-design-systems/\" rel=\"noopener noreferrer nofollow\" target=\"_blank\">CSS audit</a></li>\n<li><a href=\"https://developers.google.com/web/fundamentals/performance/critical-rendering-path/measure-crp\" rel=\"noopener noreferrer nofollow\" target=\"_blank\">Measuring the Critical Rendering Path</a></li>\n<li><a href=\"https://www.filamentgroup.com/lab/inlining-cache.html\" rel=\"noopener noreferrer nofollow\" target=\"_blank\">Inlining or Caching? Both Please!</a></li>\n<li><a href=\"https://csswizardry.com/2018/11/css-and-network-performance/\" rel=\"noopener noreferrer nofollow\" target=\"_blank\">CSS and Network Performance</a></li>\n<li><a href=\"https://developers.google.com/web/fundamentals/performance/critical-rendering-path/analyzing-crp\" rel=\"noopener noreferrer nofollow\" target=\"_blank\">Analyzing Critical Rendering Path Performance</a></li>\n<li><a href=\"https://github.com/thedaviddias/Front-End-Performance-Checklist\" rel=\"noopener noreferrer nofollow\" target=\"_blank\">Front-End Performance Checklist</a></li>\n<li><a href=\"https://developers.google.com/web/fundamentals/performance/prpl-pattern/\" rel=\"noopener noreferrer nofollow\" target=\"_blank\">The PRPL Pattern</a></li>\n<li><a href=\"https://www.smashingmagazine.com/2018/01/deferring-lazy-loading-intersection-observer-api/\" rel=\"noopener noreferrer nofollow\" target=\"_blank\">Now You See Me: How To Defer, Lazy-Load And Act With IntersectionObserver</a></li>\n<li><a href=\"https://hackernoon.com/optimising-the-front-end-for-the-browser-f2f51a29c572\" rel=\"noopener noreferrer nofollow\" target=\"_blank\">Optimising the front end for the browser</a></li>\n<li><a href=\"https://calendar.perfplanet.com/2016/prefer-defer-over-async/\" rel=\"noopener noreferrer nofollow\" target=\"_blank\">Prefer DEFER Over ASYNC</a></li>\n<li><a href=\"https://www.zachleat.com/web/comprehensive-webfonts/\" rel=\"noopener noreferrer nofollow\" target=\"_blank\">A comprehensive guide to font loading strategies</a></li>\n<li><a href=\"https://medium.com/@luisvieira_gmr/understanding-the-critical-rendering-path-rendering-pages-in-1-second-735c6e45b47a\" rel=\"noopener noreferrer nofollow\" target=\"_blank\">Understanding the critical rendering path, rendering pages in 1 second</a></li>\n<li><a href=\"https://www.filamentgroup.com/lab/weight-wait.html\" rel=\"noopener noreferrer nofollow\" target=\"_blank\">More Weight Doesn’t Mean More Wait</a></li>\n</ul>\n<blockquote>\n<p>JavaScript Rendering Performance</p>\n</blockquote>\n<ul>\n<li><a href=\"https://www.smashingmagazine.com/2022/09/data-loading-patterns-improve-frontend-performance/\" rel=\"noopener noreferrer nofollow\" target=\"_blank\">Five Data-Loading Patterns To Boost Web Performance</a></li>\n<li><a href=\"https://web.dev/optimize-long-tasks/\" rel=\"noopener noreferrer nofollow\" target=\"_blank\">Optimize long tasks</a></li>\n<li><a href=\"https://insidegovuk.blog.gov.uk/2022/08/15/the-impact-of-removing-jquery-on-our-web-performance/\" rel=\"noopener noreferrer nofollow\" target=\"_blank\">The impact of removing jQuery on our web performance</a></li>\n<li><a href=\"iamtk.co/profiling-and-optimizing-the-runtime-performance-with-the-devtools-performance-tab\">Profiling &#x26; Optimizing the runtime performance with the DevTools Performance tab</a></li>\n<li><a href=\"https://web.dev/preload-scanner/\" rel=\"noopener noreferrer nofollow\" target=\"_blank\">Don’t fight the browser preload scanner</a></li>\n<li><a href=\"https://twitter.com/TheRealNooshu/status/1509487050122276864\" rel=\"noopener noreferrer nofollow\" target=\"_blank\">The Web Performance impact of jQuery</a></li>\n<li><a href=\"https://www.youtube.com/watch?v=860d8usGC0o\" rel=\"noopener noreferrer nofollow\" target=\"_blank\">Have Single-Page Apps Ruined the Web? | Transitional Apps</a></li>\n<li><a href=\"https://www.patterns.dev/\" rel=\"noopener noreferrer nofollow\" target=\"_blank\">Improve how you architect webapps</a></li>\n<li><a href=\"https://vueschool.io/articles/vuejs-tutorials/nuxt-ssr-optimizing-tips/\" rel=\"noopener noreferrer nofollow\" target=\"_blank\">Nuxt SSR Optimizing Tips</a>, Filip Rakowski</li>\n<li><a href=\"https://gpu.rocks/#/\" rel=\"noopener noreferrer nofollow\" target=\"_blank\">GPU accelerated JavaScript</a></li>\n<li><a href=\"https://dev.to/adamdbradley/introducing-partytown-run-third-party-scripts-from-a-web-worker-2cnp\" rel=\"noopener noreferrer nofollow\" target=\"_blank\">Introducing Partytown 🎉: Run Third-Party Scripts From a Web Worker</a></li>\n<li><a href=\"https://docs.astro.build/getting-started/\" rel=\"noopener noreferrer nofollow\" target=\"_blank\">Astro: Astro is a fresh but familiar approach to building websites. Astro combines decades of proven performance best practices with the DX improvements of the component-oriented era. Use your favorite JavaScript framework and automatically ship the bare-minimum amount of JavaScript—by default.</a></li>\n<li><a href=\"https://www.harrytheo.com/blog/2021/09/dom-reflow-and-layout-thrashing/\" rel=\"noopener noreferrer nofollow\" target=\"_blank\">Minimising Layout and Layout thrashing for 60 FPS</a></li>\n<li><a href=\"https://nolanlawson.com/2021/08/15/does-shadow-dom-improve-style-performance/\" rel=\"noopener noreferrer nofollow\" target=\"_blank\">Does shadow DOM improve style performance?</a></li>\n<li><a href=\"https://www.youtube.com/watch?v=YDU_3WdfkxA\" rel=\"noopener noreferrer nofollow\" target=\"_blank\">Debugging memory leaks - HTTP 203</a></li>\n<li><a href=\"https://sia.codes/posts/lighthouse-treemap/\" rel=\"noopener noreferrer nofollow\" target=\"_blank\">Explore JavaScript Dependencies With Lighthouse Treemap</a></li>\n<li><a href=\"https://medium.com/voodoo-engineering/the-real-cost-of-javascript-dependencies-and-the-state-of-js-package-quality-a8dacd74c0ec\" rel=\"noopener noreferrer nofollow\" target=\"_blank\">The real cost of Javascript dependencies (and the state of JS package quality)</a></li>\n<li><a href=\"https://www.smashingmagazine.com/2021/06/web-workers-2021/\" rel=\"noopener noreferrer nofollow\" target=\"_blank\">The State Of Web Workers In 2021</a></li>\n<li><a href=\"https://web.dev/animations/\" rel=\"noopener noreferrer nofollow\" target=\"_blank\">Techniques for developing high-performance animations</a></li>\n<li><a href=\"https://medium.com/airbnb-engineering/building-a-faster-web-experience-with-the-posttask-scheduler-276b83454e91\" rel=\"noopener noreferrer nofollow\" target=\"_blank\">Building a Faster Web Experience with the postTask Scheduler</a>, Callie (Airbnb Engineering &#x26; Data Science)</li>\n<li><a href=\"https://atfzl.com/don-t-attach-tooltips-to-document-body\" rel=\"noopener noreferrer nofollow\" target=\"_blank\">Don’t attach tooltips to document.body – Learn how the browser works – Debug forced reflow</a></li>\n<li><a href=\"https://betterprogramming.pub/build-me-an-angular-app-with-memory-leaks-please-36302184e658\" rel=\"noopener noreferrer nofollow\" target=\"_blank\">How to Create and Fix Memory Leaks With Chrome DevTools</a></li>\n<li><a href=\"https://nolanlawson.com/2021/02/23/javascript-performance-beyond-bundle-size/\" rel=\"noopener noreferrer nofollow\" target=\"_blank\">JavaScript performance beyond bundle size</a></li>\n<li><a href=\"https://addyosmani.com/blog/import-on-interaction/\" rel=\"noopener noreferrer nofollow\" target=\"_blank\">The Import On Interaction Pattern</a></li>\n<li><a href=\"https://levelup.gitconnected.com/the-live-dom-is-not-slow-bad-or-wrong-web-developers-are-2bf86c3b9e2e\" rel=\"noopener noreferrer nofollow\" target=\"_blank\">The “Live DOM” Is Not “Slow”, “Bad”, Or “Wrong”. Web Developers Are.</a></li>\n<li><a href=\"https://www.hsablonniere.com/prevent-layout-shifts-with-css-grid-stacks--qcj5jo/\" rel=\"noopener noreferrer nofollow\" target=\"_blank\">Prevent layout shifts with CSS grid stacks</a></li>\n<li><a href=\"https://web.dev/content-visibility/\" rel=\"noopener noreferrer nofollow\" target=\"_blank\">content-visibility: the new CSS property that boosts your rendering performance</a></li>\n<li><a href=\"https://github.com/mq2thez/blog/blob/main/upgrade-react-etsy/preact-vs-react.md\" rel=\"noopener noreferrer nofollow\" target=\"_blank\">Preact vs React - Updating React at Etsy</a></li>\n<li><a href=\"https://timkadlec.com/remembers/2020-04-21-the-cost-of-javascript-frameworks/\" rel=\"noopener noreferrer nofollow\" target=\"_blank\">The Cost of Javascript Frameworks</a></li>\n<li><a href=\"https://nolanlawson.com/2020/02/19/fixing-memory-leaks-in-web-applications/\" rel=\"noopener noreferrer nofollow\" target=\"_blank\">Fixing memory leaks in web applications</a></li>\n<li><a href=\"https://3perf.com/blog/polyfills/\" rel=\"noopener noreferrer nofollow\" target=\"_blank\">How to load polyfills only when needed</a></li>\n<li><a href=\"https://alistapart.com/article/responsible-javascript-part-3/\" rel=\"noopener noreferrer nofollow\" target=\"_blank\">Responsible JavaScript: Part III - Third parties</a></li>\n<li><a href=\"https://v8.dev/blog/cost-of-javascript-2019\" rel=\"noopener noreferrer nofollow\" target=\"_blank\">The cost of JavaScript in 2019</a></li>\n<li><a href=\"https://dassur.ma/things/when-workers/\" rel=\"noopener noreferrer nofollow\" target=\"_blank\">When should you be using Web Workers?</a></li>\n<li><a href=\"https://alistapart.com/article/responsible-javascript-part-2/\" rel=\"noopener noreferrer nofollow\" target=\"_blank\">Responsible Javascript: Part II - Code Bundle</a></li>\n<li><a href=\"https://blog.cloudflare.com/binary-ast/\" rel=\"noopener noreferrer nofollow\" target=\"_blank\">Faster script loading with BinaryAST?</a></li>\n<li><a href=\"https://svelte.dev/blog/svelte-3-rethinking-reactivity\" rel=\"noopener noreferrer nofollow\" target=\"_blank\">Svelte 3: Rethinking reactivity</a></li>\n<li><a href=\"https://alistapart.com/article/responsible-javascript-part-1/\" rel=\"noopener noreferrer nofollow\" target=\"_blank\">Responsible Javascript: Part I - Web platform over frameworks</a></li>\n<li><a href=\"https://addyosmani.com/blog/script-priorities/\" rel=\"noopener noreferrer nofollow\" target=\"_blank\">JavaScript Loading Priorities in Chrome</a></li>\n<li><a href=\"https://philipwalton.com/articles/idle-until-urgent/\" rel=\"noopener noreferrer nofollow\" target=\"_blank\">Idle Until Urgent</a></li>\n<li><a href=\"https://css-tricks.com/browser-painting-and-considerations-for-web-performance/\" rel=\"noopener noreferrer nofollow\" target=\"_blank\">Browser painting and considerations for web performance</a></li>\n<li><a href=\"https://medium.com/@addyosmani/the-cost-of-javascript-in-2018-7d8950fbb5d4\" rel=\"noopener noreferrer nofollow\" target=\"_blank\">The Cost Of JavaScript In 2018</a> (<a href=\"https://www.youtube.com/watch?v=i5R7giitymk\" rel=\"noopener noreferrer nofollow\" target=\"_blank\">Video</a>)</li>\n<li><a href=\"https://www.jameslmilner.com/posts/web-worker-performance\" rel=\"noopener noreferrer nofollow\" target=\"_blank\">Examining Web Worker Performance</a></li>\n<li><a href=\"https://github.com/thedaviddias/Front-End-Performance-Checklist\" rel=\"noopener noreferrer nofollow\" target=\"_blank\">Front-End Performance Checklist</a></li>\n<li><a href=\"http://jankfree.org/\" rel=\"noopener noreferrer nofollow\" target=\"_blank\">jankfree</a></li>\n<li><a href=\"https://gist.github.com/paulirish/5d52fb081b3570c81e3a\" rel=\"noopener noreferrer nofollow\" target=\"_blank\">What forces layout/reflow?</a></li>\n<li><a href=\"https://developers.google.com/web/updates/2015/08/using-requestidlecallback\" rel=\"noopener noreferrer nofollow\" target=\"_blank\">Using requestIdleCallback</a></li>\n<li><a href=\"https://developers.google.com/web/fundamentals/performance/rendering/optimize-javascript-execution\" rel=\"noopener noreferrer nofollow\" target=\"_blank\">Optimize Javascript Execution</a></li>\n<li><a href=\"https://philipwalton.com/articles/why-web-developers-need-to-care-about-interactivity/\" rel=\"noopener noreferrer nofollow\" target=\"_blank\">Why Web Developers Need to Care about Interactivity</a></li>\n<li><a href=\"https://www.sitepen.com/blog/2017/10/06/improving-performance-with-the-paint-timing-api\" rel=\"noopener noreferrer nofollow\" target=\"_blank\">Improving Performance with the Paint Timing API</a></li>\n<li><a href=\"https://philipwalton.com/articles/deploying-es2015-code-in-production-today/\" rel=\"noopener noreferrer nofollow\" target=\"_blank\">Deploying ES2015+ Code in Production Today</a></li>\n<li><a href=\"https://blog.algolia.com/performant-web-animations/\" rel=\"noopener noreferrer nofollow\" target=\"_blank\">Performant Web Animations and Interactions: Achieving 60 FPS</a></li>\n<li><a href=\"https://medium.com/reloading/javascript-start-up-performance-69200f43b201\" rel=\"noopener noreferrer nofollow\" target=\"_blank\">JavaScript Start-up Performance</a></li>\n<li><a href=\"https://developers.google.com/web/updates/2016/12/performant-parallaxing\" rel=\"noopener noreferrer nofollow\" target=\"_blank\">Performant Parallaxing</a></li>\n<li><a href=\"https://aerotwist.com/blog/the-anatomy-of-a-frame/\" rel=\"noopener noreferrer nofollow\" target=\"_blank\">The Anatomy of a Frame</a></li>\n<li><a href=\"https://jakearchibald.com/2016/link-in-body/\" rel=\"noopener noreferrer nofollow\" target=\"_blank\">The future of loading CSS</a></li>\n<li><a href=\"https://auth0.com/blog/four-types-of-leaks-in-your-javascript-code-and-how-to-get-rid-of-them/\" rel=\"noopener noreferrer nofollow\" target=\"_blank\">4 Types of Memory Leaks in JavaScript and How to Get Rid Of Them</a></li>\n<li><a href=\"https://aerotwist.com/blog/the-cost-of-frameworks/\" rel=\"noopener noreferrer nofollow\" target=\"_blank\">The cost of frameworks</a></li>\n<li><a href=\"https://aerotwist.com/blog/flip-your-animations/\" rel=\"noopener noreferrer nofollow\" target=\"_blank\">FLIP Your Animations</a></li>\n</ul>";

				const frontmatter$d = {};
				const file$d = "/workspaces/developer-roadmap/src/data/best-practices/frontend-performance/content/recommended-guides.md";
				const url$d = undefined;
				function rawContent$d() {
					return "# Recommended Guides\n\n> Optimize the critical rendering path:\n\n- [Critical CSS? Not So Fast!](https://csswizardry.com/2022/09/critical-css-not-so-fast/)\n- [Priority Hints - What Your Browser Doesn’t Know (Yet)](https://www.etsy.com/codeascraft/priority-hints-what-your-browser-doesnt-know-yet)\n- [Optimizing resource loading with Priority Hints](https://web.dev/priority-hints/)\n- [Chrome Resource Priorities and Scheduling](https://docs.google.com/document/d/1bCDuq9H1ih9iNjgzyAL0gpwNFiEP4TZS-YLRp_RuMlc/edit?usp=sharing)\n- [How To Optimize CSS for Peak Site Performance](https://kinsta.com/blog/optimize-css/)\n- [Eliminate render blocking CSS to improve start render time](https://www.jeffreyknox.dev/blog/eliminate-render-blocking-css-to-improve-start-render-time/)\n- [Small Bundles, Fast Pages: What To Do With Too Much JavaScript](https://calibreapp.com/blog/bundle-size-optimization)\n- [How to Eliminate Render-Blocking Resources: a Deep Dive](https://sia.codes/posts/render-blocking-resources/)\n- [The Critical Request: How to Prioritise Requests to Improve Speed](https://calibreapp.com/blog/critical-request)\n- [How to Improve CSS Performance](https://calibreapp.com/blog/css-performance)\n- [The Simplest Way to Load CSS Asynchronously](https://www.filamentgroup.com/lab/load-css-simpler/)\n- [CSS audit](https://css-tricks.com/a-quick-css-audit-and-general-notes-about-design-systems/)\n- [Measuring the Critical Rendering Path](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/measure-crp)\n- [Inlining or Caching? Both Please!](https://www.filamentgroup.com/lab/inlining-cache.html)\n- [CSS and Network Performance](https://csswizardry.com/2018/11/css-and-network-performance/)\n- [Analyzing Critical Rendering Path Performance](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/analyzing-crp)\n- [Front-End Performance Checklist](https://github.com/thedaviddias/Front-End-Performance-Checklist)\n- [The PRPL Pattern](https://developers.google.com/web/fundamentals/performance/prpl-pattern/)\n- [Now You See Me: How To Defer, Lazy-Load And Act With IntersectionObserver](https://www.smashingmagazine.com/2018/01/deferring-lazy-loading-intersection-observer-api/)\n- [Optimising the front end for the browser](https://hackernoon.com/optimising-the-front-end-for-the-browser-f2f51a29c572)\n- [Prefer DEFER Over ASYNC](https://calendar.perfplanet.com/2016/prefer-defer-over-async/)\n- [A comprehensive guide to font loading strategies](https://www.zachleat.com/web/comprehensive-webfonts/)\n- [Understanding the critical rendering path, rendering pages in 1 second](https://medium.com/@luisvieira_gmr/understanding-the-critical-rendering-path-rendering-pages-in-1-second-735c6e45b47a)\n- [More Weight Doesn’t Mean More Wait](https://www.filamentgroup.com/lab/weight-wait.html)\n\n> JavaScript Rendering Performance\n\n- [Five Data-Loading Patterns To Boost Web Performance](https://www.smashingmagazine.com/2022/09/data-loading-patterns-improve-frontend-performance/)\n- [Optimize long tasks](https://web.dev/optimize-long-tasks/)\n- [The impact of removing jQuery on our web performance](https://insidegovuk.blog.gov.uk/2022/08/15/the-impact-of-removing-jquery-on-our-web-performance/)\n- [Profiling & Optimizing the runtime performance with the DevTools Performance tab](iamtk.co/profiling-and-optimizing-the-runtime-performance-with-the-devtools-performance-tab)\n- [Don't fight the browser preload scanner](https://web.dev/preload-scanner/)\n- [The Web Performance impact of jQuery](https://twitter.com/TheRealNooshu/status/1509487050122276864)\n- [Have Single-Page Apps Ruined the Web? | Transitional Apps](https://www.youtube.com/watch?v=860d8usGC0o)\n- [Improve how you architect webapps](https://www.patterns.dev/)\n- [Nuxt SSR Optimizing Tips](https://vueschool.io/articles/vuejs-tutorials/nuxt-ssr-optimizing-tips/), Filip Rakowski\n- [GPU accelerated JavaScript](https://gpu.rocks/#/)\n- [Introducing Partytown 🎉: Run Third-Party Scripts From a Web Worker](https://dev.to/adamdbradley/introducing-partytown-run-third-party-scripts-from-a-web-worker-2cnp)\n- [Astro: Astro is a fresh but familiar approach to building websites. Astro combines decades of proven performance best practices with the DX improvements of the component-oriented era. Use your favorite JavaScript framework and automatically ship the bare-minimum amount of JavaScript—by default.](https://docs.astro.build/getting-started/)\n- [Minimising Layout and Layout thrashing for 60 FPS](https://www.harrytheo.com/blog/2021/09/dom-reflow-and-layout-thrashing/)\n- [Does shadow DOM improve style performance?](https://nolanlawson.com/2021/08/15/does-shadow-dom-improve-style-performance/)\n- [Debugging memory leaks - HTTP 203](https://www.youtube.com/watch?v=YDU_3WdfkxA)\n- [Explore JavaScript Dependencies With Lighthouse Treemap](https://sia.codes/posts/lighthouse-treemap/)\n- [The real cost of Javascript dependencies (and the state of JS package quality)](https://medium.com/voodoo-engineering/the-real-cost-of-javascript-dependencies-and-the-state-of-js-package-quality-a8dacd74c0ec)\n- [The State Of Web Workers In 2021](https://www.smashingmagazine.com/2021/06/web-workers-2021/)\n- [Techniques for developing high-performance animations](https://web.dev/animations/)\n- [Building a Faster Web Experience with the postTask Scheduler](https://medium.com/airbnb-engineering/building-a-faster-web-experience-with-the-posttask-scheduler-276b83454e91), Callie (Airbnb Engineering & Data Science)\n- [Don’t attach tooltips to document.body – Learn how the browser works – Debug forced reflow](https://atfzl.com/don-t-attach-tooltips-to-document-body)\n- [How to Create and Fix Memory Leaks With Chrome DevTools](https://betterprogramming.pub/build-me-an-angular-app-with-memory-leaks-please-36302184e658)\n- [JavaScript performance beyond bundle size](https://nolanlawson.com/2021/02/23/javascript-performance-beyond-bundle-size/)\n- [The Import On Interaction Pattern](https://addyosmani.com/blog/import-on-interaction/)\n- [The “Live DOM” Is Not “Slow”, “Bad”, Or “Wrong”. Web Developers Are.](https://levelup.gitconnected.com/the-live-dom-is-not-slow-bad-or-wrong-web-developers-are-2bf86c3b9e2e)\n- [Prevent layout shifts with CSS grid stacks](https://www.hsablonniere.com/prevent-layout-shifts-with-css-grid-stacks--qcj5jo/)\n- [content-visibility: the new CSS property that boosts your rendering performance](https://web.dev/content-visibility/)\n- [Preact vs React - Updating React at Etsy](https://github.com/mq2thez/blog/blob/main/upgrade-react-etsy/preact-vs-react.md)\n- [The Cost of Javascript Frameworks](https://timkadlec.com/remembers/2020-04-21-the-cost-of-javascript-frameworks/)\n- [Fixing memory leaks in web applications](https://nolanlawson.com/2020/02/19/fixing-memory-leaks-in-web-applications/)\n- [How to load polyfills only when needed](https://3perf.com/blog/polyfills/)\n- [Responsible JavaScript: Part III - Third parties](https://alistapart.com/article/responsible-javascript-part-3/)\n- [The cost of JavaScript in 2019](https://v8.dev/blog/cost-of-javascript-2019)\n- [When should you be using Web Workers?](https://dassur.ma/things/when-workers/)\n- [Responsible Javascript: Part II - Code Bundle](https://alistapart.com/article/responsible-javascript-part-2/)\n- [Faster script loading with BinaryAST?](https://blog.cloudflare.com/binary-ast/)\n- [Svelte 3: Rethinking reactivity](https://svelte.dev/blog/svelte-3-rethinking-reactivity)\n- [Responsible Javascript: Part I - Web platform over frameworks](https://alistapart.com/article/responsible-javascript-part-1/)\n- [JavaScript Loading Priorities in Chrome](https://addyosmani.com/blog/script-priorities/)\n- [Idle Until Urgent](https://philipwalton.com/articles/idle-until-urgent/)\n- [Browser painting and considerations for web performance](https://css-tricks.com/browser-painting-and-considerations-for-web-performance/)\n- [The Cost Of JavaScript In 2018](https://medium.com/@addyosmani/the-cost-of-javascript-in-2018-7d8950fbb5d4) ([Video](https://www.youtube.com/watch?v=i5R7giitymk))\n- [Examining Web Worker Performance](https://www.jameslmilner.com/posts/web-worker-performance)\n- [Front-End Performance Checklist](https://github.com/thedaviddias/Front-End-Performance-Checklist)\n- [jankfree](http://jankfree.org/)\n- [What forces layout/reflow?](https://gist.github.com/paulirish/5d52fb081b3570c81e3a)\n- [Using requestIdleCallback](https://developers.google.com/web/updates/2015/08/using-requestidlecallback)\n- [Optimize Javascript Execution](https://developers.google.com/web/fundamentals/performance/rendering/optimize-javascript-execution)\n- [Why Web Developers Need to Care about Interactivity](https://philipwalton.com/articles/why-web-developers-need-to-care-about-interactivity/)\n- [Improving Performance with the Paint Timing API](https://www.sitepen.com/blog/2017/10/06/improving-performance-with-the-paint-timing-api)\n- [Deploying ES2015+ Code in Production Today](https://philipwalton.com/articles/deploying-es2015-code-in-production-today/)\n- [Performant Web Animations and Interactions: Achieving 60 FPS](https://blog.algolia.com/performant-web-animations/)\n- [JavaScript Start-up Performance](https://medium.com/reloading/javascript-start-up-performance-69200f43b201)\n- [Performant Parallaxing](https://developers.google.com/web/updates/2016/12/performant-parallaxing)\n- [The Anatomy of a Frame](https://aerotwist.com/blog/the-anatomy-of-a-frame/)\n- [The future of loading CSS](https://jakearchibald.com/2016/link-in-body/)\n- [4 Types of Memory Leaks in JavaScript and How to Get Rid Of Them](https://auth0.com/blog/four-types-of-leaks-in-your-javascript-code-and-how-to-get-rid-of-them/)\n- [The cost of frameworks](https://aerotwist.com/blog/the-cost-of-frameworks/)\n- [FLIP Your Animations](https://aerotwist.com/blog/flip-your-animations/)\n";
				}
				function compiledContent$d() {
					return html$d;
				}
				function getHeadings$d() {
					return [{"depth":1,"slug":"recommended-guides","text":"Recommended Guides"}];
				}

				const Content$d = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter$d;
					content.file = file$d;
					content.url = url$d;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html$d)}`;
				});

const __vite_glob_0_255 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	Content: Content$d,
	compiledContent: compiledContent$d,
	default: Content$d,
	file: file$d,
	frontmatter: frontmatter$d,
	getHeadings: getHeadings$d,
	rawContent: rawContent$d,
	url: url$d
}, Symbol.toStringTag, { value: 'Module' }));

const html$c = "<h1 id=\"remove-unused-css\">Remove Unused CSS</h1>\n<p>Removing unused CSS selectors can reduce the size of your files and then speed up the load of your assets.</p>\n<p>Always check if the framework CSS you want to use don’t already has a reset / normalize code included. Sometimes you may not need everything that is inside your reset / normalize file.</p>\n<ul>\n<li><a href=\"https://uncss-online.com/\" rel=\"noopener noreferrer nofollow\" target=\"_blank\">UnCSS Online</a></li>\n<li><a href=\"https://github.com/purifycss/purifycss\" rel=\"noopener noreferrer nofollow\" target=\"_blank\">PurifyCSS</a></li>\n<li><a href=\"https://github.com/FullHuman/purgecss\" rel=\"noopener noreferrer nofollow\" target=\"_blank\">PurgeCSS</a></li>\n<li><a href=\"https://developers.google.com/web/updates/2017/04/devtools-release-notes#coverage\" rel=\"noopener noreferrer nofollow\" target=\"_blank\">Chrome DevTools Coverage</a></li>\n</ul>";

				const frontmatter$c = {};
				const file$c = "/workspaces/developer-roadmap/src/data/best-practices/frontend-performance/content/remove-unused-css.md";
				const url$c = undefined;
				function rawContent$c() {
					return "# Remove Unused CSS\n\nRemoving unused CSS selectors can reduce the size of your files and then speed up the load of your assets.\n\nAlways check if the framework CSS you want to use don't already has a reset / normalize code included. Sometimes you may not need everything that is inside your reset / normalize file.\n\n- [UnCSS Online](https://uncss-online.com/)\n- [PurifyCSS](https://github.com/purifycss/purifycss)\n- [PurgeCSS](https://github.com/FullHuman/purgecss)\n- [Chrome DevTools Coverage](https://developers.google.com/web/updates/2017/04/devtools-release-notes#coverage)\n";
				}
				function compiledContent$c() {
					return html$c;
				}
				function getHeadings$c() {
					return [{"depth":1,"slug":"remove-unused-css","text":"Remove Unused CSS"}];
				}

				const Content$c = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter$c;
					content.file = file$c;
					content.url = url$c;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html$c)}`;
				});

const __vite_glob_0_256 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	Content: Content$c,
	compiledContent: compiledContent$c,
	default: Content$c,
	file: file$c,
	frontmatter: frontmatter$c,
	getHeadings: getHeadings$c,
	rawContent: rawContent$c,
	url: url$c
}, Symbol.toStringTag, { value: 'Module' }));

const html$b = "<h1 id=\"responsive-images\">Responsive Images</h1>\n<blockquote>\n<p>Ensure to serve images that are close to your display size.</p>\n</blockquote>\n<p>Small devices don’t need images bigger than their viewport. It’s recommended to have multiple versions of one image on different sizes.</p>\n<ul>\n<li>\n<p>Create different image sizes for the devices you want to target</p>\n</li>\n<li>\n<p>Use <code>srcset</code> and <code>picture</code> to deliver multiple variants of each image.</p>\n</li>\n<li>\n<p><a href=\"https://developer.mozilla.org/en-US/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images\" rel=\"noopener noreferrer nofollow\" target=\"_blank\">Responsive images - Learn web development | MDN</a></p>\n</li>\n</ul>";

				const frontmatter$b = {};
				const file$b = "/workspaces/developer-roadmap/src/data/best-practices/frontend-performance/content/serve-exact-size-images.md";
				const url$b = undefined;
				function rawContent$b() {
					return "# Responsive Images\n\n> Ensure to serve images that are close to your display size.\n\nSmall devices don't need images bigger than their viewport. It's recommended to have multiple versions of one image on different sizes.\n\n- Create different image sizes for the devices you want to target\n- Use `srcset` and `picture` to deliver multiple variants of each image.\n\n- [Responsive images - Learn web development | MDN](https://developer.mozilla.org/en-US/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images)\n";
				}
				function compiledContent$b() {
					return html$b;
				}
				function getHeadings$b() {
					return [{"depth":1,"slug":"responsive-images","text":"Responsive Images"}];
				}

				const Content$b = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter$b;
					content.file = file$b;
					content.url = url$b;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html$b)}`;
				});

const __vite_glob_0_257 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	Content: Content$b,
	compiledContent: compiledContent$b,
	default: Content$b,
	file: file$b,
	frontmatter: frontmatter$b,
	getHeadings: getHeadings$b,
	rawContent: rawContent$b,
	url: url$b
}, Symbol.toStringTag, { value: 'Module' }));

const html$a = "<h1 id=\"image-dimensions\">Image Dimensions</h1>\n<blockquote>\n<p>Set width and height attributes on <code>&#x3C;img></code> if the final rendered image size is known.</p>\n</blockquote>\n<p>If height and width are set, the space required for the image is reserved when the page is loaded. However, without these attributes, the browser does not know the size of the image, and cannot reserve the appropriate space to it. The effect will be that the page layout will change during loading (while the images load).</p>";

				const frontmatter$a = {};
				const file$a = "/workspaces/developer-roadmap/src/data/best-practices/frontend-performance/content/set-width-height-images.md";
				const url$a = undefined;
				function rawContent$a() {
					return "# Image Dimensions\n\n> Set width and height attributes on `<img>` if the final rendered image size is known.\n\nIf height and width are set, the space required for the image is reserved when the page is loaded. However, without these attributes, the browser does not know the size of the image, and cannot reserve the appropriate space to it. The effect will be that the page layout will change during loading (while the images load).\n";
				}
				function compiledContent$a() {
					return html$a;
				}
				function getHeadings$a() {
					return [{"depth":1,"slug":"image-dimensions","text":"Image Dimensions"}];
				}

				const Content$a = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter$a;
					content.file = file$a;
					content.url = url$a;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html$a)}`;
				});

const __vite_glob_0_258 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	Content: Content$a,
	compiledContent: compiledContent$a,
	default: Content$a,
	file: file$a,
	frontmatter: frontmatter$a,
	getHeadings: getHeadings$a,
	rawContent: rawContent$a,
	url: url$a
}, Symbol.toStringTag, { value: 'Module' }));

const html$9 = "<h1 id=\"squooshapp\">Squoosh.app</h1>\n<p>Squoosh.app is a web app that allows you to compress images using a variety of codecs. It is built by Google Chrome team and is open source.</p>\n<ul>\n<li><a href=\"https://squoosh.app/\" rel=\"noopener noreferrer nofollow\" target=\"_blank\">Squoosh.app</a></li>\n</ul>";

				const frontmatter$9 = {};
				const file$9 = "/workspaces/developer-roadmap/src/data/best-practices/frontend-performance/content/squoosh-ap.md";
				const url$9 = undefined;
				function rawContent$9() {
					return "# Squoosh.app\n\nSquoosh.app is a web app that allows you to compress images using a variety of codecs. It is built by Google Chrome team and is open source.\n\n- [Squoosh.app](https://squoosh.app/)\n";
				}
				function compiledContent$9() {
					return html$9;
				}
				function getHeadings$9() {
					return [{"depth":1,"slug":"squooshapp","text":"Squoosh.app"}];
				}

				const Content$9 = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter$9;
					content.file = file$9;
					content.url = url$9;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html$9)}`;
				});

const __vite_glob_0_259 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	Content: Content$9,
	compiledContent: compiledContent$9,
	default: Content$9,
	file: file$9,
	frontmatter: frontmatter$9,
	getHeadings: getHeadings$9,
	rawContent: rawContent$9,
	url: url$9
}, Symbol.toStringTag, { value: 'Module' }));

const html$8 = "<h1 id=\"use-cdn\">Use CDN</h1>\n<p>Use a CDN to serve your static assets. This will reduce the load on your server and improve the performance of your site.</p>\n<ul>\n<li><a href=\"https://www.cdnplanet.com/blog/10-tips-optimize-cdn-performance/\" rel=\"noopener noreferrer nofollow\" target=\"_blank\">10 Tips to Optimize CDN Performance - CDN Planet</a></li>\n<li><a href=\"https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/http-caching\" rel=\"noopener noreferrer nofollow\" target=\"_blank\">HTTP Caching | Web Fundamentals | Google Developers</a></li>\n</ul>";

				const frontmatter$8 = {};
				const file$8 = "/workspaces/developer-roadmap/src/data/best-practices/frontend-performance/content/use-cdn.md";
				const url$8 = undefined;
				function rawContent$8() {
					return "# Use CDN\n\nUse a CDN to serve your static assets. This will reduce the load on your server and improve the performance of your site.\n\n- [10 Tips to Optimize CDN Performance - CDN Planet](https://www.cdnplanet.com/blog/10-tips-optimize-cdn-performance/)\n- [HTTP Caching | Web Fundamentals | Google Developers](https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/http-caching)\n";
				}
				function compiledContent$8() {
					return html$8;
				}
				function getHeadings$8() {
					return [{"depth":1,"slug":"use-cdn","text":"Use CDN"}];
				}

				const Content$8 = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter$8;
					content.file = file$8;
					content.url = url$8;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html$8)}`;
				});

const __vite_glob_0_260 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	Content: Content$8,
	compiledContent: compiledContent$8,
	default: Content$8,
	file: file$8,
	frontmatter: frontmatter$8,
	getHeadings: getHeadings$8,
	rawContent: rawContent$8,
	url: url$8
}, Symbol.toStringTag, { value: 'Module' }));

const html$7 = "<h1 id=\"http-caching\">HTTP Caching</h1>\n<p>Set HTTP headers to avoid expensive number of roundtrips between your browser and the server.</p>\n<ul>\n<li><a href=\"https://developer.mozilla.org/en-US/docs/Web/HTTP/Caching\" rel=\"noopener noreferrer nofollow\" target=\"_blank\">HTTP Caching Overview</a></li>\n</ul>";

				const frontmatter$7 = {};
				const file$7 = "/workspaces/developer-roadmap/src/data/best-practices/frontend-performance/content/use-http-cache-headers.md";
				const url$7 = undefined;
				function rawContent$7() {
					return "# HTTP Caching\n\nSet HTTP headers to avoid expensive number of roundtrips between your browser and the server.\n\n- [HTTP Caching Overview](https://developer.mozilla.org/en-US/docs/Web/HTTP/Caching)\n";
				}
				function compiledContent$7() {
					return html$7;
				}
				function getHeadings$7() {
					return [{"depth":1,"slug":"http-caching","text":"HTTP Caching"}];
				}

				const Content$7 = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter$7;
					content.file = file$7;
					content.url = url$7;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html$7)}`;
				});

const __vite_glob_0_261 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	Content: Content$7,
	compiledContent: compiledContent$7,
	default: Content$7,
	file: file$7,
	frontmatter: frontmatter$7,
	getHeadings: getHeadings$7,
	rawContent: rawContent$7,
	url: url$7
}, Symbol.toStringTag, { value: 'Module' }));

const html$6 = "<h1 id=\"use-https\">Use HTTPs</h1>\n<p>HTTPS is not only for ecommerce websites, but for all websites that are exchanging data. Data shared by a user or data shared to an external entity. Modern browsers today limit functionalities for sites that are not secure. For example: geolocation, push notifications and service workers don’t work if your instance is not using HTTPS. And today is much more easy to setup a project with an SSL certificate than it was before (and for free, thanks to Let’s Encrypt).</p>\n<ul>\n<li><a href=\"https://www.cloudflare.com/learning/security/why-use-https/\" rel=\"noopener noreferrer nofollow\" target=\"_blank\">Why Use HTTPS? | Cloudflare</a></li>\n<li><a href=\"https://moz.com/blog/enabling-https-without-sacrificing-web-performance\" rel=\"noopener noreferrer nofollow\" target=\"_blank\">Enabling HTTPS Without Sacrificing Your Web Performance - Moz</a></li>\n<li><a href=\"https://wp-rocket.me/blog/https-affects-website-performance/\" rel=\"noopener noreferrer nofollow\" target=\"_blank\">How HTTPS Affects Website Performance</a></li>\n<li><a href=\"https://www.tunetheweb.com/blog/http-versus-https-versus-http2/\" rel=\"noopener noreferrer nofollow\" target=\"_blank\">HTTP versus HTTPS versus HTTP2 - The real story | Tune The Web</a></li>\n<li><a href=\"https://www.httpvshttps.com/\" rel=\"noopener noreferrer nofollow\" target=\"_blank\">HTTP vs HTTPS — Test them both yourself</a></li>\n</ul>";

				const frontmatter$6 = {};
				const file$6 = "/workspaces/developer-roadmap/src/data/best-practices/frontend-performance/content/use-https-on-your-website.md";
				const url$6 = undefined;
				function rawContent$6() {
					return "# Use HTTPs\n\nHTTPS is not only for ecommerce websites, but for all websites that are exchanging data. Data shared by a user or data shared to an external entity. Modern browsers today limit functionalities for sites that are not secure. For example: geolocation, push notifications and service workers don't work if your instance is not using HTTPS. And today is much more easy to setup a project with an SSL certificate than it was before (and for free, thanks to Let's Encrypt).\n\n- [Why Use HTTPS? | Cloudflare](https://www.cloudflare.com/learning/security/why-use-https/)\n- [Enabling HTTPS Without Sacrificing Your Web Performance - Moz](https://moz.com/blog/enabling-https-without-sacrificing-web-performance)\n- [How HTTPS Affects Website Performance](https://wp-rocket.me/blog/https-affects-website-performance/)\n- [HTTP versus HTTPS versus HTTP2 - The real story | Tune The Web](https://www.tunetheweb.com/blog/http-versus-https-versus-http2/)\n- [HTTP vs HTTPS — Test them both yourself](https://www.httpvshttps.com/)\n";
				}
				function compiledContent$6() {
					return html$6;
				}
				function getHeadings$6() {
					return [{"depth":1,"slug":"use-https","text":"Use HTTPs"}];
				}

				const Content$6 = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter$6;
					content.file = file$6;
					content.url = url$6;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html$6)}`;
				});

const __vite_glob_0_262 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	Content: Content$6,
	compiledContent: compiledContent$6,
	default: Content$6,
	file: file$6,
	frontmatter: frontmatter$6,
	getHeadings: getHeadings$6,
	rawContent: rawContent$6,
	url: url$6
}, Symbol.toStringTag, { value: 'Module' }));

const html$5 = "<h1 id=\"non-blocking-javascript\">Non-Blocking JavaScript</h1>\n<p>JavaScript files are loaded asynchronously using async or deferred using defer attribute.</p>\n<pre class=\"astro-code dracula\" style=\"background-color:#282A36;color:#F8F8F2; overflow-x: auto;\" tabindex=\"0\" data-language=\"javascript\"><code><span class=\"line\"><span style=\"color:#FF79C6\">&#x3C;!--</span><span style=\"color:#F8F8F2\"> Defer Attribute </span><span style=\"color:#FF79C6\">--></span></span>\n<span class=\"line\"><span style=\"color:#F8F8F2\">&#x3C;</span><span style=\"color:#FF79C6\">script</span><span style=\"color:#50FA7B;font-style:italic\"> defer</span><span style=\"color:#50FA7B;font-style:italic\"> src</span><span style=\"color:#FF79C6\">=</span><span style=\"color:#E9F284\">\"</span><span style=\"color:#F1FA8C\">foo.js</span><span style=\"color:#E9F284\">\"</span><span style=\"color:#F8F8F2\">>&#x3C;/</span><span style=\"color:#FF79C6\">script</span><span style=\"color:#F8F8F2\">></span></span>\n<span class=\"line\"></span>\n<span class=\"line\"><span style=\"color:#FF79C6\">&#x3C;!--</span><span style=\"color:#F8F8F2\"> Async Attribute </span><span style=\"color:#FF79C6\">--></span></span>\n<span class=\"line\"><span style=\"color:#F8F8F2\">&#x3C;</span><span style=\"color:#FF79C6\">script</span><span style=\"color:#50FA7B;font-style:italic\"> async</span><span style=\"color:#50FA7B;font-style:italic\"> src</span><span style=\"color:#FF79C6\">=</span><span style=\"color:#E9F284\">\"</span><span style=\"color:#F1FA8C\">foo.js</span><span style=\"color:#E9F284\">\"</span><span style=\"color:#F8F8F2\">>&#x3C;/</span><span style=\"color:#FF79C6\">script</span><span style=\"color:#F8F8F2\">></span></span>\n<span class=\"line\"></span></code></pre>\n<p>JavaScript blocks the normal parsing of the HTML document, so when the parser reaches a <code>&#x3C;script></code> tag (particularly is inside the <code>&#x3C;head></code>), it stops to fetch and run it. Adding async or defer are highly recommended if your scripts are placed in the top of your page but less valuable if just before your <code>&#x3C;/body></code> tag. But it’s a good practice to always use these attributes to avoid any performance issue.</p>\n<ul>\n<li>\n<p>Add <code>async</code> (if the script doesn’t rely on other scripts) or <code>defer</code> (if the script relies upon or is relied upon by an async script) as an attribute to your script tag.</p>\n</li>\n<li>\n<p>If you have small scripts, maybe use inline script place above async scripts.</p>\n</li>\n<li>\n<p><a href=\"https://developers.google.com/speed/docs/insights/v5/get-started\" rel=\"noopener noreferrer nofollow\" target=\"_blank\">Remove Render-Blocking JavaScript</a></p>\n</li>\n</ul>";

				const frontmatter$5 = {};
				const file$5 = "/workspaces/developer-roadmap/src/data/best-practices/frontend-performance/content/use-non-blocking-javascript.md";
				const url$5 = undefined;
				function rawContent$5() {
					return "# Non-Blocking JavaScript\n\nJavaScript files are loaded asynchronously using async or deferred using defer attribute.\n\n```javascript\n<!-- Defer Attribute -->\n<script defer src=\"foo.js\"></script>\n\n<!-- Async Attribute -->\n<script async src=\"foo.js\"></script>\n```\n\nJavaScript blocks the normal parsing of the HTML document, so when the parser reaches a `<script>` tag (particularly is inside the `<head>`), it stops to fetch and run it. Adding async or defer are highly recommended if your scripts are placed in the top of your page but less valuable if just before your `</body>` tag. But it's a good practice to always use these attributes to avoid any performance issue.\n\n- Add `async` (if the script doesn't rely on other scripts) or `defer` (if the script relies upon or is relied upon by an async script) as an attribute to your script tag.\n- If you have small scripts, maybe use inline script place above async scripts.\n\n- [Remove Render-Blocking JavaScript](https://developers.google.com/speed/docs/insights/v5/get-started)\n";
				}
				function compiledContent$5() {
					return html$5;
				}
				function getHeadings$5() {
					return [{"depth":1,"slug":"non-blocking-javascript","text":"Non-Blocking JavaScript"}];
				}

				const Content$5 = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter$5;
					content.file = file$5;
					content.url = url$5;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html$5)}`;
				});

const __vite_glob_0_263 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	Content: Content$5,
	compiledContent: compiledContent$5,
	default: Content$5,
	file: file$5,
	frontmatter: frontmatter$5,
	getHeadings: getHeadings$5,
	rawContent: rawContent$5,
	url: url$5
}, Symbol.toStringTag, { value: 'Module' }));

const html$4 = "<h1 id=\"preconnect-on-fonts\">Preconnect on Fonts</h1>\n<pre class=\"astro-code dracula\" style=\"background-color:#282A36;color:#F8F8F2; overflow-x: auto;\" tabindex=\"0\" data-language=\"html\"><code><span class=\"line\"><span style=\"color:#F8F8F2\">&#x3C;</span><span style=\"color:#FF79C6\">link</span><span style=\"color:#50FA7B;font-style:italic\"> rel</span><span style=\"color:#FF79C6\">=</span><span style=\"color:#E9F284\">\"</span><span style=\"color:#F1FA8C\">preconnect</span><span style=\"color:#E9F284\">\"</span><span style=\"color:#50FA7B;font-style:italic\"> href</span><span style=\"color:#FF79C6\">=</span><span style=\"color:#E9F284\">\"</span><span style=\"color:#F1FA8C\">https://fonts.gstatic.com</span><span style=\"color:#E9F284\">\"</span><span style=\"color:#50FA7B;font-style:italic\"> crossorigin</span><span style=\"color:#F8F8F2\"> /></span></span>\n<span class=\"line\"></span></code></pre>\n<p>When you arrived on a website, your device needs to find out where your site lives and which server it needs to connect with. Your browser had to contact a DNS server and wait for the lookup complete before fetching the resource (fonts, CSS files…). Prefetches and preconnects allow the browser to lookup the DNS information and start establishing a TCP connection to the server hosting the font file. This provides a performance boost because by the time the browser gets around to parsing the css file with the font information and discovering it needs to request a font file from the server, it will already have pre-resolved the DNS information and have an open connection to the server ready in its connection pool.</p>\n<ul>\n<li>\n<p>Before prefetching your webfonts, use webpagetest to evaluate your website</p>\n</li>\n<li>\n<p>Look for teal colored DNS lookups and note the host that are being requested</p>\n</li>\n<li>\n<p>Prefetch your webfonts in your <code>&#x3C;head></code> and add eventually these hostnames that you should prefetch too</p>\n</li>\n<li>\n<p><a href=\"https://www.cdnplanet.com/blog/faster-google-webfonts-preconnect/\" rel=\"noopener noreferrer nofollow\" target=\"_blank\">Faster Google Fonts with Preconnect - CDN Planet</a></p>\n</li>\n<li>\n<p><a href=\"https://www.viget.com/articles/make-your-site-faster-with-preconnect-hints/\" rel=\"noopener noreferrer nofollow\" target=\"_blank\">Make Your Site Faster with Preconnect Hints | Viget</a></p>\n</li>\n<li>\n<p><a href=\"https://www.machmetrics.com/speed-blog/guide-to-browser-hints-preload-preconnect-prefetch/\" rel=\"noopener noreferrer nofollow\" target=\"_blank\">Ultimate Guide to Browser Hints: Preload, Prefetch, and Preconnect - MachMetrics Speed Blog</a></p>\n</li>\n<li>\n<p><a href=\"https://www.zachleat.com/web/comprehensive-webfonts/#font-face\" rel=\"noopener noreferrer nofollow\" target=\"_blank\">A Comprehensive Guide to Font Loading Strategies—zachleat.com</a></p>\n</li>\n<li>\n<p><a href=\"https://github.com/typekit/webfontloader\" rel=\"noopener noreferrer nofollow\" target=\"_blank\">typekit/webfontloader: Web Font Loader gives you added control when using linked fonts via @font-face.</a></p>\n</li>\n</ul>";

				const frontmatter$4 = {};
				const file$4 = "/workspaces/developer-roadmap/src/data/best-practices/frontend-performance/content/use-preconnect-to-load-fonts.md";
				const url$4 = undefined;
				function rawContent$4() {
					return "# Preconnect on Fonts\n\n```html\n<link rel=\"preconnect\" href=\"https://fonts.gstatic.com\" crossorigin />\n```\n\nWhen you arrived on a website, your device needs to find out where your site lives and which server it needs to connect with. Your browser had to contact a DNS server and wait for the lookup complete before fetching the resource (fonts, CSS files...). Prefetches and preconnects allow the browser to lookup the DNS information and start establishing a TCP connection to the server hosting the font file. This provides a performance boost because by the time the browser gets around to parsing the css file with the font information and discovering it needs to request a font file from the server, it will already have pre-resolved the DNS information and have an open connection to the server ready in its connection pool.\n\n- Before prefetching your webfonts, use webpagetest to evaluate your website\n- Look for teal colored DNS lookups and note the host that are being requested\n- Prefetch your webfonts in your `<head>` and add eventually these hostnames that you should prefetch too\n\n- [Faster Google Fonts with Preconnect - CDN Planet](https://www.cdnplanet.com/blog/faster-google-webfonts-preconnect/)\n- [Make Your Site Faster with Preconnect Hints | Viget](https://www.viget.com/articles/make-your-site-faster-with-preconnect-hints/)\n- [Ultimate Guide to Browser Hints: Preload, Prefetch, and Preconnect - MachMetrics Speed Blog](https://www.machmetrics.com/speed-blog/guide-to-browser-hints-preload-preconnect-prefetch/)\n- [A Comprehensive Guide to Font Loading Strategies—zachleat.com](https://www.zachleat.com/web/comprehensive-webfonts/#font-face)\n- [typekit/webfontloader: Web Font Loader gives you added control when using linked fonts via @font-face.](https://github.com/typekit/webfontloader)\n";
				}
				function compiledContent$4() {
					return html$4;
				}
				function getHeadings$4() {
					return [{"depth":1,"slug":"preconnect-on-fonts","text":"Preconnect on Fonts"}];
				}

				const Content$4 = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter$4;
					content.file = file$4;
					content.url = url$4;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html$4)}`;
				});

const __vite_glob_0_264 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
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

const html$3 = "<h1 id=\"use-same-protocol\">Use same Protocol</h1>\n<p>Avoid having your website serving files coming from source using HTTP on your website which is using HTTPS for example. If your website is using HTTPS, external files should come from the same protocol.</p>";

				const frontmatter$3 = {};
				const file$3 = "/workspaces/developer-roadmap/src/data/best-practices/frontend-performance/content/use-same-protocol.md";
				const url$3 = undefined;
				function rawContent$3() {
					return "# Use same Protocol\n\nAvoid having your website serving files coming from source using HTTP on your website which is using HTTPS for example. If your website is using HTTPS, external files should come from the same protocol.\n";
				}
				function compiledContent$3() {
					return html$3;
				}
				function getHeadings$3() {
					return [{"depth":1,"slug":"use-same-protocol","text":"Use same Protocol"}];
				}

				const Content$3 = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter$3;
					content.file = file$3;
					content.url = url$3;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html$3)}`;
				});

const __vite_glob_0_265 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
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

const html$2 = "<h1 id=\"use-service-workers\">Use Service Workers</h1>\n<p>You are using Service Workers in your PWA to cache data or execute possible heavy tasks without impacting the user experience of your application.</p>\n<ul>\n<li><a href=\"https://developers.google.com/web/fundamentals/primers/service-workers/\" rel=\"noopener noreferrer nofollow\" target=\"_blank\">Service Workers: an Introduction | Web Fundamentals | Google Developers</a></li>\n<li><a href=\"https://developers.google.com/web/showcase/2016/service-worker-perf\" rel=\"noopener noreferrer nofollow\" target=\"_blank\">Measuring the Real-world Performance Impact of Service Workers | Web | Google Developers</a></li>\n<li><a href=\"https://www.keycdn.com/blog/service-workers/\" rel=\"noopener noreferrer nofollow\" target=\"_blank\">What Are Service Workers and How They Help Improve Performance</a></li>\n<li><a href=\"https://www.youtube.com/watch?v=__xAtWgfzvc\" rel=\"noopener noreferrer nofollow\" target=\"_blank\">How does a service worker work? - YouTube</a></li>\n</ul>";

				const frontmatter$2 = {};
				const file$2 = "/workspaces/developer-roadmap/src/data/best-practices/frontend-performance/content/use-service-workers-for-caching.md";
				const url$2 = undefined;
				function rawContent$2() {
					return "# Use Service Workers\n\nYou are using Service Workers in your PWA to cache data or execute possible heavy tasks without impacting the user experience of your application.\n\n- [Service Workers: an Introduction | Web Fundamentals | Google Developers](https://developers.google.com/web/fundamentals/primers/service-workers/)\n- [Measuring the Real-world Performance Impact of Service Workers | Web | Google Developers](https://developers.google.com/web/showcase/2016/service-worker-perf)\n- [What Are Service Workers and How They Help Improve Performance](https://www.keycdn.com/blog/service-workers/)\n- [How does a service worker work? - YouTube](https://www.youtube.com/watch?v=__xAtWgfzvc)\n";
				}
				function compiledContent$2() {
					return html$2;
				}
				function getHeadings$2() {
					return [{"depth":1,"slug":"use-service-workers","text":"Use Service Workers"}];
				}

				const Content$2 = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter$2;
					content.file = file$2;
					content.url = url$2;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html$2)}`;
				});

const __vite_glob_0_266 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
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

const html$1 = "<h1 id=\"use-woff-20-web-font\">Use WOFF 2.0 Web Font</h1>\n<p>According to Google, the WOFF 2.0 Web Font compression format offers 30% average gain over WOFF 1.0. It’s then good to use WOFF 2.0, WOFF 1.0 as a fallback and TTF.</p>\n<p>Check before buying your new font that the provider gives you the WOFF2 format. If you are using a free font, you can always use Font Squirrel to generate all the formats you need.</p>\n<ul>\n<li><a href=\"https://gist.github.com/sergejmueller/cf6b4f2133bcb3e2f64a\" rel=\"noopener noreferrer nofollow\" target=\"_blank\">WOFF 2.0 – Learn more about the next generation Web Font Format and convert TTF to WOFF2</a></li>\n<li><a href=\"https://www.fontsquirrel.com/tools/webfont-generator\" rel=\"noopener noreferrer nofollow\" target=\"_blank\">Create Your Own @font-face Kits » Font Squirrel</a></li>\n<li><a href=\"https://icomoon.io/app/\" rel=\"noopener noreferrer nofollow\" target=\"_blank\">IcoMoon App - Icon Font, SVG, PDF &#x26; PNG Generator</a></li>\n<li><a href=\"https://css-tricks.com/snippets/css/using-font-face/?ref=frontendchecklist\" rel=\"noopener noreferrer nofollow\" target=\"_blank\">Using @font-face | CSS-Tricks</a></li>\n<li><a href=\"https://caniuse.com/#feat=woff2\" rel=\"noopener noreferrer nofollow\" target=\"_blank\">Can I use… WOFF2</a></li>\n</ul>";

				const frontmatter$1 = {};
				const file$1 = "/workspaces/developer-roadmap/src/data/best-practices/frontend-performance/content/use-woff2-font-format.md";
				const url$1 = undefined;
				function rawContent$1() {
					return "# Use WOFF 2.0 Web Font\n\nAccording to Google, the WOFF 2.0 Web Font compression format offers 30% average gain over WOFF 1.0. It's then good to use WOFF 2.0, WOFF 1.0 as a fallback and TTF.\n\nCheck before buying your new font that the provider gives you the WOFF2 format. If you are using a free font, you can always use Font Squirrel to generate all the formats you need.\n\n- [WOFF 2.0 – Learn more about the next generation Web Font Format and convert TTF to WOFF2](https://gist.github.com/sergejmueller/cf6b4f2133bcb3e2f64a)\n- [Create Your Own @font-face Kits » Font Squirrel](https://www.fontsquirrel.com/tools/webfont-generator)\n- [IcoMoon App - Icon Font, SVG, PDF & PNG Generator](https://icomoon.io/app/)\n- [Using @font-face | CSS-Tricks](https://css-tricks.com/snippets/css/using-font-face/?ref=frontendchecklist)\n- [Can I use... WOFF2](https://caniuse.com/#feat=woff2)\n";
				}
				function compiledContent$1() {
					return html$1;
				}
				function getHeadings$1() {
					return [{"depth":1,"slug":"use-woff-20-web-font","text":"Use WOFF 2.0 Web Font"}];
				}

				const Content$1 = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter$1;
					content.file = file$1;
					content.url = url$1;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html$1)}`;
				});

const __vite_glob_0_267 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
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

const html = "<h1 id=\"webpagetestorg\">webpagetest.org</h1>\n<p>Webpagetest.org is a website performance testing tool that allows users to test the load time and performance of web pages. It provides a wealth of information about the page load, including load time, Speed Index, and filmstrip view of the page load, as well as a breakdown of the page components and their load times. It also allows for testing from multiple locations and browsers. The test results can be shared and compared with others. It is widely used by developers, marketers, and website owners to improve the performance and user experience of their websites.</p>";

				const frontmatter = {};
				const file = "/workspaces/developer-roadmap/src/data/best-practices/frontend-performance/content/web-page-test.md";
				const url = undefined;
				function rawContent() {
					return "# webpagetest.org\n\nWebpagetest.org is a website performance testing tool that allows users to test the load time and performance of web pages. It provides a wealth of information about the page load, including load time, Speed Index, and filmstrip view of the page load, as well as a breakdown of the page components and their load times. It also allows for testing from multiple locations and browsers. The test results can be shared and compared with others. It is widely used by developers, marketers, and website owners to improve the performance and user experience of their websites.\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":1,"slug":"webpagetestorg","text":"webpagetest.org"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

const __vite_glob_0_268 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
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

function generateTopicUrl(filePath) {
  return filePath.replace("/src/data/best-practices/", "/").replace("/content", "").replace(/\/\d+-/g, "/").replace(/\/index\.md$/, "").replace(/\.md$/, "");
}
async function getAllBestPracticeTopicFiles() {
  const contentFiles = await /* #__PURE__ */ Object.assign({"/src/data/best-practices/api-security/content/api-gateway.md": __vite_glob_0_0,"/src/data/best-practices/api-security/content/authentication-mechanisms.md": __vite_glob_0_1,"/src/data/best-practices/api-security/content/authorization-header.md": __vite_glob_0_2,"/src/data/best-practices/api-security/content/avoid-http-blocking.md": __vite_glob_0_3,"/src/data/best-practices/api-security/content/avoid-logging-sensitive-data.md": __vite_glob_0_4,"/src/data/best-practices/api-security/content/avoid-personal-id-urls.md": __vite_glob_0_5,"/src/data/best-practices/api-security/content/avoid-sensitive-data.md": __vite_glob_0_6,"/src/data/best-practices/api-security/content/cdn-for-file-uploads.md": __vite_glob_0_7,"/src/data/best-practices/api-security/content/centralized-logins.md": __vite_glob_0_8,"/src/data/best-practices/api-security/content/check-dependencies.md": __vite_glob_0_9,"/src/data/best-practices/api-security/content/code-review-process.md": __vite_glob_0_10,"/src/data/best-practices/api-security/content/csp-header.md": __vite_glob_0_11,"/src/data/best-practices/api-security/content/debug-mode-off.md": __vite_glob_0_12,"/src/data/best-practices/api-security/content/directory-listings.md": __vite_glob_0_13,"/src/data/best-practices/api-security/content/disable-entity-expansion.md": __vite_glob_0_14,"/src/data/best-practices/api-security/content/disable-entity-parsing-xml.md": __vite_glob_0_15,"/src/data/best-practices/api-security/content/endpoint-authentication.md": __vite_glob_0_16,"/src/data/best-practices/api-security/content/force-content-type.md": __vite_glob_0_17,"/src/data/best-practices/api-security/content/good-jwt-secret.md": __vite_glob_0_18,"/src/data/best-practices/api-security/content/hsts-header.md": __vite_glob_0_19,"/src/data/best-practices/api-security/content/index.md": __vite_glob_0_20,"/src/data/best-practices/api-security/content/jwt-algorithm.md": __vite_glob_0_21,"/src/data/best-practices/api-security/content/jwt-payload.md": __vite_glob_0_22,"/src/data/best-practices/api-security/content/max-retry-jail.md": __vite_glob_0_23,"/src/data/best-practices/api-security/content/monitor-everything.md": __vite_glob_0_24,"/src/data/best-practices/api-security/content/no-sniff-header.md": __vite_glob_0_25,"/src/data/best-practices/api-security/content/non-executable-stacks.md": __vite_glob_0_26,"/src/data/best-practices/api-security/content/oauth-redirect-ui.md": __vite_glob_0_27,"/src/data/best-practices/api-security/content/oauth-state.md": __vite_glob_0_28,"/src/data/best-practices/api-security/content/oauth-validate-scope.md": __vite_glob_0_29,"/src/data/best-practices/api-security/content/only-server-side-encryption.md": __vite_glob_0_30,"/src/data/best-practices/api-security/content/payload-size.md": __vite_glob_0_31,"/src/data/best-practices/api-security/content/prefer-uuid.md": __vite_glob_0_32,"/src/data/best-practices/api-security/content/proper-http-methods.md": __vite_glob_0_33,"/src/data/best-practices/api-security/content/proper-response-code.md": __vite_glob_0_34,"/src/data/best-practices/api-security/content/recommended-resources.md": __vite_glob_0_35,"/src/data/best-practices/api-security/content/remove-fingerprint-header.md": __vite_glob_0_36,"/src/data/best-practices/api-security/content/response-type-token.md": __vite_glob_0_37,"/src/data/best-practices/api-security/content/restrict-private-apis.md": __vite_glob_0_38,"/src/data/best-practices/api-security/content/rollback-deployments.md": __vite_glob_0_39,"/src/data/best-practices/api-security/content/run-security-analysis.md": __vite_glob_0_40,"/src/data/best-practices/api-security/content/sensitive-data-encryption.md": __vite_glob_0_41,"/src/data/best-practices/api-security/content/set-alerts.md": __vite_glob_0_42,"/src/data/best-practices/api-security/content/throttle-requests.md": __vite_glob_0_43,"/src/data/best-practices/api-security/content/token-expiry.md": __vite_glob_0_44,"/src/data/best-practices/api-security/content/unit-integration-tests.md": __vite_glob_0_45,"/src/data/best-practices/api-security/content/use-https.md": __vite_glob_0_46,"/src/data/best-practices/api-security/content/use-ids-ips-system.md": __vite_glob_0_47,"/src/data/best-practices/api-security/content/use-standard-authentication.md": __vite_glob_0_48,"/src/data/best-practices/api-security/content/validate-content-type.md": __vite_glob_0_49,"/src/data/best-practices/api-security/content/validate-user-input.md": __vite_glob_0_50,"/src/data/best-practices/api-security/content/x-frame-options-deny.md": __vite_glob_0_51,"/src/data/best-practices/aws/content/alerts-as-notifications.md": __vite_glob_0_52,"/src/data/best-practices/aws/content/app-changes-for-aws.md": __vite_glob_0_53,"/src/data/best-practices/aws/content/application-state.md": __vite_glob_0_54,"/src/data/best-practices/aws/content/automate-everything.md": __vite_glob_0_55,"/src/data/best-practices/aws/content/avoid-fs-mounts.md": __vite_glob_0_56,"/src/data/best-practices/aws/content/avoid-multiple-scaling-triggers.md": __vite_glob_0_57,"/src/data/best-practices/aws/content/avoid-server-eips.md": __vite_glob_0_58,"/src/data/best-practices/aws/content/aws-naming-convention.md": __vite_glob_0_59,"/src/data/best-practices/aws/content/aws-right-choice.md": __vite_glob_0_60,"/src/data/best-practices/aws/content/beware-aws-limits.md": __vite_glob_0_61,"/src/data/best-practices/aws/content/billing-alerts.md": __vite_glob_0_62,"/src/data/best-practices/aws/content/bucket-names-ssl.md": __vite_glob_0_63,"/src/data/best-practices/aws/content/cloudfront-in-front-of-s3.md": __vite_glob_0_64,"/src/data/best-practices/aws/content/cloudtrail.md": __vite_glob_0_65,"/src/data/best-practices/aws/content/cloudwatch-cli-tools.md": __vite_glob_0_66,"/src/data/best-practices/aws/content/cloudwatch-custom-metrics.md": __vite_glob_0_67,"/src/data/best-practices/aws/content/cloudwatch-detailed-monitoring.md": __vite_glob_0_68,"/src/data/best-practices/aws/content/cloudwatch-free-metrics.md": __vite_glob_0_69,"/src/data/best-practices/aws/content/configuration-endpoints.md": __vite_glob_0_70,"/src/data/best-practices/aws/content/configured-azs-only.md": __vite_glob_0_71,"/src/data/best-practices/aws/content/disable-ssh-access.md": __vite_glob_0_72,"/src/data/best-practices/aws/content/ec2-roles.md": __vite_glob_0_73,"/src/data/best-practices/aws/content/elb-healthchecks.md": __vite_glob_0_74,"/src/data/best-practices/aws/content/failover-event-subscription.md": __vite_glob_0_75,"/src/data/best-practices/aws/content/group-permissions.md": __vite_glob_0_76,"/src/data/best-practices/aws/content/index.md": __vite_glob_0_77,"/src/data/best-practices/aws/content/key-management-strategy.md": __vite_glob_0_78,"/src/data/best-practices/aws/content/lock-security-groups.md": __vite_glob_0_79,"/src/data/best-practices/aws/content/logs-information.md": __vite_glob_0_80,"/src/data/best-practices/aws/content/multi-factor-auth-iam.md": __vite_glob_0_81,"/src/data/best-practices/aws/content/pre-warm-elb.md": __vite_glob_0_82,"/src/data/best-practices/aws/content/random-strings-keys.md": __vite_glob_0_83,"/src/data/best-practices/aws/content/redundant-across-azs.md": __vite_glob_0_84,"/src/data/best-practices/aws/content/release-eips.md": __vite_glob_0_85,"/src/data/best-practices/aws/content/reserved-instances.md": __vite_glob_0_86,"/src/data/best-practices/aws/content/s3-hive-results.md": __vite_glob_0_87,"/src/data/best-practices/aws/content/scale-down-events.md": __vite_glob_0_88,"/src/data/best-practices/aws/content/scale-horizontally.md": __vite_glob_0_89,"/src/data/best-practices/aws/content/security-audit.md": __vite_glob_0_90,"/src/data/best-practices/aws/content/service-over-servers.md": __vite_glob_0_91,"/src/data/best-practices/aws/content/tag-everything.md": __vite_glob_0_92,"/src/data/best-practices/aws/content/terminate-ssl.md": __vite_glob_0_93,"/src/data/best-practices/aws/content/termination-protection.md": __vite_glob_0_94,"/src/data/best-practices/aws/content/tools-for-logs.md": __vite_glob_0_95,"/src/data/best-practices/aws/content/use-alias-records.md": __vite_glob_0_96,"/src/data/best-practices/aws/content/use-iam-acount.md": __vite_glob_0_97,"/src/data/best-practices/aws/content/use-iam-roles.md": __vite_glob_0_98,"/src/data/best-practices/aws/content/use-official-sdks.md": __vite_glob_0_99,"/src/data/best-practices/aws/content/use-vpc.md": __vite_glob_0_100,"/src/data/best-practices/aws/content/user-multiple-api-keys.md": __vite_glob_0_101,"/src/data/best-practices/backend-performance/content/architectural-styles.md": __vite_glob_0_102,"/src/data/best-practices/backend-performance/content/async-logging.md": __vite_glob_0_103,"/src/data/best-practices/backend-performance/content/authentication-authorization.md": __vite_glob_0_104,"/src/data/best-practices/backend-performance/content/cache-invalidation.md": __vite_glob_0_105,"/src/data/best-practices/backend-performance/content/caching-locations.md": __vite_glob_0_106,"/src/data/best-practices/backend-performance/content/caching-strategies.md": __vite_glob_0_107,"/src/data/best-practices/backend-performance/content/cdns.md": __vite_glob_0_108,"/src/data/best-practices/backend-performance/content/cleanup-data.md": __vite_glob_0_109,"/src/data/best-practices/backend-performance/content/compiled-languages.md": __vite_glob_0_110,"/src/data/best-practices/backend-performance/content/connection-pool-settings.md": __vite_glob_0_111,"/src/data/best-practices/backend-performance/content/connection-pooling.md": __vite_glob_0_112,"/src/data/best-practices/backend-performance/content/connection-timeouts.md": __vite_glob_0_113,"/src/data/best-practices/backend-performance/content/critical-paths.md": __vite_glob_0_114,"/src/data/best-practices/backend-performance/content/db-indexes.md": __vite_glob_0_115,"/src/data/best-practices/backend-performance/content/denormalize.md": __vite_glob_0_116,"/src/data/best-practices/backend-performance/content/enable-compression.md": __vite_glob_0_117,"/src/data/best-practices/backend-performance/content/implement-pagination.md": __vite_glob_0_118,"/src/data/best-practices/backend-performance/content/index.md": __vite_glob_0_119,"/src/data/best-practices/backend-performance/content/join-operations.md": __vite_glob_0_120,"/src/data/best-practices/backend-performance/content/keep-alive.md": __vite_glob_0_121,"/src/data/best-practices/backend-performance/content/lazy-eager.md": __vite_glob_0_122,"/src/data/best-practices/backend-performance/content/load-balancing.md": __vite_glob_0_123,"/src/data/best-practices/backend-performance/content/message-brokers.md": __vite_glob_0_124,"/src/data/best-practices/backend-performance/content/monitoring-logging.md": __vite_glob_0_125,"/src/data/best-practices/backend-performance/content/network-latency.md": __vite_glob_0_126,"/src/data/best-practices/backend-performance/content/offload-heavy.md": __vite_glob_0_127,"/src/data/best-practices/backend-performance/content/optimize-algorithms.md": __vite_glob_0_128,"/src/data/best-practices/backend-performance/content/orm-queries.md": __vite_glob_0_129,"/src/data/best-practices/backend-performance/content/pagination-large-data.md": __vite_glob_0_130,"/src/data/best-practices/backend-performance/content/perf-testing.md": __vite_glob_0_131,"/src/data/best-practices/backend-performance/content/prefetch-preload.md": __vite_glob_0_132,"/src/data/best-practices/backend-performance/content/profile-code.md": __vite_glob_0_133,"/src/data/best-practices/backend-performance/content/profiling-tools.md": __vite_glob_0_134,"/src/data/best-practices/backend-performance/content/prometheus-graphana.md": __vite_glob_0_135,"/src/data/best-practices/backend-performance/content/reasonable-payload.md": __vite_glob_0_136,"/src/data/best-practices/backend-performance/content/regular-audits.md": __vite_glob_0_137,"/src/data/best-practices/backend-performance/content/replication.md": __vite_glob_0_138,"/src/data/best-practices/backend-performance/content/request-throttling.md": __vite_glob_0_139,"/src/data/best-practices/backend-performance/content/scaling-strategies.md": __vite_glob_0_140,"/src/data/best-practices/backend-performance/content/select-star.md": __vite_glob_0_141,"/src/data/best-practices/backend-performance/content/similar-requests.md": __vite_glob_0_142,"/src/data/best-practices/backend-performance/content/slow-logging.md": __vite_glob_0_143,"/src/data/best-practices/backend-performance/content/streaming-large.md": __vite_glob_0_144,"/src/data/best-practices/backend-performance/content/unnecessary-computation.md": __vite_glob_0_145,"/src/data/best-practices/backend-performance/content/up-to-date.md": __vite_glob_0_146,"/src/data/best-practices/backend-performance/content/use-db-sharding.md": __vite_glob_0_147,"/src/data/best-practices/backend-performance/content/utilize-caching.md": __vite_glob_0_148,"/src/data/best-practices/code-review/content/address-author-concerns.md": __vite_glob_0_149,"/src/data/best-practices/code-review/content/address-feedback-received.md": __vite_glob_0_150,"/src/data/best-practices/code-review/content/adequate-review-time.md": __vite_glob_0_151,"/src/data/best-practices/code-review/content/adhere-guidelines.md": __vite_glob_0_152,"/src/data/best-practices/code-review/content/architecture-understanding.md": __vite_glob_0_153,"/src/data/best-practices/code-review/content/author-feedback-welcomed.md": __vite_glob_0_154,"/src/data/best-practices/code-review/content/celebrate-success.md": __vite_glob_0_155,"/src/data/best-practices/code-review/content/change-functioning.md": __vite_glob_0_156,"/src/data/best-practices/code-review/content/changes-ready.md": __vite_glob_0_157,"/src/data/best-practices/code-review/content/clear-feedback.md": __vite_glob_0_158,"/src/data/best-practices/code-review/content/code-guide-best-practices-adherence.md": __vite_glob_0_159,"/src/data/best-practices/code-review/content/code-review-purpose.md": __vite_glob_0_160,"/src/data/best-practices/code-review/content/collaborate-reviewer-author.md": __vite_glob_0_161,"/src/data/best-practices/code-review/content/complex-tasks-breakage.md": __vite_glob_0_162,"/src/data/best-practices/code-review/content/conflict-resolution.md": __vite_glob_0_163,"/src/data/best-practices/code-review/content/consistency-everywhere.md": __vite_glob_0_164,"/src/data/best-practices/code-review/content/continuous-improvement-over-perfection.md": __vite_glob_0_165,"/src/data/best-practices/code-review/content/cross-functional-knowledge.md": __vite_glob_0_166,"/src/data/best-practices/code-review/content/definition-of-done.md": __vite_glob_0_167,"/src/data/best-practices/code-review/content/determine-review-level.md": __vite_glob_0_168,"/src/data/best-practices/code-review/content/document-new-feature.md": __vite_glob_0_169,"/src/data/best-practices/code-review/content/document-process.md": __vite_glob_0_170,"/src/data/best-practices/code-review/content/encourage-participation.md": __vite_glob_0_171,"/src/data/best-practices/code-review/content/failing-text-bug.md": __vite_glob_0_172,"/src/data/best-practices/code-review/content/follow-guidelines.md": __vite_glob_0_173,"/src/data/best-practices/code-review/content/impact-of-change.md": __vite_glob_0_174,"/src/data/best-practices/code-review/content/implement-changes-explanations.md": __vite_glob_0_175,"/src/data/best-practices/code-review/content/index.md": __vite_glob_0_176,"/src/data/best-practices/code-review/content/knowledge-sharing.md": __vite_glob_0_177,"/src/data/best-practices/code-review/content/learn-context-reqs.md": __vite_glob_0_178,"/src/data/best-practices/code-review/content/list-review-risks-issues.md": __vite_glob_0_179,"/src/data/best-practices/code-review/content/merge-approved-code.md": __vite_glob_0_180,"/src/data/best-practices/code-review/content/monitor-performance.md": __vite_glob_0_181,"/src/data/best-practices/code-review/content/monitor-reviews.md": __vite_glob_0_182,"/src/data/best-practices/code-review/content/nitpick-comments.md": __vite_glob_0_183,"/src/data/best-practices/code-review/content/no-one-way-process.md": __vite_glob_0_184,"/src/data/best-practices/code-review/content/note-questions-for-review.md": __vite_glob_0_185,"/src/data/best-practices/code-review/content/open-mind-author.md": __vite_glob_0_186,"/src/data/best-practices/code-review/content/open-mind-reviewer.md": __vite_glob_0_187,"/src/data/best-practices/code-review/content/pair-programming-reviews.md": __vite_glob_0_188,"/src/data/best-practices/code-review/content/positive-feedback-criticism.md": __vite_glob_0_189,"/src/data/best-practices/code-review/content/potential-issues-review.md": __vite_glob_0_190,"/src/data/best-practices/code-review/content/potential-issues-reviewer.md": __vite_glob_0_191,"/src/data/best-practices/code-review/content/prepare-list.md": __vite_glob_0_192,"/src/data/best-practices/code-review/content/prioritize-feedback.md": __vite_glob_0_193,"/src/data/best-practices/code-review/content/professional-feedback.md": __vite_glob_0_194,"/src/data/best-practices/code-review/content/proper-description-pr.md": __vite_glob_0_195,"/src/data/best-practices/code-review/content/quality-code-overall.md": __vite_glob_0_196,"/src/data/best-practices/code-review/content/re-run-tests-verify.md": __vite_glob_0_197,"/src/data/best-practices/code-review/content/recognition-rewards.md": __vite_glob_0_198,"/src/data/best-practices/code-review/content/resolve-conflicts-timely.md": __vite_glob_0_199,"/src/data/best-practices/code-review/content/review-docs-design.md": __vite_glob_0_200,"/src/data/best-practices/code-review/content/review-docs-updated.md": __vite_glob_0_201,"/src/data/best-practices/code-review/content/review-tests.md": __vite_glob_0_202,"/src/data/best-practices/code-review/content/review-updated-code.md": __vite_glob_0_203,"/src/data/best-practices/code-review/content/run-tests-ensure-passing.md": __vite_glob_0_204,"/src/data/best-practices/code-review/content/seek-feedback.md": __vite_glob_0_205,"/src/data/best-practices/code-review/content/seek-team-members-feedback.md": __vite_glob_0_206,"/src/data/best-practices/code-review/content/self-review.md": __vite_glob_0_207,"/src/data/best-practices/code-review/content/set-clear-expectations.md": __vite_glob_0_208,"/src/data/best-practices/code-review/content/short-term-long-term-considerations.md": __vite_glob_0_209,"/src/data/best-practices/code-review/content/style-guide-preferences.md": __vite_glob_0_210,"/src/data/best-practices/code-review/content/submit-re-review.md": __vite_glob_0_211,"/src/data/best-practices/code-review/content/team-wide-style-followed.md": __vite_glob_0_212,"/src/data/best-practices/code-review/content/tested-in-dev.md": __vite_glob_0_213,"/src/data/best-practices/code-review/content/trends-issues-finding.md": __vite_glob_0_214,"/src/data/best-practices/code-review/content/update-docs-changes.md": __vite_glob_0_215,"/src/data/best-practices/code-review/content/update-review-changes-docs.md": __vite_glob_0_216,"/src/data/best-practices/code-review/content/use-automation.md": __vite_glob_0_217,"/src/data/best-practices/code-review/content/verify-changes-addressed.md": __vite_glob_0_218,"/src/data/best-practices/code-review/content/write-automated-tests.md": __vite_glob_0_219,"/src/data/best-practices/frontend-performance/content/analyse-stylesheets-complexity.md": __vite_glob_0_220,"/src/data/best-practices/frontend-performance/content/analyze-js-for-perf-issues.md": __vite_glob_0_221,"/src/data/best-practices/frontend-performance/content/avoid-404-files.md": __vite_glob_0_222,"/src/data/best-practices/frontend-performance/content/avoid-base64-images.md": __vite_glob_0_223,"/src/data/best-practices/frontend-performance/content/avoid-inline-css.md": __vite_glob_0_224,"/src/data/best-practices/frontend-performance/content/avoid-multiple-inline-js-snippets.md": __vite_glob_0_225,"/src/data/best-practices/frontend-performance/content/bundlephobia.md": __vite_glob_0_226,"/src/data/best-practices/frontend-performance/content/check-dependency-size.md": __vite_glob_0_227,"/src/data/best-practices/frontend-performance/content/choose-image-format-approprietly.md": __vite_glob_0_228,"/src/data/best-practices/frontend-performance/content/chrome-dev-tools.md": __vite_glob_0_229,"/src/data/best-practices/frontend-performance/content/compress-your-images.md": __vite_glob_0_230,"/src/data/best-practices/frontend-performance/content/concatenate-css-single-file.md": __vite_glob_0_231,"/src/data/best-practices/frontend-performance/content/cookie-size-less-4096-bytes.md": __vite_glob_0_232,"/src/data/best-practices/frontend-performance/content/enable-compression.md": __vite_glob_0_233,"/src/data/best-practices/frontend-performance/content/framework-guides.md": __vite_glob_0_234,"/src/data/best-practices/frontend-performance/content/index.md": __vite_glob_0_235,"/src/data/best-practices/frontend-performance/content/inline-critical-css.md": __vite_glob_0_236,"/src/data/best-practices/frontend-performance/content/keep-cookie-count-below-20.md": __vite_glob_0_237,"/src/data/best-practices/frontend-performance/content/keep-dependencies-up-to-date.md": __vite_glob_0_238,"/src/data/best-practices/frontend-performance/content/keep-ttfb-less-1-3s.md": __vite_glob_0_239,"/src/data/best-practices/frontend-performance/content/keep-web-font-under-300k.md": __vite_glob_0_240,"/src/data/best-practices/frontend-performance/content/lighthouse.md": __vite_glob_0_241,"/src/data/best-practices/frontend-performance/content/load-offscreen-images-lazily.md": __vite_glob_0_242,"/src/data/best-practices/frontend-performance/content/make-css-files-non-blocking.md": __vite_glob_0_243,"/src/data/best-practices/frontend-performance/content/minify-css.md": __vite_glob_0_244,"/src/data/best-practices/frontend-performance/content/minify-html.md": __vite_glob_0_245,"/src/data/best-practices/frontend-performance/content/minify-your-javascript.md": __vite_glob_0_246,"/src/data/best-practices/frontend-performance/content/minimize-http-requests.md": __vite_glob_0_247,"/src/data/best-practices/frontend-performance/content/minimize-iframe-count.md": __vite_glob_0_248,"/src/data/best-practices/frontend-performance/content/page-load-time-below-3s.md": __vite_glob_0_249,"/src/data/best-practices/frontend-performance/content/page-speed-insights.md": __vite_glob_0_250,"/src/data/best-practices/frontend-performance/content/page-weight-below-1500.md": __vite_glob_0_251,"/src/data/best-practices/frontend-performance/content/pre-load-urls-where-possible.md": __vite_glob_0_252,"/src/data/best-practices/frontend-performance/content/prefer-vector-images.md": __vite_glob_0_253,"/src/data/best-practices/frontend-performance/content/prevent-flash-text.md": __vite_glob_0_254,"/src/data/best-practices/frontend-performance/content/recommended-guides.md": __vite_glob_0_255,"/src/data/best-practices/frontend-performance/content/remove-unused-css.md": __vite_glob_0_256,"/src/data/best-practices/frontend-performance/content/serve-exact-size-images.md": __vite_glob_0_257,"/src/data/best-practices/frontend-performance/content/set-width-height-images.md": __vite_glob_0_258,"/src/data/best-practices/frontend-performance/content/squoosh-ap.md": __vite_glob_0_259,"/src/data/best-practices/frontend-performance/content/use-cdn.md": __vite_glob_0_260,"/src/data/best-practices/frontend-performance/content/use-http-cache-headers.md": __vite_glob_0_261,"/src/data/best-practices/frontend-performance/content/use-https-on-your-website.md": __vite_glob_0_262,"/src/data/best-practices/frontend-performance/content/use-non-blocking-javascript.md": __vite_glob_0_263,"/src/data/best-practices/frontend-performance/content/use-preconnect-to-load-fonts.md": __vite_glob_0_264,"/src/data/best-practices/frontend-performance/content/use-same-protocol.md": __vite_glob_0_265,"/src/data/best-practices/frontend-performance/content/use-service-workers-for-caching.md": __vite_glob_0_266,"/src/data/best-practices/frontend-performance/content/use-woff2-font-format.md": __vite_glob_0_267,"/src/data/best-practices/frontend-performance/content/web-page-test.md": __vite_glob_0_268




});
  const mapping = {};
  for (let filePath of Object.keys(contentFiles)) {
    const fileContent = contentFiles[filePath];
    const fileHeadings = fileContent.getHeadings();
    const firstHeading = fileHeadings[0];
    const [, bestPracticeId] = filePath.match(/^\/src\/data\/best-practices\/(.+)?\/content\/(.+)?$/) || [];
    const topicUrl = generateTopicUrl(filePath);
    const currentBestPractice = await __variableDynamicImportRuntimeHelper((/* #__PURE__ */ Object.assign({"../data/best-practices/api-security/api-security.md": () => import('./api-security_DIOL5kJH.mjs').then(n => n._),"../data/best-practices/aws/aws.md": () => import('./aws_DbLgGL1m.mjs').then(n => n._),"../data/best-practices/backend-performance/backend-performance.md": () => import('./backend-performance_Bap8Mati.mjs').then(n => n._),"../data/best-practices/code-review/code-review.md": () => import('./code-review_Dfeg-tAw.mjs').then(n => n._),"../data/best-practices/frontend-performance/frontend-performance.md": () => import('./frontend-performance_KLJ3Ub7p.mjs').then(n => n._)})), `../data/best-practices/${bestPracticeId}/${bestPracticeId}.md`, 5);
    mapping[topicUrl] = {
      url: topicUrl,
      heading: firstHeading?.text,
      file: fileContent,
      bestPractice: currentBestPractice?.frontmatter,
      bestPracticeId
    };
  }
  return mapping;
}

const $$Astro = createAstro("https://roadmap.sh/");
async function getStaticPaths() {
  const topicPathMapping = await getAllBestPracticeTopicFiles();
  return Object.keys(topicPathMapping).map((topicSlug) => {
    const topicDetails = topicPathMapping[topicSlug];
    const bestPracticeId = topicDetails.bestPracticeId;
    const topicId = topicSlug.replace(`/${bestPracticeId}/`, "");
    return {
      params: {
        topicId,
        bestPracticeId
      },
      props: topicDetails
    };
  });
}
const $$ = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$;
  const { file } = Astro2.props;
  const fileWithoutBasePath = file.file?.replace(/.+?\/src\/data/, "/src/data");
  const gitHubUrl = `https://github.com/kamranahmedse/developer-roadmap/tree/master${fileWithoutBasePath}`;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(gitHubUrl, "data-github-url")}></div> ${renderComponent($$result, "file.Content", file.Content, {})}`;
}, "/workspaces/developer-roadmap/src/pages/best-practices/[bestPracticeId]/[...topicId].astro", void 0);

const $$file = "/workspaces/developer-roadmap/src/pages/best-practices/[bestPracticeId]/[...topicId].astro";
const $$url = "/best-practices/[bestPracticeId]/[...topicId]";

export { $$ as default, $$file as file, getStaticPaths, $$url as url };
