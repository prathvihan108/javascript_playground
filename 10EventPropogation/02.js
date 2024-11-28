//e is the event object passed to us ,whihc contains all the information about the event
//u can log it and ckeck.
document.getElementById('list').addEventListener('click', (e) => {
    if (e.target.tagName === 'LI') {
      console.log('You clicked:', e.target.textContent);
    }
  });