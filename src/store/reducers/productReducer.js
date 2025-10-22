const initialState = { products: [], filteredProducts: [] };

const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_PRODUCT':
            const newProducts = [...state.products, action.payload];
            return { ...state,
                     products: newProducts,
                     filteredProducts: newProducts };
        case 'DELETE_PRODUCT':
            const filteredListProducts = state.products.filter(p => p.name !== action.payload);
            return { ...state,
                     products: filteredListProducts,
                     filteredProducts: filteredListProducts };
        case 'SEARCH_PRODUCT':
            if (!action.payload) {
                return { ...state, filteredProducts: state.products };
            }
            const searchedProducts = state.products.filter(p => 
                p.name.toLowerCase().includes(action.payload.toLowerCase())
            );
            return { ...state, filteredProducts: searchedProducts };
        default:
            return state;
    }
};

export default productReducer;