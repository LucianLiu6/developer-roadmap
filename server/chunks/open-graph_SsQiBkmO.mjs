function getOpenGraphImageUrl(params) {
  return `${"https://roadmap.sh"}/og/${params.group}/${params.resourceId}`;
}
async function getDefaultOpenGraphImageBuffer() {
  const defaultImageUrl = `${"https://roadmap.sh"}/images/og-img.png`;
  return fetch(defaultImageUrl).then((response) => response.arrayBuffer());
}
async function getResourceOpenGraph(type, resourceId) {
  const url = new URL(`${{"BASE_URL": "/", "MODE": "production", "DEV": false, "PROD": true, "SSR": true, "SITE": "https://roadmap.sh/", "ASSETS_PREFIX": undefined}.PUBLIC_API_URL}/v1-open-graph`);
  url.searchParams.set("type", type);
  url.searchParams.set("resourceId", resourceId);
  url.searchParams.set("variant", "image");
  const response = await fetch(url.toString());
  return response.text();
}

export { getDefaultOpenGraphImageBuffer as a, getResourceOpenGraph as b, getOpenGraphImageUrl as g };
