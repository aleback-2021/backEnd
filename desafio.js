class ProductManager{
    constructor(){
        this.elements=[];

    }
    getProducts = () => {
        console.log(this.elements);
        return;
      };

    getProductsById=(idProduct)=>{
        const productId=this.elements.find((product)=>product.id===idProduct);
        if(!productId){
            console.log("Product not found");
            return;
        }
        else{
            console.log('el producto existe codigo :'+productId.description+'');
        }
    }  

    addProducts=(title,description,price,thumbnail,code,stock)=>{
        
       
        const product=
        {
            id: this.elements.length+1,
            title,
            description,
            price,
            thumbnail,
            code,
            stock
        }
        
       
        const codeval= this.elements.find((product)=>product.code===code);
        if(!codeval){
        this.elements.push(product);
        console.log("El producto fue agregado.");
        }
        else{
            console.log("El codigo producto ya existe.");
        }

    }

   

}
const productManager = new ProductManager();

productManager.addProducts('Pan','Pan por kg',500,'sin imagen','a1',36);
productManager.addProducts('Manteca','Manteca 150gr',300,'sin imagen','a2',25);
productManager.addProducts('Arroz','Arroz fino largo',250,'sin imagen','a1',36);
productManager.getProductsById(1);
productManager.getProductsById(5);
productManager.getProducts();
