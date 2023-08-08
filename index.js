import ProductManager from "./productManager.js";


const env = async () => {
  const product = new ProductManager();

  
  await product.addProduct("producto prueba12", "Este es un producto prueba", 350, "Sin imagen", "abc123", 25);
  await product.getProductsById(10)
  let consulta = await product.getProducts();
  console.log(consulta);

  await product.validarUsuario("MGFonseca", "123");
};

env();