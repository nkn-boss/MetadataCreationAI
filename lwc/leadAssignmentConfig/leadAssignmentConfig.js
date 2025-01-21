import { LightningElement, track } from 'lwc';
export default class LeadAssignmentConfig extends LightningElement {
    @track criteria = '';
    @track assignedTo = '';

    handleCriteriaChange(event) {
        this.criteria = event.target.value;
    }

    handleAssignedToChange(event) {
        this.assignedTo = event.target.value;
    }

    handleSave() {
        // Logic to save the configuration
    }
}