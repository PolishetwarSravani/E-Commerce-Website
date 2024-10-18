// script.js
const products = [
    { id: 1, name: 'Smartphone', price: 699, category: 'electronics', image: 'images/smartphone.jpeg' },
    { id: 2, name: 'Laptop', price: 999, category: 'electronics', image: 'images/laptop.jpeg' },
    { id: 3, name: 'T-shirt', price: 19, category: 'clothing', image: 'images/tshirt.jpeg' },
    { id: 4, name: 'Jeans', price: 39, category: 'clothing', image: 'images/jeans.jpeg' },
    { id: 5, name: 'Watch', price: 199, category: 'accessories', image: 'images/watch.jpeg' },
    { id: 6, name: 'Earphones', price: 89, category: 'electronics', image: 'images/earphones.jpeg' },
    { id: 7, name: 'airpods', price: 199, category: 'electronics', image: 'images/airpods.jpeg' },
    { id: 8, name: 'Shirt for men', price: 50, category: 'clothing', image: 'images/shirt.jpeg' },
    { id: 9, name: 'Shirt for women', price: 55, category: 'clothing', image: 'images/shirt2.jpeg' },
    { id: 10, name: 'Bracelet', price: 105, category: 'accessories', image: 'images/bracelet.jpeg' },
    { id: 11, name: 'Ring', price: 99, category: 'accessories', image: 'images/ring1.jpeg' },
    { id: 12, name: 'Ring', price: 98, category: 'accessories', image: 'images/ring2.jpeg' },
    { id: 13, name: 'Yellow Kurta Set', price: 129, category: 'clothing', image: 'images/Yellow Kurta set.jpeg' },
    { id: 14, name: 'Green Kurta Set', price: 149, category: 'clothing', image: 'images/green kurta set.jpeg' },
    { id: 15, name: 'LED TV', price: 499, category: 'electronics', image: 'images/led.jpeg' },
    { id: 16, name: 'Canon Camera', price: 459, category: 'electronics', image: 'images/camera.jpeg' },
    { id: 17, name: 'Pearl Chain', price: 69, category: 'accessories', image: 'images/chain1.jpeg' },
    { id: 18, name: 'A-shaped Chain', price: 25, category: 'accessories', image: 'images/A - Chain.jpeg' },

];

const productList = document.getElementById('product-list');
const filterButton = document.getElementById('filterButton');

function displayProducts(filteredProducts) {
    productList.innerHTML = '';
    filteredProducts.forEach(product => {
        const productEl = document.createElement('div');
        productEl.className = 'product';
        productEl.innerHTML = `
            <img src="${product.image}" alt="${product.name}" />
            <h2>${product.name}</h2>
            <p>$${product.price}</p>
            <button onclick="buyButton(${product.id})">Buy Now</button>
            <br>
            <button onclick="addToCart(${product.id})">Add to cart</button>
            <br>
            <button onclick="viewDetails(${product.id})">View Details</button>
            <br>
            
            
        `;
        productList.appendChild(productEl);
    });
}

function filterCategory(category) {
    const filteredProducts = category === 'all' ? products : products.filter(product => product.category === category);
    displayProducts(filteredProducts);
    
    document.querySelectorAll('header nav ul li a').forEach(link => {
        link.classList.remove('active');
        if (link.dataset.category === category) {
            link.classList.add('active');
        }
    });
}

function filterByPrice() {
    const minPrice = parseInt(document.getElementById('minPrice').value);
    const maxPrice = parseInt(document.getElementById('maxPrice').value);
    const filteredProducts = products.filter(product => {
        return (!minPrice || product.price >= minPrice) && (!maxPrice || product.price <= maxPrice);
    });
    displayProducts(filteredProducts);
}

function viewDetails(productId) {
    const product = products.find(p => p.id === productId);
    alert(`Product: ${product.name}\nPrice: $${product.price}`);
}

function buyButton(productId) {
    const product = products.find(p => p.id === productId);
    alert(`Proceed with the payment page for ${product.name}`);
}

function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    alert(`${product.name} added to cart`);   
}


// Event Listeners
filterButton.addEventListener('click', filterByPrice);
document.querySelectorAll('header nav ul li a').forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault();
        filterCategory(this.dataset.category);
    });
});

// Initial display
displayProducts(products);
