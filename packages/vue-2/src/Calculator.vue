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
import Calculator from '@ui-frameworks-sandbox/common/Calculator'

export default {
  name: 'CalculatorApp',
  computed: {
    register() {
      return this.calculator.register;
    }
  },
  data() {
    return {
      calculator: new Calculator()
    };
  },
  methods: {
    inputOperand(evt) {
        const inputValue = evt.target.textContent;
        this.calculator.inputOperand(inputValue);
    },
    inputOperator(evt) {
        const inputValue = evt.target.textContent;
        this.calculator.inputOperator(inputValue);
    },
    calculate() {
        this.calculator.calculate();
    },
    clear() {
        this.calculator.clear();
    }
  }
}
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
