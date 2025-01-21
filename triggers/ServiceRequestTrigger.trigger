trigger ServiceRequestTrigger on ServiceRequest__c (after update) {
    ServiceRequestTriggerHandler.onAfterUpdate(Trigger.new, Trigger.oldMap);
}