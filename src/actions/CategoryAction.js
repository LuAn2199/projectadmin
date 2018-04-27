import dispatcher from "../dispatcher";

export function createCategory(name) {
    dispatcher.dispatch({
        type: "CREATE_CATEGORY",
        name
    });

}

export function delCategory(id) {
    dispatcher.dispatch({
        type: "DEL_CATEGORY",
        id
    });
    
}
export function editCategory(id) {
    dispatcher.dispatch({
        type: "EDIT_CATEGORY",
        id
    });
    
}