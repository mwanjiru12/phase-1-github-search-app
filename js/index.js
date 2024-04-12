const form = document.getElementById('github-form');
const searchInput = document.getElementById('search');
const userContainer = document.getElementById('user-list');
const repoContainer = document.getElementById('repos-list');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const query = searchInput.value;
  fetch(`https://api.github.com/search/users?q=${query}`, {
    headers: {
      'Accept': 'application/vnd.github.v3+json'
    }
  })
  .then(response => response.json())
  'use strict';

  document.getElementById('github-form').addEventListener('submit', function (e) {
    e.preventDefault();
    const query = document.getElementById('search').value;
    fetch(`https://api.github.com/search/users?q=${query}`, {
      headers: {
        'Accept': 'application/vnd.github.v3+json'
      }
    })
    .then(response => response.json())
    .then(data => {
      userContainer.innerHTML = '';
      data.items.forEach((user) => {
        const li = document.createElement('li');
        const avatar = document.createElement('img');
        avatar.src = user.avatar_url;
        const username = document.createElement('a');
        username.href = user.html_url;
        username.textContent = user.login;
        li.appendChild(avatar);
        li.appendChild(username);
        userContainer.appendChild(li);
      });
    });
  });

  document.getElementById('repo-search-button').addEventListener('click', function () {
    document.getElementById('repo-search-input').style.display = 'block';
    document.getElementById('repo-search-button').style.display = 'none';
  });

  document.getElementById('repo-search-input').addEventListener('submit', function (e) {
    e.preventDefault();
    const query = document.getElementById('repo-search-input').value;
    fetch(`https://api.github.com/search/repositories?q=${query}`, {
      headers: {
        'Accept': 'application/vnd.github.v3+json'
      }
    })
    .then(response => response.json())
    .then(data => {
      repoContainer.innerHTML = '';
      data.items.forEach((repo) => {
        const li = document.createElement('li');
        const name = document.createElement('a');
        name.href = repo.html_url;
        name.textContent = repo.name;
        li.appendChild(name);
        repoContainer.appendChild(li);
      });
    });
  });
});