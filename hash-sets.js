// hash sets are hash maps with the key and the value being the same

const set = new Set(["one", "two", "three"]); // set values are unique

console.log(set);
// refer hash maps as most of the apis work the same

// adding a new value
set.add("four"); // four gets added
set.add("one"); // one is skipped as it is already added

// checking if a value is in the set

console.log(set.has("four")); // true
console.log(set.has("five")); //five

// deleting a value
set.delete("three");

// getting set size

console.log(set.size);

// keys,values,entries return an iterator
// keys and values return the same sequence of keys
// only need to use set.keys with sets

const keys = set.keys();

console.log(keys);

const values = set.values();

console.log(values);

// entries return key value pairs but in a set, both key and value are the same.
// so this is not really needed or useful.
const entries = set.entries();

console.log(entries); //

//only value here is useful.
set.forEach((value, value2, set) => {
  console.log(value, value2); //both value and value2 are the same
});

// clearing a set
set.clear();

console.log(set.size);
