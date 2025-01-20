trigger PlatformEventTrigger on PlatformEvent__e (after insert) {
    DataSynchronization.handlePlatformEvents();
}