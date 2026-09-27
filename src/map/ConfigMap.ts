import { unwrapStrapiAttributes, unwrapStrapiData } from "../util/strapiResponse";

export const ConfigMap = (attributes: any): {
  Telefonos: string,
  Director: string,
  Direccion: string,
  CorreosElectronicos: string,
  Website: string
} => {
  const config = unwrapStrapiAttributes(unwrapStrapiData(attributes)) ?? {};
  return {
    Telefonos: config.Telefonos, Director: config.Director,
        Direccion: config.Direccion,
        CorreosElectronicos: config.CorreosElectronicos,
        Website: config.Website,
  }
}