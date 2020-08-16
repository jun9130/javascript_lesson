const obj = {
  "a": 1,
  "b": 2,
  "c": 3
};

Object.keys(obj).forEach(key => {
  const value = obj[key];
  console.log(`key:${key}, value:${value}`);
});