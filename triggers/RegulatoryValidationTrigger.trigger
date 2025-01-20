trigger RegulatoryValidationTrigger on CustomObject__c (before insert, before update) {
    if (Trigger.isBefore) {
        RegulatoryIntegration.validateRegulatoryInfo();
    }
}