// null coalescing only works if the value is null or undefined. nothing else

console.log("" ?? 2); // ''
console.log(undefined ?? "defaultValue");
console.log(null ?? "defaultValue");

console.log(null ?? undefined); // undefined
console.log(undefined ?? null); // null

// so basically, if left hand side is null or undefined, return right hand side
