const spaceId = import.meta.env.VITE_CONTENTFUL_SPACE_ID;
const  accessToken = import.meta.env.VITE_CONTENTFUL_ACCESS_TOKEN;
const contentTypeId = 'pfPage';

export async function load() {
  const url = `https://cdn.contentful.com/spaces/${spaceId}/environments/master/entries?access_token=${accessToken}&content_type=${contentTypeId}`;
  const response = await fetch(url);
  const data = await response.json();
  return {
      items: data.items
  };
}
  