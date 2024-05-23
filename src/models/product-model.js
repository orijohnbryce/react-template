export default class ProductModel  {
    constructor(id, name, price, stock, imageUrl){
        this.id = id
        this.name = name
        this.price = price
        this.stock = stock
        this.imageUrl = imageUrl        
    }    

    nicePrint(){
       console.log(`Product: name- ${this.name}. price: ${this.price}`); 
    }
}