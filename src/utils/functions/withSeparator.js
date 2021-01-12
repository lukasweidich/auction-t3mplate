const withSeparator = (inputArray, separator) =>
  inputArray.reduce((prev, curr) => [prev, separator, curr]);

export default withSeparator;
