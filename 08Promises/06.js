//promise chaining
//changed syntax;
// Promise chaining involves linking multiple .then() calls together to handle sequences of asynchronous operations. Each .then() receives the result of the previous .then and can return a new promise or a value.


function fetchGitHubUser(username) {
    return fetch(`https://api.github.com/users/${username}`)  //fetech will return a promise.
      .then(response => {
        if (!response.ok) {
          throw new Error(`User not found: ${response.status}`);
        }
        return response.json(); // Parse user data//this is being returned to the next then (that is the place where the promise is being returned.)// if u don't want to do this then u can simply use the promise constructor syntax to return
      });
  }
  
  function fetchUserRepos(user) {
    return fetch(user.repos_url)  // Use repos_url from user data
      .then(response => {
        if (!response.ok) {
          throw new Error(`Repositories not found: ${response.status}`);
        }
        return response.json(); // Parse repos data
      });
  }
  
  fetchGitHubUser('octocat')  // Step 1: Fetch user
    .then(user => {
      console.log('User:', user);
      return fetchUserRepos(user);  // Step 2: Fetch repositories
    })
    .then(repos => {
      const repoNames = repos.map(repo => repo.name); // Step 3: Extract repo names
      console.log('Repositories:', repoNames);
    })
    .catch(error => {
      console.error('Error:', error);  // Handle any errors in the chain
    });
  