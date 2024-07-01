import { _ as __vite_glob_0_0, a as __vite_glob_0_1, b as __vite_glob_0_2, c as __vite_glob_0_3, d as __vite_glob_0_4, e as __vite_glob_0_5, f as __vite_glob_0_6, g as __vite_glob_0_7, h as __vite_glob_0_8, i as __vite_glob_0_9, j as __vite_glob_0_10, k as __vite_glob_0_11, l as __vite_glob_0_12, m as __vite_glob_0_13, n as __vite_glob_0_14, o as __vite_glob_0_15, p as __vite_glob_0_16, q as __vite_glob_0_17, r as __vite_glob_0_18, s as __vite_glob_0_19, t as __vite_glob_0_20, u as __vite_glob_0_21, v as __vite_glob_0_22, w as __vite_glob_0_23, x as __vite_glob_0_24, y as __vite_glob_0_25, z as __vite_glob_0_26, A as __vite_glob_0_27, B as __vite_glob_0_28, C as __vite_glob_0_29, D as __vite_glob_0_30, E as __vite_glob_0_31, F as __vite_glob_0_32, G as __vite_glob_0_33, H as __vite_glob_0_34, I as __vite_glob_0_35, J as __vite_glob_0_36, K as __vite_glob_0_37, L as __vite_glob_0_38, M as __vite_glob_0_39, N as __vite_glob_0_40, O as __vite_glob_0_41, P as __vite_glob_0_42, Q as __vite_glob_0_43, R as __vite_glob_0_44, S as __vite_glob_0_45 } from './why-build-it-and-they-will-come-wont-work-anymore_DmWh_8zU.mjs';
import { b as getAllAuthors } from './author_CpkHpI-S.mjs';

function guidePathToId(filePath) {
  const fileName = filePath.split("/").pop() || "";
  return fileName.replace(".md", "");
}
async function getGuidesByAuthor(authorId) {
  const allGuides = await getAllGuides();
  return allGuides.filter((guide) => guide.author?.id === authorId);
}
async function getAllGuides() {
  const guides = /* #__PURE__ */ Object.assign({"/src/data/guides/asymptotic-notation.md": __vite_glob_0_0,"/src/data/guides/avoid-render-blocking-javascript-with-async-defer.md": __vite_glob_0_1,"/src/data/guides/backend-developer-skills.md": __vite_glob_0_2,"/src/data/guides/backend-developer-tools.md": __vite_glob_0_3,"/src/data/guides/backend-languages.md": __vite_glob_0_4,"/src/data/guides/backend-project-ideas.md": __vite_glob_0_5,"/src/data/guides/basic-authentication.md": __vite_glob_0_6,"/src/data/guides/basics-of-authentication.md": __vite_glob_0_7,"/src/data/guides/big-o-notation.md": __vite_glob_0_8,"/src/data/guides/character-encodings.md": __vite_glob_0_9,"/src/data/guides/ci-cd.md": __vite_glob_0_10,"/src/data/guides/consistency-patterns-in-distributed-systems.md": __vite_glob_0_11,"/src/data/guides/design-patterns-for-humans.md": __vite_glob_0_12,"/src/data/guides/devops-vs-sre.md": __vite_glob_0_13,"/src/data/guides/dhcp-in-one-picture.md": __vite_glob_0_14,"/src/data/guides/dns-in-one-picture.md": __vite_glob_0_15,"/src/data/guides/free-resources-to-learn-llms.md": __vite_glob_0_16,"/src/data/guides/frontend-languages.md": __vite_glob_0_17,"/src/data/guides/full-stack-vs-software-engineer.md": __vite_glob_0_18,"/src/data/guides/history-of-javascript.md": __vite_glob_0_19,"/src/data/guides/how-to-become-devops-engineer.md": __vite_glob_0_20,"/src/data/guides/how-to-setup-a-jump-server.md": __vite_glob_0_21,"/src/data/guides/http-basic-authentication.md": __vite_glob_0_22,"/src/data/guides/http-caching.md": __vite_glob_0_23,"/src/data/guides/introduction-to-llms.md": __vite_glob_0_24,"/src/data/guides/java-developer-skills.md": __vite_glob_0_25,"/src/data/guides/journey-to-http2.md": __vite_glob_0_26,"/src/data/guides/jwt-authentication.md": __vite_glob_0_27,"/src/data/guides/levels-of-seniority.md": __vite_glob_0_28,"/src/data/guides/oauth.md": __vite_glob_0_29,"/src/data/guides/proxy-servers.md": __vite_glob_0_30,"/src/data/guides/random-numbers.md": __vite_glob_0_31,"/src/data/guides/scaling-databases.md": __vite_glob_0_32,"/src/data/guides/session-authentication.md": __vite_glob_0_33,"/src/data/guides/session-based-authentication.md": __vite_glob_0_34,"/src/data/guides/setup-and-auto-renew-ssl-certificates.md": __vite_glob_0_35,"/src/data/guides/single-command-database-setup.md": __vite_glob_0_36,"/src/data/guides/ssl-tls-https-ssh.md": __vite_glob_0_37,"/src/data/guides/sso.md": __vite_glob_0_38,"/src/data/guides/token-authentication.md": __vite_glob_0_39,"/src/data/guides/torrent-client.md": __vite_glob_0_40,"/src/data/guides/unfamiliar-codebase.md": __vite_glob_0_41,"/src/data/guides/what-are-web-vitals.md": __vite_glob_0_42,"/src/data/guides/what-is-internet.md": __vite_glob_0_43,"/src/data/guides/what-is-sli-slo-sla.md": __vite_glob_0_44,"/src/data/guides/why-build-it-and-they-will-come-wont-work-anymore.md": __vite_glob_0_45

});
  const allAuthors = await getAllAuthors();
  const guideFiles = Object.values(guides);
  const enrichedGuides = guideFiles.map((guideFile) => ({
    ...guideFile,
    id: guidePathToId(guideFile.file),
    author: allAuthors.find(
      (author) => author.id === guideFile.frontmatter.authorId
    )
  }));
  return enrichedGuides.sort(
    (a, b) => new Date(b.frontmatter.date).valueOf() - new Date(a.frontmatter.date).valueOf()
  );
}
async function getGuideById(id) {
  const allGuides = await getAllGuides();
  return allGuides.find((guide) => guide.id === id);
}
const NUMBERED_LIST_REGEX = /^\d+\.\s+?/;
function getGuideTableOfContent(headings) {
  const tableOfContents = [];
  let currentGroup = null;
  headings.filter((heading) => heading.depth !== 1).forEach((heading) => {
    if (heading.depth === 2) {
      currentGroup = {
        ...heading,
        text: heading.text.replace(NUMBERED_LIST_REGEX, ""),
        children: []
      };
      tableOfContents.push(currentGroup);
    } else if (currentGroup && heading.depth === 3) {
      currentGroup.children.push({
        ...heading,
        text: heading.text.replace(NUMBERED_LIST_REGEX, "")
      });
    }
  });
  return tableOfContents;
}

export { getGuideById as a, getGuideTableOfContent as b, getAllGuides as c, getGuidesByAuthor as g };
