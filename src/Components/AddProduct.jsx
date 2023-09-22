import React, { useState } from "react";

function AddProduct({ onAddProduct }) {
  const [newProduct, setNewProduct] = useState({
    id: Math.floor(Math.random() * 1000),
    title: "",
    price: "",
    category: "",
    description: "",
    image: "",
  });
  const [error, setError] = useState("");
  const [isAddProductCardVisible, setIsAddProductCardVisible] = useState(true);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewProduct((prevProduct) => ({
      ...prevProduct,
      [name]: value,
    }));
  };

  const handleAddProduct = () => {
    if (
      !newProduct.title ||
      !newProduct.price ||
      !newProduct.category ||
      !newProduct.description ||
      !newProduct.image
    ) {
      alert.error("masukan data semuanya dengan lengkap");
      return;
    }

    onAddProduct(newProduct);
    setNewProduct({
      id: Math.floor(Math.random() * 1000), // id acak berikutnya
      title: "",
      price: "",
      category: "",
      description: "",
      image: "",
    });
    setError("");
    setIsAddProductCardVisible(false); // open and closec card

    // Tampilkan notifikasi bahwa produk berhasil ditambahkan
    console.log("Product ditambahkan :)", newProduct);
  };

  const handleCancel = () => {
    setNewProduct({
      id: Math.floor(Math.random() * 1000), // Bilangan acak berikutnya
      title: "",
      price: "",
      category: "",
      description: "",
      image: "",
    });
    setError("");
    setIsAddProductCardVisible(false); // Mengatur false = not visible
  };

  return (
    <div>
      {isAddProductCardVisible && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50 font-sans">
          <div className="bg-gray-800 w-1/3 p-4 rounded-lg text-center">
            <h2 className="text-2xl font-semibold mb-4 text-slate-500 ">
              Tambah Product
            </h2>
            <input
              type="text"
              placeholder="Image URL"
              name="image"
              value={newProduct.image}
              onChange={handleInputChange}
              className="w-full px-2 py-1 border rounded focus:outline-none focus:border-blue-500 mb-2"
            />
            <input
              type="text"
              placeholder="Title"
              name="title"
              value={newProduct.title}
              onChange={handleInputChange}
              className="w-full px-2 py-1 border rounded focus:outline-none focus:border-blue-500 mb-2"
            />
            <input
              type="text"
              placeholder="Price"
              name="price"
              value={newProduct.price}
              onChange={handleInputChange}
              className="w-full px-2 py-1 border rounded focus:outline-none focus:border-blue-500 mb-2"
            />
            <input
              type="text"
              placeholder="Category"
              name="category"
              value={newProduct.category}
              onChange={handleInputChange}
              className="w-full px-2 py-1 border rounded focus:outline-none focus:border-blue-500 mb-2"
            />
            <textarea
              placeholder="Description"
              name="description"
              value={newProduct.description}
              onChange={handleInputChange}
              className="w-full px-2 py-1 border rounded focus:outline-none focus:border-blue-500 mb-2"
            />
            {error && <p className="text-red-500 mb-2 text-start">{error}</p>}
            <div className="flex justify-end">
              <button
                onClick={handleAddProduct}
                className="bg-gray-600 hover:bg-gray-500 text-white font-semibold py-2 px-4 rounded"
              >
                Add Product
              </button>
              <button
                onClick={handleCancel}
                className="bg-gray-600 hover:bg-gray-500 text-white font-semibold py-2 px-4 ml-2 rounded"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default AddProduct;

// import React from "react";

// const AddProduct = () => {
//     function AddProduct({ onAddProduct }) {
//         const [newProduct, setNewProduct] = useState({
//           id: Math.floor(Math.random() * 1000),
//           title: "",
//           price: "",
//           category: "",
//           description: "",
//           image: "",
//         });
//         const [error, setError] = useState("");
//         const [isAddProductCardVisible, setIsAddProductCardVisible] = useState(true);

//         const handleInputChange = (e) => {
//           const { name, value } = e.target;
//           setNewProduct((prevProduct) => ({
//             ...prevProduct,
//             [name]: value,
//           }));
//         };

//         const handleAddProduct = () => {
//           if (!newProduct.title || !newProduct.price || !newProduct.category || !newProduct.description || !newProduct.image) {
//            console.error("masukan data semuanya dengan lengkap");
//             return;
//           }

//           onAddProduct(newProduct);
//           setNewProduct({
//             id: Math.floor(Math.random() * 1000), // id acak berikutnya
//             title: "",
//             price: "",
//             category: "",
//             description: "",
//             image: "",
//           });
//           setError("");
//           setIsAddProductCardVisible(false); // open and closec card

//           // Tampilkan notifikasi bahwa produk berhasil ditambahkan
//           console.log("Product ditambahkan :)", newProduct);
//         };

//         const handleCancel = () => {
//           setNewProduct({
//             id: Math.floor(Math.random() * 1000), // Bilangan acak berikutnya
//             title: "",
//             price: "",
//             category: "",
//             description: "",
//             image: "",
//           });
//           setError("");
//           setIsAddProductCardVisible(false); // Mengatur false = not visible
//         };

//   return (
//     <div>
//       {isAddProductCardVisible && (
//         <div className="max-w-md mx-auto bg-gray-800 rounded p-6 shadow-md py-4">
//           <h1 className="text-2xl font-semibold text-slate-500 mb-4">
//             <h1 className="text-2xl font-semibold text-slate-500 mb-4 text-left">
//               Mercii
//             </h1>
//             Tambah Product
//           </h1>
//           <form onSubmit={handleSubmit}>
//             <div className="mb-4">
//               <label
//                 htmlFor="productName"
//                 className="block text-slate-500 text-sm font-medium mb-2"
//               >
//                 Nama Product
//               </label>
//               <input
//                 type="text"
//                 id="productName"
//                 name="productName"
//                 value={newProduct.productName}
//                 onChange={handleInputChange}
//                 className="w-full border border-gray-300 rounded py-2 px-3 focus:outline-none focus:border-blue-500"
//               />
//             </div>
//             <div className="mb-4">
//               <label
//                 htmlFor="price"
//                 className="block text-slate-500 text-sm font-medium mb-2"
//               >
//                 Harga
//               </label>
//               <input
//                 type="text"
//                 id="price"
//                 name="price"
//                 value={newProduct.price}
//                 onChange={handleInputChange}
//                 className="w-full border border-gray-300 rounded py-2 px-3 focus:outline-none focus:border-blue-500"
//               />
//             </div>
//             <div className="mb-4">
//               <label
//                 htmlFor="imageUrl"
//                 className="block text-slate-500 text-sm font-medium mb-2"
//               >
//                 Gambar URL
//               </label>
//               <input
//                 type="text"
//                 id="imageUrl"
//                 name="imageUrl"
//                 value={newProduct.imageUrl}
//                 onChange={handleInputChange}
//                 className="w-full border border-gray-300 rounded py-2 px-3 focus:outline-none focus:border-blue-500"
//               />
//             </div>
//             <div className="mb-4">
//               <label
//                 htmlFor="category"
//                 className="block text-slate-500 text-sm font-medium mb-2"
//               >
//                 Kategori
//               </label>
//               <input
//                 type="text"
//                 id="category"
//                 name="category"
//                 value={newProduct.category}
//                 onChange={handleInputChange}
//                 className="w-full border border-gray-300 rounded py-2 px-3 focus:outline-none focus:border-blue-500"
//               />
//             </div>
//             <div className="mb-4">
//               <label
//                 htmlFor="category"
//                 className="block text-slate-500 text-sm font-medium mb-2"
//               >
//                 Deskripsi
//               </label>
//               <input
//                 type="text"
//                 id="description"
//                 name="description"
//                 value={newProduct.description}
//                 onChange={ handleInputChange}
//                 className="w-full border border-gray-300 rounded py-2 px-3 focus:outline-none focus:border-blue-500"
//               />
//             </div>
//             {error && <p className="text-red-500 mb-2 text-start">{error}</p>}
//             <div className="flex justify-between">
//               <div className="mb-4">
//                 <button
//                   onClick={handleAddProduct}
//                   className="bg-gray-900 text-slate-500 py-2 px-4 rounded hover:bg-white hover:text-gray-900"
//                 >
//                   Simpan
//                 </button>
//               </div>
//               <div>
//                 <button
//                   onClick={handleCancel}
//                   className="bg-gray-900 text-slate-500 py-2 px-4 rounded hover:bg-white hover:text-gray-900"
//                 >
//                   Kembali
//                 </button>
//               </div>
//             </div>
//           </form>
//         </div>
//       )}
//     </div>
//   );
// };

// export default AddProduct;
