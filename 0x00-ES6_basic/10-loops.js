export default function appendToEachArrayValue(array, appendString) {
  const newArray = [];

  /* eslint-disable-next-line no-unused-vars */
  for (value of array.entries()) {
    newArray.push(appendString + value);
  }

  return newArray;
}
