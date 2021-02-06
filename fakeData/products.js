import Product from '../helpers/products';
import Checkout from '../helpers/checkout';
// discout is made base to "proportional" units value
const tshirtDiscount = (units) => (units >= 3 ? 0.95 : 1) * units;
const TSHIRT = new Product('TSHIRT', 'T-shirt', 20, 'shirt', tshirtDiscount, 'x3 Shirt offer');
const capDiscount = (units) => units - Math.floor(units * 0.5);
// the code and the definition on https://github.com/lana/frontend-shopping-cart-challenge are not the same
// I will follow github since I belive that's the source of truth
const CAP = new Product('CAP', 'Cap', 5, 'cap', capDiscount, '2x1 Cap offer');
const MUG = new Product('MUG', 'Coffee Mug', 7.5, 'mug');

const products = {
  TSHIRT,
  CAP,
  MUG,
};

const cart = new Checkout(products);
export default cart;
