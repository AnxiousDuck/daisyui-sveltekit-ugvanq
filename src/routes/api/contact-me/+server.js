import { error } from '@sveltejs/kit';

/** @type {import('./$types').RequestHandler} */

export function POST({ url }) {
    return new Response("Hello World");
}