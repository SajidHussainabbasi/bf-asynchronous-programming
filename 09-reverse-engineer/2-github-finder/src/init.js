document.getElementById('searchBtn').addEventListener('click', async () => {
  const userName = document.getElementById('searchUser').value.trim();
  const profileDiv = document.getElementById('profile');

  if (!userName) {
    profileDiv.innerHTML = '<p>Please enter a username.</p>';
    return;
  }

  const URL = `https://api.github.com/users/${userName}`;

  try {
    const response = await fetch(URL);
    if (!response.ok) throw new Error('User not found');

    const user = await response.json();

    profileDiv.innerHTML = `
      <div class="card">
        <img src="${user.avatar_url}" class="card-img-top" alt="Avatar">
        <div class="card-body">
          <h5 class="card-title">${user.name || user.login}</h5>
          <p class="card-text">Public Repos: ${user.public_repos}</p>
          <a href="${
            user.html_url
          }" target="_blank" class="btn btn-primary">View Profile</a>
        </div>
      </div>
    `;
  } catch (error) {
    profileDiv.innerHTML = '<p>User not found or error fetching data.</p>';
    console.error(error);
  }
});
