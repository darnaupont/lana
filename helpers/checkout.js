class Checkout {
  constructor(productsList) {
    this.products = productsList;
    this.coin = '€';
    this.decimals = 2;
  }

  displayPrice(rawPrice) {
    // destipe the fact I know we should use full digits
    // in this case you gonna pay 0.25 or 0.24 but not 0.243
    // also because its only applied to discount
    return rawPrice.toFixed(this.decimals);
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

  // since 3 items
  calcTotalString(valueId) {
    const total = this.calcTotal(valueId);
    return `${this.displayPrice(total)} ${this.coin}`;
  }

  basePrice() {
    return this.calcTotalString('basePrice');
  }

  discount() {
    return this.calcTotalString('discount');
  }

  // we keep total like this, because it's on the definition,
  // but i think is better to set it as a getter
  total() {
    return this.calcTotalString('totalPrice');
  }

  get items() {
    return this.calcTotal('units');
  }
}
export default Checkout;
