const array = [
  1,
  NaN,
  undefined,
  null,
  2.3,
  "7",
  "",
  false,
  "-2",
  "-3",
  "This is a good day",
  " ",
  { value: 20 },
  {},
  "to validate a test case.",
  [],
  true,
  2.9,
  "0",
  [1, 2, 3],
];

function getSum() {
  /**
   * - remove all the values which are not numbers in the array.
   * - add all the valid numbers after rounding off the values to the nearest integer.
   * - numbers can be stored as strings as well, so consider a string as a number if it is a valid number.
   * - return the sum of all the integers.
   */

  return array.reduce((sum, curr) => {
    const value = cleanUpValue(curr);
    return sum + value;
  }, 0);
}

function cleanUpValue(value) {
  // const number = Number(value);
  // if(Number.isNaN(number)){
  //   return 0
  // }

  // handling undefined and null
  if (value === undefined || value === null) return 0;

  // handling NaN
  if (Number.isNaN(value)) return 0;

  // handling strings
  if (typeof value === "string") {
    const maybeNumber = parseInt(value);
    if (Number.isNaN(maybeNumber)) return 0;
    return Math.round(maybeNumber);
  }

  // handling arrays and objects
  if (typeof value === "object") {
    return 0;
  }

  // handling booleans
  if (value === true || value === false) {
    return 0;
  }

  // handling numbers
  const maybeNumber = Number(value);

  if (Number.isNaN(maybeNumber)) return 0;

  return Math.round(maybeNumber);
}

function cleanUpString(value) {
  if (typeof value === "string") {
    const maybeNumber = Number(value);
    if (!Number.isNaN(maybeNumber)) return "";
    return String(value);
  }

  if (value === undefined || value === null) return "";

  if (Number.isNaN(value)) return "";

  if (typeof value === "object") return "";

  if (value === true || value === false) return "";
}

function getString() {
  /**
   * - remove any invalid string (i.e, objects, arrays, numbers, etc.).
   * - you should also consider a number as string to be invalid.
   * - trimmed empty strings are invalid as well.
   * - return the concatenated string formed by all the strings, joined by a whitespace.
   */

  return array.reduce((result, curr) => {
    const value = cleanUpString(curr);

    return result + value;
  }, "");
}

module.exports = {
  getSum,
  getString,
};

getString();

// cleanUpString("this is a good day");
