public with sharing class ServiceRequestController {
    @AuraEnabled
    public static void createServiceRequest(String name, String email, String phone, String description, String priority) {
        Service_Request__c serviceRequest = new Service_Request__c();
        serviceRequest.Name__c = name;
        serviceRequest.Email__c = email;
        serviceRequest.Phone__c = phone;
        serviceRequest.Description__c = description;
        serviceRequest.Priority__c = priority;
        insert serviceRequest;
        // Send email confirmation logic here
    }
}