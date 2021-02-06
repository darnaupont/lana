class Product {
  constructor(code, name, price, img, discount, discountName) {
    // in case we dont have a discount we provide a fallback for that, no discount
    const defaultDiscount = (units) => (units);
    this.code = code;
    this.name = `Lana ${name}`;
    this.img = img;
    this.price = price;
    this.coin = '€';
    this.prodDiscount = discount || defaultDiscount;
    this.discountName = discountName;
    this.decimals = 2;
    this.units = 0;
  }

  displayPrice(rawPrice) {
    // destipe the fact I know we should use full digits
    // in this case you gonna pay 0.25 or 0.24 but not 0.243
    // also because its only applied to discount
    return rawPrice.toFixed(this.decimals);
  }

  calcBase() {
    const rawPrice = this.units * this.price;
    return this.displayPrice(rawPrice);
  }

  calcPrice() {
    const rawPrice = this.prodDiscount(this.units) * this.price;
    return this.displayPrice(rawPrice);
  }

  calcDiscount() {
    const rawPrice = this.calcPrice() - this.price * this.units;
    return this.displayPrice(rawPrice);
  }

  // actions
  add(addUnits) {
    this.units += addUnits || 1;
  }

  remove(addUnits) {
    if ((this.units - addUnits) > 0) {
      this.units -= addUnits || 1;
    } else {
      // if we remove all units or more
      this.units = 0;
    }
  }

  // getters
  get basePrice() {
    return `${this.calcBase()} ${this.coin}`;
  }

  get totalPrice() {
    return `${this.calcPrice()} ${this.coin}`;
  }

  get discount() {
    const name = this.discountName;
    const value = `${this.calcDiscount()} ${this.coin}`;
    return {
      name,
      value,
    };
  }
}

export default Product;
