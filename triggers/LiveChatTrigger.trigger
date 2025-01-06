trigger LiveChatTrigger on LiveChatTranscript (after insert) {
    List<ServiceRequest__c> serviceRequests = new List<ServiceRequest__c>();
    for (LiveChatTranscript lct : Trigger.new) {
        ServiceRequest__c sr = new ServiceRequest__c();
        sr.Channel__c = 'Live Chat';
        sr.Customer__c = lct.ContactId;
        sr.Description__c = lct.Body;
        sr.Status__c = 'New';
        sr.Agent__c = lct.AgentId;
        serviceRequests.add(sr);
    }
    insert serviceRequests;
}