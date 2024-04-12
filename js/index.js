const form = document.querySelector('form');
const searchInput = document.querySelector('input');
const searchResults = document.querySelector('#search-results');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const query = searchInput.value;
  fetch(`https://api.github.com/search/users?q=${query}`, {
    headers: {
      'Accept': 'application/vnd.github.v3+json'
    }
  })
  .then(response => response.json())
  .then(data => {
    searchResults.innerHTML = '';
    data.items.forEach((user) => {
      const avatar = document.createElement('img');
      avatar.src = user.avatar_url;
      const username = document.createElement('a');
      username.href = user.html_url;
      username.textContent = user.login;
      searchResults.appendChild(avatar);
      searchResults.appendChild(username);
    });
  });
});

const repoSearchInput = document.querySelector('#repo-search-input');
const repoSearchResults = document.querySelector('#repo-search-results');

repoSearchInput.addEventListener('submit', (e) => {
  e.preventDefault();
  const query = repoSearchInput.value;
  fetch(`https://api.github.com/search/repositories?q=${query}`, {
    headers: {
      'Accept': 'application/vnd.github.v3+json'
    }
  })
  .then(response => response.json())
  .then(data => {
    repoSearchResults.innerHTML = '';
    data.items.forEach((repo) => {
      const name = document.createElement('a');
      name.href = repo.html_url;
      name.textContent = repo.name;
      repoSearchResults.appendChild(name);
    });
  });
});