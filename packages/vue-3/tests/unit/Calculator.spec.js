import { describe, it, expect } from 'vitest'
import { shallowMount } from '@vue/test-utils'
import Calculator from '../../src/Calculator.vue'

const getRegister = (wrapper) => {
  return wrapper.find('.register').text();
};

const clickButton = (wrapper, text) => {
  const buttons = wrapper.findAll('button');
  const button = buttons.find(wrapper => wrapper.text() === text);
  return button.trigger('click');
};

describe('Calculator.vue', () => {
  it('renders with the register set to 0', () => {
      const wrapper = shallowMount(Calculator);
      expect(getRegister(wrapper)).toMatch('0');
  });
  it('supports addition', async () => {
      const wrapper = shallowMount(Calculator);
      await clickButton(wrapper, '2');
      await clickButton(wrapper, '+');
      await clickButton(wrapper, '2');
      await clickButton(wrapper, '=');
      expect(getRegister(wrapper)).toMatch('4');
  });
  it('supports subtraction', async () => {
      const wrapper = shallowMount(Calculator);
      await clickButton(wrapper, '5');
      await clickButton(wrapper, '-');
      await clickButton(wrapper, '1');
      await clickButton(wrapper, '=');
      expect(getRegister(wrapper)).toMatch('4');
  });
  it('supports multiplication', async () => {
    const wrapper = shallowMount(Calculator);
    await clickButton(wrapper, '3');
    await clickButton(wrapper, '*');
    await clickButton(wrapper, '6');
    await clickButton(wrapper, '=');
    expect(getRegister(wrapper)).toMatch('18');
  });
  it('supports division', async () => {
    const wrapper = shallowMount(Calculator);
    await clickButton(wrapper, '8');
    await clickButton(wrapper, '/');
    await clickButton(wrapper, '4');
    await clickButton(wrapper, '=');
    expect(getRegister(wrapper)).toMatch('2');
  });
  it('allows chaining an operator to the result after a calculation', async () => {
    const wrapper = shallowMount(Calculator);
    await clickButton(wrapper, '7');
    await clickButton(wrapper, '+');
    await clickButton(wrapper, '9');
    await clickButton(wrapper, '=');
    await clickButton(wrapper, '/');
    await clickButton(wrapper, '2');
    await clickButton(wrapper, '=');
    expect(getRegister(wrapper)).toMatch('8');
  });
  it('starts a new calculation after a result when an operand is the next input', async () => {
    const wrapper = shallowMount(Calculator);
    await clickButton(wrapper, '7');
    await clickButton(wrapper, '+');
    await clickButton(wrapper, '9');
    await clickButton(wrapper, '=');
    await clickButton(wrapper, '6');
    await clickButton(wrapper, '/');
    await clickButton(wrapper, '2');
    await clickButton(wrapper, '=');
    expect(getRegister(wrapper)).toMatch('3');
  });
  it('resets back to 0 when the clear button is clicked', async () => {
    const wrapper = shallowMount(Calculator);
    await clickButton(wrapper, '1');
    await clickButton(wrapper, 'C');
    expect(getRegister(wrapper)).toMatch('0');
  });
});
