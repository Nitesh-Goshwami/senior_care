export const getCart = (req, res) => {
  // Get cart logic here
  res.json([]);
};

export const addToCart = (req, res) => {
  // Add to cart logic here
  res.json({ message: 'Item added to cart' });
};

export const removeFromCart = (req, res) => {
  // Remove from cart logic here
  res.json({ message: 'Item removed from cart' });
};
