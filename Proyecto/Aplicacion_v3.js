// Boton 'añadir al carrito' 
let btn_AñadirItemCarrito = document.querySelectorAll('.btn');

//registra los clicks y 
btn_AñadirItemCarrito.forEach(x => {
    x.addEventListener('click',AñadirAlCarritoClick);
})

//selecionamos el div row y lo guardamos en la variable
let contenedorItemsCarrito = document.querySelector('.Carrito_Espacio');

//Al dar click te trae el item y todo lo que este dentro del Div -> '.col'
function AñadirAlCarritoClick(event){
    let button = event.target;
    //item, es el div de todo el card.
    let divItem =  button.closest('.col');
    let itemTitulo = divItem.querySelector('.card-title').textContent;
    let itemPrecio = divItem.querySelector('.precio').textContent;
    let itemPicture = divItem.querySelector('.card-img-top').src;

    //es la funcion de abajo, solo imprime los resultados de las variables.
    AñadirToCarrito(itemTitulo,itemPrecio,itemPicture)
    
}


function AñadirToCarrito(itemTitulo,itemPrecio,itemPicture){
    let carritoProductoFila = document.createElement('div');
    
    let contenidoCarrito = 
`
   
<div class="cards mb-3" style="max-width: 1000px; style="background-color:red;"">
  <div class="row g-0">
    <div class="col-md-4">
      <img src="${itemPicture}" class="img-fluid rounded-start" alt="...">
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">${itemTitulo}</h5>
        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <p class="card-text"><small class="text-muted">${itemPrecio}</small></p>
      </div>
    </div>
  </div>
</div>


`
carritoProductoFila.innerHTML = contenidoCarrito
contenedorItemsCarrito.append(carritoProductoFila)

PrecioTotalCarrito()

}

function PrecioTotalCarrito(){
  let total = 0;
  let totalCarrito = document.querySelector('.ShoppingCartTotal')

  let shoppingCartItems = document.querySelectorAll(".text-muted")
  //total
  for(let i of shoppingCartItems){
    i= parseInt(i.textContent)
    total+=i
    
  }
  console.log(total)
 
  

  // shoppingCartItems.forEach(row => {
  //   let precioProducto = row.querySelector('.text-muted')
  //   console.log( precioProducto)

  // })
  
}