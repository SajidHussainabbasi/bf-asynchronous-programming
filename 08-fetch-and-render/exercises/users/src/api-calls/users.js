import { ORIGIN } from '../config.js';

export const fetchUserById = async (id) => {
  const response = await fetch(`${ORIGIN}/users/${id}`);
  if (!response.ok) {
    throw new Error(`User with ID ${id} not found`);
  }
  return response.json();
};
