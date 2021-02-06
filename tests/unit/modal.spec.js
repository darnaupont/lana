import {
  mount,
} from '@vue/test-utils';
import App from '@/App.vue';
import VModal from '@/components/v-modal.vue';

test('displays message', () => {
  const wrapper = mount(VModal, {
    propsData: {
      product: {
        code: 'code_test',
        name: 'name_test',
        img: 'shirt',
        price: 10,
        coin: 'coin',
      },
    },
  });
  const img = wrapper.find('img');
  expect(img.exists()).toBe(true);
  const header = wrapper.find('header');
  expect(header.find('h2').text()).toBe('name_test');
  expect(header.find('span').text()).toBe('10 coin');
  const footer = wrapper.find('footer');
  expect(footer.find('p').text()).toBe('Product code code_test');
  expect(footer.find('button').exists()).toBe(true);
});

test('add product', async () => {
  const product = {
    code: 'code_test',
    name: 'name_test',
    img: 'shirt',
    price: 10,
    coin: 'coin',
  };
  const wrapper = mount(VModal, {
    propsData: {
      product,
    },
  });
  const button = wrapper.find('footer button');
  expect(button.text()).toBe('Add to cart');
  await button.trigger('click');
  await wrapper.vm.$nextTick();
  expect(wrapper.emitted().add).toBeTruthy();
  expect(wrapper.emitted().add[0]).toEqual(['code_test']);
  expect(wrapper.emitted().modal[0]).toEqual([null]);
});

test('click outside/close', async () => {
  const product = {
    code: 'code_test',
    name: 'name_test',
    img: 'shirt',
    price: 10,
    coin: 'coin',
  };
  const wrapper = mount(VModal, {
    propsData: {
      product,
    },
  });
  const button = wrapper.find('div.fixed.inset-0');
  await button.trigger('click');
  await wrapper.vm.$nextTick();
  expect(wrapper.emitted().add).toBe(undefined);
  expect(wrapper.emitted().modal[0]).toEqual([null]);
});

test('displays modal', async () => {
  const wrapper = mount(App);
  const modal = wrapper.find('div.modal');
  const product = wrapper.find('.product');
  expect(modal.isVisible()).toBe(false);
  await product.trigger('click');
  await wrapper.vm.$nextTick();
  expect(modal.isVisible()).toBe(true);
});
