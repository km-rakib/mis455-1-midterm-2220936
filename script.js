let cartItems = [];
let cartTotal = 0;

function addToCart(productName, price) {
  cartItems.push({ name: productName, price: price });
  cartTotal += price;

  document.getElementById("cart-count").textContent = cartItems.length;
  document.getElementById("cart-total").textContent = cartTotal.toFixed(2);
  alert(`Added ${productName} to your cart!`);
}


function checkout() {
  if (cartItems.length === 0) {
    alert("Your cart is empty!");
    return;
  }
  let message = "Thank you for your order!\n\nOrder Summary:";
  cartItems.forEach((item) => {
    message += `\n- ${item.name}: $${item.price.toFixed(2)}`;
  });

  message += `\n\nTotal: $${cartTotal.toFixed(2)}`;
  alert(message);

  cartItems = [];
  cartTotal = 0;
  document.getElementById("cart-count").textContent = "0";
  document.getElementById("cart-total").textContent = "0.00";
}
