import { FreelancerServicesWhereInput } from "./FreelancerServicesWhereInput";
import { FreelancerServicesOrderByInput } from "./FreelancerServicesOrderByInput";

export type FreelancerServicesFindManyArgs = {
  where?: FreelancerServicesWhereInput;
  orderBy?: Array<FreelancerServicesOrderByInput>;
  skip?: number;
  take?: number;
};
