import { LightningElement, track } from 'lwc';
export default class AssignmentRuleConfig extends LightningElement {
    @track requestType = '';
    @track priority = '';

    handleRequestTypeChange(event) {
        this.requestType = event.target.value;
    }

    handlePriorityChange(event) {
        this.priority = event.target.value;
    }

    handleSave() {
        // Save logic
    }
}