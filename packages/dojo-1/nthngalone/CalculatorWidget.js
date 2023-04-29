define([
    'dojo/_base/declare',
    'dijit/_WidgetBase',
    'dijit/_TemplatedMixin',
    'dojo/text!./CalculatorWidget.html',
    'dojo/on',
    'nthngalone-common/Calculator',
    'dojo/query'
], (declare, _WidgetBase, _TemplatedMixin, template, on, Calculator) => {

    return declare([_WidgetBase, _TemplatedMixin], {
        templateString: template,
        calculator: null,
        postCreate() {
            this.calculator = new Calculator();
            this.register.textContent = this.calculator.register;
            on(this.domNode, ".controls:click", (evt) => {
                const inputValue = evt.target.textContent;
                const inputType = evt.target.className;
                switch(inputType) {
                    case "operator":
                        this.calculator.inputOperator(inputValue);
                        break;
                    case "operand":
                        this.calculator.inputOperand(parseInt(inputValue));
                        break;
                    case "calculate":
                        this.calculator.calculate();
                        break;
                    case "clear":
                        this.calculator.clear();
                        break;
                    default:
                        break;
                }
                this.register.textContent = this.calculator.register;
            });
        }
    });
})