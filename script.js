
let cartItems = [];
let cartTotal = 0;

function addToCart(productName, price) {
    cartItems.push({ name: productName, price: price });
    cartTotal += price;

    document.getElementById('cart-count').textContent = cartItems.length;
    document.getElementById('cart-total').textContent = cartTotal.toFixed(2);
    alert(`Added ${productName} to your cart!`);
}