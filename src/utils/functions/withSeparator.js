const withSeparator = (inputArray, separator) =>
  inputArray.reduce((prev, curr) => [prev, <span>{separator}</span>, curr]);

export default withSeparator;
