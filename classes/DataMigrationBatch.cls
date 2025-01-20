public class DataMigrationBatch implements Database.Batchable<SObject>, Database.Stateful {
    public Database.QueryLocator start(Database.BatchableContext BC) {
        return Database.getQueryLocator('SELECT Id FROM SourceObject');
    }
    public void execute(Database.BatchableContext BC, List<SObject> scope) {
        List<TargetObject__c> targetRecords = new List<TargetObject__c>();
        for (SObject record : scope) {
            TargetObject__c target = new TargetObject__c();
            // Map fields from source to target
            targetRecords.add(target);
        }
        insert targetRecords;
    }
    public void finish(Database.BatchableContext BC) {
        // Post-migration actions
    }
}