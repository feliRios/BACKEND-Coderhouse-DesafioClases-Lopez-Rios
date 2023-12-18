// Consigna: realizar una clase “ProductManager” que gestione un conjunto de productos

class ProductManager {
  constructor(){
    this.products = [];
    this.productId = 1;
  }

  getProducts() {
    return this.products;
  }

  addProduct(title, description, price, thumbnail, code, stock) {
    if (!title || !description || !price || !thumbnail || !code || !stock){
      // Este condicional valida que todos los campos hayan sido completados
      console.log("Todos los campos son obligatorios.");
    } else {
      let bandera = true;
      do {
        // Este bucle cumple la funcion de incrementar automaticamente el ID del producto en caso
        // de que encuentre un repetido 
        if (!this.products.some(prod => prod.id === this.productId)) {
          // Este condicional valida que no exista ningun producto con el mismo ID que el generado
          bandera = false;
          if (!this.products.some(prod => prod.code === code)){
            // Este condicional valida que no exista ningun producto con el mismo codigo que el
            const product = { id: this.productId, title: title, description: description, price: price, thumbnail: thumbnail, code: code, stock: stock };
            this.products.push(product);
          } else {
            console.log(`Error: ya existe un producto con el codigo ${code}`);
          }
        } else {
          this.productId += 1;
        }
      } while (bandera)
    }
  }

  getProductById(id) {
    const element = this.products.find(e => e.id === id);

    if (element){
      return element;
    } else {
      return `No existe ningun producto con el ID ${id}`
    }
  }
}
