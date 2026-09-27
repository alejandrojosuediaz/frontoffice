type StrapiValue = Record<string, any> | null | undefined;

export const unwrapStrapiData = (value: StrapiValue): any =>
  value?.data ?? value;

export const unwrapStrapiAttributes = (value: StrapiValue): any =>
  value?.attributes ?? value;

export const getStrapiRelation = (value: StrapiValue): any =>
  unwrapStrapiAttributes(unwrapStrapiData(value));

export const getStrapiRelations = (value: StrapiValue): any[] => {
  const relations = unwrapStrapiData(value);
  if (!Array.isArray(relations)) return [];

  return relations.map(unwrapStrapiAttributes);
};

export const getStrapiCollection = (value: StrapiValue): any[] => {
  const collection = unwrapStrapiData(value);
  return Array.isArray(collection) ? collection : [];
};