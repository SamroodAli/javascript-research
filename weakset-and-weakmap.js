// weakset works like a set but the keys are objects
// a  weakset is a data structure that can only hold keys as objects but does
//  not prevent the object from being garbage collected.
// when the key is garbage collected, it is automatically removed from the weakset as well

const weakSet = new WeakSet();

const obj = {};

weakSet.add(obj);

weakSet.has(obj); // true because obj is not yet garbage collected

(function () {
  const newObject = {};

  weakSet.add(newObject);
})(); // here newObject would be garbage collected since it is no longer referenced anywhere else and also removed from the weakset

// there's only three apis in weakset
weakSet.add(obj);
weakSet.delete(obj);
console.log(weakSet.has(obj));

/** Weak map */

// weakmap works the same way except the value can be of any type.
// Keys are still objects that can be garbage collected

const weakMap = new WeakMap();

// weakmap has an extra api weakmap.get, else it is the same

weakMap.set(obj, "someValue"); // when obj goes out of scope, it is removed from weakMap
weakMap.get(obj);
weakMap.delete(obj);
console.log(weakMap.has(obj));
