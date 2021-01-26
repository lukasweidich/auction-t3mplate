export const prettyPrintErrorArray = (errorArray) => {
  return errorArray.map((error) => (error = error.LongMessage)).join(" ");
};

export const prettyPrintErrorObject = (errorObject) => {
  const {
    error: { message },
  } = errorObject;
  return message;
};

export const capitalizeFirstLetter = (string) =>
  string.charAt(0).toUpperCase() + string.slice(1);
