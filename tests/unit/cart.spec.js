import {
  mount,
} from '@vue/test-utils';
import App from '@/App.vue';
// import the fake data to keep consistency on test,
// just in case the project changes or fetch the data from other source
import cart from '../../fakeData/products';

describe('App', () => {
  const wrapper = mount(App, {
    propsData: {
      cart,
    },
  });

  // Inspect the raw component options
  it('has data', () => {
    expect(typeof App.data).toBe('function');
  });

  it('renders the correct markup', () => {
    expect(wrapper.html()).toContain('TSHIRT', 'MUG', 'CUP');
  });

  const modal = wrapper.find('div.modal');
  const productRow = wrapper.find('.product-row');
  const product = wrapper.find('figure.product');
  const add = productRow.find('button.btn-add');
  const remove = productRow.find('button.btn-remove');
  const summary = wrapper.find('.summary');

  test('displays modal', async () => {
    expect(modal.isVisible()).toBe(false);
    await product.trigger('click');
    expect(modal.isVisible()).toBe(true);
  });

  test('default item (tshirt)', async () => {
    expect(productRow.find('div').text()).toContain('20 €', 'TSHIRT', '0.00');
    expect(productRow.find('input').element.value).toBe('0');
    expect(summary.html()).toContain('0.00 €');
  });

  test('remove item', async () => {
    await remove.trigger('click');
    expect(summary.html()).toContain('0.00 €');
  });

  test('add item', async () => {
    await add.trigger('click');
    expect(summary.find('div').text()).toContain('20.00 €');
    expect(productRow.find('input').element.value).toBe('1');
    await add.trigger('click');
    expect(summary.find('div').text()).toContain('40.00 €');
    expect(productRow.find('input').element.value).toBe('2');
  });

  test('apply discount', async () => {
    expect(wrapper.find('.discount').text()).toContain('');
    await add.trigger('click');
    expect(wrapper.find('.discount').text()).toContain('Discounts', '-3');
  });

  test('total price', async () => {
    const total = wrapper.find('.total-cost');
    expect(total.text()).toContain('57.00 €');
  });
});
