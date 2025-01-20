import { LightningElement, track } from 'lwc';
export default class ComplianceReportComponent extends LightningElement {
    @track reportName = '';
    @track description = '';
    @track template = '';
    templateOptions = [
        { label: 'PDF', value: 'PDF' },
        { label: 'Excel', value: 'Excel' }
    ];
    handleGenerate() {
        // Logic to generate report
    }
}