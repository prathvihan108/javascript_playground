async function fetchData(url) {
    try {
      const url = "https://api.github.com/users/prathvihan108";
      const response = await fetch(url);  // Promise may reject on network error //this returns a respponce object 
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json(); //calling .json again returns the promice so handle it similar way,
      console.log(data);//we get the json object.
    } catch (error) {
      console.log('Error caught:', error.message);  // Catches both network errors and HTTP errors
    }
  }
  

  fetchData();