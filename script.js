document.addEventListener('DOMContentLoaded', () => {
    const botonesAgregar = document.querySelectorAll('.agregar');
    const contador = document.getElementById('contador');

    let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    actualizarContador();

    botonesAgregar.forEach(btn => {
        btn.addEventListener('click', () => {
            const producto = btn.parentElement;
            const nombre = producto.querySelector('h2').textContent;
            const precio = parseFloat(producto.querySelector('p').textContent.replace('Precio: $', ''));

            const item = carrito.find(p => p.nombre === nombre);
            if (item) {
                item.cantidad++;
            } else {
                carrito.push({ nombre, precio, cantidad: 1 });
            }

            localStorage.setItem('carrito', JSON.stringify(carrito));
            actualizarContador();
        });
    });

    function actualizarContador() {
        contador.textContent = carrito.reduce((acc, p) => acc + p.cantidad, 0);
    }
});
