import { LightningElement, wire } from 'lwc';
import getServiceRequests from '@salesforce/apex/ServiceRequestController.getServiceRequests';

export default class ServiceRequestDashboard extends LightningElement {
    requests;
    columns = [
        { label: 'Request Name', fieldName: 'Name' },
        { label: 'Status', fieldName: 'Status__c' },
        { label: 'Last Modified', fieldName: 'LastModifiedDate', type: 'date' }
    ];

    @wire(getServiceRequests)
    wiredRequests({ error, data }) {
        if (data) {
            this.requests = data;
        } else if (error) {
            console.error(error);
        }
    }
}