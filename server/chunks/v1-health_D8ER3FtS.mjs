const prerender = false;
async function GET() {
  return new Response(JSON.stringify({}), {});
}

export { GET, prerender };
