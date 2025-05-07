import { ORIGIN } from '../config.js';

/**
 * Fetches all of the completed or incomplete todos from the jsonplaceholder.typicode.com API.
 *
 * @async
 * @param {boolean} [completed=true] - Whether to fetch complete or incomplete todos.
 * @returns {Promise<array>} A promise that resolves to an array of todos.
 * @throws {Error} HTTP error! status: {number}
 */
export const todosByCompleted = async (completed = true) => {
  // Construct URL using the completed query param
  const URL = `${ORIGIN}/todos?completed=${completed}`;

  const encodedURL = encodeURI(URL);
  const response = await fetch(encodedURL);

  if (!response.ok) {
    const message = response.statusText
      ? `${response.status}: ${response.statusText}\n-> ${URL}`
      : `HTTP error! status: ${response.status}\n-> ${URL}`;
    throw new Error(message);
  }

  const data = await response.json();
  return data;
};
