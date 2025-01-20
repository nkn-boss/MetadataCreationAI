public class ServiceRequestTriggerHandler {
    public static void onAfterUpdate(List<ServiceRequest__c> newList, Map<Id, ServiceRequest__c> oldMap) {
        List<Messaging.SingleEmailMessage> emails = new List<Messaging.SingleEmailMessage>();
        for (ServiceRequest__c sr : newList) {
            ServiceRequest__c oldSr = oldMap.get(sr.Id);
            if (sr.Status__c != oldSr.Status__c) {
                Messaging.SingleEmailMessage email = new Messaging.SingleEmailMessage();
                email.setToAddresses(new String[] {sr.CustomerEmail__c});
                email.setSubject('Service Request Status Update');
                email.setPlainTextBody('Your service request status has been updated to ' + sr.Status__c);
                emails.add(email);
                sr.StatusHistory__c += '\n' + sr.Status__c + ' - ' + System.now();
            }
        }
        if (!emails.isEmpty()) {
            Messaging.sendEmail(emails);
        }
    }
}