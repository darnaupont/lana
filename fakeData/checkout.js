class Checkout {
  constructor(productsList) {
    this.products = productsList;
    this.test = 0;
  }

  add(id) {
    const hasProduct = this.products[id];
    console.log(hasProduct);
    if (hasProduct) {
      hasProduct.add(1);
    }
  }

  remove(id) {
    const hasProduct = this.products[id];
    if (hasProduct) {
      hasProduct.remove(1);
    }
  }

  calcTotal(valueId) {
    // since we have the price with coin units, we parseFloat them
    const totalCart = Object.values(this.products)
      .reduce((acc, curr) => acc + parseFloat(curr[valueId]), 0);
    return totalCart;
  }

  basePrice() {
    return `${this.calcTotal('basePrice')}€`;
  }

  discount() {
    return `${this.calcTotal('discount')}€`;
  }

  total() {
    return `${this.calcTotal('totalPrice')}€`;
  }

  get items() {
    return this.calcTotal('units');
  }
}
export default Checkout;
