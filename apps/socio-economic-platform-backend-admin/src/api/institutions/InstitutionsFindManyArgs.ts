import { InstitutionsWhereInput } from "./InstitutionsWhereInput";
import { InstitutionsOrderByInput } from "./InstitutionsOrderByInput";

export type InstitutionsFindManyArgs = {
  where?: InstitutionsWhereInput;
  orderBy?: Array<InstitutionsOrderByInput>;
  skip?: number;
  take?: number;
};
