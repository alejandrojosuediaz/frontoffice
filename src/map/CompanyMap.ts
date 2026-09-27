import type { Categoria, Denominacion, Empresa, Filial, SectorDesempeno, TipoTramite } from "../types/types";
import { getStrapiCollection, getStrapiRelation, getStrapiRelations, unwrapStrapiAttributes } from "../util/strapiResponse";

export const CompaniesMap = (data: any): Empresa[] => {
 return getStrapiCollection(data).map((company) =>
  CompanyMap(company.id, company.documentId, company)
 );
}

export const CompanyMap = (id: number, documentId: string, attributes: any): Empresa => {
 const company = unwrapStrapiAttributes(attributes);
 if(!company){
  // @ts-ignore
  return {
    id,
   documentId,
   Activo: false,
   filial: {},
   NombreEmpresa: "",
   NombreComercial: "",
   Direccion: "",
   TelefonoFax: "",
   Celular: "",
   CorreoElectronico: "",
   RTN: "",
   NombreRepresentante: "",
   NombreSubgerente: "",
   NombreContador: "",
   denominacion: {},
   NombreSocios: "",
   NumeroEscritura: 0,
   FechaConstitucion: new Date(),
   TomoMercantil: 0,
   FechaMercantil: new Date(),
   LugarDeclaracion: "",
   NumeroEmpleados: 0,
   ActividadEmpresarial: "",
   CapitalMaximo: 0,
   sector_desempenos: [],
   FOLIO: 0,
   categoria:{},
   PagoAfiliacion: 0,
   CuotaMensual: 0,
   Ramas:[]
  }
 }
 const {
  Activo,
  tipo_tramite,
  filial,
  NombreEmpresa,
  NombreComercial,
  Direccion,
  TelefonoFax,
  Celular,
  CorreoElectronico,
  RTN,
  Rama,
  Clasificacion,
  NombreRepresentante,
  NombreSubgerente,
  NombreContador,
  denominacion,
  NombreSocios,
  NumeroEscritura,
  FechaConstitucion,
  RegistroMercantil,
  TomoMercantil,
  FechaMercantil,
  LugarDeclaracion,
  NumeroEmpleados,
  ActividadEmpresarial,
  CapitalMaximo,
  sector_desempenos,
  NumeroRegistro,
  FOLIO,
  TOMO,
  categoria,
  PagoAfiliacion,
  CuotaMensual,
  ramas,
  createdAt
 } = company

 const Company: Empresa = {
  id,
  documentId,
  Activo,
    tipo_tramite: getStrapiRelation(tipo_tramite)?.Tipo,
    filial: getStrapiRelation(filial)?.Filial,
  NombreEmpresa,
  NombreComercial,
  Direccion,
  TelefonoFax,
  Celular,
  CorreoElectronico,
  RTN,
  Clasificacion,
  NombreRepresentante,
  NombreSubgerente,
  NombreContador,
    denominacion: getStrapiRelation(denominacion)?.Denominacion,
  NombreSocios,
  NumeroEscritura,
  FechaConstitucion,
  RegistroMercantil,
  TomoMercantil,
  FechaMercantil,
  LugarDeclaracion,
  NumeroEmpleados,
  ActividadEmpresarial,
  CapitalMaximo,
    sector_desempenos: getStrapiRelations(sector_desempenos).map((sector) => sector.Sector),
  NumeroRegistro,
  FOLIO,
  TOMO,
    categoria: getStrapiRelation(categoria)?.Categoria,
  PagoAfiliacion,
  CuotaMensual,
    Ramas: getStrapiRelations(ramas).map((rama) => rama.rama),
 }
 return Company
}


export const TiposTramiteMap = (data: any): TipoTramite[] => {
 return getStrapiCollection(data).map((item) => TipoTramiteMap(item.id, item.documentId, item));
}

export const TipoTramiteMap = (id: number, documentId: string, attributes: any): TipoTramite =>{
 const {Tipo} = unwrapStrapiAttributes(attributes) ?? {};
 const data: TipoTramite = {
  id,
  documentId,
  Tipo
 }
 return data
}


export const CategoriasMap = (data: any): Categoria[] => {
 return getStrapiCollection(data).map((item) => CategoriaMap(item.id, item.documentId, item));
}

export const CategoriaMap = (id: number, documentId: string, attributes: any): Categoria =>{
 const {Categoria} = unwrapStrapiAttributes(attributes) ?? {};
 const data: Categoria = {
  id,
  documentId,
  Categoria
 }
 return data
}

export const FilialesMap = (data: any): Filial[] => {
 return getStrapiCollection(data).map((item) => FilialMap(item.id, item.documentId, item));
}

export const FilialMap = (id: number, documentId: string, attributes: any): Filial =>{
 const {Filial} = unwrapStrapiAttributes(attributes) ?? {};
 const data: Filial = {
  id,
  documentId,
  Filial
 }
 return data
}

export const DenominacionesMap = (data: any): Denominacion[] => {
 return getStrapiCollection(data).map((item) => DenominacionMap(item.id, item.documentId, item));
}

export const DenominacionMap = (id: number, documentId: string, attributes: any): Denominacion =>{
 const {Denominacion} = unwrapStrapiAttributes(attributes) ?? {};
 const data: Denominacion = {
  id,
  documentId,
  Denominacion
 }
 return data
}

export const SectoresDesempenoMap = (data: any): SectorDesempeno[] => {
 return getStrapiCollection(data).map((item) => SectorDesempenoMap(item.id, item.documentId, item));
}

export const SectorDesempenoMap = (id: number, documentId: string, attributes: any): SectorDesempeno =>{
 const {Sector} = unwrapStrapiAttributes(attributes) ?? {};
 const data: SectorDesempeno = {
  id,
  documentId,
  Sector
 }
 return data
}