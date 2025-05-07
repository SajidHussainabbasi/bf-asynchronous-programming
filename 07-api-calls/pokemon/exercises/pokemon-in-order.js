import { ORIGIN } from '../config.js';

/**
 * Returns a selected array of pokemon in order.
 *
 * @async
 * @param {number} [limit=1] - The number of pokemon to return.
 * @param {number} [offset=0] - How far down the order of pokemon to begin the list.
 * @returns {Promise<object[]>} An array of Pokemon objects with a name and URL.
 *
 * @throws {Error} HTTP error! status: {number}.
 */
export const pokemonInOrder = async (limit = 1, offset = 0) => {
  const URL = `${ORIGIN}/pokemon-species?limit=${limit}&offset=${offset}`;

  const encodedURL = encodeURI(URL);
  const response = await fetch(encodedURL);

  if (!response.ok) {
    const message = response.statusText
      ? `${response.status}: ${response.statusText}\n-> ${URL}`
      : `HTTP error! status: ${response.status}\n-> ${URL}`;
    throw new Error(message);
  }

  const data = await response.json();

  // Just return the results directly
  return data.results.map((p) => ({
    name: p.name,
    url: p.url,
  }));
};
