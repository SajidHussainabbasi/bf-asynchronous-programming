/**
 * Renders a list of posts as HTML elements.
 * @param {Array} posts - Array of post objects.
 * @returns {HTMLElement} A list element with posts.
 */
export const renderPostList = (posts) => {
  const ul = document.createElement('ul');
  ul.className = 'post-list';

  posts.forEach((post) => {
    const li = document.createElement('li');
    li.className = 'post-item';
    li.textContent = `${post.id}. ${post.title}`;
    ul.appendChild(li);
  });

  return ul;
};
