import { ORIGIN } from '../config.js';

/**
 * Fetches all the resources matching a specific search query.
 *
 * @async
 * @param {string} [resourceType=''] - The resource type to fetch.
 * @param {string} [searchQuery=''] - The text to search for in the resource entries.
 * @returns {Promise<array>} An array of resources matching the search query.
 *
 * @throws {Error} HTTP error! status: {number}.
 */
export const searchResources = async (resourceType = '', searchQuery = '') => {
  // Full-text search using the `q` query parameter (json-server supports this)
  const URL = `${ORIGIN}/${resourceType}?q=${searchQuery}`;

  // Encode the URL for safety
  const encodedURL = encodeURI(URL);
  const response = await fetch(encodedURL);

  // Error handling
  if (!response.ok) {
    const message = response.statusText
      ? `${response.status}: ${response.statusText}\n-> ${URL}`
      : `HTTP error! status: ${response.status}\n-> ${URL}`;
    throw new Error(message);
  }

  // Parse and return data
  const data = await response.json();
  return data;
};
