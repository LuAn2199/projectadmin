import {EventEmitter} from "events";
import dispatcher from "../dispatcher";

class ProductStore extends EventEmitter {
    constructor() {
        super();
        this.product = [{order_No:"#VI1234",product_qty:"1",name:"HTC One", Date:"Phone",region:"HTC",status:"" },{order_No:"#VI1235",product_qty:"2",name:"iPhone", Date:"Phone",region:"Apple",status:"" },{order_No:"#VI1236", product_qty:"1",name:"Galaxy S8", Date:"Phone",region:"SamSung",status:"" },{order_No:"#MYS1234",product_qty:"1",name:"Dell Vostro", Date:"Laptop",region:"Dell",status:"" },{order_No:"#MYS1235",product_qty:"3",name:"Macbook", Date:"Laptop",region:"Apple",status:"" },{order_No:"#MYS1236",product_qty:"2",name:"iPad", Date:"Tablet",region:"Apple",status:"" },{order_No:"#SY1234" ,product_qty:"2",name:"Macbook Air", Date:"Laptop",region:"Apple",status:"" },{order_No:"#SY1235",product_qty:"2",name:"SamSung J7", Date:"Phone",region:"SamSung",status:"" }]
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