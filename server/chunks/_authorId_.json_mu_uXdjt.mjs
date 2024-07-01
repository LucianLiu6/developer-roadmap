import { g as getAuthorIds, a as getAuthorById } from './author_CpkHpI-S.mjs';

async function getStaticPaths() {
  const authorIds = await getAuthorIds();
  return await Promise.all(
    authorIds.map(async (authorId) => {
      const authorDetails = await getAuthorById(authorId);
      return {
        params: { authorId },
        props: {
          authorDetails: authorDetails?.frontmatter || {}
        }
      };
    })
  );
}
const GET = async function({ params, request, props }) {
  return new Response(JSON.stringify(props.authorDetails), {
    status: 200,
    headers: {
      "Content-Type": "application/json"
    }
  });
};

export { GET, getStaticPaths };
