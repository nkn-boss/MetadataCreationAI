public class EngagementMetricController {
    @AuraEnabled(cacheable=true)
    public static List<EngagementMetric__c> getEngagementMetrics() {
        return [SELECT Id, MetricType__c, Value__c, Timestamp__c, RelatedCampaign__c FROM EngagementMetric__c];
    }
}