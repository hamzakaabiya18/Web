function HMZAFUNC(name, price) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push({ name, price });
    localStorage.setItem("cart", JSON.stringify(cart));
    //alert("המוצר נוסף לעגלה!");
}

function loadCart() {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    let cartTable = document.getElementById("cart-items");
    let totalPrice = 0;

    cartTable.innerHTML = ""; // ניקוי הטבלה לפני טעינה חדשה

    cart.forEach((item, index) => {
        let row = document.createElement("tr");
        row.innerHTML = `
            <td>${item.name}</td>
            <td>₪${item.price}</td>
            <td><button class="btn btn-danger btn-sm" onclick="removeFromCart(${index})">הסר</button></td>
        `;
        cartTable.appendChild(row);
        totalPrice += item.price;
    });

    document.getElementById("total-price").innerText = totalPrice;
}

function removeFromCart(index) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.splice(index, 1); // הסרת המוצר מהרשימה
    localStorage.setItem("cart", JSON.stringify(cart));
    loadCart(); // טען מחדש את הטבלה
}

function clearCart() {
    localStorage.removeItem("cart"); // ניקוי כל הנתונים
    loadCart(); // טען מחדש
}

// טען את העגלה כאשר הדף נטען
window.onload = loadCart;


