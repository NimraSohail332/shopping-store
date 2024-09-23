const products = [
    {
        name: "Stylish Sneakers",
        price: 49.99,
        image: "https://via.placeholder.com/250x150?text=Stylish+Sneakers"
    },
    {
        name: "Leather Handbag",
        price: 89.99,
        image: "https://via.placeholder.com/250x150?text=Leather+Handbag"
    },
    {
        name: "Smart Watch",
        price: 199.99,
        image: "https://via.placeholder.com/250x150?text=Smart+Watch"
    },
    {
        name: "Classic Sunglasses",
        price: 29.99,
        image: "https://via.placeholder.com/250x150?text=Classic+Sunglasses"
    },
    {
        name: "Backpack",
        price: 39.99,
        image: "https://via.placeholder.com/250x150?text=Backpack"
    }
];

function displayProducts() {
    const productGrid = document.getElementById('product-grid');
    
    productGrid.innerHTML = ''; // Clear existing content

    products.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.classList.add('product');
        
        productDiv.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>$${product.price.toFixed(2)}</p>
            <button onclick="addToCart('${product.name}')">Add to Cart</button>
        `;
        
        productGrid.appendChild(productDiv);
    });
}

function addToCart(productName) {
    alert(`${productName} has been added to your cart!`);
}

function showSection(sectionId) {
    // Hide all sections
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.style.display = 'none';
    });

    // Show the selected section
    const selectedSection = document.getElementById(sectionId);
    selectedSection.style.display = 'block';

    // If products section is selected, display products
    if (sectionId === 'products') {
        displayProducts();
    }
}

// Show products by default on page load
document.addEventListener('DOMContentLoaded', () => {
    showSection('products');
});
