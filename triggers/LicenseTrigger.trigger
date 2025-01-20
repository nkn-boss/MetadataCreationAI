trigger LicenseTrigger on License__c (before insert, before update) {
    for (License__c license : Trigger.new) {
        if (license.Status__c == 'Issued' && license.Issue_Date__c == null) {
            license.addError('Issue Date must be populated when the status is Issued.');
        }
    }
}