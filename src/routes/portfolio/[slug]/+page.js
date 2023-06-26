import { createClient } from 'contentful';

const client = createClient({
    space: import.meta.env.VITE_CONTENTFUL_SPACE_ID,
    accessToken: import.meta.env.VITE_CONTENTFUL_ACCESS_TOKEN
});

export async function load({ params }) {
    const entryId = params.slug;
    const entry = await client.getEntry(entryId);

    console.log(entry.fields.heading)

    if (!entry) {
        return {
        status: 404,
        error: new Error(`Entry '${entryId}' not found`)
        };
    }

    return {
        entry
    };
}

// export function load({params}) {
//     return {
//         title:params.slug
//     }
// }