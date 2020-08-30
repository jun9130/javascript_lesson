function isTweetable(text) {
  return text.length <= 5;
}
console.log(isTweetable("foo")); //true
console.log(isTweetable("fooooo")); //false
