
export interface QueryPost {
  body: string;
  postId: number;
  title: string;
}
interface CacheData {
	[url: string]: QueryPost[];
}
function fetchDataWpapperCache() {
	const cache: CacheData = {};

	return async (url: string): Promise<QueryPost[]> => {
		if (cache[url]) return cache[url];

		try {
			const response = await fetch(url);
			if (!response.ok) {
				throw new Error(`Ошибка запроса: ${response.status}`);
			}
			const data = await response.json();
			cache[url] = data;
			return data;
		} catch (error) {
			throw new Error(
				error instanceof Error ? error.message : 'Unknown API error'
			);
		}

	}
}
export const fetchDataWithCache = fetchDataWpapperCache();
