import { LightningElement, api } from 'lwc';
export default class ComplianceMonitoringComponent extends LightningElement {
    @api monitoringFrequency;
    @api lastRunDate;
    @api status;
}