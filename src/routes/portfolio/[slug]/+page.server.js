const spaceId = import.meta.env.VITE_CONTENTFUL_SPACE_ID;
const  accessToken = import.meta.env.VITE_CONTENTFUL_ACCESS_TOKEN;

export async function load({ params }) {
    const entryId = params.slug;

    const url = `https://cdn.contentful.com/spaces/${spaceId}/environments/master/entries/${entryId}?access_token=${accessToken}`;
    const response = await fetch(url);
    const entry = await response.json();

    const assetId = entry.fields.sampleImages[0].sys.id;

    const assetCdnUrl = `https://cdn.contentful.com/spaces/${spaceId}/environments/master/assets/${assetId}?access_token=${accessToken}`;
    const assetResponse = await fetch(assetCdnUrl);
    const assetData = await assetResponse.json();

    const assetUrl = assetData.fields.file.url;

    if (!entry) {
        return {
        status: 404,
        error: new Error(`Entry '${entryId}' not found`)
        };
    }

    // return {
    //     ...entry, assetUrl
    // };
    return {
          entry: entry,
          asset: assetUrl,
    };
}