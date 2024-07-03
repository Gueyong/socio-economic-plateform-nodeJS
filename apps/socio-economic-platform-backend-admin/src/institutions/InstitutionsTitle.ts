import { Institutions as TInstitutions } from "../api/institutions/Institutions";

export const INSTITUTIONS_TITLE_FIELD = "id";

export const InstitutionsTitle = (record: TInstitutions): string => {
  return record.id?.toString() || String(record.id);
};
