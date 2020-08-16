const languages = {
  ja: '日本語',
  en: '英語'
};
//分割代入で定義
const {ja, en} = languages;
console.log(ja);
console.log(en);


const obj = {};
obj.key = 'value'; 
obj.age = 22;
const {key, age} = obj;
console.log(key);
console.log(age);

delete obj.age;
console.log(obj);


