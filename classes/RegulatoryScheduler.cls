public class RegulatoryScheduler implements Schedulable {
    public void execute(SchedulableContext sc) {
        RegulatoryIntegration.syncRegulatoryData();
    }
}