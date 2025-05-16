document.addEventListener('DOMContentLoaded', () => {
  const inputField = document.querySelector('.input-field');
  const submitBtn = document.getElementById('submit-btn');
  const output = document.getElementById('output');
  const errorDiv = document.getElementById('error');

  submitBtn.addEventListener('click', async () => {
    const searchTerm = inputField.value.trim();

    if (!searchTerm) {
      errorDiv.textContent = 'Please enter a search term.';
      output.innerHTML = '';
      return;
    }

    errorDiv.textContent = '';
    output.innerHTML = '<p>Searching Wikipedia...</p>';

    const URL = `https://en.wikipedia.org/w/api.php?action=query&list=search&prop=info&inprop=url&utf8=&format=json&origin=*&srlimit=10&srsearch=${encodeURIComponent(
      searchTerm,
    )}`;

    try {
      const response = await fetch(URL);
      const data = await response.json();

      if (!data.query || data.query.search.length === 0) {
        output.innerHTML = '<p>No results found.</p>';
        return;
      }

      const resultsHTML = data.query.search
        .map((result) => {
          const title = result.title;
          const snippet = result.snippet;
          const pageUrl = `https://en.wikipedia.org/wiki/${encodeURIComponent(
            title,
          )}`;

          return `
          <div class="result-item">
            <a href="${pageUrl}" target="_blank"><h3>${title}</h3></a>
            <p>${snippet}...</p>
          </div>
        `;
        })
        .join('');

      output.innerHTML = resultsHTML;
    } catch (error) {
      output.innerHTML = '<p>There was an error retrieving results.</p>';
      console.error('API Fetch Error:', error);
    }
  });
});
