class Producto {
    constructor(id,nombre,precio){
        this.id = id
        this.nombre = nombre
        this.precio = precio
    }
}

let productos = [];

productos.push(new Producto(1,"Producto 1",113.00));
productos.push(new Producto(2,"Producto 2",1550.00));
productos.push(new Producto(3,"Producto 3",223.00));
productos.push(new Producto(4,"Producto 4",547.00));
productos.push(new Producto(5,"Producto 5",300.00));
productos.push(new Producto(6,"Producto 6",2350.00));

let producto_string = "";

productos.forEach((producto) => {
    producto_string += `${producto.id}. ${producto.nombre} - $${producto.precio}\n`;
});

let carrito = [];

function menu() {
    while (true) {
        let opcion = Number(prompt("Bienvenido. ¿Que deseas hacer?\n1. Agregar un producto al carrito\n2. Eliminar un producto del carrito\n3. Mostrar mi carrito\n4. Comprar\n5. Salir"));
        switch (opcion) {
            case 1:
                let id_producto = Number(prompt(`Seleccione un producto:\n${producto_string}`)); 
                if (!id_producto || isNaN(parseInt(id_producto))) {
                    alert("ID de producto no valido.");
                    break;
                }else {
                    agregar_al_carrito(id_producto);
                    break;
                }
            case 2:
            let lista_compra = "";
            carrito.forEach(p => {
                lista_compra += `${p.id}. ${p.nombre} - $${p.precio}\n`
            });
            let id_producto_eliminar = Number(prompt(`Ingrese el ID del producto que desea eliminar:\n${lista_compra}`));
            if (!id_producto_eliminar || isNaN(parseInt(id_producto_eliminar))) {
                alert("ID de producto no valido.");
            }else{
                eliminar_del_carrito(id_producto_eliminar);
                break;
            }
            case 3:
                mostrar_carrito();
                break;
            case 4:
                if (carrito.length === 0) {
                    alert("No hay productos en el carrito.");
                } else {
                    let total_compra = 0;
                    carrito.forEach(p => {
                        total_compra += p.precio;
                    });
                    let confirmar_compra = confirm(`¿Estas seguro de querer comprar los productos en el carrito?\nEl valor total es de $${total_compra}`);
                    if (confirmar_compra) {
                        alert("¡Gracias por tu compra!");
                        carrito = [];
                    }
                }
                break;
            case 5:
                confirmar_salida = confirm("Estas por salir del carrito, se perdera todo lo realizado. ¿Estas seguro?")
                if (confirmar_salida) {
                    alert("¡Gracias por utilizar el carrito de compras! Te esperamos de vuelta.");
                    return;
                }else {
                    break;
                }
            default:
                alert("Opcion no valida. Intente nuevamente.");
        }
    }
}

function agregar_al_carrito(id_producto) {
    let producto = productos.find(p => p.id === parseInt(id_producto));
    if (producto) {
        carrito.push(producto);
        alert(`${producto.nombre} agregado al carrito`);
    } else {
        alert("Producto no encontrado");
    }
}
function eliminar_del_carrito(id_producto) {
    let indice = carrito.findIndex(p => p.id === parseInt(id_producto));
    if (indice !== -1) {
        carrito.splice(indice, 1);
        alert("Producto eliminado del carrito.");
    } else {
        alert("Producto no encontrado en el carrito.");
    }
}
function mostrar_carrito() {
    let total = 0;
    let lista = "";
    carrito.forEach(p => {
        lista += `${p.nombre} - $${p.precio}\n`;
        total += p.precio;
    });
    alert(`Carrito:\n${lista}Total: $${total}`);
}

menu();