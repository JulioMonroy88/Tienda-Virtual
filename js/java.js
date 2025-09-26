 document.querySelectorAll('.btn-ver').forEach(btn => {
    btn.addEventListener('click', () => {
      const card = btn.closest('.card')
      document.getElementById('modal-title').textContent = card.dataset.titulo
      document.getElementById('modal-description').textContent = card.dataset.detalles
      document.getElementById('modal-price').textContent = card.dataset.precio
      document.getElementById('modal-img').src = card.dataset.img
      document.getElementById('modal').style.display = 'flex'
    })
  })

  

  function cerrarModal() {
    document.getElementById('modal').style.display = 'none'
  } 