// Sample product data array
const products = [
    {
      id: 1,
      name: "Smartphone",
      category: "electronics",
      price: 299,
      image: "https://via.placeholder.com/300x200?text=Smartphone",
      description: "A high-quality smartphone with amazing features."
    },
    {
        id: 2,
        name: "Laptop",
        category: "electronics",
        price: 899,
        image: "https://via.placeholder.com/300x200?text=Laptop",
        description: "A sleek laptop with powerful performance."
      },
      {
        id: 3,
        name: "T-Shirt",
        category: "fashion",
        price: 19,
        image: "https://via.placeholder.com/300x200?text=T-Shirt",
        description: "A comfortable and stylish T-shirt."
      },
      {
        id: 4,
        name: "Sneakers",
        category: "fashion",
        price: 59,
        image: "https://via.placeholder.com/300x200?text=Sneakers",
        description: "Trendy sneakers for everyday wear."
      },
      {
        id: 5,
        name: "Sofa",
        category: "home",
        price: 499,
        image: "https://via.placeholder.com/300x200?text=Sofa",
        description: "A modern sofa to complement your living room."
      },
      {
        id: 6,
        name: "Dining Table",
        category: "home",
        price: 299,
        image: "https://via.placeholder.com/300x200?text=Dining+Table",
        description: "A stylish dining table for family gatherings."
      },
      {
        id: 7,
        name: "Action Figure",
        category: "toys",
        price: 25,
        image: "https://via.placeholder.com/300x200?text=Action+Figure",
        description: "A collectible action figure for fans."
      },
      {
        id: 8,
        name: "Board Game",
        category: "toys",
        price: 35,
        image: "https://via.placeholder.com/300x200?text=Board+Game",
        description: "A fun board game for all ages."
      }
    ];

// Get DOM elements
const productContainer = document.getElementById('productContainer');
const searchInput = document.getElementById('searchInput');
const sortSelect = document.getElementById('sortSelect');
const categorySelect = document.getElementById('categorySelect');

// Render products
function renderProducts(list) {
    productContainer.innerHTML = "";
    if(list.length === 0) {
      productContainer.innerHTML = "<p>No products found.</p>";
      return;
    }
    list.forEach(product => {
      const productCard = document.createElement('div');
      productCard.classList.add('product-card');
      productCard.innerHTML = `
      <img src="${product.image}" alt="${product.name}">
      <div class="product-details">
        <h3>${product.name}</h3>
        <p class="price">$${product.price}</p>
        <p>${product.description}</p>
        <button class="add-to-cart" data-id="${product.id}">Add to Cart</button>
      </div>
    `;
    productContainer.appendChild(productCard);
  });
}