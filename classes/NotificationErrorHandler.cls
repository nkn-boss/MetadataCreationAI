public class NotificationErrorHandler {
    public static void handleFailedNotification(Id serviceRequestId, String errorMessage) {
        ServiceRequest__c sr = [SELECT Id, ErrorLog__c FROM ServiceRequest__c WHERE Id = :serviceRequestId LIMIT 1];
        sr.ErrorLog__c = errorMessage;
        update sr;
    }
}