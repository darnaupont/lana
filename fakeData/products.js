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
    this.units = 0;
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
    const name = this.discountName;
    const value = `${this.calcDiscount()} ${this.coin}`;
    return {
      name,
      value,
    };
  }
}
// discout is made base to "proportional" units value
const tshirtDiscount = (units) => (units >= 3 ? 0.95 : 1) * units;
const TSHIRT = new Product('TSHIRT', 'T-shirt', 20, 'shirt', tshirtDiscount, 'x3 Shirt offer');
const capDiscount = (units) => units - Math.floor(units * 0.5);
// the code and the definition on https://github.com/lana/frontend-shopping-cart-challenge are not the same
// I will follow github since I belive that's the source of truth
const CAP = new Product('CAP', 'Cap', 5, 'cap', capDiscount, '2x1 Cap offer');
const MUG = new Product('MUG', 'Coffee Mug', 7.5, 'mug');

console.log(TSHIRT);
const products = {
  TSHIRT,
  CAP,
  MUG,
};

export default products;
