const productReducer = (state = null,action) => {
    switch(action.type){
        case "GET_ALL_PRODUCT":
            return state;
        case "SET_ALL_PRODUCT":
            return action.product;
        default:
            return state;


    }
};

export default productReducer;