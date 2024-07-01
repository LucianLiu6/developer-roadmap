import { a as getDefaultOpenGraphImageBuffer } from './open-graph_SsQiBkmO.mjs';
import { Transformer } from '@napi-rs/image';

const prerender = false;
const GET = async (context) => {
  const { username } = context.params;
  if (!username || !/^[a-zA-Z0-9]*?[a-zA-Z]+?[a-zA-Z0-9]*?$/.test(username)) {
    const buffer = await getDefaultOpenGraphImageBuffer();
    return new Response(buffer, {
      headers: {
        "Content-Type": "image/png"
      }
    });
  }
  const response = await fetch(
    `${{"BASE_URL": "/", "MODE": "production", "DEV": false, "PROD": true, "SSR": true, "SITE": "https://roadmap.sh/", "ASSETS_PREFIX": undefined}.PUBLIC_API_URL}/v1-profile-open-graph/${username}`
  );
  const svg = await response.text();
  const transformer = Transformer.fromSvg(svg).crop(0, 0, 1200, 630);
  return new Response(await transformer.png(), {
    headers: {
      "Content-Type": "image/png"
    }
  });
};

export { GET, prerender };
