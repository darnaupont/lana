class Checkout {
  constructor(productsList) {
    this.products = productsList;
  }

  // Since we have a cart, i think its better to have
  // add and remove but its easy to update
  add(id, units) {
    const product = this.products[id];
    if (product) {
      product.add(units || 1);
    }
  }

  remove(id, units) {
    const product = this.products[id];
    if (product) {
      product.remove(units || 1);
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

  // we keep total like this, because it's on the definition,
  // but i think is better to set it as a getter
  total() {
    return `${this.calcTotal('totalPrice')}€`;
  }

  get items() {
    return this.calcTotal('units');
  }
}
export default Checkout;
