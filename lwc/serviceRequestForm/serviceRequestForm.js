import { LightningElement, track } from 'lwc';
export default class ServiceRequestForm extends LightningElement {
    @track type = '';
    @track description = '';
    @track priority = '';
    @track priorityOptions = [
        { label: 'Low', value: 'Low' },
        { label: 'Medium', value: 'Medium' },
        { label: 'High', value: 'High' }
    ];

    handleTypeChange(event) {
        this.type = event.target.value;
    }

    handleDescriptionChange(event) {
        this.description = event.target.value;
    }

    handlePriorityChange(event) {
        this.priority = event.target.value;
    }

    handleSubmit() {
        // Logic to submit the service request
    }
}