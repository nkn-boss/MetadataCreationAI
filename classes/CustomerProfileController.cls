public class CustomerProfileController {
    public static void updateEngagementMetrics(Id profileId, Integer newMetrics) {
        Customer_Profile__c profile = [SELECT Id, Engagement_Metrics__c FROM Customer_Profile__c WHERE Id = :profileId];
        profile.Engagement_Metrics__c = newMetrics;
        update profile;
    }
}