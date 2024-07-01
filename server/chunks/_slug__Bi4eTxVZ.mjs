import { a as getDefaultOpenGraphImageBuffer, b as getResourceOpenGraph } from './open-graph_SsQiBkmO.mjs';
import { Transformer } from '@napi-rs/image';

const prerender = false;
const GET = async (context) => {
  const { slug } = context.params;
  if (!slug) {
    const buffer = await getDefaultOpenGraphImageBuffer();
    return new Response(buffer, {
      headers: {
        "Content-Type": "image/png"
      }
    });
  }
  const svg = await getResourceOpenGraph("best-practice", slug);
  const transformer = Transformer.fromSvg(svg).crop(0, 0, 1200, 630);
  return new Response(await transformer.png(), {
    headers: {
      "Content-Type": "image/png"
    }
  });
};

export { GET, prerender };
