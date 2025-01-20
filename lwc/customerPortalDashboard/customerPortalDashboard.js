import { LightningElement, wire } from 'lwc';
import { getRecord } from 'lightning/uiRecordApi';
import SERVICE_REQUEST_OBJECT from '@salesforce/schema/ServiceRequest__c';

export default class CustomerPortalDashboard extends LightningElement {
    @wire(getRecord, { objectApiName: SERVICE_REQUEST_OBJECT })
    serviceRequests;

    columns = [
        { label: 'Title', fieldName: 'Title__c' },
        { label: 'Description', fieldName: 'Description__c' },
        { label: 'Status', fieldName: 'Status__c' }
    ];
}