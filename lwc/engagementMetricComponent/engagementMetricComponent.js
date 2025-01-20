import { LightningElement, wire } from 'lwc';
import getEngagementMetrics from '@salesforce/apex/EngagementMetricController.getEngagementMetrics';
export default class EngagementMetricComponent extends LightningElement {
    metrics;
    @wire(getEngagementMetrics)
    wiredMetrics({ error, data }) {
        if (data) {
            this.metrics = data;
        } else if (error) {
            // Handle error
        }
    }
}