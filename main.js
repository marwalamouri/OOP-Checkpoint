class Product {
  constructor(name, quantity, price) {
    this.name = name;
    this.quantity = quantity;
    this.price = price;
    this.updateQuantity.bind(this);
    this.totalPrice = quantity * price;
  }
  updateQuantity(quantity) {
    this.quantity += quantity;
  }
}

class Cart {
  constructor() {
    this.cartItems = [];
  }
  addItems(product) {
    const alreadyInCart = myCart.checkIfItemsExist(product.name);
    if (alreadyInCart) {
      return product.updateQuantity(product.quantity);
    } else {
      return this.cartItems.push(product);
    }
  }
  checkIfItemsExist(name) {
    return this.cartItems.filter((item) => item.name === name)[0] !== undefined;
  }
  removeItem(name) {
    this.cartItems = [...this.cartItems].filter((item) => item.name !== name);
  }
  showShoppingCart() {
    console.log(this.cartItems);
  }
}
const product1 = new Product("PC", 5, 1800);
const product2 = new Product("phone", 3, 4800);
const product3 = new Product("TV", 1, 8500);
const myCart = new Cart();

myCart.addItems(product1);
myCart.addItems(product2);
myCart.addItems(product3);
console.log(myCart);
myCart.removeItem("PC");
console.log(myCart);
myCart.showShoppingCart();

product2.updateQuantity(3);
myCart.showShoppingCart();
