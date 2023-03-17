{
  const array = [1, 2, 3];
  console.log(array); // [1,2,3]
}

{
  const array = new Array(1, 2); // if more than one argument, they are treated as the values of the array
  console.log(array); // [1,2,3]
}

{
  const array = new Array(3); // if only one argument, it is treated as the length of the array

  console.log(array); // [<3 empty items>]

  // by default filled with empty items // basically length is set to 3 and the values are undefined

  console.log(array[0] === undefined); // true

  // Array.fill is a mutating method that mutates the underlying array and fills it

  array.fill("filled value");

  console.log(array);
}

{
  // these hacks are not recommended but good to know
  const array = [1, 2, 3];

  array.length = 10; // this pads the array with empty items (undefined) if the actual length is less than assigned length

  console.log(array);

  array.length = 2; // this truncates the array if the actual length is greater than the given length

  console.log(array);
}

// ARRAY SPLICE

{
  {
    const array = [1, 2, 3];

    // array splice takes an index, and the number of elements to remove
    array.splice(1, 2);

    console.log(array); // [1]
  }

  {
    const array = [1, 2, 3];
    // can also replace the removed elements
    array.splice(1, 2, "hello", "world");

    console.log(array); // [1,'hello','world']
  }

  {
    const array = [1, 2, 3];
    // there need not be enough replacements
    array.splice(1, 2, "hello");

    console.log(array); // [1,'hello'] // 2 items were removed, one got added
  }

  {
    const array = [1, 2, 3];
    // there need not be enough replacements
    array.splice(1, 2, "hello");

    console.log(array); // [1,'hello'] // 2 items were removed, one got added
  }

  {
    const array = [1, 2, 3];
    // we can also use this to add elements at an index, adding replacements without actually removing any elements
    array.splice(1, 0, "hello", "world");

    console.log(array); // [1,'hello','world', 2 , 3]
  }
}

// ARRAY SLICE
console.log("array slice");

{
  const array = [1, 2, 3, 4, 5, 6, 7];

  // array slice takes two arguments, starting index and ending index
  // returns a new array, not a mutating method
  // ending index is not included
  const slice = array.slice(1, 5);

  //                      index:  [ 1, 2, 3, 4]
  console.log(slice); //  values  [ 2, 3, 4, 5]
}
