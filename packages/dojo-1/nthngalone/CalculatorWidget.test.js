define([
    'require',
    'nthngalone/CalculatorWidget'
], function (require, CalculatorWidget) {

    const registerSuite = intern.getInterface('object').registerSuite;
    const assert = intern.getPlugin('chai').assert;

    let calculator;
    let calculatorPageObj;

    class CalculatorPageObj {
        constructor(domNode) {
            this.domNode = domNode;
        }
        clickButton(text) {
            const button = this.domNode
                .querySelectorAll('.controls button')
                .find((btn) => btn.textContent === text);
            if (button) {
                button.click();
            }
        }
        getRegisterText() {
            return this.domNode.querySelector('.register').textContent;
        }
    }

    registerSuite('CalculatorWidget', {
        before: function () {
            calculator = new CalculatorWidget();
            calculatorPageObj = new CalculatorPageObj(calculator.domNode);
        },
        tests: {
            'initial state': function () {
                assert.strictEqual(calculatorPageObj.getRegisterText(), '0');
            }
        }
    });
});