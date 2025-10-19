document.addEventListener('DOMContentLoaded', () => {
    const carritoItems = document.getElementById('carrito-items');
    const total = document.getElementById('total');
    const pagarBtn = document.getElementById('pagar-btn');

    let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    actualizarCarrito();

    function actualizarCarrito() {
        carritoItems.innerHTML = '';
        let totalCompra = 0;

        carrito.forEach((item, index) => {
            totalCompra += item.precio * item.cantidad;

            const div = document.createElement('div');
            div.classList.add('item-carrito');
            div.innerHTML = `
                <span>${item.nombre}</span>
                <span>$${item.precio} x ${item.cantidad}</span>
                <div class="acciones">
                    <button class="sumar">+</button>
                    <button class="restar">-</button>
                    <button class="eliminar">🗑️</button>
                </div>
            `;

            div.querySelector('.sumar').addEventListener('click', () => {
                item.cantidad++;
                guardarYActualizar();
            });

            div.querySelector('.restar').addEventListener('click', () => {
                if (item.cantidad > 1) item.cantidad--;
                else carrito.splice(index, 1);
                guardarYActualizar();
            });

            div.querySelector('.eliminar').addEventListener('click', () => {
                carrito.splice(index, 1);
                guardarYActualizar();
            });

            carritoItems.appendChild(div);
        });

        total.textContent = `Total: $${totalCompra}`;
    }

    function guardarYActualizar() {
        localStorage.setItem('carrito', JSON.stringify(carrito));
        actualizarCarrito();
    }

    pagarBtn.addEventListener('click', () => {
        if (carrito.length === 0) {
            alert('Tu carrito está vacío.');
            return;
        }

        alert('¡Gracias por tu compra!');
        carrito = [];
        localStorage.setItem('carrito', JSON.stringify(carrito));
        actualizarCarrito();
    });
});
