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
    const totalPrice = Object.values(this.products)
      .reduce((acc, curr) => acc + parseFloat(curr[valueId]), 0);
    return `${totalPrice}€`;
  }

  basePrice() {
    return this.calcTotal('basePrice');
  }

  discount() {
    return this.calcTotal('discount');
  }

  total() {
    return this.calcTotal('totalPrice');
  }
}
export default Checkout;
