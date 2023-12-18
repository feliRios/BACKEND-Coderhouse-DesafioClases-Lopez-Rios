// Consigna: realizar una clase “ProductManager” que gestione un conjunto de productos

class ProductManager {
  constructor(){
    this.products = [];
  }

  getProducts() {
    return this.products;
  }

  addProduct(title, description, price, thumbnail, code, stock) {
    const randomId = Math.round(Math.random() * 1000000);
    if (!title || !description || !price || !thumbnail || !code || !stock){
      // Este condicional valida que todos los campos hayan sido completados
      console.log("Todos los campos son obligatorios.");
    } else {
      let bandera = false;
      do {
        // Este bucle cumple la funcion de volver a generar un ID nuevo en caso de que ya exista
        // un producto con el mismo ID
        if (!this.products.some(prod => prod.id === randomId)) {
          // Este condicional valida que no exista ningun producto con el mismo ID que el generado
          if (!this.products.some(prod => prod.code === code)){
            // Este condicional valida que no exista ningun producto con el mismo codigo que el
            const product = { id: randomId, title: title, description: description, price: price, thumbnail: thumbnail, code: code, stock: stock };
            this.products.push(product);
          } else {
            console.log(`Error: ya existe un producto con el codigo ${code}`);
          }
        } else {
          // La variable "bandera" actua como un disparador que indica si la operacion
          // fue realizada con exito, para salir del bucle
          bandera = true;
        }
      } while(bandera);
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

let inst = new ProductManager();

inst.addProduct("remera", "una remera", 999, "imagen.com", 987, 4);
inst.addProduct("pantalon", "un pantalon", 999, "imagen.com", 986, 4);


console.log(inst);

console.log(inst.getProductById(inst.products[0].id));