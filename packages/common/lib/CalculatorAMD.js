/* AMD version of Calculator class generaged by [npm run build:AMD] script */
class Calculator {
    constructor() {
        this.clear();
    }
    updateRegister() {
        this.register = '';
        this.inputs.forEach((input) => {
            this.register = `${this.register}${input}`;
        });
        if(this.register === '') {
            this.register = '0';
        }
    }
    inputOperand(operand) {
        if (this.lastInputType === 'calculate') {
            this.clear();
            this.inputOperand(operand);
        } else if (this.lastInputType === 'operand') {
            const lastOperandIndex = this.inputs.length - 1;
            const lastOperand = this.inputs[lastOperandIndex];
            const newLastOperand = `${lastOperand}${operand}`.replace(/^0+/g, '');
            this.inputs[lastOperandIndex] = newLastOperand !== '' ? newLastOperand : '0';
            this.updateRegister();
        } else {
            this.inputs.push(operand);
            this.lastInputType = 'operand';
            this.updateRegister();
        }
    }
    inputOperator(operator) {
        const inputCount = this.inputs.length;
        if (inputCount > 0) {
            if (this.lastInputType === 'operator') {
                this.inputs[inputCount-1] = operator;
            } else {
                this.inputs.push(operator);
            }
            this.lastInputType = 'operator';
            this.updateRegister();
        }
    }
    calculate() {
        const calculatedValue = `${eval(this.register)}`;
        this.clear();
        this.inputs.push(calculatedValue);
        this.lastInputType = 'calculate';
        this.updateRegister();
    }
    clear() {
        this.inputs = [];
        this.lastInputType = '';
        this.updateRegister();
    }
}
define([], () => Calculator);
