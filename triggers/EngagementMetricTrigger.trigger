trigger EngagementMetricTrigger on EngagementMetric__c (before insert, before update) {
    if (Trigger.isBefore) {
        if (Trigger.isInsert) {
            EngagementMetricTriggerHandler.handleBeforeInsert(Trigger.new);
        } else if (Trigger.isUpdate) {
            EngagementMetricTriggerHandler.handleBeforeUpdate(Trigger.new, Trigger.oldMap);
        }
    }
}