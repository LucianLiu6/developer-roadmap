import { _ as __vite_glob_2_0 } from './api-security_DIOL5kJH.mjs';
import { _ as __vite_glob_2_1 } from './aws_DbLgGL1m.mjs';
import { _ as __vite_glob_2_2 } from './backend-performance_Bap8Mati.mjs';
import { _ as __vite_glob_2_3 } from './code-review_Dfeg-tAw.mjs';
import { _ as __vite_glob_2_4 } from './frontend-performance_KLJ3Ub7p.mjs';

function bestPracticePathToId(filePath) {
  const fileName = filePath.split("/").pop() || "";
  return fileName.replace(".md", "");
}
async function getAllBestPractices() {
  const bestPracticeFilesMap = await /* #__PURE__ */ Object.assign({"/src/data/best-practices/api-security/api-security.md": __vite_glob_2_0,"/src/data/best-practices/aws/aws.md": __vite_glob_2_1,"/src/data/best-practices/backend-performance/backend-performance.md": __vite_glob_2_2,"/src/data/best-practices/code-review/code-review.md": __vite_glob_2_3,"/src/data/best-practices/frontend-performance/frontend-performance.md": __vite_glob_2_4




});
  const bestPracticeFiles = Object.values(bestPracticeFilesMap);
  const bestPracticeItems = bestPracticeFiles.map((bestPracticeFile) => ({
    ...bestPracticeFile,
    id: bestPracticePathToId(bestPracticeFile.file)
  }));
  return bestPracticeItems.sort(
    (a, b) => a.frontmatter.order - b.frontmatter.order
  );
}

export { getAllBestPractices as g };
