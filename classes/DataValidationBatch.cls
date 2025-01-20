public class DataValidationBatch implements Database.Batchable<SObject>, Database.Stateful {
    public Database.QueryLocator start(Database.BatchableContext bc) {
        return Database.getQueryLocator('SELECT Id, Old_Field__c, New_Field__c FROM CustomObject__c');
    }

    public void execute(Database.BatchableContext bc, List<SObject> scope) {
        List<Data_Discrepancy__c> discrepancies = new List<Data_Discrepancy__c>();
        for (SObject record : scope) {
            CustomObject__c obj = (CustomObject__c) record;
            if (obj.Old_Field__c != obj.New_Field__c) {
                discrepancies.add(new Data_Discrepancy__c(
                    CustomObject__cId = obj.Id,
                    Old_Value__c = obj.Old_Field__c,
                    New_Value__c = obj.New_Field__c
                ));
            }
        }
        if (!discrepancies.isEmpty()) {
            insert discrepancies;
        }
    }

    public void finish(Database.BatchableContext bc) {
        // Logic to log completion
    }
}