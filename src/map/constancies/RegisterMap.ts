import type { Constancia } from "../../types/types";
import { CompanyMap } from "../CompanyMap";
import { getStrapiCollection, getStrapiRelation, unwrapStrapiAttributes } from "../../util/strapiResponse";

export const RegistersMap = (data: any): Constancia[] => {
 return getStrapiCollection(data).map((item: any) => RegisterMap(item.id, item.documentId, item));
}

export const RegisterMap = (id: number, documentId: string, attributes: any): Constancia => {
 const register = unwrapStrapiAttributes(attributes) ?? {};
 const empresa = getStrapiRelation(register.empresa);
 
 const CURRENT_CONSTANCE: Constancia = {
  documentId,
  id,
  empresa: CompanyMap(empresa?.id, empresa?.documentId, empresa)
 }

 return CURRENT_CONSTANCE
}