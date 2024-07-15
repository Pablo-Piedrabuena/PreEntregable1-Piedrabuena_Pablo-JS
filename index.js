//SIMULADOR DE COMPRA


//Array lista de usuarios
const usuarios = ['Pablo', 'Pedro', 'Tamara', 'Jesica'];
//Array lista de Productos
const productos = ['Queso Cremoso', 'Queso Barra', 'Queso Por Salut', 'Queso Sardo', 'Queso Reggiano', 'Queso Holanda', 'Crema de Leche'];
/* Array lista de Productos (Entiendo que no es la mejor forma ya que no queda asociado el precio con el producto, pero es para salir del paso hasta que veamos objetos literales) */
const precioProductos = [4000, 5000, 4800, 7000, 3500, 4150, 950];
//Array Opciones de pAGO
const formasDePago = ['Efectivo', 'Transferencia', 'Tarjeta'];
//Array Prodcutos en Carrrito
const productosEnCarrito = [];
//Array Prodcutos en Carrrito
const precioProductosEnCarrito = [];
//Variable para el Total de la Compra
let totalCompra =0

let listaCarrito = ''




//FUNCIONES

/*1-Registro de Usuario: Compara el dato ingresado con el array usuarios, si existe, deja abanzar, si no existe da la opcion de volver a ingresarlo
y si cancela, sale del proceso de compra.*/
function registroDeUsuario(){
    let accesoUsuario =true;
    while(accesoUsuario){
        let usuarioIngresado=prompt('Para iniciar el proceso de compra, necesitamos que ingreso su nombre de usuario');
        if(usuarioIngresado===null){
            return False;
        }
        if (usuarios.includes(usuarioIngresado)==true){
            accesoUsuario=false;
            return true            
        }else{
            alert('El usuario ' + usuarioIngresado + ' no existe, verifique los datos ingresados y vuelva a intentarlo.');
        }
    }
    
}

//2-Lista de Precio: muestra una lista de productos con sus correspondientes precios, usando los arrays productos y precioProducto
function listaDePrecio(){
    let mensaje = ''
    for (let i = 0; i < productos.length; i++) {
        mensaje= mensaje+ (`${i} - ${productos[i]}....$ ${precioProductos[i]}`) + '\n';
    }
    return mensaje
}

//3-Agregar productos al Carrito
function agregaproductosAlCarrito(){
    let agregaProdcutos =true;
    let productoIngresado;
    
    while(agregaProdcutos){
        productoIngresado=prompt('Por favor, ingrese el codigo del producto que desea comprar: \n:' + listaDePrecio());
        if(productoIngresado===null){
            return False;
        }else{
            if (productos.includes(productos[productoIngresado])==true){
                productosEnCarrito.push(productos[productoIngresado]);
                precioProductosEnCarrito.push(precioProductos[productoIngresado])
                totalCompra=totalCompra + precioProductos[productoIngresado]
                    let seguirComprando = prompt('Producto agregado, ¿Desea seguir agregando productos al carrito? (Si/No):');
                    if (seguirComprando.toLowerCase() === "no") {
                        return false
                    } else if (seguirComprando.toLowerCase() === "si") {
                    }
                    else {
                        alert("Opción inválida.");
                    } 
            }else{
                alert('El producto con codigo ' + productoIngresado + ' no existe, verifique los datos ingresados y vuelva a intentarlo.')
            }
    }
    }
}

//4-Lista Carrito: muestra la lista de productos en el carrito, usando los arrays productosEnCarrito y precioProductosEnCarrito
function listaProductosCarrito(){
    let mensaje = ''
    for (let i = 0; i < productosEnCarrito.length; i++) {
        mensaje= mensaje+ (`${i} - ${productosEnCarrito[i]}....$ ${precioProductosEnCarrito[i]}`) + '\n';
    }
    mensaje='Estos son los productos en el Carrito: \n' + mensaje +'\n TOTAL COMPRA: $' + totalCompra;
    return mensaje
}

//5-forma de Pago: muestra la lista de productos en el carrito, usando los arrays productosEnCarrito y precioProductosEnCarrito
function formaDePago(){
    bandera=true;
    while(bandera){
        let mensaje = ''
        for (let i = 0; i < formasDePago.length; i++) {
            mensaje= mensaje+ (`${i} - ${formasDePago[i]}`) + '\n';
        }
        let opcionIngresada=parseInt(prompt('Seleccione un metodo de pago: \n' +  mensaje));
        if (formasDePago.includes(formasDePago[opcionIngresada])==true){
           bandera=false;
            return true;
        }else{
            alert('La opcion ingresada es ivalida.');
        }
    }
    return formasDePago[opcionIngresada];
}


let bandera =true
while(bandera){
    registroDeUsuario();
    agregaproductosAlCarrito();
    alert(listaProductosCarrito());
    formaDePago();
    alert('Gracias por su compra!')
    bandera=false;
}





