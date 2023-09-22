import React, { useState, useEffect } from "react";

const ProductTable = ({ products, onEditClick, onRemoveClick }) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full">
        <thead>
          <tr>
            <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
              Nama Produk
            </th>
            <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
              Gambar Produk
            </th>
            <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
              Kategori Produk
            </th>
            <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
              Harga Produk
            </th>
            <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
              Deskripsi Produk
            </th>
            <th className="px-6 py-3 bg-gray-50"></th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {products.map((product) => (
            <tr key={product.id}>
              <td className="px-6 py-4 whitespace-no-wrap">{product.title}</td>
              <td className="px-6 py-4 whitespace-no-wrap">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-16 h-16 object-cover"
                />
              </td>
              <td className="px-6 py-4 whitespace-no-wrap">
                {product.category}
              </td>
              <td className="px-6 py-4 whitespace-no-wrap">${product.price}</td>
              <td className="px-6 py-4 whitespace-no-wrap">
                {product.description}
              </td>
              <td className="px-6 py-4 whitespace-no-wrap text-right text-sm leading-5 font-medium">
                <button
                  onClick={() => onEditClick(product.id)}
                  className="text-indigo-600 hover:text-indigo-900 focus:outline-none focus:underline"
                >
                  Edit
                </button>
                <button
                  onClick={() => onRemoveClick(product.id)}
                  className="ml-4 text-red-600 hover:text-red-900 focus:outline-none focus:underline"
                >
                  Hapus
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Mengambil data produk dari API
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  const handleRemoveClick = (productId) => {
    // Menghapus produk menggunakan API DELETE
    fetch(`https://fakestoreapi.com/users/${productId}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        // Menghapus produk dari state
        setProducts(products.filter((product) => product.id !== productId));
      })
      .catch((error) => {
        console.error("Error deleting product:", error);
      });
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Daftar Produk</h1>
      <ProductTable
        products={products}
        onRemoveClick={handleRemoveClick}
        onEditClick={(productId) => {
          // Fungsi edit di sini
          console.log(`Edit produk dengan ID: ${productId}`);
        }}
      />
    </div>
  );
}

export default App;
