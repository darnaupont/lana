class Product {
  constructor(code, name, price, prodDiscount) {
    this.code = code;
    this.name = `Lana ${name}`;
    this.price = price;
    this.prodDiscount = prodDiscount;
    this.units = 1;
  }

  calcPrice() {
    return this.prodDiscount(this.units) * this.price;
  }

  calcDiscount() {
    return this.calcPrice() - this.price * this.units;
  }

  get totalPrice() {
    return this.calcPrice();
  }

  get discount() {
    return this.calcDiscount();
  }
}
const tshirtDiscount = (units) => (units > 3 ? 0.95 : 1) * units;
const tshit = new Product('TSHIRT', 'T-shirt', 20, tshirtDiscount);
const capDiscount = (units) => (units % 2 === 0 ? 0 : 1) + Math.floor(units * 0.5);
const cap = new Product('CAP', 'Cap', 5, capDiscount);
const mugDIscount = (units) => units;
const mug = new Product('MUG', 'Coffee Mug', 7.5, mugDIscount);
// const tshit = new Product('TSHIRT', 'T-shirt', 10, tshirtDiscount);
// const cap = new Product('CAP', 'Cap', 10, capDiscount);
// const mug = new Product('MUG', 'Coffee Mug', 10, mugDIscount);
const products = {
  tshit,
  cap,
  mug,
};

export default products;
