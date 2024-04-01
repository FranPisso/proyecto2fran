

alert("Bienvenido!")

let mensaje = "Ingrese una opción: \n1 - Agregar producto al carrito\n2 - Consultar total\n3 - Finalizar compra\n0 - Para salir"
let opcion
let productos = "1 - Vodka Smirnoff + Speed $8000 \n2 - Fernet Branca + CocaCola $11000 \n3 - Gin Gordons + Agua tonica $9600"
let total = 0
let edad = Number(prompt("Para continuar, por favor ingrese su edad"))

if (edad >= 18) {

    do {
        opcion = Number(prompt(mensaje))
        if (opcion === 1) {
            total = agregarProductosAlCarrito(total)
        } else if (opcion === 2) {
            alert("el total hasta el momento es: " + total)
        } else if (opcion === 3) {
            alert("el total de su compra es: " + total + "\nGracias por elegirnos!")
            total = 0
        }


    } while (opcion !== 0 && opcion !== 3);

    function agregarProductosAlCarrito(total) {
        let opcionCombo = Number(prompt(productos))
        if (opcionCombo === 1) {
            let cantidad = Number(prompt("ingrese cantidad de combos del producto"))
            total = total + cantidad * 8000
        } else if (opcionCombo === 2) {
            let cantidad = Number(prompt("ingrese cantidad de combos del producto"))
            total = total + cantidad * 11000
        } else if (opcionCombo === 3) {
            let cantidad = Number(prompt("ingrese cantidad de combos del producto"))
            total = total + cantidad * 9600
        }
        return total
    }

} else {
    alert("Usted es menor de edad, no puede ingresar.")
}