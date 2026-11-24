function addToCart(name,price,image) {
    let cart =JSON.parse(localStorage.getItem("cart")) || [];

let existingItem=cart.find(item=> item.name === name);
if( existingItem){
     existingItem.quantity++;
}else{
    cart.push({
        name:name,
        price:price,
        image:image,
        quantity:1
    })
}
 localStorage.setItem("cart",JSON.stringify(cart));
 alert(name+ " added to cart")
}