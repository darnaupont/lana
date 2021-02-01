class Product {
  constructor(code, name, price, coin, prodDiscount) {
    // in case we dont have a discount we provide a fallback for that, no discount
    const defaultDiscount = (units) => (units);
    this.code = code;
    this.name = `Lana ${name}`;
    this.price = price;
    this.coin = coin;
    this.prodDiscount = prodDiscount || defaultDiscount;
    this.units = 1;
    this.displayPrice = (rawPrice) => rawPrice.toFixed(2);
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

  add(addUnits) {
    this.units += addUnits || 1;
  }

  remove(addUnits) {
    if ((this.units - addUnits) >= 0) {
      this.units -= addUnits || 1;
    }
  }

  get basePrice() {
    return `${this.calcBase()} ${this.coin}`;
  }

  get totalPrice() {
    return `${this.calcPrice()} ${this.coin}`;
  }

  get discount() {
    return `${this.calcDiscount()} ${this.coin}`;
  }
}
// discout is made base to "proportiona" units value
const tshirtDiscount = (units) => (units >= 3 ? 0.95 : 1) * units;
const TSHIRT = new Product('TSHIRT', 'T-shirt', 20, '€', tshirtDiscount);
const capDiscount = (units) => units - Math.floor(units * 0.5);
const CAP = new Product('CAP', 'Cap', 5, '€', capDiscount);
const MUG = new Product('MUG', 'Coffee Mug', 7.5, '€');
// const tshit = new Product('TSHIRT', 'T-shirt', 10, tshirtDiscount);
// const cap = new Product('CAP', 'Cap', 10, capDiscount);
// const mug = new Product('MUG', 'Coffee Mug', 10, mugDIscount);
const products = {
  TSHIRT,
  CAP,
  MUG,
};

export default products;
