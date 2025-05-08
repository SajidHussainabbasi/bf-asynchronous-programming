import { typicodePosts } from '../api-calls/posts.js';
import { renderPostList } from '../components/postList.js';

/**
 * Fetches posts and renders them in the DOM.
 */
export const loadPosts = async () => {
  try {
    const posts = await typicodePosts();
    const postListEl = renderPostList(posts);
    const container = document.getElementById('posts-container');
    container.innerHTML = ''; 
    container.appendChild(postListEl);
  } catch (err) {
    console.error(err);
  }
};
