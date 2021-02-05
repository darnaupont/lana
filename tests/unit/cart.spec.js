import {
  mount,
} from '@vue/test-utils';
import App from '@/App.vue';

const cartData = {
  products: {
    TSHIRT: {
      code: 'TSHIRT',
      name: 'Lana T-shirt',
      img: 'shirt',
      price: 20,
      coin: '€',
      discountName: 'x3 Shirt offer',
      decimals: 2,
      units: 0,
    },
  },
  coin: '€',
  decimals: 2,
};

test('displays modal', async () => {
  const wrapper = mount(App, {
    propsData: {
      cartData,
    },
  });
  const modal = wrapper.find('div.modal');
  const product = wrapper.find('.product');
  expect(modal.isVisible()).toBe(false);
  await product.trigger('click');
  await wrapper.vm.$nextTick();
  expect(modal.isVisible()).toBe(true);
});
