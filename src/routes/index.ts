import type { RequestHandler } from '@sveltejs/kit';
import createClient from '$lib/prismic';

type InAndOut = Record<string, string>;
export const get: RequestHandler<InAndOut, { result: any }> = async (context) => {
	const injectedCookieFetch = (url: string, init: RequestInit = {}) => {
		const obj = {
			...init,
			headers: {
				...init.headers,
				cookie: context.request.headers.get("cookie") ?? "",
			}
		}

		return fetch(url, obj);
	}
		
	const client = createClient(injectedCookieFetch);
	const prismicResult = await client.getFirst();
	return {
		body: {
			result: prismicResult
		}
	};
};
