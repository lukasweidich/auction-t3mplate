export const prettyPrintErrorArray = (errorArray) => {
  return errorArray.map((error) => (error = error.LongMessage)).join(" ");
};

export const prettyPrintErrorObject = (errorObject) => {
  const {
    error: { message },
  } = errorObject;
  return message;
};
