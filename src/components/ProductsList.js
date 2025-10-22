import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addProduct, deleteProduct, searchProduct } from '../store/actions/productActions';

const ProductsList = () => {
    const { filteredProducts } = useSelector((state) => state);
    const dispatch = useDispatch();

    const [productName, setProductName] = useState('');
    const [quantity, setQuantity] = useState('');
    const [searchProd, setSearchProduct] = useState('');

    const handleAddProduct = () => {
        if (productName && quantity) {
            const newProduct = {
                name: productName,
                quantity: parseInt(quantity)
            };
            dispatch(addProduct(newProduct));
            setProductName('');
            setQuantity('');
        }
    };

    const handleDeleteProduct = (productName) => {
        dispatch(deleteProduct(productName));
    };

    const handleSearchProduct = () => {
        dispatch(searchProduct(searchProd));
    };

    return (
        <div>
            <fieldset>
                <input type="text"
                    placeholder="Product name"
                    value={productName}
                    onChange={(product) => setProductName(product.target.value)}
                    required
                />
                <input type="number"
                    placeholder="Quantity"
                    value={quantity}
                    onChange={(product) => setQuantity(product.target.value)}
                    required
                />
                <button onClick={handleAddProduct}>Add Product in list</button>
            </fieldset>
            <fieldset>
                <input type="text"
                    placeholder="Search item"
                    value={searchProd}
                    onChange={(product) =>setSearchProduct(product.target.value)}
                />
                <button onClick={handleSearchProduct}>Search Product in list</button>
            </fieldset>

            <ul>
                {filteredProducts.map((product) => (
                    <li key={product.name}>
                        {product.name} - Кількість: {product.quantity}
                        <br></br>
                        <button onClick={() => handleDeleteProduct(product.name)}>
                            Delete Product in list
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ProductsList;