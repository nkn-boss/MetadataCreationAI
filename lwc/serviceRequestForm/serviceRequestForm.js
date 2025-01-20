import { LightningElement } from 'lwc';
export default class ServiceRequestForm extends LightningElement {
    handleSubmit(event) {
        event.preventDefault();
        const fields = event.detail.fields;
        this.template.querySelector('lightning-record-edit-form').submit(fields);
    }
}