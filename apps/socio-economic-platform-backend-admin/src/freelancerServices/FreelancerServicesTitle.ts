import { FreelancerServices as TFreelancerServices } from "../api/freelancerServices/FreelancerServices";

export const FREELANCERSERVICES_TITLE_FIELD = "id";

export const FreelancerServicesTitle = (
  record: TFreelancerServices
): string => {
  return record.id?.toString() || String(record.id);
};
