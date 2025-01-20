trigger DataIntegrityTrigger on Account (before insert, before update) {
    DataIntegrityChecker.checkDataIntegrity();
}