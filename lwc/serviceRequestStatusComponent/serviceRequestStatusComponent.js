import { LightningElement, api, wire } from 'lwc';
import { getRecord } from 'lightning/uiRecordApi';
import STATUS_FIELD from '@salesforce/schema/ServiceRequest__c.Status__c';
import LAST_UPDATE_FIELD from '@salesforce/schema/ServiceRequest__c.LastStatusUpdate__c';
import DETAILS_FIELD from '@salesforce/schema/ServiceRequest__c.Details__c';
import NEXT_STEPS_FIELD from '@salesforce/schema/ServiceRequest__c.NextSteps__c';

export default class ServiceRequestStatusComponent extends LightningElement {
    @api recordId;
    serviceRequest;
    isLoading = true;

    @wire(getRecord, { recordId: '$recordId', fields: [STATUS_FIELD, LAST_UPDATE_FIELD, DETAILS_FIELD, NEXT_STEPS_FIELD] })
    wiredServiceRequest({ error, data }) {
        if (data) {
            this.serviceRequest = data.fields;
            this.isLoading = false;
        } else if (error) {
            this.isLoading = false;
            console.error(error);
        }
    }
}