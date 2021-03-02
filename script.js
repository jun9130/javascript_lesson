const today = new Date(); //変数(インスタンス化)
      days = ['日', '月', '火', '水', '木', '金', '土']


function outputDate(date) {
  let outputText =  `${date.getFullYear()}年`
  outputText +=  `${date.getMonth() + 1}月`
  outputText +=  `${date.getDate()}日`
  outputText +=  ` ${date.getHours()}時`
  outputText +=  `${date.getMinutes()}分`
  outputText +=  `${date.getSeconds()}秒`
  outputText +=  `${date.getMilliseconds()}ミリ秒`
  outputText +=  ` ${days[date.getDay()]}曜日`
  return outputText;
}


console.log(today)
console.log(today.getFullYear())
console.log(today.getMonth() + 1)
console.log(today.getDate())
console.log(today.getHours())
console.log(today.getMinutes())
console.log(today.getSeconds())
console.log(today.getMilliseconds())
console.log(days[today.getDay()])


document.getElementById('date').textContent = `今は${outputDate(today)}`

const targetDate = new Date(2021, 7 - 1, 23);
console.log(Math.ceil((targetDate - today) / (1000 * 60 * 60 * 24) )) ;


today.setDate(today.getDate() + 1);
document.getElementById('tomorrow').textContent = `明日の今は${outputDate(today)}`

document.getElementById('countDown').textContent = `あと${Math.ceil((targetDate - today) / (1000 * 60 * 60 * 24) )} 日`

