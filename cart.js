let cart = JSON.parse(localStorage.getItem("cart")) || [];
let cartContainer = document.getElementById("cart-container");
function renderCart() {
     cartContainer.innerHTML = "";

   let total = 0;

   cart.forEach(function(item, index){
        let subtotal = item.price = item.quantity;
          total += subtotal



         cartContainer.innerHTML += `
         
        <div class="cart-item">
        <img src="${item.image}" alt="${item.name}" width= "300" border= "2px">
        <h3>${item.name}<h3>
         <p>Price: $${item.price}<p>
          <button onclick="decrease(${index})">-</button>
          <span class="quantity">${item.quantity}</spam>

         <button onclick="increase(${index})">+</button>
          <p>Subtotal: $${subtotal}</p>
          <button onclick="removeItem(${index})">REMOVE</button>
          <hr>

          </div>


         `;
    });
    document.getElementById("total").textContent = total;
 }

function increase(index) {
      cart[index].quantity++;
     saveCart();
}

 function decrease(index) {
    if (cart[index].quantity > 1) {
        cart[index].quantity--;
     }
     saveCart();
 }
function removeItem(index){
    cart.splice(index,1)
      saveCart();
}

 function saveCart() {
    localStorage.setItem("cart", JSON.stringify(cart));
    renderCart();
}


renderCart();