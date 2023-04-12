let target = {
  id: 1,
};

let proxy = new Proxy(target, {
  get(target, prop) {
    if (prop === "keys") {
      return Object.keys(target);
    } else {
      return Reflect.get(target, prop);
    }
  },
});
