import { _ as __vite_glob_2_0 } from './ai-data-scientist_DIN_LXkI.mjs';
import { _ as __vite_glob_2_1 } from './android_DT_qCno5.mjs';
import { _ as __vite_glob_2_2 } from './angular_EtFd54Am.mjs';
import { _ as __vite_glob_2_3 } from './api-design_D82w_E99.mjs';
import { _ as __vite_glob_2_4 } from './aspnet-core_dB_-hH5i.mjs';
import { _ as __vite_glob_2_5 } from './aws_BYL-LS-4.mjs';
import { _ as __vite_glob_2_6 } from './backend_fNGMZHkm.mjs';
import { _ as __vite_glob_2_7 } from './blockchain_BsCPQA1O.mjs';
import { _ as __vite_glob_2_8 } from './code-review_D0DVG_nt.mjs';
import { _ as __vite_glob_2_9 } from './computer-science_CZYvQ108.mjs';
import { _ as __vite_glob_2_10 } from './cpp_B6xuQ91g.mjs';
import { _ as __vite_glob_2_11 } from './cyber-security_Cv6quha7.mjs';
import { _ as __vite_glob_2_12 } from './data-analyst_u2Pa9Kem.mjs';
import { _ as __vite_glob_2_13 } from './datastructures-and-algorithms_Dg326Y1_.mjs';
import { _ as __vite_glob_2_14 } from './design-system_DFiNUt0Y.mjs';
import { _ as __vite_glob_2_15 } from './devops_BNuTjQ6q.mjs';
import { _ as __vite_glob_2_16 } from './docker_DwJ-iOt5.mjs';
import { _ as __vite_glob_2_17 } from './flutter_Dssdu1Pe.mjs';
import { _ as __vite_glob_2_18 } from './frontend_PlaVbiI0.mjs';
import { _ as __vite_glob_2_19 } from './full-stack_BsQrSaro.mjs';
import { _ as __vite_glob_2_20 } from './game-developer_DAj5k2ra.mjs';
import { _ as __vite_glob_2_21 } from './golang_CuCbRRhE.mjs';
import { _ as __vite_glob_2_22 } from './graphql_CNHi9-UB.mjs';
import { _ as __vite_glob_2_23 } from './ios_pT7D1Fmy.mjs';
import { _ as __vite_glob_2_24 } from './java_B8Dpee13.mjs';
import { _ as __vite_glob_2_25 } from './javascript_Blzw8-Gj.mjs';
import { _ as __vite_glob_2_26 } from './kubernetes_ChWsw9w5.mjs';
import { _ as __vite_glob_2_27 } from './linux_dVsXxONA.mjs';
import { _ as __vite_glob_2_28 } from './mlops_CF9uAsW_.mjs';
import { _ as __vite_glob_2_29 } from './mongodb_P8hf_EPd.mjs';
import { _ as __vite_glob_2_30 } from './nodejs_C-eG-yWA.mjs';
import { _ as __vite_glob_2_31 } from './postgresql-dba_ByqYi8Kp.mjs';
import { _ as __vite_glob_2_32 } from './product-manager_C7OryMed.mjs';
import { _ as __vite_glob_2_33 } from './prompt-engineering_1Qylt9hI.mjs';
import { _ as __vite_glob_2_34 } from './python_CD_8-l1d.mjs';
import { _ as __vite_glob_2_35 } from './qa_DGE1JY0Y.mjs';
import { _ as __vite_glob_2_36 } from './react-native_Bs4qMcAa.mjs';
import { _ as __vite_glob_2_37 } from './react_B8qrHTW6.mjs';
import { _ as __vite_glob_2_38 } from './rust_BSan8EYx.mjs';
import { _ as __vite_glob_2_39 } from './server-side-game-developer_3Q4rxw-L.mjs';
import { _ as __vite_glob_2_40 } from './software-architect_DiMJPRVH.mjs';
import { _ as __vite_glob_2_41 } from './software-design-architecture_CIDmWDPi.mjs';
import { _ as __vite_glob_2_42 } from './spring-boot_CP1iSdMG.mjs';
import { _ as __vite_glob_2_43 } from './sql_PXD1W95K.mjs';
import { _ as __vite_glob_2_44 } from './system-design_DBEK4GV4.mjs';
import { _ as __vite_glob_2_45 } from './technical-writer_B0fXEzIm.mjs';
import { _ as __vite_glob_2_46 } from './terraform_CvbBvtWB.mjs';
import { _ as __vite_glob_2_47 } from './typescript_DG1gJviy.mjs';
import { _ as __vite_glob_2_48 } from './ux-design_C72hnxEE.mjs';
import { _ as __vite_glob_2_49 } from './vue_DNFwnC_w.mjs';

function resourceTitleFromId(id) {
  if (id === "devops") {
    return "DevOps";
  }
  return id.split("-").map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
}
function roadmapPathToId(filePath) {
  const fileName = filePath.split("/").pop() || "";
  return fileName.replace(".md", "");
}
async function getRoadmapIds() {
  const roadmapFiles = /* #__PURE__ */ Object.assign({"/src/data/roadmaps/ai-data-scientist/ai-data-scientist.md": __vite_glob_2_0,"/src/data/roadmaps/android/android.md": __vite_glob_2_1,"/src/data/roadmaps/angular/angular.md": __vite_glob_2_2,"/src/data/roadmaps/api-design/api-design.md": __vite_glob_2_3,"/src/data/roadmaps/aspnet-core/aspnet-core.md": __vite_glob_2_4,"/src/data/roadmaps/aws/aws.md": __vite_glob_2_5,"/src/data/roadmaps/backend/backend.md": __vite_glob_2_6,"/src/data/roadmaps/blockchain/blockchain.md": __vite_glob_2_7,"/src/data/roadmaps/code-review/code-review.md": __vite_glob_2_8,"/src/data/roadmaps/computer-science/computer-science.md": __vite_glob_2_9,"/src/data/roadmaps/cpp/cpp.md": __vite_glob_2_10,"/src/data/roadmaps/cyber-security/cyber-security.md": __vite_glob_2_11,"/src/data/roadmaps/data-analyst/data-analyst.md": __vite_glob_2_12,"/src/data/roadmaps/datastructures-and-algorithms/datastructures-and-algorithms.md": __vite_glob_2_13,"/src/data/roadmaps/design-system/design-system.md": __vite_glob_2_14,"/src/data/roadmaps/devops/devops.md": __vite_glob_2_15,"/src/data/roadmaps/docker/docker.md": __vite_glob_2_16,"/src/data/roadmaps/flutter/flutter.md": __vite_glob_2_17,"/src/data/roadmaps/frontend/frontend.md": __vite_glob_2_18,"/src/data/roadmaps/full-stack/full-stack.md": __vite_glob_2_19,"/src/data/roadmaps/game-developer/game-developer.md": __vite_glob_2_20,"/src/data/roadmaps/golang/golang.md": __vite_glob_2_21,"/src/data/roadmaps/graphql/graphql.md": __vite_glob_2_22,"/src/data/roadmaps/ios/ios.md": __vite_glob_2_23,"/src/data/roadmaps/java/java.md": __vite_glob_2_24,"/src/data/roadmaps/javascript/javascript.md": __vite_glob_2_25,"/src/data/roadmaps/kubernetes/kubernetes.md": __vite_glob_2_26,"/src/data/roadmaps/linux/linux.md": __vite_glob_2_27,"/src/data/roadmaps/mlops/mlops.md": __vite_glob_2_28,"/src/data/roadmaps/mongodb/mongodb.md": __vite_glob_2_29,"/src/data/roadmaps/nodejs/nodejs.md": __vite_glob_2_30,"/src/data/roadmaps/postgresql-dba/postgresql-dba.md": __vite_glob_2_31,"/src/data/roadmaps/product-manager/product-manager.md": __vite_glob_2_32,"/src/data/roadmaps/prompt-engineering/prompt-engineering.md": __vite_glob_2_33,"/src/data/roadmaps/python/python.md": __vite_glob_2_34,"/src/data/roadmaps/qa/qa.md": __vite_glob_2_35,"/src/data/roadmaps/react-native/react-native.md": __vite_glob_2_36,"/src/data/roadmaps/react/react.md": __vite_glob_2_37,"/src/data/roadmaps/rust/rust.md": __vite_glob_2_38,"/src/data/roadmaps/server-side-game-developer/server-side-game-developer.md": __vite_glob_2_39,"/src/data/roadmaps/software-architect/software-architect.md": __vite_glob_2_40,"/src/data/roadmaps/software-design-architecture/software-design-architecture.md": __vite_glob_2_41,"/src/data/roadmaps/spring-boot/spring-boot.md": __vite_glob_2_42,"/src/data/roadmaps/sql/sql.md": __vite_glob_2_43,"/src/data/roadmaps/system-design/system-design.md": __vite_glob_2_44,"/src/data/roadmaps/technical-writer/technical-writer.md": __vite_glob_2_45,"/src/data/roadmaps/terraform/terraform.md": __vite_glob_2_46,"/src/data/roadmaps/typescript/typescript.md": __vite_glob_2_47,"/src/data/roadmaps/ux-design/ux-design.md": __vite_glob_2_48,"/src/data/roadmaps/vue/vue.md": __vite_glob_2_49




});
  return Object.keys(roadmapFiles).map(roadmapPathToId);
}
async function getRoadmapsByTag(tag) {
  const roadmapFilesMap = /* #__PURE__ */ Object.assign({"/src/data/roadmaps/ai-data-scientist/ai-data-scientist.md": __vite_glob_2_0,"/src/data/roadmaps/android/android.md": __vite_glob_2_1,"/src/data/roadmaps/angular/angular.md": __vite_glob_2_2,"/src/data/roadmaps/api-design/api-design.md": __vite_glob_2_3,"/src/data/roadmaps/aspnet-core/aspnet-core.md": __vite_glob_2_4,"/src/data/roadmaps/aws/aws.md": __vite_glob_2_5,"/src/data/roadmaps/backend/backend.md": __vite_glob_2_6,"/src/data/roadmaps/blockchain/blockchain.md": __vite_glob_2_7,"/src/data/roadmaps/code-review/code-review.md": __vite_glob_2_8,"/src/data/roadmaps/computer-science/computer-science.md": __vite_glob_2_9,"/src/data/roadmaps/cpp/cpp.md": __vite_glob_2_10,"/src/data/roadmaps/cyber-security/cyber-security.md": __vite_glob_2_11,"/src/data/roadmaps/data-analyst/data-analyst.md": __vite_glob_2_12,"/src/data/roadmaps/datastructures-and-algorithms/datastructures-and-algorithms.md": __vite_glob_2_13,"/src/data/roadmaps/design-system/design-system.md": __vite_glob_2_14,"/src/data/roadmaps/devops/devops.md": __vite_glob_2_15,"/src/data/roadmaps/docker/docker.md": __vite_glob_2_16,"/src/data/roadmaps/flutter/flutter.md": __vite_glob_2_17,"/src/data/roadmaps/frontend/frontend.md": __vite_glob_2_18,"/src/data/roadmaps/full-stack/full-stack.md": __vite_glob_2_19,"/src/data/roadmaps/game-developer/game-developer.md": __vite_glob_2_20,"/src/data/roadmaps/golang/golang.md": __vite_glob_2_21,"/src/data/roadmaps/graphql/graphql.md": __vite_glob_2_22,"/src/data/roadmaps/ios/ios.md": __vite_glob_2_23,"/src/data/roadmaps/java/java.md": __vite_glob_2_24,"/src/data/roadmaps/javascript/javascript.md": __vite_glob_2_25,"/src/data/roadmaps/kubernetes/kubernetes.md": __vite_glob_2_26,"/src/data/roadmaps/linux/linux.md": __vite_glob_2_27,"/src/data/roadmaps/mlops/mlops.md": __vite_glob_2_28,"/src/data/roadmaps/mongodb/mongodb.md": __vite_glob_2_29,"/src/data/roadmaps/nodejs/nodejs.md": __vite_glob_2_30,"/src/data/roadmaps/postgresql-dba/postgresql-dba.md": __vite_glob_2_31,"/src/data/roadmaps/product-manager/product-manager.md": __vite_glob_2_32,"/src/data/roadmaps/prompt-engineering/prompt-engineering.md": __vite_glob_2_33,"/src/data/roadmaps/python/python.md": __vite_glob_2_34,"/src/data/roadmaps/qa/qa.md": __vite_glob_2_35,"/src/data/roadmaps/react-native/react-native.md": __vite_glob_2_36,"/src/data/roadmaps/react/react.md": __vite_glob_2_37,"/src/data/roadmaps/rust/rust.md": __vite_glob_2_38,"/src/data/roadmaps/server-side-game-developer/server-side-game-developer.md": __vite_glob_2_39,"/src/data/roadmaps/software-architect/software-architect.md": __vite_glob_2_40,"/src/data/roadmaps/software-design-architecture/software-design-architecture.md": __vite_glob_2_41,"/src/data/roadmaps/spring-boot/spring-boot.md": __vite_glob_2_42,"/src/data/roadmaps/sql/sql.md": __vite_glob_2_43,"/src/data/roadmaps/system-design/system-design.md": __vite_glob_2_44,"/src/data/roadmaps/technical-writer/technical-writer.md": __vite_glob_2_45,"/src/data/roadmaps/terraform/terraform.md": __vite_glob_2_46,"/src/data/roadmaps/typescript/typescript.md": __vite_glob_2_47,"/src/data/roadmaps/ux-design/ux-design.md": __vite_glob_2_48,"/src/data/roadmaps/vue/vue.md": __vite_glob_2_49




});
  const roadmapFiles = Object.values(roadmapFilesMap);
  const filteredRoadmaps = roadmapFiles.filter((roadmapFile) => roadmapFile.frontmatter.tags.includes(tag)).map((roadmapFile) => ({
    ...roadmapFile,
    id: roadmapPathToId(roadmapFile.file)
  }));
  return filteredRoadmaps.sort(
    (a, b) => a.frontmatter.order - b.frontmatter.order
  );
}
async function getRoadmapById(id) {
  const roadmapFilesMap = /* #__PURE__ */ Object.assign({"/src/data/roadmaps/ai-data-scientist/ai-data-scientist.md": __vite_glob_2_0,"/src/data/roadmaps/android/android.md": __vite_glob_2_1,"/src/data/roadmaps/angular/angular.md": __vite_glob_2_2,"/src/data/roadmaps/api-design/api-design.md": __vite_glob_2_3,"/src/data/roadmaps/aspnet-core/aspnet-core.md": __vite_glob_2_4,"/src/data/roadmaps/aws/aws.md": __vite_glob_2_5,"/src/data/roadmaps/backend/backend.md": __vite_glob_2_6,"/src/data/roadmaps/blockchain/blockchain.md": __vite_glob_2_7,"/src/data/roadmaps/code-review/code-review.md": __vite_glob_2_8,"/src/data/roadmaps/computer-science/computer-science.md": __vite_glob_2_9,"/src/data/roadmaps/cpp/cpp.md": __vite_glob_2_10,"/src/data/roadmaps/cyber-security/cyber-security.md": __vite_glob_2_11,"/src/data/roadmaps/data-analyst/data-analyst.md": __vite_glob_2_12,"/src/data/roadmaps/datastructures-and-algorithms/datastructures-and-algorithms.md": __vite_glob_2_13,"/src/data/roadmaps/design-system/design-system.md": __vite_glob_2_14,"/src/data/roadmaps/devops/devops.md": __vite_glob_2_15,"/src/data/roadmaps/docker/docker.md": __vite_glob_2_16,"/src/data/roadmaps/flutter/flutter.md": __vite_glob_2_17,"/src/data/roadmaps/frontend/frontend.md": __vite_glob_2_18,"/src/data/roadmaps/full-stack/full-stack.md": __vite_glob_2_19,"/src/data/roadmaps/game-developer/game-developer.md": __vite_glob_2_20,"/src/data/roadmaps/golang/golang.md": __vite_glob_2_21,"/src/data/roadmaps/graphql/graphql.md": __vite_glob_2_22,"/src/data/roadmaps/ios/ios.md": __vite_glob_2_23,"/src/data/roadmaps/java/java.md": __vite_glob_2_24,"/src/data/roadmaps/javascript/javascript.md": __vite_glob_2_25,"/src/data/roadmaps/kubernetes/kubernetes.md": __vite_glob_2_26,"/src/data/roadmaps/linux/linux.md": __vite_glob_2_27,"/src/data/roadmaps/mlops/mlops.md": __vite_glob_2_28,"/src/data/roadmaps/mongodb/mongodb.md": __vite_glob_2_29,"/src/data/roadmaps/nodejs/nodejs.md": __vite_glob_2_30,"/src/data/roadmaps/postgresql-dba/postgresql-dba.md": __vite_glob_2_31,"/src/data/roadmaps/product-manager/product-manager.md": __vite_glob_2_32,"/src/data/roadmaps/prompt-engineering/prompt-engineering.md": __vite_glob_2_33,"/src/data/roadmaps/python/python.md": __vite_glob_2_34,"/src/data/roadmaps/qa/qa.md": __vite_glob_2_35,"/src/data/roadmaps/react-native/react-native.md": __vite_glob_2_36,"/src/data/roadmaps/react/react.md": __vite_glob_2_37,"/src/data/roadmaps/rust/rust.md": __vite_glob_2_38,"/src/data/roadmaps/server-side-game-developer/server-side-game-developer.md": __vite_glob_2_39,"/src/data/roadmaps/software-architect/software-architect.md": __vite_glob_2_40,"/src/data/roadmaps/software-design-architecture/software-design-architecture.md": __vite_glob_2_41,"/src/data/roadmaps/spring-boot/spring-boot.md": __vite_glob_2_42,"/src/data/roadmaps/sql/sql.md": __vite_glob_2_43,"/src/data/roadmaps/system-design/system-design.md": __vite_glob_2_44,"/src/data/roadmaps/technical-writer/technical-writer.md": __vite_glob_2_45,"/src/data/roadmaps/terraform/terraform.md": __vite_glob_2_46,"/src/data/roadmaps/typescript/typescript.md": __vite_glob_2_47,"/src/data/roadmaps/ux-design/ux-design.md": __vite_glob_2_48,"/src/data/roadmaps/vue/vue.md": __vite_glob_2_49

});
  const roadmapFile = Object.values(roadmapFilesMap).find((roadmapFile2) => {
    return roadmapPathToId(roadmapFile2.file) === id;
  });
  if (!roadmapFile) {
    throw new Error(`Roadmap with ID ${id} not found`);
  }
  return {
    ...roadmapFile,
    id: roadmapPathToId(roadmapFile.file)
  };
}
async function getRoadmapsByIds(ids) {
  if (!ids?.length) {
    return [];
  }
  return Promise.all(ids.map((id) => getRoadmapById(id)));
}

export { getRoadmapsByTag as a, getRoadmapsByIds as b, getRoadmapIds as g, resourceTitleFromId as r };
