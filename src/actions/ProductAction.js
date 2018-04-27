import dispatcher from "../dispatcher";

export function createProduct(name,category,brand) {
    dispatcher.dispatch({
        type: "CREATE_PRODUCT",
        name,
        category,
        brand
    });

}

export function delProduct(id) {
    dispatcher.dispatch({
        type: "DEL_PRODUCT",
        id
    });
    
}
export function editProduct(id) {
    dispatcher.dispatch({
        type: "edit_PRODUCT",
        id
    });
    
}