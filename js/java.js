// Agregar producto mostrado en el modal al carrito
function agregarProductoModalAlCarrito() {
  const nombre = document.getElementById('modal-title').textContent;
  let precioTexto = document.getElementById('modal-price').textContent;
  // Quitar símbolo $ si existe y convertir a número
  let precio = parseFloat(precioTexto.replace(/[^\d.]/g, ''));
  agregarAlCarrito(nombre, precio);
}
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

  // Guardar en LocalStorage
function agregarAlCarrito(nombre, precio) {
  let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

  // Buscar si ya existe
  let producto = carrito.find(p => p.nombre === nombre);
  if (producto) {
    producto.cantidad++;
  } else {
    carrito.push({ nombre, precio, cantidad: 1 });
  }

  localStorage.setItem("carrito", JSON.stringify(carrito));
  alert(nombre + " agregado al carrito!");
}

// Mostrar carrito en carrito.html
function mostrarCarrito() {
  let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
  let tbody = document.querySelector("#tablaCarrito tbody");
  let totalGeneral = 0;
  tbody.innerHTML = "";

  carrito.forEach((p, index) => {
    let total = p.precio * p.cantidad;
    totalGeneral += total;

    let fila = `
      <tr>
        <td>${p.nombre}</td>
        <td>$${p.precio}</td>
        <td>${p.cantidad}</td>
        <td>$${total}</td>
        <td><button onclick="eliminarProducto(${index})">Eliminar</button></td>
      </tr>
    `;
    tbody.innerHTML += fila;
  });

  document.getElementById("totalGeneral").textContent = "Total: $" + totalGeneral;
}

function eliminarProducto(index) {
  let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
  carrito.splice(index, 1);
  localStorage.setItem("carrito", JSON.stringify(carrito));
  mostrarCarrito();
}

// Ejecutar solo en carrito.html
if (document.title.includes("Carrito")) {
  document.addEventListener("DOMContentLoaded", mostrarCarrito);
} 
