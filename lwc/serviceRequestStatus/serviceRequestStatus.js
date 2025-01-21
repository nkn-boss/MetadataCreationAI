import { LightningElement, api, wire } from 'lwc';
import { getRecord } from 'lightning/uiRecordApi';
import STATUS_FIELD from '@salesforce/schema/ServiceRequest__c.Status__c';

export default class ServiceRequestStatus extends LightningElement {
    @api recordId;
    status;

    @wire(getRecord, { recordId: '$recordId', fields: [STATUS_FIELD] })
    wiredRecord({ error, data }) {
        if (data) {
            this.status = data.fields.Status__c.value;
        } else if (error) {
            console.error(error);
        }
    }
}