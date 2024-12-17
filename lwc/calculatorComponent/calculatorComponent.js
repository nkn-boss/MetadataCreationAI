import { LightningElement, track } from 'lwc';
import calculate from '@salesforce/apex/Calculator';

export default class CalculatorComponent extends LightningElement {
    @track number1;
    @track number2;
    @track operation;
    @track result;

    get operations() {
        return [
            { label: 'Add', value: 'add' },
            { label: 'Subtract', value: 'subtract' },
            { label: 'Multiply', value: 'multiply' },
            { label: 'Divide', value: 'divide' }
        ];
    }

    handleCalculate() {
        const num1 = parseFloat(this.number1);
        const num2 = parseFloat(this.number2);
        const operation = this.operation;

        calculate({ num1, num2, operation })
            .then(result => {
                this.result = result;
            })
            .catch(error => {
                this.result = error.body.message;
            });
    }
}