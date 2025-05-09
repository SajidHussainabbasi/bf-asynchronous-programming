export const renderUser = (user) => {
  const userDiv = document.createElement('div');
  userDiv.className = 'user';

  userDiv.innerHTML = `
    <h2>${user.name}</h2>
    <p><strong>Email:</strong> ${user.email}</p>
    <p><strong>Username:</strong> ${user.username}</p>
    <p><strong>Phone:</strong> ${user.phone}</p>
    <p><strong>Website:</strong> ${user.website}</p>
  `;

  return userDiv;
};
