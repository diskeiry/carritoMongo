
let nombreInput = document.getElementById('nombre');
let precioInput = document.getElementById('precio');
let cantidadInput = document.getElementById('cantidad');



// let listaProductoDisponible = [
//     {Id: 1, img:'https://camisasferruche.com/wp-content/uploads/2022/06/CAMISA-VESTIR-AZUL-ML.jpeg', nombre: "Camisa Azul",          precio: 35.99, cantidad: 5 },
//     {Id: 2, img:'https://vansco.vteximg.com.br/arquivos/ids/287067-1000-1000/VN0A5FLPBLK-1.jpg?v=638054409407300000' , nombre: "Pantalón Negro",       precio: 45.50, cantidad: 3 },
//     {Id: 3, img:'https://www.carminashoemaker.com/cdnassets/oxfords_captoe_tan_vegano_80251_m.jpg' , nombre: "Zapatos de Cuero",     precio: 75.25, cantidad: 8 },
//     {Id: 4, img:'https://http2.mlstatic.com/D_NQ_NP_920177-MCO72449271326_102023-O.webp' , nombre: "Gorra Roja",           precio: 15.75, cantidad: 2 },
//     {Id: 5, img:'https://m.media-amazon.com/images/I/61Yf0HdT4PL._AC_SX679_.jpg' , nombre: "Bufanda de Lana",      precio: 20.00, cantidad: 6 },
//     {Id: 6, img:'https://ripleycl.imgix.net/https%3A%2F%2Fimages.jumpseller.com%2Fstore%2Ftodojoyas%2F19047429%2F0414-1.jpg%3F1688427270?w=750&h=555&ch=Width&auto=format&cs=strip&bg=FFFFFF&q=60&trimcolor=FFFFFF&trim=color&fit=fillmax&ixlib=js-1.1.0&s=a44968d795738af3f12e4090d86fd00c' , nombre: "Pulsera Plateada",     precio: 10.99, cantidad: 4 },
//     {Id: 7, img:'https://www.e-nuc.com/images/productos/thumbnails/reloj-digital-deportivo_thumb_432x437.png' , nombre: "Reloj Deportivo",      precio: 55.80, cantidad: 7 },
//     {Id: 8, img:'https://m.media-amazon.com/images/I/41nCOKfEVHL._AC_.jpg' , nombre: "Mochila Grande",       precio: 40.30, cantidad: 1 },
//     {Id: 9, img:'https://mundo-carteras.com/cdn/shop/products/DSCN0858_620x.jpg?v=1674672734' , nombre: "Cartera Elegante",     precio: 30.50, cantidad: 9 },
//     {Id: 10, img:'https://m.media-amazon.com/images/I/61Ick10ByzL._AC_SX522_.jpg', nombre: "Vestido Floral",       precio: 65.99, cantidad: 5 },
//     {Id: 11, img:'https://i.ebayimg.com/thumbs/images/g/ug0AAOSw2kBl2FLS/s-l960.webp', nombre: "Sudadera Gris",        precio: 32.99, cantidad: 3 },
//     {Id: 12, img:'https://falabella.scene7.com/is/image/FalabellaPE/120130623_1?wid=800&hei=800&qlt=70', nombre: "Jeans Ajustados",      precio: 42.50, cantidad: 2 },
//     {Id: 13, img:'https://paylesschat.com/republicadominicana/2530-large_default/botas_de_media_cana_para_monta.jpg', nombre: "Botas de Montaña",     precio: 80.25, cantidad: 6 },
//     {Id: 14, img:'https://m.media-amazon.com/images/I/61tsl2SqUpS._AC_SL1002_.jpg', nombre: "Sombrero de Paja",     precio: 18.75, cantidad: 5 },
//     {Id: 15, img:'https://m.media-amazon.com/images/I/41CLVEXGD4L._AC_UF894,1000_QL80_.jpg', nombre: "Bufanda de Seda",      precio: 22.00, cantidad: 4 },
//     {Id: 16, img:'https://http2.mlstatic.com/D_NQ_NP_624856-MLA46296787773_062021-O.webp', nombre: "Pulsera de Cuero",     precio: 12.99, cantidad: 7 },
//     {Id: 17, img:'https://static.bodet-time.com/media/com_eshop/products/resized/profil-940i-face-500x500.png', nombre: "Reloj Analógico",      precio: 60.80, cantidad: 3 },
//     {Id: 18, img:'https://m.media-amazon.com/images/I/41mjmspq+PL._AC_SY580_.jpg', nombre: "Mochila Pequeña",      precio: 35.30, cantidad: 8 },
//     {Id: 19, img:'https://i5.walmartimages.com.mx/mg/gm/3pp/asr/46d2c28f-1353-48c8-aaa3-028a18e30520.12735b53f9b2f601c54b98b8a92b94a2.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF', nombre: "Cartera de Viaje",     precio: 25.50, cantidad: 6 },
//     {Id: 20, img:'https://m.media-amazon.com/images/I/61KX+CEcpqL._AC_UF894,1000_QL80_.jpg', nombre: "Vestido Elegante",     precio: 70.99, cantidad: 2 },
//     {Id: 21, img:'https://www.bikesport.cl/cdn/shop/products/NormandieBlack_1800x.png?v=1634311390', nombre: "Chaqueta de Cuero",    precio: 36.99, cantidad: 7 },
//     {Id: 22, img:'https://felix.com.pa/cdn/shop/products/000000300105661001_3_1200x.png?v=1690324829', nombre: "Pantalón Corto",       precio: 48.50, cantidad: 1 },
//     {Id: 23, img:'https://stevens.com.pa/media/catalog/product/1/0/1000885668_navy_1_0a4grytnkx5jnvuf.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=700&width=700&canvas=700:700', nombre: "Zapatillas Deportivas",precio: 78.25, cantidad: 5 },
//     {Id: 24, img:'https://tommydominicana.vtexassets.com/arquivos/ids/214342-800-auto?v=638259821638770000&width=800&height=auto&aspect=true', nombre: "Gorra de Béisbol",     precio: 17.75, cantidad: 9 },
//     {Id: 25, img:'https://www.blaugab.com/web/image/product.template/943/image_1024?unique=2081991', nombre: "Bufanda de Algodón",   precio: 25.00, cantidad: 3 },
//     {Id: 26, img:'https://imgproxy.mijoyaideal.es/8QqBsM4mEARPwMBVsahGKRHZG3Suu9_DpBcInmlZtO0/resize:fit:700:700/aHR0cHM6Ly93d3cubWlqb3lhaWRlYWwuZXMvbWVkaWEvY2F0YWxvZy9wcm9kdWN0LzIvNS8yNTA4LWxhc2VyLmpwZz93aWR0aD03MDAmaGVpZ2h0PTcwMCZzdG9yZT1lcyZpbWFnZS10eXBlPWltYWdl.jpg', nombre: "Pulsera de Plata",     precio: 14.99, cantidad: 6 },
//     {Id: 27, img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEc6Z9Ej-gXl9ba-cly_1Ql8fAJjKVmJwYlOqZ8QSmdA&s', nombre: "Reloj Digital",        precio: 50.80, cantidad: 4 },
//     {Id: 28, img:'https://coolpack.es/13683-large_default/mochila-escolar-juvenil-basic-plus-blue-iron.jpg', nombre: "Mochila Escolar",      precio: 42.30, cantidad: 7 },
//     {Id: 29, img:'https://creadoenchile.cl/cdn/shop/products/aQhTSEwuBG.jpg?v=1668172014', nombre: "Cartera de Cuero",     precio: 32.50, cantidad: 2 },
//     {Id: 30, img:'https://m.media-amazon.com/images/I/71UcZC+W2UL._AC_UF894,1000_QL80_.jpg', nombre: "Vestido de Noche",     precio: 68.99, cantidad: 8 },
 
// ];


// let listaProductoCarrito = [{Id: 0, img: src='https://images.ctfassets.net/jdgtuh2uadx0/mQeFlcYhNAD5DfXNJ56lTY/40cbe23642e256d88dfa68339bea91c9/image-pdp-07500435125161_c1n1_la2018feb22125459-i5ckP-image',  nombre: 'shampoo', precio: 75, cantidad: 400, importe: 0 }];

// function agregarProducto() {
//     if (nombreInput.value && precioInput.value) {
//         listaProducto.push({ nombre: nombreInput.value, precio: precioInput.value, cantidad: cantidadInput.value })
//         actualizarTabla();
//         nombreInput.value = '';
//         precioInput.value = '';
//         cantidadInput.value = '';
//         nombreInput.focus();
//     } else {
//         alert('COMPLETA LOS CAMPOS PARA AGREGAR LOS PRODUCTOS')
//     }

// }


// function vaciarCarrito() {
//     listaProductoCarrito = [];
//     actualizarTabla();
// }
let listaProductoDisponible = [];
let listaProductoCarrito = [];

function actualizarTabla() {
    eliminarProducto();
    modificarCantidades();
    calcularImporte();
    let body = document.getElementById('cuerpoTabla');
    body.innerHTML = '';
    listaProductoCarrito.forEach((producto) => {
        let tr = document.createElement('tr');
        tr.innerHTML = `
        <td>${producto.Id}</td>
        <td><img src="${producto.img}" width=60% ></td>
        <td>${producto.nombre}</td>
        <td>${producto.precio}</td>  
        <td><input type="number" class="inputtd" value ="${producto.cantidad}"></td>
        <td>${producto.importe}</td>
        <td><button class="eliminar"> X </button></td>`;
        body.appendChild(tr);
        eliminarProducto();
        modificarCantidades();
        calcularResultado();
        
    });
}

// function calcularResultado() {
//     const totales = listaProductoCarrito.reduce(function(acumulador,producto){
//         acumulador.total += producto.importe;
//         return acumulador;
//     },{total:0});
//     let importe = document.getElementById('importe');
//     importe.innerHTML = totales.total;
// }

// function productoDisponibles(){
//     let principal = document.getElementById('principal');
//     listaProductoDisponible.forEach((producto,index)=>{
//         let div = document.createElement('div');
//         div.innerHTML = `  <div class="principal" id="principal">
//                                 <div class="content-tarjeta">
//                                     <div class="content-img"><img src="${producto.img}" class="img-1"></div>
//                                     <h3>${producto.nombre}</h3>
//                                     <label>${producto.precio}</label>
//                                     <button onclick="agregarProducto(${index})" class="btn-tarjeta">agregar</button>
//                                 </div>
//                             </div> `;
//         principal.appendChild(div);
//     });

// }


// function agregarProducto(index) {
//     let existe = listaProductoCarrito.some(producto => producto.Id === listaProductoDisponible[index].Id);
//     if(!existe){
//         listaProductoCarrito.push(listaProductoDisponible[index]);
//         actualizarTabla();
//     }else{
//         listaProductoCarrito.forEach((producto)=>{
//             if(producto.Id === listaProductoDisponible[index].Id){
//             producto.cantidad++;
//         }
//     });
    
// }
// actualizarTabla(); 
// }


// function eliminarProducto() {
//     let cuerpoTabla = document.getElementById('cuerpoTabla');
//     let tr = cuerpoTabla.querySelectorAll('tr');
//     tr.forEach((fila, index) => {
//         let botonEliminar = fila.querySelector('.eliminar');
//         botonEliminar.addEventListener('click', () => {
//             listaProductoCarrito.splice(index, 1);
//             actualizarTabla();
//         })
//     })
// }

// function calcularImporte() {
//     listaProductoCarrito.forEach((producto) => {
//         producto.importe =  producto.cantidad * producto.precio;
//     })
//     // console.log(listaProducto[0].importe)
// };

// function modificarCantidades() {
//     let cuerpoTabla = document.getElementById('cuerpoTabla');
//     let tr = cuerpoTabla.querySelectorAll('tr');
//     tr.forEach((fila, index) => {
//         let inputCantidad = fila.querySelector('.inputtd');
//         inputCantidad.addEventListener('input', function () {
//             listaProductoCarrito[index].cantidad = parseInt(this.value);
//             actualizarTabla();
//         });
//     })
// };

function Resivir(){
    fetch('http://localhost:8080/producto/almacen',{
        method:'GET',
        headers:{'Content-Type':'application/json'}
    }).then(response => response.json()).then(data => {
        const datain = data;
        listaProductoDisponible = datain;
        // console.log(listaProductoDisponible);
    }).catch(error => {
        console.log(error);
    });
    
}



function productoDisponibles(){
    let principal = document.getElementById('principal');
    principal.innerHTML = '';
    listaProductoDisponible.forEach((producto, index) => {
        let div = document.createElement('div');
        div.innerHTML = `  <div class="principal" id="principal">
                                <div class="content-tarjeta">
                                    <div class="content-img"><img src="${producto.img}" class="img-1"></div>
                                    <h3>Codigo ${producto.Id}</h3>
                                    <h3>${producto.nombre}</h3>
                                    <label>Precio ${producto.precio}</label>
                                </div>
                            </div> `;
        principal.appendChild(div);
    });

}



setInterval(() => {
    Resivir();
    productoDisponibles();
}, 500);


window.onload = productoDisponibles;


