export const addProduct = (product) => ({
    type: 'ADD_PRODUCT',
    payload: product,
});
export const deleteProduct = (productName) => ({
    type: 'DELETE_PRODUCT',
    payload: productName,
});
export const searchProduct = (searchProduct) => ({
    type: 'SEARCH_PRODUCT',
    payload: searchProduct,
});