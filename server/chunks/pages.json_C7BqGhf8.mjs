import { g as getAllBestPractices } from './best-practice_Cjq4FQpQ.mjs';
import { c as getAllGuides } from './guide_2lwLlurY.mjs';
import { a as getRoadmapsByTag } from './roadmap_DU5YuMTS.mjs';
import { a as getAllVideos } from './video_NKn1GyjA.mjs';
import { g as getAllQuestionGroups } from './question-group_C-CQO0is.mjs';

async function GET() {
  const guides = await getAllGuides();
  const videos = await getAllVideos();
  const questionGroups = await getAllQuestionGroups();
  const roadmaps = await getRoadmapsByTag("roadmap");
  const bestPractices = await getAllBestPractices();
  return new Response(
    JSON.stringify([
      ...roadmaps.map((roadmap) => ({
        id: roadmap.id,
        url: `/${roadmap.id}`,
        title: roadmap.frontmatter.briefTitle,
        description: roadmap.frontmatter.briefDescription,
        group: "Roadmaps",
        metadata: {
          tags: roadmap.frontmatter.tags
        },
        renderer: roadmap?.frontmatter?.renderer || "balsamiq"
      })),
      ...bestPractices.map((bestPractice) => ({
        id: bestPractice.id,
        url: `/best-practices/${bestPractice.id}`,
        title: bestPractice.frontmatter.briefTitle,
        description: bestPractice.frontmatter.briefDescription,
        group: "Best Practices"
      })),
      ...questionGroups.map((questionGroup) => ({
        id: questionGroup.id,
        url: `/questions/${questionGroup.id}`,
        title: questionGroup.frontmatter.briefTitle,
        group: "Questions"
      })),
      ...guides.map((guide) => ({
        id: guide.id,
        url: guide.frontmatter.excludedBySlug ? guide.frontmatter.excludedBySlug : `/guides/${guide.id}`,
        title: guide.frontmatter.title,
        description: guide.frontmatter.description,
        authorId: guide.frontmatter.authorId,
        group: "Guides"
      })),
      ...videos.map((video) => ({
        id: video.id,
        url: `/videos/${video.id}`,
        title: video.frontmatter.title,
        group: "Videos"
      }))
    ]),
    {
      status: 200,
      headers: {
        "Content-Type": "application/json"
      }
    }
  );
}

export { GET };
