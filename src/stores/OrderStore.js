import {EventEmitter} from "events";
import dispatcher from "../dispatcher";

class ProductStore extends EventEmitter {
    constructor() {
        super();
        this.product = [{order_No:"HTC One",product_qty:"",name:"HTC One", Date:"Phone",region:"HTC",status:"" },{order_No:"iPhone",product_qty:"",name:"iPhone", Date:"Phone",region:"Apple",status:"" },{order_No:"Galaxy S8", product_qty:"",name:"Galaxy S8", Date:"Phone",region:"SamSung",status:"" },{order_No:"Dell Vostro",product_qty:"",name:"Dell Vostro", Date:"Laptop",region:"Dell",status:"" },{order_No:"Macbook",product_qty:"",name:"Macbook", Date:"Laptop",region:"Apple",status:"" },{order_No:"iPad",product_qty:"",name:"iPad", Date:"Tablet",region:"Apple",status:"" },{order_No:"Macbook Air" ,product_qty:"",name:"Macbook Air", Date:"Laptop",region:"Apple",status:"" },{order_No:"SamSung J7",product_qty:"",name:"SamSung J7", Date:"Phone",region:"SamSung",status:"" }]
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