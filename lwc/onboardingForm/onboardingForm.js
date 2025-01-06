import { LightningElement, track } from 'lwc';
export default class OnboardingForm extends LightningElement {
    @track currentStep = '1';
    get isPersonalDetailsStep() {
        return this.currentStep === '1';
    }
    get isServicePreferencesStep() {
        return this.currentStep === '2';
    }
    get isAdditionalInformationStep() {
        return this.currentStep === '3';
    }
    handleNext(event) {
        this.currentStep = (parseInt(this.currentStep) + 1).toString();
    }
    handlePrevious(event) {
        this.currentStep = (parseInt(this.currentStep) - 1).toString();
    }
    handleSubmit(event) {
        // Implement form submission logic
        this.showToast('Success', 'Form submitted successfully', 'success');
    }
    showToast(title, message, variant) {
        const event = new ShowToastEvent({
            title,
            message,
            variant
        });
        this.dispatchEvent(event);
    }
}