public class QAReportScheduler {
    public static void scheduleDailyReport() {
        System.schedule('Daily QA Report', '0 0 6 * * ?', new QAReportBatch('Daily'));
    }
    public static void scheduleWeeklyReport() {
        System.schedule('Weekly QA Report', '0 0 6 ? * MON', new QAReportBatch('Weekly'));
    }
}