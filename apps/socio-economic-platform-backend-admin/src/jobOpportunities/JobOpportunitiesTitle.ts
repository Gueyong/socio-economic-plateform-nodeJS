import { JobOpportunities as TJobOpportunities } from "../api/jobOpportunities/JobOpportunities";

export const JOBOPPORTUNITIES_TITLE_FIELD = "id";

export const JobOpportunitiesTitle = (record: TJobOpportunities): string => {
  return record.id?.toString() || String(record.id);
};
