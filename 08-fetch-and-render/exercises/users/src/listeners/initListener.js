import { loadUser } from '../handlers/loadUser.js';

export const initListener = () => {
  const button = document.getElementById('choose-user-button');
  button.addEventListener('click', loadUser);
};
