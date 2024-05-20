class ProductModel{
    
    constructor(productObject) {
        this.id = productObject.id
        this.name = productObject.name
        this.price = productObject.price
        this.stock = productObject.stock
        this.imageUrl = productObject.imageUrl
    }
}

export default ProductModel