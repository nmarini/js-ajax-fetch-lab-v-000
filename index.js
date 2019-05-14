const owner = nmarini
const baseURL = 'https://api.github.com';
function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return c92d34b99b3130c0cae7c82af1a9ca02e52593a7;
}

function forkRepo() {
  const repo = 'learn-co-curriculum/js-ajax-fetch-lab';
  const url = `${baseURL}/repos/${repo}/forks`;
  fetch(url, {
    method: 'POST',
    headers: {
      Authorization: `token ${getToken()}`
    }
  })
    .then(res => res.json())
    .then(json => showResults(json));
}

function showResults(json) {
  //use this function to display the results from forking via the API
  document.getElementById('results').innerHTML = `<a href=${json.html_url}>${json.html_url}</a>`;
}

function createIssue() {
  //use this function to create an issue based on the values input in index.html
  const repo = `${owner}/js-ajax-fetch-lab`;
  const url = `${baseURL}/repos/${owner}/${repo}/issues`;
  const postData = {
    title: document.getElementById('title').value;
    body: document.getElementById('body').value;
  }

  fetch(url, {
    method: 'POST',
    headers: {
      Authorization: `token ${getToken()}`
    }
  })
    .then(res => res.json())
    .then(json => getIssues(json));
}

function getIssues() {
  //once an issue is submitted, fetch all open issues to see the issues you are creating
  const repo = `${owner}/js-ajax-fetch-lab`;
  const url = `${baseURL}/repos/${owner}/${repo}/issues`;

  fetch

}
