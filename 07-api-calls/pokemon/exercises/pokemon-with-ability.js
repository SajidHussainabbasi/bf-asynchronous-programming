import { ORIGIN } from '../config.js';

/**
 * Returns an array of all Pokemon with a specific ability.
 *
 * @async
 * @param {string} [ability=''] - The ability to request.
 * @returns {Promise<object[]>} An array of Pokemon objects with a name and URL.
 *
 * @throws {Error} HTTP error! status: {number}.
 */
export const pokemonWithAbility = async (ability = '') => {
  // --- generate and declare your resource's URL ---
  // Using the provided ability to create the correct API URL
  const URL = `${ORIGIN}/api/v2/ability/${ability}/`;

  // --- fetch the API data ---
  const encodedURL = encodeURI(URL);
  const response = await fetch(encodedURL);

  // --- throw an error if the response is not ok ---
  if (!response.ok) {
    const message = response.statusText
      ? `${response.status}: ${response.statusText}\n-> ${URL}`
      : `HTTP error! status: ${response.status}\n-> ${URL}`;
    throw new Error(message);
  }

  /* --- parse the data if the response was ok --- */
  const data = await response.json();

  // --- process the fetched data (extract Pokémon) ---
  // Loop through the `pokemon` field to extract the name and URL of each Pokémon
  const pokemon = data.pokemon.map((p) => ({
    name: p.pokemon.name,
    url: p.pokemon.url,
  }));

  // --- return the final data ---
  return pokemon;
};
