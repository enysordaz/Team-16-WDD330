import { setLocalStorage, getParam } from './utils.mjs';
import ProductData from './ProductData.mjs';

class ProductDetails {
    constructor() {
        this.dataSource = new ProductData('tents');
        this.productId = getParam('product');
    }

    async init() {
        if (this.productId) {
            const product = await this.dataSource.findProductById(this.productId);
            if (product) {
                this.renderProductDetails(product);
                this.addEventListeners(product);
            }
        }
    }

    // Render product details into the DOM
    renderProductDetails(product) {
        const productContainer = document.querySelector('#product-details');
        if (productContainer) {
            productContainer.innerHTML = `
                <h2>${product.name}</h2>
                <img src="${product.image}" alt="${product.name}">
                <p>${product.description}</p>
                <p>Price: $${product.price}</p>
                <button id="add-to-cart">Add to Cart</button>
            `;
        }
    }

    // Add event listeners to the elements, including the 'Add to Cart' button
    addEventListeners(product) {
        const addToCartButton = document.querySelector('#add-to-cart');
        if (addToCartButton) {
            addToCartButton.addEventListener('click', () => this.addProductToCart(product));
        }
    }

    // Add product to the cart (stored in localStorage)
    addProductToCart(product) {
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        cart.push(product);
        setLocalStorage('cart', cart);
        alert(`${product.name} has been added to your cart!`);
    }
}

export default ProductDetails;
