public class ScheduledDataIntegrityCheck implements Schedulable {
    public void execute(SchedulableContext sc) {
        DataIntegrityChecker.checkDataIntegrity();
    }
}