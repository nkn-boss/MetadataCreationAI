trigger LeadAssignmentTrigger on Lead (before insert, before update) {
    LeadAssignmentHelper.assignLeads(Trigger.new);
}