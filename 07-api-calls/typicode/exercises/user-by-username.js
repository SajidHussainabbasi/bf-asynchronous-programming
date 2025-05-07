import { ORIGIN } from '../config.js';

/**
 * Fetches a single user with the given user name.
 *
 * @async
 * @param {string} [userName=''] - The user name to request.
 * @returns {Promise<object|null>} The user object if it exists, otherwise null.
 *
 * @throws {Error} HTTP error! status: {number}.
 */
export const userByUsername = async (userName = '') => {
  // Filter users by username
  const URL = `${ORIGIN}/users?username=${userName}`;

  const encodedURL = encodeURI(URL);
  const response = await fetch(encodedURL);

  if (!response.ok) {
    const message = response.statusText
      ? `${response.status}: ${response.statusText}\n-> ${URL}`
      : `HTTP error! status: ${response.status}\n-> ${URL}`;
    throw new Error(message);
  }

  const data = await response.json();

  // Return the first match or null if not found
  const user = data.length > 0 ? data[0] : null;
  return user;
};
