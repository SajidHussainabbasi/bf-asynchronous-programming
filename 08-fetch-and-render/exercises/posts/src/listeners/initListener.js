import { loadPosts } from '../handlers/loadPosts.js';

/**
 * Adds event listener to load posts on button click.
 */
export const initListeners = () => {
  const btn = document.getElementById('load-posts-btn');
  btn.addEventListener('click', loadPosts);
};
