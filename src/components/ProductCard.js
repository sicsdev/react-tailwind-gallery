import React from "react";

function ProductCard({ product, onAddToCart }) {
  return (
    <div className="bg-white rounded-lg shadow p-4 flex flex-col items-center">
      <img
        src={product.image}
        alt={product.title}
        className="w-full h-40 object-cover rounded mb-4"
      />
      <h2 className="text-lg font-semibold mb-2 text-center">{product.title}</h2>
      <p className="text-gray-700 mb-1">${product.price}</p>
      <p className="text-xs text-gray-500 mb-2">{product.category}</p>
      <p className="text-xs text-yellow-600 mb-4">Rating: {product.rating?.rate ?? "-"}</p>
      <button
        className="mt-auto bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
        onClick={() => onAddToCart(product.title)}
      >
        Add to Cart
      </button>
    </div>
  );
}

export default ProductCard; 