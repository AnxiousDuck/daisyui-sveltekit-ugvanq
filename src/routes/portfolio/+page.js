import { createClient } from 'contentful';

// const values = [{title: "first sample", explanation: "this is the first sample", cat:"storyboard"},
// {title: "second sample", explanation: "this is the second sample", cat:"storyboard"},
// {title: "third sample", explanation: "this is the third sample", cat:"storyboard"},
// {title: "fourth sample", explanation: "this is the third sample", cat:"storyboard"},
// {title: "fifth sample", explanation: "this is the third sample", cat:"storyboard"},
// ]

const client = createClient({
    space: import.meta.env.VITE_CONTENTFUL_SPACE_ID,
    accessToken: import.meta.env.VITE_CONTENTFUL_ACCESS_TOKEN
});
  
export async function load() {
  const entries = await client.getEntries({
    content_type: 'pfPage',
  });
  console.log(entries.items[0].sys.id)

  if (entries.items.length === 0) {
    return {
      status: 404,
      error: new Error(`Page '${page}' not found`)
    };
  }

  return {
      items: entries.items
  };
}

// export function load() {
//     return {
//         items: values
//     }
// }