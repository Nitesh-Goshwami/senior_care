export const getAllProducts = (req, res) => {
  // Get all products logic here
  res.json([]);
};

export const getProductById = (req, res) => {
  // Get product by ID logic here
  res.json({});
};

export const createProduct = (req, res) => {
  // Create product logic here
  res.json({ message: 'Product created' });
};

export const updateProduct = (req, res) => {
  // Update product logic here
  res.json({ message: 'Product updated' });
};

export const deleteProduct = (req, res) => {
  // Delete product logic here
  res.json({ message: 'Product deleted' });
};
