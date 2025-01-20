public class DataMigrationBatch implements Database.Batchable<SObject>, Database.Stateful {
    public Database.QueryLocator start(Database.BatchableContext bc) {
        // Query to fetch data for migration
        return Database.getQueryLocator('SELECT Id, Name FROM SourceObject');
    }

    public void execute(Database.BatchableContext bc, List<SObject> scope) {
        // Data transformation and migration logic
        List<DestinationObject__c> destinationRecords = new List<DestinationObject__c>();
        for (SObject record : scope) {
            DestinationObject__c destRecord = new DestinationObject__c();
            // Map fields from source to destination
            destRecord.Name = record.get('Name');
            destinationRecords.add(destRecord);
        }
        insert destinationRecords;
    }

    public void finish(Database.BatchableContext bc) {
        // Post-migration logic
        System.debug('Data migration completed.');
    }
}