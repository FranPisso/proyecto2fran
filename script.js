let productos = [

    { id: 1, nombre: "Vodka", precio: 1500, categoria: "alcohol", stock: 7 },
    { id: 2, nombre: "Gin", precio: 2700, categoria: "alcohol", stock: 7 },
    { id: 3, nombre: "Fernet", precio: 2100, categoria: "alcohol", stock: 6 },
    { id: 4, nombre: "Whisky", precio: 3000, categoria: "alcohol", stock: 5 },
    { id: 5, nombre: "CocaCola", precio: 1500, categoria: "mezcla", stock: 6 },
    { id: 6, nombre: "Sprite", precio: 1500, categoria: "mezcla", stock: 6 },
    { id: 7, nombre: "Naranja", precio: 1300, categoria: "mezcla", stock: 7 },
    { id: 8, nombre: "Agua Tonica", precio: 1600, categoria: "mezcla", stock: 5 },
]

alert("Bienvenido!")

let edad = prompt("Para continuar, por favor ingrese su edad")




if (edad >= 18) {

    const listar = (lista, propiedad1, propiedad2, propiedad3) => lista.map(producto => producto[propiedad1] + " - " + producto[propiedad2] + " $" + producto[propiedad3]).join("\n")

    let carrito = []

    let opcionMenu

    do {

        opcionMenu = Number(prompt("1 - Agregar un producto al carrito\n2 - Filtrar por categoria\n3 - Finalizar compra\n0 - Salir"))

        if (opcionMenu === 1) {
            agregarProductoAlCarrito(productos, carrito)
        } else if (opcionMenu === 2) {
            filtrarPorCategoria(productos)
        } else if (opcionMenu === 3) {
            let total = carrito.reduce((acumular, producto) => acumular + producto.subtotal, 0)
            alert("Precio total de la compra: $" + total + "\nGracias por comprar!")
        }

    } while (opcionMenu !== 0);

    function filtrarPorCategoria(productos) {
        let categorias = []
        productos.forEach(producto => {
            if (!categorias.includes(producto.categoria)) {
                categorias.push(producto.categoria)
            }
        })
        console.log(categorias)

        let categoria
        let salida

        do {
            categoria = prompt("Ingrese una de las siguientes categorias: " + categorias.join(", ")).toLowerCase()
            if (categorias.includes(categoria)) {
                let productosFiltrados = productos.filter(producto => producto.categoria === categoria)
                salida = productosFiltrados.map(producto => producto.nombre + " $" + producto.precio).join("\n")
            } else {
                alert("Categoria inexistente")
            }
        } while (!categorias.includes(categoria));


        alert(salida)
    }

    function agregarProductoAlCarrito(productos, carrito) {

        let opcion

        do {
            opcion = Number(prompt("Seleccione producto por id (0 para salir):\n" + listar(productos, "id", "nombre", "precio")))


            let productoBuscado = productos.find(producto => producto.id === opcion)
            let posicionProductoEnCarrito = carrito.findIndex(producto => producto.id === opcion)

            if (productoBuscado) {
                if (posicionProductoEnCarrito !== -1) {
                    carrito[posicionProductoEnCarrito].unidades++
                    carrito[posicionProductoEnCarrito].subtotal = carrito[posicionProductoEnCarrito].precio * carrito[posicionProductoEnCarrito].unidades

                } else {
                    carrito.push({
                        id: productoBuscado.id,
                        nombre: productoBuscado.nombre,
                        precio: productoBuscado.precio,
                        unidades: 1,
                        subtotal: productoBuscado.precio
                    })
                }
            } else if (opcion !== 0) {
                alert("id incorrecto")
            }
        } while (opcion !== 0);
        console.log(carrito)
    }


} else alert("Usted es menor de edad, no puede continuar")

