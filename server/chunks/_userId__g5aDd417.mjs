import { a as getDefaultOpenGraphImageBuffer } from './open-graph_SsQiBkmO.mjs';

async function getRoadCard(version, userId, variant, roadmaps = "") {
  const url = new URL(
    `${{"BASE_URL": "/", "MODE": "production", "DEV": false, "PROD": true, "SSR": true, "SITE": "https://roadmap.sh/", "ASSETS_PREFIX": undefined}.PUBLIC_API_URL}/v1-badge/${version}/${userId}`
  );
  url.searchParams.set("variant", variant);
  if (roadmaps) {
    url.searchParams.set("roadmaps", roadmaps);
  }
  const response = await fetch(url.toString());
  return response.text();
}

const prerender = false;
const GET = async (context) => {
  const { userId, version } = context.params;
  if (!userId || !version) {
    const buffer = await getDefaultOpenGraphImageBuffer();
    return new Response(buffer, {
      headers: {
        "Content-Type": "image/png"
      }
    });
  }
  const searchParams = new URLSearchParams(context.url.searchParams);
  const variant = searchParams.get("variant") || "dark";
  const roadmaps = searchParams.get("roadmaps") || "";
  const svg = await getRoadCard(version, userId, variant, roadmaps);
  return new Response(svg, {
    headers: {
      "Content-Type": "image/svg+xml"
    }
  });
};

export { GET, prerender };
