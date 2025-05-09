import { fetchUserById } from '../api-calls/users.js';
import { renderUser } from '../components/userList.js';

export const loadUser = async () => {
  const input = document.querySelector('input[name="userId"]');
  const userId = input.value;
  const root = document.getElementById('root');
  root.innerHTML = ''; // Clear previous content

  try {
    const user = await fetchUserById(userId);
    const userEl = renderUser(user);
    root.appendChild(userEl);
  } catch (error) {
    root.innerHTML = `<p class="error">${error.message}</p>`;
  }
};
