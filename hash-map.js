const map = new Map();

// adding values

map.set("foo", "bar");
map.set(10, "buzz");

const symbol = Symbol("key");

map.set(symbol, "value for a symbol as key");

map.set(Symbol.for("keyOne"), "value for a universal symbol as key");

const fn = (x) => x + 1;

map.set(fn, "addOne");

map.set("addOne", fn);

const obj = {};

map.set(obj, "value for some object as key");

// getting values

console.log(map.get(obj));
console.log(map.get(fn));
console.log(map.get(symbol));

console.log(map.get(Symbol.for("keyOne")));

// deleting from the hash map

map.delete(obj);

// check if a value exists
console.log(map.has(obj)); // false as it was just deleted
console.log(map.has(fn)); // true

// getting the keys from the hash map

const keys = map.keys();

// getting the values from the hash map

const values = map.values();

// getting both keys and values
const entries = map.entries();

// keys,values and entries return an iterator

console.log(keys.next());

for (const key of keys) {
  console.log("key", key);
}

for (const value of values) {
  console.log("value", value);
}

for (const [key, value] of entries) {
  console.log(key, value, "key-value pair");
}

// iterating with forEach

// no idea why value comes first
map.forEach((value, key, map) => {
  console.log(key, value);
});

// for of loop with map

for (const [key, value] of map) {
  console.log(key, value);
}

// get map size
console.log(map.size);

// clear the hash map
map.clear();

console.log(map.size); // 0
