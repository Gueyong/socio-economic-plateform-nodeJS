import { JobOpportunitiesWhereInput } from "./JobOpportunitiesWhereInput";
import { JobOpportunitiesOrderByInput } from "./JobOpportunitiesOrderByInput";

export type JobOpportunitiesFindManyArgs = {
  where?: JobOpportunitiesWhereInput;
  orderBy?: Array<JobOpportunitiesOrderByInput>;
  skip?: number;
  take?: number;
};
