import React, { useState, useEffect } from "react";

function EditProduct({ initialProduct, onSaveEdit, onCancelEdit }) {
  const [editedProduct, setEditedProduct] = useState(initialProduct);
  const [error, setError] = useState("");
  const [isSaveDisabled, setIsSaveDisabled] = useState(true);

  useEffect(() => {
    // Memeriksa apakah semua input telah diisi
    const isFormValid =
      editedProduct.title &&
      editedProduct.price &&
      editedProduct.category &&
      editedProduct.description &&
      editedProduct.image;

    setIsSaveDisabled(!isFormValid);
  }, [editedProduct]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedProduct((prevProduct) => ({
      ...prevProduct,
      [name]: value,
    }));
  };

  const handleSaveEdit = () => {
    onSaveEdit(editedProduct);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50 font-sans">
      <div className="bg-gray-800 w-1/3 p-4 rounded-lg text-center">
        <h2 className="text-2xl font-semibold mb-4 text-slate-500">
          Edit Product
        </h2>
        <input
          type="text"
          placeholder="Image URL"
          name="image"
          value={editedProduct.image}
          onChange={handleInputChange}
          className="w-full px-2 py-1 border rounded focus:outline-none focus:border-blue-500 mb-2"
        />
        <input
          type="text"
          placeholder="Title"
          name="title"
          value={editedProduct.title}
          onChange={handleInputChange}
          className="w-full px-2 py-1 border rounded focus:outline-none focus:border-blue-500 mb-2"
        />
        <input
          type="text"
          placeholder="Price"
          name="price"
          value={editedProduct.price}
          onChange={handleInputChange}
          className="w-full px-2 py-1 border rounded focus:outline-none focus:border-blue-500 mb-2"
        />
        <input
          type="text"
          placeholder="Category"
          name="category"
          value={editedProduct.category}
          onChange={handleInputChange}
          className="w-full px-2 py-1 border rounded focus:outline-none focus:border-blue-500 mb-2"
        />
        <textarea
          placeholder="Description"
          name="description"
          value={editedProduct.description}
          onChange={handleInputChange}
          className="w-full px-2 py-1 border rounded focus:outline-none focus:border-blue-500 mb-2"
        />
        {error && <p className="text-red-500">{error}</p>}
        <div className="flex justify-end">
          <button
            onClick={handleSaveEdit}
            className={`${
              isSaveDisabled
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-gray-500 hover:bg-gray-600"
            } text-white font-semibold py-2 px-4 rounded`}
            disabled={isSaveDisabled}
          >
            Save
          </button>
          <button
            onClick={onCancelEdit}
            className="bg-gray-400 hover:bg-gray-500 text-white font-semibold py-2 px-4 ml-2 rounded"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

export default EditProduct;
