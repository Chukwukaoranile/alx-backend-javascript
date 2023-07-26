export default function appendToEachArrayValue(array, appendString) {
  const loop_Array = [];
  for (const value of array) {
    loop_Array.push(appendString + value);
  }

  return loop_Array;
