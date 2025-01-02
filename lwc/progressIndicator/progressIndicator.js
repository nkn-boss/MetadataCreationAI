import { LightningElement, api, track } from 'lwc';
export default class ProgressIndicator extends LightningElement {
    @api steps;
    @api currentStep;

    get computedSteps() {
        return this.steps.map((step, index) => {
            let stepClass = '';
            if (index < this.currentStep) {
                stepClass = 'completed';
            } else if (index === this.currentStep) {
                stepClass = 'active';
            }
            return { ...step, index, class: stepClass };
        });
    }
}