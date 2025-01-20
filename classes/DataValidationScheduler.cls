public class DataValidationScheduler implements Schedulable {
    public void execute(SchedulableContext sc) {
        DataValidationBatch batch = new DataValidationBatch();
        Database.executeBatch(batch);
    }
}