import React from "react";

function ProductCard({ product, onAddToCart }) {
  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow transform hover:scale-105 duration-200 p-4 flex flex-col items-center border border-gray-100">
      <div className="relative w-full flex justify-center">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-48 object-contain rounded-t mb-3 bg-gray-50"
        />
        <span className="absolute top-2 left-2 bg-blue-100 text-blue-700 text-xs font-semibold px-2 py-1 rounded-full shadow-sm">
          {product.category}
        </span>
      </div>
      <h2 className="text-base font-bold mb-1 text-center line-clamp-2 min-h-[48px]">{product.title}</h2>
      <p className="text-lg font-semibold text-gray-800 mb-1">${product.price}</p>
      <div className="flex items-center mb-4">
        <svg className="w-4 h-4 text-yellow-400 mr-1" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.175c.969 0 1.371 1.24.588 1.81l-3.38 2.455a1 1 0 00-.364 1.118l1.287 3.966c.3.922-.755 1.688-1.54 1.118l-3.38-2.454a1 1 0 00-1.175 0l-3.38 2.454c-.784.57-1.838-.196-1.54-1.118l1.287-3.966a1 1 0 00-.364-1.118L2.05 9.394c-.783-.57-.38-1.81.588-1.81h4.175a1 1 0 00.95-.69l1.286-3.967z"/></svg>
        <span className="text-xs text-gray-600 font-medium">{product.rating?.rate ?? "-"} ({product.rating?.count ?? 0})</span>
      </div>
      <button
        className="mt-auto bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold shadow hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 transition"
        onClick={() => onAddToCart(product.title)}
      >
        Add to Cart
      </button>
    </div>
  );
}

export default ProductCard; 