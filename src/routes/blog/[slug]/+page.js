import { error } from '@sveltejs/kit';

/** @type {import('./$types').PageLoad} */
export function load({ params }) {
  return {
    title: params.slug
  };
  throw error(404, 'Not found');
}
