import ProductManager from "./productManager.js";


const env = async () => {
  const product = new ProductManager();

  
  await product.addProduct("producto prueba2", "Este es un producto prueba", 400, "Sin imagen", "abc123", 25);  
  
  let consulta = await product.getProducts();
  let prodId= await product.getProductsById(1);
  console.log(consulta);
  console.log(prodId);

  
};

env();