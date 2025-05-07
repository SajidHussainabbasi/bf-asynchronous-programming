import { ORIGIN } from '../config.js';

/**
 * Fetches a certain number of entries from one resource type.
 *
 * @async
 * @param {string} [resourceType=''] - The resource type to fetch.
 * @param {number} [limit=1] - The number of items to request.
 * @returns {Promise<array>} A promise that resolves to an array of resources with length `limit`.
 *
 * @throws {Error} HTTP error! status: {number}.
 */
export const limitedResource = async (resourceType = '', limit = 1) => {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 5000); // 5 seconds timeout

  // Adjust query parameter to "_limit" for JSONPlaceholder
  const URL = `${ORIGIN}/${resourceType}?_limit=${limit}`;
  const encodedURL = encodeURI(URL);

  try {
    const response = await fetch(encodedURL, { signal: controller.signal });

    if (!response.ok) {
      const message = response.statusText
        ? `${response.status}: ${response.statusText}\n-> ${URL}`
        : `HTTP error! status: ${response.status}\n-> ${URL}`;
      throw new Error(message);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    if (error.name === 'AbortError') {
      console.error('Request timed out');
      throw new Error('Request timed out');
    } else {
      console.error('Fetch error: ', error);
      throw error;
    }
  } finally {
    clearTimeout(timeoutId); // Clean up the timeout
  }
};
