document.addEventListener('click', (e) => {
    const modal = document.getElementById('modal');
    if (e.target !== modal && !modal.contains(e.target)) {
      modal.style.display = 'none'; // Close modal
      console.log('Modal closed');
    }
  });