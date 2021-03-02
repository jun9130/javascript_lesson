const today = new Date(); //変数(インスタンス化)
      days = ['日', '月', '火', '水', '木', '金', '土']

let outputText = '今は';
outputText +=  `${today.getFullYear()}年`
outputText +=  `${today.getMonth() + 1}月`
outputText +=  `${today.getDate()}日`
outputText +=  ` ${today.getHours()}時`
outputText +=  `${today.getMinutes()}分`
outputText +=  `${today.getSeconds()}秒`
outputText +=  `${today.getMilliseconds()}ミリ秒`
outputText +=  ` ${days[today.getDay()]}曜日`

console.log(today)
console.log(today.getFullYear())
console.log(today.getMonth() + 1)
console.log(today.getDate())
console.log(today.getHours())
console.log(today.getMinutes())
console.log(today.getSeconds())
console.log(today.getMilliseconds())
console.log(days[today.getDay()])
outputText += 'です。'

document.getElementById('date').textContent = outputText