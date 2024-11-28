document.getElementById('container').addEventListener(
    'click',
    (e) => {
      if (e.target.tagName === 'A') {
        e.preventDefault(); // Prevent navigation
        console.log('Navigation prevented');
      }
    },
    true // Capture phase
  );