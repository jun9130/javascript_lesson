const date = new Date(); // 今日
const year = date.getFullYear(); // 今年
const month = date.getMonth() + 1; // 今月
const firstDay = new Date(year, month - 1, 1); // 今月の一日
const lastDay = new Date(year, month, 0); // 今月が何日まであるか
const firstDayWeek = firstDay.getDay(); // 今月の一日の曜日
const lastDayCount = lastDay.getDate(); // 今月の末日
const weeks = ['日', '月', '火', '水', '木', '金', '土']




console.log(`${month}月`);
console.log(firstDay);
console.log(lastDay);
console.log(`今月は${lastDayCount}日まで`);
console.log(weeks[firstDayWeek]);



// let dayCount = 1 // 日にちのカウント
let calendarHtml = '' // HTMLを組み立てる変数

calendarHtml += `<h1>${year}/${month}</h1>`
console.log(calendarHtml);

calendarHtml += '<table>'

console.log(calendarHtml);

// // 曜日の行を作成
// for (let i = 0; i < weeks.length; i++) {
//     calendarHtml += '<td>' + weeks[i] + '</td>'
// }









// for (let w = 0; w < 6; w++) {
//     calendarHtml += '<tr>'

//     for (let d = 0; d < 7; d++) {
//         if (w == 0 && d < startDay) {
//             // 1行目で1日の曜日の前
//             calendarHtml += '<td></td>'
//         } else if (dayCount > endDayCount) {
//             // 末尾の日数を超えた
//             calendarHtml += '<td></td>'
//         } else {
//             calendarHtml += '<td>' + dayCount + '</td>'
//             dayCount++
//         }
//     }
//     calendarHtml += '</tr>'
// }
// calendarHtml += '</table>'

// document.querySelector('#calendar').innerHTML = calendarHtml