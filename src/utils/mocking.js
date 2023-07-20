function generateMockProducts(quantity) {
  const products = [];

  for (let i = 1; i <= quantity; i++) {
    products.push({
      _id: `product-${i}`,
      name: `Product ${i}`,
      price: Math.random() * 100,
    });
  }

  return products;
}

module.exports = { generateMockProducts };
