const randomNumber = Math.random(); //0~1未満の数値をランダムで生成
document.getElementById('test').textContent = `今日のラッキーナンバーは${Math.floor(randomNumber * 5 + 1)}`;


// const output = document.getElementById('output');
// output.textContent = randomNumber;

const omikuji = ['大吉', '吉', '凶'];
const omikujiRandomNumber = Math.floor(Math.random() * omikuji.length)
document.getElementById('omikuji').textContent = omikuji[omikujiRandomNumber];

//じゃんけん