import {EventEmitter} from "events";
import dispatcher from "../dispatcher";

class CategoryStore extends EventEmitter {
    constructor() {
        super();
        this.category = [
            {
                id: "Phone",
                name: "Phone",
               
            },
            {
                id: "Laptop",
                name: "Laptop",
                
            },
            {
                id: "Tablet",
                name: "Tablet",
                
            }, 
            {
                id: "PC",
                name: "PC",
                
            }, 
            {
                id: "Monitor",
                name: "Monitor",
                
            }
        ]
    }

    createCategory(name) {
        const id = name;
        this.category.push({
            id,
            name,
            
        });
         
        this.emit("change");
         

    }
   editCategory(id) {
        
    }
    delCategory(id) {
        let del = this.category.map((i)=> i.id).indexOf(id);
        this.category.splice(del, 1);
        this.emit("change");
      console.log("del",del)

    }
    

    getAll() {
        return this.category;
    }

    handleAction(action) {
        switch (action.type){
            case "CREATE_CATEGORY": {
                this.createCategory(action.name);
                break;

            }
            
            case "DEL_CATEGORY": {
                this.delCategory(action.id);
                break;
            }
            case "EDIT_CATEGORY": {
                this.editCategory(action.id);
                break;
            }
        }
    }
}

const categoryStore = new CategoryStore;

dispatcher.register(categoryStore.handleAction.bind(categoryStore));

export default categoryStore;