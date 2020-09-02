// function 高階関数(コールバック関数) {
//   コールバック関数();
// }

function unfloow() {
  console.log('フォローを外しました');
}

const cancelTweet = function cancelTweet() {
  console.log('ツイートをキャンセルしました')
}

function confirmed(fn) {
  if(window.confirm("実行しますか?")) {
    fn();
  }
}

confirmed(unfloow);

// const unfollow = function () {
//   console.log('フォローを外しました');
// }

// const cancelTweet = function () {
//   console.log('ツイートをキャンセルしました')
// }

// function confirmed(fn) {
//   if(window.confirm("実行しますか?")) {
//     fn();
//   }
// }

// confirmed(cancelTweet);