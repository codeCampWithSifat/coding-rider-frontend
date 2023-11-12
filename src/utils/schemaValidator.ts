export const getErrorMessageByPropertyName = (
  obj: Record<string, any>,
  propertyPath: string
) => {
  // let obj = errors
  // propertyPath = admin.name.firstName
  // propertyPath = admin.name.lastName
  // propertyPath = admin.name.middleName
  const properties = propertyPath.split(".");
  // ["admin", 'name', 'firstName']
  let value = obj;
  for (let prop of properties) {
    if (value[prop]) {
      value = value[prop];
    } else {
      return undefined;
    }
  }

  return value.message;
};
