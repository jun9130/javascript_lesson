const randomNumber = Math.random(); //0~1未満の数値をランダムで生成
const jyanken = ['グー', 'チョキ', 'パー']
const jyankenRandom = Math.floor(randomNumber * jyanken.length );

document.getElementById('test').textContent = jyanken[jyankenRandom];
//じゃんけん
