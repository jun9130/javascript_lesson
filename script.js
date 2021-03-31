const zip_pattern = /^\d{3}-?\d{4}/g;
let zip = '123-4567';

if (zip_pattern.test(zip) === true) {
  console.log("正しく入力されました");
} else {
  console.log("郵便番号は xxx-xxxxの書式で入力してください");
}
