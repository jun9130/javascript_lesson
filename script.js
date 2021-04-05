const item = {
  name: "パソコン",
  price: 100000,
  sale: true,
  parts: ["CPU", "メモリ", "HDD"],
  a: {
    b: "テスト"
  }
}

document.getElementById("name").textContent = `商品名は${item["name"]}です。`
document.getElementById("price").textContent = `値段は${item.price}円です。`

// item.sale = false;

if (item.sale)
document.getElementById("sale").textContent = `${item.name}はセール中です.
`

let texts = "";
for (let i = 0; i < item.parts.length; i++ ) {
  texts += item.parts[i] + " ";
}
document.getElementById("parts").textContent = `${item.name}のパーツは${texts}です.`

document.getElementById("test").textContent = item["a"]["b"];

console.log(item);
console.table(item);
