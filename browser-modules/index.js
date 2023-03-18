import { bar, foo } from "./util.js"; // need the file extension since the browser will otherwise check for ./util

foo();

bar();

const someCondition = true;

if (someCondition) {
  // top level await is available
  const { default: Service } = await import("./Service.js");
  // only use this in certain cases as this does not offer tree shaking and cannot benefit from static analysis tools
  //read more here https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/import
  console.log();
  new Service();
}
