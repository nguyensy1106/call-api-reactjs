import * as Types from './../contants/ActionTypes';

var initalState = [];

var findIndex = (prodcuts, id) => {
    var result = -1;
    prodcuts.forEach((product, index) => {
        if (product.id === id) {
            result = index;
        }
    });
    return result;
}
const products = (state = initalState, action) => {
    var { id, product} = action;
    var index = -1;
    switch (action.type) {
        case Types.FETCH_PRODUCTS:
            state = action.products;
            return [...state];
        case Types.DELETE_PRODUCT:
            index = findIndex(state, id)
            state.splice(index, 1);
            return [...state];
        case Types.ADD_PRODUCT:
            state.push(product);
            return [...state];
        case Types.UPDATE_PRODUCT:
            index = findIndex(state, product.id);
            state[index] = product;
            return [...state];
        default: return [...state];
    }
}

export default products;