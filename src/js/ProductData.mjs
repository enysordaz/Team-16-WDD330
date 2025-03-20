function convertToJson(res) {
  if (res.ok) {
    return res.json();
  } else {
    throw new Error("Bad Response");
  }
}

export default class ProductData {
  constructor(category) {
    this.category = category;
    this.path = `../json/${this.category}.json`;
  }

  // Fetch data from the JSON file corresponding to the category
  getData() {
    return fetch(this.path)
      .then(convertToJson)
      .then((data) => data);
  }

  // This function returns a product based on its ID
  async findProductById(productId) {
    // Example data, in a real use case, this could be an API call
    const products = [
      { id: '1', name: 'Tent', image: 'tent.jpg', description: 'A large tent for camping.', price: 100, category: 'Tents' },
      { id: '2', name: 'Sleeping Bag', image: 'sleeping_bag.jpg', description: 'A warm sleeping bag.', price: 50, category: 'Sleeping Bags' },
      
    ];

    return products.find((product) => product.id === productId);
  }
}
