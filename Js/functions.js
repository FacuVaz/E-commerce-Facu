export const agregarEvento = () => {

  const botonAgregar = document.querySelectorAll(".agregar");

  botonAgregar.forEach(btnComprar => {

    btnComprar.addEventListener("click", () => {});

  })
}


export const buildCards = (products) => {

const productsContainer = document.querySelector(".products");

products.forEach(product => {

    const card = document.createElement('div');

    card.classList.add('card', 'col-3');

    card.innerHTML = `

    <img src=${product.data.img} class="card-img-top" alt="paleta bullpadel">
    <div class="card-body">
      <h5 class="card-title">${product.data.nombre}</h5>
      <p class="card-text">$${product.data.precio}</p>
      <a href="#" class="btn btn-primary agregar" id=${product.id}>Comprar</a>
    </div>

    `;

    productsContainer.append(card);

});

}




