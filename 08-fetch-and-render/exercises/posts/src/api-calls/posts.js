import { ORIGIN } from '../config.js';

/**
 * Fetches posts or a specific post from the typicode jsonplaceholder API.
 *
 * @async
 * @param {...string|number} params - Optional path segments to append (e.g., post ID).
 * @returns {Promise<object>} A post object or array of posts from the API.
 *
 * @throws {Error} HTTP error! status: {number}.
 */
export const typicodePosts = async (...params) => {
  const paramsPath = ['posts', ...params].join('/');
  const URL = `${ORIGIN}/${paramsPath}`;
console.log(URL);
  const encodedURL = encodeURI(URL);
  const response = await fetch(encodedURL);

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}\n-> ${URL}`);
  }

  return await response.json();
};
