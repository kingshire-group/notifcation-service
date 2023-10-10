import httpStatus from "http-status";
// import APIError from "../errors/APIError";

// eslint-disable-next-line import/prefer-default-export
export const getPaginationValues = (pageNo: string, size: string) => {
  const page = Number.parseInt(pageNo || "1", 10);
  const limit = Number.parseInt(size || "10", 10);

  const skip = limit * (page - 1);

  return { limit, skip };
};

// export const APIErrorHandlerFunction = (
//   message: string,
//   status = httpStatus.NOT_FOUND
// ) => new APIError(message, status, true);

/**
 * Provided an object of string constants it returns all values as an array to be used as an enum
 * @param {{}} typesObject an object of types constant
 * @param {string} valueKey if value of key is an object pass in the value key
 */
export const generateEnumArrayFromObject = (
  typesObject: any,
  valueKey?: string
) => {
  const enumArray = [];
  if (typeof typesObject === "object") {
    const keys = Object.keys(typesObject);
    // use for loop to make syncronous
    for (let index = 0; index < keys.length; index += 1) {
      const value = typesObject[keys[index]];

      if (value) {
        const valueToBeAdded = valueKey ? value[valueKey] : value;
        enumArray.push(valueToBeAdded);
      }
    }
  }

  return enumArray;
};

export const isBoolean = (value: any) => typeof value === "boolean";
