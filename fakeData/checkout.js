class Checkout {
  constructor(productsList) {
    this.products = productsList;
  }

  add(id) {
    const product = this.products[id];
    if (product) {
      product.add(1);
    }
  }

  remove(id, units) {
    const product = this.products[id];
    if (product) {
      product.remove(units);
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
