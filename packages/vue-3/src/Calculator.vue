<template>
  <div class="calculator">
      <div class="register">{{ register }}</div>
      <div class="controls">
          <button @click="clear">C</button>
          <button @click="inputOperator">/</button>
          <button @click="inputOperator">*</button>
          <button @click="inputOperator">-</button>
          <button @click="inputOperand">7</button>
          <button @click="inputOperand">8</button>
          <button @click="inputOperand">9</button>
          <button @click="inputOperator">+</button>
          <button @click="inputOperand">4</button>
          <button @click="inputOperand">5</button>
          <button @click="inputOperand">6</button>
          <button @click="calculate">=</button>
          <button @click="inputOperand">1</button>
          <button @click="inputOperand">2</button>
          <button @click="inputOperand">3</button>
          <button @click="inputOperand">0</button>
      </div>
  </div>
</template>

<script>
import { reactive, computed, defineComponent } from 'vue';
import Calculator from '@ui-frameworks-sandbox/common/lib/CalculatorESM';

export default defineComponent({
    setup(props, context) {

        // Reactive data
        const calculator = reactive(new Calculator());

        // Computed getters
        const register = computed(() => {
            return calculator.register;
        });

        // Methods
        const inputOperand = (evt) => {
            const inputValue = evt.target.textContent;
            calculator.inputOperand(inputValue);
        };

        const inputOperator = (evt) => {
            const inputValue = evt.target.textContent;
            calculator.inputOperator(inputValue);
        };

        const calculate = () => {
            calculator.calculate();
        };

        const clear = () => {
            calculator.clear();
        };

        return {
            calculator,
            register,
            inputOperand,
            inputOperator,
            calculate,
            clear
        };
    }
});
</script>

<style>
    .calculator {
        width: 400px;
        margin-left: auto;
        margin-right: auto;
    }
    .calculator .register {
        border: 1px solid #999;
        margin-bottom: 5px;
    }
    .calculator .controls {
        display: grid;
        grid-template-columns: auto auto auto auto;
        column-gap: 5px;
        row-gap: 5px;
    }
</style>
