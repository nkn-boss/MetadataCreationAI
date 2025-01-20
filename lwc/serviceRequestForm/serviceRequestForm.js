import { LightningElement, track } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import createServiceRequest from '@salesforce/apex/ServiceRequestController.createServiceRequest';

export default class ServiceRequestForm extends LightningElement {
    @track name = '';
    @track email = '';
    @track phone = '';
    @track description = '';
    @track priority = 'High';
    @track priorityOptions = [
        { label: 'Low', value: 'Low' },
        { label: 'Medium', value: 'Medium' },
        { label: 'High', value: 'High' }
    ];

    handleInputChange(event) {
        const field = event.target.label.toLowerCase();
        this[field] = event.target.value;
    }

    handleSubmit() {
        createServiceRequest({
            name: this.name,
            email: this.email,
            phone: this.phone,
            description: this.description,
            priority: this.priority
        })
        .then(result => {
            this.dispatchEvent(
                new ShowToastEvent({
                    title: 'Success',
                    message: 'Service Request submitted successfully',
                    variant: 'success'
                })
            );
        })
        .catch(error => {
            this.dispatchEvent(
                new ShowToastEvent({
                    title: 'Error',
                    message: error.body.message,
                    variant: 'error'
                })
            );
        });
    }
}