// Base de datos de productos (ya creados)
let productos = [
    { descripcion: "Pizza", precio: 120 },
    { descripcion: "Tacos", precio: 15 },
    { descripcion: "Lonche", precio: 45 },
    { descripcion: "Quesadillas", precio: 20 },
    { descripcion: "Burrito", precio: 60 }
];

// Carrito vacío
let carrito = [];

function menu() {
    let salir = false;

    while (!salir) {
        let opcion = prompt(
            "Menú de opciones:\n" +
            "1. Agregar producto al carrito\n" +
            "2. Mostrar carrito y pagar\n" +
            "3. Eliminar producto del carrito\n" +
            "4. Salir\n\n" +
            "Ingrese una opción:"
        );

        switch (opcion) {
            case "1":
                agregarProducto();
                break;
            case "2":
                mostrarCarrito();
                break;
            case "3":
                eliminarProducto();
                break;
            case "4":
                salir = true;
                alert("Gracias por usar la tienda. ¡Adiós!");
                break;
            default:
                alert("Opción no válida, intente de nuevo.");
        }
    }
}

function agregarProducto() {
    // Mostrar lista de productos disponibles
    let lista = "Productos disponibles:\n\n";
    productos.forEach((p, i) => {
        lista += `${i + 1}. ${p.descripcion} - $${p.precio}\n`;
    });

    let indice = parseInt(prompt(lista + "\nIngrese el número del producto que desea comprar:"), 10) - 1;

    if (indice >= 0 && indice < productos.length) {
        let cantidad = parseInt(prompt("Ingrese la cantidad:"), 10);

        let producto = {
            descripcion: productos[indice].descripcion,
            cantidad: cantidad,
            precio: productos[indice].precio
        };

        carrito.push(producto);
        alert("Producto agregado al carrito.");
    } else {
        alert("Número inválido.");
    }
}

function mostrarCarrito() {
    if (carrito.length === 0) {
        alert("El carrito está vacío.");
        return;
    }

    let lista = "Carrito de compras:\n\n";
    let total = 0;

    carrito.forEach((p, i) => {
        lista += `${i + 1}. ${p.descripcion} | Cantidad: ${p.cantidad} | Precio: $${p.precio} | Subtotal: $${p.cantidad * p.precio}\n`;
        total += p.cantidad * p.precio;
    });

    lista += `\nTOTAL A PAGAR: $${total}`;
    alert(lista);
}

function eliminarProducto() {
    if (carrito.length === 0) {
        alert("El carrito está vacío, no hay nada que eliminar.");
        return;
    }

    let lista = "Seleccione el número del producto a eliminar:\n\n";
    carrito.forEach((p, i) => {
        lista += `${i + 1}. ${p.descripcion} (Cantidad: ${p.cantidad})\n`;
    });

    let indice = parseInt(prompt(lista), 10) - 1;

    if (indice >= 0 && indice < carrito.length) {
        carrito.splice(indice, 1);
        alert("Producto eliminado del carrito.");
    } else {
        alert("Número inválido.");
    }
}

// Ejecutar el menú
menu();

