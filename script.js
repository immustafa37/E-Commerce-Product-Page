// Sample product data array
const products = [
    {
      id: 1,
      name: "Smartphone",
      category: "electronics",
      price: 299,
      image: "images/smartphone.jpg",
      description: "A high-quality smartphone with amazing features."
    },
    {
      id: 2,
      name: "Laptop",
      category: "electronics",
      price: 899,
      image: "images/laptop.jpg",
      description: "A sleek laptop with powerful performance."
    },
    {
      id: 3,
      name: "T-Shirt",
      category: "fashion",
      price: 19,
      image: "images/tshirt.jpg",
      description: "A comfortable and stylish T-shirt."
    },
    {
      id: 4,
      name: "Sneakers",
      category: "fashion",
      price: 59,
      image: "images/sneakers.jpg",
      description: "Trendy sneakers for everyday wear."
    },
    {
      id: 5,
      name: "Sofa",
      category: "home",
      price: 499,
      image: "images/sofa.jpg",
      description: "A modern sofa to complement your living room."
    },
    {
      id: 6,
      name: "Dining Table",
      category: "home",
      price: 299,
      image: "images/dining_table.jpg",
      description: "A stylish dining table for family gatherings."
    },
    {
      id: 7,
      name: "Action Figure",
      category: "toys",
      price: 25,
      image: "images/action_figure.jpg",
      description: "A collectible action figure for fans."
    },
    {
      id: 8,
      name: "Board Game",
      category: "toys",
      price: 35,
      image: "images/board_game.jpg",
      description: "A fun board game for all ages."
    }
];
  
  // Get DOM elements
  const productContainer = document.getElementById('productContainer');
  const searchInput = document.getElementById('searchInput');
  const sortSelect = document.getElementById('sortSelect');
  const categorySelect = document.getElementById('categorySelect');
  const cartCountElement = document.getElementById('cartCount');
  
  // Initialize cart count
  let cartCount = 0;
  
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
  
  // Filter products based on search and category
  function filterProducts() {
    let filtered = [...products];
    const searchTerm = searchInput.value.trim().toLowerCase();
    const selectedCategory = categorySelect.value;
  
    if(searchTerm) {
      filtered = filtered.filter(product => 
        product.name.toLowerCase().includes(searchTerm) ||
        product.description.toLowerCase().includes(searchTerm)
      );
    }
  
    if(selectedCategory !== "all") {
      filtered = filtered.filter(product => product.category === selectedCategory);
    }
  
    return filtered;
  }
  
  // Sort products based on sort select value
  function sortProducts(list) {
    const sortValue = sortSelect.value;
    if(sortValue === "price-asc") {
      list.sort((a, b) => a.price - b.price);
    } else if(sortValue === "price-desc") {
      list.sort((a, b) => b.price - a.price);
    } else if(sortValue === "name-asc") {
      list.sort((a, b) => a.name.localeCompare(b.name));
    } else if(sortValue === "name-desc") {
      list.sort((a, b) => b.name.localeCompare(a.name));
    }
    return list;
  }
  
  // Combined function to update product display
  function updateProducts() {
    let filteredProducts = filterProducts();
    let sortedProducts = sortProducts(filteredProducts);
    renderProducts(sortedProducts);
  }
  
  // Event Listeners
  searchInput.addEventListener('input', updateProducts);
  sortSelect.addEventListener('change', updateProducts);
  categorySelect.addEventListener('change', updateProducts);
  
  // Initial render
  renderProducts(products);
  
  // Simple add-to-cart simulation with cart count update
  document.addEventListener('click', function(e) {
    if(e.target && e.target.classList.contains('add-to-cart')) {
      const productId = e.target.getAttribute('data-id');
      const product = products.find(p => p.id == productId);
      cartCount++;
      cartCountElement.textContent = cartCount;
      alert(`"${product.name}" has been added to your cart! Total items: ${cartCount}`);
    }
  });  