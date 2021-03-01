const today = new Date(); //インスタンス化

const string = Date();
console.log(string === today);

// // new Date(year, monthIndex [, day [, hours [, minutes [, seconds [, milliseconds]]]]])


let birthday = new Date('December 17, 1995 03:24:00')
let birthday2 = new Date('1995-12-17T03:24:00')
let birthday3 = new Date(1995, 11, 17)            // the month is 0-indexed
let birthday4 = new Date(1995, 11, 17, 3, 24, 0)

console.log(birthday);
console.log(birthday2);
console.log(birthday3);
console.log(birthday4);