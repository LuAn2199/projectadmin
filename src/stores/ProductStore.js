import {EventEmitter} from "events";
import dispatcher from "../dispatcher";

class ProductStore extends EventEmitter {
    constructor() {
        super();
        this.product = [{id:"HTC One",thumb:"",name:"HTC One", category:"Phone",brand:"HTC" },{id:"iPhone",thumb:"",name:"iPhone", category:"Phone",brand:"Apple"},{id:"Galaxy S8", thumb:"",name:"Galaxy S8", category:"Phone",brand:"SamSung"},{id:"Dell Vostro",thumb:"",name:"Dell Vostro", category:"Laptop",brand:"Dell"},{id:"Macbook",thumb:"",name:"Macbook", category:"Laptop",brand:"Apple"},{id:"iPad",thumb:"",name:"iPad", category:"Tablet",brand:"Apple"},{id:"Macbook Air" ,thumb:"",name:"Macbook Air", category:"Laptop",brand:"Apple"},{id:"SamSung J7",thumb:"",name:"SamSung J7", category:"Phone",brand:"SamSung"}]
    }

    createProduct(name,category,brand) {
        const id = name;
        const thumb="";
        this.product.push({
            id,
            thumb,
            name,
            category,
            brand
            
        });
        
        this.emit("change");

    }
    delProduct(id){
        let dele = this.product.map((i)=> i.id).indexOf(id);
        this.product.splice(dele, 1);
        this.emit("change");
    
       
    }

    getAll() {
        return this.product;
    }

    handleAction(action) {
        switch (action.type){
            case "CREATE_PRODUCT": {
                this.createProduct(action.name,action.category,action.brand);
                break;
            }
            case "DEL_PRODUCT": {
                this.delProduct(action.id);
                break;
            }
        }
    }
}

const productStore = new ProductStore;

dispatcher.register(productStore.handleAction.bind(productStore));

export default productStore;