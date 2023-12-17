// Consigna: realizar una clase “ProductManager” que gestione un conjunto de productos

class ProductManager {
  constructor(){
    this.products = [];
  }

  getProducts() {
    return this.products;
  }

  addProduct(title, description, price, thumbnail, code, stock) {
    if (!title || !description || !price || !thumbnail || !code || !stock){
      // Este condicional valida que toods los campos hayan sido completados
      console.log("Todos los campos son obligatorios.");
    } else {
      if (!this.products.some(prod => prod.code === code)) {
        // Este condicional valida que no exista ningun producto con codigo
        // repetido
        const product = { title: title, description: description, price: price, thumbnail: thumbnail, code: code, stock: stock };
        this.products.push(product);
      } else {
        console.log(`Error: ya existe un producto registrado con codigo ${code}`);
      }
    }
  }

  getProductById(code) {
    const element = this.products.find(e => e.code === code);

    if (element){
      return element;
    } else {
      return `No existe ningun producto con codigo ${code}`
    }
  }
}
