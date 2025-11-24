const menuData = [
    { name: "Espresso", price: 3, img: "images/espresso.jpg" },
    { name: "Cappuccino", price: 4.5, img: "images/cappuccino.jpg" },
    { name: "Latte", price: 4, img: "images/latte.jpg" },
    { name: "Mocha", price: 4.75, img: "images/mocha.jpg" },
    { name: "Macchiato", price: 5, img: "images/macchiato.jpg" },
    { name: "Iced Coffee", price: 3.5, img: "images/icedcoffee.jpg" }
];

let cart = JSON.parse(localStorage.getItem("cart") || "[]");

const menuContainer = document.getElementById("menuItems");
if (menuContainer) {
    menuData.forEach(item => {
        const div = document.createElement("div");
        div.className = "menu-item";
        div.innerHTML = `
            <img src="${item.img}" alt="${item.name}">
            <h3>${item.name}</h3>
            <p>$${item.price.toFixed(2)}</p>
            <button onclick="addToCart('${item.name}', ${item.price})">Add to Cart</button>
        `;
        menuContainer.appendChild(div);
    });
}

function addToCart(name, price) {
    cart.push({ name, price });
    localStorage.setItem("cart", JSON.stringify(cart));
    alert("Item added!");
}
