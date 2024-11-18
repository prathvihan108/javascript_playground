// Function to fetch a GitHub user's data(real api)
//best practice.
function fetchGitHubUser(username) {
    return new Promise((resolve, reject) => {
      fetch(`https://api.github.com/users/${username}`)
        .then(response => {
          if (!response.ok) {
            reject(`Failed to fetch user: ${response.statusText}`);
          }
          return response.json();  // Parse the JSON response
        })
        .then(data => resolve(data))  // Resolve with the user data
        .catch(error => reject(`Network error: ${error}`));  // Handle network errors
    });
  }
  
  // Using the function
  fetchGitHubUser('prathvihan108')
    .then(user => {
      console.log(user);
    //   console.log(`Name: ${user.name}`);
    //   console.log(`Bio: ${user.bio}`);

    })
    .catch(error => {
      console.error('Error:', error);
    });
  